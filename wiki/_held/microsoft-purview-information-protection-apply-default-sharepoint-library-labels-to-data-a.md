---
title: "Microsoft Purview: apply default SharePoint library labels to existing files (GCC, GCC High, DoD)"
slug: "microsoft-purview-information-protection-apply-default-sharepoint-library-labels-to-data-a"
roadmapId: 575283
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to label existing SharePoint files to match their library's default sensitivity label. This item covers GCC, GCC High and DoD. Microsoft has not stated the default or the licence, so review it before December 2026."
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
  model: "per-user"
  notes: "Microsoft Learn says per-user subscriptions support sensitivity labels and that requirements depend on the features used. A licence specific to labelling existing files in libraries is not yet published."
audiences: ["compliance","m365-admin","security","service-owner"]
tags: ["purview","sensitivity-labels","information-protection","sharepoint","auto-labeling","gcc","gcc-high","dod"]
sources:
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
    api: null
    note: "Set by a site admin. Do not select Extend protection on download, copy, or move, which supports a different scenario."
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
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 45
  unconfirmed: 0
  contradicted: 8
  attempts: 1
  hash: "cdff7cee938a34f3361d594816ac03d6"
---

## What's changing

Microsoft plans to apply a SharePoint document library's default sensitivity label to files that already exist in that library. The roadmap item describes this as auto-labeling of existing SharePoint files to match the default label configured on the library, to close labelling gaps for data at rest without relying on manual labelling by users.

Microsoft Learn does not yet describe this change. Its page on library default labels says a default label is applied to new files uploaded to the library and to existing files that are edited, when they have no label or a lower-priority one. The same page lists as a limitation that the feature "Doesn't apply to existing files at rest in SharePoint". Treat what follows about the planned behaviour as the roadmap's description, and the limitation as today's documented behaviour.

This roadmap item (575283) covers GCC, GCC High and DoD on the web, is In development and targets December CY2026. Microsoft lists the same feature under a second roadmap item, 559105, which covers Worldwide (Standard Multi-Tenant) and is marked Launched with an October CY2026 target. The two have separate records, so check each against your cloud.

## Why it matters

The Learn page applies a library default to new and edited files, and lists existing files at rest as a limitation. If the planned change reaches those files, a label with encryption, markings or other settings could appear on many existing files. Microsoft has not stated whether that happens on arrival or only after an admin or site owner acts, so do not assume either.

Plan on the basis that no source says existing behaviour changes, and use the weeks before the December CY2026 target to find which libraries already carry a default label and what those labels do. A default chosen for new files may not suit older content, so review it before the change lands.

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
- Microsoft has not stated how or when labelling of existing files will run, so expect questions to arrive before documentation does.

## Cost and licensing

Microsoft Learn's page on getting started with sensitivity labels says that a number of different per-user subscriptions support sensitivity labels for Microsoft 365 apps and services, and that the licensing requirements for users depend on the features you use. It also says admins need a licence to manage sensitivity labels, and points to the Microsoft Purview service description for feature-level requirements.

A licence or meter specific to labelling existing files from a library default is not yet published. The Learn page on library default labels lists labels, SharePoint settings and site admin permissions as requirements, and names no licence among them.

The indirect cost is time: finding libraries with defaults, checking label priority and encryption settings, and handling support questions once files change.

## Scope

The roadmap item lists GCC, GCC High and DoD, the Web platform and General Availability, with a December CY2026 target and status In development. Worldwide is covered by roadmap item 559105, not this one.

The Learn page for library default labels sets these prerequisites: labels published with the scope **Files & other data assets**, sensitivity labels enabled for Office files in SharePoint and OneDrive, PDF support added if PDFs are to be labelled, and SharePoint Information Rights Management not enabled for the library. Site admin permissions are needed to apply and change the label. Whether these prerequisites change for existing files is not documented.

## Governance guidance

