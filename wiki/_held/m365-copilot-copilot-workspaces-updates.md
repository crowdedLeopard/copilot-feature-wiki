---
title: "Microsoft 365 Copilot: Copilot Workspaces updates for shared team work"
slug: "m365-copilot-copilot-workspaces-updates"
roadmapId: 579889
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Notebooks becomes Copilot Workspaces, with Work IQ workspace suggestions and team editing. Existing notebooks convert automatically; the Learn-documented Cloud Policy setting for notebooks is the control to check."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mobile","Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's requirements page for Copilot Notebooks says users need the Microsoft Copilot or Copilot Chat licence; another Microsoft page says a Microsoft 365 Copilot licence. Nothing specific to Workspaces is published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["m365-copilot","copilot-notebooks","work-iq","cloud-policy","sharing"]
sources:
  - title: "Microsoft 365 Roadmap 579889"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579889"
    kind: "roadmap"
  - title: "Copilot Notebooks is now Copilot Workspaces"
    url: "https://support.microsoft.com/en-us/microsoft-365-copilot/copilot-notebooks-to-copilot-workspaces"
    kind: "docs"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks storage"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-storage"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/deployoffice/admincenter/overview-cloud-policy"
    kind: "learn"
videos: []
related: ["m365-copilot-audio-overview-updates-in-copilot-notebooks","work-iq","cloud-policy"]
controls:
  - governs: "Whether users can create and view Copilot Pages and Copilot Notebooks"
    scope: "other"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "UI: group or tenant. Graph: tenant-level policies only; ensure the setting is not configured in any group-level policy in the Microsoft 365 Apps admin center, or monitoring, snapshots, remediation and applyOnce fail."
  - governs: "Separate switch for Work IQ workspace suggestions or Copilot Workspaces team features"
    scope: "tenant"
    ui: null
    api: null
    note: "No such control is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-22"
    note: "New briefing: Copilot Notebooks becomes Copilot Workspaces, with the Cloud Policy setting documented for notebooks as the control to check."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: Graph route limited to tenant-level policies, control scope changed, simultaneous-rollout claim narrowed, storage guidance discrepancy noted, two checklist bullets removed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 68
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "4d274c26dba96720310319071cada934"
---

## What's changing

Copilot Notebooks is being renamed Copilot Workspaces, and the roadmap item adds team features to it. Microsoft's support article says a workspace is a shared place where a team keeps project information and files together and works with Copilot on an ongoing workstream, and that existing notebooks automatically become workspaces.

The roadmap item describes two updates. Work IQ can suggest relevant workspaces based on current workstreams, and, once people are in a workspace, they can work together on shared documents while Copilot surfaces what changed, what remains unresolved and which actions need attention. Microsoft's support article describes team collaboration across documents at the same time. It does not describe how suggestions are chosen or what Copilot reads to produce the summaries, so those parts rest on the roadmap text.

Existing content stays in place. The support article says that if a notebook was already shared, that sharing continues, and otherwise the workspace remains private. It also separates Projects (for your own work) from Workspaces (for group work), and says the collaborative experiences will roll out to Copilot Workspaces in OneNote over time.

The roadmap record gives status In development, a preview target of November CY2026 and a target of December CY2026, for General Availability and Preview, on Desktop, Mobile and Web, in Worldwide (Standard Multi-Tenant). These are Microsoft's targets. The support article says the rename starts to roll out in phases from late October 2026, so the two sources differ on timing and both are given here.

## Why it matters

Anything users already keep in Copilot Notebooks is converted, so the change reaches existing content whether or not an administrator acts. Microsoft's support article says no immediate action is required and that core Microsoft 365 security, compliance and governance controls continue to apply, but it does not state what the new team features do by default. Microsoft has not stated the default state for the roadmap's new features, so plan on the rename arriving and treat the new collaboration features as something to confirm.

The practical question is who can create, share and see workspaces, and the one control Learn documents for this is the Cloud Policy setting for Copilot Pages and Copilot Notebooks. Check it, and what it does and does not cover, before users begin inviting each other.

