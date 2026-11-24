---
title: "Planner: AI-generated status reports in Planner Agent"
slug: "planner-ai-generated-status-reports-in-planner-agent"
roadmapId: 567886
topic: "m365-copilot"
products: ["Planner","Microsoft Copilot (Microsoft 365)"]
summary: "Planner Agent in Microsoft 365 Copilot can draft status reports from plan data for users with a Copilot licence. Microsoft's notice MC1506735 says no action is required; confirm licences and availability settings."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: "August CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1506735 says a Microsoft 365 Copilot licence is required only to generate reports; viewing or editing them needs none. The notice names no separate price or meter for status reports."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["planner","m365-copilot","agents","m365-admin-center","admin-controls","ai"]
sources:
  - title: "Microsoft 365 Roadmap 567886"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567886"
    kind: "roadmap"
  - title: "MC1506735: Microsoft Planner: AI-generated status reports in Planner Agent"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1506735"
    kind: "message-center"
  - title: "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner"
    url: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    kind: "learn"
  - title: "Understand how disabling Loop affects Planner"
    url: "https://learn.microsoft.com/planner/understand-how-disabling-loop-affects-planner"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks permissions"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-permission"
    kind: "learn"
  - title: "Audit logs for Copilot and AI applications"
    url: "https://learn.microsoft.com/purview/audit-copilot"
    kind: "learn"
videos: []
related: ["planner-planner-agent-in-copilot-v2-improvements","planner-save-ai-generated-filters-in-planner-agent-chat"]
controls:
  - governs: "Tenant-wide availability of Planner Agent (block)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General agent control; the notice says the agent can be blocked tenant-wide. Learn does not name Planner Agent. Graph call is beta, needs a Microsoft Agent 365 licence and CopilotPackages.ReadWrite.All."
  - governs: "Who can use Planner Agent in Planner, all users or one security group"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId <security group id>"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Documented for Planner Agent in Planner, including status reporting; Microsoft has not confirmed it governs the new AI-generated reports. Changes can take up to 1 hour."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: Microsoft's notice MC1506735 puts general availability from late October to mid-November 2026, with no act-by date."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the Block path in the Microsoft 365 admin center to include Block agent and Save; removed two checklist items with no matching controls row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the auditing open question: Copilot user interactions are logged in Microsoft Purview Audit when auditing is enabled; a report-specific event remains unconfirmed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 72 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 88
  confirmed: 88
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6700d2a1d66911eb2c6737baae1a6d37"
---

## What's changing

Planner Agent can now draft a status report from a plan's data. A user asks Planner Agent for a report and it produces a narrative covering overall status, progress, risks and next steps, which the user can customise by audience, tone, length, reporting period and sections before reviewing and refining it. Microsoft's notice MC1506735 adds that reports draw on tasks, owners, due dates, status, buckets and recent activity, and can be requested through Planner Agent in Copilot or the Reports tab in Planner.

The notice says reports are generated only from Planner content the user already has permission to access, and that existing Planner sharing permissions, Copilot policies and agent controls continue to apply. Generating a report requires a plan shared with a Microsoft 365 Group that has enough task data. A report appears in the Microsoft 365 Copilot conversation; the notice says users can export it to a Copilot Page and share it by link, or export it to Word or PDF. The source plan and its tasks are not edited, and a user can attach a file to use as a template.

Microsoft Learn describes the storage differently: its page on disabling Loop says Planner Agent status reports open in Loop and are stored in the plan's SharePoint folder. The notice and Learn page are not reconciled, so treat where a report is stored as something to confirm.

The roadmap item is Rolling out, with a General Availability target of October CY2026 and a preview date of August CY2026. The notice says the public preview rollout has completed and that general availability for Worldwide begins in late October 2026 and is expected to finish by mid-November 2026, with Microsoft's end date 2026-12-15. It sets no act-by date. The roadmap lists Desktop and Web only.

## Why it matters

