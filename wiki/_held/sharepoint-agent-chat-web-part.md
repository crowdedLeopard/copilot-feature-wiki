---
title: "SharePoint: Agent Chat web part embeds Microsoft 365 Copilot agents in pages"
slug: "sharepoint-agent-chat-web-part"
roadmapId: 575298
topic: "modern-work"
products: ["SharePoint"]
summary: "A new SharePoint web part lets page authors embed an existing Microsoft 365 Copilot agent in a page. No admin action is required; Copilot-licensed users with access to the agent can chat with it from the page."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1559633 says the people affected are page authors and users with a Microsoft 365 Copilot licence and access to the configured agent. No price or meter specific to the web part is published at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","agents","m365-copilot","copilot-studio","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "SharePoint: Agent chat web part"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575298"
    kind: "roadmap"
  - title: "MC1559633: Microsoft SharePoint: Agent Chat web part to bring Copilot agents into SharePoint pages"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1559633"
    kind: "message-center"
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether an agent can be used at all in the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","microsoft-teams-adaptive-card-based-app-and-copilot-agent-link-unfurling-in-teams","microsoft-copilot-studio-streamlining-experiences-from-copilot-studio-agents-in-m365-copil"]
controls:
  - governs: "Whether an agent can be used at all in the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Existing control for agents, not specific to this web part. API is beta, needs a Microsoft Agent 365 licence. Effect on the web part is not stated."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-19"
    note: "New briefing on the Agent Chat web part, from the roadmap item and Microsoft's notice MC1559633."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 47 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 43
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "09788ffe158df5e1e56e53f287226e5b"
---

## What's changing

The Agent Chat web part is a new web part for modern SharePoint page editors. The roadmap item says it can be configured to use any Microsoft 365 Copilot agent. Microsoft's notice MC1559633 (published 18 November 2026) adds that authors select published agents already available to them in Microsoft 365 Copilot, and that users can chat with the agent on the page and continue the conversation in a full-screen chat experience.

Per the notice, existing SharePoint page permissions and agent access permissions remain independent, and adding an agent to a page does not give users access to that agent. SharePoint page content is not automatically passed to the agent. The notice also says SharePoint does not store Copilot agent chat data or change how agent data is processed.

The roadmap item is In development, with a preview target of November CY2026 and a General Availability target of January CY2027, for Worldwide, GCC, GCC High and DoD, on the web. The notice gives rollout windows: Public Preview (Worldwide) from mid-November 2026 to late January 2027, and General Availability from mid-January to late March 2027 in Worldwide, GCC, GCC High and DoD. The notice lists no preview rollout for the US Government clouds. No Microsoft Learn page describing the web part turned up in searches at the time of writing, so behaviour beyond the roadmap item and the notice is not confirmed here.

## Why it matters

This puts agents in front of users on intranet pages, so agent discovery and use now depend on what page authors choose to embed, not only on what users find in Microsoft 365 Copilot. Expect questions from authors about which agents they may embed and from users about why an agent on a page refuses them.

Microsoft's notice says no admin action is required before rollout and recommends telling page authors and support teams about the capability. It states that adding an agent to a page does not grant access to it, so the people who see an agent on a page but cannot use it will be those without access to that agent or without a Microsoft 365 Copilot licence.

## Risk assessment

**Data exposure**

- Microsoft's notice says SharePoint page content is not automatically passed to the agent and that SharePoint does not store the agent chat data. Whatever data the embedded agent reaches is governed by that agent's own configuration, which this web part does not change according to the notice.
- Microsoft's notice says page permissions and agent access permissions remain independent. Review who can read a page that carries an agent and who can use the agent separately; the Block row in the controls table is the one documented tenant-wide switch for an agent.

**Security & identity**

- The notice says authors select published agents already available to them, and that adding an agent to a page does not grant users access to it. Microsoft has not described which identity the web part uses when it calls the agent; confirm that before relying on per-user permission checks.

**Autonomy & actions**

