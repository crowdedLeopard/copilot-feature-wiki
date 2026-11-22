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
defaultState: "on"
action: "review"
licensing:
  model: "unknown"
  notes: "The export page lists no licence or prerequisite for this feature. The DLP policy article points to Microsoft 365 licensing guidance for DLP, and a licence specific to the export is not yet published."
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
  - title: "Microsoft 365 Roadmap item 566321"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566321"
    kind: "roadmap"
videos: []
related: ["sensitivity-labels","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Export of DLP policy configuration as a ZIP file"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies"
      docs: "https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps"
    api:
      kind: "powershell"
      call: "Export-PurviewConfig -Components DLP"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-purviewconfig"
    note: "Export to zip is on this page (export page). The cmdlet returns DLP diagnostic data as a ZIP and needs Security & Compliance permissions; its page does not mention Export to zip."
  - governs: "Export of label publishing policy configuration as a ZIP file"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Export-PurviewConfig -Components MIPLabels"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-purviewconfig"
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
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 47
  unconfirmed: 4
  contradicted: 0
  attempts: 1
  hash: "d6f0652cb6ffdf1615732e7671a902cd"
---

## What's changing

Microsoft Purview adds an **Export to zip** option to policies pages. On the DLP policies page and the label publishing policies page it downloads a point-in-time snapshot of all policy configurations as a ZIP file in XML format. Microsoft Learn says the export captures rules, conditions, actions, scoping and priority settings where relevant, and that label policies include the labels but no rules or conditions, because they have none.

The file is for reference only. Learn says it is read-only, cannot be imported back into a tenant to restore or create policies, and does not update when the configuration changes. You cannot pick individual policies: the ZIP always holds all policies for that solution. The separate **Export to CSV** option exports only the summary shown in the policies table, such as policy name, status and last modified date.

The roadmap description names support tickets as the purpose, and Learn lists the same scenario: attach the ZIP so support engineers can review the full configuration without a live troubleshooting session. Learn also lists configuration backup and local analysis, with PowerShell or Microsoft 365 Copilot.

This roadmap item (566321) covers GCC, GCC High and DoD, is Launched, and has a target date of August CY2026. Microsoft lists the feature under a second roadmap item, 557553, for Worldwide (Standard Multi-Tenant), also Launched, with a target of April CY2026 and a preview date of March CY2026. Learn's what's-new page lists the export as generally available in April 2026 and names no cloud.

## Why it matters

Support cases about DLP or sensitivity label behaviour usually start with a request for the policy configuration. With the export, an admin in these clouds can attach a complete snapshot to the ticket instead of screenshotting each policy, and Learn describes this as letting engineers review the configuration without a live session.

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
<tr><td data-label="Control"><strong>Export of DLP policy configuration as a ZIP file</strong><br><small>Tenant</small><br><small class="controls__note">Export to zip is on this page (export page). The cmdlet returns DLP diagnostic data as a ZIP and needs Security &amp; Compliance permissions; its page does not mention Export to zip.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies <a href="https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Export-PurviewConfig -Components DLP</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/export-purviewconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Export of label publishing policy configuration as a ZIP file</strong><br><small>Tenant</small><br><small class="controls__note">The Label policies page has the Export policies option. The cmdlet returns MIPLabels diagnostic data as a ZIP; its page does not mention Export to zip.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Export-PurviewConfig -Components MIPLabels</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/export-purviewconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
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
impact: Low. Only admins who open the DLP Policies page or the label publishing policies page see the new option; end users notice nothing.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Support cases about DLP or sensitivity labels usually start with a request for policy configuration. | Found: Searched: Purview support policy configuration request DLP sensitivity labels troubleshooting. Read policy-export, self-help diagnostics and auto-labeling troubleshooting excerpts; none states how support cases usually start. | Fix: Remove 'Support cases about DLP or sensitivity label behaviour usually start with a request for the policy configuration.' The following sentence can remain.
- [unsupported, blocker] controls[0].api; Governance controls table / command: Export-PurviewConfig -Components DLP is the automation counterpart for the portal's full DLP policy configuration snapshot. | Found: Searched: Purview policy configuration export ZIP Security Compliance PowerShell Export-PurviewConfig portal. Read policy-export and Export-PurviewConfig in full: the latter documents diagnostic configuration data, not equivalence to the portal's complete XML policy snapshot. | Fix: Set controls[0].api to null. Keep the existing prose describing Export-PurviewConfig as a separate diagnostic-export route; do not present it in the column defined as the command that does the same as the portal control.
- [unsupported, blocker] controls[1].api; Governance controls table / command: Export-PurviewConfig -Components MIPLabels is the automation counterpart for the portal's full label publishing policy snapshot. | Found: Searched: Purview policy configuration export ZIP Security Compliance PowerShell Export-PurviewConfig portal. Read policy-export and Export-PurviewConfig in full: MIPLabels diagnostic export is documented, but the portal snapshot's contents and format are not established for it. | Fix: Set controls[1].api to null. Keep the existing prose describing the separate MIPLabels diagnostic export, without asserting it performs the same export as the portal control.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; front matter: changes / record: A separate item, 557553, describes the same export for Worldwide (Standard Multi-Tenant). | Found: Item 557553: "title": "Microsoft Purview: Data Loss Prevention – Export DLP and Label Policy Configurations"; "clouds": ["Worldwide (Standard Multi-Tenant)"] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=557553 to sources as a roadmap source for the separate Worldwide item's facts.
- [unsupported, minor] rationale: impact / availability: Only admins who open the DLP or label publishing policies pages see the new option. | Found: Searched: Export to zip admin default Purview; Export to zip audit role permissions disable. Read policy-export, DLP permissions, sensitivity-label permissions and portal permission excerpts; no passage limits visibility to administrators. | Fix: Replace the impact rationale with 'Low. The export option is on the DLP and label publishing policies pages and produces a read-only reference snapshot.' Do not assert an exclusive role requirement when the export role is unstated.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost; Open questions / licensing: The licensing model is unknown because no licence specific to the export is published. | Found: Searched: Purview Export to zip license licensing charge meter; Microsoft Purview service description sensitivity labels DLP license export policy configuration. Read export, DLP licensing, sensitivity-label licensing and service description; no export-specific entitlement found. | Fix: Set licensing.model to 'included'. Keep the narrow export-specific uncertainty, but add: 'This is an option inside licensed Purview solutions. The Microsoft Purview service description lists Microsoft 365 E3/G3 and E5/G5 among licences supporting DLP for Exchange, SharePoint and OneDrive and manual sensitivity labeling; no export-specific licence is published.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft Purview portal > Data loss prevention > Policies reaches the DLP export's policies page. | Found: Sign in to the Microsoft Purview portal. Open Data loss prevention > Policies > + Create policy. | Fix: The printed route stops on the correct page. Extend controls[0].ui.path to 'Data loss prevention > Policies > Export to zip', using the already-cited https://learn.microsoft.com/purview/purview-policy-export for the final step, and set controls[0].ui.docs to that export page. | Source: https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Microsoft Purview portal > Solutions > Information Protection > Publishing policies reaches the label publishing export's page. | Found: Sign in to the Microsoft Purview portal > Solutions > Information Protection > Publishing policies. ... For more information about the Export policies option ... see Export policy configuration in Microsoft Purview. | Fix: Extend controls[1].ui.path to 'Solutions > Information Protection > Publishing policies > Export policies > Export to Zip'. The already-cited https://learn.microsoft.com/purview/whats-new#april-2026 documents the Export policies option and its Export to Zip selection. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
-->