### Before rollout
- Confirm in the Learn page's requirements that sensitivity labels are enabled for Office files in SharePoint and OneDrive, and that PDF support is enabled if PDFs matter to you.
- List the libraries that already have a default sensitivity label, using the library settings row in the controls table, and record which label each one uses.
- Compare each default label's priority with the labels already on files, and note any default whose settings use user-defined permissions, an expiry or Double Key Encryption, which the page says are unsupported for library defaults.
- Brief site admins, who hold the permission to apply and change library defaults, that this change is planned for December CY2026.

### At rollout
- Watch Message center and the Learn page for the point at which labelling of existing files is documented, and for any setting that governs it.
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
<tr><td data-label="Control"><strong>Default sensitivity label for a SharePoint document library</strong><br><small>Site</small><br><small class="controls__note">Set by a site admin. Do not select Extend protection on download, copy, or move, which supports a different scenario.</small></td><td data-label="Admin UI"><strong>SharePoint (document library)</strong><br>document library › Settings › Library settings › Default sensitivity labels <a href="https://support.microsoft.com/office/54b1602b-db0a-4bcb-b9ac-5e20cbc28089" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-level switch for library default labels</strong><br><small>Tenant</small><br><small class="controls__note">Documented for the existing library default feature. Takes about 15 minutes to take effect. Not confirmed to cover labelling of existing files.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -DisableDocumentLibraryDefaultLabeling $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which files were labelled by a library default</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. Look for the Applied sensitivity label file event; the Learn page for library defaults says ActionScourceDetails 6 marks a library default.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -RecordType &lt;ID&gt;</code> <a href="https://learn.microsoft.com/azure/sentinel/datalake/auditing-lake-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The library default label is set per library by a site admin. The Learn page documents a tenant-level switch, Set-SpoTenant with DisableDocumentLibraryDefaultLabeling, for the existing library default feature. After it is set, the page says the library's label selection remains but is deactivated, and labels already applied as a default are not removed. The page does not say whether it covers labelling of existing files, so test it before relying on it.

Audit search shows the **Applied sensitivity label file** event with a ActionScourceDetails value of 6 for library defaults, and the **Updated list** event for changes to the library setting. Microsoft has not documented a separate admin control for labelling existing files at the time of writing (November 2026).

## Open questions

- Does labelling of existing files start automatically for libraries that already have a default label, or only after a site admin or tenant admin acts? Watch Message center and the library default label page.
- Which override rules apply to existing files? The page's table for new and edited files says manually applied labels are not overridden; confirm that this holds for data at rest.
- Does DisableDocumentLibraryDefaultLabeling also stop labelling of existing files, and will a separate tenant setting or admin centre path be published?
- Which licence covers labelling existing files in GCC, GCC High and DoD, and does it differ from Worldwide under roadmap item 559105?

