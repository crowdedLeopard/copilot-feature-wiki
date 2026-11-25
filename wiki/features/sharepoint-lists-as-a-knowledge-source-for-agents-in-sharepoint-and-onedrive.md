---
title: "SharePoint and OneDrive: Microsoft Lists as a knowledge source for agents"
slug: "sharepoint-lists-as-a-knowledge-source-for-agents-in-sharepoint-and-onedrive"
roadmapId: 559022
topic: "modern-work"
products: ["OneDrive","SharePoint"]
summary: "Microsoft plans to let custom agents in SharePoint and OneDrive answer from a Microsoft list. Builders pick the list; administrators should check site, permission and agent controls before agents use list data."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says users with Microsoft 365 Copilot licences, or users in tenants with Copilot Studio pay-as-you-go billing enabled (consumed as Copilot Credits), have access to agents grounded in SharePoint data."
audiences: ["m365-admin","service-owner","security","maker"]
tags: ["sharepoint","onedrive","sharepoint-lists","sharepoint-agents","agent-builder","knowledge-grounding","restricted-content-discovery","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap: SharePoint: Lists as a knowledge source for agents in SharePoint and OneDrive"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559022"
    kind: "roadmap"
  - title: "Add knowledge sources to an agent in Agent Builder"
    url: "https://learn.microsoft.com/plugins/agent-builder-add-knowledge"
    kind: "learn"
  - title: "Agent Builder overview"
    url: "https://learn.microsoft.com/plugins/agent-builder"
    kind: "learn"
  - title: "Upgrade agents in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents"
    kind: "learn"
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["m365-copilot-sharepoint-list-support-in-agent-builder","restricted-content-discovery","sharepoint-agent-chat-web-part","sharepoint-get-relevant-information-from-lists-in-knowledge-agent","spending-policies"]
controls:
  - governs: "Whether a SharePoint site's content and agent entry points are available to Microsoft Copilot and agents"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "SharePoint sites only; not supported for OneDrive sites. Does not change permissions. Existing control, not specific to lists."
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
    note: "For an agent created by using SharePoint, blocking affects Microsoft Copilot Chat only. Graph route is beta and needs a Microsoft Agent 365 licence."
  - governs: "A switch that turns Microsoft Lists on or off as an agent knowledge source"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such list-specific setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-01T23:15:50"
changes:
  - date: "2026-11-25"
    note: "First briefing for this roadmap item: documents the Agent Builder list limits, the licensing route, the move of SharePoint and OneDrive agents to Agent Builder, and the available site and agent controls."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 58
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "31db78bce0c47a069b9b11106ea44508"
---

## What's changing

The roadmap item says Microsoft is introducing support for Microsoft Lists as a knowledge source for custom agents in SharePoint and OneDrive. Those agents can then ground their responses in a list stored on a SharePoint site or in your OneDrive.

The roadmap record shows the item as In development with a target of April CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) on the Web platform. That target month has passed and the record still shows In development, so treat the date as a plan and watch the roadmap item for a status change.

Microsoft Learn documents lists as a knowledge source for agents built in Agent Builder. A builder adds a list by pasting the list's own URL (without query parameters) or by choosing **Recent lists** in the file picker, and each agent can use up to one SharePoint list. A list can have a maximum of 20,000 items (rows) and 50 MB of raw text; beyond either limit the agent truncates the list and says so in its response. The **Attachments** column is not used for grounding, and selecting a SharePoint site does not include the lists in it. That page does not name this roadmap item, so it is the nearest documented behaviour rather than a confirmed description of it.

The way agents are created in SharePoint and OneDrive is also changing. Microsoft's upgrade page says that starting in mid-November 2026 you use Microsoft Copilot Agent Builder to create agents for SharePoint and OneDrive, and creating an agent no longer saves a .agent file. Existing .agent files continue to work until the end of March 2027. The roadmap item does not say which of these agent types gets list support.

## Why it matters

Lists often hold structured records such as registers, requests and trackers, so an agent that can read one gives people a new route to that data in conversation. Microsoft's upgrade page says access to an agent does not grant access to its underlying SharePoint or OneDrive content and that users need permission to both the agent and the knowledge sources it uses. In practice, that makes list and site permissions the main control, and any oversharing already present on a list becomes easier to find.

If nobody acts, no source says existing behaviour changes: a builder has to choose a list for an agent. Plan for the first agents that do, because Microsoft Learn describes no way to disable agent creation separately from agents themselves, so your levers are site-level discovery, agent access and agent blocking.

## Risk assessment

**Data exposure**

- A builder can point an agent at one list, and the agent can ground answers in up to 20,000 rows. Review who can open the lists that are likely to be chosen, because the upgrade page says users need permission to both the agent and the knowledge source.
- The Agent Builder page says the agent respects existing permissions and sensitivity labels for files already uploaded to SharePoint or OneDrive. It does not say the same for lists, so confirm label behaviour on a test list before relying on it.
- Restricted Content Discovery on a SharePoint site removes the Agent icon, and Microsoft's page says users cannot add content from that site to any other agents. The setting is not supported for OneDrive sites, so lists in OneDrive sit outside it.

**Security & identity**

- Sharing the agent does not share the list:     The upgrade page says an agent uses agent-level sharing, separate from sharing files on a SharePoint site, so check both when you share an agent.
- The Agent Builder page says that when Restricted SharePoint Search is enabled, you can't use SharePoint as a knowledge source.

**Autonomy & actions**

- The roadmap item describes lists as a knowledge source that agents ground their responses in; it describes no actions on list items.

**Change & support**

