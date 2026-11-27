---
title: "Microsoft Purview: auto-labeling for legacy .doc, .xls and .ppt files (GCC, GCC High, DoD)"
slug: "microsoft-purview-information-protection-auto-labeling-for-legacy-office-fil-us-government"
roadmapId: 578872
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to extend Purview service-side auto-labeling to .doc, .xls and .ppt files in SharePoint and OneDrive for GCC, GCC High and DoD, targeted December CY2026. No admin switch specific to legacy-format support is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service-description matrix lists client and service-side automatic sensitivity labeling as included with Microsoft 365 G5, Office 365 G5 and Microsoft Purview Suite GOV. Licensing specific to legacy formats has not been published (November 2026)."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","auto-labeling","sensitivity-labels","information-protection","sharepoint","onedrive","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 578872"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578872"
    kind: "roadmap"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Set-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-information-protection-sensitivity-labeling"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions - DoD deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-dod-deployments"
    kind: "learn"
videos: []
related: ["microsoft-purview-information-protection-auto-labeling-for-legacy-office-files"]
controls:
  - governs: "Whether an auto-labeling policy runs in simulation or enforces labels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Turn on policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity \"<policy name>\" -Mode Enable"
      docs: "https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy"
    note: "TestWithoutNotifications is the test mode. Turning a policy on needs Compliance Administrator or Compliance Data Administrator."
  - governs: "Which SharePoint and OneDrive locations an auto-labeling policy covers"
    scope: "site"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Edit policy > Choose locations where you want to apply the label"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity \"<policy name>\" -AddSharePointLocation \"<site URL>\""
      docs: "https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy"
    note: "Use -AddOneDriveLocation for OneDrive locations. Applies to the files of any format the policy evaluates."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-27"
roadmapModified: "2026-11-04T23:59:50"
changes:
  - date: "2026-11-20"
    note: "First briefing for the GCC, GCC High and DoD roadmap item 578872, targeted December CY2026; the Worldwide item 574363 has its own briefing."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: replaced the claim that Learn documents no file-extension setting with the documented file-extension condition and exceptions, and removed the role-assignment checklist bullet."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected the Worldwide item's dates (December CY2026 target, November CY2026 preview), replaced the licence SKU list with the Purview service-description entitlement, narrowed the admin-switch absence and removed the throughput-monitoring checklist item."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3d7a058529dac56d7e9ce4a758077c87"
---

## What's changing

Microsoft plans to add the legacy Office file formats Word (.doc), Excel (.xls) and PowerPoint (.ppt) to Microsoft Purview server-side auto-labeling. The roadmap item states that organisations will be able to automatically evaluate and apply sensitivity labels to these files in SharePoint and OneDrive. This item covers the GCC, GCC High and DoD clouds on the Web platform.

The roadmap record shows the item as In development, in the General Availability release phase, targeted for December CY2026. The dates are Microsoft's targets, not commitments. Microsoft lists the same feature under a second roadmap item, 574363, which covers Worldwide (Standard Multi-Tenant), targets December CY2026, with a November CY2026 preview target, and lists both General Availability and Preview. See [the Worldwide briefing](/features/microsoft-purview-information-protection-auto-labeling-for-legacy-office-files/).

Microsoft Learn does not describe the legacy-format change yet. At the time of writing (November 2026), the Learn page on auto-labeling lists Word (.docx), PowerPoint (.pptx), Excel (.xlsx) and PDF files as supported for SharePoint and OneDrive and does not mention .doc, .xls or .ppt. What follows about the change is therefore the roadmap's description, and how existing policies treat legacy files is not stated.

## Why it matters

This widens what an auto-labeling policy can reach. Policies that today evaluate only the Open XML formats and PDF may, once the change arrives, also be able to evaluate older Office files in the same SharePoint and OneDrive locations. Those older files are often the least governed content in a tenant.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes, and treat the feature as something to review. The practical decision is which policies should cover legacy files and whether they are tested in simulation first, as Learn advises for any policy because the user does not interact with the labelling process.

## Risk assessment

**Data exposure**

- If legacy files become evaluable, a policy's rules will apply to files that were previously outside its reach, in every SharePoint and OneDrive location the policy covers. Check the locations on each policy and review the simulation results before turning it on (see the controls table).
- Learn says auto-labeling policies run continuously until they are deleted, and that new and modified files are included with the current policy settings.

**Security & identity**

- Learn says turning a policy from Ready to turn on to On requires the Compliance Administrator or Compliance Data Administrator role, and viewing file contents in the source view of simulation results requires the Data Classification Content Viewer role, which global admins do not hold by default. Confirm who holds each before the change lands.

**Autonomy & actions**

- Labels are applied by the service without a user acting. Learn gives an absolute maximum of 500,000 automatically labelled SharePoint and OneDrive files per tenant per day, in aggregate across all auto-labeling policies, and says this is not a guaranteed daily rate. A larger pool of eligible files may take longer to work through.

**Change & support**

- The roadmap item is still In development and Learn does not describe the formats, so expect the Learn page and portal behaviour to change. Learn says simulation can take 12 hours to complete.

## Cost and licensing

