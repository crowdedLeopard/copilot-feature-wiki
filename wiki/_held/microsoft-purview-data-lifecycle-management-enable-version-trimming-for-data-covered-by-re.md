---
title: "Microsoft Purview: allow version trimming for content under retention in SharePoint and OneDrive"
slug: "microsoft-purview-data-lifecycle-management-enable-version-trimming-for-data-covered-by-re"
roadmapId: 575284
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a Purview setting that would let SharePoint trim file versions on OneDrive and SharePoint content under retention policies. An admin would turn it on; Learn does not yet describe it, so review fit before the January CY2027 target."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Retention policies are covered by the licences listed in the Microsoft Purview service description, with SharePoint Plan 2 also listed for SharePoint and OneDrive locations. A licence or meter specific to this setting is not yet published."
audiences: ["compliance","m365-admin","service-owner"]
tags: ["purview","data-lifecycle-management","retention","sharepoint","onedrive","governance","powershell","version-history"]
sources:
  - title: "Microsoft 365 Roadmap item 575284"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575284"
    kind: "roadmap"
  - title: "Overview of version history limits for document libraries and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/document-library-version-history-limits"
    kind: "learn"
  - title: "Trim existing versions"
    url: "https://learn.microsoft.com/sharepoint/trim-versions"
    kind: "learn"
  - title: "Learn about retention for SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/retention-policies-sharepoint"
    kind: "learn"
  - title: "Set default organization version limits for new document libraries and OneDrive accounts"
    url: "https://learn.microsoft.com/sharepoint/set-default-org-version-limits"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant?view=sharepoint-ps"
    kind: "learn"
  - title: "Set-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-retentioncompliancepolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep","microsoft-purview-data-lifecycle-management-archive-sharepoint-files-under-retention","purview-retention-last-accessed-sharepoint-onedrive","ediscovery","auditing"]
controls:
  - governs: "Whether SharePoint may trim versions of files covered by a retention policy"
    scope: "other"
    ui: null
    api: null
    note: "Planned per the roadmap as a policy-scoped setting. Learn documents no path or call for it at the time of writing (November 2026)."
  - governs: "Default version history limits for new document libraries and OneDrive accounts"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Settings > Version history limits"
      docs: "https://learn.microsoft.com/sharepoint/set-default-org-version-limits"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableAutoExpirationVersionTrim $true"
      docs: "https://learn.microsoft.com/sharepoint/set-default-org-version-limits"
    note: "Today's alternative. Applies to new libraries only, does not trim existing versions and is ignored for items under a retention policy. Manual limits use -MajorVersionLimit and -ExpireVersionsAfterDays."
  - governs: "Trimming existing versions across the tenant (public preview)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-SPOTenantApplyFileVersionPolicyJob -TrimVersions"
      docs: "https://learn.microsoft.com/sharepoint/trim-versions"
    note: "Preview. Requires a SharePoint Advanced Management or Copilot licence. Versions under a retention policy or eDiscovery hold get an expiration date instead of being deleted."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-20"
    note: "First briefing: planned Purview setting to permit version trimming under retention, with today's version-limit and trim controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 54
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "a735467a68861d031bc31ad314c96259"
---

## What's changing

The roadmap item describes a setting in Microsoft Purview Data Lifecycle Management that would let SharePoint's version management trim file versions in OneDrive and SharePoint even where retention policies apply, "except for specific protected cases". The roadmap calls it a policy-scoped setting that "essentially overrides the default behavior where all versions are retained", and says admins with appropriate Purview RBAC can enable it.

Microsoft Learn does not describe this setting yet (at the time of writing, November 2026), so what follows about its behaviour is the roadmap's description. Learn does document today's behaviour: for items under a retention policy or an eDiscovery hold, the document library's version limits are ignored until the retention period is reached or the hold is released.

The record lists the status as In development, with a preview targeted for November CY2026 and general availability targeted for January CY2027. Release phases are General Availability and Preview, the cloud is Worldwide (Standard Multi-Tenant) and the platform is Web. These are Microsoft's targets, not commitments.

## Why it matters

