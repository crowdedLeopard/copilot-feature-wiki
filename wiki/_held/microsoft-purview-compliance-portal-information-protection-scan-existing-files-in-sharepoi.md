---
title: "Microsoft Purview: scan existing SharePoint and OneDrive files for sensitive information (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-information-protection-scan-existing-files-in-sharepoi"
roadmapId: 499076
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let admins in GCC, GCC High and DoD scan existing SharePoint and OneDrive files for sensitive data. Learn documents a pay-as-you-go on-demand classification scan; the roadmap targets March CY2027."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn's billing models page lists on-demand classification as pay-as-you-go, measured per asset classified per scan, and the scan page says it uses pay-as-you-go or per-user licensing or both. A price for GCC, GCC High and DoD is not yet published."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","information-protection","classifiers","sensitive-information-types","sensitivity-labels","sharepoint","onedrive","pay-as-you-go","dlp","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 499076"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499076"
    kind: "roadmap"
  - title: "Create and analyze an on-demand classification scan"
    url: "https://learn.microsoft.com/purview/on-demand-classification"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "New-SensitiveInformationScan"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan"
    kind: "learn"
videos: []
related: ["sensitive-information-types","sensitivity-labels","microsoft-purview-recurring-classifier-refresh","microsoft-purview-information-protection-auto-labeling-scale-increase-for-sh-us-government","microsoft-purview-unified-classification-management-experience"]
controls:
  - governs: "Which SharePoint sites and OneDrive accounts an on-demand scan covers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > On-demand classification > New scan"
      docs: "https://learn.microsoft.com/purview/on-demand-classification"
    api:
      kind: "powershell"
      call: "New-SensitiveInformationScan -Name \"<scan name>\" -SharePointLocation All"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan"
    note: "Compliance Administrator role group runs scans. The portal also offers Data loss prevention > Classifiers as a way in. The cmdlet runs only in Security & Compliance PowerShell."
  - governs: "Whether On-Demand Classification pay-as-you-go usage is paused or active"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Usage center is in preview. Viewing the page needs Global Reader, Security Reader or Global Admin. On the Pay-as-you-go page, toggle On-Demand Classification between paused and active."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-28T22:58:08"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: matched to Learn's on-demand classification scan, its pay-as-you-go meter and one PowerShell cmdlet; US Government availability remains unconfirmed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 85 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: reworded the opening of Why it matters, narrowed the billing-skips sentence to Learn's wording, added the pause toggle to the Usage center row note and removed two checklist steps that had no controls row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 91 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 91
  confirmed: 89
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "a436d4b1125b9e29a5aad35aa56eaaa3"
---

## What's changing

The roadmap item says this capability "will enable admins to scan existing files at rest in SharePoint or OneDrive for business for sensitive data". It is listed for GCC, GCC High and DoD, on the web, with release phases General Availability and Preview. Its status is In development and its target is March CY2027, which is a plan, not a delivery date. The record has no more-info link.

Microsoft Learn documents a capability that matches this description: on-demand classification, which "identifies and classifies sensitive content in historical data stored in SharePoint, OneDrive, and endpoints". Microsoft does not link the roadmap item to that page, so treat the match as the wiki's reading and confirm it. Learn's page does not say which clouds it covers, so what follows is Learn's description of the capability, not confirmed behaviour for GCC, GCC High or DoD.

An admin creates a scan in a wizard, choosing the scope (all SharePoint sites and OneDrive accounts, only specific ones, or all except some), the classifiers, a last-modified date range and file extensions. An estimation runs first. The admin then selects Start classification. By default a scan covers items created or modified in the past year, all supported file extensions and every available classifier in the tenant, and a scan can select up to 50 classifiers.

Learn states that on-demand classification updates classification results and that matching policies decide any resulting action. It is not an auto-labeling simulation.

## Why it matters

On-demand classification extends coverage to files that have never been classified or need updated classification. A scan gives the compliance team a way to update classification of that older content on a schedule they choose. Learn also says the capability helps reduce the risk of AI tools surfacing unlabelled or unprotected information.

The cost is that each scan is metered and its results can trigger policies. Microsoft has not stated what happens on arrival in the US Government clouds, so plan on no existing behaviour changing and decide who will own the first scan, its scope and its budget before the March CY2027 target.

