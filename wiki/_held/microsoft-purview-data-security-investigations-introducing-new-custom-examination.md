---
title: "Microsoft Purview Data Security Investigations: custom examination prompts for AI analysis"
slug: "microsoft-purview-data-security-investigations-introducing-new-custom-examination"
roadmapId: 560598
topic: "governance"
products: ["Microsoft Purview"]
summary: "Investigators can now define their own examination focus area in Data Security Investigations with a natural language prompt. It runs on pay-as-you-go compute units; review who can run examinations and how spend is watched."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's billing page says Data Security Investigations is billed on a storage meter and AI capacity (compute units), both pay-as-you-go through an Azure subscription, and not on a dedicated enterprise plan or licence. No rate specific to custom examination is published."
audiences: ["security","compliance","finops"]
tags: ["purview","data-security-investigations","ai","pay-as-you-go","role-groups","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 560598"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560598"
    kind: "roadmap"
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
  - title: "Who can run examinations, including custom ones (Data Security Investigations role-group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Audit records of examination jobs started (DSIProbeJobSubmitted) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-security-investigations-introducing-ocr-support","microsoft-purview-data-security-investigations-notification-and-improved-search-capabiliti","microsoft-purview-data-security-investigations-introducing-integration-with-data-security","role-groups","auditing"]
controls:
  - governs: "Who can run examinations, including custom ones (Data Security Investigations role-group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > role group > Edit > Choose users"
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
  - governs: "A separate switch for the Custom examination type"
    scope: "tenant"
    ui: null
    api: null
    note: "Access to custom examination follows the role groups that can run examination activities."
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
    note: "Data Security Investigations Admins only; billing data can take up to 48 hours to appear. Export is available from the dashboard."
  - governs: "Audit records of examination jobs started (DSIProbeJobSubmitted)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -Operations DSIProbeJobSubmitted"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Requires the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell."
confidence: "high"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-02T23:12:48"
changes:
  - date: "2026-11-26"
    note: "New briefing: custom examination prompts in Data Security Investigations, their compute unit cost and the role, capacity and audit controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 67
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "e9b6dc36a24ec7b211779760b4e3b91d"
---

## What's changing

Data Security Investigations (DSI, the Microsoft Purview solution for analysing content caught up in a data security incident) adds a **Custom** examination type. Alongside the built-in focus areas (Credentials, Risks, Mitigation and Personal data), an investigator can describe in a natural language prompt what the AI should look for in the selected items.

Microsoft Learn documents the steps: on the investigation scope page, select one or more data items, select **Examine**, choose **Custom** as the examination type, enter a prompt of up to 2,000 characters, select **Verify prompt** to confirm the AI has understood the intent, then start the examination. Results appear in **Probing history** with the same structured output as the built-in focus areas: findings, severity, surrounding snippets and the thought process behind the assessment. A custom prompt can be edited and re-run. Microsoft's example prompts cover Protected Health Information, insider trading and intellectual property exfiltration.

The roadmap item is marked Launched, with a preview date of May CY2026 and a general availability target of June CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

Custom examination turns the AI analysis from a fixed menu into an open question. That is useful to investigators, but it means the reach of an examination is now set by whoever writes the prompt: anyone who can run examinations can ask the AI to pull, for example, health or financial details out of the selected items. Because examination cost is proportional to the data examined and each examination run, a broad custom prompt re-run several times is also a direct, metered cost on the organisation's Azure subscription.

Nothing changes for tenants that have not set up DSI. Where DSI is in use, Learn documents Custom as an examination type that the investigator chooses for each run; Microsoft documents no separate switch for it, so the controls are the existing role groups, AI capacity configuration and spend monitoring.

## Risk assessment

**Data exposure**
- The investigator's prompt decides what the AI looks for in the selected items, and results include surrounding snippets; who sees them is governed by membership of the Data Security Investigations role groups.
- Examination runs only on items already in an investigation's scope, so it reaches no data the investigation has not already collected.

