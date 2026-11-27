---
title: "Microsoft Purview: proactive AI insights from Data Security Investigations in DSPM exfiltration reports"
slug: "microsoft-purview-data-security-investigations-proactive-ai-insight-powered-by-data-securi"
roadmapId: 560327
topic: "governance"
products: ["Microsoft Purview"]
summary: "An opt-in toggle in DSPM makes Data Security Investigations analyse recently exfiltrated sensitive data every 24 hours and show risk counts in DSPM. It bills DSI storage and compute units while on; decide who may switch it on."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's Data Security Investigations billing page says billing is based solely on stored data and AI compute capacity, not on a dedicated plan or licence. Proactive insights consume both pay-as-you-go meters while the toggle is on; a compute-unit figure per refresh is not yet published."
audiences: ["security","compliance","finops"]
tags: ["purview","data-security-investigations","dspm","pay-as-you-go","ai"]
sources:
  - title: "Microsoft 365 Roadmap 560327"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560327"
    kind: "roadmap"
  - title: "Create an investigation in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-investigation"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Permissions for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-permissions"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Learn about Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations"
    kind: "learn"
  - title: "Learn about Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-learn-about"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Who can create and manage all Data Security Investigations, including viewing every investigation (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-security-investigations-introducing-integration-with-data-security","microsoft-purview-dspm-new-microsoft-purview-data-security-posture-management-experience","microsoft-purview-data-security-investigations-ai-analysis-enhancements","role-groups","auditing"]
controls:
  - governs: "Whether DSI runs proactive AI insights on exfiltrated data for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "DSPM (preview) > Objectives > Prevent exfiltration to risky destinations > View objective > Exfiltration risk patterns > Proactive AI insights"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-investigation"
    api: null
    note: "Opt-in toggle; while on, one investigation is refreshed every 24 hours and consumes DSI storage and compute units. Labelled preview on Learn."
  - governs: "Who can create and manage all Data Security Investigations, including viewing every investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Investigators and Reviewers role groups give narrower access. Compliance Administrator and Organization Management also include DSI admin access."
  - governs: "Which Azure subscription and resource group the DSI storage meter bills"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Setup tasks > Setup pay-as-you-go-billing for data storage"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Requires Global Administrator and Owner or Contributor on the resource group. Disabling both meters deletes all investigations."
  - governs: "Where DSI AI analysis is processed"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Setup tasks > Set up AI capacity > AI analysis data processing location"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Requires the Data Security Investigations Admins role group. Tenants can also opt in to processing anywhere in the world."
  - governs: "Storage and compute unit spend per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Data Security Investigations Admin role only. Billing data can lag by up to 48 hours."
  - governs: "Searching audit records of Data Security Investigations activity"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "DSI activities are logged automatically in the unified audit log."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-09T20:46:16"
changes:
  - date: "2026-11-27"
    note: "New briefing: opt-in DSPM toggle for daily DSI analysis of exfiltrated data, its pay-as-you-go storage and compute charges, and the roles and controls around it."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 79 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 77
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "45d6bedb9294034b0b1175ad8c267cab"
---

## What's changing

Data Security Investigations (DSI, Purview's AI-assisted tool for analysing the content behind a data security incident) can now run automatically from Data Security Posture Management (DSPM). On the **Prevent exfiltration to risky destinations** objective in DSPM, an opt-in **Proactive AI insights** toggle makes DSI create a single investigation for the tenant and refresh it every 24 hours.

That investigation is scoped to all sensitive data exfiltrated from the organisation in the last 30 days and analyses it against five fixed risk categories: credentials and access information, personally identifiable information (PII), financial information, confidential information, and intellectual property (IP). The DSPM exfiltration objective card then shows the count of items in each category. Microsoft says insights can take up to 24 hours to appear after the toggle is first turned on. Analysts can still create a manual investigation from the same card for deeper work.

In the current version, the categories are fixed: Microsoft Learn states that custom category templates and per-item deletion inside the auto-created investigation aren't supported.

The roadmap item lists the feature as Launched, General Availability, with a June CY2026 target, for Worldwide (Standard Multi-Tenant) on the web. Microsoft Learn still labels it **Proactive AI insights (preview)** and describes "the current preview", so the two sources disagree on its status.

## Why it matters

With the toggle on, DSI runs as a standing, daily, billed job. Once the toggle is on, DSI storage and compute unit charges recur every day without anyone opening an investigation, and Microsoft's billing page tells customers to budget for these recurring costs. The toggle sits in DSPM, while the bill sits with whoever owns the Azure subscription linked to DSI, so security and finance teams need to agree before it is switched on.

If nobody acts, nothing changes: Microsoft describes the toggle as opt-in. The value is real for teams that already watch exfiltration in DSPM, because a daily count of credentials or IP leaving the organisation is a better early signal than raw exfiltration events.

## Risk assessment

**Data exposure**
- The auto-created investigation holds 30 days of exfiltrated sensitive content in DSI storage and runs AI analysis over it. AI processing runs on GPU resources in Azure datacenters in the location chosen when AI capacity was set up (ANZ, EU, UK or US), or anywhere in the world if the tenant opted in to that; check that setting before enabling.
- Members of the *Data Security Investigations Admins* role group can view every investigation; others see only investigations they are assigned to. Who is assigned to the auto-created investigation is not documented (see Open questions).

**Security & identity**
- No new identity: the feature runs inside the existing DSPM and DSI role model. The risk is breadth of the role groups that already include DSI roles: Compliance Administrator and Organization Management include *Data Security Investigation Admin*.

**Autonomy & actions**
- The investigation is created and refreshed automatically every 24 hours with no analyst action. Microsoft Learn describes the output as category counts on the DSPM card and an investigation that analysts can take further.

**Change & support**
- Treat the category counts as leads to confirm in a manual investigation, not as findings.
- Spend is ongoing while the toggle is on, and the Purview Usage center lists Data Security Investigations as not pausable, so the toggle itself and DSI's own billing settings are the levers.

## Cost and licensing

**Licence.** Microsoft's [DSI billing page](https://learn.microsoft.com/purview/data-security-investigations-billing) says DSI billing is based solely on stored data and AI compute capacity and isn't based on a dedicated enterprise plan or licence.

**Meters.** Two pay-as-you-go meters apply, and Microsoft Learn states that proactive AI insights consume both while the toggle is on:
- **Storage meter**: charged per GB per month for data associated with all investigations. The auto-created investigation consumes storage continuously, so storage charges are ongoing. Storage billing requires an Azure subscription in the same tenant, linked through DSI setup.
- **Data Security Investigations Compute Units**: each 24-hour refresh uses compute units to generate insights across the five categories.

Rates are on the Microsoft Purview pricing page that the billing page links to. Microsoft does not publish how many compute units a refresh uses for a given volume of exfiltrated data, so use the in-product cost estimator and watch the first weeks on the usage dashboard.

**Budgets.** The billing page recommends Azure budgets for the DSI resource group and meter level, with alerts at thresholds such as 50%, 75% or 90%. It describes these as budgets and alerts and does not say that consumption stops when a budget is reached. Billing data can take up to 48 hours to show on the DSI **Pay-as-you-go usage dashboard**.

**Stopping charges.** Deleting an investigation stops its storage charges. Stopping DSI billing altogether means disabling both meters, which deletes all investigations and the compute units for the resource group, irreversibly.

## Scope

- **Who sees it:** security and compliance staff using DSPM's **Prevent exfiltration to risky destinations** objective, and DSI investigators.
- **Roles:** creating a data security investigation from DSPM needs one of Compliance Administrator, Data Security Management, Insider Risk Management Admin, Organization Management, Data Security Investigations Admin or Data Security Investigations Investigator. Configuring DSI AI capacity needs the *Data Security Investigations Admins* role group; setting up the storage meter needs Global Administrator plus Owner or Contributor on the resource group.
- **Prerequisites:** DSI billing configured: an Azure subscription and resource group in the same tenant, and AI capacity with a processing location.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only. **Platform:** web (Microsoft Purview portal).
- **Status:** Launched, General Availability per the roadmap; preview per Microsoft Learn.

## Governance guidance

### Before rollout
- Decide between the security owner and the Azure subscription owner whether the daily proactive investigation is worth an ongoing storage and compute charge, and who approves turning it on.
- Review membership of the *Data Security Investigations Admins* role group and of Compliance Administrator and Organization Management, which include DSI admin access, in the Microsoft Purview portal role groups.
- Confirm which Azure subscription and resource group DSI storage bills to, and the **AI analysis data processing location** chosen when AI capacity was set up.
- Run the DSI cost estimator against a typical month of exfiltration activity before enabling.

### At rollout
- Turn on **Proactive AI insights** on the **Exfiltration risk patterns** card in DSPM only after billing is in place and the decision is recorded.
- Allow up to 24 hours for the first counts before judging the result.

### After rollout
- Check the DSI **Usage dashboard** weekly for the auto-created investigation's storage and compute units, remembering billing data can lag by up to 48 hours.
- Search the unified audit log for Data Security Investigations activities to see who opens and works the auto-created investigation.
- Turn the toggle off if the counts are not driving manual investigations, since charges continue while it is on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DSI runs proactive AI insights on exfiltrated data for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Opt-in toggle; while on, one investigation is refreshed every 24 hours and consumes DSI storage and compute units. Labelled preview on Learn.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM (preview) › Objectives › Prevent exfiltration to risky destinations › View objective › Exfiltration risk patterns › Proactive AI insights <a href="https://learn.microsoft.com/purview/data-security-investigations-investigation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create and manage all Data Security Investigations, including viewing every investigation</strong><br><small>Tenant</small><br><small class="controls__note">Investigators and Reviewers role groups give narrower access. Compliance Administrator and Organization Management also include DSI admin access.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Data Security Investigations Admins › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Azure subscription and resource group the DSI storage meter bills</strong><br><small>Tenant</small><br><small class="controls__note">Requires Global Administrator and Owner or Contributor on the resource group. Disabling both meters deletes all investigations.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Setup tasks › Setup pay-as-you-go-billing for data storage <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Where DSI AI analysis is processed</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Data Security Investigations Admins role group. Tenants can also opt in to processing anywhere in the world.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Setup tasks › Set up AI capacity › AI analysis data processing location <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Storage and compute unit spend per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Data Security Investigations Admin role only. Billing data can lag by up to 48 hours.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of Data Security Investigations activity</strong><br><small>Tenant</small><br><small class="controls__note">DSI activities are logged automatically in the unified audit log.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Microsoft Learn documents the DSPM toggle as the way to turn this feature on and off, and documents no PowerShell or Graph operation for it at the time of writing (November 2026).
- The DSPM permissions page lists who can create a data security investigation from DSPM but does not name a role for the **Proactive AI insights** toggle itself.
- The Purview Usage center (Usage center > Pay-as-you-go) lists Data Security Investigations as not pausable.
- Members with the *Data Security Investigation Contributor* role (included in Data Security Management and Insider Risk Management) can create and manage investigations they own or belong to, but that role doesn't include data storage, AI job execution or the usage dashboard.
- Global admins must be in one of the DSI role groups to create and access investigations.

## Open questions

- Which role is required to turn the **Proactive AI insights** toggle on or off? Watch the DSPM permissions page.
- Who is assigned to the auto-created investigation, and can people outside the *Data Security Investigations Admins* role group open it?
- Does turning the toggle off delete the auto-created investigation and end its storage charges, or must it be deleted separately? Watch the DSI billing page.
- How many compute units does a typical 24-hour refresh use for a given volume of exfiltrated data?
- When will Microsoft Learn drop the preview label to match the roadmap's General Availability status?

<!-- rationale
risk: Medium. Nothing runs until someone turns on the toggle, but once on it analyses 30 days of exfiltrated sensitive content with AI every day and the Usage center lists Data Security Investigations as not pausable.
cost: Variable. While the toggle is on, each daily refresh consumes the Data Security Investigations storage meter (per GB per month) and Data Security Investigations Compute Units, billed pay-as-you-go to an Azure subscription.
impact: Low. Only data security teams working in DSPM and Data Security Investigations see the insights; end users see no change.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Security & identity / behaviour: Proactive AI insights introduces no new identity. | Found: Searched: 'Data Security Investigations identity service principal'; 'proactive AI insights identity'. Opened DSI overview, investigation and permissions pages; none describes the background job's identity or says no new identity is created. | Fix: Remove 'No new identity:'. Keep the separately supported discussion of DSPM and DSI role permissions without asserting a background execution identity.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: current version limitations / behaviour: Learn says custom category templates are not supported in the auto-created investigation. | Found: In the current preview, proactive AI insights use five fixed risk categories. Custom category templates and per-item deletion within the auto-created investigation aren't supported. | Fix: Add: 'The AI analysis page separately says these investigations can run additional categorisation with default, suggested or custom categories.' Cite https://learn.microsoft.com/purview/data-security-investigations-ai-analysis#use-categorization, which states: 'You can run additional categorization with default, suggested, or custom categories on these investigations.' | Source: https://learn.microsoft.com/purview/data-security-investigations-investigation
- [supported, minor] Risk assessment: Data exposure / role: People outside the DSI Admins role group can view only investigations they are assigned to. | Found: If you're not assigned to the Data Security Investigations Admins role group, you can only view investigations you're assigned to as an investigator or reviewer. | Fix: Add: 'The DSI permissions page also grants full administrative access through Compliance Administrator and administrative access through Organization Management without explicit membership of a DSI-specific role group.' Cite https://learn.microsoft.com/purview/data-security-investigations-permissions#additional-role-groups-with-data-security-investigations-access. This qualifies the investigation page's narrower wording and agrees with the existing control note. | Source: https://learn.microsoft.com/purview/data-security-investigations-investigation
- [supported, minor] controls[2].ui / admin-path: Data Security Investigations > Setup tasks > Setup pay-as-you-go-billing for data storage reaches storage subscription setup. | Found: Select Setup pay-as-you-go-billing for data storage in the Setup tasks section. ... Azure subscription: The Azure subscription you want to assign to the storage meter. ... Resource group | Fix: Keep the path, which correctly reaches the setup pane, and append to the row note: 'On the setup pane, choose Azure subscription and Resource group.' | Source: https://learn.microsoft.com/purview/data-security-investigations-billing
- [supported, minor] Governance guidance: After rollout / applicability: The unified audit log can show who views and works on an investigation. | Found: | Get DSI Investigation | GetDSIInvestigation | A user viewed an investigation. | | Updated DSI Investigation | UpdatedDSIInvestigation | A user updated an investigation. | | Fix: Add https://learn.microsoft.com/purview/audit-log-activities#data-security-investigations-activities to sources to support the specific view/work auditing advice. | Source: https://learn.microsoft.com/purview/audit-log-activities#data-security-investigations-activities
- [contradicted, minor] Governance guidance: Before rollout, cost estimator / consistency: The governance checklist tells readers to run the cost estimator, but the controls table has no estimator row. | Found: Run the DSI cost estimator against a typical month of exfiltration activity before enabling. ... Controls list the proactive toggle, role membership, storage setup, processing location, usage dashboard and audit search, but not the estimator. | Fix: Remove the checklist bullet 'Run the DSI cost estimator against a typical month of exfiltration activity before enabling.' Keep the existing estimator advice in Cost and licensing; do not add a control row.
-->
