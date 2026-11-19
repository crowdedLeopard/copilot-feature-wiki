---
title: "Dynamics 365 Sales: run multiple Sales Qualification Agents in one environment"
slug: "dynamics-365-sales-lead-management-deploy-multiple-sales-qualification-agents-in-a-single"
roadmapId: 578076
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Sales"]
summary: "Dynamics 365 Sales can run several Sales Qualification Agents in one environment, one per product, region or team. Launched per the roadmap; admins create the agents, and usage draws on Copilot Studio message capacity."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "August CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "The setup page lists a Copilot Studio licence as a prerequisite, and the agent draws on tenant capacity, prepaid or pay-as-you-go. A rate or licence specific to multiple agents is not yet published."
audiences: ["power-platform-admin","service-owner","finops","change-adoption"]
tags: ["dynamics-365","agents","autonomous-agents","copilot-studio","usage-based-billing","power-platform-admin-center","sales-qualification-agent"]
sources:
  - title: "Microsoft 365 Roadmap: Dynamics 365 Sales: Lead management - Deploy multiple Sales Qualification Agents in a single environment"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578076"
    kind: "roadmap"
  - title: "Sales Qualification Agent overview"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-qualification-agent"
    kind: "learn"
  - title: "Set up and configure the Sales Qualification Agent"
    url: "https://learn.microsoft.com/dynamics365/sales/configure-sales-qualification-agent"
    kind: "learn"
  - title: "Configure requirements for Sales Qualification Agent"
    url: "https://learn.microsoft.com/dynamics365/sales/configure-requirements-for-sqa-agent"
    kind: "learn"
  - title: "Configure selection criteria for Sales Qualification Agent"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-qualification-agent-selection-criteria"
    kind: "learn"
  - title: "Prerequisites applicable to all Sales agents"
    url: "https://learn.microsoft.com/dynamics365/sales/prerequisites-for-all-agents"
    kind: "learn"
  - title: "Open the sales qualification settings"
    url: "https://learn.microsoft.com/dynamics365/sales/open-sales-qualification-agent-settings"
    kind: "learn"
  - title: "Manage the Sales Qualification Agent"
    url: "https://learn.microsoft.com/dynamics365/sales/manage-sales-qualification-agent"
    kind: "learn"
  - title: "Monitor leads handled by the Sales Qualification Agent"
    url: "https://learn.microsoft.com/dynamics365/sales/monitor-leads-by-sales-qualification-agent"
    kind: "learn"
  - title: "Manage consumption-based billing"
    url: "https://learn.microsoft.com/dynamics365/sales/copilot-consumption-based-billing"
    kind: "learn"
  - title: "Import an agent into a target environment"
    url: "https://learn.microsoft.com/dynamics365/sales/import-export-agent-solutions"
    kind: "learn"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
videos: []
related: ["dynamics-365-sales-an-agentic-home-for-all-sales-ai","m365-copilot-sales-development-agent-is-now-available","data-policies"]
controls:
  - governs: "Whether AI agents can be configured and used in Dynamics 365 Sales environments"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Dynamics 365 Sales > AI Agents"
      docs: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    api: null
    note: "Tenant admin setting by environment or environment group. Covers the out-of-the-box Sales agents; the page does not mention multi-agent."
  - governs: "Stopping an agent so it no longer processes new leads"
    scope: "agent"
    ui:
      surface: "Sales Hub app"
      path: "Change area > App Settings > General settings > Dynamics 365 AI hub > Agent manager > Create and manage agent > agent > Stop agent"
      docs: "https://learn.microsoft.com/dynamics365/sales/manage-sales-qualification-agent"
    api: null
    note: "Stopping keeps the configuration. Learn says a started agent cannot be deleted without Microsoft Support."
  - governs: "Supervisor view of leads handled, disqualified and handed over by the agent"
    scope: "environment"
    ui:
      surface: "Sales Hub app"
      path: "App settings > General settings > Dynamics 365 AI hub > AI optimization hub > See insights > Sales Qualification Agent"
      docs: "https://learn.microsoft.com/dynamics365/sales/monitor-leads-by-sales-qualification-agent"
    api: null
    note: "Page describes the dashboard for the Sales Qualification Agent; it does not describe a cross-agent view."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-23T22:46:11"
