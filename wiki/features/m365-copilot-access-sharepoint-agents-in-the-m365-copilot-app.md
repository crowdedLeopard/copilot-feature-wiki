---
title: "Microsoft 365 Copilot app: return to recently used SharePoint agents"
slug: "m365-copilot-access-sharepoint-agents-in-the-m365-copilot-app"
roadmapId: 482601
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","SharePoint"]
summary: "The roadmap plans a way to reopen recently used SharePoint agents from the Microsoft 365 Copilot app. Microsoft has not stated the default or any feature-specific control; existing agent controls are the ones to check."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Nothing specific to this feature is published. For SharePoint agents generally, Learn says users with a Microsoft Copilot licence can use them, and users without one can be covered by pay-as-you-go billing."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint-agents","sharepoint","m365-copilot","agents","restricted-content-discovery","pay-as-you-go","licensing"]
sources:
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Upgrade agents in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents"
    kind: "learn"
  - title: "Use agents with pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 482601"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=482601"
    kind: "roadmap"
videos: []
related: ["sharepoint-agent-chat-web-part","microsoft-teams-adaptive-card-based-app-and-copilot-agent-link-unfurling-in-teams","m365-copilot-copilot-in-sharepoint","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin"]
controls:
  - governs: "Whether a specific agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "For an agent created in SharePoint the admin center page says the block only affects Microsoft Copilot Chat. The API is beta and its reference says it needs a Microsoft Agent 365 licence."
  - governs: "Which SharePoint sites Microsoft Copilot can discover content from, and whether their agent features show"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Site access is unchanged. Requires a Microsoft Copilot licence and SharePoint Advanced Management; by default only SharePoint administrators manage it."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-07-22T23:15:27"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap-only description of the feature, with the existing SharePoint agent controls and the .agent upgrade timeline that surrounds it."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 58
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "dce1392655519cd7611a8c003019db51"
---

## What's changing

The roadmap item plans a way to return to your most recently used SharePoint agents directly in the Microsoft 365 Copilot app, without going to the SharePoint site first. The roadmap lists the web platform and the Worldwide (Standard Multi-Tenant) cloud, with release phase General Availability.

Microsoft Learn does not describe this feature itself at the time of writing (November 2026), so the behaviour above is the roadmap's description. The wiki does not state where in the app the list appears, how many agents it holds or how it is ordered.

The roadmap status is In development with a target of September CY2025, and the record was last modified on 22 July 2025. That target date has passed and the record still shows In development, so treat the timing as unconfirmed.

Related Learn context: agents in SharePoint are represented as .agent files. Microsoft's "Upgrade agents in SharePoint and OneDrive" page says existing .agent agents continue to work across SharePoint, Microsoft Teams and the Copilot app until the end of March 2027, and that .agent files stop responding after that. It also says that from mid-November 2026 agents for SharePoint and OneDrive are created in Microsoft Copilot Agent Builder, which no longer saves a .agent file. Microsoft has not said how this roadmap item relates to that upgrade.

## Why it matters

For an administrator the change is about reach, not new data: SharePoint agents become easier to find from the Copilot app, so use of them may grow outside the SharePoint sites where they were created. Microsoft Learn says agents in SharePoint access organisation data the same way Copilot in other Microsoft 365 apps does, responding to users based on their access permissions, so oversharing in the underlying sites matters more than the new entry point.

Microsoft has not stated what happens on arrival, whether the list appears for everyone or needs a switch. No source says existing behaviour changes, so the practical step is to confirm that your existing agent controls cover the Copilot app, as set out under governance.

## Risk assessment

**Data exposure**
- Agents in SharePoint use SharePoint sites, pages and document libraries as knowledge sources, and Learn says responses depend on each user's permissions to those sources. A faster route to an agent therefore exposes nothing new beyond what the user's permissions already allow, but it makes existing oversharing easier to hit. Restricted Content Discovery on a site is the documented way to remove that site's AI entry points (see the controls table).

**Security & identity**
- Learn says the permissions on the .agent file decide who can access or edit an agent. Review those permissions before the Copilot app list makes agents more visible.
- Microsoft has not said which account or component populates the recently used list; confirm this before relying on it.

**Autonomy & actions**
- The roadmap description covers only returning to an agent. It mentions no new actions or autonomous behaviour.

**Change & support**
- Learn says blocking an agent created in SharePoint only affects its availability in Microsoft Copilot Chat. Whether a block also hides the agent from the Copilot app list is not stated, so test it before telling users it is blocked.
- Agents saved as .agent files are due to stop responding after March 2027 according to the upgrade page, so helpdesk questions about agents that no longer open are likely once that date passes.

## Cost and licensing

Microsoft publishes no licence or meter specific to this feature. For SharePoint agents generally, "Manage access to agents in SharePoint" says users with a Microsoft Copilot licence can use the agents, and that administrators can control access through licence assignment.

