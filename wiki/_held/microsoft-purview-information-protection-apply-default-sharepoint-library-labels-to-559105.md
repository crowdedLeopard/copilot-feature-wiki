---
title: "Microsoft Purview: apply default SharePoint library labels to existing files (Worldwide)"
slug: "microsoft-purview-information-protection-apply-default-sharepoint-library-labels-to-559105"
roadmapId: 559105
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Purview now has an opt-in auto-labeling policy that applies a SharePoint library's default sensitivity label to files already in it. Worldwide only; nothing changes until an administrator creates and enables it."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn's licensing table lists service-side auto-labeling as included with Microsoft 365 E5 and the other E5 or P2-tier SKUs it names; E3 and Business Premium need an E5 or P2-tier add-on. Nothing specific to this policy type is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","information-protection","auto-labeling","sensitivity-labels","sharepoint","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap item 559105"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559105"
    kind: "roadmap"
  - title: "MC1477181: Microsoft Purview | Information Protection: Apply default SharePoint library sensitivity labels to data at rest"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1477181"
    kind: "message-center"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Configure a default sensitivity label for a SharePoint document library"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "New-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/new-autosensitivitylabelpolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-information-protection-apply-default-sharepoint-library-labels-to-data-a","sensitivity-labels","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements","microsoft-purview-information-protection-auto-labeling-per-policy-coverage-report","auditing"]
controls:
  - governs: "Creating the policy and choosing the SharePoint sites it covers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > + Create auto-labeling policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api: null
    note: "Choose the option for default sensitivity labels from SharePoint document libraries. One policy of this type per tenant, up to 10 sites."
  - governs: "Whether the policy runs in simulation or labels files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Turn on policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api: null
    note: "Turning a policy on after simulation requires Compliance Administrator or Compliance Data Administrator."
  - governs: "Labelling progress and failures for the policy"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > View details"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api: null
    note: "Newer review pages have Overview, Labeled items and Labeling failures tabs; earlier portal experiences might open Activity explorer instead."
  - governs: "Whether the unified audit log records activity, which Learn requires for simulation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Run in Exchange Online PowerShell. Requires the Audit Logs role in Exchange Online."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-20"
    note: "New briefing for the Worldwide launch of the auto-labeling policy that applies SharePoint library default labels to existing files."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 68
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "7fee38f06f875bbe556c567a74296e2f"
---

## What's changing

Microsoft Purview has added an auto-labeling policy type that applies a SharePoint document library's default sensitivity label to files already stored in that library. Until now, as Microsoft's notice [MC1477181](https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1477181) puts it, a default library label was applied only to new or modified files, so files that existed before the default was configured could stay unlabelled. The new policy labels those eligible files without users opening or editing them, and without sensitive information type or trainable classifier conditions. Microsoft Learn adds that the policy type does not inspect file content: the label comes from the library's default sensitivity label setting.

The notice says labelling runs as a background service process and is not immediate. Files with no label receive the library's default label, and files with a lower-priority label may be upgraded to it, depending on the policy setting. Microsoft Learn lists the limits: one policy of this type per tenant, up to 10 SharePoint sites per policy, specific sites rather than **All**, and no administrative-unit scoping. Files that are open, checked out, locked, unsupported or encrypted in an unsupported way might not be labelled.

The roadmap record gives status Launched, a target of October CY2026 and a preview date of September CY2026, with release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the Web platform. MC1477181 gives the Worldwide general availability rollout as beginning in early October 2026 and expected to complete by mid-October 2026, and sets no act-by date. Microsoft lists the feature under a second roadmap item, 575283, for GCC, GCC High and DoD (In development, target December CY2026), covered in [its own briefing](/features/microsoft-purview-information-protection-apply-default-sharepoint-library-labels-to-data-a/). This page covers item 559105 only.

Two Learn pages differ. The auto-labeling article describes the policy that applies library default labels to existing files, while the library default label article still lists "Doesn't apply to existing files at rest in SharePoint" under Limitations.

## Why it matters

If your organisation already sets default labels on document libraries, this closes the gap Microsoft describes: historical files that never received the default. Microsoft's notice says no action is required unless you plan to use the capability, and that the feature is opt-in, so if nobody acts the policy does not exist and no existing file is relabelled by it.

If you do use it, treat the first run as a change to a large body of content, not a background tidy-up. Anything that keys off sensitivity labels will see the newly labelled files, and the policy can upgrade files that carry a lower-priority label. Use simulation and the 10-site limit to stage it.

