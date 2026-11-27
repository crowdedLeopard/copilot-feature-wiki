---
title: "Microsoft Purview Data Security Investigations: personal data examination"
slug: "microsoft-purview-data-security-investigations-introducing-new-personal-data-examination"
roadmapId: 559388
topic: "governance"
products: ["Microsoft Purview"]
summary: "Investigators can run a Personal data examination in Data Security Investigations that extracts names, account numbers and other personal data from items in an investigation. It is metered in compute units; review who can run it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's billing page says Data Security Investigations is billed on a storage meter and Data Security Investigations Compute Units, both pay-as-you-go through an Azure subscription, and not on a dedicated enterprise plan or licence. No rate specific to personal data examination is published."
audiences: ["security","compliance","finops"]
tags: ["purview","data-security-investigations","privacy","ai","pay-as-you-go","role-groups","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 559388"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559388"
    kind: "roadmap"
  - title: "Review personal data examinations in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-personal-data"
    kind: "learn"
  - title: "Use AI analysis in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-ai-analysis"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Who can run personal data examinations and see results (Data Security Investigations role-group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Audit records of examination jobs started and examination results viewed (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-security-investigations-introducing-new-custom-examination","microsoft-purview-data-security-investigations-introducing-ocr-support","microsoft-purview-data-security-investigations-ai-analysis-enhancements","role-groups","auditing"]
controls:
  - governs: "Who can run personal data examinations and see results (Data Security Investigations role-group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Admins, Investigators and Reviewers can all run examination activities. Permissions can take up to 30 minutes to apply."
  - governs: "Whether AI analysis can run, and the AI analysis data processing location"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Setup tasks > Set up AI capacity > AI analysis data processing location"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Requires the Data Security Investigations Admins role group; prerequisites list Global Administrator and resource group Owner or Contributor."
  - governs: "A separate switch for the Personal data examination focus area"
    scope: "tenant"
    ui: null
    api: null
    note: "Access follows the role groups that can run examination activities."
  - governs: "A limit on compute units an examination or investigation can consume"
    scope: "tenant"
    ui: null
    api: null
    note: "The billing page recommends Azure budgets and threshold alerts, which warn but do not stop jobs."
  - governs: "Compute unit spend on examination per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Only users assigned the Data Security Investigations Admin role; billing data can take up to 48 hours to appear. Export is available from the dashboard."
  - governs: "Audit records of examination jobs started and examination results viewed"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -Operations DSIProbeJobSubmitted,DSIProbeJobResultsViewed"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Operation names from the Data Security Investigations activities table in Audit log activities."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-05-18T22:30:51"
changes:
  - date: "2026-11-27"
    note: "New briefing: personal data examination in Data Security Investigations, its compute unit cost and the role, capacity and audit controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 78 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 75
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "fc6311b259694e8bc19368214afe8170"
---

## What's changing

Data Security Investigations (DSI, the Microsoft Purview solution for analysing content caught up in a data security incident) adds a **Personal data** examination focus area. It uses AI to identify and extract personal data from items an investigator selects in an investigation's scope, alongside the existing Credentials, Risk, Mitigation and Custom focus areas.

Microsoft Learn documents the steps: in an investigation, open **Analysis**, select one or more items, select **Examine**, and choose *Personal data: Identify and extract the personally identifiable information in selected evidence* in the **Choose a focus area** field. **Add to scope** must have completed first. For each item the results give a risk level (High, Medium or Low), whether it contains personal data, the types found, the **extracted values**, a surrounding snippet, the AI's reasoning and any errors. Microsoft's examples put SSN/National ID and bank account numbers at High, email addresses, phone numbers and medical record numbers at Medium, and full names and addresses at Low, and says the list is not comprehensive.

The roadmap item is marked Launched, in General Availability, with a target of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

This is a feature for working out who is affected by a breach, and Microsoft positions it for privacy impact assessments and breach notification decisions. The flip side is that it produces a concentrated list of the personal data found in the selected items, with the values themselves and the text around them, inside the DSI workspace. Who can produce and read that list is decided by DSI role-group membership, which many tenants set up for security analysts rather than with privacy owners in the room.

Nothing changes for tenants that have not set up DSI. Where DSI is in use, Learn documents personal data as a focus area the investigator chooses for each examination; Microsoft documents no separate switch for it. Every run consumes compute units on the organisation's Azure subscription.

## Risk assessment

**Data exposure**
- Results include each extracted personal data value and a surrounding snippet, so an investigation becomes a store of exposed personal data. Access follows the Data Security Investigations role groups (row 1).
- The examination runs only on items already added to an investigation's scope; it collects nothing new by itself.
- AI processing runs in the location chosen under **Set up AI capacity**, or anywhere with capacity if the tenant opts in, which Microsoft recommends (row 2). Check this against privacy commitments before running personal data examinations.

**Security & identity**
- The Admins, Investigators and Reviewers role groups can all run examination activities. Reviewers cannot manage scope but can examine it.
- The Data Security Investigation Contributor role (in the Data Security Management and Insider Risk Management role groups) does not include AI job execution.

**Autonomy & actions**
- No change: the examination is started by a user and reads and reports; it does not alter or move the source items.

**Change & support**
- Microsoft advises manually verifying critical findings, for example confirming that a matched number is real data and not a placeholder. Expect privacy and legal teams to ask for this before notification decisions.
- Cancelling an examination still bills the compute units used before cancellation.

## Cost and licensing

**Licence.** The [billing page](https://learn.microsoft.com/purview/data-security-investigations-billing) states that DSI billing is based on stored data and AI compute, and isn't based on a dedicated enterprise plan or licence.

**Meters.** Two pay-as-you-go meters apply, charged to the Azure subscription and resource group linked during setup:
- the storage meter, per gigabyte per month for data in all investigations;
- Data Security Investigations Compute Units for AI analysis. The billing page lists the number of files analysed as the cost variable for examination, and the [AI analysis page](https://learn.microsoft.com/purview/data-security-investigations-ai-analysis) says examination can require a significant number of compute units even for smaller amounts of data.

**Spend controls.** The billing page recommends Azure budgets for the DSI resource group and meter, alerts at thresholds such as 50%, 75% or 90%, the in-product cost estimator and the **Usage dashboard** (row 5). Budgets raise alerts; the billing page describes no compute unit limit that stops an examination (row 4).

**Not yet published.** A compute unit figure or rate specific to personal data examination. Storage rates are on Azure's Microsoft Purview pricing page, which the billing page links.

## Scope

- **Users:** members of the Data Security Investigations Admins, Investigators or Reviewers role groups, and role groups that include the Data Security Investigation Admin role (Compliance Administrator, Organization Management).
- **Prerequisites:** DSI set up with both billing models (storage meter and AI capacity), and **Add to scope** completed for the items.
- **Processing location:** Australia/New Zealand, Europe, United Kingdom or United States, chosen at setup, or anywhere if the tenant opts in.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item.
- **Platform:** web (Microsoft Purview portal).

## Governance guidance

### Before rollout
- Review membership of the Data Security Investigations Admins, Investigators and Reviewers role groups, since all three can run personal data examinations.
- Confirm the AI analysis data processing location under **Set up AI capacity** with your privacy or data protection officer.
- Agree with legal and privacy owners who may run personal data examinations and who reviews the results before notification decisions.

### At rollout
- Brief investigators that each personal data examination consumes compute units in proportion to the files analysed, and that cancelled jobs are still billed for work done.
- Tell investigators to narrow the selection with vector search or categorisation before examining, as Microsoft's steps suggest.

### After rollout
- Check the **Usage dashboard** for examination compute unit consumption per investigation.
- Search the audit log for DSIProbeJobSubmitted and DSIProbeJobResultsViewed to see who started examinations and who viewed results.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can run personal data examinations and see results (Data Security Investigations role-group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Admins, Investigators and Reviewers can all run examination activities. Permissions can take up to 30 minutes to apply.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether AI analysis can run, and the AI analysis data processing location</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Data Security Investigations Admins role group; prerequisites list Global Administrator and resource group Owner or Contributor.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Setup tasks › Set up AI capacity › AI analysis data processing location <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A separate switch for the Personal data examination focus area</strong><br><small>Tenant</small><br><small class="controls__note">Access follows the role groups that can run examination activities.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A limit on compute units an examination or investigation can consume</strong><br><small>Tenant</small><br><small class="controls__note">The billing page recommends Azure budgets and threshold alerts, which warn but do not stop jobs.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Compute unit spend on examination per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Only users assigned the Data Security Investigations Admin role; billing data can take up to 48 hours to appear. Export is available from the dashboard.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of examination jobs started and examination results viewed</strong><br><small>Tenant</small><br><small class="controls__note">Operation names from the Data Security Investigations activities table in Audit log activities.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -Operations DSIProbeJobSubmitted,DSIProbeJobResultsViewed</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns the Personal data focus area off separately from examination as a whole (November 2026); access follows the role groups. Configuring AI capacity needs membership of the Data Security Investigations Admins role group, and the billing prerequisites list the Global Administrator role and the resource group Owner or Contributor role. Only users assigned the Data Security Investigations Admin role can open the Usage dashboard, and its data can be up to 48 hours behind. The audit activity list has one operation for starting an examination job and one for viewing examination results, with no separate operation for the personal data focus area. Azure budgets alert on spend but do not stop jobs. Role group changes can take up to 30 minutes to apply. See [/concepts/role-groups/](/concepts/role-groups/) and [/concepts/auditing/](/concepts/auditing/).

## Open questions

- Will Microsoft add a setting to restrict the Personal data focus area to certain role groups? Watch the [personal data examination page](https://learn.microsoft.com/purview/data-security-investigations-personal-data).
- How many compute units does a personal data examination use compared with other focus areas? Use the in-product estimator and the Usage dashboard.
- Do the DSIProbeJobSubmitted and DSIProbeJobResultsViewed audit records show which focus area was run or viewed? Check a test record in Audit search.
- Will a compute unit limit per investigation be offered? Watch the [billing page](https://learn.microsoft.com/purview/data-security-investigations-billing).

<!-- rationale
risk: Medium. The examination extracts personal data values with surrounding text for anyone in the three Data Security Investigations role groups, Reviewers included, and Microsoft documents no compute unit limit; role groups and Azure budget alerts mostly cover it.
cost: Variable. Examinations consume Data Security Investigations Compute Units, billed pay-as-you-go to the linked Azure subscription by the number of files analysed; no licence covers it.
impact: Low. Only investigators and administrators who use Data Security Investigations see the new focus area.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] rationale: risk; Why it matters; controls[0].governs / role: Role-group membership decides who can produce and read the results, and anyone in the three DSI role groups can do so. | Found: You can add or remove users to manage who can access the investigation. You can also choose to add a role group to the investigation by selecting Add under Role groups. | Fix: Replace 'for anyone in the three Data Security Investigations role groups, Reviewers included' in the risk rationale with 'for users with examination permissions and access to the investigation, Reviewers included'. Replace 'Who can produce and read that list is decided by DSI role-group membership' with 'DSI role groups grant examination permissions; investigation membership also controls access to the investigation.' Add https://learn.microsoft.com/purview/data-security-investigations-settings-access-permissions to sources, and qualify controls[0].note with 'Investigation membership also controls access to the investigation.' Do not add a control row. | Source: https://learn.microsoft.com/purview/data-security-investigations-settings-access-permissions
- [unsupported, blocker] Governance guidance: At rollout; rationale: cost / cost: Each personal data examination consumes compute units in proportion to the number of files analysed. | Found: Searched: Data Security Investigations personal data examination compute unit price rate focus area. Read billing and AI-analysis: file count is a cost variable, while data size and examination options also influence compute; no proportional per-file rule. | Fix: Replace 'each personal data examination consumes compute units in proportion to the files analysed' with 'each personal data examination consumes compute units; the billing page lists the number of files analysed as a cost variable'. In the cost rationale replace 'by the number of files analysed' with 'for the compute units used'. The cited billing page supports these narrower statements: https://learn.microsoft.com/purview/data-security-investigations-billing.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Personal data examination does not alter or move source items. | Found: Searched: Data Security Investigations examination source original items not modified moved read only. Read personal-data, AI-analysis, application card and workflow/scope excerpts; they describe analysis and separate purge actions, not this guarantee. | Fix: Replace 'No change: the examination is started by a user and reads and reports; it does not alter or move the source items' with 'The examination is started by a user and produces personal data findings for the selected items.' The personal data page supports that narrower statement: https://learn.microsoft.com/purview/data-security-investigations-personal-data.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].note; Cost and licensing; Governance controls; rationale: risk / cost: Azure budgets alert on spend but do not themselves stop jobs or consumption. | Found: Notifications are triggered when the budget thresholds are exceeded. Resources aren't affected, and your consumption isn't stopped. | Fix: Add https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets to sources as 'Tutorial: Create and manage budgets'; it states that budget thresholds do not stop consumption. | Source: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets
-->