## Risk assessment

**Data exposure**
- Workspaces are for group work, so a notebook that was private becomes something its owner can invite others to; the support article says existing sharing continues and unshared workspaces stay private. Review which notebooks are already shared before the rename reaches your users.
- Learn documents that Copilot Pages and Copilot Notebooks live in a user-owned SharePoint Embedded container shared with Loop My workspace, with storage counted against the SharePoint quota. Microsoft's storage overview differs: Pages and Notebooks are stored in OneDrive for Business, and only those created before November 2025 remain in the user-owned SharePoint Embedded container. How Workspaces stores shared content is not described.

**Security & identity**
- The roadmap says Work IQ suggests workspaces based on current workstreams. What data feeds the suggestion is not described, so confirm it before assuming it respects the same boundaries as Copilot Chat.
- Real-time editing needs WebSocket traffic to *.svc.ms and *.office.com according to Learn's notebook requirements; a blocked connection is a support cause, not a security control.

**Autonomy & actions**
- The roadmap says Copilot surfaces which actions need attention. It describes no action Copilot takes on its own, so no autonomous behaviour is documented.

**Change & support**
- Users will see a renamed product, and the roadmap plans new team features; links and bookmarks should keep working according to the support article, which says a redirect is used where a web address changes.
- Disabling the Cloud Policy setting hides the Notebooks module in the Microsoft Copilot app and breaks sharing links to notebooks; see the controls notes before using it.

## Cost and licensing

No licence specific to Copilot Workspaces is published at the time of writing (November 2026). Learn's requirements page for Copilot Notebooks says users need the Microsoft Copilot or Copilot Chat licence, while the Microsoft Graph page for the Copilot Pages and Notebooks setting says Copilot Notebooks also require a Microsoft 365 Copilot licence. Those two pages differ, so confirm which applies to your users before budgeting. Since Workspaces is the renamed Notebooks, expect the same licence question to apply, but Microsoft has not said so.

Copilot Pages and Copilot Notebooks storage counts toward the organisation's overall SharePoint quota, according to Learn. The storage overview differs: current Pages and Notebooks count against the user's OneDrive storage limit; only legacy items created before November 2025 count against the organisation's SharePoint quota. No meter, credit rate or price for the new workspace features is published at the time of writing. The other cost is administrator and support time for communicating the rename and the sharing behaviour.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) only, on Desktop, Mobile and Web, with both General Availability and Preview phases. It lists no government cloud; that is a record fact, not a statement that the feature is unavailable there.

Users with Copilot Notebooks are in scope for the rename: the support article says existing notebooks automatically become workspaces. The support article says the new experiences are in the Microsoft Copilot app and will reach Copilot Workspaces in OneNote over time, and that availability can vary by organisation rollout schedule. Learn's requirements page for Notebooks says users need an Exchange Online mailbox for full functionality including @mentions.

## Governance guidance

### Before rollout
- Read Message center for the Copilot Workspaces rollout notice for your tenant, since the support article points administrators there for rollout details.
- Inventory which users already use Copilot Notebooks and which notebooks are shared, so you know what becomes a shared workspace.
- Check whether the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks is configured for any group, in the Microsoft 365 Apps admin center.
- Confirm which licence your Notebooks users hold, because two Microsoft pages word the requirement differently.

### At rollout
- Tell users that notebooks keep their content and sharing when renamed, and that Workspaces are for group work while Projects are for their own work.
- Decide before the new team features appear whether you will disable the Cloud Policy setting for any group, knowing it also hides the Notebooks module.