changes:
  - date: "2026-11-19"
    note: "New briefing: multiple Sales Qualification Agents per Dynamics 365 Sales environment, with the admin setting, stop and monitoring controls and the capacity billing that apply today."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 85 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 82
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "715c0c535efa0cbfbffbe37b71d98772"
---

## What's changing

The roadmap item says an organisation can deploy several Sales Qualification Agents in one Dynamics 365 Sales environment, each aimed at a product line, region or sales team, instead of one agent for every lead. The Sales Qualification Agent is an AI agent that researches leads and, in Research and engage mode, emails them and hands promising ones to sellers. Microsoft Learn documents that agent, but has no page on running several of them at the time of writing (November 2026), so what follows about multi-agent behaviour is the roadmap's description.

The roadmap item lists five behaviours. Each agent has its own ideal customer profile, knowledge sources, templates and consent settings. Incoming leads are checked against agent selection criteria and assigned by configured priority, with a fallback agent for leads that match no specialised criteria. Only one agent engages a lead at a time, and the system hands a lead to another agent, with context, when its interest moves to another product or segment. Agents can share company-level knowledge alongside their own sources. A centralised dashboard lets supervisors monitor activity, reassign leads and follow the qualification journey across agents. The item gives the audience as "Enabled by admins/makers/marketers for end users".

Learn documents the single-agent pieces these build on. Its selection criteria page says the priority of the segment created for an agent is "always low and one above the default segment" and warns that leads overlapping segments used for seller work assignment go to sellers instead of the agent. Its import page refers to agent profiles and advises one solution per profile. Neither page describes routing between several agents.

The roadmap record gives the status as Launched, with a preview date of August CY2026 and a target date of September CY2026. It lists General Availability and Preview as release phases without saying which behaviours sit in which, and lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

Multi-agent turns lead qualification from one rule set into several. The administrator becomes responsible for how leads are split between agents, what each agent is allowed to say, and which capacity pays for the work. The routing decision matters most: the roadmap says a fallback agent takes leads that match nothing else, and Learn warns that a segment overlapping seller work-assignment segments sends leads to sellers instead of the agent, so the segments need to be designed together with sales leadership rather than agent by agent.

If nobody acts, no source says existing single-agent set-ups change. Learn documents an administrator creating and starting an agent, so the exposure comes from the decision to add agents, not from the feature arriving. Because every agent draws on the same tenant capacity, spend and the risk of outreach errors grow with the number of agents started.

## Risk assessment

**Data exposure**

- Learn's prerequisites include accepting data movement under Generative AI features > Move data across regions in the Power Platform admin center, a one-time step that sits behind every Sales agent. Confirm that your organisation accepts that before adding agents.
- The setup page lists a knowledge-source connector for SharePoint or OneDrive that is needed if an agent is configured to use internal documents for enrichment. Because the roadmap gives each agent its own knowledge sources, check which documents each agent is pointed at.

**Security & identity**

- The setup page has an administrator create an Azure application and a Dataverse app user with the AISalesPerson role so the agent can act independently, for example send emails and own records. Confirm whether each additional agent needs its own app user or shares one before creating it.
- The selection criteria page says a new lead's owner must not be the app user used to create the agent. Review lead ownership before adding agents that read different segments.

**Autonomy & actions**

- In Research and engage mode the agent sends outreach and follow-up emails, evaluates fit and can disqualify leads. The roadmap gives each agent its own templates and consent settings, so each agent's email instructions need their own review.
- Stop agent (row 2 of the controls table) halts an agent: Learn says new leads and leads in process are not processed afterwards, while leads already processed stay available.

**Change & support**

- The manage page says that once an agent is configured and started it cannot be deleted; deletion goes through Microsoft Support. Plan agent names and segments before starting them.
- Edits to an agent apply to new leads; leads already processed on earlier settings are not reprocessed, so a routing change does not fix leads already handled.
- The billing page says message capacity on the Power Platform environment is consumed by Dynamics 365 Sales environments and other Microsoft services on the tenant, so a heavy agent can use capacity others need.

## Cost and licensing

**Licence.** The setup page lists "You have a Copilot Studio license" among the Sales Qualification Agent prerequisites and links to Copilot Studio licensing. The overview says the agent uses the capacity assigned to your tenant to process leads and generate insights.