For users without a Copilot licence, the same page says access can be controlled through pay-as-you-go billing. "Use agents with pay-as-you-go billing" lists a generative answer at 2 messages and tenant graph grounding at 10 messages, and says charges appear under the Copilot Studio meter on the invoice. It also says interactive use by authenticated Microsoft Copilot users in Microsoft 365 apps and services is included at no extra cost. That page is not specific to this feature, so whether this feature changes any of those charges is not yet published.

Indirect cost is admin time to check who holds the licence, which sites agents draw on, and whether block and Restricted Content Discovery settings behave as expected.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the web platform, and release phase General Availability. It lists no US Government cloud. The roadmap does not say which users see the feature.

For SharePoint agents in general, Learn says users with a Microsoft Copilot licence can use them and that agents do not require activation. The roles that manage this feature are not stated. Blocking agents in the Microsoft 365 admin center is documented for tenant admins and AI admins.

## Governance guidance

### Before rollout
- Review which sites hold .agent files and which users can open them, since the permissions on the .agent file decide who can access or edit an agent.
- Identify sites that are not ready for agent use and decide whether to apply Restricted Content Discovery to them (controls table, row 2).
- Check who holds a Microsoft Copilot licence, and whether a pay-as-you-go billing policy is connected to SharePoint agents, so you know who can reach these agents from the Copilot app.

### At rollout
- Test with a pilot user who has used a SharePoint agent whether it appears in the Copilot app, and note where.
- Block one test agent in the Microsoft 365 admin center (controls table, row 1) and check whether it still appears in the Copilot app, because Learn says the block applies to Copilot Chat.

### After rollout
- Watch the Microsoft 365 roadmap item and Message center for a status change, since the record still shows In development.
- Plan the move of .agent agents before the end of March 2027 date on the upgrade page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a specific agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">For an agent created in SharePoint the admin center page says the block only affects Microsoft Copilot Chat. The API is beta and its reference says it needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from, and whether their agent features show</strong><br><small>Site</small><br><small class="controls__note">Site access is unchanged. Requires a Microsoft Copilot licence and SharePoint Advanced Management; by default only SharePoint administrators manage it.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn lists three ways to limit SharePoint agents: licence or pay-as-you-go entitlement, per-agent blocking, and Restricted Content Discovery per site. None is documented as specific to the Copilot app list.

The Microsoft 365 admin center page says blocking an agent that you created by using SharePoint only impacts its availability in Microsoft Copilot Chat. Restricted Content Discovery leaves site access unchanged, and removes the Agent icon on that site's global header. It needs a Microsoft Copilot licence and SharePoint Advanced Management, per its own page.

The Package Management API in row 1 is a beta API and the reference page says it needs a Microsoft Agent 365 licence. Per-user access through the 'Microsoft Copilot for SharePoint' service plan is documented on the license details page for Microsoft Copilot in the Microsoft 365 admin center, and turning it off also disables Copilot in OneDrive and on SharePoint page authoring for that user.

## Open questions

- Is the recently used SharePoint agents list on by default, or does an administrator or user have to turn it on? Watch the roadmap item and Message center.
- Does blocking a SharePoint agent in the Microsoft 365 admin center remove it from the Copilot app list, given that Learn says the block only affects Microsoft Copilot Chat?
- How does this item relate to the move from .agent files to Copilot Agent Builder agents, and will agents saved as .agent files still appear in the list after March 2027?
- Does the roadmap target of September CY2025 still apply, given the status is still In development?

<!-- rationale
risk: Low. The roadmap describes a shortcut to agents people already use, and Microsoft Learn says SharePoint agents respond according to each user's access permissions to the data.
cost: Low. No charge specific to this feature is published; SharePoint agents already need a Microsoft Copilot licence or pay-as-you-go billing, so the cost is admin time to review who uses them.
impact: Low. The roadmap lists the web platform only, and the change helps users who have already used SharePoint agents get back to them without opening the SharePoint site.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: An agent can be blocked through Microsoft 365 admin center > Agents > All agents > agent > Block. | Found: Select **Agents** > **All agents**. In the **All agents** page, select an agent from the list of agents. In the agent details pane that opens, immediately under the agent's name, select **Block** or **Unblock**. | Fix: Keep the path, but add: 'The current agent-actions page documents Block; the December 23, 2025 release notes instead describe replacing block/unblock with delete.' Cite https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#december-23,-2025 alongside the existing source. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to review file permissions, licence assignment and billing-policy connections, but those controls have no table rows. | Found: Before rollout: 'Review which sites hold .agent files and which users can open them'; 'Check who holds a Microsoft Copilot licence, and whether a pay-as-you-go billing policy is connected'. The table contains only agent blocking and Restricted Content Discovery. | Fix: The first and third Before rollout bullets name controls missing from the table. Remove those two checklist bullets to reconcile the checklist with the existing table; do not add control rows in this correction.
-->