### After rollout
- Check that existing notebook links and sharing still open as the support article says they should.
- Watch Message center and the Learn pages for Workspaces-specific controls, since none are documented yet.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks</strong><br><small class="controls__note">UI: group or tenant. Graph: tenant-level policies only; ensure the setting is not configured in any group-level policy in the Microsoft 365 Apps admin center, or monitoring, snapshots, remediation and applyOnce fail.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for Work IQ workspace suggestions or Copilot Workspaces team features</strong><br><small>Tenant</small><br><small class="controls__note">No such control is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Learn-documented control is named for Copilot Pages and Copilot Notebooks. Microsoft's support article says Notebooks becomes Workspaces and that core security, compliance and governance controls continue to apply, but no Learn page says whether this setting carries the Workspaces name or governs the new team features.

The policy changes take up to 90 minutes to show where policy configurations already exist, and up to 24 hours where none did. When creation is disabled, existing items are not deleted, the Notebooks module is hidden in the Microsoft Copilot app and sharing links to Notebooks do not work. For the Graph route, Tenant Configuration Management supports this setting only in tenant-level policies in the Microsoft 365 Apps admin center and is a preview API. Before using it, ensure the setting is not configured in any group-level policy in that admin center; if it is, monitoring, snapshots, remediation and applyOnce fail. For the baseline, resourceType is microsoft.copilot.copilotpagesnotebooks, resourceVersion is 1 and properties.value is "0" to disable or "1" to enable. AI Administrator is the least-privileged role for the signed-in user for remediation and applyOnce.

## Open questions

- Does the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks govern Copilot Workspaces and its team features, and will it be renamed? Watch the Learn admin policies page.
- What does Work IQ read to suggest workspaces, and can an administrator turn the suggestions off separately?
- What is the default state of the new collaboration and summary features, and does any licence beyond the Notebooks licence apply? Watch Message center.
- When will the roadmap target of December CY2026 and the support article's late October 2026 rollout be reconciled for your tenant?

<!-- rationale
risk: Medium. Existing notebooks become workspaces that can be shared with a team, and the roadmap says Copilot will summarise changes across shared documents; Microsoft documents no separate Workspaces controls.
cost: Low. The sources show admin time and storage, with differing Microsoft guidance on the applicable quota; the Notebooks licence is the Microsoft Copilot or Copilot Chat licence, and nothing specific to Workspaces is published.
impact: Medium. Users of Copilot Notebooks see them renamed and gain team features; people who do not use notebooks are not named as affected.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; summary; Why it matters / consistency: The briefing's arrival state is unknown even though it says existing notebooks convert automatically without administrator action. | Found: Briefing: defaultState: unknown. Microsoft: 'Your existing notebooks automatically become workspaces.' 'No immediate action is required to keep existing notebooks and content available.' | Fix: Set defaultState to 'on' for the automatic notebook-to-workspace conversion described throughout this briefing. Keep the narrower sentence 'Microsoft has not stated the default state for the roadmap's new features' and distinguish it from the automatic rename. SCHEMA defines 'on' to include automatic rollout without admin action. | Source: https://support.microsoft.com/en-us/microsoft-365-copilot/copilot-notebooks-to-copilot-workspaces
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table and prose / command: POST /beta/admin/configurationManagement/configurationMonitors can apply the tenant-level Copilot Pages and Notebooks control. | Found: Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency to detect configuration drift in monitorOnly mode, or applies a desired-state baseline once in applyOnce mode. | Fix: Keep the call. Append to controls[0].note and its rendered table note: 'Set mode to applyOnce; in baseline.resources use resourceType microsoft.copilot.copilotpagesnotebooks, resourceVersion 1, and properties.value "0" to disable or "1" to enable.' The endpoint defaults to monitorOnly; the resource and values are documented at https://learn.microsoft.com/graph/utcm-copilot-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits a medium-risk automatic change with rollout already starting and the December target imminent. | Found: action: prepare; risk: medium; targetDate: December CY2026. 'Existing notebooks automatically become workspaces.' 'Decide before the new team features appear whether you will disable the Cloud Policy setting for any group.' | Fix: Set action to 'act-now': at the November 22, 2026 run the December target is within 60 days, the briefing rates risk medium, the conversion is automatic, and its checklist identifies a pre-arrival policy decision. Keep the statement that Microsoft requires no immediate action to preserve existing content.
-->
