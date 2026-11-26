---
title: "Microsoft Purview: apply default SharePoint library labels to existing files (GCC, GCC High, DoD)"
slug: "microsoft-purview-information-protection-apply-default-sharepoint-library-labels-to-data-a"
roadmapId: 575283
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to label existing SharePoint files with their library's default sensitivity label in GCC, GCC High and DoD, targeted for December CY2026. Learn documents this as an admin-created auto-labeling policy; review before creating one."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "The Purview service description lists Microsoft 365 E5/A5/G5, Microsoft Purview Suite, Office 365 E5/A5/G5 and related plans for both service-side automatic labelling and library default labelling. No separate licence entry for this policy type is published."
audiences: ["compliance","m365-admin","security","service-owner"]
tags: ["purview","sensitivity-labels","information-protection","sharepoint","auto-labeling","auditing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 575283"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575283"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 559105"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559105"
    kind: "roadmap"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Configure a default sensitivity label for a SharePoint document library"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "New-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-autosensitivitylabelpolicy"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Whether the policy runs in simulation or labels files (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy"
    kind: "learn"
  - title: "Labelling progress and failures for the policy (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy"
    kind: "learn"
  - title: "Audit records of sensitivity labels applied to files (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-platform-admin"
    kind: "learn"
  - title: "Audit records of sensitivity labels applied to files (PowerShell)"
    url: "https://learn.microsoft.com/azure/sentinel/datalake/auditing-lake-activities"
    kind: "learn"
videos: []
related: ["microsoft-purview-information-protection-apply-default-sharepoint-library-labels-to-559105","sensitivity-labels","microsoft-purview-information-protection-auto-labeling-per-policy-coverage-r-us-government","microsoft-purview-information-protection-auto-labeling-scale-increase-for-sh-us-government","auditing"]
controls:
  - governs: "Creating the policy that labels existing files from library defaults"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > + Create auto-labeling policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api: null
    note: "Select the option to apply default sensitivity labels from SharePoint document libraries to existing files. One such policy per tenant, up to 10 specific sites, no admin-unit scoping."
  - governs: "Whether the policy runs in simulation or labels files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Turn on policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <AutoLabelingPolicyName> -Mode Enable"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy"
    note: "Turning a policy on requires Compliance Administrator or Compliance Data Administrator. TestWithoutNotifications keeps it in simulation."
  - governs: "Tenant-wide switch for library default labels"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -DisableDocumentLibraryDefaultLabeling $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label"
    note: "Documented for the library default setting; takes about 15 minutes. Learn does not say whether it stops the existing-files policy."
  - governs: "Labelling progress and failures for the policy"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > View details"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Get-AutoSensitivityLabelPolicy -Identity \"<policy name>\" -IncludeProgressFeedback"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy"
    note: "Read-only monitoring. The PowerShell call reports progress counts; investigate failures in the portal."
  - governs: "Audit records of sensitivity labels applied to files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Audit > Search"
      docs: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-platform-admin"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -RecordType <ID>"
      docs: "https://learn.microsoft.com/azure/sentinel/datalake/auditing-lake-activities"
    note: "Read-only. Filter on the Applied sensitivity label file event; ActionScourceDetails 6 marks a label applied by a library default."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-26"
roadmapModified: "2026-11-26T00:16:54"
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
  - date: "2026-11-21"
    note: "Corrected after verification: risk lowered to Low because nothing happens until an admin creates the policy; target date aligned to the roadmap record (January CY2027); removed the unsupported policy checklist step."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after verification: user-defined permissions restriction, E3 or Business Premium licensing statement and library-default licence requirement now match Learn; markings wording and roadmap 559105 source added."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-26"
    note: "Target moved to December CY2026; added Learn's limits for the policy (one per tenant, 10 sites), its roles and the PowerShell to turn it on; removed the library REST row Learn no longer documents."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 76 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected after verification: Get-AutoSensitivityLabelPolicy is now described as reporting progress counts, with failures checked under View details; removed two checklist steps without control rows; added the Purview billing models page."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 85 statements not yet confirmed"
version: 7
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 84
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "fb8d1d2df43b0e2d65b98eca55c019c7"
---

## What's changing

Microsoft plans to apply a SharePoint document library's default sensitivity label to files that were already in the library before the default was set. The roadmap item describes this as auto-labeling of existing SharePoint files to match the library's default label, to close labelling gaps for data at rest without relying on users.

Microsoft Learn documents how this works: an administrator creates an auto-labeling policy and selects the option to apply default sensitivity labels from SharePoint document libraries to existing files. The policy does not inspect file content; the label comes from each library's default setting. Learn says you can currently create one policy of this type per tenant, covering up to 10 specific SharePoint sites, and that it evaluates only libraries that have a default label. The library default setting on its own still lists "Doesn't apply to existing files at rest in SharePoint" as a limitation; it labels new files and files that users edit.

This roadmap item (575283) covers GCC, GCC High and DoD on the web. It is In development, with a General Availability target of December CY2026; the previous version of this page gave January CY2027. Microsoft lists the same feature under roadmap item 559105 for Worldwide (Standard Multi-Tenant), which is marked Launched. The Learn page does not say which clouds the policy option is available in.

## Why it matters

This closes a known gap: libraries that were given a default label after content was added hold unlabelled files that only get the label when someone edits them. Once the policy runs, eligible older files take the library's label, and with it any encryption, so people may lose access they had or see files behave differently in Office.

Nothing is relabelled until an administrator creates the policy and turns it on after simulation, so the work is a decision about which libraries to include and whether their defaults suit older content. With the government-cloud target now December CY2026, that review is worth doing before the option appears.

## Risk assessment

**Data exposure**
- Older files can take a label that applies encryption, which changes who can open them. Learn says labels using user-defined permissions, an access expiry other than **Never**, or Double Key Encryption do not support a library default, so those cannot be pushed this way.
- Learn's general auto-labeling rule is that a manually applied label is not replaced by default, and a lower-priority automatically applied label is. It does not say whether the manual-label override setting is offered for this policy type.

**Security & identity**
- Creating the policy needs permission to manage auto-labeling policies and to read SharePoint site and library metadata; Learn names Compliance Administrator or a role such as SharePoint Administrator. Turning a policy on needs Compliance Administrator or Compliance Data Administrator.
- Site admins choose each library's default, so they decide which label the policy applies to that library's existing files.

**Autonomy & actions**
- The policy labels files service-side without a user opening them. Learn's general wizard steps include a choice to turn a policy on automatically if it is not edited for 7 days; check whether it appears for this policy type before selecting it.
- Learn says files might not be labelled if they are open, checked out, locked, unsupported or encrypted in an unsupported way.

**Change & support**
- The **This file has been automatically labeled** tooltip also appears for other auto-labeling and policy default labels, so expect questions that the Sensitivity column alone cannot answer.
- The 10-site limit means large estates are labelled in batches, each reviewed before the next.

## Cost and licensing

The Microsoft Purview service description lists **Client and service-side automatic sensitivity labeling** for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5 Information Protection and Governance and Office 365 E5/A5/G5. Its separate entry **Apply default sensitivity labeling for SharePoint Document library** lists Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/G5/F5 Information Protection and Governance and Office 365 E5/A5/G5.

The auto-labeling page says that with E3 or Business Premium, manual labelling entitlement does not include automatic labelling. It also says administrators configuring these features need the applicable licences, and that in shared locations such as SharePoint sites, users with owner or member roles need them while visitors and view-only users do not.

A licence entry specific to this policy type is not yet published, and Learn documents no meter for it. The other cost is admin time: reviewing library defaults, running simulation and handling questions once files change.

## Scope

- **Clouds and platform:** GCC, GCC High and DoD, Web, per this roadmap item. Worldwide is item 559105.
- **What is covered:** existing files in SharePoint document libraries that have a default sensitivity label, in up to 10 selected sites per policy and one policy of this type per tenant. Learn says to select specific sites rather than **All**, and that this policy type does not support administrative-unit scoping.
- **Prerequisites (Learn):** sensitivity labels enabled for Office files in SharePoint and OneDrive; labels usable as library defaults created and published; at least one library in each selected site with a default label. The library default itself needs labels scoped to **Files & other data assets**, and is unavailable on libraries with SharePoint Information Rights Management (IRM) enabled.
- **Roles:** site admins set library defaults; see Risk assessment for the policy roles.

## Governance guidance

### Before rollout
- Confirm that whoever will turn the policy on holds Compliance Administrator or Compliance Data Administrator.
- Choose the first batch of up to 10 sites, starting with libraries whose content is least sensitive to a label change.

### At rollout
- Create the policy under **Auto-labeling policies** in the Microsoft Purview portal, selecting the option for SharePoint library default labels, and run it in simulation.
- Review simulation results for the expected sites, libraries, labels and files before selecting **Turn on policy**.
- Tell owners and members of the selected sites which label their older files will take.

### After rollout
- Open **View details** for the policy to check labelled items and failures; use `Get-AutoSensitivityLabelPolicy` with `-IncludeProgressFeedback` to check labelling progress counts.
- Search the audit log for **Applied sensitivity label file** events on the selected sites.
- Edit the policy to replace the site selection with the next batch once results are reviewed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating the policy that labels existing files from library defaults</strong><br><small>Tenant</small><br><small class="controls__note">Select the option to apply default sensitivity labels from SharePoint document libraries to existing files. One such policy per tenant, up to 10 specific sites, no admin-unit scoping.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › + Create auto-labeling policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the policy runs in simulation or labels files</strong><br><small>Tenant</small><br><small class="controls__note">Turning a policy on requires Compliance Administrator or Compliance Data Administrator. TestWithoutNotifications keeps it in simulation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Turn on policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;AutoLabelingPolicyName&gt; -Mode Enable</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for library default labels</strong><br><small>Tenant</small><br><small class="controls__note">Documented for the library default setting; takes about 15 minutes. Learn does not say whether it stops the existing-files policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -DisableDocumentLibraryDefaultLabeling $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-default-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Labelling progress and failures for the policy</strong><br><small>Tenant</small><br><small class="controls__note">Read-only monitoring. The PowerShell call reports progress counts; investigate failures in the portal.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › View details <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AutoSensitivityLabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -IncludeProgressFeedback</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit records of sensitivity labels applied to files</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. Filter on the Applied sensitivity label file event; ActionScourceDetails 6 marks a label applied by a library default.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Audit › Search <a href="https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-platform-admin" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -RecordType &lt;ID&gt;</code> <a href="https://learn.microsoft.com/azure/sentinel/datalake/auditing-lake-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The library default itself is set per library by a site admin, following the support article [Add a sensitivity label to SharePoint document library](https://support.microsoft.com/office/54b1602b-db0a-4bcb-b9ac-5e20cbc28089); that is where the label this policy applies is chosen.

The Security & Compliance PowerShell reference for New-AutoSensitivityLabelPolicy documents no parameter for the library-default policy type at the time of writing (November 2026), so creation is a portal task. Set-AutoSensitivityLabelPolicy turns an existing auto-labeling policy on with `-Mode Enable`.

`Set-SPOTenant -DisableDocumentLibraryDefaultLabeling $true` removes the option to set library defaults and deactivates existing ones for new files, without removing labels already applied. The Learn page does not say whether it stops the existing-files policy. Learn marks library-default labelling in audit with ActionScourceDetails **6**; it does not say which value the policy records.

## Open questions

- When will the policy option for library default labels appear in GCC, GCC High and DoD tenants, against the December CY2026 target? Watch Message center and the roadmap item.
- Does `DisableDocumentLibraryDefaultLabeling` also stop an existing-files policy that is already on?
- Which ActionScourceDetails value do audit records carry when this policy, rather than SharePoint, applies the library default?
- Will the one-policy and 10-site limits rise, or be scriptable through New-AutoSensitivityLabelPolicy?

<!-- rationale
risk: Low. Learn documents labelling of existing files through an auto-labeling policy that an administrator creates, simulates and turns on, so files are not relabelled until someone does that.
cost: Medium. Service-side auto-labeling and library default labelling are listed for premium plans such as Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5; E3 or Business Premium manual-labelling entitlement does not include automatic labelling.
impact: Medium. People who work in the selected libraries may find older files carrying the library's label and any encryption it applies; the policy covers up to 10 sites at a time.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risk assessment: Data exposure; rationale: impact / behaviour: Applying a default label configured for encryption can change access to older files. | Found: You can grant permissions to specific people so that only they can interact with the labeled content | Fix: Add https://learn.microsoft.com/purview/encryption-sensitivity-labels to sources to support the statement about label encryption changing access. | Source: https://learn.microsoft.com/purview/encryption-sensitivity-labels
- [contradicted, minor] Governance guidance: After rollout, final bullet / consistency: The checklist instructs administrators to edit the policy's site selection, but no control row documents that setting. | Found: Edit the policy to replace the site selection with the next batch once results are reviewed. | Table rows cover creating the policy, enabling it, the tenant default-label switch, progress and audit, not editing site selection. | Fix: Remove the final After rollout checklist bullet, 'Edit the policy to replace the site selection with the next batch once results are reviewed.' The descriptive statement about batching can remain in Risk assessment.
-->
