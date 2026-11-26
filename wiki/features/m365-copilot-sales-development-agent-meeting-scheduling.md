---
title: "Microsoft 365 Copilot: Sales Development agent books seller meetings for prospects"
slug: "m365-copilot-sales-development-agent-meeting-scheduling"
roadmapId: 575289
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The Sales Development agent will book a seller meeting from a prospect's preferred times. Sales teams using the agent are affected; default is not stated and preview billing is in Copilot Credits, so check who can activate it."
status: "in-development"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Public-preview terms: Copilot Credits billing from December 1, 2026, with general-availability pricing for meeting scheduling not yet published. The preview activation page also lists Microsoft 365, Microsoft 365 Copilot and Teams licences plus Copilot Frontier as prerequisites."
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
  - title: "Configure send time (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/configure-send-time"
    kind: "learn"
  - title: "Microsoft 365 Resources for Agents"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Manage Microsoft Agent 365 agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents#actions-for-agent-365-agents"
    kind: "learn"
  - title: "Manage agent instances in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances"
    kind: "learn"
  - title: "Use and collaborate with agents with their own identity in Agent 365 (preview)"
    url: "https://learn.microsoft.com/microsoft-agent-365/use"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "copilotPackage: activate"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate"
    kind: "learn"
  - title: "Blocking the Sales Development agent for the organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
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
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/activate"
      docs: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate"
    note: "Needs AI Administrator or Global Administrator. API is a reviewed beta contract: deployed availability and the Sales Development package ID are not confirmed; needs an Agent 365 licence."
  - governs: "Blocking the Sales Development agent for the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General control: Microsoft has not confirmed the Sales Development agent is a package in this API. API is preview and needs an Agent 365 licence."
  - governs: "A switch for the meeting-scheduling capability alone"
    scope: "agent"
    ui: null
    api: null
    note: "No page documents one at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap item for Sales Development agent meeting scheduling, with the preview documentation for activating and blocking the agent."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 69 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: Copilot Credits billing for the public preview, cost now variable, the blocking path and Graph call, the calendar and send-window wording, and two checklist steps removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: the activation row now lists the documented beta activate call, and the checklist and notes cite the Agent 365 page for blocking an agent and no longer mention blocking an instance."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 79 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 86
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "782804ce0e801659c2556245b2d693fb"
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

- The roadmap says the agent evaluates the proposed times against the appropriate seller's calendar, and shares conversation context with that seller. Microsoft has not said what calendar detail the prospect sees or which calendar permission is used; the preview permissions list on the overview page names mail, Teams, files, sites and MCP server permissions, and no calendar-specific entry.
- Content shared with an agent can be summarised or included in its responses to other users, including people without access to that content, regardless of sensitivity labels, per the preview onboarding page. Keep confidential product material out of the agent's product knowledge.

**Security & identity**

- The preview page says creating an instance provisions a dedicated agent identity with a Teams account, Exchange mailbox, OneDrive and SharePoint resources. See [Agent identity](/concepts/agent-identity/) for how agent identities differ from the permissions of the person who manages them.
- The preview overview lists broad Microsoft Graph permissions for the agent, such as Mail.Send, Files.ReadWrite.All and Sites.ReadWrite.All. Review these before activating.

**Autonomy & actions**

- Once launched, the agent runs autonomously until stopped, per the preview limitations table. Scheduling adds a booking step to that autonomy, and the roadmap describes no seller approval before the booking.
- The preview page says the agent sends emails at all hours, including weekends. The separate preview send-time page says that, for tenants where that feature is enabled, the default send window is Monday-Friday, 8am-6pm; check the configured timezone. That page covers outreach emails and does not document the timing of scheduling invitations.

**Change & support**

- Expect sellers to ask why meetings appear on their calendars. Tell them the agent books the first valid option in the prospect's stated order, as the roadmap describes.
- If scheduling fails the roadmap says the agent hands the request and context to the seller, so sellers need a way to pick those up.

## Cost and licensing

Microsoft publishes Copilot Credits billing for the Sales Development agent public preview from December 1, 2026: 100 Copilot Credits per agent per month for its account and persistent Microsoft 365 resources, plus consumption charges for agent activity. The accountable user must have consumption billing enabled. These are public-preview terms, not confirmed general-availability pricing for meeting scheduling, and the roadmap's November CY2026 target for scheduling is separate from that date.

