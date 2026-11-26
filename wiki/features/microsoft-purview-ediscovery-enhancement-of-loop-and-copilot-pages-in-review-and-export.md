---
title: "Microsoft Purview eDiscovery: HTML conversion and keyword search for Loop and Copilot Pages files"
slug: "microsoft-purview-ediscovery-enhancement-of-loop-and-copilot-pages-in-review-and-export"
roadmapId: 561492
topic: "governance"
products: ["Microsoft Purview"]
summary: "eDiscovery can convert .loop and .page files to HTML when adding them to a review set, which makes them keyword-searchable, and when exporting a review set. Both portal options are unselected by default. No admin action is needed."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Included with premium eDiscovery features, which Learn ties to an Office 365 E5 or Microsoft 365 E5 subscription (or related E5 add-ons). Learn's Loop governance summary says review and export as HTML require a Premium licence."
audiences: ["compliance","security","service-owner"]
tags: ["purview","ediscovery","copilot-pages","microsoft-loop","sharepoint-embedded","data-export","microsoft-graph","gcc","gcc-high","dod"]
sources:
  - title: "Use eDiscovery with Copilot Pages"
    url: "https://learn.microsoft.com/microsoft-365/loop/copilot-pages-ediscovery"
    kind: "learn"
  - title: "Summary of governance, lifecycle, and compliance capabilities for Loop"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-compliance-summary"
    kind: "learn"
  - title: "Add search results to a review set in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-add-to-review-set"
    kind: "learn"
  - title: "Export items from a review set in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-review-set-export"
    kind: "learn"
  - title: "Export search results in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-export"
    kind: "learn"
  - title: "Learn about eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc"
    kind: "learn"
  - title: "Get started with eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-get-started"
    kind: "learn"
  - title: "Billing in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-billing"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "ediscoveryAddToReviewSetOperation resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-ediscoveryaddtoreviewsetoperation?view=graph-rest-1.0"
    kind: "docs"
  - title: "ediscoveryExportOperation resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-ediscoveryexportoperation?view=graph-rest-1.0"
    kind: "docs"
  - title: "ediscoverySearch: exportResult"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverysearch-exportresult?view=graph-rest-1.0"
    kind: "docs"
  - title: "Microsoft 365 Roadmap item 561492"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561492"
    kind: "roadmap"
  - title: "Whether .loop and .page files are converted to HTML and indexed when added to a review set (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/security-ediscoveryreviewset-addtoreviewset?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["ediscovery","microsoft-purview-ediscovery-select-user-owned-sharepoint-embedded-container-as-a-data-sou","role-groups","microsoft-purview-compliance-portal-ediscovery-advanced-review-set-explorer"]
controls:
  - governs: "Whether .loop and .page files are converted to HTML and indexed when added to a review set"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Searches > search > Add to review set > Add to an existing review set > review set > What to include for files from ODSP sites? > Convert supported file formats to HTML"
      docs: "https://learn.microsoft.com/purview/edisc-search-add-to-review-set"
    api:
      kind: "graph"
      call: "POST /v1.0/security/cases/ediscoveryCases/{eDiscoveryCaseId}/reviewSets/{eDiscoveryReviewSetId}/addToReviewSet"
      docs: "https://learn.microsoft.com/graph/api/security-ediscoveryreviewset-addtoreviewset?view=graph-rest-1.0"
    note: "Chosen for each process; not selected by default. The request body sets additionalDataOptions. The cloudNativeHtmlConversion value is listed on the ediscoveryAddToReviewSetOperation resource page."
  - governs: "Whether .loop and .page files are converted to HTML in a review-set export"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Review sets > review set > All items > Action > Export > Export type > Export items with item report > Convert supported file formats to HTML"
      docs: "https://learn.microsoft.com/purview/edisc-review-set-export"
    api: null
    note: "Chosen for each export; not selected by default. The Graph exportOptions values list no HTML conversion option (November 2026)."
  - governs: "HTML format for .loop and .page files in an export from a search"
    scope: "other"
    ui: null
    api: null
    note: "Described on the roadmap item. The Learn search-export page and the Graph exportResult options list no such option at the time of writing (November 2026)."
  - governs: "Who can add content to review sets and export it (eDiscovery Manager role group)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Security & Compliance PowerShell. The cmdlet adds a mail-enabled security group to the eDiscovery Managers subgroup."
