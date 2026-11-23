---
title: "Microsoft Purview DLP: quarantine files in SharePoint and OneDrive"
slug: "microsoft-purview-data-loss-prevention-file-quarantine-action-in-dlp-for-sharepoint-onedri"
roadmapId: 557190
topic: "governance"
products: ["Microsoft Purview"]
summary: "A new DLP rule action moves matching SharePoint and OneDrive files to an admin-defined quarantine site and removes access for everyone, owner included. Nothing happens until an admin adds the action to a policy."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Learn get-started page states that DLP file quarantine for SharePoint and OneDrive is only available for E5 licenses and points to Microsoft's licensing guidance. It lists no separate meter or price."
audiences: ["compliance","security","m365-admin","service-owner"]
tags: ["dlp","purview","sharepoint","onedrive","auditing"]
sources:
  - title: "Microsoft 365 Roadmap item 557190"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557190"
    kind: "roadmap"
  - title: "Learn about DLP file quarantine for SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/dlp-spo-odb-quarantine-learn"
    kind: "learn"
  - title: "Get started with DLP file quarantine for SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/dlp-spo-odb-quarantine-get-started"
    kind: "learn"
  - title: "Create a DLP policy to quarantine files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["endpoint-dlp","auditing","sensitivity-labels","sensitive-information-types","microsoft-purview-data-loss-prevention-adaptive-scopes-for-dlp-for-sharepoint"]
controls:
  - governs: "Whether a DLP rule quarantines matching SharePoint and OneDrive files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > Create rule > Actions > Add an action > Restrict access or encrypt the content in Microsoft 365 locations"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule> -SharepointMoveToQuarantineLocation $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "There, select Block everyone and move file to quarantine location. Locations: SharePoint sites and OneDrive accounts. Simulation mode is supported. The cmdlet reference gives no description of the parameter."
  - governs: "Which SharePoint site receives quarantined files and what the tombstone file says"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Settings > File quarantine"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    api: null
    note: "Set Quarantine folder path and Replacement file message. The action cannot be selected in a policy until this is configured."
  - governs: "Finding the original path and activity of quarantined files in the audit log"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Search-UnifiedAuditLog runs in Exchange Online PowerShell. A read control for investigation, not a way to limit the action."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-23"
    note: "First briefing on the DLP file quarantine action for SharePoint and OneDrive; roadmap says Launched while Learn pages still carry a preview note."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 92 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 92
  confirmed: 88
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "d58deb9d886211b7385df48dbb869e1c"
---

## What's changing

Microsoft Purview data loss prevention (DLP) gains a quarantine action for SharePoint and OneDrive. When a file matches a rule that uses the action, Learn says the file is removed from its original location, moved to an admin-defined quarantine site in SharePoint, and replaced by a tombstone text file that carries an admin-configured message. The roadmap item describes the same behaviour: the file is moved to a restricted quarantine location, access is removed for all users, and the file is kept for review.

The sequence Learn gives is: all existing permissions and sharing links on the file are removed; a system account moves the file to the quarantine site, preserving the original folder structure; a `.txt` file with the original name replaces it and shows the admin's message plus the relative path of the quarantined file; and an audit record, a DLP rule match event in Activity explorer and a DLP alert are created, each carrying the quarantine file location.

The action applies only to files created or modified after the policy that uses it is turned on. Existing files are not evaluated, which Learn says is deliberate because restore is manual. Once a SharePoint site is designated as the quarantine location, its contents are excluded from DLP rule evaluation automatically.

The roadmap record lists the item as Launched, with a target of July CY2026 and a preview date of March CY2026, release phases General Availability and Preview, Worldwide (Standard Multi-Tenant) only, on the web. The three Learn pages read for this briefing still carry a preview note, so the roadmap and Learn differ on whether this is generally available.

## Why it matters

This is the strongest response a DLP policy has for files in SharePoint and OneDrive: Learn calls it the most restrictive DLP action available for those locations, and says it removes access from everyone, including the file owner. It suits the case where blocking sharing is not enough because the file should not sit in that location at all.

Because it is something an administrator adds to a rule, nothing changes in a tenant until someone does. The decision for a service owner is whether the cost of a wrong match is acceptable: original sharing permissions are not restored after a restore, only the latest version comes back, and every restore is a manual job for an administrator. Plan the quarantine site, its owners and a restore routine before a policy goes live.

## Risk assessment

**Data exposure**

- The quarantine site holds files that matched a DLP rule, which Learn describes as highly sensitive. Learn tells administrators to restrict the site to the administrators who manage quarantine and recommends that they hold the Data Classification List Viewer and Data Classification Content Viewer permissions, using the criteria applied to those roles.
- A DLP rule match event, alert and audit record each carry the quarantine file location, so anyone who can read those can find where a file went. The tombstone shows the file owner only the relative path, not the full quarantine folder path.