This arrives without an administrator choosing it. Per the notice, organisations with Planner agent enabled in the Microsoft 365 Copilot app get the capability for users who hold a Microsoft 365 Copilot licence, and no action is required. Rollout is due to finish by mid-November 2026, so it is probably already reaching users.

The effect for a service owner is new, shareable output rather than new access. Plan data that previously lived in Planner can now be summarised into a Copilot Page, Word file or PDF and passed on by link or as a file, outside the plan's own membership. Expect questions about what a report may contain, who it can be shared with and why it fails to generate for a plan that has few tasks or no Microsoft 365 Group.

## Risk assessment

**Data exposure**

- The notice says reports use only plan content the requesting user can already access and do not give the agent access to other plans. The exposure is therefore in redistribution: exporting to a Copilot Page shared by link, or to Word or PDF, creates copies of plan information that are separate from the plan's permissions.
- The notice says an attached template file is used for the request as well as the plan data. Brief users not to attach files that hold more sensitive content than the report should.
- Microsoft Learn says status reports are stored in the plan's SharePoint folder and open in Loop, while the notice mentions Copilot Pages and Word. Confirm where copies land before writing retention or sharing guidance.

**Security & identity**

- Access follows the requesting user's existing Planner permissions, per the notice. Microsoft has not said whether the report is created under any identity other than the user's.

**Autonomy & actions**

- The notice describes drafting only: the user reviews and refines the generated content, and the source plan and its tasks are not edited. Nothing in the notice describes the agent sending a report on its own.
- A report is AI-generated narrative about risks and progress. Accuracy depends on how current the plan's tasks are, so a stale plan can produce a confident but wrong stakeholder update.

**Change & support**

- Loop must be enabled for the tenant. Microsoft Learn says that when Loop is disabled the Reports tab stays visible but reports fail to open or generate, so expect support calls that look like a fault.
- Report generation needs a plan shared with a Microsoft 365 Group and enough task data, per the notice. Plans without those will not produce a report.
- Licences matter at the point of generation. A user without a Microsoft 365 Copilot licence can view or edit a shared report but cannot generate one.

## Cost and licensing

Microsoft's notice MC1506735 says users with an active Microsoft 365 Copilot licence who use Planner Agent are affected, and that users who view or edit reports need no Copilot licence: a licence is required only to generate reports. Microsoft Learn's page on Planner Agent access lists a Microsoft Copilot licence as the licence users must have for Planner Agent in Planner.

Neither source names a separate price, meter or Copilot Credits rate for status reports. The cost the sources show is indirect: admin time to confirm licences and availability, user communications, training and support for plans that cannot generate a report. Microsoft Learn's Loop page says Planner checks for Loop access as part of a user's Microsoft 365 Copilot licence, so Loop being enabled for the tenant is a prerequisite rather than a charge.

## Scope

**Who:** per the notice, organisations that have Planner agent enabled as part of the Microsoft 365 Copilot app, and within them users with an active Microsoft 365 Copilot licence who use Planner Agent. Viewing or editing a report needs no Copilot licence.

**Where:** the roadmap lists the Worldwide (Standard Multi-Tenant) cloud only, on Desktop and Web. Other clouds are not listed on the item. Reports are reached through Planner Agent in Copilot or the Reports tab in Planner.

**Prerequisites:** a plan shared with a Microsoft 365 Group that contains enough task data, per the notice, and Loop enabled for the tenant, per Microsoft Learn.

**Rollout:** the notice gives public preview as completed and general availability beginning in late October 2026, expected to complete by mid-November 2026. The roadmap target is October CY2026.

## Governance guidance

### Before rollout

- Decide whether Planner Agent should stay available to everyone, using the Block action in the Microsoft 365 admin center or the Planner PowerShell setting (first two controls rows).
- Tell support teams and users that reports are reached from Planner Agent in Copilot or the Reports tab in Planner, as the notice recommends.

### At rollout

