---
title: "Microsoft Purview Data Security Investigations: Standard or Advanced categorisation and automatic data preparation"
slug: "microsoft-purview-data-security-investigations-ai-analysis-enhancements"
roadmapId: 557556
topic: "governance"
products: ["Microsoft Purview"]
summary: "Data Security Investigations now prepares scoped data for AI analysis automatically on every Add to scope, and investigators choose Standard or Advanced categorisation, which differ in time and compute units. Admins should brief investigators and watch spend."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Microsoft's billing page says Data Security Investigations is billed on stored data and the compute capacity used for AI analysis, not on a dedicated plan or licence. No rate specific to Standard or Advanced categorisation is published."
audiences: ["security","compliance","finops"]
tags: ["purview","data-security-investigations","ai","pay-as-you-go","role-groups","cost-management"]
sources:
  - title: "Use AI analysis in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-ai-analysis"
    kind: "learn"
  - title: "Manage investigation scopes in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-scope"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 557556"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557556"
    kind: "roadmap"
  - title: "Who can run categorisation and other AI analysis in Data Security Investigations (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-security-investigations-introducing-new-custom-examination","microsoft-purview-data-security-investigations-introducing-ocr-support","microsoft-purview-data-security-investigations-notification-and-improved-search-capabiliti","role-groups"]
controls:
  - governs: "Who can run categorisation and other AI analysis in Data Security Investigations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Investigators and Reviewers role groups are edited the same way and can also run categorisation. Cmdlet applies to Security & Compliance PowerShell."
  - governs: "Whether AI analysis can use compute units, and its primary processing location"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Setup tasks > Set up AI capacity > AI analysis data processing location"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Requires the Data Security Investigations Admins role group."
  - governs: "Standard or Advanced processing for a categorisation run"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Investigations > investigation > Analysis > Categorize > Standard or Advanced"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-ai-analysis"
    api: null
    note: "Chosen by the investigator for each run, per investigation."
  - governs: "Tenant-wide default or restriction on Advanced categorisation"
    scope: "tenant"
    ui: null
    api: null
  - governs: "Which scoped items are prepared for AI analysis"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Investigations > investigation > Analysis > item > Actions"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-scope"
    api: null
    note: "Actions offers excluding the item from AI analysis; excluded items can be included again later."
  - governs: "Storage and compute unit spend per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Data Security Investigations Admin role only; billing data can take up to 48 hours to appear."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-26T22:01:51"
changes:
  - date: "2026-11-27"
    note: "New briefing: Standard and Advanced categorisation, automatic data preparation replacing Prepare for AI, compute unit billing and the role groups that can run AI analysis."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 76
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "652677970ff4898c3873d08d1c6c6ed3"
---

## What's changing

Data Security Investigations (DSI, the Microsoft Purview tool for analysing data caught up in a security incident) changes two parts of its AI analysis: how categorisation runs, and when data is prepared for AI.

**Standard or Advanced categorisation.** When an investigator selects **Categorize** on an investigation's **Analysis** page, they now pick **Standard** or **Advanced**. Microsoft Learn says Standard groups the scope into the selected categories and "can significantly reduce the time it takes to complete processing and the amount of Data Security Investigations Compute Units (compute unit) needed", while Advanced "further groups your scope into various topics within each category" and "takes additional time and compute units". Existing categories can be switched between the two, and the switch reprocesses them.

**Automatic data preparation.** After items are added to an investigation scope, the system prepares them for AI analysis (vectorisation) in the background during each **Add to scope** action. Learn states that from June 2026 new investigations vectorise automatically and the **Prepare for AI** action is not available to them; after August 2026 it is removed from all investigations, and an existing investigation with data never prepared for AI must rerun **Add to scope**.

The roadmap item is **Launched**, with a preview date of March CY2026 and a target of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web, listed as both Preview and General Availability. The June and August 2026 transition dates come from Learn, not the roadmap.

## Why it matters

The change moves a spending decision. Before, an investigator chose when to run **Prepare for AI**; now preparation runs automatically on every **Add to scope**, so compute units are drawn as soon as data enters a scope. Microsoft describes that preparation as needing few compute units, so the larger lever is still categorisation, where the cost grows with the number of categories and Advanced costs more than Standard. Expect investigators to need a rule of thumb for when topic-level grouping is worth the extra compute.