## Risk assessment

**Data exposure**
- A library's default label is applied to every eligible file in that library, so a poorly chosen default is applied at scale. Learn says simulation for this policy type identifies the files in libraries that have a default label; review those results before turning the policy on.
- Labels with user-defined permissions, an expiry other than **Never**, or Double Key Encryption are listed on the library default label page as unsuitable for a library default, so check the label's encryption settings before choosing it.

**Security & identity**
- The person configuring the policy needs permission to read the library's default label: Microsoft's notice names Compliance Administrator or SharePoint Administrator, and Learn names Compliance Administrator or an existing SharePoint or Microsoft Entra role with this access, such as SharePoint Administrator.
- Turning the policy on after simulation needs Compliance Administrator or Compliance Data Administrator, according to Learn's auto-labeling checklist; without one of those roles the **Turn on policy** button is greyed out.

**Autonomy & actions**
- Microsoft's notice says that once the policy is enabled, files are labelled in the background without users opening or editing them, so correct the default label and site selection in simulation, before the policy is turned on.

**Change & support**
- Learn gives a tenant-wide ceiling of 500,000 automatically labelled SharePoint and OneDrive files per day across all auto-labeling policies, described as not a guaranteed rate. Expect large libraries to take time and plan help-desk wording for files that gain a label later.
- PDFs are skipped entirely unless PDF labelling is enabled for the tenant, so files you expect to be labelled may be left alone.
- Learn says files can stay unlabelled when they are open, checked out, locked, unsupported or encrypted in an unsupported way, so review the **Labeling failures** tab rather than assuming full coverage.

## Cost and licensing

**Licence.** Learn's auto-labeling article lists service-side auto-labeling (SharePoint, OneDrive, Exchange) as included with the same E5 or P2-tier SKUs as client-side auto-labeling: Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). It also says that with E3 or Business Premium, auto-labeling is not included and requires an E5 or P2-tier add-on. That page does not single out this policy type, and no price or meter specific to it is published at the time of writing (November 2026).

**Meter and caps.** No meter is documented for this policy type. The limits Learn documents are capacity limits, not spending limits: one policy of this type per tenant and up to 10 sites per policy.

**Indirect costs.** Admin time to inventory libraries, run and review simulation, and edit the policy in batches of up to 10 sites. Learn's checklist also requires auditing to be turned on for simulation.

## Scope

**Clouds and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. GCC, GCC High and DoD are tracked under roadmap item 575283.

**Who is affected.** Microsoft's notice says users are affected only if administrators enable and configure the policy. It names Purview administrators, and organisations whose SharePoint document libraries have default sensitivity labels configured.

**Prerequisites (Learn).** Sensitivity labels are enabled for Office files in SharePoint and OneDrive; the labels usable as library defaults are created and published; at least one library in the target sites has a default label; and you can create and manage auto-labeling policies and read the library metadata. Each selected site needs at least one library with a default label in portal experiences that validate this.

**Policy limits.** One policy of this type per tenant, up to 10 SharePoint sites, specific sites rather than **All**, and no administrative-unit scoping.

## Governance guidance

### Before rollout
- Identify which SharePoint document libraries have a default sensitivity label and choose the first sites, up to 10, as Microsoft's notice and Learn advise.
- Verify the labels used as library defaults are published to users and that sensitivity labels are enabled for Office files in SharePoint and OneDrive, per the Learn prerequisites; see [sensitivity labels](/concepts/sensitivity-labels/).
- Confirm auditing is on, because Learn's checklist makes it a requirement for simulation.
- Decide whether PDFs matter for your libraries and enable PDF labelling first if they do.

### At rollout
- Create the policy in the Microsoft Purview portal, choose the option that applies default sensitivity labels from SharePoint document libraries to existing files, and select specific sites.
- Run the policy in simulation and compare the matched sites, libraries, default labels and files against what you expected.
- Ask a Compliance Administrator or Compliance Data Administrator to turn the policy on once simulation looks right.