<!-- rationale
risk: Medium. Labels could be applied to files that already exist, and the Learn page lists labels with encryption settings that libraries cannot use as a default; Microsoft has not stated whether this runs without admin action.
cost: Low. The only cost the sources show is admin and site-owner time; sensitivity labels need per-user licences, and nothing specific to this feature is published.
impact: Medium. Site admins who set library defaults and people who work in those libraries could see existing files take a label, with any protection that label carries.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; summary; Why it matters; rationale: risk; Open questions / default: The default is unknown because Microsoft has not said whether labeling existing files requires administrator action. | Found: To extend your default library label deployment to existing files, create an auto-labeling policy that applies the default sensitivity label from each selected SharePoint document library to eligible existing files at rest. | Fix: Set defaultState to admin-opt-in. Replace the repeated default-state gap with: 'Learn documents an administrator-created auto-labeling policy to extend library defaults to eligible existing files; review simulation results before turning on the policy. The roadmap still targets GCC, GCC High and DoD for December CY2026.' Cite https://learn.microsoft.com/purview/apply-sensitivity-label-automatically. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [contradicted, blocker] What's changing / absence: Microsoft Learn does not yet describe applying default library sensitivity labels to existing files. | Found: ### Apply default sensitivity labels from SharePoint document libraries to existing files | Fix: Replace 'Microsoft Learn does not yet describe this change' with: 'Learn describes applying library defaults to existing files through an auto-labeling policy, while the separate library-default page still lists existing files at rest as a limitation of that library setting.' Add https://learn.microsoft.com/purview/apply-sensitivity-label-automatically to sources; retain the government-cloud roadmap status and target. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [contradicted, blocker] Risk assessment: Change & support; Governance guidance: At rollout; Open questions / absence: Microsoft has not stated how or when existing-file labeling runs. | Found: For this policy type, simulation identifies files in document libraries that have a default sensitivity label configured. Review the simulation results before you turn on the policy | Fix: Replace the broad absence with: 'Learn documents an auto-labeling policy and simulation review before it is turned on; it does not give a government-cloud rollout window beyond this roadmap's December CY2026 target.' Cite https://learn.microsoft.com/purview/apply-sensitivity-label-automatically. Remove the open question asking whether any administrator action is needed. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [contradicted, blocker] summary; front matter: licensing.notes; Cost and licensing; Open questions; rationale: cost / absence: Microsoft has not published which license covers applying library defaults to existing files. | Found: Sensitivity labeling, including automatic or policy‑based labeling, requires a Microsoft 365 E5 license or Microsoft 365 Information Protection and Governance (IPG). | Fix: Replace the licensing gap with: 'Learn documents the existing-files capability as service-side auto-labeling. The Purview service description lists Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5 among the qualifying licenses for client and service-side automatic sensitivity labeling.' Add https://learn.microsoft.com/purview/apply-sensitivity-label-automatically and the cited service-description URL to sources. Keep the per-user model and remove the broad claim that licensing is unpublished. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [contradicted, blocker] Scope / absence: Whether prerequisites change for labeling existing files is undocumented. | Found: You have permissions to create and manage auto-labeling policies. ... You have permission to read the SharePoint site and document library metadata required to identify libraries with default sensitivity labels. | Fix: Replace the sentence with: 'For the existing-files policy, Learn additionally requires permission to create and manage auto-labeling policies and to read the SharePoint site and library metadata used to identify libraries with default labels.' Cite https://learn.microsoft.com/purview/apply-sensitivity-label-automatically. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [contradicted, blocker] Governance controls; Governance guidance: At rollout; Open questions / absence: Microsoft has not documented a separate administrator control for labeling existing files. | Found: When you create the policy, select the option to apply default sensitivity labels from SharePoint document libraries to existing files. Select specific SharePoint sites rather than All. | Fix: Replace the absence with: 'Microsoft documents an auto-labeling policy option to apply default sensitivity labels from SharePoint document libraries to existing files. Select specific SharePoint sites and review simulation results before turning on the policy.' Cite https://learn.microsoft.com/purview/apply-sensitivity-label-automatically. Remove the question asking whether a separate control will be published; do not infer availability in government clouds before the roadmap target. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [contradicted, blocker] rationale: cost / cost: The only cost the sources establish is administrator and site-owner time, with nothing specific to this feature published. | Found: You have E3 or Business Premium. Auto-labeling of files and emails isn't included at this SKU. Sensitivity labels and manual labeling are — auto-labeling requires an E5 / P2-tier add-on. | Fix: Replace the cost rationale with: 'Medium. Learn documents this as service-side auto-labeling, which requires qualifying licensing; tenants with E3 or Business Premium need an E5 / P2-tier add-on. Reviewing library defaults and simulation results also takes administrator time.' Set cost to medium and cite https://learn.microsoft.com/purview/apply-sensitivity-label-automatically. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Sensitivity-label encryption can change who can open a file. | Found: When a document, email, or meeting invite is encrypted, access to the content is restricted, so that it: Can be decrypted only by users authorized by the label's encryption settings. | Fix: Add https://learn.microsoft.com/purview/encryption-sensitivity-labels to sources for the statement about encryption restricting who can open files. | Source: https://learn.microsoft.com/purview/encryption-sensitivity-labels
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to check Office-file and PDF labeling enablement and label configuration, but these controls have no table rows. | Found: Confirm ... sensitivity labels are enabled for Office files ... PDF support is enabled ... Compare each default label's priority ... [Table rows cover library default selection, the tenant disable switch and audit search.] | Fix: The first and third Before rollout bullets name controls absent from the table. Remove those two checklist bullets rather than adding control rows; retain the verified prerequisite and label-limitation prose.
-->
