---
title: "Microsoft Purview: preserve shared cloud attachment versions for users on hold"
slug: "microsoft-purview-compliance-portal-cloud-attachments-preservation-for-users-on-hold"
roadmapId: 493752
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to preserve the file versions that users on infinite hold share as cloud attachments, in any OneDrive or SharePoint site. Learn does not describe it yet; compliance and eDiscovery admins should watch for details."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2027"
previewDate: "March CY2027"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published: no Microsoft page states which licence covers this capability. Separately, Learn says eDiscovery holds require an eligible licence on every user whose content you preserve."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","ediscovery","retention","onedrive","sharepoint","data-lifecycle-management"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Purview compliance portal: Cloud Attachments preservation for users on hold"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=493752"
    kind: "roadmap"
  - title: "Cloud attachments in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-cloud-attachments"
    kind: "learn"
  - title: "Automatically apply a retention label to retain or delete content"
    url: "https://learn.microsoft.com/purview/apply-retention-labels-automatically"
    kind: "learn"
  - title: "Create holds in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-hold-create"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["ediscovery","microsoft-purview-compliance-portal-data-lifecycle-management-automatic-data-preservation","microsoft-purview-data-lifecycle-management-enable-version-trimming-for-data-covered-by-re"]
controls:
  - governs: "Whether cloud attachment versions are preserved for users on infinite hold"
    scope: "user"
    ui: null
    api: null
    note: "No setting or automation for this capability is documented at the time of writing (November 2026). The roadmap describes it as separate from retention-label application."
  - governs: "Existing alternative: retention label policy that labels a copy of each shared cloud attachment"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Label policies > Auto-apply a label"
      docs: "https://learn.microsoft.com/purview/apply-retention-labels-automatically"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name \"<policy name>\" -SharePointLocation <site URL> -RetainCloudAttachment $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    note: "Applies to files shared as cloud attachments, not to users on hold. Records Management has an equivalent path. Learn's example creates the policy; a label is added with New-RetentionComplianceRule."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-21"
    note: "New briefing: roadmap-only description of cloud attachment preservation for users on hold, with the existing label-based option as today's alternative."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 54
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "a9c786f1930a6f1347b1c911bf4f4d2b"
---

## What's changing

Microsoft plans to preserve the file versions that users share as cloud attachments when those users are on infinite hold. The roadmap item says the versions shared are preserved across any OneDrive or SharePoint site. It calls this a new capability, different from the existing option of applying a retention label to cloud attachments and links in OneDrive and SharePoint that are shared in Exchange, Teams, Viva Engage and Copilot.

Microsoft Learn does not describe this capability yet, so what follows about its behaviour is the roadmap's description. Learn does document the existing neighbours. A cloud attachment is a link to a file in SharePoint or OneDrive, not a copy, and by default eDiscovery collects only the current version of the file, which can differ from the version that was shared. Learn's current answer is a retention label policy that applies a label to cloud attachments, which stores a copy of the file at the time of sharing in the Preservation Hold library.

Learn uses "infinite hold" for an eDiscovery hold in which all content in the specified locations is placed on hold. The roadmap item does not say whether "users put on infinite hold" means that kind of hold. It also does not say how the preservation is switched on, where the preserved versions are stored or how long they are kept.

The roadmap record lists the status as In development, with a preview targeted for March CY2027 and general availability targeted for May CY2027, for Worldwide (Standard Multi-Tenant) on the Web platform. These are Microsoft's targets, not commitments.

## Why it matters

For legal and compliance teams, the gap this addresses is documented: a shared cloud attachment points at a live file, and Learn states that content present when the file was shared might no longer exist in the current version that eDiscovery collects. The roadmap presents this capability as a new way to preserve the shared versions for users on hold, alongside the label-based option.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. Treat this as something to review and plan for ahead of the March CY2027 preview, and do not rebuild your retention-label approach for cloud attachments until Microsoft documents how the new capability works and how it relates to it.

## Risk assessment

