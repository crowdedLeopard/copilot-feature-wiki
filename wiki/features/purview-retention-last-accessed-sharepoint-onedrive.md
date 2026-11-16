---
title: "Microsoft Purview: retention based on last accessed date for SharePoint and OneDrive files"
slug: "purview-retention-last-accessed-sharepoint-onedrive"
roadmapId: 472030
topic: "governance"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Purview"]
summary: "Data Lifecycle Management will be able to start a retention period from when a file was last accessed by a person, not only from creation or last modification, so stale content Copilot might surface can be cleaned up."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "none"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Retention policies and labels are part of Microsoft Purview Data Lifecycle Management (Microsoft 365 E3 and above for basic retention; E5 or Purview Suite for advanced features). Check the licensing guidance for the specific option when published."
audiences: ["compliance","m365-admin","service-owner","security"]
tags: ["purview","retention","data-lifecycle-management","sharepoint","onedrive","last-accessed","oversharing","copilot-control-system","stale-content"]
sources:
  - title: "Microsoft 365 Roadmap 472030"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=472030"
    kind: "roadmap"
  - title: "Learn about retention policies and retention labels: when the retention period starts"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Common settings for retention policies and retention label policies"
    url: "https://learn.microsoft.com/purview/retention-settings"
    kind: "learn"
  - title: "Manage inactive files policy with SharePoint Advanced Management (preview): last access date"
    url: "https://learn.microsoft.com/microsoft-365/archive/manage-inactive-files"
    kind: "learn"
  - title: "Learn about retention for SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/retention-policies-sharepoint"
    kind: "learn"
  - title: "Retention policies for SharePoint and OneDrive (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy"
    kind: "learn"
  - title: "Retention policies for SharePoint and OneDrive (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Archiving files by last access date (SharePoint Advanced Management) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy"
    kind: "learn"
videos: []
related: ["m365-teams-channel-backup","copilot-studio-purview-information-protection-labelled-files"]
controls:
  - governs: "Retention policies for SharePoint and OneDrive"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy; New-RetentionComplianceRule"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
  - governs: "Archiving files by last access date (SharePoint Advanced Management)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-SPOFileArchivePolicy -Name <n> -PolicyType <t> -LastAccessDateCriteria <days> -IsWhatIfMode; Set-SPOFileArchivePolicy -State Active"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy"
    note: "Preview. Archives rather than deletes; needs SharePoint Advanced Management."
  - governs: "Last-accessed start option in the retention policy wizard"
    scope: "tenant"
    ui: null
    api: null
    note: "Not in Learn's retention guidance at review time."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 41
  unconfirmed: 7
  contradicted: 8
  attempts: 1
---

## What's changing

Purview retention policies and labels currently start the retention clock from one of four points: when content was created, when it was last modified (SharePoint, OneDrive and Microsoft 365 Groups files only), when it was labelled, or when an event occurs. This roadmap item adds a fifth: **when the item was last accessed by a user**, for files in SharePoint and OneDrive.

The item is tagged by Microsoft as part of the Copilot Control System, which signals the intent: Copilot and agents surface content that nobody has opened for years but that is still technically current because nobody modified it either. Retaining or deleting based on last human access targets exactly that content. Public preview is listed for January 2027 and General Availability for February 2027, dates that have moved several times since the item was created in December 2024.

Microsoft's related SharePoint Advanced Management inactive files policy (archiving, not deletion) documents how the **last access date** is recorded: it reflects human access only, not AI agents, applications, scripts or system access; updates can take up to 30 days to appear; and access before July 2025 may not have been captured. Expect the Purview option to carry similar caveats when published.

## Why it matters

Most oversharing remediation programmes for Copilot stall at the same point: the organisation can find stale, broadly shared content but has no defensible rule for removing it. "Not modified in three years" misses documents people still read; "not accessed in three years" is the rule records managers actually want. Having it in Purview retention, with disposition review and audit, makes stale-content clean-up a compliance process rather than a one-off script.