- The notice describes chat with an agent from a page and a full-screen continuation. Whatever actions the chosen agent can take are decided by that agent; the notice does not describe any approval step added by the web part.

**Change & support**

- The web part appears in the page editor as part of the rollout and the notice states no admin switch for it. Page authors can start using it without an admin decision, so brief support teams first.

## Cost and licensing

**Licence.** Microsoft's notice MC1559633 names users with a Microsoft 365 Copilot licence and access to the configured agent as the users affected. Page authors are named as the people who add the web part.

**Meter.** No credit rate, meter or price specific to the web part is published at the time of writing (November 2026). Any charge for the chosen agent follows that agent's own licensing; check the agent's owner for its cost.

**Indirect costs.** Author training, support-desk briefing and page review time.

## Scope

**Who and where.** Page authors using the standard page editing experience in SharePoint Online, and Copilot-licensed users with access to the configured agent. The platform on the roadmap item is Web.

**Clouds.** The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The notice gives General Availability rollout from mid-January to late March 2027 for all four, and a Public Preview rollout for Worldwide only.

**Rollout.** Public Preview (Worldwide) from mid-November 2026, expected to finish by late January 2027; General Availability from mid-January 2027, expected to finish by late March 2027. The notice sets no act-by date.

**Prerequisites.** The agent must already be published and available to the author in Microsoft 365 Copilot, per the notice.

## Governance guidance

### Before rollout

- Tell SharePoint page authors and support teams that the web part is coming, as Microsoft's notice MC1559633 recommends.
- Decide which published agents authors may embed, and agree who owns each one.
- Review the agents in the Microsoft 365 admin center under Agents > All agents, so you know which ones you could block (Block row in the controls table).

### At rollout

- Test the web part in a preview or test site with a Copilot-licensed user and an unlicensed user, and note what each sees.
- Check that the embedded agent answers only from data its users may already read, because page and agent permissions are independent.

### After rollout

- Review pages that carry the web part and the agents they point to, and block any agent that should not be used.
- Watch Message center and the roadmap item for the General Availability date and any new admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent can be used at all in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for agents, not specific to this web part. API is beta, needs a Microsoft Agent 365 licence. Effect on the web part is not stated.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only tenant-wide control documented at the time of writing that acts on the agent itself is blocking it in the Microsoft 365 admin center or through the Package Management API. Whether a block also removes the agent from this web part is not stated: Learn says that blocking an agent created in SharePoint or Foundry only affects its availability in Microsoft Copilot Chat. The Package Management API requires a Microsoft Agent 365 licence and the block operation is in preview.

Microsoft Learn documents no setting named for this web part. The Set-SPOTenant reference lists a -DisabledWebPartIds parameter, but no page read for this briefing says it covers this web part or gives the web part's ID, so confirm that before using it.

## Open questions

- Is there a tenant or site setting, or a web part ID, to turn the Agent Chat web part off? Watch the SharePoint documentation and Message center.
- Does blocking an agent in the Microsoft 365 admin center stop it working inside the web part? Learn says a block on a SharePoint-created agent only affects Copilot Chat.
- Which identity does the web part use when it calls the agent, and is the user asked to sign in?
- Will a price or meter specific to the web part be published for General Availability in January 2027?

