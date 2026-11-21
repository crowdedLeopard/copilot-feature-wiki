---
title: "Sales Development agent: connect to Salesforce CRM through the Salesforce MCP server"
slug: "m365-copilot-integrate-the-sales-development-agent-with-salesforce"
roadmapId: 574105
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The Sales Development agent can work against Salesforce leads instead of Dynamics 365 Sales, reading and updating Lead records and logging emails. Admins control who creates agent instances; the connection is made in Teams."
status: "rolling-out"
releasePhase: ["Current Channel"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "high"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn requires the subscriptions and licences for Microsoft 365, Microsoft 365 Copilot and Microsoft Teams, and says the agent user needs a Salesforce licence. A price or meter specific to the Sales Development agent is not yet published."
audiences: ["m365-admin","service-owner","security"]
tags: ["sales-development-agent","salesforce","mcp","mcp-server","agent-365","frontier-program","autonomous-agents","write-actions","outreach-email","integration"]
sources:
  - title: "Microsoft 365 Roadmap 574105"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574105"
    kind: "roadmap"
  - title: "Integrate the Sales Development agent with Salesforce (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/integrate-with-salesforce"
    kind: "learn"
  - title: "Sales Development agent overview (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/sales-development-agent-overview"
    kind: "learn"
  - title: "Activate Sales Development agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    kind: "learn"
  - title: "Sales Development agent architecture"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/architecture"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Manage agent instances in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances"
    kind: "learn"
  - title: "Manage consumption-based billing for agent capabilities"
    url: "https://learn.microsoft.com/dynamics365/sales/copilot-consumption-based-billing"
    kind: "learn"
  - title: "Which users or groups can create Sales Development agent instances (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate"
    kind: "learn"
  - title: "Whether the agent is blocked for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["m365-copilot-sales-development-agent-is-now-available","dynamics-365-sales-seller-experiences-clone-and-share-sales-development-agent-configuratio","m365-copilot-sales-development-agent-meeting-scheduling","mcp","frontier-program"]
controls:
  - governs: "Which users or groups can create Sales Development agent instances"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Sales Development (Frontier) > Activate"
      docs: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate"
    note: "AI Administrator or Global Administrator. The request body sets agentManagerScope. The API page describes agent templates generally, not this agent."
  - governs: "Whether the agent is blocked for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocks the Copilot package whose id is passed; the API page does not name this agent. Does not necessarily revoke the Salesforce connection."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-21"
    note: "New briefing: the Sales Development agent can use Salesforce as its CRM through the Salesforce MCP server; Learn documents the set-up as preview."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 79 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 75
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "9c94df4ce2780afdd4862fba2ba180fe"
---

## What's changing

The Sales Development agent can now use Salesforce as its CRM. The roadmap item says the agent can access leads, manage prospect records, log sales activities and keep qualification, disqualification and ownership changes connected to the CRM workflow, using Microsoft's Salesforce Model Context Protocol (MCP) server.

Microsoft Learn documents the set-up for this integration. An admin activates the agent, a user asks the agent in a Microsoft Teams chat to connect to Salesforce, a Salesforce user authorises the Salesforce MCP server in a simplified Power Platform maker portal, and the agent's manager shares that connection with the agent instance. In Salesforce the agent then reads Lead records, updates `Lead.Status` to qualify or disqualify, updates `Lead.OwnerId` to transfer a lead to a seller, and creates Task records to log email interactions.

Each agent instance connects to one CRM at a time, so a team that uses both Dynamics 365 Sales and Salesforce needs separate instances. Learn marks the integration page and the agent's overview as preview documentation and says preview features are not meant for production use. The roadmap record lists the item as Rolling out, with a target of October CY2026, in the Current Channel on the web, for Worldwide (Standard Multi-Tenant). The overview page says the agent is available to customers who opt into the Microsoft 365 Targeted release program.

## Why it matters

This connects an autonomous outreach agent to a system of record outside Microsoft 365. Learn says the agent, once launched, runs autonomously until stopped and sends email at all hours including weekends, and the Salesforce integration lets it change lead qualification and ownership in a live CRM, not only draft messages.

Nothing in the sources says the integration connects on its own. The agent has to be activated by an admin for selected users or groups, and a Salesforce connection has to be authorised and shared before the agent touches Salesforce. The decisions that fall to you are who may create instances, which Salesforce permissions the agent user holds, and whether a preview agent should write to production CRM data.

## Risk assessment

**Data exposure**

- The agent user and the user who authorises the connection both need Lead object Read, Create and Edit, Task object Create, and User object Read, plus API access on the profile. Grant the agent user no more than the permissions Learn lists, because anything it holds in Salesforce is reachable through the MCP server.
- Learn says the connection is stored as a secure connection record in the organisation's Microsoft Compliant Container (MCC) and that the agent communicates with Salesforce through a managed server that handles authentication on its behalf.

**Security & identity**

- Any Salesforce user with the required permissions can authorise the connection, and an agent can receive a shared connection only from its agent manager. Learn does not say which Salesforce account's permissions apply when the agent acts, so confirm that before relying on either account's profile as the limit.
- Learn says the agent runs under its own Microsoft Entra Agent ID identity, so Entra-side controls on that identity apply separately from the Salesforce profile.

**Autonomy & actions**

- The agent writes to Salesforce: it changes `Lead.Status`, reassigns `Lead.OwnerId` and creates Task records. Learn lists human oversight as "Once launched, runs autonomously until stopped", so the controls are stopping the agent (see the controls table) and limiting the Salesforce permissions it holds.
- Learn warns that if the agent cannot access the Email Opt Out field it might contact the lead. Confirm the agent user has field access to Email Opt Out on Lead and Contact before outreach starts.

**Change & support**

- The agent uses the default Salesforce `Lead.Status` values, Closed - Converted and Closed - Not Converted, and Learn says custom picklist mapping is not currently supported. Organisations with custom status values will see mismatches.
- The documentation is preview and subject to change, and the roadmap item says Rolling out. Expect set-up steps and limits to move.

## Cost and licensing

**Licence.** The activation page says that before you can use the Sales Development agent you need the required subscriptions and licences for Microsoft 365, Microsoft 365 Copilot and Microsoft Teams, that Copilot Frontier is enabled in the Microsoft 365 admin center, and that users who create agent instances are enabled for Frontier features. For the Agent 365 public preview it describes purchasing a $0 Agent 365 SKU that includes a licence for 25 agent instances.

**Salesforce.** The integration page says that, like other users, the agent user needs a licence to access Salesforce, and that the Salesforce organisation needs API access, which it says is typically available with Enterprise and Unlimited editions, or with Professional edition and the API add-on. That is a cost on the Salesforce side.

**Meter.** Microsoft's consumption billing page for Dynamics 365 Sales names Sales Qualification Agent, Sales Opportunity Agent, Sales Close Agent and Recommended Actions Agent as the sales agents whose consumption you can monitor. A meter, credit rate or price specific to the Sales Development agent is not yet published.

## Scope

**Who.** Admins with the AI Administrator or Global Administrator role in the Microsoft 365 admin center activate the agent and choose which users or groups can create instances. Learn says all users can see the agent in the Agent Store but only users with explicit access can activate an instance. The Global Administrator role is needed to enable the Agent 365 public preview.

**Where.** The roadmap record lists Worldwide (Standard Multi-Tenant), the Current Channel and the web. Learn describes the chat as a 1:1 Teams chat between the agent's creator and the agent.

**Prerequisites.** A Salesforce organisation with API access enabled, Salesforce credentials for a user who can authorise the connection, and a fully provisioned Sales Development agent instance that you can chat with in Teams.

## Governance guidance

### Before rollout

- Decide whether a preview agent may write to production Salesforce data, and if not, point a Salesforce sandbox or test users at the first instance.
- Review who should be able to create instances, and plan the users or groups for the activation step (first row of the controls table).
- Ask the Salesforce administrator to create a profile or permission set for the agent user with only Lead Read, Create and Edit, Task Create, User Read and API access, plus field access to Email Opt Out.
- Check whether your Salesforce organisation uses custom `Lead.Status` values, because custom picklist mapping is not supported.

### At rollout

- Activate Sales Development (Frontier) only for the users or groups that will run it, using an AI Administrator or Global Administrator account (first row of the controls table).
- Confirm that the Microsoft 365 admin center Copilot > Settings > Copilot Frontier setting and the user's Frontier access are in place for the people creating instances.
- Have the agent manager share the Salesforce connection with the agent instance and confirm the Can use role is assigned.

### After rollout

- Check Salesforce Lead records for unexpected status, owner and Task changes made by the agent user, and check that leads with Email Opt Out set are not contacted.
- Keep the stop option ready: block the agent for the organisation (second row of the controls table) or block a single instance from its Instances tab in the Microsoft 365 admin center.
- Disconnect Salesforce by asking the agent in Teams if the integration should end.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users or groups can create Sales Development agent instances</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. The request body sets agentManagerScope. The API page describes agent templates generally, not this agent.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Sales Development (Frontier) › Activate <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the agent is blocked for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Blocks the Copilot package whose id is passed; the API page does not name this agent. Does not necessarily revoke the Salesforce connection.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The activation and block actions are Microsoft 365 admin center controls over the agent, not over the Salesforce connection. Learn says approving or blocking an agent does not necessarily grant or revoke connected-service permissions or credentials, so a blocked agent can still leave a Salesforce connection in place; review that connection separately.

To stop one instance rather than the whole agent, the instance page says to go to Agents > All Agents, select the agent, open the Details tab then the Instances tab, select an instance and choose Block, and that blocking an instance stops it and any actions it's performing ([Manage agent instances](https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances)). The Salesforce-side permissions (profile, permission set, field access) are set in Salesforce, which this site does not document.

The Graph package calls need a Microsoft Agent 365 licence and are beta APIs.

## Open questions

- Which licence and meter will cover the Sales Development agent after the preview, and will the $0 Agent 365 SKU remain? Watch the Learn activation page and Message center.
- Whose Salesforce permissions apply when the agent acts: the authorising user's or the agent user's? Learn lists the same permissions for both but does not say which is used at runtime.
- Does the Graph package block or activate call apply to the Sales Development (Frontier) agent? The API pages describe Copilot packages and do not name this agent.
- When will the integration leave preview, and will custom Salesforce Lead.Status picklist mapping be supported? Watch the integration page on Microsoft Learn.

<!-- rationale
risk: High. The agent runs autonomously once launched and, through the Salesforce MCP server, can change Lead status and owner and create Task records; the integration is documented as a preview.
cost: Medium. Learn lists Microsoft 365 Copilot and Teams licences as prerequisites and says the agent user needs a Salesforce licence; a meter specific to this agent is not yet published.
impact: Low. Only the sales managers who create agent instances and the Salesforce users who authorise the connection work with it directly; admins notice it through activation and blocking.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] licensing.notes; Cost and licensing: Meter; rationale: cost / absence: A meter, credit rate or price specific to the Sales Development agent is not yet published. | Found: Sales Development Agent and Service Agent ... December 1, 2026 ... Consumption billing begins when each product becomes available. ... a recurring charge of 100 Copilot Credits per agent per month. | Fix: Replace the unpublished-meter statements with: 'Microsoft publishes Copilot Credit billing for Sales Development Agent resources in Frontier Public beginning December 1, 2026: 100 Copilot Credits per agent per month for the agent account, email address and persistent Microsoft 365 resources, plus consumption billing for agent activity. The person responsible for the agent must have consumption billing enabled.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents. Retain the activation page's $0 SKU description as that page's preview guidance; do not imply that the December charges are already active on November 21. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [unsupported, blocker] Risk assessment: Data exposure / applicability: Anything the agent user holds in Salesforce is reachable through this MCP server. | Found: Searched: "Sales Development agent" "Salesforce" "MCP" "permissions" all objects. Opened Salesforce integration, overview and architecture; they give required permissions and particular actions, not unrestricted reach across everything the agent user can access. | Fix: Remove ', because anything it holds in Salesforce is reachable through the MCP server'. Keep the least-privilege advice, the documented permission list and the separate open question about whose Salesforce permissions apply at runtime.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The medium cost rating describes the documented cost of this capability. | Found: Page: cost: medium; 'a meter specific to this agent is not yet published.' Microsoft: 'All charges are billed consumptively via Copilot Credits'; Sales Development Agent public preview: December 1, 2026. | Fix: Set cost to variable under the standard's metered-cost definition. Replace the rationale with: 'Variable. Microsoft publishes Copilot Credit billing for Sales Development Agent resources beginning December 1, 2026, including 100 Copilot Credits per agent per month plus consumption billing for agent activity; Salesforce licensing is also required.' Cite the Microsoft 365 Resources for Agents page and distinguish this upcoming billing from the activation page's $0 preview SKU. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft 365 admin center > Agents > All Agents > Sales Development (Frontier) > Activate leads to activation. | Found: In the Microsoft 365 admin center, go to Agents > All Agents. Search for Sales Development (Frontier), and then select Activate. Choose the users or groups that can create Sales Development agent instances. | Fix: Keep the path, but add to controls[0].note: 'After selecting Activate, choose the users or groups that can create instances and apply a policy template that allows agent instance creation.' The path stops at the start of the documented activation workflow. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent
- [supported, minor] controls[0].api; Governance controls table / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate sets the manager audience through agentManagerScope. | Found: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate agentManagerScope ... Required. The users or groups allowed to create instances from this template. | Fix: Keep the call and agentManagerScope note, and add: 'This is a reviewed beta contract; availability depends on the matching schema and backend release.' The reference explicitly distinguishes its reviewed contract from deployed availability. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate
- [supported, minor] front matter: defaultState; What's changing; Why it matters / default: The integration is admin-opt-in: administrator activation precedes instance creation and Salesforce needs a configured connection. | Found: An administrator must activate the Sales Development agent in the Microsoft 365 admin center before you can create an instance. | Fix: Retain admin-opt-in and cite https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/create-instance in sources for the explicit administrator-activation prerequisite. The existing Salesforce integration source supplies the connection and sharing steps. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/create-instance
- [supported, minor] front matter: licensing.model / licensing: The licensing model is mixed. | Found: charges are billed consumptively via Copilot Credits. ... Public Preview requires enrollment in the Frontier program, which requires the tenant to have at least one Microsoft 365 Copilot or E7 license. | Fix: Keep mixed, add https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents to sources, and include its published consumption billing beginning December 1, 2026 in licensing.notes. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, minor] Governance guidance; Governance controls table / consistency: Every control that the governance checklist instructs readers to configure or check appears in the controls table. | Found: Checklist: 'Copilot > Settings > Copilot Frontier'; 'Can use role'; Salesforce profile and field permissions; 'block a single instance'; 'Disconnect Salesforce'. Table: creation audience and organisation-wide blocking only. | Fix: Remove the checklist instructions to set Salesforce profile/field permissions, check Copilot Frontier and user Frontier access, share the connection/check Can use, block an individual instance, and disconnect Salesforce from Governance guidance. These controls have no table rows; their already documented descriptive guidance can remain elsewhere. Do not add new control rows as part of this correction.
-->