confidence: "high"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-26"
    note: "New briefing: HTML conversion and keyword indexing of .loop and .page files in eDiscovery review sets and review-set exports."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: HTML export is described as suited to workflows that support HTML, not as opening anywhere; conversion is no longer said to need a person each time; add-to-review-set path now includes choosing the review set; removed an unsupported checklist step."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 59 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 57
  unconfirmed: 2
  contradicted: 0
  attempts: 0
  hash: "5356ad15f49502108ab7816497acc8f8"
---

## What's changing

Microsoft Purview eDiscovery can now convert Loop (.loop) and Copilot Pages (.page) files to HTML when it adds them to a review set. Their text is then indexed, so keyword searches in the review set can find it. The roadmap item also describes HTML format support for exports from a search.

On Microsoft Learn, the **Add items to review set** flyout has a **Convert supported file formats to HTML** option under **What to include for files from ODSP sites?**. Learn says it converts "supported cloud-native file formats, such as .loop and .page files (used by Copilot Notebook and Page content)". It also says converted content is indexed and available for keyword search in the review set, and that the option isn't selected by default. Review-set exports have an option with the same name. It converts these files to HTML in the export package and is also not selected by default.

The roadmap and Learn differ on exports. The roadmap describes HTML export "from search". At the time of writing (November 2026), the Learn page on exporting search results lists no HTML conversion option for these files, and the Microsoft Graph call for exporting search results lists none among its options. Learn documents HTML conversion on export only for review-set exports.

The roadmap item's status is Launched, with a target date of June CY2026. It is a General Availability release on the web for Worldwide, GCC, GCC High and DoD.

## Why it matters

Investigations increasingly need to cover Copilot Pages and Loop content. Learn describes a Copilot Page as a file stored in SharePoint, OneDrive or SharePoint Embedded, not as a message, so eDiscovery collects it like a document. With conversion selected, reviewers can find words inside these files using keyword search in the review set. They can export HTML for post-export workflows that support HTML but lack tooling for native cloud file formats. Without conversion, outside parties get .page files, which Learn says don't open directly in Copilot Pages once downloaded.

If nobody acts, existing eDiscovery work carries on as before, because both portal options are unselected by default and are chosen for each process. The risk is missing evidence: a team that doesn't know about the option may add Pages to a review set without conversion and get no keyword hits in them. Make the choice a deliberate step in the case runbook.

## Risk assessment

**Data exposure**
- Converted text is indexed in the review set. Anyone who can open the review set can find Page content by keyword, including members of the Reviewer role group, which Microsoft Graph documents as having read-only access to review sets in cases they are members of. Case membership and role-group membership (row 4) decide who that is.
- HTML conversion supports post-export workflows that support HTML but lack tooling for native cloud file formats. Learn says review-set exports must be downloaded within 30 days of the export finishing.
- Learn says review-set content is copied to Microsoft-managed Azure Storage for each case. Where the tenant uses Customer Key, review-set content at rest is encrypted with the customer-managed key.

**Security & identity**
- Learn says eDiscovery supports decrypting Pages protected by supported Microsoft encryption technologies, and the reviewer must have the **RMS Decrypt** role. Decryption support varies by eDiscovery tier.

**Autonomy & actions**
- In the portal, conversion is an option selected for an add-to-review-set or review-set export process; both options are unselected by default.

**Change & support**
- Learn says selecting a user's OneDrive as a data source doesn't include their Copilot Pages or Copilot Notebooks. The user's SharePoint Embedded container must be added separately, and conversion can't help if that container isn't in scope.
- Learn says adding SharePoint items to a review set, or exporting them, might record a **FileAccessed** audit event. Expect these events in audit reviews of Page and Loop files.
- Teams that expect the HTML export from search described on the roadmap will not find it on the Learn search-export page at the time of writing (row 3).