The preview activation page lists these prerequisites: the required subscriptions and licences for Microsoft 365, Microsoft 365 Copilot and Microsoft Teams, and Copilot Frontier enabled in the Microsoft 365 admin center. It also says to purchase the $0 Agent 365 SKU, which includes a licence for 25 agent instances, when enabling the Agent 365 public preview. That is preview-period guidance and is not a statement of general-availability pricing.

The Agent 365 overview page says Microsoft Agent 365 is licensed on a per-user basis, and refers to Microsoft's pricing pages. Whether the Sales Development agent at general availability needs an Agent 365 licence or a Copilot licence is not yet published. Indirect costs are admin time to scope activation and seller time to handle handoffs.

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

### After rollout

- Block the agent if booked meetings show wrong or unauthorised behaviour; blocking an agent turns off all instances created under it.
- Watch the roadmap item and the Sales Development agent pages on Learn for documentation of the scheduling capability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can activate the Sales Development agent and create instances</strong><br><small>Tenant</small><br><small class="controls__note">Needs AI Administrator or Global Administrator. API is a reviewed beta contract: deployed availability and the Sales Development package ID are not confirmed; needs an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Sales Development (Frontier) › Activate <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/activate</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking the Sales Development agent for the organisation</strong><br><small>Agent</small><br><small class="controls__note">General control: Microsoft has not confirmed the Sales Development agent is a package in this API. API is preview and needs an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for the meeting-scheduling capability alone</strong><br><small>Agent</small><br><small class="controls__note">No page documents one at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The activation step is documented for the Microsoft 365 admin center and needs the AI Administrator or Global Administrator role. Microsoft documents `POST /beta/copilot/admin/catalog/packages/{id}/activate` as a reviewed beta contract for activating onboarded agent templates: `agentManagerScope` selects who may create instances and `policyTemplateId` selects the saved policy template. Availability depends on the matching schema and backend release; the reference does not confirm deployed availability or the Sales Development agent's package identifier.

The Block action works on the agent as a whole. The [Agent 365 agent management](https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents#actions-for-agent-365-agents) page says blocking an agent turns off all instances created under it; the [manage agent instances](https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances#block-agent-instances) page documents blocking individual instances in the same Agents > All Agents area. The Package Management API lists block, unblock and reassign operations for packages, but Microsoft has not confirmed that the Sales Development agent appears as a package there, and the API requires a Microsoft Agent 365 licence. No page documents a switch that disables only meeting scheduling.

## Open questions

- Is meeting scheduling on or off for existing Sales Development agent instances when it ships, and which setting, if any, controls it? Watch the roadmap item and the Sales Development agent pages on Learn.
- Which calendar permission does the agent use to read a seller's availability, and what detail of the calendar can a prospect see?
- Do the preview limitations (email and Teams chat only, replies only to threads the agent started) still apply once scheduling ships?
- What licence or meter applies to the agent at general availability, and does scheduling change it? Watch Microsoft's Agent 365 pricing pages and the Message center.

<!-- rationale
risk: Medium. The agent would act on its own, writing to a seller's calendar and sending invitations to an external prospect; Microsoft documents admin activation scoping and a Block action, but no switch for scheduling alone.
cost: Variable. Microsoft publishes Copilot Credits consumption billing for the Sales Development agent public preview from December 1, 2026; general-availability pricing for meeting scheduling is not yet confirmed.
impact: Low. Sellers and prospects of the sales teams that use a Sales Development agent notice it; the preview page lets admins choose which users or groups can create instances.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The preview activation prerequisites list Microsoft 365 Copilot licenses. | Found: You have the required subscriptions and licenses for Microsoft 365, Microsoft 365 Copilot, and Microsoft Teams. | Fix: After the preview prerequisites paragraph, add: 'Microsoft's preview enrollment pages differ: the Agent 365 Frontier page requires at least one Microsoft E7 license, while Microsoft 365 Resources for Agents permits at least one Microsoft 365 Copilot or E7 license.' Cite https://learn.microsoft.com/microsoft-agent-365/frontier and the existing Resources for Agents source. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent
- [supported, minor] controls[0].api / command: POST /beta/copilot/admin/catalog/packages/{id}/activate activates an onboarded template for its manager audience. | Found: Activate an already-onboarded agent template for the users or groups allowed to create instances from it, and apply the selected policy template. POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate | Fix: Append to controls[0].note and its rendered table note: 'The request body sets agentManagerScope for users or groups allowed to create instances and policyTemplateId for the saved policy template.' These properties are already correctly explained in the prose. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate
-->
