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
