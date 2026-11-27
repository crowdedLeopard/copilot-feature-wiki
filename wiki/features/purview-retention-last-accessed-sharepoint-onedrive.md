---
title: "Microsoft Purview: retention based on last accessed date for SharePoint and OneDrive files"
slug: "purview-retention-last-accessed-sharepoint-onedrive"
roadmapId: 472030
topic: "governance"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Purview"]
summary: "Microsoft plans retention policies and labels that delete Office files in SharePoint and OneDrive not accessed for a set period. Preview is planned from mid-January 2027; licensing is not yet published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Feature-specific licensing for last-accessed retention is not yet published. General retention licensing is set out in the Microsoft Purview service description and does not by itself establish this option's licence."
audiences: ["compliance","m365-admin","service-owner","security"]
tags: ["purview","retention","data-lifecycle-management","sharepoint","onedrive","last-accessed","oversharing","copilot-control-system","stale-content"]
sources:
  - title: "Microsoft 365 Roadmap 472030"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=472030"
    kind: "roadmap"
  - title: "MC999442"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC999442"
    kind: "message-center"
  - title: "Learn about retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Manage inactive files policy with SharePoint Advanced Management (preview)"
    url: "https://learn.microsoft.com/microsoft-365/archive/manage-inactive-files"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management#permissions"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-pricing?view=o365-worldwide"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "New-SPOFileArchivePolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy"
    kind: "learn"
  - title: "Set-SPOFileArchivePolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spofilearchivepolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Retention policies for SharePoint and OneDrive"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <policy-name> -SharePointLocation <site-url> -OneDriveLocation <onedrive-url>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    note: "Creates the policy object; creating a policy also requires New-RetentionComplianceRule."
  - governs: "Archiving files by last access date (SharePoint Advanced Management)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-SPOFileArchivePolicy -Name <n> -PolicyType <t> -LastAccessDateCriteria <months> -IsWhatIfMode $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy"
    note: "Preview. Archives rather than deletes; needs SharePoint Advanced Management."
  - governs: "Last-accessed start option in the retention policy wizard"
    scope: "tenant"
    ui: null
    api: null
    note: "Announced in MC999442; not in Learn's retention guidance at the time of writing."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the check: limited to Office file types per MC999442, licensing now not yet published, cost rated low, archive-preview caveats kept separate from Purview, SPO archive command fixed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 76 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected after the check: default state is now not stated, the retention policy cmdlet shows its mandatory parameters, and an unmatched permissions checklist bullet is removed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 80 statements confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 85 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 85
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e931409768552db274af37766d00a343"
---

## What's changing

The roadmap item describes the ability to apply retention to each SharePoint or OneDrive item based on when a user last accessed it. Microsoft's notice MC999442 (updated October 13, 2026) says admins will be able to apply a retention policy or retention label in OneDrive and SharePoint to files that nobody in the organisation has accessed after a period of time. In this release, users will be able to set up delete policies based on the Last Accessed Date of Office file types. Non-Office file types are not supported in this release.

Purview retention policies and labels currently start the retention clock from one of four points: when content was created, when it was last modified (SharePoint, OneDrive and Microsoft 365 Groups files only), when it was labelled, or when an event occurs. This item adds a fifth: when the item was last accessed. The roadmap item is tagged #copilotcontrolsystem, and the notice says the feature will help delete obsolete data, which will improve the quality and relevance of Microsoft 365 Copilot responses.

The roadmap record shows status In development, with preview targeted for January CY2027 and General Availability for February CY2027, for Worldwide (Standard Multi-Tenant) on the web. The item was created in December 2024; the timeline was revised in Microsoft's October 13, 2026 update to MC999442. The notice gives these windows: preview begins mid-January 2027 (previously late November 2026) and completes by late February 2027 (previously end of December 2026); General Availability (Worldwide) begins late February 2027 (previously early January) and completes by late March 2027 (previously early February). The notice has no act-by date. It says the feature will be available by default, that no admin action is required before rollout, and that after rollout admins can use the retention control 'When items were last accessed' when configuring labels and policies. Microsoft has not stated whether existing retention configurations change automatically. Microsoft says it will update the notice with documentation before rollout.