If nobody acts, preparation happens automatically and each categorisation run uses whichever option the investigator selects. Older investigations whose data was never prepared will show no AI results for that data until someone reruns **Add to scope**, which Learn says does not create duplicate copies or extra storage charges.

## Risk assessment

**Data exposure**
- No change to what is reachable: AI analysis works on items in an investigation scope, and Learn says all scoped items are prepared for AI analysis unless an investigator excludes them (item **Actions**). Exclude redundant or out-of-scope items before relying on AI results.

**Security & identity**
- Who can run categorisation is set by role group: Data Security Investigations Admins, Investigators and Reviewers can all run categorisation, examination and vector searches. The Compliance Administrator and Organization Management role groups include the Data Security Investigation Admin role, so their members get full DSI access without a separate assignment.

**Autonomy & actions**
- Vectorisation now starts without a separate investigator step on each **Add to scope**. It prepares data only; categorisation and examination still start when someone selects them.

**Change & support**
- Categorisation results can differ between Standard and Advanced, and between runs, because Learn says categories are reprocessed when switched and relevance is evaluated per category. Investigators comparing results across runs should record which option they used.
- Cancelling an **Add to scope** or categorisation job still bills the compute units used before cancellation.

## Cost and licensing

**Licence.** The billing page says DSI billing "isn't based on a dedicated enterprise plan or license"; it combines a storage meter and AI capacity (compute units), both pay-as-you-go through an Azure subscription in the same tenant.

**Meters.** Storage is charged per gigabyte per month for data in all investigations, prorated by day. Compute units are charged for what is used. The billing page lists **Add to scope (including data preparation for AI analysis)** as a compute unit process scaled by the size of data and extracted text, and categorisation as scaled by the number of new categories selected. Learn says categorisation compute is "directly proportional to the number of categories selected, not the size of the data", and that adding categories to an existing run charges only for the new ones. Advanced categorisation takes additional compute units over Standard; the size of that difference is not yet published.

**Watching and limiting spend.** The **Usage dashboard** shows storage and compute units per investigation, with categorisation and add-to-scope shown as separate processes; data can take up to 48 hours to appear. Microsoft recommends Azure budgets and alerts on the DSI resource group; the page describes these as budgets and alerts, not as a stop on use.

**Rates.** The billing page links to Microsoft Purview pricing for storage meter rates and quotes no compute unit rate itself.

## Scope

- **Who uses it:** members of the Data Security Investigations Admins, Investigators and Reviewers role groups, and of the role groups that include DSI roles (Compliance Administrator, Organization Management, Data Security Management, Insider Risk Management). Learn says the Data Security Investigation Contributor role does not include AI job execution.
- **Prerequisites:** both billing models configured (storage meter linked to an Azure subscription and resource group, and AI capacity set up). Configuring them needs the Global Administrator role and the resource group Owner or Contributor role; configuring AI capacity needs membership of Data Security Investigations Admins.
- **Cloud and platform:** Worldwide (Standard Multi-Tenant), web, as the roadmap lists them.
- **Investigations created by proactive AI insights from DSPM** arrive pre-categorised with five fixed risk categories and can be categorised further.

## Governance guidance

### Before rollout
- Confirm with the DSI administrators that AI capacity and its processing location are set as intended (Data Security Investigations > Setup tasks > Set up AI capacity).
- Review who is in the Data Security Investigations role groups and in Compliance Administrator and Organization Management, since all of them can run categorisation.
- Agree with investigators when Advanced categorisation is justified, given that it takes additional time and compute units.

### At rollout
- Tell investigators that **Prepare for AI** is gone and that preparation runs on every **Add to scope**, so they should exclude redundant items early.
- Rerun **Add to scope** on any investigation created before June 2026 whose data was never prepared for AI.
- Ask investigators to start with a few categories and add more, since added categories are charged only for the new ones.