- Review Planner Agent and Copilot agent availability settings in the Microsoft 365 admin center, which the notice recommends.
- Brief users that exporting a report to a Copilot Page, Word or PDF creates a copy outside the plan, and that the report should be reviewed before it is shared.
- Watch Message center for updates to MC1506735 before its end date of 2026-12-15.

### After rollout

- Ask support teams which plans fail to generate a report and check them against the Microsoft 365 Group and task-data prerequisites in the notice.
- Sample a few exported reports and compare them with the plans to judge whether the AI narrative is accurate enough for stakeholder use.
- Update internal training and change management material, as the notice recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide availability of Planner Agent (block)</strong><br><small>Tenant</small><br><small class="controls__note">General agent control; the notice says the agent can be blocked tenant-wide. Learn does not name Planner Agent. Graph call is beta, needs a Microsoft Agent 365 licence and CopilotPackages.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can use Planner Agent in Planner, all users or one security group</strong><br><small>Tenant</small><br><small class="controls__note">Documented for Planner Agent in Planner, including status reporting; Microsoft has not confirmed it governs the new AI-generated reports. Changes can take up to 1 hour.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId &lt;security group id&gt;</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The notice says the agent can be blocked tenant-wide and that existing Planner sharing permissions, Copilot policies and agent controls continue to apply. Microsoft Learn's agent actions page describes Block as restricting access to an agent across the organisation.

Neither Learn page read names Planner Agent in the Copilot app for the Block action or the Graph call, so confirm the entry appears in your tenant. The Graph call is in beta, unsupported for production use, and needs a Microsoft Agent 365 licence. The Planner PowerShell setting is documented for Planner Agent in Planner, and its page covers task execution and status reporting; Microsoft has not confirmed it governs the new AI-generated reports, and its own note points to the Microsoft 365 admin center for Planner Agent in Microsoft Copilot.

Disabling Loop is not a targeted control: Microsoft Learn describes it as stopping reports from opening or generating, and it affects other Planner and Loop features.

## Open questions

- Can status reports be turned off separately from Planner Agent, or is blocking the agent the only switch? Watch MC1506735 and the Planner Learn pages.
- Does `Set-PlannerConfiguration -AllowPlannerCopilot` govern AI-generated status reports in the Reports tab and in Copilot, or only the earlier Planner Agent experience?
- Where is an exported report stored, given that the notice names Copilot Pages, Word and PDF and Microsoft Learn names Loop and the plan's SharePoint folder?
- When auditing is enabled, Copilot user interactions are logged in Microsoft Purview Audit. Does status report generation have a distinct report-specific event?
- Is any price or Copilot Credits meter planned for status reports beyond the Microsoft 365 Copilot licence?

<!-- rationale
risk: Medium. The agent reads plan data users can already open and writes new report content to Copilot conversations, Copilot Pages or Word and PDF files, and Microsoft's notice says no admin action is needed for it to arrive.
cost: Low. Microsoft's notice says only users generating reports need a Microsoft 365 Copilot licence and names no separate price or meter, so the known cost is admin time, communications and training.
impact: Medium. Licensed Planner Agent users and the project managers who report on plans notice it first; people who only view or edit reports need no Copilot licence, per the notice.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Governance controls; Open questions / applicability: The correctly documented Planner control is presented with a caveat that applicability to the new AI-generated reports remains unconfirmed. | Found: restrict access to the Planner Agent experience for task execution and status reporting in both basic and premium plans ... For information on how to manage the Planner Agent in Microsoft Copilot, please see Manage agents in the Microsoft 365 admin center. | Fix: Replace the applicability caveat in controls[1].note and the matching prose with: 'Applies to Planner Agent task execution and status reporting in basic and premium plans in Planner. For Planner Agent in Microsoft Copilot, Microsoft directs administrators to the Microsoft 365 admin center.' Narrow the matching open question to whether this Planner-specific setting also governs reports requested in Microsoft Copilot. Source: https://learn.microsoft.com/planner/turn-off-planner-agent | Source: https://learn.microsoft.com/planner/turn-off-planner-agent
-->