Retained file versions are a storage cost that existing version limits cannot reduce. Microsoft Learn says that for content under a retention policy, old versions are not automatically purged and users are prevented from deleting them. This setting is Microsoft's planned route to reclaiming that storage without removing the retention policy.

The roadmap wording suggests an administrator turns the setting on, so we expect nothing to change for retained content until someone does; Microsoft has not published the default in Learn. The decision to take is whether the storage saved is worth permitting permanent deletion of versions that a retention policy would otherwise keep.

## Risk assessment

**Data exposure**
- No new data access is described. The change is to deletion: Learn says versions deleted by trimming jobs are permanently deleted and cannot be recovered unless backed up, for example with Microsoft 365 Backup.
- The roadmap says legal-hold and records promises stay intact through "specific protected cases". Microsoft has not yet said which cases those are, so do not assume the cases match any list you hold today.

**Security & identity**
- The roadmap says admins with appropriate Purview RBAC enable the setting. The role is not yet named. Anyone who can set it could permit deletion of versions that retention currently keeps, so treat the role as a compliance-sensitive assignment once it is known.

**Autonomy & actions**
- Once enabled, SharePoint's version management would trim versions "per the defined limits", meaning the version history limits you already set. Content that was exempt from limits because of retention could then be trimmed without a further decision per file.

**Change & support**
- Today, a trim job that meets a version under a retention policy or eDiscovery hold stamps an expiration date instead of deleting it. How this setting changes that behaviour is not yet documented, so expect support questions about why versions disappeared from retained files.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists the licences that give user rights for retention policies, including Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium, with SharePoint Plan 2 also listed where the location is SharePoint or OneDrive for Business. This setting is described as scoped to a retention policy, so that is the closest published licensing statement. A licence or meter specific to this setting is not yet published.

**Meter.** The roadmap and the pages read name no meter for this setting.

**Related requirement.** Tenant-level trimming of existing versions, currently in public preview, requires a SharePoint Advanced Management licence or Copilot licence. Learn states that for that trimming feature; it does not say whether it applies to this setting.

**Indirect costs.** Admin time to agree the protected content with records and legal owners, and to estimate the saving. The what-if analysis for tenant-level trimming covers SharePoint sites and OneDrive accounts. No storage saving figure is published.

## Scope

- **Workloads:** OneDrive and SharePoint content covered by retention policies, per the roadmap title and description.
- **Cloud and platform:** Worldwide (Standard Multi-Tenant) and Web, as the roadmap record lists them. No other cloud is listed on the record; that is not a statement that it is unavailable.
- **Roles:** The roadmap says "appropriate Purview RBAC". The specific role is not yet documented.
- **Rollout:** Preview targeted for November CY2026 and general availability targeted for January CY2027. No Message Center post was supplied for this item.
- **Policy scope:** The roadmap calls it policy-scoped. Which policy types and which locations it attaches to are not yet documented.

## Governance guidance

### Before rollout
- Record the current version history limits in the SharePoint admin center (Settings > Version history limits). Learn gives the default as Manual with 500 major versions and no expiration.
- Agree with records and legal owners which content must keep every version. Learn blocks version deletion on documents marked as records, and the roadmap's protected cases are not yet defined.
- Estimate storage at stake with the what-if analysis for tenant-level trimming, if you hold a SharePoint Advanced Management or Copilot licence.
- Confirm your backup position for SharePoint versions, because trimmed versions are permanently deleted.

### At rollout
- Read the Learn page for the setting when it is published, and confirm the protected cases, the role required and the policy scope before turning it on.
- Enable it first on the narrowest retention policy scope the setting allows, and check the result before widening.
- Limit who holds the Purview role that can enable it.

