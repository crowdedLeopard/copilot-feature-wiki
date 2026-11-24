---
title: "Microsoft 365 Copilot: Planner Agent for planning and managing work"
slug: "m365-copilot-planner-agent-in-m365-copilot"
roadmapId: 516576
topic: "m365-copilot"
products: ["Planner","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists Planner Agent in Microsoft 365 Copilot as Launched. It is for Microsoft Copilot licensed users; Microsoft has not stated its default, so administrators should check whether they want it available."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "June CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn says users with Microsoft Copilot can use Planner Agent as a capability included with that licence, and its Planner Agent page lists a Microsoft Copilot licence as the requirement. No separate price is stated there."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["planner","m365-copilot","copilot-chat","agents","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap: Planner Agent in Microsoft 365 Copilot (516576)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=516576"
    kind: "roadmap"
  - title: "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner"
    url: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Prerequisites for making Planner changes in Windows PowerShell"
    url: "https://learn.microsoft.com/planner/prerequisites-for-powershell"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["planner-planner-agent-in-copilot-v2-improvements","m365-copilot-planner-capabilities-in-copilot-chat-m365-copilot","planner-planner-agent-chat-in-basic-plans","planner-capabilities-in-microsoft-cowork","agent-registry"]
controls:
  - governs: "Whether Planner Agent and Planner Agent chat are available in Planner, for everyone or one security group"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $false"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Global admin. The page scopes this to Planner Agent in Planner and points to the Microsoft 365 admin center for the agent in Microsoft Copilot. Group scoping uses -PlannerCopilotAllowedGroupId."
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "The Planner page points here for managing Planner Agent in Microsoft Copilot. The Package Management API needs a Microsoft Agent 365 licence and is beta."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-29T23:02:39"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 516576: Launched status, Microsoft Copilot licence requirement, and the two documented ways to restrict Planner Agent."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 46
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "74eb64559469d3d69ada660739b916ab"
---

## What's changing

Planner Agent in Microsoft 365 Copilot is an agent that helps users plan, organise and manage work in Planner. The roadmap item says it starts with core task and plan management features and that Microsoft will add more advanced project management capabilities over time.

Microsoft Learn describes the Planner Agent as automating plan creation and task execution for teams. The Learn pages read for this briefing describe the agent as it works in Planner; they do not describe the Microsoft Copilot experience this roadmap item covers in its own words, so treat the behaviour of the Copilot surface as the roadmap's description.

The roadmap record gives the status as Launched, with a preview date of March CY2026 and a target date of June CY2026. Its release phases are General Availability and Preview, the platform is Desktop and the cloud is Worldwide (Standard Multi-Tenant). The item's description, updated May 21, 2026, says it previously launched in Preview and that GA was expected in June.

## Why it matters

This is an agent that can create plans and carry out tasks, so it matters to whoever owns Planner and Copilot rollout. Microsoft has not stated whether it is on or off on arrival, so do not assume either; confirm in a test tenant before you tell users anything.

It also ties to licensing. Learn says Planner Agent comes with the Microsoft Copilot licence, so the people who can use it are the people you have already licensed for Copilot. Decide whether that group should have an agent that acts on plans, and decide who can switch it off.

## Risk assessment

**Data exposure**
- Planner Agent works on plan and task content. Learn says Planner Agent and its chat are built on Microsoft's approach to security, compliance and privacy; it does not publish a data-boundary statement specific to the Copilot surface.

**Security & identity**
- Access to Planner Agent in Planner follows a Microsoft Copilot licence and, where an administrator sets it, membership of one security group (see the Planner PowerShell row in the table). An invalid group ID turns the feature off for all users, so check the ID before you run the command.

**Autonomy & actions**
- Microsoft describes the agent as automating plan creation and task execution. Plan in advance who may use that and what you want reviewed, because the Learn pages read do not say whether each action needs approval.

**Change & support**
- Turning Planner Agent off in Planner also disables the document authoring skill of Facilitator; other Facilitator skills are unaffected, according to the same page.
- Planner PowerShell changes can take up to an hour to apply, so expect support questions for that period.

## Cost and licensing

Licence: Microsoft Learn says users with Microsoft Copilot can use the premium and AI-powered capabilities included with that licence, such as Planner Agent (Microsoft Planner for admins). The Planner Agent page lists a Microsoft Copilot licence as the requirement for Planner Agent in Planner.

Planner Agent is not named as a separate purchase on those pages. The Planner Plan 1 and Planner and Project Plan 3 licences are described as providing additional premium capabilities. Indirect cost is admin time to decide availability and, if you restrict it, to run the Planner PowerShell commands.

A price or meter specific to the Planner Agent in the Microsoft Copilot experience is not yet published on the pages read.

## Scope

Users: Learn says users with a Microsoft Copilot licence can use Planner Agent. Planner Agent in Planner is documented for basic and premium plans; its chat is documented for premium plans only on the same page.

Roadmap record: Worldwide (Standard Multi-Tenant), Desktop. The record lists no other cloud; that is a record fact, not a statement about availability elsewhere.

Roles: the Planner tenant admin PowerShell commands need a global admin, according to Learn. Allow up to an hour for a policy change to take effect.

## Governance guidance

### Before rollout
- Identify which users hold a Microsoft Copilot licence, because Learn ties Planner Agent to that licence.
- Decide whether Planner Agent should be available to everyone or to one security group, and create the group in Microsoft Entra ID if it is the second.
- Confirm in a test tenant what the default is, because Microsoft has not stated it.

### At rollout
- Run Set-PlannerConfiguration with -AllowPlannerCopilot to turn Planner Agent and its chat on or off, as a global admin, if you want to restrict them in Planner.
- Use the agent Block action in the Microsoft 365 admin center if you need to stop the Planner Agent for the organisation in Microsoft Copilot.
- Tell users in scope what the agent does to their plans.

### After rollout
- Run Get-PlannerConfiguration to confirm AllowPlannerCopilot and the group ID.
- Check the Facilitator document authoring skill still behaves as intended if you turned Planner Agent off.
- Watch Planner Premium audit log activities, which Learn says Planner Agent plans to match.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Planner Agent and Planner Agent chat are available in Planner, for everyone or one security group</strong><br><small>Tenant</small><br><small class="controls__note">Global admin. The page scopes this to Planner Agent in Planner and points to the Microsoft 365 admin center for the agent in Microsoft Copilot. Group scoping uses -PlannerCopilotAllowedGroupId.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $false</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">The Planner page points here for managing Planner Agent in Microsoft Copilot. The Package Management API needs a Microsoft Agent 365 licence and is beta.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Planner PowerShell setting and the Microsoft 365 admin center block are different controls. Learn scopes the PowerShell page to Planner Agent in Planner and points to the Microsoft 365 admin center for managing the Planner Agent in Microsoft Copilot, so do not assume the first covers the second.

Planner PowerShell: a valid security group ID turns the feature on for those users only, and an invalid one turns it off for all users. The Package Management API behind the block call requires a Microsoft Agent 365 licence and is beta.

## Open questions

- What is the default state of Planner Agent in Microsoft Copilot when a tenant has Copilot licences and no administrator acts? Watch the Planner admin pages on Microsoft Learn and Message center.
- Does Set-PlannerConfiguration -AllowPlannerCopilot also govern the agent in Microsoft Copilot, or only Planner Agent in Planner?
- Does Planner Agent appear in the Microsoft 365 admin center All agents list so it can be blocked there?
- Does each action the agent takes on a plan need user approval, and which audit events record it?

<!-- rationale
risk: Medium. Microsoft describes Planner Agent as automating plan creation and task execution, and the default for the Copilot experience is not stated; Learn documents an admin block and a PowerShell switch.
cost: Low. Learn says users with a Microsoft Copilot licence get Planner Agent as part of that licence, so the cost known to this briefing is admin time; no separate Planner Agent price is stated on the pages read.
impact: Medium. Microsoft Copilot licensed users who work in Planner plans are the people who see it; unlicensed users are not named as users of it on the pages read.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: final paragraph / behaviour: A valid security group ID turns the feature on for those users only. | Found: | $false | Not applicable | 'OFF' for all users | | $true | valid security group ID | 'ON' for users in the security group only (or nested members) | | Fix: Replace the sentence with: 'Planner PowerShell: when AllowPlannerCopilot is $true, a valid security group ID restricts access to that group's users, including nested members; an invalid group ID denies access to all users.' The behavior matrix at https://learn.microsoft.com/planner/turn-off-planner-agent also states that $false disables access regardless of the group ID. | Source: https://learn.microsoft.com/planner/turn-off-planner-agent
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; controls[1].note; Governance controls; Governance guidance: At rollout / applicability: The Planner page directs admins to Microsoft 365 agent management for Planner Agent in Microsoft Copilot, separately from its Planner PowerShell instructions. | Found: For information on how to manage the Planner Agent in Microsoft Copilot, please see Manage agents in the Microsoft 365 admin center. | Fix: Add https://learn.microsoft.com/microsoft-agent-365/admin/manage-copilot-agents-integrated-apps to sources with title 'Manage agents in the Microsoft 365 admin center'. This is the intervening page linked by the Planner article; it identifies Microsoft agents as manageable and links to agent governance. | Source: https://learn.microsoft.com/planner/turn-off-planner-agent
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to watch Planner Premium audit log activities, but the controls table has no audit row. | Found: Watch Planner Premium audit log activities, which Learn says Planner Agent plans to match. The controls table lists only Planner availability and organisation-wide agent blocking. | Fix: Remove the 'Watch Planner Premium audit log activities' checklist bullet: it has no corresponding control row, and the cited Planner Agent page describes matching auditing as planned. Keep the existing audit question in Open questions.
-->