## Cost and licensing

**Licence.** The Learn eDiscovery overview says organisations with an Office 365 E5 or Microsoft 365 E5 subscription (or related E5 add-on subscriptions) can use premium eDiscovery features. Learn's [Loop governance summary](https://learn.microsoft.com/microsoft-365/loop/loop-compliance-summary) says review and export as HTML require a Premium licence. The Get started with eDiscovery page says both admins and users who work with eDiscovery cases need a Microsoft 365 Enterprise E3 or E5 licence.

**Meter.** The eDiscovery billing page says storage of Microsoft 365 data and of Microsoft 365 AI data is included in the enterprise subscription and isn't subject to pay-as-you-go billing. Pay-as-you-go storage applies to non-Microsoft 365 AI data, which the page identifies by item classes such as Copilot in Fabric and Security Copilot. Loop and Page content consists of files in SharePoint, OneDrive or SharePoint Embedded, not those item classes. At the time of writing (November 2026), the billing page describes no separate charge for HTML conversion.

**Indirect costs.** Admin time to update eDiscovery runbooks and brief case teams.

## Scope

- **Who uses it:** eDiscovery users working in a case. Members of the eDiscovery Manager role group can export search results. When premium features are enabled, Learn says users need the Preview and Export roles to preview and export content.
- **Licence:** premium eDiscovery features (E5 tier, see Cost and licensing).
- **Content:** files that Learn calls "supported cloud-native file formats", naming .loop and .page files as examples. Copilot Pages are stored in SharePoint, OneDrive or a user's SharePoint Embedded container, which has to be added as its own data source.
- **Clouds and platforms:** Worldwide, GCC, GCC High and DoD on the web, as listed on the roadmap item.
- **Automation:** the Microsoft Graph add-to-review-set call (row 1).

## Governance guidance

### Before rollout
- Update the eDiscovery runbook so that case users select **Convert supported file formats to HTML** when they add searches that may contain .loop or .page files to a review set (row 1).
- Review who is in the eDiscovery Manager role group (row 4), because its members can add converted content to review sets and export it.

### At rollout
- Test in a test case: add a search that contains a known Page with conversion selected, then run a keyword search in the review set for a phrase from that Page.
- Select **Convert supported file formats to HTML** on review-set exports when the receiving party has no tooling for .loop and .page files (row 2).
- Add cloudNativeHtmlConversion to additionalDataOptions in scripted Graph collections, and test it before relying on it (row 1).

