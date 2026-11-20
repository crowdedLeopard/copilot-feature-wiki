---
title: "Microsoft Purview: apply default SharePoint library labels to existing files (GCC, GCC High, DoD)"
slug: "microsoft-purview-information-protection-apply-default-sharepoint-library-labels-to-data-a"
roadmapId: 575283
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to label existing SharePoint files to match their library's default sensitivity label. This item covers GCC, GCC High and DoD. Learn documents an admin-created auto-labeling policy for this; review before December 2026."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn documents the existing-files capability as service-side auto-labeling. The Purview service description lists Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5 among the licenses for client and service-side automatic sensitivity labeling. A licence or meter specific to this feature is not yet published."
audiences: ["compliance","m365-admin","security","service-owner"]
tags: ["purview","sensitivity-labels","information-protection","sharepoint","auto-labeling","gcc","gcc-high","dod"]
sources:
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Configure a default sensitivity label for a SharePoint document library"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label"
    kind: "learn"
  - title: "Add a sensitivity label to SharePoint document library"
    url: "https://support.microsoft.com/office/54b1602b-db0a-4bcb-b9ac-5e20cbc28089"
    kind: "docs"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Audit log for Microsoft Sentinel data lake and graph in Microsoft Purview portal"
    url: "https://learn.microsoft.com/azure/sentinel/datalake/auditing-lake-activities"
    kind: "learn"
  - title: "Working with lists and list items with REST"
    url: "https://learn.microsoft.com/sharepoint/dev/sp-add-ins/working-with-lists-and-list-items-with-rest"
    kind: "learn"
  - title: "Step 3: Expand to your entire Microsoft 365 data estate"
    url: "https://learn.microsoft.com/purview/deploymentmodels/depmod-secure-by-default-step3"
    kind: "learn"
  - title: "Restrict access to content by using sensitivity labels to apply encryption"
    url: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 575283"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575283"
    kind: "roadmap"
videos: []
related: ["sensitivity-labels","auditing"]
controls:
  - governs: "Default sensitivity label for a SharePoint document library"
    scope: "site"
    ui:
      surface: "SharePoint (document library)"
      path: "document library > Settings > Library settings > Default sensitivity labels"
      docs: "https://support.microsoft.com/office/54b1602b-db0a-4bcb-b9ac-5e20cbc28089"
    api:
      kind: "rest"
      call: "POST https://<site-url>/_api/web/lists(guid'<library-guid>')"
      docs: "https://learn.microsoft.com/sharepoint/dev/sp-add-ins/working-with-lists-and-list-items-with-rest"
    note: "Set by a site admin. Do not select Extend protection on download, copy, or move, which supports a different scenario. Updates the library using X-HTTP-Method: MERGE; the request body sets DefaultSensitivityLabelForLibrary."
  - governs: "Tenant-level switch for library default labels"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -DisableDocumentLibraryDefaultLabeling $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label"
    note: "Documented for the existing library default feature. Takes about 15 minutes to take effect. Not confirmed to cover labelling of existing files."
  - governs: "Which files were labelled by a library default"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -RecordType <ID>"
      docs: "https://learn.microsoft.com/azure/sentinel/datalake/auditing-lake-activities"
    note: "Read-only. Look for the Applied sensitivity label file event; the Learn page for library defaults says ActionScourceDetails 6 marks a library default."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T21:32:07"
changes:
  - date: "2026-11-20"
    note: "First briefing for roadmap item 575283, the GCC, GCC High and DoD item; the Worldwide item is 559105."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: Learn documents an admin-created auto-labeling policy for existing files, so default is admin-opt-in and cost is medium; licensing, scope and open questions updated."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: the library default label control now lists its REST automation (DefaultSensitivityLabelForLibrary) instead of saying none is documented."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 64
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "ea6af32d47660fc9eeeec5f463e1ff88"
---

## What's changing

Microsoft plans to apply a SharePoint document library's default sensitivity label to files that already exist in that library. The roadmap item describes this as auto-labeling of existing SharePoint files to match the default label configured on the library, to close labelling gaps for data at rest without relying on manual labelling by users.

