---
title: "Microsoft Purview: export DLP and label policy configurations as a ZIP file (GCC, GCC High, DoD)"
slug: "microsoft-purview-data-loss-prevention-export-dlp-and-label-policy-configurations"
roadmapId: 566321
topic: "governance"
products: ["Microsoft Purview"]
summary: "Admins can download all DLP or all label publishing policies as a read-only ZIP snapshot to attach to support tickets. This item covers GCC, GCC High and DoD. Nothing changes until an admin exports; no action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The export page lists no licence or prerequisite for this feature, and a licence specific to the export is not yet published. This is an option inside licensed Purview solutions. The Microsoft Purview service description lists Microsoft 365 E3/G3 and E5/G5 among licences supporting DLP for Exchange, SharePoint and OneDrive and manual sensitivity labeling."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","information-protection","sensitivity-labels","policy","gcc","gcc-high","dod"]
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
  - title: "Use data loss prevention policies for non-Microsoft cloud apps"
    url: "https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps"
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
  - title: "Microsoft 365 Roadmap item 566321"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566321"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 557553"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557553"
    kind: "roadmap"
videos: []
related: ["sensitivity-labels","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Export of DLP policy configuration as a ZIP file"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Export to zip"
      docs: "https://learn.microsoft.com/purview/purview-policy-export"
    api: null
    note: "Export to zip is on this page (export page). The cmdlet returns DLP diagnostic data as a ZIP and needs Security & Compliance permissions; its page does not mention Export to zip."
  - governs: "Export of label publishing policy configuration as a ZIP file"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Export policies > Export to Zip"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api: null
    note: "The Label policies page has the Export policies option. The cmdlet returns MIPLabels diagnostic data as a ZIP; its page does not mention Export to zip."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-07T23:01:35"
changes:
  - date: "2026-11-22"
    note: "New briefing for the GCC, GCC High and DoD roadmap item; the Worldwide item 557553 is listed separately."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 51 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: removed an unsupported claim about how support cases start, set both API sides to Not yet documented, extended the admin paths, and set the licensing model to included."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: default state changed to user-opt-in, and a note added that the service description's labeling licence text conflicts with its manual-labeling table."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6890e9fb790ee78a9be957ea74d2d03d"
---

## What's changing

Microsoft Purview adds an **Export to zip** option to policies pages. On the DLP policies page and the label publishing policies page it downloads a point-in-time snapshot of all policy configurations as a ZIP file in XML format. Microsoft Learn says the export captures rules, conditions, actions, scoping and priority settings where relevant, and that label policies include the labels but no rules or conditions, because they have none.

The file is for reference only. Learn says it is read-only, cannot be imported back into a tenant to restore or create policies, and does not update when the configuration changes. You cannot pick individual policies: the ZIP always holds all policies for that solution. The separate **Export to CSV** option exports only the summary shown in the policies table, such as policy name, status and last modified date.

The roadmap description names support tickets as the purpose, and Learn lists the same scenario: attach the ZIP so support engineers can review the full configuration without a live troubleshooting session. Learn also lists configuration backup and local analysis, with PowerShell or Microsoft 365 Copilot.

This roadmap item (566321) covers GCC, GCC High and DoD, is Launched, and has a target date of August CY2026. Microsoft lists the feature under a second roadmap item, 557553, for Worldwide (Standard Multi-Tenant), also Launched, with a target of April CY2026 and a preview date of March CY2026. Learn's what's-new page lists the export as generally available in April 2026 and names no cloud.

## Why it matters

With the export, an admin in these clouds can attach a complete snapshot to a support ticket instead of screenshotting each policy, and Learn describes this as letting engineers review the configuration without a live session.

The cost of getting it wrong is handling, not behaviour. The ZIP is a full copy of every policy in the solution, so decide where it may be stored and who may receive it. Because it is a snapshot that does not update, re-export when the policies change, or the ticket will describe a configuration that no longer exists. Nothing changes for users, and no source says existing behaviour changes.

## Risk assessment

**Data exposure**
- The ZIP holds the full configuration of every policy in the solution: rules, conditions, actions, scoping and priority for DLP. Anyone who receives the file sees how your DLP and label policies are built. Control: decide who may export and where the file is stored; the export page documents no setting that limits the export itself.
- The ZIP cannot be limited to selected policies, so a ticket about one policy still carries all of them.

**Security & identity**
- The export page names no role required to use **Export to zip**. The Export-PurviewConfig cmdlet, a separate documented route for DLP and MIPLabels diagnostic data, requires permissions assigned in Security & Compliance.

**Autonomy & actions**
- No change: the export is read-only and, per Learn, cannot be imported to create or restore policies. It takes no action on policies, labels or content.

**Change & support**
- The snapshot goes stale as soon as a policy changes, so export again before opening a ticket.
- The CSV option holds only the table summary, so a ticket that needs rules and conditions needs the ZIP.

## Cost and licensing

The export page lists no licence, meter or prerequisite, and Microsoft Learn documents no charge for the export. A licence specific to this feature is not yet published. The DLP policy article refers readers to Microsoft 365 licensing guidance for DLP licensing, so confirm your entitlement for DLP and sensitivity labels there.

This is an option inside licensed Purview solutions. The Microsoft Purview service description lists Microsoft 365 E3/G3 and E5/G5 among licences supporting DLP for Exchange, SharePoint and OneDrive and manual sensitivity labeling; no export-specific licence is published. The same service-description section also says sensitivity labeling, including automatic or policy-based labeling, requires Microsoft 365 E5 or Microsoft 365 Information Protection and Governance (IPG), which conflicts with its manual-labeling table; confirm entitlement before relying on that table.

The indirect cost is admin time to export, store and review the files. The ZIP can be analysed locally with the standard `Import-Clixml` PowerShell cmdlet, which Learn says reads the file locally and does not connect to any service.

## Scope

- **Clouds:** GCC, GCC High and DoD, as the roadmap record lists them. Learn's export page names no cloud.
- **Platform:** Web, in the Microsoft Purview portal.
- **Where:** the DLP policies page and the label publishing policies page. Learn says that where a solution supports exporting, the **Export to zip** option is available on its policies page.
- **Roles:** Learn's export page names no role. Roles for creating and deploying DLP policies are listed on the DLP policy article, but that page does not say they apply to the export.
- **Release phase:** General Availability, status Launched, target August CY2026.

## Governance guidance

### Before rollout
- Decide where exported ZIP files may be stored and who may receive them, because each file holds the complete policy configuration for DLP or for label publishing.
- Tell the staff who raise Microsoft support tickets for DLP or label issues that the **Export to zip** option exists on both policies pages.
- Confirm which role your admins need to see the option, since the export page does not name one.

### At rollout
- Open the DLP Policies page and the label publishing policies page in the Microsoft Purview portal and confirm that **Export to zip** appears in your cloud.
- Take a baseline export of each solution and store it under your records rules.
- Extract one ZIP and open the XML with `Import-Clixml` to confirm your team can read it.

### After rollout
- Export again before raising a ticket and after any change to the policies, because the file does not update.
- Use **Export to ZIP** for tickets and keep **Export to CSV** for table summaries only.
- Watch the Learn export page and Message center for role, licence and audit details.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Export of DLP policy configuration as a ZIP file</strong><br><small>Tenant</small><br><small class="controls__note">Export to zip is on this page (export page). The cmdlet returns DLP diagnostic data as a ZIP and needs Security &amp; Compliance permissions; its page does not mention Export to zip.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Export to zip <a href="https://learn.microsoft.com/purview/purview-policy-export" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Export of label publishing policy configuration as a ZIP file</strong><br><small>Tenant</small><br><small class="controls__note">The Label policies page has the Export policies option. The cmdlet returns MIPLabels diagnostic data as a ZIP; its page does not mention Export to zip.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Export policies › Export to Zip <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The portal option is the main control: Learn describes **Export to zip** as available where a solution supports it, and documents no switch to turn it off. The roles needed are not stated on the export page.

The Export-PurviewConfig cmdlet is a separate documented cmdlet for diagnostic data. Its page does not describe it as the portal's **Export to zip**, so treat it as a related route and not as the API for this feature. The ZIP cannot be limited to chosen policies in the portal.

## Open questions

- Which role or role group is required to see and use **Export to zip** on the DLP and label policies pages? Watch the Learn export page.
- Is a licence specific to the export required in GCC, GCC High and DoD, and is any difference from Worldwide planned? Watch the roadmap items and Learn.
- Is using **Export to zip** recorded in the audit log, and under which event name?
- Does Export-PurviewConfig produce the same file as the portal option? Watch the cmdlet page and the export page.

<!-- rationale
risk: Low. The export is a read-only snapshot that cannot be imported back, so it changes nothing in the tenant. The one exposure is the file itself, which holds the full policy configuration.
cost: Low. The only cost the sources show is admin time to export and store the files. A licence specific to the export is not yet published.
impact: Low. The export option is on the DLP and label publishing policies pages and produces a read-only reference snapshot.
-->