**Meter.** The billing page says selected Copilot and agent capabilities in Dynamics 365 Sales use consumption-based billing, charging per use, with Microsoft Copilot Studio messages as the billing unit. You can use prepaid capacity (Copilot Studio message packs) or pay-as-you-go. Both models need the Dynamics 365 Sales environment linked to a Power Platform environment, and prepaid capacity is consumed first. The page points to the Power Platform Licensing Guide for billing and rates.

**Limits.** For depleted quota, the page says the AI capability is unavailable until more capacity is added, and that Dynamics 365 Sales sends in-app notifications when quota is low or depleted. For pay-as-you-go, it points to Microsoft Cost Management in the Azure portal to view usage and adjust spending limits (budgets).

**Indirect costs.** Research and engage mode also needs a shared mailbox and server-side synchronisation between Dynamics 365 Sales and Exchange, plus admin time for each agent's profile, selection criteria, email instructions, handoff criteria and assignment rules.

**Not yet published.** A message rate or licence specific to running several Sales Qualification Agents in one environment.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, and gives the audience as "Enabled by admins/makers/marketers for end users". The record gives no GCC, GCC High or DoD availability.

Learn's prerequisites page has the common Sales-agent set-up done by someone holding the Power Platform administrator role, and the setup page also requires admin permissions in Dynamics 365 Sales. Creating the agent's Dataverse app user needs the System Administrator role for the Dynamics 365 organisation. Other prerequisites on the setup page include the modern UI for the Sales Hub app, data policies that allow the connectors it lists, in-app notifications, and (for Research and engage) server-side synchronisation with Exchange.

Sellers receive leads handed over by an agent, and supervisors monitor them. The roadmap item does not say whether additional agents roll out gradually.

## Governance guidance

### Before rollout

- Check the AI Agents setting in the Power Platform admin center for each environment or environment group that will host agents (controls table, row 1). Learn says AI capabilities are turned on by default in all environments.
- Confirm that the person creating agents holds the Power Platform administrator role and admin permissions in Dynamics 365 Sales that the prerequisites pages require.
- Draw up with sales leadership the segments (product, region, team) and the selection criteria for each, so that none overlaps the segments used for seller work assignment.
- Ask your Microsoft licensing contact for message rates from the Power Platform Licensing Guide that the billing page links to, and agree whether prepaid capacity or pay-as-you-go pays for the agents.

### At rollout

- Create each agent from the Agent manager in the Dynamics 365 AI hub, choosing Research, or adding Engage where the agent should email leads.
- Test each new agent on a small scale before production, as the setup page recommends, using test leads that match and do not match its selection criteria.
- Tell sellers and supervisors which agent handles which segment, and where handed-over leads appear.

### After rollout

- Review the supervisor dashboard (controls table, row 3) and the leads disqualified by an agent, and reassign any worth pursuing.
- Stop an agent (controls table, row 2) if its outreach goes wrong, and remember Learn says a started agent cannot be deleted without Microsoft Support.
- Watch the capacity notifications and consumption in the Power Platform admin center, as quota depletion makes the AI capability unavailable.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI agents can be configured and used in Dynamics 365 Sales environments</strong><br><small>Environment</small><br><small class="controls__note">Tenant admin setting by environment or environment group. Covers the out-of-the-box Sales agents; the page does not mention multi-agent.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Dynamics 365 Sales › AI Agents <a href="https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Stopping an agent so it no longer processes new leads</strong><br><small>Agent</small><br><small class="controls__note">Stopping keeps the configuration. Learn says a started agent cannot be deleted without Microsoft Support.</small></td><td data-label="Admin UI"><strong>Sales Hub app</strong><br>Change area › App Settings › General settings › Dynamics 365 AI hub › Agent manager › Create and manage agent › agent › Stop agent <a href="https://learn.microsoft.com/dynamics365/sales/manage-sales-qualification-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Supervisor view of leads handled, disqualified and handed over by the agent</strong><br><small>Environment</small><br><small class="controls__note">Page describes the dashboard for the Sales Qualification Agent; it does not describe a cross-agent view.</small></td><td data-label="Admin UI"><strong>Sales Hub app</strong><br>App settings › General settings › Dynamics 365 AI hub › AI optimization hub › See insights › Sales Qualification Agent <a href="https://learn.microsoft.com/dynamics365/sales/monitor-leads-by-sales-qualification-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Row 1 is a tenant administrator setting. Its page says it turns the out-of-the-box Sales AI agents, such as the Sales Qualification Agent and Sales Close Agent, on or off by environment or environment group, and that turning a capability off turns the features off in Dynamics 365 Sales. It is the broadest switch, not a per-agent one.