- Expect support questions about truncated answers: lists above 20,000 rows or 50 MB are truncated, and attachment contents are not searched.
- Agents created from SharePoint and OneDrive move to Agent Builder from mid-November 2026, and .agent files stop responding after March 2027. Tell builders which route they should use for list-grounded agents.

## Cost and licensing

Microsoft's extensibility prerequisites page says users with Microsoft 365 Copilot licences, and users in tenants with Copilot Studio pay-as-you-go billing enabled (consumed as Copilot Credits), have access to agents with enhanced capabilities such as grounding with SharePoint data. It also says usage billing applies to agents grounded in tenant data, while agents grounded in public data or instructions are free to use.

The meter is Copilot Credits, charged through usage-based billing. The same page points to the Copilot Studio billing rates and management page for rates. This briefing states no rate for lists.

The upgrade page says SharePoint Agents pay-as-you-go applies only to .agent files, and that upgraded agents follow the licensing model for agents in the Microsoft Copilot app. Which of the two applies to a list-grounded agent depends on the agent type, which the roadmap item does not state.

Indirect costs are admin time to review list permissions and builder guidance. To manage spend, see the [spending policies](/concepts/spending-policies/) concept page.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. It lists SharePoint and OneDrive as products and General Availability as the release phase. No rollout mechanism or rollout window is stated in the record.

The documented limits for lists in Agent Builder are one list per agent, 20,000 items and 50 MB of raw text. A builder needs access to the list, and the people who use the agent need access to both the agent and the list.

On licensing, Microsoft's page ties grounding on SharePoint data to a Microsoft 365 Copilot licence or to tenant pay-as-you-go billing. Restricted Content Discovery applies to SharePoint sites only, and Microsoft's Restricted Content Discovery page says it is not supported for OneDrive sites.

## Governance guidance

### Before rollout

- Identify the SharePoint sites and OneDrive lists that hold sensitive rows, and check who can open each, because agent users need permission to the list as well as the agent.
- Decide which SharePoint sites to flag with Restricted Content Discovery (see the controls table) while permissions are reviewed, remembering that it does not cover OneDrive sites.
- Tell agent builders to use the list's own URL, one list per agent, and to expect truncation above 20,000 rows or 50 MB.
- Inventory existing .agent files in SharePoint and OneDrive and agree who owns each, ahead of the end of March 2027 date on the upgrade page.

### At rollout

- Test an agent grounded in a list with a user who can open the agent but not the list, and confirm the answers leave out the list content.
- Check that Restricted SharePoint Search is not enabled where builders are expected to use SharePoint as a knowledge source.
- Confirm which users hold a Microsoft 365 Copilot licence, and whether pay-as-you-go billing is set up for those who do not.

### After rollout

- Review the agent list in the Microsoft 365 admin center and block any agent grounded in a list that should not be reachable (see the controls table).
- Watch the roadmap item and the Agent Builder knowledge sources page for changes to list support, labels and billing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a SharePoint site's content and agent entry points are available to Microsoft Copilot and agents</strong><br><small>Site</small><br><small class="controls__note">SharePoint sites only; not supported for OneDrive sites. Does not change permissions. Existing control, not specific to lists.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">For an agent created by using SharePoint, blocking affects Microsoft Copilot Chat only. Graph route is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch that turns Microsoft Lists on or off as an agent knowledge source</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such list-specific setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Restricted Content Discovery is managed by SharePoint administrators by default; Microsoft's page describes a tenant setting that delegates it to site administrators. It changes discoverability, not permissions, and it can take time to propagate across search and Copilot experiences.

Tenant admins and AI admins can manage actively used agents in the Microsoft 365 admin center. Blocking an agent created by using SharePoint affects its availability in Microsoft Copilot Chat only, while blocking an agent created in Agent Builder also affects other host products. The Graph route is a `/beta/` API and Microsoft's page says it requires a Microsoft Agent 365 licence.

The last row records that Microsoft Learn documents no setting aimed at lists as a knowledge source, so site permissions and the controls above are the available levers at the time of writing (November 2026).

## Open questions

- Will list support reach agents created from SharePoint and OneDrive through Agent Builder only, or also agents in the .agent file format? Watch the roadmap item and the upgrade page.
- Do sensitivity labels and Microsoft Purview DLP policies apply to list content used as knowledge, as the Agent Builder page says they do for files? Watch the Agent Builder knowledge sources page.
- Is a list-grounded agent billed in Copilot Credits at the same rate as other SharePoint-grounded agents? Watch the Copilot Studio billing rates page.
- What controls cover lists stored in OneDrive, given that Restricted Content Discovery is not supported for OneDrive sites?
- When will the status move from In development, given the April CY2026 target has passed? Watch the roadmap item.

<!-- rationale
risk: Medium. A list holds row-level business data that an agent can answer from once a builder picks it; site permissions, Restricted Content Discovery and agent blocking mostly cover this, but no list-specific switch is documented.
cost: Variable. Microsoft Learn says agents grounded in SharePoint data need a Microsoft 365 Copilot licence or pay-as-you-go usage billing consumed as Copilot Credits; a rate specific to lists is a question for Microsoft.
impact: Medium. Agent builders and site owners notice first, followed by anyone who uses an agent grounded in a list; most users see no change until such an agent is shared with them.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls table / consistency: Every control the governance checklist asks readers to check has a controls-table row. | Found: The checklist says 'check who can open each', 'Check that Restricted SharePoint Search is not enabled' and 'Confirm which users hold a Microsoft 365 Copilot licence, and whether pay-as-you-go billing is set up'; the table has only discovery, agent blocking and the missing list switch. | Fix: The checklist's list-permission review, Restricted SharePoint Search check, and licence or pay-as-you-go configuration check have no corresponding controls-table rows. Do not add rows as part of this correction.
-->