Microsoft Learn does not yet describe the Purview option at the time of writing (November 2026), so the behaviour above is the notice's description. The related SharePoint Advanced Management inactive files policy, a separate archive preview that archives rather than deletes, documents how its last access date works: it is the recorded date a human last accessed a file, and AI agent, application, script and system access don't update it; updates can take up to 30 days; and human access before July 2025 might not have been captured. Microsoft has not said whether the Purview option shares any of these behaviours.

## Why it matters

Retention keyed to last access could give Copilot oversharing and clean-up programmes a rule many lack: delete Office files nobody has opened for a set period, rather than relying on creation or modification dates. Running it through Purview retention puts the clean-up inside a compliance process rather than a one-off script.

The risk runs the other way. A deletion policy is only as good as its access signal, and Microsoft has not yet published the access-update latency or access history for Purview's option. For the archive preview, Microsoft documents a lag of up to 30 days and a warning that some human access before July 2025 might not have been captured. If Purview's option behaves similarly, a recently read file could look inactive, so verify the semantics before enabling any delete policy. Microsoft's notice asks for no action before rollout and says to review your current configuration.

## Risk assessment

**Data exposure**
- Positive: the option is intended to delete obsolete Office files, which shrinks the pool of forgotten content that Copilot and search can surface. Non-Office file types are not supported in this release, so they stay outside it.

**Security & identity**
- No new identity or permission surface is described. Microsoft recommends the Compliance Administrator role group for managing retention policies and labels, so include its members in access reviews.

**Autonomy & actions**
- The announced release is delete policies based on last accessed date, so permanent deletion is the action. Microsoft has not yet published whether retain-only or retain-then-delete configurations, or an evaluation mode, apply to last-accessed policies.
- Disposition review is a retention-label capability, not a retention-policy capability. Whether last-accessed deletion works with it needs feature-specific confirmation.

**Change & support**
- Purview's definition of 'accessed' is not yet published. For the archive preview, agent, application and script access don't update the last access date; if the same holds for Purview, files read only by automations could look inactive. Confirm this before relying on it.
- The 30-day update lag and the July 2025 access-history warning are documented for the archive preview only. Verify Purview's own latency and history when Microsoft documents them.
- How the clock applies to files that already exist when a policy is created is not yet documented.

## Cost and licensing

Feature-specific licensing for last-accessed retention is not yet published, and no meter is documented for it at the time of writing (November 2026). The only cost the sources show is indirect: records-management and administrator time to scope, test and review policies.

General retention licensing is described separately in the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description). For organisation-wide, location-wide or include/exclude retention policies it lists Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium among the licences that provide user rights, and for a SharePoint or OneDrive for Business location it adds SharePoint Plan 2. A retention policy that uses an adaptive policy scope needs Microsoft 365 E5/A5/G5 or Microsoft Purview Suite/EDU/GOV/FLW, among others. These are general retention entitlements and do not confirm the licence for the last-accessed option.