**Licence.** The Microsoft Purview service-description matrix lists client and service-side automatic sensitivity labeling as included with Microsoft 365 G5, Office 365 G5 and Microsoft Purview Suite GOV. Licensing specific to legacy formats has not been published (November 2026). The Learn page on auto-labeling says auto-labeling of files and emails is not included with E3 or Business Premium.

**Meter.** The Learn page names no meter for auto-labeling, and a meter for legacy formats is not yet published.

**Indirect cost.** Admin time to review each policy, run simulation and review results. The throughput ceiling of 500,000 files per tenant per day is shared by all policies.

## Scope

**Who and what.** The roadmap item names .doc, .xls and .ppt files in SharePoint and OneDrive for organisations using server-side auto-labeling. It does not mention Exchange.

**Clouds and platforms.** The record lists GCC, GCC High and DoD, on the Web platform. Microsoft's Purview planning pages for GCC, GCC High and DoD list automatic classification and labelling for Exchange Online, SharePoint Online and OneDrive as Available in each cloud.

**Prerequisites.** Learn's checklist says auditing must be turned on for Microsoft 365 because simulation requires it. It also says auto-labeling is not available in every region because of a backend Azure dependency.

**Rollout.** The roadmap targets December CY2026. Microsoft has not published a rollout mechanism for this item.

## Governance guidance

### Before rollout

- List the auto-labeling policies in the Microsoft Purview portal and the SharePoint and OneDrive locations each covers, and decide which should evaluate legacy files once they are supported.

### At rollout

- Run any new or changed policy in simulation first and review the matched legacy files on the Items to review tab before using Turn on policy.
- Preserve the simulation results you need for comparison before selecting Edit policy, as Learn advises.

### After rollout

- Re-read the Learn page on auto-labeling and Message center for the legacy-format behaviour, because the page does not describe it yet.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an auto-labeling policy runs in simulation or enforces labels</strong><br><small>Tenant</small><br><small class="controls__note">TestWithoutNotifications is the test mode. Turning a policy on needs Compliance Administrator or Compliance Data Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Turn on policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -Mode Enable</code> <a href="https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint and OneDrive locations an auto-labeling policy covers</strong><br><small>Site</small><br><small class="controls__note">Use -AddOneDriveLocation for OneDrive locations. Applies to the files of any format the policy evaluates.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Edit policy › Choose locations where you want to apply the label <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -AddSharePointLocation &quot;&lt;site URL&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both controls already exist for auto-labeling policies, and neither is specific to legacy formats. Learn documents an Attachment or file extension is condition and rule exceptions for auto-labeling policies, but does not yet describe their use with .doc, .xls or .ppt files.

Set-AutoSensitivityLabelPolicy is available only in Security & Compliance PowerShell. Turning a policy on needs the Compliance Administrator or Compliance Data Administrator role; without one, the Turn on policy button appears greyed out.

## Open questions

- Will existing auto-labeling policies evaluate legacy files automatically once support arrives, or does an admin have to change them? Watch the Learn auto-labeling page and Message center.
- How will existing file-extension conditions and exceptions apply to legacy formats once support arrives? Watch the Learn auto-labeling page.
- Will auto-labeling of legacy formats in GCC, GCC High and DoD carry the same entitlement as the client and service-side automatic sensitivity labeling entry in the Microsoft Purview service description? Watch that service description.
- When will the roadmap status move from In development, and will this item's December CY2026 target hold? Watch roadmap item 578872 and Message center.

<!-- rationale
risk: Medium. Once legacy files are in scope, a policy running in enforcement mode can label older files without a user acting, so the outcome depends on each policy's rules and on running simulation first. If the default is not stated, rate on current behaviour continuing.
cost: Low. The service-description matrix lists service-side automatic sensitivity labeling in qualifying subscriptions and names no separate meter for legacy formats; the known cost is admin time to review policies and simulation results. Nothing specific to legacy formats is published.
impact: Medium. Owners of older Office files in the SharePoint sites and OneDrive accounts a policy covers may see labels appear; people outside those locations are not affected by the roadmap description.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: second paragraph / record: Roadmap item 574363 describes the same legacy-format feature. | Found: 574363: Microsoft Purview server-side auto-labeling will support legacy Microsoft Office file formats, including Word (.doc), Excel (.xls), and PowerPoint (.ppt). | Fix: Add Microsoft 365 Roadmap 574363 to sources at https://www.microsoft.com/microsoft-365/roadmap?id=574363.
- [supported, minor] Risk assessment: Autonomy & actions; Cost and licensing: Indirect cost / behaviour: Learn gives a maximum throughput of 500,000 automatically labeled SharePoint and OneDrive files per tenant per day. | Found: The absolute maximum throughput is 500,000 automatically labeled SharePoint and OneDrive files per tenant per day | Fix: After the throughput statement, add: 'Microsoft's Australian Government guidance still describes up to 25,000 Office documents per day; this briefing uses the 500,000-file tenant ceiling in the auto-labeling reference.' Cite https://learn.microsoft.com/compliance/anz/pspf-service-based-auto#labeling-existing-items-at-rest, which says 'up to 25,000 office documents per day'. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
-->