<!-- rationale
risk: Low. Microsoft's notice says page permissions and agent permissions stay independent, and page content is not passed to the agent automatically; nothing appears on a page until an author adds the web part.
cost: Low. Microsoft's notice names users with a Microsoft 365 Copilot licence as those affected and states no separate meter or price for the web part; the cost to plan for is author and support-team time.
impact: Low. Page authors who choose to add the web part, and Copilot-licensed users who open those pages, are the people who notice it; nothing changes for other users.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].governs; Governance controls table / applicability: Blocking decides whether an agent can be used at all in the organisation. | Found: However, blocking an agent that you created by using SharePoint or Microsoft Foundry only impacts its availability in Microsoft Copilot Chat. | Fix: Replace the row's governs text, including its rendered table heading, with 'Whether an agent is blocked in Microsoft Copilot'. Add to its note: 'For agents created in SharePoint or Microsoft Foundry, blocking affects Microsoft Copilot Chat only.' The existing note about unconfirmed web-part effects can remain. Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, blocker] controls[0].api and note; Scope: Clouds / availability: The block API is presented without a cloud restriction alongside a briefing that covers US Government deployments. | Found: | Global service | US Government L4 | US Government L5 (DOD) | China operated by 21Vianet | | --- | --- | --- | --- | | ✅ | ❌ | ❌ | ❌ | | Fix: Add this exact qualification to controls[0].note and the rendered table note: 'The API is available in the Global service only; US Government L4, US Government L5 (DOD), and China operated by 21Vianet are not supported.' Keep the feature's roadmap cloud list unchanged. Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, blocker] Governance controls; Risk assessment: Data exposure / absence: Blocking is the only documented tenant-wide control that acts on an agent itself. | Found: You can uninstall first-party or external agents across the whole organization or for specific users or groups ... When you delete an agent ... A soft-deleted agent is unavailable to its maker and end users | Fix: Replace the first sentence after the controls table with 'Blocking is an existing tenant-wide control for an agent; its effect depends on where the agent was created.' In Risk assessment, replace 'the Block row in the controls table is the one documented tenant-wide switch for an agent' with 'the controls table records the existing Block control'. Retain the following documented limitation for SharePoint- and Foundry-created agents. Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [unsupported, major] Risk assessment: Data exposure / behaviour: MC1559633 says the web part does not change the agent's configuration. | Found: Searched: '"Agent Chat web part" "data" "configuration"'. Read MC1559633 and Manage access to agents in SharePoint. The notice says data processing is unchanged, but does not state that agent configuration is unchanged. | Fix: Remove ', which this web part does not change according to the notice'. The existing What's changing statement that SharePoint does not change how agent data is processed can remain.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / command: The Set-SPOTenant reference lists a DisabledWebPartIds parameter. | Found: ### -DisabledWebPartIds ... Type: System.Guid[] | Fix: Add https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant?view=sharepoint-ps to sources for the existing Set-SPOTenant parameter statement. | Source: https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant?view=sharepoint-ps
- [supported, minor] Risk assessment: Data exposure / behaviour: The chosen agent's configuration governs its accessible knowledge sources. | Found: The Agent Capabilities section displays the configured capabilities for the agent, defining the scope of its accessible knowledge sources. | Fix: Replace 'Whatever data the embedded agent reaches is governed by that agent's own configuration' with 'An agent's configured capabilities define the scope of its accessible knowledge sources.' Add https://learn.microsoft.com/plugins/debugging-agents-copilot-studio to sources; do not attribute this general agent statement to MC1559633. | Source: https://learn.microsoft.com/plugins/debugging-agents-copilot-studio#use-developer-mode-in-copilot
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: The chosen agent has its own configured actions. | Found: Agent actions display the action ID and version number, configured functions for the action, along with their matching and selection status. | Fix: Replace 'Whatever actions the chosen agent can take are decided by that agent' with 'Review the chosen agent's configured actions.' Add https://learn.microsoft.com/plugins/debugging-agents-copilot-studio to sources. Keep the separate, supported statement that the notice describes no added approval step. | Source: https://learn.microsoft.com/plugins/debugging-agents-copilot-studio#use-developer-mode-in-copilot
- [supported, minor] Cost and licensing: Meter / cost: Charges for the chosen agent depend on that agent's licensing rather than a published web-part-specific price. | Found: If you have a Microsoft 365 Copilot license, using agents in Copilot Chat, Microsoft Teams, or SharePoint for classic answers, generative answers, or Microsoft Graph tenant grounding isn't charged when the agent runs with your authenticated identity. | Fix: Narrow 'Any charge for the chosen agent follows that agent's own licensing; check the agent's owner for its cost' to 'Check the chosen agent's licensing and billing conditions with its owner; Copilot Studio documents billing conditions for agents used in SharePoint.' Add https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing to sources. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
-->
