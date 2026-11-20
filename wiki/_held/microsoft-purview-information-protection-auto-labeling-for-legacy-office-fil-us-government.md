---
title: "Microsoft Purview: auto-labeling for legacy .doc, .xls and .ppt files (GCC, GCC High, DoD)"
slug: "microsoft-purview-information-protection-auto-labeling-for-legacy-office-fil-us-government"
roadmapId: 578872
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to extend Purview service-side auto-labeling to .doc, .xls and .ppt files in SharePoint and OneDrive for GCC, GCC High and DoD, targeted for December CY2026. Plan simulation runs; no admin switch is documented."
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
  notes: "Learn lists service-side auto-labeling (SharePoint, OneDrive, Exchange) under Microsoft 365 E5, E5 Compliance, E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). Nothing specific to legacy formats is published at the time of writing (November 2026)."
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
updated: "2026-11-20"
roadmapModified: "2026-11-04T23:59:50"
changes:
  - date: "2026-11-20"
    note: "First briefing for the GCC, GCC High and DoD roadmap item 578872, targeted December CY2026; the Worldwide item 574363 has its own briefing."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 52
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "37115937601e9d57fb80e92be5b136ef"
---

## What's changing

Microsoft plans to add the legacy Office file formats Word (.doc), Excel (.xls) and PowerPoint (.ppt) to Microsoft Purview server-side auto-labeling. The roadmap item states that organisations will be able to automatically evaluate and apply sensitivity labels to these files in SharePoint and OneDrive. This item covers the GCC, GCC High and DoD clouds on the Web platform.

The roadmap record shows the item as In development, in the General Availability release phase, targeted for December CY2026. The dates are Microsoft's targets, not commitments. Microsoft lists the same feature under a second roadmap item, 574363, which covers Worldwide (Standard Multi-Tenant), targets November CY2026 and lists both General Availability and Preview. See [the Worldwide briefing](/features/microsoft-purview-information-protection-auto-labeling-for-legacy-office-files/).

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

**Licence.** The Learn page on auto-labeling lists service-side auto-labeling (SharePoint, OneDrive, Exchange) under the same SKUs as client-side auto-labeling: Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). It says auto-labeling of files and emails is not included with E3 or Business Premium. That page points to Microsoft's licensing guidance for security and compliance for the per-SKU matrix, including Government clouds; entitlements for GCC, GCC High and DoD are read there, not on the page cited here.

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
- Assign the Compliance Administrator or Compliance Data Administrator role to whoever will turn policies on, and the Data Classification Content Viewer role to whoever reviews matched files.

### At rollout

- Run any new or changed policy in simulation first and review the matched legacy files on the Items to review tab before using Turn on policy.
- Preserve the simulation results you need for comparison before selecting Edit policy, as Learn advises.

### After rollout

- Compare labelling progress with the 500,000 files per tenant per day ceiling that Learn gives.
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

Both controls already exist for auto-labeling policies, and neither is specific to legacy formats. Microsoft Learn documents no setting that includes or excludes .doc, .xls or .ppt files individually at the time of writing (November 2026).

Set-AutoSensitivityLabelPolicy is available only in Security & Compliance PowerShell. Turning a policy on needs the Compliance Administrator or Compliance Data Administrator role; without one, the Turn on policy button appears greyed out.

## Open questions

- Will existing auto-labeling policies evaluate legacy files automatically once support arrives, or does an admin have to change them? Watch the Learn auto-labeling page and Message center.
- Does a policy offer a way to include or exclude individual legacy formats? Watch the Learn auto-labeling page.
- Is the licensing for GCC, GCC High and DoD the same as the E5-tier SKUs Learn lists for the commercial cloud, for these formats? Watch the Microsoft 365 licensing guidance for security and compliance.
- When will the roadmap status move from In development, and will this item's December CY2026 target hold? Watch roadmap item 578872 and Message center.

<!-- rationale
risk: Medium. Once legacy files are in scope, a policy running in enforcement mode can label older files without a user acting, so the outcome depends on each policy's rules and on running simulation first. If the default is not stated, rate on current behaviour continuing.
cost: Low. Learn lists service-side auto-labeling under Microsoft 365 E5-tier SKUs and names no separate meter for legacy formats; the known cost is admin time to review policies and simulation results. Nothing specific to legacy formats is published.
impact: Medium. Owners of older Office files in the SharePoint sites and OneDrive accounts a policy covers may see labels appear; people outside those locations are not affected by the roadmap description.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls; Open questions / absence: Microsoft Learn documents no setting that includes or excludes .doc, .xls or .ppt files individually. | Found: Other conditions that you can select: Attachment or file extension is ... Depending on your previous choices, you'll now have an opportunity to create new rules by using conditions and exceptions. | Fix: Replace the absence sentence with: 'Learn documents an Attachment or file extension is condition and rule exceptions for auto-labeling policies, but does not yet describe their use with .doc, .xls or .ppt files.' Replace the corresponding Open questions bullet with: 'How will existing file-extension conditions and exceptions apply to legacy formats once support arrives? Watch the Learn auto-labeling page.' Keep the existing cited URL https://learn.microsoft.com/purview/apply-sensitivity-label-automatically. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist instructs administrators to assign roles, but the controls table has no role-assignment control. | Found: Assign the Compliance Administrator or Compliance Data Administrator role ... and the Data Classification Content Viewer role ...; the table contains only policy activation and location-scoping controls. | Fix: Remove the role-assignment bullet from Before rollout; retain the documented role requirements in Risk assessment and the existing control note. The role-assignment action currently has no controls-table row; do not add a row in this correction.
-->