### After rollout
- Export Pages as HTML through review-set exports until Learn documents an HTML option for exports from a search (row 3).
- Watch the Learn page on exporting search results and Message center for the export-from-search option the roadmap describes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether .loop and .page files are converted to HTML and indexed when added to a review set</strong><br><small class="controls__note">Chosen for each process; not selected by default. The request body sets additionalDataOptions. The cloudNativeHtmlConversion value is listed on the ediscoveryAddToReviewSetOperation resource page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Searches › search › Add to review set › Add to an existing review set › review set › What to include for files from ODSP sites? › Convert supported file formats to HTML <a href="https://learn.microsoft.com/purview/edisc-search-add-to-review-set" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/security/cases/ediscoveryCases/{eDiscoveryCaseId}/reviewSets/{eDiscoveryReviewSetId}/addToReviewSet</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoveryreviewset-addtoreviewset?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether .loop and .page files are converted to HTML in a review-set export</strong><br><small class="controls__note">Chosen for each export; not selected by default. The Graph exportOptions values list no HTML conversion option (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Review sets › review set › All items › Action › Export › Export type › Export items with item report › Convert supported file formats to HTML <a href="https://learn.microsoft.com/purview/edisc-review-set-export" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>HTML format for .loop and .page files in an export from a search</strong><br><small class="controls__note">Described on the roadmap item. The Learn search-export page and the Graph exportResult options list no such option at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can add content to review sets and export it (eDiscovery Manager role group)</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The cmdlet adds a mail-enabled security group to the eDiscovery Managers subgroup.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › Role groups for Microsoft Purview solutions › eDiscovery Manager › Edit › Manage eDiscovery Manager › Choose users <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents both conversion options as choices made in each add-to-review-set process and each review-set export. Both are unselected by default.

In Microsoft Graph, the parameter table on the addToReviewSet action page lists additionalDataOptions values that don't include cloudNativeHtmlConversion. The ediscoveryAddToReviewSetOperation resource page does list it, as "Convert items to cloud-native HTML format during review set collection", and as a value of an evolvable enum that is returned only with the Prefer: include-unknown-enum-members header. For review-set exports, the exportOptions values on the ediscoveryExportOperation resource include no HTML conversion value at the time of writing (November 2026).

For delegated Graph calls, the signed-in user needs eDiscovery Manager or eDiscovery Administrator, or Reviewer for read-only review-set access. Members of the eDiscovery Manager subgroup can only access and manage the cases they create.

## Open questions

- When will the Learn page on exporting search results, and the Graph exportResult call, document the HTML format the roadmap describes for exports from a search? Watch the Learn page and Message center.
- Does conversion apply to every .loop file, including Loop components shared in Teams chats and Outlook messages, or only to Loop and Copilot Pages content?
- Does the HTML copy in a review set or export keep the version and authorship metadata that eDiscovery reports for the native file?
- When will the Graph addToReviewSet action page list cloudNativeHtmlConversion, as the resource page already does?

<!-- rationale
risk: Low. Both portal conversion options are unselected by default, and the content stays inside existing case and role-group boundaries.
cost: Low. Learn says review and HTML export of Loop content need a Premium eDiscovery licence (E5 tier), and that storing Microsoft 365 data in eDiscovery is included in the enterprise subscription. The new cost is updating case runbooks.
impact: Low. Only eDiscovery managers, administrators and reviewers notice. End users see nothing change in Loop or Copilot Pages.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Adding Pages to a review set without conversion produces no keyword hits in those files. | Found: Searched: eDiscovery Loop page HTML conversion keyword search without conversion; "eDiscovery" "Loop" "keyword" "conversion". Read Copilot Pages, add-to-review-set and supported-file-type excerpts; none explicitly states that unconverted Pages produce no keyword hits. | Fix: Replace 'a team that doesn't know about the option may add Pages to a review set without conversion and get no keyword hits in them' with 'a team that does not know about the option may miss the documented conversion workflow that indexes Page content for keyword search'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: The stated route through Cases, Review sets, All items, Action, Export and Export items with item report reaches the HTML conversion option. | Found: Select the review set that you want to export and select the All items tab. In the review set, select the items to export. Select Action > Export on the command bar. | Fix: Include the omitted item-selection step: 'eDiscovery > Cases > case > Review sets > review set > All items > items > Action > Export > Export type > Export items with item report > Convert supported file formats to HTML', as documented at https://learn.microsoft.com/purview/edisc-review-set-export. | Source: https://learn.microsoft.com/purview/edisc-review-set-export
- [supported, minor] Risk assessment: Data exposure / applicability: Customer Key encrypts review-set content at rest when the tenant is configured with Customer Key. | Found: Does Customer Key apply to review set content? | Yes. If your tenant is configured with Customer Key, review set content at rest is encrypted with the customer-managed key. | Fix: Append: 'The Learn search-export page's CMK direct-export preview section differs: it says, "Data at rest in an eDiscovery review set isn't included at this time." Confirm the applicable protection before relying on it.' Cite https://learn.microsoft.com/purview/edisc-search-export#enable-cmk-customer-managed-key-for-direct-exports-preview. | Source: https://learn.microsoft.com/purview/edisc-search-add-to-review-set
- [unsupported, minor] rationale: impact / behaviour: End users see nothing change in Loop or Copilot Pages. | Found: Searched: "Loop" "eDiscovery" "HTML" "enable" "tenant"; read Copilot Pages eDiscovery, Loop compliance summary and both conversion instructions. They describe case workflows, but do not explicitly state an exhaustive audience or unchanged native end-user experience. | Fix: Replace the impact rationale with 'Low. The documented conversion options are in eDiscovery add-to-review-set and review-set export workflows.'
-->