Learn describes applying library defaults to existing files through an auto-labeling policy, while the separate library-default page still lists existing files at rest as a limitation of that library setting. That page says a default label is applied to new files uploaded to the library and to existing files that are edited, when they have no label or a lower-priority one, and lists as a limitation that the feature "Doesn't apply to existing files at rest in SharePoint". Treat the auto-labeling policy as the documented route, and the roadmap's government-cloud status and target as the plan.

This roadmap item (575283) covers GCC, GCC High and DoD on the web, is In development and targets December CY2026. Microsoft lists the same feature under a second roadmap item, 559105, which covers Worldwide (Standard Multi-Tenant) and is marked Launched with an October CY2026 target. The two have separate records, so check each against your cloud.

## Why it matters

The Learn page applies a library default to new and edited files, and lists existing files at rest as a limitation of that setting. Learn documents an administrator-created auto-labeling policy to extend library defaults to eligible existing files; review simulation results before turning on the policy. The roadmap still targets GCC, GCC High and DoD for December CY2026. Once such a policy runs, a label with encryption, markings or other settings could appear on many existing files.

Use the weeks before the December CY2026 target to find which libraries already carry a default label and what those labels do. A default chosen for new files may not suit older content, so review it before anyone creates the policy.

## Risk assessment

**Data exposure**
- Existing files could take the library's default label. The Learn page says a library default overrides a lower-priority label unless the existing label was applied manually, so check which labels in your tenant rank below the defaults you have set.
- Labels that apply encryption can change who can open a file. The page says labels with user-defined permissions, an access expiry other than Never, or Double Key Encryption do not support a default label for a library.

**Security & identity**
- Setting or changing a library default needs site admin permissions, according to the Learn page. Review who holds that role on sites that matter.
- Libraries with SharePoint Information Rights Management enabled cannot have a default label, according to the Learn page, so those libraries stay outside this feature.

**Autonomy & actions**
- Learn shows library-default labelling in audit as the **Applied sensitivity label file** event with ActionScourceDetails 6, so you can check what was labelled; whether the same value is used for existing files is not documented.

**Change & support**
- The tooltip on a file labelled this way reads "This file has been automatically labeled", and it also shows for auto-labeling policies and policy default labels, so the Sensitivity column alone does not identify the source.
- Learn documents an auto-labeling policy and simulation review before it is turned on; it does not give a government-cloud rollout window beyond this roadmap's December CY2026 target.

## Cost and licensing

Microsoft Learn's page on getting started with sensitivity labels says that a number of different per-user subscriptions support sensitivity labels for Microsoft 365 apps and services, and that the licensing requirements for users depend on the features you use. It also says admins need a licence to manage sensitivity labels, and points to the Microsoft Purview service description for feature-level requirements.

Learn documents the existing-files capability as service-side auto-labeling. The Purview service description lists Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5 among the qualifying licenses for client and service-side automatic sensitivity labeling. The auto-labeling page says that with E3 or Business Premium, auto-labeling of files and emails isn't included and an E5 / P2-tier add-on is required. A licence or meter specific to labelling existing files from a library default is not yet published. The Learn page on library default labels lists labels, SharePoint settings and site admin permissions as requirements, and names no licence among them.

The indirect cost is time: finding libraries with defaults, checking label priority and encryption settings, and handling support questions once files change.

## Scope

The roadmap item lists GCC, GCC High and DoD, the Web platform and General Availability, with a December CY2026 target and status In development. Worldwide is covered by roadmap item 559105, not this one.

The Learn page for library default labels sets these prerequisites: labels published with the scope **Files & other data assets**, sensitivity labels enabled for Office files in SharePoint and OneDrive, PDF support added if PDFs are to be labelled, and SharePoint Information Rights Management not enabled for the library. Site admin permissions are needed to apply and change the label. For the existing-files policy, Learn additionally requires permission to create and manage auto-labeling policies and to read the SharePoint site and library metadata used to identify libraries with default labels.

## Governance guidance

### Before rollout
- List the libraries that already have a default sensitivity label, using the library settings row in the controls table, and record which label each one uses.
- Brief site admins, who hold the permission to apply and change library defaults, that this change is planned for December CY2026.

### At rollout
- Select specific SharePoint sites and review simulation results before turning on the auto-labeling policy for existing files.
- Run a test on a library with non-critical files first and use the audit search row to confirm which files were labelled.
- Decide before December CY2026 whether to hold the tenant-level switch in the controls table in reserve, noting that the Learn page describes it for the existing library default feature and does not say it covers existing files.