The risk is in the other direction: a deletion policy keyed to a metric that was only recorded from mid-2025 and that lags by up to 30 days can delete something a person read last week. Simulation and disposition review are not optional here.

## Risk assessment

**Data exposure**
- Positive: reduces the pool of forgotten content that Copilot, agents and search can surface.

**Security & identity**
- None new. Retention administrators already hold privileged compliance roles; include them in access reviews.

**Autonomy & actions**
- Automated deletion at the end of a retention period is the action. Use retain-then-delete with disposition review for high-value libraries.

**Change & support**
- Last access date excludes agent and application access, so files only read by automations will look inactive.
- Access history before July 2025 is incomplete; a long inactivity threshold measured from a recent baseline is safer.
- Policy start-date semantics (when the clock starts for existing files) must be read carefully when the Learn article is published.

## Cost and licensing

- No additional licence beyond Purview Data Lifecycle Management entitlements already required for retention (Microsoft 365 E3 for basic retention; E5 or Purview Suite for adaptive scopes, disposition review and other advanced features).
- Indirect: records management time for simulation, scoping and disposition review.
- Related storage savings if combined with Microsoft 365 Archive (pay-as-you-go) rather than deletion.

## Scope

- Files in SharePoint sites and OneDrive accounts. Not stated for Teams, Exchange or Microsoft 365 Groups mailboxes.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: Compliance Administrator or Records Management roles in the Purview portal.

## Governance guidance

**Before rollout**
- Decide which locations warrant last-accessed retention (collaboration sites, personal OneDrives) and which must keep creation- or event-based schedules (records, regulated content).
- Choose an inactivity threshold that falls entirely after July 2025 for critical content so the access history is complete.
- Confirm your Purview entitlement covers disposition review and adaptive scopes if you plan to use them.

**At rollout**
- Start with retain-only or retain-then-delete with disposition review; avoid delete-only policies in the first cycle.
- Scope with adaptive scopes or site includes rather than the whole SharePoint location.
- Communicate to site owners what "inactive" means and how to reactivate or exempt content.

