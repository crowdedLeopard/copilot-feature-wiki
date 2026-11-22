---
title: "Microsoft Purview Insider Risk Management: launch a Data Security Investigation from a case"
slug: "microsoft-purview-compliance-portal-insider-risk-management-data-security-investigations-i"
roadmapId: 501781
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let admins open a pre-scoped Data Security Investigation from an Insider Risk Management case in GCC, GCC High and DoD, targeted December CY2027. It bills by storage and AI compute; nothing to do yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2027"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says Data Security Investigations billing is based on stored data and AI compute capacity, not on a dedicated enterprise plan or licence. Rates for government clouds are not yet published."
audiences: ["security","compliance","finops"]
tags: ["insider-risk-management","data-security-investigations","purview","pay-as-you-go","ai","auditing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 501781"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501781"
    kind: "roadmap"
  - title: "Learn about Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations"
    kind: "learn"
  - title: "Create an investigation in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-investigation"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Get started with Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-get-started"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments"
    kind: "learn"
videos: []
related: ["insider-risk-management","auditing","microsoft-purview-insider-risk-management-irm-alerts-in-xdr","microsoft-purview-insider-risk-management-unified-alert-queue","microsoft-purview-dspm-new-microsoft-purview-data-security-posture-management-experience"]
controls:
  - governs: "Who can launch an investigation from an IRM case"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Learn lists the Insider Risk Management and Insider Risk Management Investigator roles for creating an investigation from a case."
  - governs: "Who administers Data Security Investigations and can configure AI capacity"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Generic role group cmdlet; its reference does not name Data Security Investigations groups."
  - governs: "AI capacity set-up for Data Security Investigations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Setup tasks > Set up AI capacity"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Needs the Data Security Investigations Admins role group for AI capacity; storage meter set-up needs Global Administrator and an Azure subscription."
  - governs: "Storage and compute unit spend per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Dashboard data can take up to 48 hours to appear. Azure budgets and alerts are described on the same page."
  - governs: "Audit trail of Data Security Investigations activity"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Run the cmdlet in Exchange Online PowerShell. Portal searches require Audit Logs or View-Only Audit Logs in the Microsoft Purview portal; audit cmdlets require one of those roles in the Exchange admin center."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-22"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-21"
    note: "New briefing: Insider Risk Management case launch of Data Security Investigations, planned for GCC, GCC High and DoD, with billing, roles and audit controls."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 82 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: audit role requirements, Data Security Investigations role inheritance, usage dashboard access, and checklist items without a matching control row."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 80
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "71ebfd75c9070e670629c0d0fc750783"
---

## What's changing

The roadmap item describes launching a pre-scoped Data Security Investigation (DSI) from an Insider Risk Management (IRM) case. When a data security admin identifies a risky user who needs deeper investigation, they can open an investigation from the case, view content analysis related to that user and assess the data impact after an incident. The record lists General Availability, the Web platform and the GCC, GCC High and DoD clouds. Its status is In development with a target of December CY2027, which is a Microsoft target and not a commitment.

Microsoft Learn already documents an integration of this kind, without marking it for a particular cloud. In the Microsoft Purview portal, an investigator goes to Insider Risk Management > Cases, selects a case, selects Case actions and then Investigate data security with AI. The dialog asks for a name, an optional description, the investigation scope (the items from the case to include) and additional context for AI. The items included in the case become data sources of the new investigation. Learn says that if you add the shared items to the investigation scope, processing starts automatically, and that before this you can review preliminary insights and decide whether the content needs further analysis before committing compute resources or charges.

Learn also warns that an investigation created from an IRM case that contains more than approximately 3,000 items might not return complete results. The Learn pages for Data Security Investigations do not state which clouds they cover, and the GCC deployments planning page for Purview lists no Data Security Investigations entry in its feature table at the time of writing (November 2026). What follows about behaviour in GCC, GCC High and DoD is therefore the roadmap's description plus the Learn procedure, which should be confirmed for those clouds when the item ships.

## Why it matters

Learn describes the gap this closes: IRM investigators might not have important insights into the content contained in files associated with risky alerts. The integration moves that content review into a separate, billed AI workload. For a service owner it adds a second solution to govern (role groups, an Azure subscription for billing, an audit trail) to an IRM deployment.

Microsoft has not stated what happens on arrival, so no source says existing IRM behaviour changes for government tenants. The decisions to make early are who may launch investigations from cases, who owns the Azure billing relationship, and whether government-cloud billing is available at all.

## Risk assessment

**Data exposure**

- Case items become data sources of the new investigation, and adding them to scope starts automatic processing for AI analysis. The reach of the analysis is the scope the investigator chooses in the Investigation scope field, so scope choice is the main data control; keep it narrow.
- The roadmap says IRM pseudonymises users by default. Whether that carries into the investigation created from a case is not described on the pages read, so confirm it before investigators work cases.

**Security & identity**

- Members of the Insider Risk Management role group get Data Security Investigation Contributor access automatically. Learn says this role can create and manage investigations the member owns or belongs to, and does not include access to data storage, AI job execution or the Pay-as-you-go usage dashboard. Review IRM role group membership (first controls row) before the feature arrives.
- Global Administrators need Data Security Investigations permissions to create and access investigations; administrative access can also be inherited through the Compliance Administrator or Organization Management role groups.
- Data Security Investigations activities are automatically logged in the unified audit log, so launches and later actions can be reviewed (audit row in the table).

**Autonomy & actions**

- AI categorisation, vector search and examination are run by analysts. Learn also documents soft purge and hard purge options in Data Security Investigations to remove or permanently delete items from data sources, so an investigation started from a case can lead to deletion. Decide who may use them.

**Change & support**

- Billing must be configured before anyone can use the solution. Investigators who find the action unavailable or unbilled will raise it with the Global Administrator who holds the Azure setup.
- Stopping billing deletes all investigations, so a billing change made during an incident can remove case work.

## Cost and licensing

**Licence.** The Learn billing page says billing is based solely on the amount of stored data and the computing capacity needed for AI analysis, and that it is not based on a dedicated enterprise plan or licence. The roadmap item names no licence.

**Meters.** The storage meter is pay-as-you-go, charged per gigabyte per month for data stored for all investigations in the organisation and prorated by day. Deleting an investigation in the same 24-hour period it was created still incurs the storage charge. AI analysis uses compute units, also pay-as-you-go. Learn says you are not billed for failed compute unit operations but are billed for partial completions. The charge is made through the Azure subscription and resource group linked during set-up.

**Controls on spend.** Learn recommends the in-product cost estimator and Azure budgets and alerts for the Data Security Investigations resource group and meter. The page describes alerts and budgets; it does not say that use stops at a threshold, so treat them as warnings. Deleting an investigation stops its storage charge. Staff time to set up roles and billing is an indirect cost.

**Not yet published.** Storage rates are on the Azure pricing page the billing page links to. Whether this billing applies in GCC, GCC High and DoD, and at what rates, is not yet published on the pages read.

## Scope

**Clouds and platform.** The roadmap record lists GCC, GCC High and DoD, the Web platform and General Availability. Learn does not state cloud availability for Data Security Investigations, and Microsoft has not published government-cloud availability on the pages read.

**Who can launch.** Learn says creating an investigation from an IRM case needs at least one of the Insider Risk Management or Insider Risk Management Investigator roles. The Insider Risk Management role group also receives Data Security Investigation Contributor access.

**Prerequisites.** Learn says billing must be configured before use: an Azure subscription in the same tenant as Microsoft Purview, a resource group in it, the Global Administrator role, and the Owner or Contributor role on the resource group. Configuring AI capacity needs membership of the Data Security Investigations Admins role group.

**Rollout.** The record gives only the December CY2027 target. No release channel or phased rollout is described.

## Governance guidance

### Before rollout

- Review membership of the Insider Risk Management role group and the Insider Risk Management Investigator role, since these decide who can launch an investigation from a case.
- Identify the Azure subscription, resource group and the Global Administrator and Owner or Contributor holders needed for billing set-up.
- Watch Message center and roadmap item 501781 for the government-cloud rollout date rather than assuming the commercial Learn procedure applies.

### At rollout

- Assign at least one user to the Data Security Investigations Admins role group so configuration does not depend on a single Global Administrator.
- Configure the storage meter and AI capacity, choosing the AI analysis data processing location.
- Brief investigators to keep the investigation scope narrow and to stay below roughly 3,000 items per case-based investigation.

### After rollout

- Check the Pay-as-you-go usage dashboard for storage and compute unit use per investigation.
- Search the unified audit log for Data Security Investigations activities to review who launched and acted on investigations.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can launch an investigation from an IRM case</strong><br><small>Group</small><br><small class="controls__note">Learn lists the Insider Risk Management and Insider Risk Management Investigator roles for creating an investigation from a case.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who administers Data Security Investigations and can configure AI capacity</strong><br><small>Group</small><br><small class="controls__note">Generic role group cmdlet; its reference does not name Data Security Investigations groups.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Data Security Investigations Admins › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>AI capacity set-up for Data Security Investigations</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Data Security Investigations Admins role group for AI capacity; storage meter set-up needs Global Administrator and an Azure subscription.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Setup tasks › Set up AI capacity <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Storage and compute unit spend per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Dashboard data can take up to 48 hours to appear. Azure budgets and alerts are described on the same page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit trail of Data Security Investigations activity</strong><br><small>Tenant</small><br><small class="controls__note">Run the cmdlet in Exchange Online PowerShell. Portal searches require Audit Logs or View-Only Audit Logs in the Microsoft Purview portal; audit cmdlets require one of those roles in the Exchange admin center.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Launching from a case is governed by role membership: the IRM roles that Learn lists for creating an investigation, and the Data Security Investigations role groups that hold the analysis permissions. Billing set-up and the usage dashboard are in the Data Security Investigations area of the Microsoft Purview portal. Configuring AI capacity requires membership of the Data Security Investigations Admins role group. Viewing the usage dashboard requires the Data Security Investigations Admin role, which can also be inherited through Compliance Administrator or Organization Management. The role group cmdlet is the general Exchange and Security & Compliance PowerShell cmdlet for role groups; its reference does not mention Data Security Investigations groups.

## Open questions

- When will the integration reach GCC, GCC High and DoD, and will Data Security Investigations AI analysis and pay-as-you-go billing be available in those clouds? Watch roadmap item 501781, Message center and the Data Security Investigations billing page.
- Does IRM's default pseudonymisation of users carry into an investigation created from a case?
- Which storage and compute unit rates apply to government-cloud tenants?
- Will an admin setting be added to turn the launch action off without changing role membership? Watch the Data Security Investigations and IRM Learn pages.

<!-- rationale
risk: Medium. Case content is added to an AI-analysed investigation, and Learn says Insider Risk Management role group members get Data Security Investigations contributor access automatically.
cost: Variable. Data Security Investigations bills a pay-as-you-go storage meter (per GB per month) and compute units for AI analysis, not a dedicated licence.
impact: Low. Only the investigators and data security admins who work Insider Risk Management cases would see the new action; other users are unaffected.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: DSI supports soft purge to remove items from data sources. | Found: Data Security Investigations supports soft purge and hard purge options to remove or permanently delete items from data sources. | Fix: Narrow the purge sentence to 'Data Security Investigations supports soft purge for Exchange mailbox items and hard purge for Exchange mailbox items and Teams messages.' Cite https://learn.microsoft.com/purview/data-security-investigations-mitigation-actions, whose supported-data-sources table gives these qualifications. | Source: https://learn.microsoft.com/purview/data-security-investigations
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: DSI supports hard purge to permanently delete items from data sources. | Found: Data Security Investigations supports soft purge and hard purge options to remove or permanently delete items from data sources. | Fix: Add 'Both purge methods respect holds and retention policies; items subject to them cannot be permanently deleted until the hold is removed or the retention period expires.' Cite https://learn.microsoft.com/purview/data-security-investigations-mitigation-actions, which states this qualification. | Source: https://learn.microsoft.com/purview/data-security-investigations
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist's storage-meter configuration instruction has no matching control row. | Found: Checklist: Configure the storage meter and AI capacity, choosing the AI analysis data processing location. Table: AI capacity set-up for Data Security Investigations; no storage-meter setup row. | Fix: The 'Configure the storage meter' part of the At rollout checklist has no row. Narrow that bullet to 'Configure AI capacity, choosing the AI analysis data processing location.' Do not add a control row as part of this correction.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist's instruction to keep investigation scope narrow has no investigation-scope control row. | Found: Checklist: Brief investigators to keep the investigation scope narrow and to stay below roughly 3,000 items per case-based investigation. Table covers role membership, AI capacity, usage dashboard and audit, not investigation scope. | Fix: The 'keep the investigation scope narrow' checklist instruction has no row. Narrow that bullet to 'Brief investigators that investigations created from IRM cases containing more than approximately 3,000 items might return incomplete results.' Leave the existing scope advice in Risk assessment.
-->