### After rollout
- Search the audit log for the **Applied sensitivity label file** event and filter on ActionScourceDetails 6 to find labelling done through library defaults.
- Review the SharePoint **Sensitivity** column on a sample of libraries to check labels match the intended defaults.
- Collect user reports of files that changed protection and feed them back into which defaults site admins set.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default sensitivity label for a SharePoint document library</strong><br><small>Site</small><br><small class="controls__note">Set by a site admin. Do not select Extend protection on download, copy, or move, which supports a different scenario. Updates the library using X-HTTP-Method: MERGE; the request body sets DefaultSensitivityLabelForLibrary.</small></td><td data-label="Admin UI"><strong>SharePoint (document library)</strong><br>document library › Settings › Library settings › Default sensitivity labels <a href="https://support.microsoft.com/office/54b1602b-db0a-4bcb-b9ac-5e20cbc28089" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST https://&lt;site-url&gt;/_api/web/lists(guid'&lt;library-guid&gt;')</code> <a href="https://learn.microsoft.com/sharepoint/dev/sp-add-ins/working-with-lists-and-list-items-with-rest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-level switch for library default labels</strong><br><small>Tenant</small><br><small class="controls__note">Documented for the existing library default feature. Takes about 15 minutes to take effect. Not confirmed to cover labelling of existing files.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -DisableDocumentLibraryDefaultLabeling $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which files were labelled by a library default</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. Look for the Applied sensitivity label file event; the Learn page for library defaults says ActionScourceDetails 6 marks a library default.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -RecordType &lt;ID&gt;</code> <a href="https://learn.microsoft.com/azure/sentinel/datalake/auditing-lake-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The library default label is set per library by a site admin. The Learn page documents a tenant-level switch, Set-SpoTenant with DisableDocumentLibraryDefaultLabeling, for the existing library default feature. After it is set, the page says the library's label selection remains but is deactivated, and labels already applied as a default are not removed. The page does not say whether it covers labelling of existing files, so test it before relying on it.

Audit search shows the **Applied sensitivity label file** event with a ActionScourceDetails value of 6 for library defaults, and the **Updated list** event for changes to the library setting. Microsoft documents an auto-labeling policy option to apply default sensitivity labels from SharePoint document libraries to existing files. Select specific SharePoint sites and review simulation results before turning on the policy.

## Open questions

- Which override rules apply to existing files? The page's table for new and edited files says manually applied labels are not overridden; confirm that this holds for data at rest.
- Does DisableDocumentLibraryDefaultLabeling also stop labelling of existing files?
- Will the auto-labeling policy option for existing files be available in GCC, GCC High and DoD by the roadmap's December CY2026 target? Watch Message center and the roadmap item.

<!-- rationale
risk: Medium. Labels could be applied to files that already exist, and the Learn page lists labels with encryption settings that libraries cannot use as a default; Learn documents an administrator-created auto-labeling policy, reviewed in simulation before it is turned on.
cost: Medium. Learn documents this as service-side auto-labeling, which requires qualifying licensing; tenants with E3 or Business Premium need an E5 / P2-tier add-on. Reviewing library defaults and simulation results also takes administrator time.
impact: Medium. Site admins who set library defaults and people who work in those libraries could see existing files take a label, with any protection that label carries.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The governance checklist's instruction to configure and review the existing-files auto-labeling policy has no corresponding controls-table row. | Found: Checklist: Select specific SharePoint sites and review simulation results before turning on the auto-labeling policy. Table rows: library default label; tenant-level library-default switch; audit search. | Fix: The checklist step 'Select specific SharePoint sites and review simulation results before turning on the auto-labeling policy for existing files' has no corresponding row in the controls table. This is a coverage finding, not a request to add a row during correction.
- [contradicted, minor] front matter: risk; rationale: risk / consistency: The medium risk rating does not match the scale's low category for a change that does nothing until an administrator opts in. | Found: risk: medium; defaultState: admin-opt-in. Rationale: Learn documents an administrator-created auto-labeling policy, reviewed in simulation before it is turned on. | Fix: Set risk to low and replace its rationale with: 'Low. Existing files are labelled only after an administrator creates and turns on an auto-labeling policy; review simulation results before enabling it.'
-->
