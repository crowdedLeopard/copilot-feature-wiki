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
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Public Preview resources are billed in Copilot Credits (100 per agent per month plus activity charges); general availability terms are not yet published. Learn pages differ on prerequisite licences: Copilot or E7, or Microsoft 365, Copilot and Teams."
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
  - title: "Sales Development agent architecture"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/architecture"
    kind: "learn"
  - title: "Manage agent instances in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances"
    kind: "learn"
  - title: "Microsoft 365 Resources for Agents"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents"
    kind: "learn"
  - title: "Configure send time (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/configure-send-time"
    kind: "learn"
  - title: "Create a Power BI report for the Sales Development agent"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/power-bi-report"
    kind: "learn"
  - title: "Get started with the Microsoft Frontier Program"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    kind: "learn"
  - title: "Launch live outreach with the Sales Development agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/launch-live"
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
    note: "Learn lists this as a prerequisite for the preview. The Frontier administration guide gives the existing experience as Copilot > Settings > View all > Copilot Frontier."
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
    note: "Registry shows instance counts for activated template agents; select the agent, then See details. The package-list API reference does not document returning Sales Development agent instances. API: Agent 365 licence."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-18"
    note: "New briefing: Learn documents a preview that admins must activate, with no published price; general availability is targeted for January CY2027."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 78 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: added how the agent's access is scoped, the admin Block control, Copilot Credit billing for preview resources (cost now variable) and the registry's instance view; removed the nine-supervisor total."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 93 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 104 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 104
  confirmed: 102
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "1847ac2e42f1c61673bb176855ad9f04"
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
- Learn's permissions list for the agent includes Files.ReadWrite.All ("Have full access to all files user can access"), Sites.ReadWrite.All ("Have full control of all site collections") and Mail.ReadWrite.Shared, plus Agent 365 tools for Mail, OneDrive and SharePoint, Teams, Dataverse and Sales MCP servers (see [MCP](/concepts/mcp/)). Learn's architecture article says the agent runs under a dedicated agentic identity (Microsoft Entra Agent ID) and that access is explicitly granted and policy-scoped so the agent operates only with assigned permissions.
- Learn says AI processing happens in your selected region but certain data might be processed outside it when in-region capacity is unavailable, and that requests may be routed to supported models from third-party providers such as Anthropic. The architecture article instead says data remains within the applicable residency boundary; confirm the applicable commitments before deployment. The **AI providers operating as Microsoft subprocessors** setting (controls table) governs the providers.

**Security & identity**
- Each instance gets its own agent identity with a mailbox and Teams account (see [agent identity](/concepts/agent-identity/)). Learn says an IT admin can change the username, alias and domain in Microsoft Entra or the Microsoft 365 admin center after creation.
- The agent has a Manager, assigned at creation and not transferable by chat command, who can grant Supervisor access through private one-to-one chat. Learn describes this access as managed by chat command to the agent, so review it through the manager.

**Autonomy & actions**
- Learn's limitations table says that once launched the agent runs autonomously until stopped, sends emails at all hours including weekends, and does not switch automatically from testing to pilot. The send-time guide instead documents configurable days and hours and a Monday-Friday, 8am-6pm default for tenants where that feature is enabled. The overview says there are no built-in visual reporting dashboards and that the agent shares progress through Teams chat; the Power BI reporting article instead refers to a built-in performance dashboard, so the documentation differs.
- Administrators can stop an instance in Microsoft 365 admin center at Agents > All Agents > agent > Details > Instances > instance > Block.

**Change & support**
- Learn marks the feature as preview, "not meant for production use", and subject to change before the January CY2027 target.
- Selecting **Add** in the Teams Store installs only a personal app and does not create a working instance; expect help-desk questions from managers who do this.

## Cost and licensing

The Learn activation page lists these prerequisites for the preview: the required subscriptions and licences for Microsoft 365, Microsoft 365 Copilot and Microsoft Teams, Copilot Frontier enabled, and users who create instances enabled for Frontier features. It does not say which of those licences each user needs. Teams must be in the policy template, either bundled in the AI Teammate licence or as a standalone licence. The Agent 365 Frontier article separately says access to Agent 365 preview features requires at least one Microsoft E7 licence in the tenant; confirm eligibility because these pages differ.

