---
title: "Microsoft 365 Copilot: Sales Development agent books seller meetings for prospects"
slug: "m365-copilot-sales-development-agent-meeting-scheduling"
roadmapId: 575289
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The Sales Development agent will book a seller meeting from a prospect's preferred times. Sales teams using the agent are affected; licensing and default are not published, so admins should check who can activate it."
status: "in-development"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this capability. The preview activation page lists subscriptions and licences for Microsoft 365, Microsoft 365 Copilot and Microsoft Teams, plus Copilot Frontier, as prerequisites."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["sales-development-agent","agent-365","agents","autonomous-agents","m365-copilot","m365-admin-center","agent-registry"]
sources:
  - title: "Microsoft 365 Roadmap 575289"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575289"
    kind: "roadmap"
  - title: "Sales Development agent overview (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/sales-development-agent-overview"
    kind: "learn"
  - title: "Activate Sales Development agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    kind: "learn"
  - title: "Onboard the Sales Development agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/onboard-agent"
    kind: "learn"
  - title: "Manage Microsoft Agent 365 agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
videos: []
related: ["agent-identity","mcp","dynamics-365-sales-an-agentic-home-for-all-sales-ai"]
controls:
  - governs: "Who can activate the Sales Development agent and create instances"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Sales Development (Frontier) > Activate"
      docs: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    api: null
    note: "Preview page. Needs AI Administrator or Global Administrator. Activation lets you choose users or groups and apply a policy template."
  - governs: "Blocking the Sales Development agent for the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents"
    api:
      kind: "graph"
      call: "POST /copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview"
    note: "General control: Microsoft has not confirmed the Sales Development agent is a package in this API. API is preview and needs an Agent 365 licence."
  - governs: "A switch for the meeting-scheduling capability alone"
    scope: "agent"
    ui: null
    api: null
    note: "No page documents one at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap item for Sales Development agent meeting scheduling, with the preview documentation for activating and blocking the agent."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 69 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 63
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "1506e4a2d0ba644fe0d0134671a040d0"
---

## What's changing

The roadmap item says the Sales Development agent will be able to turn a prospect's interest in meeting into a booked seller meeting. It asks the prospect for preferred dates and times, checks them against the appropriate seller's calendar and books the first valid option in the prospect's stated order. The seller and the prospect both receive the invitation, and the seller gets extra conversation context for a warm handoff. If scheduling cannot be completed, the agent transfers the request and context to the seller.

Microsoft Learn does not describe this scheduling capability yet, so the paragraph above is the roadmap's description. Learn does describe the agent itself, in pages marked preview: it automates sales outreach and prospect management in Microsoft Teams, and is activated by an administrator in the Microsoft 365 admin center as a template agent under Microsoft Agent 365. The preview overview lists current limitations, including that the agent interacts only through email and Teams chats, replies only to email threads it started, and runs autonomously once launched until stopped. Those limitations describe the preview and may differ when scheduling ships.

The roadmap item is In development with a target of November CY2026, release phases Current Channel and General Availability, platform Web, and cloud Worldwide (Standard Multi-Tenant). The target is Microsoft's plan, not a commitment.

## Why it matters

This moves the agent from sending email to committing a seller's time. A booked meeting puts an invitation in front of an external prospect and an entry on a real calendar, so mistakes are visible outside the organisation. The wiki's view is that service owners should treat scheduling as an extra write action on an agent that is already autonomous, and decide who may run one.

Microsoft has not stated what happens on arrival: the roadmap and Learn do not say whether scheduling is on for existing agent instances or needs a setting. Until it does, plan on the basis that no source says existing agents change, and check the roadmap item and the Learn pages before the November CY2026 target.

## Risk assessment

**Data exposure**

- The agent chooses which seller's calendar to evaluate and shares conversation context with that seller. Microsoft has not said what calendar detail the prospect sees or which calendar permission is used; the preview permissions list on the overview page names mail, Teams, files, sites and MCP server permissions, and no calendar-specific entry.
- Content shared with an agent can be summarised or included in its responses to other users, including people without access to that content, regardless of sensitivity labels, per the preview onboarding page. Keep confidential product material out of the agent's product knowledge.

**Security & identity**

- The preview page says creating an instance provisions a dedicated agent identity with a Teams account, Exchange mailbox, OneDrive and SharePoint resources. See [Agent identity](/concepts/agent-identity/) for how agent identities differ from the permissions of the person who manages them.
- The preview overview lists broad Microsoft Graph permissions for the agent, such as Mail.Send, Files.ReadWrite.All and Sites.ReadWrite.All. Review these before activating.

**Autonomy & actions**

- Once launched, the agent runs autonomously until stopped, per the preview limitations table. Scheduling adds a booking step to that autonomy, and the roadmap describes no seller approval before the booking.
- The preview page says the agent sends emails at all hours, including weekends; meeting requests could reach prospects at those times unless send times are configured.

**Change & support**

