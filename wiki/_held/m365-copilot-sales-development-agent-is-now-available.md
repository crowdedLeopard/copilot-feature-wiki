---
title: "Microsoft 365 Copilot: Sales Development agent for autonomous lead outreach"
slug: "m365-copilot-sales-development-agent-is-now-available"
roadmapId: 573700
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans an agent that researches, qualifies and engages sales leads on its own. Learn documents a preview that an admin must activate; each instance emails and chats as an agent with its own identity."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "high"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for general availability. The preview page lists Microsoft 365, Microsoft 365 Copilot and Teams licences as prerequisites and a $0 Agent 365 SKU with 25 agent instances."
audiences: ["m365-admin","security","service-owner","finops"]
tags: ["sales-development-agent","autonomous-agents","agent-365","agent-identity","frontier-program","m365-admin-center","m365-copilot","agents"]
sources:
  - title: "Microsoft 365 Roadmap 573700"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573700"
    kind: "roadmap"
  - title: "Sales Development agent overview (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/sales-development-agent-overview"
    kind: "learn"
  - title: "Activate Sales Development agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    kind: "learn"
  - title: "Create a Sales Development agent instance (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/create-instance"
    kind: "learn"
  - title: "Use the Sales Development agent with multiple users (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/multi-users"
    kind: "learn"
  - title: "Preview Microsoft Agent 365 features through the Frontier program"
    url: "https://learn.microsoft.com/microsoft-agent-365/frontier"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents"
    kind: "learn"
  - title: "List packages"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
  - title: "Graph API for agent registry and agent details"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/graph-api"
    kind: "learn"
videos: []
related: ["agent-identity","mcp","dynamics-365-sales-an-agentic-home-for-all-sales-ai"]
controls:
  - governs: "Whether the Sales Development agent is activated and which users or groups can create instances"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Sales Development (Frontier) > Activate"
      docs: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    api: null
    note: "Preview. AI Administrator or Global Administrator role. Step 3 chooses the users or groups; step 4 applies a policy template."
  - governs: "Which users can reach Frontier preview features, including the Sales Development agent"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Copilot Frontier"
      docs: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    api: null
    note: "Learn lists this as a prerequisite for the preview."
  - governs: "Whether supported third-party model providers such as Anthropic can serve requests"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor"
    api: null
    note: "General control for Anthropic. The overview says disabling supported model providers may affect the agent in some regions. AI Administrator or Global Administrator role."
  - governs: "Inventory of agents in the tenant, for review of new instances"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Overview > Explore All agents > Registry"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages"
      docs: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    note: "General control: Learn does not confirm that Sales Development agent instances appear here. The API needs a Microsoft Agent 365 licence and the AI Administrator or Global Administrator role."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-18"
    note: "New briefing: Learn documents a preview that admins must activate, with no published price; general availability is targeted for January CY2027."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 78 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 70
  unconfirmed: 1
  contradicted: 7
  attempts: 1
  hash: "e7258837b581193162786d90d2187381"
---

## What's changing

The roadmap item describes the Sales Development agent as an "autonomous agent that researches, qualifies, engages with leads, scaling sales capacity 24/7". It lists Microsoft Copilot (Microsoft 365), Worldwide (Standard Multi-Tenant), the web platform, and the release phases General Availability and Preview.

Microsoft Learn documents a Sales Development agent (preview) that automates sales outreach and prospect management within Microsoft Teams. The roadmap item does not name those pages, so read what follows as the preview's behaviour, not the final design. An administrator activates **Sales Development (Frontier)** in the Microsoft 365 admin center and chooses which users or groups can create instances. Creating an instance makes a dedicated agent identity and provisions a Teams account, Exchange mailbox, OneDrive and SharePoint resources. Learn says the agent interacts through email and Teams chats, and that it replies only to email threads it starts.

The roadmap status is In development, with a preview target of October CY2026 and a general availability target of January CY2027. Both are Microsoft's targets, not commitments. Learn says the preview is available to customers who opt into the Microsoft 365 Targeted release program.

## Why it matters

This is an agent that contacts people outside your organisation under an identity your tenant creates, so it changes who can send email and chat on your behalf, not just what users can ask Copilot. Marketing, legal and security teams will want to know before sales managers start creating instances.

The preview requires an administrator to activate the agent, so on the documented preview nobody can create an instance until an admin does. Microsoft has not stated how general availability will arrive, so do not assume the preview's opt-in carries over; watch Message center and the Learn pages before January CY2027.

## Risk assessment

