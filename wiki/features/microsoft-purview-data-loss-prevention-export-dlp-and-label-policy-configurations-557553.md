---
title: "Microsoft Purview: export DLP and label policy configurations as a ZIP file (Worldwide)"
slug: "microsoft-purview-data-loss-prevention-export-dlp-and-label-policy-configurations-557553"
roadmapId: 557553
topic: "governance"
products: ["Microsoft Purview"]
summary: "Admins in the Worldwide cloud can download all DLP policies or all label publishing policies as a read-only ZIP snapshot to attach to support tickets. Nothing changes until someone exports; decide where the files may go."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Export to zip is an option on the DLP and label publishing policies pages, and the export page names no licence of its own. The Microsoft Purview service description lists Microsoft 365 E3 and E5 among the licences for DLP for Exchange, SharePoint and OneDrive."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","information-protection","sensitivity-labels","policy","diagnostics"]
sources:
  - title: "Export policy configuration in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/purview-policy-export"
    kind: "learn"
  - title: "What's new in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/whats-new"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Data loss prevention and Microsoft Teams"
    url: "https://learn.microsoft.com/purview/dlp-microsoft-teams"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Export-PurviewConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-purviewconfig"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 557553"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557553"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-loss-prevention-export-dlp-and-label-policy-configurations","sensitivity-labels","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Export of all DLP policy configurations as a ZIP file"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Export to zip"
      docs: "https://learn.microsoft.com/purview/purview-policy-export"
    api: null
    note: "Exports every DLP policy; individual policies cannot be selected. Role required is not stated on the export page."
  - governs: "Export of label publishing policies and all sensitivity labels as a ZIP file"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Export policies > Export to Zip"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api: null
    note: "Export policies is on the Label policies page; Export to Zip includes all sensitivity labels in the tenant."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-05-26T23:00:59"
changes:
  - date: "2026-11-27"
    note: "New briefing for the Worldwide roadmap item; GCC, GCC High and DoD are covered by item 566321."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 55 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 54
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "316b524cf1990b430b7babc7286cd87d"
---

## What's changing

Microsoft Purview adds an **Export to zip** option to the DLP policies page and the label publishing policies page. It downloads a point-in-time snapshot of all policy configurations in that solution as a ZIP file in XML format. Microsoft Learn says the export captures rules, conditions, actions, scoping and priority settings where relevant; label policies include the labels but no rules or conditions, because they have none. On the **Label policies** page the option sits under **Export policies**, and Learn says the **Export to Zip** selection there includes the policies and all sensitivity labels in the tenant.

The file is for reference only. Learn says it is read-only, cannot be imported back into a tenant to restore or create policies, and does not update when the configuration changes. Individual policies cannot be selected: the ZIP always holds all policies. The separate **Export to CSV** option exports only the summary shown in the policies table, such as policy name, status and last modified date.

The roadmap description names support tickets as the purpose. Learn lists that scenario, so that support engineers can review the full configuration without a live troubleshooting session, and also lists configuration backup and local analysis with PowerShell or by uploading the file to Microsoft 365 Copilot.

This roadmap item (557553) covers Worldwide (Standard Multi-Tenant). Its status is Launched, with a preview date of March CY2026 and a target date of April CY2026, and it lists both Preview and General Availability as release phases. Learn's what's-new page lists the export as generally available in April 2026. Microsoft lists the same feature for GCC, GCC High and DoD under roadmap item 566321, with a target of August CY2026; see [the briefing for those clouds](/features/microsoft-purview-data-loss-prevention-export-dlp-and-label-policy-configurations/).

## Why it matters

For support cases about DLP or label policies, an administrator can attach one complete snapshot instead of describing or screenshotting each policy. That should shorten tickets, but the snapshot is only as current as the moment it was taken, so a ticket opened after a policy change needs a fresh export.

The real consideration is handling. Each ZIP is a full copy of how the organisation's DLP or labelling is built, including scoping, and the label export also carries every sensitivity label in the tenant. Anyone who receives the file learns what is protected and how. Nothing changes for users if nobody acts: the option only does something when an administrator selects it.

## Risk assessment

**Data exposure**
- The DLP ZIP holds every policy's rules, conditions, actions, scoping and priority; the label ZIP holds the publishing policies and all sensitivity labels. A copy stored in a shared drive or a ticket system shows how protection is built. Decide who may export and where the files may be kept.
- Learn lists uploading the extracted XML to Microsoft 365 Copilot as an analysis option. Treat that as a decision for your data handling rules, not a default.

**Security & identity**
- The export page names no role for **Export to zip**. Roles to create and deploy DLP policies are listed on the DLP policy article, which does not say they govern the export.

**Autonomy & actions**
- No change: the export is read-only and cannot be imported to create or restore policies.

**Change & support**
- The snapshot does not update, so an old file describes a configuration that may no longer exist.
- The ZIP cannot be narrowed to one policy, so a ticket about one policy still carries all of them.

