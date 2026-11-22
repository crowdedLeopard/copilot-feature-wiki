---
title: "Microsoft Purview eDiscovery: Advanced review set explorer for KQL analysis (GCC, GCC High, DoD)"
slug: "microsoft-purview-ediscovery-advanced-review-set-explorer"
roadmapId: 565372
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans the Advanced review set explorer, a KQL query and charting tab for eDiscovery review sets, for GCC, GCC High and DoD in December CY2026. Access follows eDiscovery roles; no admin switch is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Review sets sit in eDiscovery (Premium). Learn's permissions page names Office 365 or Microsoft 365 E5, or the Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on, for premium analysis. No explorer-specific price is published."
audiences: ["compliance","security","change-adoption"]
tags: ["ediscovery","purview","analytics","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565372"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565372"
    kind: "roadmap"
  - title: "Search content in a review set with the Advanced review set explorer (preview)"
    url: "https://learn.microsoft.com/purview/edisc-review-set-explorer"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Microsoft Purview eDiscovery legacy solutions"
    url: "https://learn.microsoft.com/purview/ediscovery"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-ediscovery-advanced-review-set-explorer","ediscovery","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges"]
controls:
  - governs: "Who can access review sets, and so the explorer, through eDiscovery roles"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users or Choose groups"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "The Review role lets users access review sets. Not an explorer-only switch. The cmdlet takes a mail-enabled security group."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-14T21:56:10"
changes:
  - date: "2026-11-22"
    note: "First briefing for the GCC, GCC High and DoD roadmap item; Learn documents the explorer as a preview, and its default, licence and clouds are not stated."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 55
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "01769baa8dd9402370df0bae152fd4bd"
---

## What's changing

The roadmap item describes the Advanced Review Set Explorer for Microsoft Purview eDiscovery in GCC, GCC High and DoD. It lets reviewers run Kusto Query Language (KQL) queries on review set data to find top item types, patterns and trends, and to show results as charts. The roadmap item states that queries can use complex filtering, pattern-based text extraction and data format parsing.

Microsoft Learn already documents the explorer, labelled as a preview. It is a tab inside a review set: in the Microsoft Purview portal, select **eDiscovery**, then **Cases**, a case, the **Review sets** tab, a review set, and the **Advanced review set explorer (preview)** tab. Learn says queries are read-only and do not modify review set content, that the explorer does not support all Kusto operators and properties, and that a query returning more than 10,000 results returns only the first 10,000. It also says some older review sets may return a column not found error for newer properties, and that creating a new review set with the **Add to review set** process regenerates the data.

The roadmap record shows status In development, release phase General Availability, no preview date and a target of December CY2026 for GCC, GCC High and DoD on the web. That is a target, not a delivered date. Learn's explorer page labels the feature preview and names no clouds, so it does not confirm what these three clouds receive or when. No Message Center post was supplied for this item, and the roadmap record states no default or rollout mechanics.

## Why it matters

This is a reviewer-productivity change inside an existing eDiscovery workflow, not a new data store. KQL lets a reviewer group, count and extract text from the same review set items the condition builder already searches; Learn's own examples list external recipients per item and count items per participant. Expect questions from legal and investigation teams about training, how query results are quoted in a matter, and who may run them.

Microsoft has not stated what happens on arrival, and no source says existing behaviour changes, so there is no urgent deadline. The decision for a service owner is whether the people who hold review access to cases should hold it, because the explorer is reached through that access.

## Risk assessment

**Data exposure**
- The explorer queries items already in a review set. Learn says queries run against the review set's indexed items and do not modify content. It makes pattern extraction easier: Learn's examples list external recipient addresses and participants per item, so anyone who can open the review set can build derived views of its content. Review set access, the first control row, is the lever.

**Security & identity**
- Learn's steps to open the explorer start with a user account assigned eDiscovery permissions. Learn describes the **Review** role as letting users access review sets in eDiscovery, so whoever holds that role in a case can reach the explorer's data.

**Autonomy & actions**
- No change: Learn describes queries as read-only and describes no action the explorer takes on its own.

**Change & support**
- Expect support questions from reviewers new to KQL. Learn lists common syntax errors, the 10,000-result cut-off, and the column not found error on older review sets.
- Learn says results reflect the current indexed state, so adding data to a review set can change a query's results between runs.

## Cost and licensing

Learn's explorer page names no licence and no meter for the explorer, and the roadmap record states none. Review sets are part of eDiscovery (Premium), which Learn describes as providing an end-to-end workflow to identify, preserve, collect, review, analyze and export content. Learn's permissions page says that to analyse a user's data when premium eDiscovery features are enabled, the user must be assigned an Office 365 E5 or Microsoft 365 E5 licence. Users with an Office 365 E1 or an Office 365 or Microsoft 365 E3 licence can instead be assigned a Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on licence. The same page says administrators, compliance officers or legal personnel assigned to cases as members who use premium features to collect, view and analyse data do not need an E5 licence.

A price or licence specific to the explorer is not yet published. The indirect cost is administrator and reviewer time for KQL training.

## Scope

The roadmap record lists GCC, GCC High and DoD, release phase General Availability, platform Web, status In development and a target of December CY2026. Learn's explorer page names no clouds, so which clouds receive the explorer, and when, is not stated there.

Learn says to open the explorer with an account assigned eDiscovery permissions. The **Review** role lets users access review sets, and Learn lists the Reviewer role group among the groups that can be used to assign eDiscovery-related permissions. Learn adds that eDiscovery Managers can access and manage only the cases they create.

## Governance guidance

### Before rollout
- Review who holds the **Review** role through the eDiscovery role groups, and remove access that is no longer needed (first controls row).
- Confirm which cases your reviewers work in and who is a member, because the explorer opens from a case's review sets.
- Prepare KQL reference material for reviewers, starting from the explorer's **Getting started** tab and **Sample queries** that Learn describes.

### At rollout
- Open the explorer on a test review set (Microsoft Purview portal > eDiscovery > Cases > case > Review sets > review set > **Advanced review set explorer (preview)**) and run a sample query to see what reviewers will see.
- Brief reviewers on the 10,000-result cut-off, the unsupported operators and the column not found error on older review sets that Learn documents.

### After rollout
- Recheck the Learn page and the roadmap item for changes to the target date, the preview label and the clouds covered.
- Recreate any older review set that returns column not found errors, using **Add to review set** as Learn describes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can access review sets, and so the explorer, through eDiscovery roles</strong><br><small>User</small><br><small class="controls__note">The Review role lets users access review sets. Not an explorer-only switch. The cmdlet takes a mail-enabled security group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › eDiscovery Manager › Edit › Manage eDiscovery Manager › Choose users or Choose groups <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The row governs review set access in general. It is not specific to the explorer: Microsoft Learn documents no explorer-only setting at the time of writing (November 2026), and the explorer page describes access through an account assigned eDiscovery permissions.

Learn says to assign eDiscovery permissions in the Microsoft Purview portal or, for the eDiscovery Manager subgroup, with `Add-RoleGroupMember` and a mail-enabled security group. Learn also says you need to be a member of the Organization Management role group or be assigned the Role Management role to assign eDiscovery permissions in the portal.

## Open questions

- Which clouds will receive the explorer in December CY2026, and will GCC, GCC High and DoD get the same query operators as the documented preview? Watch the roadmap item and the explorer's Learn page.
- What happens on arrival: is the explorer tab on for all users with review permissions, or does an administrator enable it? Watch Message center.
- Will the explorer carry a licence or meter of its own at general availability? None is published for it today.
- Is a distinct audit activity recorded for queries run in the explorer? Watch the eDiscovery audit activities page on Microsoft Learn.

<!-- rationale
risk: Low. Microsoft Learn says explorer queries are read-only and run against items already in a review set, so no new data source is added; access follows eDiscovery permissions.
cost: Low. The explorer's Learn page names no licence or meter of its own; the known cost is eDiscovery premium licensing for reviewers plus admin and KQL training time.
impact: Low. Only users with eDiscovery permissions who open a case's review sets will see the explorer tab, so mostly legal, compliance and investigation teams notice it.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: The explorer is not a new data store. | Found: Searched: "Advanced review set explorer" "store" "data"; opened edisc-review-set-explorer, edisc, edisc-workflow and edisc-billing. They describe indexed review set queries, not whether the explorer introduces any storage. | Fix: Replace 'This is a reviewer-productivity change inside an existing eDiscovery workflow, not a new data store.' with 'This is a reviewer-productivity change that runs queries against the current review set's indexed items.'
- [contradicted, blocker] rationale: cost / licensing: The known cost includes eDiscovery premium licensing for reviewers. | Found: Administrators, compliance officers, or legal personnel who are assigned to cases as members and use premium eDiscovery features to collect, view, and analyze data don't need an E5 license. | Fix: Replace the cost rationale with 'Low. No explorer-specific price or meter is published; the incremental cost considered here is admin and KQL training time. Premium eDiscovery licensing applies to the users whose data is analyzed, as described in Cost and licensing, not an E5 requirement for case-member reviewers.' | Source: https://learn.microsoft.com/purview/edisc-permissions
- [contradicted, blocker] front matter: changes[0].note / licensing: The explorer's licence is not stated. | Found: If your organization has an Office 365 E5 or Microsoft 365 E5 subscription (or related E5 add-on subscriptions), you can further manage cases and analyze content by using premium eDiscovery features. | Review set KQL queries (preview) |  | Supported. | | Fix: Replace the change note with 'First briefing for the GCC, GCC High and DoD roadmap item; Learn documents the explorer as a preview. Its government-cloud rollout default and any explorer-specific licence or meter are not stated.' This preserves the narrow gap without denying the documented premium eDiscovery entitlement. | Source: https://learn.microsoft.com/purview/edisc
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: The explorer and query condition builder analyze the same review set content. | Found: Search and filter content using the query condition builder to focus on specific subsets of documents. Use the Advanced review set explorer (preview) to run Kusto Query Language (KQL) queries directly against review set data | Fix: Add https://learn.microsoft.com/purview/edisc-features-components to sources for the statement that the condition builder and explorer work on the same review set content. | Source: https://learn.microsoft.com/purview/edisc-features-components#review-sets
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Review sets belong to premium eDiscovery. | Found: | Capability | eDiscovery feature support | Premium eDiscovery feature support | | Review sets |  | Supported. | | Review set KQL queries (preview) |  | Supported. | | Fix: Replace 'Review sets sit in eDiscovery (Premium)' and 'Review sets are part of eDiscovery (Premium)' with 'Review sets are premium eDiscovery features'. Cite https://learn.microsoft.com/purview/edisc, whose current feature table includes review sets and review set KQL queries (preview), instead of relying on the China-only legacy overview. | Source: https://learn.microsoft.com/purview/edisc
- [supported, minor] Cost and licensing / behaviour: Learn describes eDiscovery (Premium) as an end-to-end workflow to identify, preserve, collect, review, analyze and export investigation content. | Found: eDiscovery (Premium) provides an end-to-end workflow to identify, preserve, collect, review, analyze, and export content that's responsive to your organization's internal and external investigations. | Fix: Remove the clause ', which Learn describes as providing an end-to-end workflow to identify, preserve, collect, review, analyze and export content'. The cited article explicitly applies only to organizations hosted by 21Vianet; use the current premium-feature statement instead, without describing the legacy solution as the government-cloud product. | Source: https://learn.microsoft.com/purview/ediscovery
-->