**Security & identity**

- A system account performs the move, and the configuring roles are Compliance administrator, Security administrator or Compliance data administrator (Microsoft Entra roles). Review who holds them, because they can set a rule that removes access to files across SharePoint and OneDrive.

**Autonomy & actions**

- The action runs automatically on each match: permissions and sharing links are removed and the file is moved, with no approval step described on the Learn pages. A broadly scoped or mis-tuned rule therefore removes access for owners and recipients at once.
- Restore is manual: Learn describes no automated restore and no restore action in the Microsoft Purview portal. After a restore, sharing permissions are not restored, only the latest version returns, and the same DLP rule does not quarantine the file again.
- Limits can leave a match unenforced or delayed: Learn says a maximum of 200,000 items per tenant in a 24-hour period may be processed, with the rest possibly processed later, and that quarantine may not complete for file paths longer than 350 characters, because no tombstone is created and the action is not applied.

**Change & support**

- Expect help-desk contacts from file owners who find a `.txt` file in place of a document. The message in the tombstone is the only guidance they get, so write it to name a contact.
- A file that is quarantined and later restored is not re-quarantined by the same rule, even if the file or rule changes. Other DLP rules still apply to it.

## Cost and licensing

**Licence.** The Learn get-started page states: "DLP file quarantine for SharePoint and OneDrive is only available for E5 licenses." It points to the Microsoft 365 Enterprise Plans and the Microsoft 365 security and compliance licensing guidance for details.

**Meter.** The get-started page lists licensing and Microsoft Entra roles as prerequisites and names no meter or price for the action. Cost beyond the licence is indirect: admin time to design the policy, run it in simulation, manage the quarantine site and restore files by hand.

**Not yet published.** Whether Microsoft's E5-equivalent add-on licences also cover the action is not stated on the page.

## Scope

- **Locations:** SharePoint sites and OneDrive accounts. The quarantine destination must be a SharePoint site in the tenant: Learn says a subsite or a OneDrive location cannot be used, and a selected subsite resolves to the site that contains it. Any SharePoint site template can be used.
- **Files:** Files created or modified after the policy that uses the action is turned on. Learn says all file types that DLP supports for SharePoint and OneDrive are supported. The action is not available as an on-demand classification action, but a file classified by an on-demand scan can trigger it if the classification result matches a rule for the first time.
- **Roles to configure:** Compliance administrator, Security administrator or Compliance data administrator.
- **Cloud and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and the web platform.
- **Prerequisites:** a quarantine site and the quarantine settings must be configured before the action can be selected in a policy.
- **Related features:** Endpoint DLP auto-quarantine applies to files on Windows and macOS devices, and Microsoft Defender for Cloud Apps has its own file quarantine. Learn says both are separate from this action.

## Governance guidance

### Before rollout

- Create a dedicated SharePoint site for quarantine, with access limited to the administrators who manage it, and no active business content. Learn makes the site's access control and lifecycle the administrators' responsibility.
- Choose the administrators for the quarantine site by the same criteria used for the Data Classification List Viewer and Data Classification Content Viewer roles, which Learn recommends.
- Set the quarantine site and the tombstone message under the File quarantine settings (controls table, row 2) and name a real contact in the message.
- Confirm the licence position: the Learn page says the action is only available for E5 licenses.

### At rollout

- Add the action to a rule through the DLP policy wizard (controls table, row 1) and run the policy in simulation mode first; Learn says simulation mode is supported for the quarantine action.
- Review simulated matches in Activity explorer (Data classification > Activity explorer) and in the DLP alerts dashboard before turning the policy on, to confirm it targets the files you expect.
- Turn on alerts for the rule so that the compliance team is told on each quarantine, as the Learn walkthrough does by sending an alert to admins every time an activity matches the rule.

### After rollout

- Review quarantine alerts in the Microsoft Purview portal under Data loss prevention > Alerts, which show the quarantine file location, the file owner and the original file path.
- Search the audit log (controls table, row 3) for the original path when a restore is requested.
- Restore files by hand: move the file back, delete the tombstone, and tell the owner to rebuild sharing permissions.
- Watch the volume of matches against the 200,000-items-per-tenant 24-hour limit that Learn gives.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a DLP rule quarantines matching SharePoint and OneDrive files</strong><br><small>Tenant</small><br><small class="controls__note">There, select Block everyone and move file to quarantine location. Locations: SharePoint sites and OneDrive accounts. Simulation mode is supported. The cmdlet reference gives no description of the parameter.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › Create rule › Actions › Add an action › Restrict access or encrypt the content in Microsoft 365 locations <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -SharepointMoveToQuarantineLocation $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint site receives quarantined files and what the tombstone file says</strong><br><small>Tenant</small><br><small class="controls__note">Set Quarantine folder path and Replacement file message. The action cannot be selected in a policy until this is configured.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Settings › File quarantine <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Finding the original path and activity of quarantined files in the audit log</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Search-UnifiedAuditLog runs in Exchange Online PowerShell. A read control for investigation, not a way to limit the action.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The action has no tenant-wide switch of its own in the sources read: it takes effect through a DLP rule, so scoping the policy's locations and conditions is what limits it. The File quarantine settings must be complete before the wizard lets you select the action.

