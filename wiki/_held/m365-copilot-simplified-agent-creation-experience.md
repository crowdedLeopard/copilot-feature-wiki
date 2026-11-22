---
title: "Microsoft Copilot (Microsoft 365): simplified agent creation experience"
slug: "m365-copilot-simplified-agent-creation-experience"
roadmapId: 506848
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a simpler first run for creating agents in Microsoft Copilot (Microsoft 365). No Learn page describes it yet. Existing agent access, sharing and block controls are the levers to check; no admin action is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "No licence specific to this change is published. Learn says access to Agent Builder and its capabilities depend on the licences assigned in the tenant; Copilot Chat is available to all Microsoft 365 users, and enhanced agent capabilities need a Microsoft 365 Copilot licence or pay-as-you-go billing (Copilot Credits)."
audiences: ["m365-admin","maker","change-adoption"]
tags: ["copilot","m365-copilot","agents","adoption","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Copilot (Microsoft 365): Simplified Agent Creation experience"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=506848"
    kind: "roadmap"
  - title: "Agent Builder overview"
    url: "https://learn.microsoft.com/plugins/agent-builder"
    kind: "learn"
  - title: "Build agents in Agent Builder"
    url: "https://learn.microsoft.com/plugins/agent-builder-build-agents"
    kind: "learn"
  - title: "Share and manage agents built in Agent Builder"
    url: "https://learn.microsoft.com/plugins/agent-builder-share-manage-agents"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/plugins/prerequisites"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["microsoft-copilot-studio-introducing-an-app-and-intent-first-agent-creation-experience","m365-copilot-agent-lifecycle-management-rules","microsoft-copilot-studio-agent-sharing-amongst-makers"]
controls:
  - governs: "Whether a specific agent is available to anyone in the organisation (block or unblock)"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Acts on an existing agent, not on creation. Beta API; Learn says the Package Management API requires a Microsoft Agent 365 licence."
confidence: "low"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-11-18T17:15:10"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap-only description of a simplified agent creation flow; existing agent access, sharing and block controls listed as the nearest levers."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 71 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 67
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "b2c7b839a08f00fc7bc6ed8b52171da8"
---

## What's changing

The roadmap item describes a simplified way to create agents in Microsoft Copilot (Microsoft 365): a much simpler first-run experience that guides users from idea to a working agent, faster responses and better performance, and a flow that mirrors Copilot's own simplicity. The record does not say which authoring tool is changing, what the new first run shows, or what happens to agents that already exist.

Microsoft Learn has no page for this change at the time of writing (November 2026), so what follows about behaviour is the roadmap's own description. The nearest documented surface is Agent Builder, where users select **New agent** in Microsoft 365 Copilot and can describe the agent in natural language, configure it manually on the **Configure** tab, or start from a template. This briefing uses Agent Builder as background only; that the roadmap item changes it is not confirmed.

The record shows status In development, a target of December CY2025, no preview date, release phase General Availability, platforms Desktop and Web, and Worldwide (Standard Multi-Tenant) as the only cloud. The item was last modified on 18 November 2025, so the December CY2025 target has passed with the status unchanged. Treat the date as Microsoft's target, not a commitment.

## Why it matters

A simpler first run lowers the effort to make an agent, so expect more agents created by more people once it arrives. That shifts work onto the controls that sit after creation: who can access agents, who can share them across the organisation, which ones reach the org catalog, and which get blocked.

Microsoft has not stated what happens on arrival or whether administrators must do anything. No source says existing behaviour is removed, so the advice is to prepare communication and check the existing settings rather than expect a new switch.

## Risk assessment

**Data exposure**
- The roadmap describes no new data access. For agents built in Agent Builder, Learn says "Creating an agent doesn't itself grant additional data permissions", but uploaded files become embedded knowledge that anyone who can access the agent can receive responses from, subject to sensitivity-label permissions. A faster flow makes it easier to upload content without review.

**Security & identity**
- For SharePoint and OneDrive knowledge sources, Learn says existing file permissions and sensitivity labels apply, so sharing an agent does not by itself widen access to the source files.

**Autonomy & actions**
- The roadmap names no actions. Learn says Agent Builder does not support authoring actions that integrate external services, so connectors and workflows come through Copilot Studio instead.

**Change & support**
- Org-wide sharing of Agent Builder agents is set to All users by default, so easier creation can lead to more agents shared across the tenant unless the **Sharing** setting is narrowed. Changes to that setting apply only to new sharing actions; agents already shared stay accessible.
- Makers who learned the current flow will meet a changed first run. The record gives no screens or dates for the change, so help-desk guidance has to wait for Microsoft's documentation.

## Cost and licensing

The roadmap record names no licence, meter or price for this change, and Microsoft's pages publish no charge specific to this experience at the time of writing (November 2026).

The general rules sit on Learn's agent pages. Access to Agent Builder and the capabilities an agent can use depend on the licences assigned in the tenant. Microsoft 365 Copilot Chat is available to all Microsoft 365 users, and agents with enhanced capabilities such as grounding on SharePoint data or Microsoft 365 Copilot connectors are available to users in tenants with Copilot Studio pay-as-you-go billing (consumed as Copilot Credits) and to users with Microsoft 365 Copilot licences. Learn also says agents built in Agent Builder do not consume the tenant's Dataverse storage entitlement.

The indirect cost is admin time to review sharing settings and communicate the change to makers.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) as the only cloud, with Desktop and Web platforms and General Availability as the release phase. It does not list the US Government clouds; that is a record fact, not a statement that the change is unavailable there.