### After rollout
- Check the **Usage dashboard** for compute units by process, comparing categorisation with add-to-scope, after the 48-hour reporting delay.
- Set Azure budgets and alerts on the DSI resource group, as Microsoft's billing page recommends.
- Delete completed investigations to end their storage charges.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can run categorisation and other AI analysis in Data Security Investigations</strong><br><small>Tenant</small><br><small class="controls__note">Investigators and Reviewers role groups are edited the same way and can also run categorisation. Cmdlet applies to Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Data Security Investigations Admins › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether AI analysis can use compute units, and its primary processing location</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Data Security Investigations Admins role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Setup tasks › Set up AI capacity › AI analysis data processing location <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Standard or Advanced processing for a categorisation run</strong><br><small class="controls__note">Chosen by the investigator for each run, per investigation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Investigations › investigation › Analysis › Categorize › Standard or Advanced <a href="https://learn.microsoft.com/purview/data-security-investigations-ai-analysis" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide default or restriction on Advanced categorisation</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which scoped items are prepared for AI analysis</strong><br><small class="controls__note">Actions offers excluding the item from AI analysis; excluded items can be included again later.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Investigations › investigation › Analysis › item › Actions <a href="https://learn.microsoft.com/purview/data-security-investigations-scope" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Storage and compute unit spend per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Data Security Investigations Admin role only; billing data can take up to 48 hours to appear.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- The Standard or Advanced choice is made by the investigator for each categorisation run. Microsoft Learn documents no tenant-wide default or restriction for it at the time of writing (November 2026), so role-group membership and spend monitoring are the administrator's levers.
- Viewing the **Usage dashboard** needs the Data Security Investigations Admin role. Learn's steps to stop DSI billing involve deleting all investigations, which is irreversible, so export results first.
- Azure budgets and alerts, which Microsoft recommends for the DSI resource group, are configured in Azure, not in the Purview portal.

## Open questions

- How many more compute units does Advanced categorisation use than Standard for the same categories? Watch the DSI billing page.
- Will administrators get a setting to default investigators to Standard, or to restrict Advanced? Watch Message center and the DSI AI analysis page.
- Which option does the **Categorize** dialog select if the investigator changes nothing? The AI analysis page does not say.
- How much compute does automatic preparation draw for very large scopes? Learn says only that it "doesn't require many compute units".

<!-- rationale
risk: Low. AI analysis still runs only on data an investigator has added to an investigation scope; what changes is when preparation happens and how much categorisation work each run does.
cost: Variable. Data Security Investigations bills pay-as-you-go through Data Security Investigations Compute Units and a storage meter; Advanced categorisation takes additional compute units and automatic preparation runs on every Add to scope.
impact: Low. Only members of the Data Security Investigations role groups and the role groups that include its roles notice: the Prepare for AI step is gone and categorisation asks for Standard or Advanced.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: Who uses it / role: Data Security Management and Insider Risk Management are among the role groups whose members can use these AI analysis enhancements. | Found: Data Security Management | Data Security Investigation Contributor | Contributor access ... Insider Risk Management | Data Security Investigation Contributor | Contributor access ... This role doesn't include access to data storage, AI job execution, or the Pay-as-you-go usage dashboard. | Fix: Replace the first sentence of Scope's Who uses it bullet with: 'Who uses it: members of the Data Security Investigations Admins, Investigators and Reviewers role groups, and members of Compliance Administrator or Organization Management.' Keep the following sentence explaining that Contributor does not include AI job execution. Source: https://learn.microsoft.com/purview/data-security-investigations-permissions. | Source: https://learn.microsoft.com/purview/data-security-investigations-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist directs readers to set Azure budgets and alerts, but that control has no controls-table row. | Found: Set Azure budgets and alerts on the DSI resource group, as Microsoft's billing page recommends. | Fix: Remove the 'Set Azure budgets and alerts on the DSI resource group, as Microsoft's billing page recommends' checklist bullet. Keep the existing explanatory cost and governance notes; do not add a control row during correction.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist directs readers to delete investigations to stop storage charges, but investigation deletion has no controls-table row. | Found: Delete completed investigations to end their storage charges. | Fix: Remove the 'Delete completed investigations to end their storage charges' checklist bullet, since investigation deletion has no table row. Do not add a control row during correction.
-->