**Data exposure**
- Learn's permissions list for the agent includes Files.ReadWrite.All ("Have full access to all files user can access"), Sites.ReadWrite.All ("Have full control of all site collections") and Mail.ReadWrite.Shared, plus Agent 365 tools for Mail, OneDrive and SharePoint, Teams, Dataverse and Sales MCP servers (see [MCP](/concepts/mcp/)). Learn does not describe how the agent's reach is bounded, so confirm that before activating for a wide group.
- Learn says AI processing happens in your selected region but certain data might be processed outside it when in-region capacity is unavailable, and that requests may be routed to supported models from third-party providers such as Anthropic. The **AI providers operating as Microsoft subprocessors** setting (controls table) governs the providers.

**Security & identity**
- Each instance gets its own agent identity with a mailbox and Teams account (see [agent identity](/concepts/agent-identity/)). Learn says an IT admin can change the username, alias and domain in Microsoft Entra or the Microsoft 365 admin center after creation.
- The agent has a Manager, assigned at creation and not transferable by chat command, who can grant up to nine Supervisors access through chat. Learn describes this access as managed by chat command to the agent, so review it through the manager.

**Autonomy & actions**
- Learn's limitations table says that once launched the agent runs autonomously until stopped, sends emails at all hours including weekends, and does not switch automatically from testing to pilot. It has no built-in reporting dashboards and shares progress through Teams chat.
- Confirm how an instance is stopped and who can do it before launch; the preview pages do not say.

**Change & support**
- Learn marks the feature as preview, "not meant for production use", and subject to change before the January CY2027 target.
- Selecting **Add** in the Teams Store installs only a personal app and does not create a working instance; expect help-desk questions from managers who do this.

## Cost and licensing

The Learn activation page lists these prerequisites for the preview: the required subscriptions and licences for Microsoft 365, Microsoft 365 Copilot and Microsoft Teams, Copilot Frontier enabled, and users who create instances enabled for Frontier features. It does not say which of those licences each user needs. Teams must be in the policy template, either bundled in the AI Teammate licence or as a standalone licence.

To enable the Agent 365 public preview, a Global Administrator purchases the $0 Agent 365 SKU, which includes a licence for 25 agent instances. Microsoft's Frontier page says licences are assigned per agent instance in the Frontier programme and that, for general availability, Agent 365 is licensed per user. Whether the Sales Development agent follows that model at general availability is not yet published.

No price, credit rate or meter for the Sales Development agent is yet published. Indirect costs are admin time, sales-manager training and the review effort for outreach sent by the agent.

## Scope

In scope per the roadmap record: Microsoft Copilot (Microsoft 365), Worldwide (Standard Multi-Tenant), web platform. No other cloud is listed on the roadmap item.

In the preview, the Activate and Add instance steps need the AI Administrator or Global Administrator role in the Microsoft 365 admin center, and enabling the Agent 365 public preview needs the Global Administrator role. All users can see the agent in the Agent Store, but only users with explicit access can activate an instance. Learn says the preview is available to customers who opt into Targeted release, for the whole organisation or selected users.

Learn's overview limitations table says Teams chat supports only 1:1 chats between the creator and the agent, while the multi-user page describes group chats of up to 10 people (one manager and up to nine supervisors) plus the agent. The two pages differ, so confirm which applies to your tenant.

## Governance guidance

### Before rollout
- Decide which sales managers may create instances and check they hold the licences Learn lists as prerequisites for Microsoft 365, Microsoft 365 Copilot and Teams.
- Check **Copilot Frontier** access for those managers (controls table, row 2); Learn says everyone who creates instances must be enabled for Frontier features.
- Review the **AI providers operating as Microsoft subprocessors** setting (controls table, row 3) with privacy and legal staff, because Learn's notice says to uninstall the agent if you do not consent to processing outside your region or by other supported models.
- Agree with sales leaders the outreach rules to apply, because the agent sends email at all hours including weekends.

### At rollout
- Activate **Sales Development (Frontier)** for a named group of users, not everyone (controls table, row 1), as an AI Administrator or Global Administrator.
- Apply a policy template that allows agent instance creation and includes Teams.
- Tell managers to select **Create instance**, not **Add**, in the Teams Store.