No licence, role or prerequisite for the change itself is published. For the nearest documented surface, Learn says Agent Builder builds agents from microsoft365.com/chat, office.com/chat and the Microsoft Teams desktop and web client, and is not available on mobile versions of those apps and sites.

## Governance guidance

### Before rollout
- Check **Agents** > **Settings** > **User access** in the Microsoft 365 admin center to see who can access agents and plugins; Learn gives All users as the default.
- Review **Agents** > **Settings** > **Sharing** to decide who may share Agent Builder agents with the whole organisation; Learn gives All users as the default.
- Tell makers and the help desk that Microsoft plans a changed agent-creation first run, and that the roadmap gives no screens or date beyond the December CY2025 target.
- Confirm which licences your likely makers hold, because agent capabilities depend on the licence or pay-as-you-go billing in the tenant.

### At rollout
- Watch Message center and the Microsoft 365 Copilot release notes for a post that names roadmap item 506848 and states the default and any required action.
- Pilot with a small group: create an agent using the natural-language option and check that the sharing restrictions you set still apply to it.
- Review any submissions waiting for approval to the org catalog; Learn says publishing an agent to the org catalog requires admin review and approval.

### After rollout
- Review the **All agents** list for new agents and block any that should not be available, using the block control in the table.
- Re-check the **User access** and **Sharing** settings, and take stock of agents shared organisation-wide.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a specific agent is available to anyone in the organisation (block or unblock)</strong><br><small>Agent</small><br><small class="controls__note">Acts on an existing agent, not on creation. Beta API; Learn says the Package Management API requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn says creating agents in Agent Builder is a core Copilot capability when agents are enabled, and that administrators cannot disable agent creation in Agent Builder separately while keeping agents enabled. Microsoft Learn documents no setting specific to this new creation experience at the time of writing (November 2026).

The controls that remain are on the agents themselves. **User access** (Microsoft 365 admin center > Agents > Settings > User access, on learn.microsoft.com/microsoft-agent-365/admin/agent-settings) sets who can access agents and plugins, and Learn says it controls agent and plugin access, not Agent Builder creation independently. **Sharing** (Agents > Settings > Sharing) sets who can share agents built in Agent Builder with the organisation, and does not revoke access already granted. The block row below applies per agent, after it exists.

## Open questions

- Which authoring surface does roadmap item 506848 change: Agent Builder, Copilot Studio, or a new experience in Microsoft Copilot? Watch the roadmap record and the Microsoft 365 Copilot release notes.
- Will the new first run be on by default for every user who can create agents, and will any admin setting control it? Microsoft has not stated either.
- Does the change carry a licence requirement or a Copilot Credits meter of its own, or does it follow the existing agent licensing rules?
- The December CY2025 target has passed while the status remains In development: has the date moved, or has the item been replaced by another roadmap entry?

<!-- rationale
risk: Low. The roadmap describes a simpler, faster creation flow and states no new data access or actions; existing access, sharing and block settings in the Microsoft 365 admin center still apply to the agents it produces.
cost: Low. The roadmap names no licence or meter for this change, so the known cost is admin time and communication; agent capabilities still depend on the licences and Copilot Credits billing the tenant already has.
impact: Medium. Users who build agents in Microsoft Copilot would notice a changed first-run flow; people who only use agents see nothing in the roadmap description.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing / licensing: Enhanced agent capabilities, including SharePoint grounding, are available with tenant pay-as-you-go billing or a Microsoft 365 Copilot licence. | Found: For agents that use SharePoint files as knowledge sources, the billing policy must be connected to the SharePoint agents service and users must be in the security group assigned to the billing policy. | Fix: Add this qualification to the licensing notes and the enhanced-capabilities sentence: 'For pay-as-you-go agents that use SharePoint files as knowledge sources, the billing policy must be connected to the SharePoint agents service and users must be in the security group assigned to that billing policy.' The qualification is at https://learn.microsoft.com/plugins/prerequisites. | Source: https://learn.microsoft.com/plugins/prerequisites
- [contradicted, blocker] Risk assessment: Change & support / record: The record gives no dates for the change. | Found: "targetDate": "December CY2025" | Fix: Replace 'The record gives no screens or dates for the change' with 'The record gives no screens or rollout window beyond the December CY2025 target'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Microsoft 365 Copilot Chat is available to all Microsoft 365 users. | Found: Microsoft 365 Copilot Chat is a broadly accessible AI chat interface that is available to all Microsoft 365 users. | Fix: Replace 'available to all Microsoft 365 users' with 'available to users with an eligible Microsoft 365 subscription' in the notes and body, and cite https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements, which gives that narrower requirement. | Source: https://learn.microsoft.com/plugins/prerequisites
- [unsupported, minor] rationale: risk / applicability: Existing access, sharing and block settings still apply to the agents produced by this new creation experience. | Found: Searched: '506848 Agent Builder simplified creation control settings licensing'. Read Agent settings and Agent Builder guidance: Sharing covers only Agent Builder; no source identifies the new surface or confirms that Sharing governs its output. | Fix: Replace the risk rationale with: 'Low. The roadmap describes a simpler, faster creation flow and states no new data access or actions; it does not identify the authoring surface, so the documented Agent Builder controls are background only.'
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist directs readers to check User access, Sharing and catalog submissions, but the controls table contains only Block. | Found: Check Agents > Settings > User access; Review Agents > Settings > Sharing; Review any submissions waiting for approval to the org catalog. The controls table has only 'Whether a specific agent is available to anyone in the organisation (block or unblock)'. | Fix: The Before rollout User access and Sharing steps, At rollout catalog-submission review, and After rollout User access and Sharing re-check have no corresponding table rows. Remove those checklist instructions rather than adding controls during correction.
-->