To enable the Agent 365 public preview, a Global Administrator purchases the $0 Agent 365 SKU, which includes a licence for 25 agent instances. Microsoft's Frontier page says licences are assigned per agent instance in the Frontier programme and that, for general availability, Agent 365 is licensed per user. Agent 365 coverage applies to all agents managed or owned by the licensed user, regardless of type; Sales Development agent-specific general availability requirements are not yet published. This does not imply that Agent 365 coverage pays for agent consumption.

Microsoft publishes Copilot Credit billing for Sales Development agent resources: 100 Copilot Credits per agent per month for the account and persistent resource access, plus consumptive activity charges. The resource service description lists Frontier Public availability for December 1, 2026, with consumption billing beginning on availability; these terms apply to Public Preview. See [Copilot Credits](/concepts/copilot-credits/). Indirect costs are admin time, sales-manager training and the review effort for outreach sent by the agent.

## Scope

In scope per the roadmap record: Microsoft Copilot (Microsoft 365), Worldwide (Standard Multi-Tenant), web platform. No other cloud is listed on the roadmap item.

In the preview, the Activate and Add instance steps need the AI Administrator or Global Administrator role in the Microsoft 365 admin center, and enabling the Agent 365 public preview needs the Global Administrator role. All users can see the agent in the Agent Store, but only users with explicit access can activate an instance. Learn says the preview is available to customers who opt into Targeted release, for the whole organisation or selected users.

Learn's overview limitations table says Teams chat supports only 1:1 chats between the creator and the agent, while the multi-user page describes group chats of up to 10 people (one manager and up to nine supervisors) plus the agent. The two pages differ, so confirm which applies to your tenant.

## Governance guidance

### Before rollout
- Decide which sales managers may create instances and check they hold the licences Learn lists as prerequisites for Microsoft 365, Microsoft 365 Copilot and Teams.
- Check **Copilot Frontier** access for those managers (controls table, row 2); Learn says everyone who creates instances must be enabled for Frontier features.
- Review the **AI providers operating as Microsoft subprocessors** setting (controls table, row 3) with privacy and legal staff, because Learn's notice says to uninstall the agent if you do not consent to processing outside your region or by other supported models.
- Agree with sales leaders the outreach rules to apply: the overview says email can be sent at all hours, but the send-time guide documents configurable days and hours and a Monday-Friday, 8am-6pm default for tenants where that feature is enabled.

### At rollout
- Activate **Sales Development (Frontier)** for a named group of users, not everyone (controls table, row 1), as an AI Administrator or Global Administrator.
- Apply a policy template that allows agent instance creation and includes Teams.
- Tell managers to select **Create instance**, not **Add**, in the Teams Store.

### After rollout
- Review the agent inventory (controls table, row 4) for new instances and their managers.
- Re-read the Learn pages and Message center when the roadmap moves to general availability, and re-check licensing and the default state.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Sales Development agent is activated and which users or groups can create instances</strong><br><small>Tenant</small><br><small class="controls__note">Preview. AI Administrator or Global Administrator role. Step 3 chooses the users or groups; step 4 applies a policy template.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Sales Development (Frontier) › Activate <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can reach Frontier preview features, including the Sales Development agent</strong><br><small>User</small><br><small class="controls__note">Learn lists this as a prerequisite for the preview. The Frontier administration guide gives the existing experience as Copilot &gt; Settings &gt; View all &gt; Copilot Frontier.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Copilot Frontier <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether supported third-party model providers such as Anthropic can serve requests</strong><br><small>Tenant</small><br><small class="controls__note">General control for Anthropic. The overview says disabling supported model providers may affect the agent in some regions. AI Administrator or Global Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors <a href="https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Inventory of agents in the tenant, for review of new instances</strong><br><small>Tenant</small><br><small class="controls__note">Registry shows instance counts for activated template agents; select the agent, then See details. The package-list API reference does not document returning Sales Development agent instances. API: Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Overview › Explore All agents › Registry <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no API for activating the Sales Development agent, for the Copilot Frontier setting or for the AI providers setting at the time of writing (November 2026), so those rows show "Not yet documented" on the API side. Role: the Learn pages name the AI Administrator or Global Administrator role for activation and for the AI providers setting.

