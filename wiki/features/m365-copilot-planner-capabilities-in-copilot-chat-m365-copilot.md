---
title: "Microsoft 365 Copilot Chat: create and query Planner tasks and plans"
slug: "m365-copilot-planner-capabilities-in-copilot-chat-m365-copilot"
roadmapId: 516577
topic: "m365-copilot"
products: ["Planner","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat is gaining the ability to create, update and answer questions about Planner tasks and plans in natural language. Rolling out from September 2026; Microsoft's notice says no action is required."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "September CY2026"
previewDate: "August CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The Planner service description lists Planner in Copilot Chat among the capabilities available to users with a Microsoft Copilot licence. A meter specific to this capability is not yet published."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["planner","copilot-chat","m365-copilot","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 516577"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=516577"
    kind: "roadmap"
  - title: "MC1443523: Microsoft 365 Copilot: Planner capabilities in Copilot chat"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1443523"
    kind: "message-center"
  - title: "Microsoft Planner service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description"
    kind: "learn"
  - title: "Manage the Planner Plugin for Copilot Cowork"
    url: "https://learn.microsoft.com/planner/manage-planner-plugin-cowork"
    kind: "learn"
  - title: "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner"
    url: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
videos: []
related: ["planner-planner-agent-in-copilot-v2-improvements","planner-planner-agent-chat-in-basic-plans","planner-save-ai-generated-filters-in-planner-agent-chat"]
controls:
  - governs: "Whether the Planner Plugin is available to users (documented for Copilot Cowork)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Planner Plugin > Users > Block"
      docs: "https://learn.microsoft.com/planner/manage-planner-plugin-cowork"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Page documents Cowork, not Chat. Admin role: Global Administrator or Copilot Administrator. Graph beta API needs a Microsoft Agent 365 licence."
  - governs: "Who can use Planner Agent (basic and premium) and Planner Agent chat (premium only): all users or one group"
    scope: "group"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId <security group id>"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Applies to Planner Agent in Planner. The documented chat restriction covers premium plans only. Not stated to govern Copilot Chat. Changes can take up to 1 hour."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-20"
    note: "First briefing for roadmap item 516577: Planner tasks and plans in Copilot Chat, rolling out from September 2026, with the neighbouring Planner controls and what is not yet documented."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: Learn's Planner service description now cited for Planner in Copilot Chat and the Microsoft Copilot licence; Planner Agent chat restriction qualified as premium plans only."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 76 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 70
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "a6086e403fac06d8c835111890d45259"
---

## What's changing

Microsoft is adding Planner capabilities to Microsoft 365 Copilot Chat. The roadmap item says users will be able to create Planner tasks and plans and query Planner information in Chat. Microsoft's notice MC1443523 describes this as creating, updating and asking questions about Planner tasks and plans in natural language, without switching between applications.

Microsoft Learn names Planner in Copilot Chat in the Planner service description; the behavioural details below come from the roadmap item and Microsoft's notice. The notice says the first version shows task and plan details as text only, and that the next version will have an interactive task card. It also says existing Planner permissions and access controls continue to apply, and that no changes to Planner data storage or permissions are expected.

The roadmap item is at status Rolling out, with a target date of September CY2026 and a preview date of August CY2026; it lists Worldwide (Standard Multi-Tenant), General Availability and Desktop. MC1443523 (published 2026-07-31, last updated 2026-08-14) gives General Availability for Worldwide beginning in early September 2026, lists Desktop and Web, and gives an end date of 2027-01-31. It says the feature arrives through standard service rollout for eligible users, and that no action is required.

This is separate from Planner Agent chat inside the Planner app, which the Copilot release notes for 23 September 2026 describe as a different item.

## Why it matters

Chat becomes a second route to write to Planner. Anyone with eligible access can type a request and change tasks and plans, so the quality of Planner plan membership and ownership now matters in a place where people ask open questions. Microsoft's notice says Chat will create and retrieve Planner task information that users already have permission to access, which means any plan that is shared more widely than intended becomes easier to query.

The notice says no action is required, and gives the default as standard rollout for eligible users. Expect the capability to appear without an admin step, and plan for help desk questions and training updates, which are the two things Microsoft recommends. Whether an administrator can switch off this specific capability is not documented, so decide now which existing controls you would test.

## Risk assessment

**Data exposure**

- Chat retrieves Planner task and plan information the signed-in user can already access (MC1443523). Plans with broad membership, or tasks that carry sensitive text, can now be summarised or surfaced by a prompt. Check plan membership; Microsoft's notice names no separate data boundary for this feature.

**Security & identity**

- Microsoft's notice says existing Planner permissions and access controls continue to apply. Which identity Chat uses to call Planner is not described, so confirm it in a pilot before relying on it.

**Autonomy & actions**

- Chat can create and update tasks and plans, so a prompt can change shared plans. Whether Chat asks the user to approve a change before it is written is not documented for this feature. The Planner Plugin page for Copilot Cowork says users approve every change there, but that page documents Cowork, not Chat.

**Change & support**

- The first version shows details as text only; an interactive task card follows in a later version (MC1443523). Expect the screen to change again.
- Names overlap: Planner Agent, Planner Agent chat in Planner, the Planner Plugin for Cowork and this Chat capability are different items, and the admin controls Microsoft documents for the neighbours are not stated to govern this one.

## Cost and licensing

No licence or meter is named in the roadmap item or in MC1443523. The Planner service description says users with a Microsoft Copilot licence can use Copilot capabilities in Planner, including Planner in Copilot Chat. The Microsoft Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and Planner in Microsoft 365 is included with the subscription plans listed on the Planner for admins page.

Neighbouring Planner features have their own licence statements, which should not be read across. The Planner Plugin page for Copilot Cowork lists Microsoft 365 Copilot as the user licence for that plugin, and the Planner Agent page for Planner lists a Microsoft Copilot licence for the Planner Agent in Planner. A meter specific to this Chat capability is not yet published.

The indirect costs are admin and support time: updating Microsoft 365 Copilot and Planner training materials and briefing the help desk, as MC1443523 recommends.

## Scope

The notice is aimed at users of Microsoft 365 Copilot Chat and users of Microsoft Planner, and says the feature reaches eligible users through standard service rollout. The roadmap item lists Worldwide (Standard Multi-Tenant) and Desktop; MC1443523 lists Desktop and Web, so the platform lists differ between the two. What makes a user eligible is not defined in either.

The roadmap record lists no US Government clouds. Existing Planner permissions apply, and Microsoft expects no change to Planner data storage. No prerequisite role is named for administrators.

## Governance guidance

### Before rollout

- Ask Planner plan owners to check the membership of plans that hold sensitive tasks, because Chat reads what each user can already open.
- Open the Microsoft 365 admin center, go to Agents > Tools and check whether a Planner Plugin entry exists and what its Users tab shows (controls table, row 1).
- Record the current output of Get-PlannerConfiguration so you can see the effect of any later change to the Planner settings (controls table, row 2).
- Update training and adoption material for Microsoft 365 Copilot and Planner, as MC1443523 recommends.

### At rollout

- Run a pilot with a small group: ask Chat to create a task in a test plan, then check whether blocking the Planner Plugin, or setting AllowPlannerCopilot to false, changes what Chat can do.
- Brief the help desk on the new capability and on the text-only first version (MC1443523).
- Ask pilot users whether Chat asked for confirmation before writing to a plan, and keep the answer for your risk record.

### After rollout

- Re-read MC1443523 and the roadmap item for the interactive task card version and for any change to the default.
- Review Planner tasks created during the pilot with their plan owners, and decide whether broader access is acceptable.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Planner Plugin is available to users (documented for Copilot Cowork)</strong><br><small>Tenant</small><br><small class="controls__note">Page documents Cowork, not Chat. Admin role: Global Administrator or Copilot Administrator. Graph beta API needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Planner Plugin › Users › Block <a href="https://learn.microsoft.com/planner/manage-planner-plugin-cowork" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can use Planner Agent (basic and premium) and Planner Agent chat (premium only): all users or one group</strong><br><small>Group</small><br><small class="controls__note">Applies to Planner Agent in Planner. The documented chat restriction covers premium plans only. Not stated to govern Copilot Chat. Changes can take up to 1 hour.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId &lt;security group id&gt;</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are existing controls for neighbouring features, listed because no setting specific to this capability is documented at the time of writing (November 2026). Neither page says it governs Copilot Chat's Planner capability, so test before relying on them.

The Planner Plugin page documents the plugin for Copilot Cowork, names Global Administrator or Copilot Administrator as the admin role, and says blocking applies to new conversations while conversations in progress continue. The Graph call is the package block operation; the Package Management API manages agents and tools, including plugins, in the organisation catalog, and access to it requires a Microsoft Agent 365 licence. The block page documents the operation for packages and does not say it covers the Planner capability in Copilot Chat.

Set-PlannerConfiguration -AllowPlannerCopilot is documented for Planner Agent (basic and premium plans) and Planner Agent chat (premium plans only) in Planner. The documented chat restriction covers premium plans only. Its page sends readers to the Microsoft 365 admin center for the Planner Agent in Microsoft Copilot, and says changes can take up to 1 hour.

## Open questions

- Does blocking or restricting the Planner Plugin in Agents > Tools apply to the Planner capability in Copilot Chat, or only to Cowork? Watch the Planner Plugin page on Microsoft Learn and MC1443523.
- Is a meter or credit rate specific to this capability published? Watch the Microsoft Copilot requirements page and the Planner service description.
- Does Chat show a proposed change and ask for approval before it writes to a plan, and which audit events record the change? Watch the Planner admin pages on Microsoft Learn.
- Does Set-PlannerConfiguration -AllowPlannerCopilot cover this capability? The Planner Agent page for Planner says it covers Planner Agent (basic and premium plans) and Planner Agent chat (premium plans only) in Planner.
- Which platforms are supported: the roadmap item lists Desktop and MC1443523 lists Desktop and Web?

<!-- rationale
risk: Medium. Copilot Chat can create and change Planner tasks and plans from a prompt, under users' existing Planner permissions, and Microsoft's notice describes no switch specific to this feature.
cost: Low. Microsoft's notice and the roadmap name no separate licence or meter, so the known cost is admin time for training and help desk briefing. The Planner service description lists Planner in Copilot Chat among the capabilities available to users with a Microsoft Copilot licence.
impact: Medium. Users of Copilot Chat who also manage work in Planner get a new way to create and update tasks without opening Planner; people who do not use Planner will not notice.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; summary; body product references / behaviour: The briefing calls the products Microsoft 365 Copilot and Microsoft 365 Copilot Chat. | Found: Microsoft 365 Copilot is now named Microsoft Copilot, and Microsoft 365 Copilot Chat is now named Microsoft Copilot Chat. | Fix: Use 'Microsoft Copilot' and 'Microsoft Copilot Chat' in the briefing's own product references; preserve attributed roadmap and Message Center titles and quotations. | Source: https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements
- [supported, minor] controls[0].api; Governance controls table and prose / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage. POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block APIs under the /beta version are subject to change. Use of these APIs in production applications is not supported. | Fix: Keep the call and add to controls[0].note and its rendered row: 'The block operation is preview; beta APIs are subject to change and their use in production applications is not supported.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [supported, minor] Governance guidance: At rollout / command: Setting AllowPlannerCopilot to false turns off the documented Planner Agent experiences and can be tested in a pilot. | Found: Set-PlannerConfiguration -AllowPlannerCopilot $false Turning off Planner Agent will also disable document authoring skill of Facilitator. All other Facilitator skills remain unaffected. | Fix: Add to the pilot bullet: 'Turning off Planner Agent also disables Facilitator's document authoring skill; all other Facilitator skills remain unaffected.' Cite https://learn.microsoft.com/planner/turn-off-planner-agent. | Source: https://learn.microsoft.com/planner/turn-off-planner-agent
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to check Planner plan membership without a corresponding controls-table row. | Found: Ask Planner plan owners to check the membership of plans that hold sensitive tasks ... Table rows: Whether the Planner Plugin is available to users; Who can use Planner Agent ... and Planner Agent chat | Fix: Remove the first Before rollout bullet, which asks plan owners to check membership without a corresponding control row. Do not add a row during this correction.
-->