### After rollout
- Check the Microsoft Purview portal audit log for version deletion events on retained sites. Learn lists "Versions deleted when expired or bulk deleted" as an audited activity; whether trims under this setting appear the same way is not yet documented.
- Compare storage use before and after, and report the saving to the finance owner.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether SharePoint may trim versions of files covered by a retention policy</strong><br><small class="controls__note">Planned per the roadmap as a policy-scoped setting. Learn documents no path or call for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Default version history limits for new document libraries and OneDrive accounts</strong><br><small>Tenant</small><br><small class="controls__note">Today's alternative. Applies to new libraries only, does not trim existing versions and is ignored for items under a retention policy. Manual limits use -MajorVersionLimit and -ExpireVersionsAfterDays.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Settings › Version history limits <a href="https://learn.microsoft.com/sharepoint/set-default-org-version-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableAutoExpirationVersionTrim $true</code> <a href="https://learn.microsoft.com/sharepoint/set-default-org-version-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Trimming existing versions across the tenant (public preview)</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Requires a SharePoint Advanced Management or Copilot licence. Versions under a retention policy or eDiscovery hold get an expiration date instead of being deleted.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SPOTenantApplyFileVersionPolicyJob -TrimVersions</code> <a href="https://learn.microsoft.com/sharepoint/trim-versions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row is the control this briefing is about, and Microsoft Learn documents neither an admin path nor a call for it at the time of writing (November 2026). The other two rows are today's controls. They do not override retention: Learn says version limits are ignored for items under a retention policy, and a trim job stamps an expiration date on such versions instead of deleting them.

Organisation-level limits apply only to new libraries and new OneDrive accounts, and do not trim existing versions. Changing the limit requires an account with SharePoint administrator permissions; Set-SPOTenant needs the SharePoint Online administrator role. Tenant-level trimming is in public preview, allows one job per tenant at a time, and excludes read-only, locked and archived sites and sites with broken version policy inheritance. Its trim jobs permanently delete versions.

## Open questions

- Which "specific protected cases" will the setting exclude: eDiscovery holds, records, labelled items or others? Watch the Learn page on retention for SharePoint and OneDrive and the roadmap item.
- Which Purview role enables it, where does the setting sit in the retention policy or Data Lifecycle Management settings, and will there be a PowerShell or API control?
- Will it apply to versions already held in the Preservation Hold library, or only to versions created after it is enabled?
- Does it require a SharePoint Advanced Management or Copilot licence, as tenant-level trimming does, or only the retention policy licences?
- Are trims made under this setting audited as the version events Learn lists today?

<!-- rationale
risk: Low. Left at its default, today's behaviour continues: Microsoft Learn says version limits are ignored for items under a retention policy. The risk sits in enabling it, because trimmed versions are permanently deleted.
cost: Low. The only costs the sources show are admin time and a possible storage saving. Microsoft has not published a separate licence or meter for this setting; retention policies themselves are covered by the licences in the Purview service description.
impact: Low. Compliance and SharePoint administrators configure it. Users would notice only if an older version they expected to restore had been trimmed.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Licence / licensing: The paragraph presents Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium as retention-policy user-rights licences without qualifying adaptive policy scopes. | Found: If the retention policy uses an adaptive policy scope, then one of the following licenses is required to provide user rights: - Microsoft 365 E5/A5/G5 - Microsoft Purview Suite/EDU/GOV/FLW | Fix: Narrow the first licence sentence to: 'For retention policies that do not use adaptive policy scopes, the Microsoft Purview service description lists Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium among the licences providing user rights, with SharePoint Plan 2 also listed for SharePoint or OneDrive for Business locations.' Keep the following sentence that the new setting's licensing is not yet published. Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance guidance: Before rollout / admin-path: SharePoint admin center > Settings > Version history limits reaches the organization default version-limit settings. | Found: Go to Settings in the SharePoint admin center Select Version History limits. Select Automatically. | Fix: For the controls[1].ui route that corresponds to its automatic-setting command, use 'Settings > Version history limits > Automatically'. The shorter route in the checklist remains correct for reviewing current limits. | Source: https://learn.microsoft.com/sharepoint/set-default-org-version-limits
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells administrators to check the Purview audit log, but that control has no row in the controls table. | Found: Check the Microsoft Purview portal audit log for version deletion events on retained sites. | The controls table lists only the planned override, organization default version limits, and tenant-level trimming. | Fix: Remove the checklist bullet beginning 'Check the Microsoft Purview portal audit log' because the audit control is not represented in the controls table. Keep the existing audit question in Open questions.
-->