Row 1's PowerShell call is the parameter name as the cmdlet reference lists it. At the time of writing (November 2026) its description in that reference is an unfilled placeholder, so confirm the behaviour in a test tenant before scripting it. The Learn walkthrough shows the wizard path only.

Audit search needs the Audit Logs or View-Only Audit Logs role. Configuring the quarantine action needs one of the Entra roles listed under Scope.

## Open questions

- The roadmap lists the item as Launched with General Availability and Preview phases, while the Learn pages carry a preview note. Which parts are generally available, and when do the Learn pages drop the note? Watch the roadmap item and the Learn page for DLP file quarantine.
- Does "E5 licenses" on the get-started page include the Microsoft Purview Suite and other E5-equivalent add-ons? Watch the Learn get-started page and the linked licensing guidance.
- Will an automated restore action or a PowerShell reference description for the quarantine parameter be added? Learn currently describes restore as manual and the parameter's reference description as an unfilled placeholder.
- What is the audit operation name recorded for a quarantine, so that alerts can be built on it? Watch the Learn page for audit activities.

<!-- rationale
risk: Low. Nothing is quarantined until an admin adds the action to a DLP rule, but once a rule uses it, matched files lose all permissions and sharing links, including the owner's, and restore is manual.
cost: Low. The Learn page says the feature is only available for E5 licenses and lists no meter; the cost left is admin time for manual restores and for looking after the quarantine site.
impact: Low. Admins configure it, and nobody else is affected until a policy is on; then the owners of matched files find a .txt tombstone file where their file was.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Change & support / behaviour: The tombstone message is the only guidance file owners get. | Found: Under User notifications, set the toggle to On if you want to notify users through policy tips. | Fix: Replace 'The message in the tombstone is the only guidance they get, so write it to name a contact' with 'Write the tombstone message to name a contact.' The documented optional policy tips mean the tombstone need not be the only guidance. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine
- [contradicted, blocker] controls[0].ui; Governance controls: row 1 / admin-path: The printed policy-creation path reaches Create rule after Custom policy without specifying the advanced-rule policy-settings choice. | Found: On the Define policy settings page, make sure the Create or customize advanced DLP rules option is selected. Select Next. Select + Create rule. | Fix: Replace the UI path in front matter and the rendered table with 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom policy > Define policy settings > Create or customize advanced DLP rules > Create rule > Actions > Add an action > Restrict access or encrypt the content in Microsoft 365 locations > Block everyone and move file to quarantine location', as documented at https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine. Retain the note specifying SharePoint sites and OneDrive accounts. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine
- [unsupported, blocker] controls[0].api; Governance controls: row 1 and PowerShell paragraph / command: Set-DlpComplianceRule -Identity <rule> -SharepointMoveToQuarantineLocation $true configures the rule to quarantine matching SharePoint and OneDrive files. | Found: Searched: Set-DlpComplianceRule SharepointMoveToQuarantineLocation Identity Boolean; "SharepointMoveToQuarantineLocation" quarantine true. Read Set-DlpComplianceRule reference and quarantine walkthrough: parameter is Boolean but description is a placeholder; no enabling semantics stated. | Fix: Set controls[0].api to null and render that side as 'Not yet documented'. Replace the PowerShell paragraph with 'At the time of writing (November 2026), the Set-DlpComplianceRule reference lists SharepointMoveToQuarantineLocation as Boolean but does not describe its behaviour; no verified call for configuring this action is documented.' Remove the instruction to test the proposed enabling call.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls: row 2 / admin-path: Microsoft Purview portal > Data loss prevention > Settings > File quarantine reaches the page holding destination and tombstone controls. | Found: Go to Data loss prevention > Settings. Select File quarantine. Under Quarantine folder path, select a SharePoint site from the list of available sites. | Fix: Extend controls[1].ui.path and the rendered path to 'Data loss prevention > Settings > File quarantine > Quarantine folder path'. Keep the note 'Set Quarantine folder path and Replacement file message' to identify the second setting on that page. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every control the governance checklist asks readers to set or review is represented in the controls table. | Found: Checklist: 'Review simulated matches in Activity explorer'; 'Turn on alerts for the rule'; 'Review quarantine alerts'. Table: quarantine rule action, quarantine destination/message, audit search only. | Fix: The Activity explorer review, per-match admin-alert configuration, and DLP-alert review steps have no corresponding controls-table rows. Record these as checklist/table omissions; this finding does not request additional rows.
-->