**Security & identity**
- The Admins, Investigators and Reviewers role groups can all run examination activities. Reviewers cannot manage scope but can still run a custom examination on it.
- The Data Security Investigation Contributor role (in the Data Security Management and Insider Risk Management role groups) does not include AI job execution.

**Autonomy & actions**
- No change: an examination starts only when a user selects **Examine**, and the prompt is verified before it runs.

**Change & support**
- Custom examinations are metered like other examinations, and cancelling a job still bills the compute units used before cancellation. Expect questions from finance if investigators iterate on prompts.
- Probing history records the user principal name of whoever created each examination, which supports internal review.

## Cost and licensing

**Licence.** The [billing page](https://learn.microsoft.com/purview/data-security-investigations-billing) states that DSI billing is based on stored data and AI compute, and isn't based on a dedicated enterprise plan or licence.

**Meters.** Two pay-as-you-go meters apply, charged to the Azure subscription and resource group linked during setup:
- the storage meter, per gigabyte per month for data in all investigations;
- Data Security Investigations Compute Units for AI analysis. The [AI analysis page](https://learn.microsoft.com/purview/data-security-investigations-ai-analysis) says examination compute units are directly proportional to the size of the data and each examination option selected; the billing page lists the number of files analysed as the cost variable for examination.

**Spend controls.** The billing page recommends Azure budgets for the DSI resource group and meter, with alerts at thresholds such as 50%, 75% or 90%, and the in-product **Usage dashboard**. Budgets raise alerts; the billing page describes no compute unit limit that stops an examination.

**Not yet published.** A compute unit figure or rate specific to custom examination. The billing page points to Azure's Microsoft Purview pricing page for storage rates.

## Scope

- **Users:** members of the Data Security Investigations Admins, Investigators or Reviewers role groups, and role groups that include the Data Security Investigation Admin role (Compliance Administrator, Organization Management).
- **Prerequisites:** DSI must be set up with both billing models (storage meter and AI capacity), and items must be in an investigation's scope.
- **Processing location:** compute units run in the location chosen at setup (Australia/New Zealand, Europe, United Kingdom or United States), or anywhere if the tenant opts in.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item.
- **Platform:** web (Microsoft Purview portal).

## Governance guidance

### Before rollout
- Review membership of the Data Security Investigations Admins, Investigators and Reviewers role groups, since all three can run custom examinations.
- Confirm the AI analysis data processing location set under **Set up AI capacity** meets your data residency requirements.
- Create an Azure budget with alerts on the DSI resource group and meter, as the billing page recommends.
- Agree with legal or privacy owners which kinds of custom prompt (for example personal health data) need sign-off before they run.

### At rollout
- Brief investigators that each custom examination run, and each re-run after editing a prompt, consumes compute units.
- Encourage the in-product cost estimator before large examinations.

### After rollout
- Check the **Usage dashboard** for examination compute unit consumption per investigation.
- Search the audit log for DSIProbeJobSubmitted to see who started examination jobs.
- Review **Probing history** in sensitive investigations to see which prompts were run and by whom.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can run examinations, including custom ones (Data Security Investigations role-group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Admins, Investigators and Reviewers can all run examination activities. Permissions can take up to 30 minutes to apply.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether AI analysis can run, and the AI analysis data processing location</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Data Security Investigations Admins role group; prerequisites list Global Administrator and resource group Owner or Contributor.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Setup tasks › Set up AI capacity › AI analysis data processing location <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A separate switch for the Custom examination type</strong><br><small>Tenant</small><br><small class="controls__note">Access to custom examination follows the role groups that can run examination activities.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A limit on compute units an examination or investigation can consume</strong><br><small>Tenant</small><br><small class="controls__note">The billing page recommends Azure budgets and threshold alerts, which warn but do not stop jobs.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Compute unit spend on examination per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Data Security Investigations Admins only; billing data can take up to 48 hours to appear. Export is available from the dashboard.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of examination jobs started (DSIProbeJobSubmitted)</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -Operations DSIProbeJobSubmitted</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns custom examination off separately from examination as a whole (November 2026); access follows the role groups. Configuring AI capacity needs membership of the Data Security Investigations Admins role group, and the billing prerequisites list the Global Administrator role and the resource group Owner or Contributor role. Only Data Security Investigations Admins can open the Usage dashboard, and its data can be up to 48 hours behind. The audit activity list has one operation for starting an examination job, DSIProbeJobSubmitted, and lists no separate operation for custom examinations. Azure budgets alert on spend but do not stop jobs. See [/concepts/role-groups/](/concepts/role-groups/) and [/concepts/auditing/](/concepts/auditing/).

## Open questions

- Will Microsoft add a setting to restrict the Custom examination type, or limit it to certain role groups? Watch the [AI analysis page](https://learn.microsoft.com/purview/data-security-investigations-ai-analysis).
- Does the DSIProbeJobSubmitted audit record include the custom prompt text, or only the job? Check a test record in Audit search.
- How many compute units does a typical custom examination use compared with a built-in focus area? Use the in-product estimator and the Usage dashboard.
- Will a compute unit limit per investigation or per user be offered? Watch the [billing page](https://learn.microsoft.com/purview/data-security-investigations-billing).

<!-- rationale
risk: Medium. Any member of the three Data Security Investigations role groups can write their own prompt directing what the AI extracts from scoped content, and no compute unit limit is documented; role groups and Azure budget alerts mostly cover it.
cost: Variable. Examinations consume Data Security Investigations Compute Units on a pay-as-you-go Azure subscription, in proportion to the data examined; no licence covers it.
impact: Low. Only investigators and administrators who use Data Security Investigations see the new Custom examination type.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[4].note; Governance controls table and prose / role: Only members of the dedicated Data Security Investigations Admins role group can open the Usage dashboard. | Found: Members of these role groups have Data Security Investigations access without needing explicit assignment to a Data Security Investigations-specific role group. Compliance Administrator | Data Security Investigation Admin | Full administrative access | Fix: Replace 'Data Security Investigations Admins only' in controls[4].note and its table note with 'Users with the Data Security Investigation Admin role'. Replace 'Only Data Security Investigations Admins can open the Usage dashboard' in the prose with 'Users with the Data Security Investigation Admin role can open the Usage dashboard'. The permissions page documents inherited administrative access through Compliance Administrator and Organization Management; the billing page restricts dashboard access by Admin role, not exclusively by dedicated group membership. | Source: https://learn.microsoft.com/purview/data-security-investigations-permissions
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: There is no change to examination initiation, and an examination starts only when a user selects Examine. | Found: Searched: 'Data Security Investigations examination jobs automatically scheduled API user selects Examine custom prompt'. Opened AI analysis and billing; read AI overview results. Found a user-started workflow, not an exhaustive or historical statement for 'only' or 'No change'. | Fix: Replace the Autonomy & actions bullet with 'Microsoft documents a user-started custom examination: select Verify prompt, confirm that the prompt is understood with the same intent, then select Examine to start the examination.' This workflow is stated at https://learn.microsoft.com/purview/data-security-investigations-ai-analysis#create-a-custom-examination.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].note; Cost and licensing; Governance controls prose / cost: Azure budgets and threshold alerts do not themselves stop examination jobs or consumption. | Found: Notifications are triggered when the budget thresholds are exceeded. Resources aren't affected, and your consumption isn't stopped. | Fix: Add https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets to sources and cite it for the statement that budgets do not stop consumption. | Source: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets
- [contradicted, minor] Governance guidance compared with Governance controls / consistency: The governance checklist names monitoring and spending controls that have no corresponding controls-table row. | Found: Create an Azure budget with alerts on the DSI resource group and meter. Review Probing history in sensitive investigations to see which prompts were run and by whom. The controls table has neither an Azure budget row nor a Probing history row. | Fix: The 'Create an Azure budget with alerts' and 'Review Probing history' checklist steps have no corresponding controls-table row. Remove these two checklist bullets for this correction; do not add unverified control rows.
-->