### After rollout
- Review the agent inventory (controls table, row 4) for new instances and their managers.
- Ask each instance's manager to list users with Supervisor access in their 1:1 chat with the agent.
- Re-read the Learn pages and Message center when the roadmap moves to general availability, and re-check licensing and the default state.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Sales Development agent is activated and which users or groups can create instances</strong><br><small>Tenant</small><br><small class="controls__note">Preview. AI Administrator or Global Administrator role. Step 3 chooses the users or groups; step 4 applies a policy template.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Sales Development (Frontier) › Activate <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can reach Frontier preview features, including the Sales Development agent</strong><br><small>User</small><br><small class="controls__note">Learn lists this as a prerequisite for the preview.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Copilot Frontier <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether supported third-party model providers such as Anthropic can serve requests</strong><br><small>Tenant</small><br><small class="controls__note">General control for Anthropic. The overview says disabling supported model providers may affect the agent in some regions. AI Administrator or Global Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors <a href="https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Inventory of agents in the tenant, for review of new instances</strong><br><small>Tenant</small><br><small class="controls__note">General control: Learn does not confirm that Sales Development agent instances appear here. The API needs a Microsoft Agent 365 licence and the AI Administrator or Global Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Overview › Explore All agents › Registry <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no API for activating the Sales Development agent, for the Copilot Frontier setting or for the AI providers setting at the time of writing (November 2026), so those rows show "Not yet documented" on the API side. Role: the Learn pages name the AI Administrator or Global Administrator role for activation and for the AI providers setting.

The agent inventory row is a general control for agents in the tenant. Learn does not say whether Sales Development agent instances appear in that list, and the Graph package API requires a Microsoft Agent 365 licence. Supervisor access is not a table row because Learn describes it as a chat command given to the agent by its manager.

## Open questions

- What licence and price will the Sales Development agent need at general availability, and will it use a meter such as Copilot Credits? Watch the Learn activation page and the roadmap item.
- Will activation stay admin opt-in at general availability, or will the agent reach users automatically? Watch Message center.
- Which tenant data can the agent read and write, and how is its reach bounded, given the Graph permissions Learn lists?
- How does an administrator or manager stop a running instance, and is there an audit trail of the emails it sends?
- Do the Learn preview pages describe the same agent as roadmap item 573700, and will group chats be available at general availability?