Rows 2 and 3 live in the Sales Hub app, not an admin centre. Stop agent acts on an agent and keeps its configuration. The dashboard's supervisor views are also available to sellers unless the EnableRoleBasedSystemViews setting is set to true; sellers see only leads they have access to under their security roles.

Learn documents no setting that is specific to multi-agent routing, such as the priority between agents or the fallback agent, at the time of writing (November 2026). Until it does, routing is set through each agent's selection criteria and assignment rules.

## Open questions

- How are leads routed when several agents' selection criteria match, and how is the fallback agent chosen? Watch the Sales Qualification Agent pages on Microsoft Learn.
- Does each additional agent need its own Azure application, Dataverse app user and shared mailbox, or can agents share them?
- Is there a separate licence or message rate for additional agents, or does each draw on the same Copilot Studio message capacity as a single agent?
- Which behaviours in the roadmap item are generally available and which remain in preview, given that both phases are listed?
- How does the handoff between agents interact with the existing handoff to sellers and with the supervisor's reassign action?

<!-- rationale
risk: Medium. In Research and engage mode an agent emails leads on its own, and several agents multiply that; Learn documents an admin creating and starting each agent, so nothing runs until someone sets it up.
cost: Variable. The agent uses Copilot Studio message capacity, prepaid or pay-as-you-go; a rate or licence specific to running several agents is not yet published.
impact: Medium. Sales teams, sellers and supervisors using the agents see leads routed, handed over and reassigned; users outside sales qualification do not.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing / behaviour: Previously one agent served every lead. | Found: Searched: '"Sales Qualification Agent" "one agent" "environment"'; opened configure-sales-qualification-agent and sales-qualification-agent-selection-criteria. They describe selected leads, not a historical requirement for one agent to serve every lead. | Fix: Remove 'instead of one agent for every lead'. The roadmap describes multiple agents but does not state that historical restriction.
- [contradicted, blocker] Governance controls: final sentence / applicability: Until multi-agent settings are documented, inter-agent routing is set through each agent's selection criteria and assignment rules. | Found: Once the leads are qualified based on the handover criteria, the agent hands them over to sellers or teams based on your selection. | Fix: Replace the final sentence with: 'Learn documents selection criteria for assigning leads to an agent and assignment rules for handing processed leads to sellers or teams; these pages do not document configuring priority or fallback between agents.' Cite https://learn.microsoft.com/dynamics365/sales/sales-qualification-agent-selection-criteria and https://learn.microsoft.com/dynamics365/sales/configure-sqa-assignment-rules. | Source: https://learn.microsoft.com/dynamics365/sales/configure-sqa-assignment-rules
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: The manage page says new and in-process leads are not processed after stopping. | Found: However, new leads and leads that are in process will not be processed. | Fix: Append: 'Microsoft documentation conflicts here: the setup page says existing leads already in orchestration continue until seller handover or supervisor review, so do not assume Stop agent immediately halts in-flight outreach.' Cite https://learn.microsoft.com/dynamics365/sales/configure-sales-qualification-agent#considerations. | Source: https://learn.microsoft.com/dynamics365/sales/manage-sales-qualification-agent
- [supported, minor] controls[0].ui / admin-path: Power Platform admin center > Copilot > Settings > Dynamics 365 Sales > AI Agents reaches the availability setting. | Found: On the Settings page, under Dynamics 365 Sales, select one of the following AI capabilities that you want to turn on | Fix: Complete the path in front matter and the rendered row as 'Copilot > Settings > Dynamics 365 Sales > AI Agents > environment or environment group > Edit setting > On'. The current path reaches the setting panel but omits editing and the switch. | Source: https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub
- [contradicted, minor] Governance guidance; controls / consistency: The checklist directs readers to configure selection criteria and monitor capacity, but neither control appears in the controls table. | Found: Draw up ... the selection criteria for each ... Watch the capacity notifications and consumption in the Power Platform admin center | Fix: The selection-criteria checklist step and capacity-monitoring checklist step have no corresponding controls-table rows. Keep this as a recorded coverage gap; do not add unverified rows as part of this correction.
-->