## Cost and licensing

The [export page](https://learn.microsoft.com/purview/purview-policy-export) names no licence, meter or prerequisite for **Export to zip**, and a licence specific to the export is not yet published. The option sits inside Purview DLP and Information Protection, which are licensed as those solutions.

The [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, Office 365 E5/A5/G5/E3/A3/G3 and others as licences for DLP for Exchange Online, SharePoint Online and OneDrive. For sensitivity labelling, its table marks Manual Sensitivity Labeling as included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, while the same section says sensitivity labeling requires Microsoft 365 E5 or Microsoft 365 Information Protection and Governance (IPG), and that the administrator creating and managing Information Protection features must have the appropriate licences. Confirm entitlement before relying on the table.

The indirect cost is admin time to export, store and review files. Learn says the standard `Import-Clixml` cmdlet reads the exported XML locally and does not connect to any service.

## Scope

- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it. GCC, GCC High and DoD are covered by roadmap item 566321.
- **Platform:** Web, in the Microsoft Purview portal.
- **Where:** the **Data loss prevention > Policies** page and the **Label policies** page under **Solutions > Information Protection > Publishing policies**. Learn says that where a solution supports exporting, **Export to zip** is available on its policies page.
- **Roles:** not stated on the export page.
- **Status:** Launched; preview March CY2026, target April CY2026.

## Governance guidance

### Before rollout
- Decide where exported ZIP files may be stored and who may receive them, since each holds a full DLP or labelling configuration.
- Decide whether staff may upload the extracted XML to Microsoft 365 Copilot for analysis.
- Tell the staff who raise DLP and labelling support tickets that the ZIP export exists on both policies pages.

### At rollout
- Open **Data loss prevention > Policies** and the **Label policies** page and confirm that the export option appears.
- Take a baseline export of each solution and store it under your records rules.
- Open one extracted XML with `Import-Clixml` to confirm your team can read it.

### After rollout
- Export again before raising a ticket and after any policy change, because the file does not update.
- Use the ZIP for tickets and keep **Export to CSV** for table summaries.
- Delete old exports once a ticket closes, under your retention rules.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Export of all DLP policy configurations as a ZIP file</strong><br><small>Tenant</small><br><small class="controls__note">Exports every DLP policy; individual policies cannot be selected. Role required is not stated on the export page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Export to zip <a href="https://learn.microsoft.com/purview/purview-policy-export" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Export of label publishing policies and all sensitivity labels as a ZIP file</strong><br><small>Tenant</small><br><small class="controls__note">Export policies is on the Label policies page; Export to Zip includes all sensitivity labels in the tenant.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Export policies › Export to Zip <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The two rows are where the export is taken, not switches over it. The export page names no role; confirm which of your admin role groups see the option before relying on role membership to limit who exports.

The Export-PurviewConfig cmdlet in Security & Compliance PowerShell returns Purview diagnostic configuration data, including DLP and MIPLabels components, as a ZIP, and needs Security & Compliance permissions. Its page does not describe it as the portal's **Export to zip**, so treat it as a related route for support diagnostics rather than the automation for this option.

## Open questions

- Which role or role group is needed to see and use **Export to zip** on the DLP and label policies pages? Watch the Learn export page.
- Is an export recorded in the unified audit log, and under which activity name? Watch the audit log activities page.
- Does Export-PurviewConfig produce the same content as the portal's ZIP? Watch the cmdlet page.
- Will further Purview solutions gain the option? The export page says it appears where a solution supports it; watch Learn's what's-new page.

<!-- rationale
risk: Low. The export is a read-only snapshot that cannot be imported back, so it changes nothing in the tenant. The exposure is the file itself, which holds the full configuration of every policy in the solution.
cost: Low. The only cost the sources show is admin time to export, store and review the files. The export page names no licence or meter of its own; DLP and labelling licences are set out in the Microsoft Purview service description.
impact: Low. Only administrators who open the DLP or label publishing policies pages see the option. Users and their content are not affected.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; front matter: changes / record: Microsoft lists the same export feature for GCC, GCC High and DoD under roadmap item 566321. | Found: Record 566321: "title": "Microsoft Purview: Data Loss Prevention - Export DLP and Label Policy Configurations"; "clouds": ["GCC", "GCC High", "DoD"]. | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=566321 to sources as kind roadmap, titled 'Microsoft 365 Roadmap item 566321', to support the government-cloud scope and August target.
- [unsupported, minor] rationale: impact / role: Only administrators who open the DLP or label publishing policies pages see the export option. | Found: Searched: 'Microsoft Purview DLP label policies Export to zip who can export administrators readers access permissions'; opened purview-policy-export, purview-permissions and dlp-create-deploy-policy. None states administrator-only visibility for this export. | Fix: Replace the impact rationale with: 'Low. The export option sits on the DLP and label publishing policies pages. Its output is read-only and cannot be imported to restore or create policies.' Do not assert administrator-only visibility while the export role is undocumented.
-->