**Data exposure**
- The roadmap says shared file versions are preserved across any OneDrive or SharePoint site, which implies preserved copies of files that sit outside the held user's own site. Confirm who can search and read those preserved versions before the preview, because Microsoft has not described access to them.
- Learn documents that eDiscovery treats a cloud attachment as part of its parent message, so a search that matches the message retrieves the linked attachment even if the file does not meet the search condition. Expect preserved versions to be reachable through eDiscovery in the same way once documented.

**Security & identity**
- No Microsoft page describes which account or service performs the preservation or what permissions it needs. Ask Microsoft before assuming it follows the permissions model of the existing label-based option.

**Autonomy & actions**
- No change to what users or agents can do is described. The roadmap describes preservation only; it does not describe any action taken on the files.

**Change & support**
- Two overlapping approaches will exist: retention label policies for cloud attachments, and this hold-based capability. Support teams will need a rule for which one an investigation relies on.
- Learn lists limits for the existing label option, such as encrypted emails and messages not being supported. Whether the new capability has the same limits is not stated.

## Cost and licensing

A licence for this capability is not yet published, and the roadmap item names none. No meter, storage charge or price for it is documented at the time of writing (November 2026).

Two neighbouring statements are published. Learn says eDiscovery holds require an eligible licence on every user whose content you preserve, and that Office 365 F1 and F3 subscriptions do not include the rights to be the target of an eDiscovery hold (https://learn.microsoft.com/purview/edisc-hold-create). That covers eDiscovery holds, and whether it applies to this capability is for Microsoft to confirm. Retention labels and their policies are licensed through the Microsoft Purview service description under Data Lifecycle & Records Management.

The indirect cost today is admin time to review how your holds and retention label policies for cloud attachments interact with the new capability.

## Scope

The roadmap record lists Microsoft Purview, Worldwide (Standard Multi-Tenant), the Web platform and release phases General Availability and Preview. No other cloud is listed on the record; that is a record fact, not a statement that other clouds are excluded.

The users in scope are those put on infinite hold, according to the roadmap. Which hold types, roles and licences are involved is not stated. Learn does not describe rollout mechanics, prerequisites or an admin switch for this capability.

## Governance guidance

### Before rollout
- Inventory which users are on eDiscovery holds today and note which are infinite holds, using the case Hold policies tab in the Microsoft Purview portal.
- Check whether you already apply a retention label policy to cloud attachments, and list the sites, Microsoft 365 Groups and OneDrive accounts it covers, so you can compare it with the new capability once documented.
- Ask legal and compliance owners which investigations depend on the version of a file at the time of sharing, and whether a fixed copy is required rather than the live file.

### At rollout
- Watch Message center and the Microsoft Purview Learn pages for the preview announcement targeted for March CY2027, then read how the capability is switched on before adding any user to a hold for this purpose.
- Confirm the licence for each user on hold against Microsoft's published guidance once it appears.

### After rollout
- Test with a pilot custodian: share a file as a cloud attachment, edit it, then check which versions eDiscovery collects with the **Access links (cloud attachments) in messages** option selected.
- Review the audit log and Preservation Hold library storage for the sites involved, using whatever reporting Microsoft documents for the capability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether cloud attachment versions are preserved for users on infinite hold</strong><br><small>User</small><br><small class="controls__note">No setting or automation for this capability is documented at the time of writing (November 2026). The roadmap describes it as separate from retention-label application.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Existing alternative: retention label policy that labels a copy of each shared cloud attachment</strong><br><small>Tenant</small><br><small class="controls__note">Applies to files shared as cloud attachments, not to users on hold. Records Management has an equivalent path. Learn's example creates the policy; a label is added with New-RetentionComplianceRule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Label policies › Auto-apply a label <a href="https://learn.microsoft.com/purview/apply-retention-labels-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &quot;&lt;policy name&gt;&quot; -SharePointLocation &lt;site URL&gt; -RetainCloudAttachment $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no admin setting or automation for this capability, so the first row records the gap. It is a row because an administrator would expect to be able to scope or switch it.

The second row is the existing alternative and does not govern the new capability. A retention label policy applies a label to a copy of each shared file; Learn says the copy is stored in the Preservation Hold library, the label is not applied to the message or the original file, and the label should use the **When items were labeled** start setting. The New-RetentionCompliancePolicy example creates the policy; adding a retention label to it takes the New-RetentionComplianceRule cmdlet.

## Open questions

- Does "infinite hold" in the roadmap mean an eDiscovery hold, a Litigation Hold on the mailbox, or another hold type, and does it need to be a hold the admin creates for this purpose? Watch the Learn eDiscovery holds pages.
- Is the capability on by default for users already on infinite hold when it reaches General Availability, or is it an opt-in? Watch Message center.
- Which licence covers it, and is any storage or meter charged for the preserved versions? Watch the Microsoft Purview service description.
- Where are the preserved versions stored, who can read them, and how long are they kept after the hold is released? Watch the Learn pages for retention and eDiscovery.
- How does it interact with a retention label policy for cloud attachments applied to the same sites? Watch the cloud attachments pages for eDiscovery and retention.

<!-- rationale
risk: Low. The roadmap describes a preservation capability, and no source says it changes existing behaviour. The default is not stated, so this rates today's behaviour continuing; what it retains and where is still to be confirmed.
cost: Low. The only cost the sources show is admin time. The licence and any storage or meter for this capability are not yet published, so cost may need to be re-rated once Microsoft publishes them.
impact: Low. It targets users put on infinite hold, so the people who notice are compliance, legal and eDiscovery administrators and the custodians involved. The roadmap does not describe a change for other users.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance guidance: Before rollout, first bullet / admin-path: The instruction to inventory existing holds gives the case Hold policies tab in the Microsoft Purview portal as the route. | Found: Select the eDiscovery solution card and then select Cases in the left navigation. Select a case, and then select the Hold policies tab. | Fix: Replace the first Before rollout bullet with: 'Inventory which users are on eDiscovery holds today and note which are infinite holds, using Microsoft Purview portal > eDiscovery > Cases > case > Hold policies.' The documented route is at https://learn.microsoft.com/purview/edisc-hold-create#create-a-hold; the current instruction starts inside a case without the navigation needed to reach it. | Source: https://learn.microsoft.com/purview/edisc-hold-create
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Solutions > Data Lifecycle Management > Policies > Label policies > Auto-apply a label is the route for the existing cloud attachment label policy. | Found: If you're using data lifecycle management: Solutions > Data Lifecycle Management > Policies > Label policies > Auto-apply a label | Fix: The printed route correctly reaches the wizard but stops before its cloud-attachment choice. Extend it to 'Solutions > Data Lifecycle Management > Policies > Label policies > Auto-apply a label > Choose the type of content you want to apply this label to > Apply label to cloud attachments and links shared in Exchange, Teams, Viva Engage, and Copilot'. The wizard page is documented at https://learn.microsoft.com/purview/apply-retention-labels-automatically and the option's full label is stated at https://learn.microsoft.com/purview/ai-m365-copilot#capabilities-supported; cite the latter for that label. | Source: https://learn.microsoft.com/purview/apply-retention-labels-automatically
- [supported, minor] controls[1].api; Governance controls table / command: New-RetentionCompliancePolicy with -Name, -SharePointLocation <site URL> and -RetainCloudAttachment $true creates the existing cloud attachment auto-apply label policy. | Found: This example creates a new auto-apply label policy targeted to cloud attachments named Marketing Department with the specified details. Note: This parameter is currently in Preview, is not available in all organizations, and is subject to change. | Fix: Keep the call and its policy-creation qualification. Add to controls[1].note: 'The PowerShell RetainCloudAttachment parameter is currently in Preview, is not available in all organizations, and is subject to change.' This qualification is in https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy#-retaincloudattachment. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy
- [contradicted, minor] Governance guidance; controls / consistency: The checklist names hold review, cloud attachment collection and audit/storage review controls without corresponding table rows. | Found: Checklist: 'using the case Hold policies tab'; 'Access links (cloud attachments) in messages'; 'Review the audit log and Preservation Hold library storage'. Table: only the preservation gap and retention-label policy. | Fix: The Before rollout hold-inventory step, the After rollout Access links collection step, and the After rollout audit/storage review step have no corresponding controls-table rows. This is a checklist/table coverage finding, not a request to add rows during correction.
-->