<!-- rationale
risk: High. Learn's preview pages say the agent, once launched, runs autonomously until stopped and sends emails at all hours, including weekends, using Mail.Send and broad file and site permissions.
cost: Medium. Learn's preview prerequisites list Microsoft 365, Microsoft 365 Copilot and Microsoft Teams licences; the price and any meter for the Sales Development agent itself are not yet published.
impact: Medium. Sales managers who create instances and the prospects who receive outreach notice it; admins choose which users or groups can create instances.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / absence: Learn does not describe how the agent's data access is bounded. | Found: The agent runs under a dedicated agentic identity (Microsoft Entra Agent ID) that exists as its own security principal in the tenant. Access is explicitly granted and policy-scoped so the agent operates only with assigned permissions. | Fix: Replace 'Learn does not describe how the agent's reach is bounded' with 'Learn says access is explicitly granted and policy-scoped so the agent operates only with assigned permissions.' Cite https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/architecture. Narrow the matching open question to which permissions and resources your tenant will assign. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/architecture
- [unsupported, blocker] Risk assessment: Security & identity / role: A manager can grant access to at most nine supervisors in total. | Found: Searched: "Sales Development agent" "nine" "supervisors". Opened multi-users: nine supervisors is the limit in one group chat; it does not state a total limit on Supervisor access grants. | Fix: Replace 'who can grant up to nine Supervisors access through chat' with 'who can grant Supervisor access through private one-to-one chat'. Keep the separate, correctly scoped group-chat limit in Scope.
- [contradicted, blocker] Risk assessment: Autonomy & actions; Open questions / absence: Microsoft has not documented how an administrator stops a running agent instance. | Found: You can block or unblock agent instances for the entire organization using the same controls available for any other app in the Microsoft 365 admin center. Blocking an instance stops it and any actions it's performing. | Fix: Replace the absence sentence and matching stop question with: 'Administrators can stop an instance in Microsoft 365 admin center at Agents > All Agents > agent > Details > Instances > instance > Block.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances. Do not equate stopping new CRM outreach or cancelling a campaign with blocking the entire instance. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances
- [contradicted, blocker] Cost and licensing; Open questions / licensing: Whether Agent 365's general availability per-user coverage applies to the Sales Development agent is unpublished. | Found: All agents managed or owned by a licensed user, regardless of type, are covered under that user’s Agent 365 or Microsoft 365 E7 license. Agents don’t require their own Agent 365 or Microsoft 365 E7 license. | Fix: Replace 'Whether the Sales Development agent follows that model at general availability is not yet published' with 'Agent 365 coverage applies to all agents managed or owned by the licensed user, regardless of type; Sales Development agent-specific general availability requirements are not yet published.' This does not imply that Agent 365 coverage pays for agent consumption. | Source: https://learn.microsoft.com/microsoft-agent-365/frontier
- [contradicted, blocker] Cost and licensing; rationale: cost; changes; Open questions / absence: No price, credit rate or meter has been published for the Sales Development agent. | Found: All charges are billed consumptively via Copilot Credits: The agent account, email address, and persistent access to Microsoft 365 resources (for example, Exchange and OneDrive workspaces) have a recurring charge of 100 Copilot Credits per agent per month. | Fix: Replace the blanket absence claim wherever repeated with: 'Microsoft publishes Copilot Credit billing for Sales Development agent resources: 100 Copilot Credits per agent per month for the account and persistent resource access, plus consumptive activity charges. The resource service description lists Frontier Public availability for December 1, 2026, with consumption billing beginning on availability; these terms apply to Public Preview.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents. Keep GA-specific requirements open, not the existence of a preview meter. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
- [contradicted, blocker] controls[3].note; Governance controls / absence: Learn does not confirm that Sales Development agent instances are available through the agent inventory. | Found: Agent Registry - Navigate to Agents > All agents > Registry. You can view agents with the AI teammate tag. You'll also see the number of instances that have been created for the specific agent. | Fix: Replace the UI inventory absence caveat with: 'The registry documents instance counts and instance details for activated template agents. Select the agent and See details to review its instances.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances. Retain the narrower caveat that the package-list API reference does not explicitly document returning individual Sales Development agent instances. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: Cost medium is consistent with the documented costs and the wiki's cost scale. | Found: All charges are billed consumptively via Copilot Credits: | Fix: Set cost to 'variable' and revise the cost rationale to name Copilot Credits and the published Public Preview resource charges, explicitly noting the listed December 1, 2026 availability and billing start. The standard assigns 'variable' to a documented meter, not 'medium'. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Cost and licensing; Governance controls / admin-path: The activation article gives the Frontier path as Copilot > Settings > Copilot Frontier. | Found: Copilot Frontier is enabled in the Microsoft 365 admin center: Copilot > Settings > Copilot Frontier. | Fix: Keep the cited feature-specific path, but add: 'The Frontier administration guide gives the existing experience as Copilot > Settings > View all > Copilot Frontier.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier, which also documents a gradually rolling-out unified release preferences experience. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent
- [supported, minor] Why it matters; rationale: impact / behaviour: The agent contacts sales prospects by outreach email on the seller's behalf. | Found: After you review and approve the plan, the agent starts working on the prospects and sends outreach emails to them. | Fix: Add https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/launch-live to sources for the live prospect outreach description. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/launch-live
- [supported, minor] Risk assessment: Data exposure / behaviour: The overview permits certain data to be processed outside the selected region when local capacity is unavailable. | Found: When in-region processing capacity or required service components are unavailable, certain data associated with the service might be processed outside your selected geographic region. | Fix: Add: 'The architecture article instead says data remains within the applicable residency boundary; confirm the applicable commitments before deployment.' Cite https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/architecture. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/sales-development-agent-overview
- [supported, minor] Risk assessment: Autonomy & actions; Governance guidance: Before rollout; rationale: risk / behaviour: The overview limitations table says the agent sends email at all hours including weekends. | Found: Email sending | Sends emails at all hours, including weekends. | Fix: Qualify this statement wherever repeated: 'The overview says email can be sent at all hours, but the send-time guide documents configurable days and hours and a Monday-Friday, 8am-6pm default for tenants where that feature is enabled.' Cite https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/configure-send-time. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/sales-development-agent-overview
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: The overview says there are no built-in visual reporting dashboards. | Found: No built-in visual reporting dashboards; shares progress via Teams chat. | Fix: Add: 'The Power BI reporting article instead refers to a built-in performance dashboard; the documentation differs.' Cite https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/power-bi-report, whose introduction says the same prospect data powers the agent's performance dashboard. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/sales-development-agent-overview
- [supported, minor] front matter: licensing.notes; Cost and licensing; Governance guidance; rationale: cost / licensing: The activation article lists Microsoft 365, Microsoft 365 Copilot and Microsoft Teams subscription and licence prerequisites. | Found: You have the required subscriptions and licenses for Microsoft 365, Microsoft 365 Copilot, and Microsoft Teams. | Fix: Keep this attributed prerequisite list, but add: 'The Agent 365 Frontier article separately says access to Agent 365 preview features requires at least one Microsoft E7 licence in the tenant; confirm eligibility because these pages differ.' Cite https://learn.microsoft.com/microsoft-agent-365/frontier. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist's Supervisor-access review has a corresponding controls-table row. | Found: Ask each instance's manager to list users with Supervisor access in their 1:1 chat with the agent. Supervisor access is not a table row because Learn describes it as a chat command given to the agent by its manager. | Fix: Remove the sentence that treats a chat-command control as exempt from the table requirement, and remove the Supervisor-access checklist bullet if retaining the current table. The checklist review currently has no corresponding row; do not add a new row as part of this correction.
-->