**After rollout**
- Review disposition queues monthly and track how often reviewers rescue content; a high rescue rate means the threshold is too short.
- Compare with SharePoint Advanced Management inactive files reports for consistency.
- Revisit when Microsoft publishes the final semantics of the last-accessed trigger.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Retention policies for SharePoint and OneDrive</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy; New-RetentionComplianceRule</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Archiving files by last access date (SharePoint Advanced Management)</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Archives rather than deletes; needs SharePoint Advanced Management.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SPOFileArchivePolicy -Name &lt;n&gt; -PolicyType &lt;t&gt; -LastAccessDateCriteria &lt;days&gt; -IsWhatIfMode; Set-SPOFileArchivePolicy -State Active</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Last-accessed start option in the retention policy wizard</strong><br><small>Tenant</small><br><small class="controls__note">Not in Learn's retention guidance at review time.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Today's retention start options are listed under [retention policies and labels](https://learn.microsoft.com/purview/retention#retention-policies-and-retention-labels); the last-accessed trigger is the new element and its cmdlet parameter is not yet documented. The archive policy is a different product and bills storage at archive rates, as described in [manage inactive files](https://learn.microsoft.com/microsoft-365/archive/manage-inactive-files). The retention cmdlets index is at [retention cmdlets](https://learn.microsoft.com/purview/retention-cmdlets).

## Open questions

- Exact definition of "accessed" in the Purview implementation and whether it matches the SharePoint Advanced Management last access date.
- How the clock is set for files whose last access predates the recording boundary.
- Whether the option will be available for retention labels as well as policies at preview.

<!-- rationale
risk: Medium. A deletion trigger based on an incomplete, lagging metric can remove content people still read; the feature itself reduces oversharing exposure.
cost: None. Existing Purview entitlements.
impact: Medium. Site owners and users whose content is disposed of notice; compliance teams gain a new tool.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: targetDate; What's changing / record: The roadmap targets General Availability for February CY2027. | Found: "targetDate": "February CY2027" | Fix: Keep the roadmap target, but add the more specific supplied notice MC999442: Worldwide GA is planned to begin late February 2027 and complete by late March 2027. Cite https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC999442.
- [supported, minor] front matter: previewDate; What's changing / record: The roadmap lists public preview for January CY2027. | Found: "previewDate": "January CY2027" | Fix: Keep the roadmap target, but add MC999442's rollout window: preview is planned to begin mid-January 2027 and complete by late February 2027. Attribute the window to Microsoft's notice rather than presenting January as the whole rollout.
- [unsupported, major] What's changing / behaviour: The release schedule has moved several times since the item was created. | Found: Searched: "472030" retention roadmap timeline last accessed. Read the supplied roadmap and MC999442; they establish a revised schedule but not several successive revisions. | Fix: Replace 'dates that have moved several times' with 'a timeline revised in Microsoft's October 13, 2026 update to MC999442'.
- [unsupported, blocker] front matter: licensing.model; Cost and licensing; rationale: cost / licensing: The last-accessed feature is included in existing Purview entitlements with no additional licence required. | Found: Searched: Purview retention last accessed SharePoint OneDrive retention policies licensing; "Purview" "last accessed" "retention" licensing labels policies. Read retention, retention-settings and the Purview service description; none states this feature's entitlement. | Fix: Set licensing.model to 'unknown' and say 'Feature-specific licensing for last-accessed retention is not yet published.' Present the documented general retention entitlements separately, without asserting they establish this option's licence.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Microsoft 365 E3 includes rights for basic retention policies. | Found: For organization-wide, location-wide, or include/exclude retention policies, the following licenses provide user rights:
- Microsoft 365 E5/A5/G5/E3/A3/G3, Business Premium | Fix: Cite the Microsoft Purview service description. Describe E3 as one qualifying plan, not a universal minimum: the same section lists Business Premium, Office 365 E3 and SharePoint Plan 2 rights. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [supported, minor] front matter: licensing.notes; Cost and licensing; Governance guidance / licensing: Microsoft 365 E5 or Microsoft Purview Suite provides rights for adaptive retention policy scopes. | Found: If the retention policy uses an adaptive policy scope, then one of the following licenses is required to provide user rights:
- Microsoft 365 E5/A5/G5
- Microsoft Purview Suite/EDU/GOV/FLW | Fix: Add the Microsoft Purview service description to sources and cite its adaptive-scope licensing section; qualify this as general retention licensing. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [supported, minor] Cost and licensing; Governance guidance / licensing: Microsoft 365 E5 or Microsoft Purview Suite provides rights for disposition review. | Found: Trigger a disposition review at the end of the retention period
During the retention period mark items as a record or a regulatory record
After the retention period, automatically change the retention label,
Require these specific licenses to provide users rights:
- Microsoft 365 E5/A5/G5 | Fix: Cite the service description's 'Licensing for retention labels' section, which lists Microsoft 365 E5/A5/G5 and Microsoft Purview Suite among qualifying licences. Do not treat that general entitlement as confirmation of last-accessed disposition support. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: A cost rating of none is justified for this feature. | Found: cost: "none"; licensing.notes: "Check the licensing guidance for the specific option when published."; rationale: "Cost: None. Existing Purview entitlements." | Fix: Change cost to 'low' for the known administrative effort and state in the rationale that feature-specific licensing is not yet published. The standard permits 'none' only with an explicit inclusion statement, not an assumption from general retention licensing.
- [contradicted, blocker] controls[1].api; Governance controls / command: The displayed New-SPOFileArchivePolicy command followed by Set-SPOFileArchivePolicy -State Active configures and activates an archive policy. | Found: [-IsWhatIfMode <Boolean>]
Specifies the number of months since a file was last accessed before it becomes eligible for archiving. | Fix: Supply '-IsWhatIfMode $true', not a bare Boolean parameter, and rename '<days>' to '<months>'. Activation must include '-PolicyId <guid>': 'Set-SPOFileArchivePolicy -PolicyId <guid> -State Active', as verified at https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spofilearchivepolicy. For SelectedSites, add at least one included site before activation. State that Active plus simulation enabled evaluates without archiving. | Source: https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy
- [unsupported, blocker] Why it matters; rationale: risk / applicability: Purview last-accessed deletion uses an access metric that lags by up to 30 days. | Found: Searched: Purview "last accessed" "30 days" retention. Opened retention, retention-settings and manage-inactive-files. The 30-day statement covers the archive policy; no read source assigns it to Purview last-accessed retention. | Fix: State the 30-day lag only for the related SharePoint Advanced Management archive preview. For Purview, say the access-update latency is not yet published; frame possible similar risks conditionally throughout the body and rationale.
- [unsupported, blocker] Risk assessment: Change & support; Governance guidance / applicability: Purview last-accessed retention has the archive policy's July 2025 access-history boundary. | Found: Searched: Purview retention last accessed SharePoint OneDrive retention policies licensing; Purview "last accessed" "30 days" retention. Opened retention, retention-settings and manage-inactive-files; the July 2025 boundary is documented for archiving, not Purview. | Fix: Do not prescribe a July 2025 Purview threshold as a documented requirement. Keep that boundary in the explicitly separate archive-preview discussion and ask administrators to verify Purview's own access-history semantics when published.
- [contradicted, blocker] Why it matters / date: The last-access metric was only recorded from mid-2025. | Found: July 2025 is a data-quality boundary, not an archiving restriction. Older LADs still exist, and policies use them. | Fix: Replace 'only recorded from mid-2025' with 'the related archive preview warns that some human access before July 2025 might not have been captured'. Do not imply that older recorded dates do not exist or that Purview shares this boundary. | Source: https://learn.microsoft.com/microsoft-365/archive/manage-inactive-files
- [contradicted, blocker] Governance guidance: Before rollout / behaviour: Choosing an inactivity threshold entirely after July 2025 makes the access history complete. | Found: This provides a more complete observation period; it doesn't exclude files with older LADs. Review simulation results with site owners—simulation doesn't recover missing access history. | Fix: For the related archive preview, say this provides a more complete observation period, not complete history or exclusion of old LADs; require review of older-date candidates. Remove the unconditional application of this advice to Purview until its semantics are documented. | Source: https://learn.microsoft.com/microsoft-365/archive/manage-inactive-files
- [unsupported, blocker] summary; What's changing; Governance guidance: At rollout / applicability: Administrators can use the new last-accessed trigger with retain-only or retain-then-delete configurations. | Found: Searched: Purview last accessed retention policies simulation retain only disposition review. Read retention-settings, retention and MC999442. General retention supports those modes, but the supplied feature notice describes last-accessed delete policies only. | Fix: Describe the announced release as last-accessed deletion for Office files. Remove the instruction to start with last-accessed retain-only or retain-then-delete; list those modes as unconfirmed rather than assuming general retention capabilities apply.
- [contradicted, blocker] Why it matters; Risk assessment: Autonomy & actions; Governance guidance: At rollout / applicability: A retention policy can be configured for retain-then-delete with disposition review. | Found: | Disposition review | No | Yes | | Fix: State that disposition review is a retention-label capability, not a retention-policy capability. Remove the unconditional instruction to combine it with the new last-accessed policy; compatibility of last-accessed deletion with disposition review needs feature-specific confirmation. | Source: https://learn.microsoft.com/purview/retention
- [unsupported, blocker] Why it matters; Cost and licensing; Governance guidance / applicability: Simulation is an available safety control for the new Purview last-accessed retention feature. | Found: Searched: Purview last accessed retention policies simulation retain only disposition review. Read create-retention-policies, retention-settings, MC999442 and manage-inactive-files. Simulation is documented for the separate archive preview, not this Purview option. | Fix: Replace the instruction that simulation is mandatory with a recommendation to verify whether Purview provides an evaluation mode before enabling deletion. Attribute the documented simulation workflow only to SharePoint Advanced Management archiving.
- [contradicted, blocker] Scope; summary; What's changing / availability: The announced last-accessed release covers files in SharePoint and OneDrive without a file-type restriction. | Found: In this release, users will be able to set up delete policies based on Last Accessed Date of Office file types. Non-office file types are not supported in this release. | Fix: Explicitly restrict the announced release to Office file types in SharePoint and OneDrive, and state that non-Office files are unsupported in this release. Add MC999442 as a message-center source using its supplied URL.
- [supported, minor] Scope; Risk assessment: Security & identity / role: Compliance Administrator is a documented role group for managing retention policies and labels. | Found: To grant permissions for this limited administration, we recommend that you add users to the Compliance Administrator admin role group. | Fix: Cite the permissions section of Get started with data lifecycle management and call Compliance Administrator a role group. Clarify that SharePoint retention policy configuration requires an unrestricted administrator. | Source: https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management
- [supported, minor] Scope / role: The Records Management role group provides permissions for records-management retention and disposition administration. | Found: we recommend that you add users to the Records Management admin role group. This role group grants permissions for all features related to records management | Fix: Cite Get started with records management, name the Records Management role group accurately, and distinguish its retention-label/disposition permissions from general policy administration. | Source: https://learn.microsoft.com/purview/get-started-with-records-management#licensing-and-billing-requirements
- [supported, minor] Cost and licensing; Governance controls / cost: Microsoft 365 Archive is a separate pay-as-you-go storage option that can reduce storage charges compared with active SharePoint storage. | Found: Storage consumption is charged at a per-GB monthly rate. This meter is charged only when archived storage plus active storage in SharePoint exceeds the included or licensed allocated SharePoint storage capacity limit of the tenant. | Fix: Cite the Archive pricing page and say savings concern storage charges when applicable, not reduced total stored data or site quota usage. Keep Archive billing separate from the unconfirmed licensing for last-accessed retention. | Source: https://learn.microsoft.com/microsoft-365/archive/archive-pricing?view=o365-worldwide
- [contradicted, blocker] Open questions / record: Whether the last-accessed option will support retention labels as well as policies is still unknown. | Found: Enable admins to apply retention policy or retention label in OneDrive and SharePoint for files that have not been accessed by anyone in the organization after a period of time. | Fix: Remove this open question and report Microsoft's announced policy-and-label support, limited to last-accessed deletion of Office file types. Retain open questions about detailed semantics and advanced combinations that the notice does not establish.
- [contradicted, minor] Governance guidance; Governance controls / consistency: The controls table covers every control the governance checklist asks administrators to use. | Found: 'Scope with adaptive scopes or site includes'; 'Review disposition queues monthly'. The table lists retention policy creation, archive policy creation and the undocumented last-accessed start option, but no adaptive-scope or disposition-review control. | Fix: After correcting the unsupported feature-specific recommendations, add rows for adaptive-scope management and disposition review if the checklist still recommends them. Mark them as general controls whose applicability to advanced last-accessed scenarios is unconfirmed.
- [unsupported, blocker] Risk assessment: Change & support / applicability: The Purview last-access date excludes agent and application access, making files read only by automations appear inactive. | Found: Searched: Purview "last accessed" "30 days" retention; Purview retention "last accessed" "When items". Read retention, retention-settings, manage-inactive-files and MC999442. Explicit exclusion of automated access is documented for archiving, not Purview. | Fix: Attribute the explicit agent/application/script exclusion to the separate archive preview. Say the roadmap describes user access, but Purview's precise access signals and treatment of automations remain to be documented.
-->