The agent inventory row is a general control for agents in the tenant. Learn's instance-management page documents instance counts and instance details for activated template agents in the registry, and the package-list API reference does not document returning individual Sales Development agent instances. The Graph package API requires a Microsoft Agent 365 licence.

## Open questions

- What licence and Copilot Credit billing terms will apply to the Sales Development agent at general availability, given that the resource service description says its terms apply to Public Preview? Watch the Learn activation page and the roadmap item.
- Will activation stay admin opt-in at general availability, or will the agent reach users automatically? Watch Message center.
- Which permissions and resources will your tenant assign to the agent, given the Graph permissions Learn lists?
- Is there an audit trail of the emails the agent sends?
- Do the Learn preview pages describe the same agent as roadmap item 573700, and will group chats be available at general availability?

<!-- rationale
risk: High. Learn's preview pages say the agent, once launched, runs autonomously until stopped and sends outreach emails, using Mail.Send and broad file and site permissions.
cost: Variable. Microsoft publishes Copilot Credit billing for the agent's resources in Public Preview: 100 Copilot Credits per agent per month plus consumptive activity charges, with the listed Frontier Public availability of December 1, 2026 and billing starting on availability.
impact: Medium. Sales managers who create instances and the prospects who receive outreach notice it; admins choose which users or groups can create instances.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls / absence: Microsoft has not documented automation for activating the template and choosing who can create instances. | Found: Activate an already-onboarded agent template for the users or groups allowed to create instances from it, and apply the selected policy template. | Fix: Replace controls[0].api null with kind graph, call 'POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate', and docs https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate. Add to the note: 'Reviewed beta contract; availability depends on the matching schema and backend release. agentManagerScope selects allowed creators; policyTemplateId selects an existing policy template. Requires Agent 365 and a signed-in AI Administrator or Global Administrator; does not grant permission consent.' Cite that reference. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls / admin-path: Activation and creator access are reached through Microsoft 365 admin center > Agents > All Agents > Sales Development (Frontier) > Activate. | Found: Search for Sales Development (Frontier), and then select Activate. ... Choose the users or groups that can create Sales Development agent instances. | Fix: Keep the documented entry path, but make the note explicit: 'After Activate, choose the users or groups that can create instances, then apply a policy template that allows agent instance creation.' The path ends at the entrance to that configuration. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent
- [supported, minor] controls[1].ui; controls[1].note; Governance controls / admin-path: The activation page gives Microsoft 365 admin center > Copilot > Settings > Copilot Frontier, while the Frontier guide includes View all. | Found: Copilot Frontier is enabled in the Microsoft 365 admin center: Copilot > Settings > Copilot Frontier. | Fix: Use 'Copilot > Settings > View all > Copilot Frontier > Turn on Frontier' for controls[1].ui.path and https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier for its docs, retaining the note that the activation page gives the shorter path. The cited Frontier guide documents the selectable View all tab and the final toggle. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent
- [supported, minor] controls[2].ui; Governance controls / admin-path: The AI-provider control is at Microsoft 365 admin center > Copilot > Settings > View all > AI providers operating as Microsoft subprocessors. | Found: Select Copilot > Settings > View all. ... Select AI providers operating as Microsoft subprocessors. ... select Anthropic ... select your users or groups | Fix: For the opt-in route, complete controls[2].ui.path as 'Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences'. The current path stops on the correct page before the provider and audience controls. | Source: https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The controls table covers every control the governance checklist asks the reader to consider. | Found: Agree with sales leaders the outreach rules to apply ... configurable days and hours ... The controls table covers activation, Frontier access, AI providers and inventory, not the send-window control. | Fix: The Before rollout outreach-rules step refers to the send-window control, which has no row in the controls table. Record this checklist/table gap; do not add a control row as part of this correction.
-->
