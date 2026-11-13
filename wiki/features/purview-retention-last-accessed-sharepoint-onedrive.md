---
title: "Microsoft Purview: retention based on last accessed date for SharePoint and OneDrive files"
slug: "purview-retention-last-accessed-sharepoint-onedrive"
roadmapId: 472030
desk: "security-compliance"
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
videos: []
related: ["m365-teams-channel-backup","copilot-studio-purview-information-protection-labelled-files"]
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Microsoft Purview portal > **Solutions** > **Data Lifecycle Management** > **Policies** > **Retention policies** > retention period start option (last accessed, when available).
- Microsoft Purview portal > **Records Management** > retention labels with the same start option; disposition review.
- SharePoint admin center / PowerShell: `New-SPOFileArchivePolicy -LastAccessDateCriteria` for archive (not deletion) policies in SharePoint Advanced Management.
- Microsoft 365 audit log: `FileArchived` and retention disposition events.

## Open questions

- Exact definition of "accessed" in the Purview implementation and whether it matches the SharePoint Advanced Management last access date.
- How the clock is set for files whose last access predates the recording boundary.
- Whether the option will be available for retention labels as well as policies at preview.

<!-- rationale
risk: Medium. A deletion trigger based on an incomplete, lagging metric can remove content people still read; the feature itself reduces oversharing exposure.
cost: None. Existing Purview entitlements.
impact: Medium. Site owners and users whose content is disposed of notice; compliance teams gain a new tool.
-->