- Expect sellers to ask why meetings appear on their calendars. Tell them the agent books the first valid option in the prospect's stated order, as the roadmap describes.
- If scheduling fails the roadmap says the agent hands the request and context to the seller, so sellers need a way to pick those up.

## Cost and licensing

Microsoft has not published a licence or meter for the meeting-scheduling capability. The preview activation page lists these prerequisites: the required subscriptions and licences for Microsoft 365, Microsoft 365 Copilot and Microsoft Teams, and Copilot Frontier enabled in the Microsoft 365 admin center. It also says to purchase the $0 Agent 365 SKU, which includes a licence for 25 agent instances, when enabling the Agent 365 public preview. That is preview-period guidance and is not a statement of general-availability pricing.

The Agent 365 overview page says Microsoft Agent 365 is licensed on a per-user basis, and refers to Microsoft's pricing pages. Whether the Sales Development agent at general availability needs an Agent 365 licence, a Copilot licence or Copilot Credits is not yet published. Indirect costs are admin time to scope activation and seller time to handle handoffs.

## Scope

The roadmap item lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and the Current Channel and General Availability release phases. It does not list US Government clouds.

The preview overview page says the agent is available to customers who opt into the Microsoft 365 Targeted release program, for the whole organisation or selected users. Activation needs the AI Administrator or Global Administrator role in the Microsoft 365 admin center; enabling the Agent 365 public preview needs the Global Administrator role in Microsoft Entra ID. All users can see the agent in the Agent Store, but only users with explicit access can activate an instance. Whether scheduling needs the same prerequisites is not stated.

## Governance guidance

### Before rollout

- Decide which sales teams may run a Sales Development agent and whether scheduling on sellers' calendars is acceptable to them; the activation step in the Microsoft 365 admin center lets you choose users or groups.
- Review the permissions the agent requests during activation, in particular Mail.Send, Files.ReadWrite.All and Sites.ReadWrite.All on the preview overview page.
- Confirm with Microsoft's documentation, when it appears, which calendar access the agent uses and whether the scheduling capability can be switched off separately from the agent.

### At rollout

- Activate the agent only for the chosen users or groups, with a policy template that allows instance creation.
- Tell sellers that the agent may place meetings on their calendars and send them handoff context, and agree who picks up requests the agent cannot schedule.
- Check send-time configuration for outreach so meeting requests do not go to prospects at unwanted hours.

### After rollout

- Review the agent registry for instances and owners under Agents > All Agents.
- Block the agent or an instance if booked meetings show wrong or unauthorised behaviour; blocking an agent turns off all instances created under it.
- Watch the roadmap item and the Sales Development agent pages on Learn for documentation of the scheduling capability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can activate the Sales Development agent and create instances</strong><br><small>Tenant</small><br><small class="controls__note">Preview page. Needs AI Administrator or Global Administrator. Activation lets you choose users or groups and apply a policy template.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Sales Development (Frontier) › Activate <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Blocking the Sales Development agent for the organisation</strong><br><small>Agent</small><br><small class="controls__note">General control: Microsoft has not confirmed the Sales Development agent is a package in this API. API is preview and needs an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for the meeting-scheduling capability alone</strong><br><small>Agent</small><br><small class="controls__note">No page documents one at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The activation step is documented for the Microsoft 365 admin center and needs the AI Administrator or Global Administrator role. At the time of writing (November 2026), Microsoft Learn documents no API for activating the Sales Development agent or choosing who can create instances.

The Block action works on the agent as a whole. The Learn page says blocking an agent turns off all instances created under it; the page also documents blocking individual instances in the same Agents > All Agents area. The Package Management API lists block, unblock and reassign operations for packages, but Microsoft has not confirmed that the Sales Development agent appears as a package there, and the API requires a Microsoft Agent 365 licence. No page documents a switch that disables only meeting scheduling.

## Open questions

- Is meeting scheduling on or off for existing Sales Development agent instances when it ships, and which setting, if any, controls it? Watch the roadmap item and the Sales Development agent pages on Learn.
- Which calendar permission does the agent use to read a seller's availability, and what detail of the calendar can a prospect see?
- Do the preview limitations (email and Teams chat only, replies only to threads the agent started) still apply once scheduling ships?
- What licence or meter applies to the agent at general availability, and does scheduling change it? Watch Microsoft's Agent 365 pricing pages and the Message center.