## Risk assessment

**Data exposure**
- Learn states that each scanned file is evaluated against DLP, Information Protection, Data Lifecycle Management and Insider Risk Management policies, "triggering appropriate actions as per matching policies". A broad scan can therefore bring a large set of older files under those policies in one run.
- Classification results are visible in Content Explorer, which Learn says updates within seven days of scanning. Learn gives separate role groups (Content Explorer Content Viewer, Content Explorer List Viewer) for viewing results.

**Security & identity**
- Running a scan needs the Compliance Administrator role group. Learn names no narrower role for running a scan.

**Autonomy & actions**
- For SharePoint and OneDrive, updated results "can trigger active policies, including policies that apply or remove sensitivity labels". A policy you are still testing can stay in simulation while other active policies act on the same files, so check which policies are live before starting classification.
- If you select specific classifiers, only those have their results updated, so other classifiers' policies may not fire for the scanned files.

**Change & support**
- Estimation can be edited and rerun before classification starts, and an in-progress scan can be cancelled. Learn says classification can start up to 30 days after estimation, and a shorter gap gives more accurate counts and costs.
- A location in scope of more than one active scan is processed by only one of them, and the others mark it skipped.

## Cost and licensing

Learn's scan page says the feature "uses pay-as-you-go billing or per-user licensing for Microsoft Purview capabilities or both" and points to the Microsoft 365 licensing guidance for licence requirements. The Purview billing models page lists on-demand classification under pay-as-you-go, applying when you run a scan on SharePoint and OneDrive, with the unit "Asset, based on the number classified per scan".

Pay-as-you-go billing is Azure based: the billing models page says you must associate the Microsoft 365 tenant with an active Azure subscription, and an Azure bill is generated at the end of the month. Usage is visible in the Usage center in the Microsoft Purview portal.

The estimation shows an estimated cost before you start. The scan page says the billed amount may be lower, because items or locations can be skipped, including empty files, items skipped if the scan is cancelled, and locations already being scanned. It adds that classifier selection changes the number of files in scope, not a per-classifier charge, and that tenants using EDM classifiers should expect scans to rescan previously classified files, which can raise cost.

A rate or licence statement specific to GCC, GCC High and DoD is not yet published on the pages read. Each scan can process up to 150,000 locations and 100 million files.

## Scope

The roadmap item lists GCC, GCC High and DoD, the web platform and the release phases General Availability and Preview. Status is In development with a March CY2027 target.

Per Learn, a scan can cover all SharePoint sites and OneDrive accounts, specific ones, or all except some. Learn also describes adaptive scopes (scope defined by site attributes such as URL, name or metadata) and administrative units for SharePoint on-demand classification, which limit admins to scans for sites in their assigned units. Learn's scan page applies the same wizard to Windows 10/11 endpoints, which the roadmap item does not mention.

## Governance guidance

### Before rollout
- Confirm with Microsoft's roadmap and Message center whether this item is the US Government release of on-demand classification, and whether the Learn page applies to your cloud.
- Name the compliance owner who will run scans and the finance owner who will approve the Azure subscription that pay-as-you-go billing needs.
- Decide the first scan's scope, date range and classifiers so that the estimate is small enough to review.

### At rollout
- Create the first scan with a narrow scope using the scan locations row in the controls table, then review the estimation overview before selecting Start classification.
- Check the estimated cost against budget, and edit and rerun the estimation if the scope is wider than intended.

### After rollout
- Review the Items for review tab and the policy actions the scan triggered, and export the list if the compliance team needs a record.
- Compare the billed amount in the Usage center with the estimate, using the Usage center row in the controls table.
- Allow up to seven days before expecting Content Explorer to show newly classified content.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which SharePoint sites and OneDrive accounts an on-demand scan covers</strong><br><small>Tenant</small><br><small class="controls__note">Compliance Administrator role group runs scans. The portal also offers Data loss prevention &gt; Classifiers as a way in. The cmdlet runs only in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › On-demand classification › New scan <a href="https://learn.microsoft.com/purview/on-demand-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SensitiveInformationScan -Name &quot;&lt;scan name&gt;&quot; -SharePointLocation All</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether On-Demand Classification pay-as-you-go usage is paused or active</strong><br><small>Tenant</small><br><small class="controls__note">Usage center is in preview. Viewing the page needs Global Reader, Security Reader or Global Admin. On the Pay-as-you-go page, toggle On-Demand Classification between paused and active.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Running a scan needs the Compliance Administrator role group; viewing results needs Content Explorer Content Viewer or Content Explorer List Viewer. The cmdlet reference says that permissions in Security & Compliance PowerShell must be assigned, and that the cmdlet is available only there.