Microsoft 365 Archive is a separate storage option. Its [pricing page](https://learn.microsoft.com/microsoft-365/archive/archive-pricing?view=o365-worldwide) says the per-GB monthly storage meter is charged only when archived plus active storage exceeds the tenant's included or licensed SharePoint storage capacity. Its billing is separate from the unconfirmed licensing for last-accessed retention.

## Scope

- Office file types in SharePoint and OneDrive, per MC999442; non-Office file types are not supported in this release. The notice names OneDrive and SharePoint only, and Teams, Exchange and Microsoft 365 Groups mailboxes are not stated.
- Worldwide (Standard Multi-Tenant) on the web, as the roadmap record lists. Government clouds are not listed on the roadmap item.
- Roles: Microsoft recommends the Compliance Administrator role group for managing retention policies and labels. A retention policy that includes SharePoint sites can't be configured by an administrator assigned administrative units; it needs an unrestricted administrator.
- Rollout: Microsoft's notice says the feature will be available by default and rolls out automatically, with the windows given above. Microsoft has not stated whether existing retention configurations change automatically.

## Governance guidance

### Before rollout
- Identify which SharePoint sites and OneDrive accounts hold Office files that would be candidates for last-accessed deletion, and which hold records or regulated content that must keep creation- or event-based schedules.
- Read the Learn documentation Microsoft says it will add to MC999442 before rollout, and note its definition of access, update latency, access-history limits and treatment of automations.
- Check your current retention licences against the general guidance in the Purview service description, and watch for feature-specific licensing once Microsoft publishes it.

### At rollout
- Verify whether Purview provides an evaluation mode for last-accessed deletion before enabling deletion. The documented simulation workflow belongs to SharePoint Advanced Management archiving, not to this option.
- Pilot on a limited set of sites or accounts rather than the whole SharePoint or OneDrive location.
- Tell site owners what 'inactive' means once Microsoft publishes the definition, and how they can raise content that is deleted unexpectedly.

### After rollout
- Review deleted items with site owners and lengthen the inactivity period if people report losing files they still used.
- Revisit the policy when Microsoft publishes the final semantics of the last-accessed trigger, including any support for retain-only, retain-then-delete or disposition review.
- If you also trial the archive preview, review its older-date candidates with site owners: choosing a period that falls after July 2025 gives a more complete observation period but does not exclude files with older recorded dates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Retention policies for SharePoint and OneDrive</strong><br><small>Tenant</small><br><small class="controls__note">Creates the policy object; creating a policy also requires New-RetentionComplianceRule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy-name&gt; -SharePointLocation &lt;site-url&gt; -OneDriveLocation &lt;onedrive-url&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Archiving files by last access date (SharePoint Advanced Management)</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Archives rather than deletes; needs SharePoint Advanced Management.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SPOFileArchivePolicy -Name &lt;n&gt; -PolicyType &lt;t&gt; -LastAccessDateCriteria &lt;months&gt; -IsWhatIfMode $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Last-accessed start option in the retention policy wizard</strong><br><small>Tenant</small><br><small class="controls__note">Announced in MC999442; not in Learn's retention guidance at the time of writing.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Today's retention start options are listed under [retention policies and labels](https://learn.microsoft.com/purview/retention#retention-policies-and-retention-labels). The last-accessed option announced in MC999442 is not documented on Microsoft Learn, and Learn documents no cmdlet parameter for it at the time of writing (November 2026).

The archive policy is a different product and archives rather than deletes. During its preview, Microsoft says PowerShell is the only supported management experience. A new policy is created Inactive and is activated with `Set-SPOFileArchivePolicy -PolicyId <guid> -State Active` ([reference](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spofilearchivepolicy)). A SelectedSites policy needs at least one included site before it can be activated. An Active policy with `-IsWhatIfMode $true` evaluates and reports without archiving files.

## Open questions

- How does Purview define 'accessed', and does it match the SharePoint Advanced Management last access date, including the treatment of agent and application access? Watch the Learn page Microsoft says it will add to MC999442.
- What are the access-update latency and the access-history limits for Purview's last-accessed option, and how is the clock set for files whose last access predates any recording boundary?
- Will last-accessed deletion support retain-only or retain-then-delete configurations, an evaluation mode, adaptive scopes or disposition review beyond the delete policies the notice describes?
- What licence does the last-accessed option need, and is any meter involved? Watch Message center and the Purview service description.
- Will non-Office file types be supported after this release?

<!-- rationale
risk: Medium. A deletion policy keyed to last access could remove files people still use if Purview's access signal lags or misses some access; Microsoft has not yet published how that signal behaves.
cost: Low. The only cost the sources show is administrator and records-management time; feature-specific licensing for last-accessed retention is not yet published.
impact: Medium. Site owners and users whose Office files are deleted would notice; compliance teams gain a new retention rule.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes / licensing: The licensing model is unknown because requirements specific to last-accessed retention are unpublished despite published general retention entitlements. | Found: For organization-wide, location-wide, or include/exclude retention policies, the following licenses provide user rights: ... Microsoft 365 E5/A5/G5/E3/A3/G3, Business Premium | Fix: Set licensing.model to included. Replace licensing.notes with 'General retention policies are included with Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium, among other listed plans in the Microsoft Purview service description. Requirements specific to the last-accessed option are not yet published.' This records the general entitlement, not a confirmed feature-specific licence. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