<!-- rationale
risk: Medium. The agent would act on its own, writing to a seller's calendar and sending invitations to an external prospect; Microsoft documents admin activation scoping and a Block action, but no switch for scheduling alone.
cost: Low. The only cost the sources show is admin time; the preview page lists Microsoft 365, Microsoft 365 Copilot and Teams licences as prerequisites, and licensing for this capability is not yet published.
impact: Low. Sellers and prospects of the sales teams that use a Sales Development agent notice it; the preview page lets admins choose which users or groups can create instances.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The agent chooses which seller's calendar to evaluate. | Found: Searched: "Sales Development agent" "chooses" "seller"; read roadmap and Sales Development overview, activation and onboarding. The roadmap says "appropriate seller" but does not state that the agent chooses that seller. | Fix: Replace 'The agent chooses which seller's calendar to evaluate' with 'The roadmap says the agent evaluates the proposed times against the appropriate seller's calendar'.
- [contradicted, blocker] Cost and licensing: first sentence; rationale: cost / cost: No applicable meter has been published and the sources show only indirect costs. | Found: All charges are billed consumptively via Copilot Credits: - The agent account, email address, and persistent access to Microsoft 365 resources (for example, Exchange and OneDrive workspaces) have a recurring charge of 100 Copilot Credits per agent per month. | Fix: Replace the unpublished-meter statement with: 'Microsoft publishes Copilot Credits billing for the Sales Development agent public preview from December 1, 2026: 100 Copilot Credits per agent per month for its account and persistent Microsoft 365 resources, plus consumption charges for agent activity. The accountable user must have consumption billing enabled. These are public-preview terms, not confirmed general-availability pricing for meeting scheduling.' Cite this service-description URL and retain the roadmap's separate November CY2026 scheduling target. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The cited management page supplies a complete blocking path ending Agents > All Agents > agent > Block. | Found: In the Block agent or Unblock agent pane that opens, select either Block agent or Unblock agent, and then select Save. | Fix: Change controls[1].ui.docs to https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents and the path to 'Agents > All agents > agent > Block > Block agent > Save'. The old manage-agents URL redirects to agent-365-overview without blocking instructions, although Learn search still returns its former text. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, blocker] controls[1].api; Governance controls table / command: The runnable Graph blocking call is POST /copilot/admin/catalog/packages/{id}/block. | Found: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Replace controls[1].api.call with 'POST /beta/copilot/admin/catalog/packages/{id}/block' and controls[1].api.docs with https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block. Preserve the warning that Sales Development package applicability is unconfirmed. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: Cost is low because only indirect costs are documented. | Found: Page: 'Low. The only cost the sources show is admin time'. Microsoft: 'Resources are provisioned automatically for each supported agent user instance, and charges are billed consumptively via Copilot Credits.' | Fix: Set cost to 'variable'. Replace the cost rationale with 'Variable. Microsoft publishes Copilot Credits consumption billing for the Sales Development agent public preview from December 1, 2026; general-availability pricing for meeting scheduling is not yet confirmed.' Keep the November CY2026 roadmap target distinct from that public-preview billing date. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / applicability: Sales Development is a template agent under Microsoft Agent 365. | Found: Discover how template agents, such as the Sales Development agent, help you streamline workflows and focus on higher-value work. | Fix: Add https://learn.microsoft.com/microsoft-agent-365/use to sources for the template-agent classification. | Source: https://learn.microsoft.com/microsoft-agent-365/use
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: The preview overview says the agent sends email at all hours, including weekends. | Found: Email sending | Sends emails at all hours, including weekends. | Fix: Add: 'The separate preview send-time page says that, for tenants where that feature is enabled, the default window is Monday-Friday, 8am-6pm; check the configured timezone.' Cite https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/configure-send-time. Do not imply this documents scheduling-invitation timing. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/sales-development-agent-overview
- [supported, minor] Risk assessment: Autonomy & actions; Governance guidance: At rollout / behaviour: Send-time configuration can restrict the days and hours for outreach email. | Found: You can define a send window, which specifies days and hours the agent is allowed to send outreach emails, and the agent will follow it. | Fix: Cite https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/configure-send-time for outreach send windows. Narrow the checklist to 'Check the configured outreach send window and timezone'; the page does not establish how meeting invitations are timed. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/configure-send-time
- [supported, minor] Governance guidance: After rollout; Governance controls / behaviour: Administrators can block an individual instance in the Agents > All Agents area. | Found: Under the Details tab, select the Instances tab to see all instances created by that agent. Select an instance and choose Block. | Fix: Replace the attribution to the old management page for individual-instance blocking with a citation to https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances#block-agent-instances. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances
- [supported, minor] Governance guidance: After rollout / admin-path: The agent registry for reviewing instances and owners is under Agents > All Agents. | Found: Agent Registry - Navigate to Agents > All agents > Registry. You can view agents with the AI teammate tag. You'll also see the number of instances that have been created for the specific agent. | Fix: Change the checklist path to 'Agents > All agents > Registry' and cite https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances. The omitted Registry tab is the inventory-selection step. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances
- [contradicted, minor] Governance guidance: At rollout, After rollout; Governance controls / consistency: Every checklist control is represented in the controls table. | Found: Checklist: 'Check send-time configuration for outreach' and 'Review the agent registry for instances and owners'. The table covers activation, blocking and a scheduling-only switch, not send windows or registry review. | Fix: The send-time check and registry-review checklist steps have no corresponding controls-table rows. Remove those two checklist steps to eliminate the mismatch without adding unverified control rows.
-->