The Usage center page says it lets admins toggle listed features between paused and active, and lists On-Demand Classification as pausable. That page is in preview, and reading it needs Global Reader, Security Reader or Global Admin. It does not describe what a pause does to a scan in progress, so treat the in-portal Cancel Scan option on a running scan as the stop control that Learn documents.

The scan itself does not enforce anything; the policies that match the results do. Controls over those policies sit in the labelling, DLP, retention and insider risk settings, not in this table.

## Open questions

- Does the roadmap item refer to the on-demand classification documented on Learn, and which of its settings and limits apply in GCC, GCC High and DoD? Watch the roadmap item and the Learn page.
- Is the pay-as-you-go meter and its rate the same in the US Government clouds, and how does a GCC tenant associate an Azure subscription? Watch the Purview billing models and pricing pages.
- What does the target of March CY2027 mean for the two release phases the item lists, General Availability and Preview?
- What does pausing On-Demand Classification in the Usage center do to a scan that is in progress?

<!-- rationale
risk: Medium. Learn says a scan's updated results can trigger active policies, including policies that apply or remove sensitivity labels, so one scan can change many existing files.
cost: Variable. Learn lists on-demand classification as a pay-as-you-go capability billed per asset classified per scan, through an Azure subscription; the rate for the US Government clouds is not yet published.
impact: Medium. Admins run the scan, but file owners notice if matching DLP, labelling, retention or insider risk policies then act on their files.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Governance guidance: After rollout, second bullet / admin-path: The billed monetary amount can be found in Usage center and compared with the scan estimate. | Found: Searched: Microsoft Purview Usage center pay-as-you-go actual billed amount monetary cost Total Units Used Azure bill. Read purview-billing-usage and purview-billing-models: Usage center documents Total Units Used; charges are on the Azure bill, not a documented monetary display in Usage center. | Fix: Replace the bullet with 'Compare the billed amount on the Azure bill with the estimate; review consumption units in Usage center using the Usage center row in the controls table.' The Azure bill is documented at https://learn.microsoft.com/purview/purview-billing-models and consumption units at https://learn.microsoft.com/purview/purview-billing-usage.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft Purview portal > Information Protection > Classifiers > On-demand classification > New scan reaches scan scope configuration. | Found: Go to ... Information Protection > Classifiers > On-demand classification. Select New scan. Follow the instructions in the wizard. ... Scope and location | Fix: Extend controls[0].ui.path and its rendered path to 'Information Protection > Classifiers > On-demand classification > New scan > Scope and location', as documented at https://learn.microsoft.com/purview/on-demand-classification. | Source: https://learn.microsoft.com/purview/on-demand-classification
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Microsoft Purview portal > Usage center > Pay-as-you-go reaches the page containing the On-Demand Classification paused/active toggle. | Found: To access the Usage center > Pay-as-you-go ... pages ... The pay-as-you-go usage page also lets you toggle the features listed between paused and active states. ... On-Demand Classification | Yes | Yes | Fix: Extend controls[1].ui.path and its rendered path to 'Usage center > Pay-as-you-go > On-Demand Classification', retaining the paused/active toggle note, as documented at https://learn.microsoft.com/purview/purview-billing-usage. | Source: https://learn.microsoft.com/purview/purview-billing-usage
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The after-rollout checklist asks readers to review and export scan results through Items for review without a corresponding controls-table row. | Found: Checklist: 'Review the Items for review tab ... and export the list'. Table rows cover only scan scope and the pay-as-you-go pause toggle. | Fix: Remove the checklist instruction to review/export Items for review, or retain it as informational prose outside Governance guidance. This monitoring step has no corresponding table row; do not add a row in this correction.
-->