### After rollout
- Review labelling progress, **Labeled items** and **Labeling failures** on the policy's review pages, and follow Learn's guidance on failure reasons.
- Edit the policy to swap in the next batch of up to 10 sites once labelling for the first batch is complete and reviewed.
- Update internal information protection guidance, as Microsoft's notice recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating the policy and choosing the SharePoint sites it covers</strong><br><small>Tenant</small><br><small class="controls__note">Choose the option for default sensitivity labels from SharePoint document libraries. One policy of this type per tenant, up to 10 sites.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › + Create auto-labeling policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the policy runs in simulation or labels files</strong><br><small>Tenant</small><br><small class="controls__note">Turning a policy on after simulation requires Compliance Administrator or Compliance Data Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Turn on policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Labelling progress and failures for the policy</strong><br><small>Tenant</small><br><small class="controls__note">Newer review pages have Overview, Labeled items and Labeling failures tabs; earlier portal experiences might open Activity explorer instead.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › View details <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity, which Learn requires for simulation</strong><br><small>Tenant</small><br><small class="controls__note">Run in Exchange Online PowerShell. Requires the Audit Logs role in Exchange Online.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roles differ by task: configuring the policy needs access to read the library's default label (Compliance Administrator, or SharePoint Administrator per the notice), while turning it on after simulation needs Compliance Administrator or Compliance Data Administrator.

Microsoft Learn documents no PowerShell or API for creating or running this policy type at the time of writing (November 2026), so those sides of the first three rows are not yet documented. Learn does document a tenant-level setting that turns off default labelling for SharePoint document libraries, on the [library default label page](https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label); that page does not say whether it stops this policy.

There is no separate switch for the feature itself: the policy does not exist until an administrator creates it.

## Open questions

- Which setting decides whether this policy upgrades files that carry a lower-priority label, and does the setting that overrides a lower-priority manual label apply to it? The notice says upgrading depends on "the policy setting"; watch the Learn auto-labeling article.
- Does turning off default labelling for libraries at tenant level stop this policy from labelling files? Watch the library default label page.
- Will the library default label page's limitation "Doesn't apply to existing files at rest in SharePoint" be updated to point to this policy?
- Will PowerShell or another API be documented for creating this policy type, and will a price or meter specific to it ever be published? Watch the New-AutoSensitivityLabelPolicy reference and Message center.

<!-- rationale
risk: Low. Microsoft's notice says the feature is opt-in and needs administrator configuration, so nothing is relabelled until a policy is created; once enabled it labels existing files at scale, which simulation lets you review first.
cost: Low. Learn lists service-side auto-labeling as included with E5 and P2-tier licences and says E3 and Business Premium need an E5 or P2-tier add-on; no price or meter specific to this policy type is published. The known cost is admin time.
impact: Low. Microsoft's notice says users are affected only if administrators enable and configure the policy; the people who notice are Purview and SharePoint administrators, then owners of the labelled libraries.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls; Open questions / absence: Microsoft Learn documents no PowerShell or API for running or enabling an existing policy of this type. | Found: Use the Set-AutoSensitivityLabelPolicy cmdlet to modify auto-labeling policies in your organization. ... The Mode parameter specifies the action and notification level of the auto-labeling policy. ... Enable: The policy is enabled for actions and notifications. | Fix: Set controls[1].api to kind powershell, call 'Set-AutoSensitivityLabelPolicy -Identity <policy> -Mode Enable', docs 'https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy'. Add to its note 'Run in Security & Compliance PowerShell.' Replace the blanket prose absence with 'The creation command for selecting this policy subtype is not yet documented; Set-AutoSensitivityLabelPolicy documents changing an existing auto-labeling policy to Mode Enable.' Narrow the automation open question to creation of this subtype. | Source: https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy
- [contradicted, blocker] Open questions: lower-priority label replacement / absence: Which settings govern replacement of lower-priority labels, including manually applied labels, remains undocumented for this apply-label policy. | Found: For auto-labeling policies that apply a sensitivity label, you can select a setting to override a manually applied label that has lower priority. ... The configurable setting for auto-labeling policies is on the Additional label settings page. | Fix: Replace the first Open questions bullet with: 'Learn documents that automatic labeling replaces a lower-priority automatically applied label. For auto-labeling policies that apply a sensitivity label, replacement of a lower-priority manually applied label is configurable on the Additional label settings page; it is off by default.' Cite https://learn.microsoft.com/purview/apply-sensitivity-label-automatically#will-an-existing-label-be-overridden. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist's controls for checking library defaults, label publication, Office-file label integration and enabling PDF labelling have corresponding controls rows. | Found: Before rollout: identify library defaults; verify labels are published and Office-file labels enabled; enable PDF labelling. Controls table: policy creation, policy activation, policy review, auditing only. | Fix: The library-default inventory, label-publication check, Office-file integration check and PDF-enablement step have no corresponding controls rows. Narrow these checklist bullets to prerequisite reminders already covered in Scope, rather than instructions to configure or take stock of controls absent from the table.
-->
