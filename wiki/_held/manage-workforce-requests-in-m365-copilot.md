---
title: "Dynamics 365 Customer Service: manage workforce requests from Microsoft 365 Copilot chat"
slug: "manage-workforce-requests-in-m365-copilot"
roadmapId: 581992
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "Supervisors and customer service representatives can list and open time-off, shift-swap and shift-bid requests in chat, and supervisors can approve or reject time-off requests. Access follows existing Dynamics 365 roles."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "The Learn overview and tool pages list Workforce Engagement Management being enabled and reviewer or read access as prerequisites and name no licence. Licensing for this feature is not yet published."
audiences: ["service-owner","m365-admin","change-adoption"]
tags: ["m365-copilot","dynamics-365","customer-service","mcp","workforce-management","security-roles","write-actions","dataverse"]
sources:
  - title: "Microsoft 365 Roadmap 581992"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581992"
    kind: "roadmap"
  - title: "Overview of Dynamics 365 Workforce Engagement Management MCP tools"
    url: "https://learn.microsoft.com/dynamics365/customer-service/develop/workforce-mcp-tools-overview-service-agent"
    kind: "learn"
  - title: "Approve or reject time-off requests"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/mcp-tools/decide_wem_time_off_request"
    kind: "learn"
  - title: "View Workforce Engagement Management requests"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/mcp-tools/list_wem_requests"
    kind: "learn"
  - title: "View a Workforce Engagement Management request"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/mcp-tools/get_wem_request_details"
    kind: "learn"
  - title: "Workforce management security roles in the Workforce Engagement Management app (preview)"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/workforce-management-security-roles"
    kind: "learn"
  - title: "Install the Workforce Management for Customer Service package"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/workforce-management-package-installation"
    kind: "learn"
  - title: "Work with Microsoft Entra ID group teams"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
  - title: "Manage the Service app in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app"
    kind: "learn"
videos: []
related: ["mcp","security-roles","m365-copilot-service-agent-in-m365-your-dedicated-service-specialist"]
controls:
  - governs: "Who can read WEM requests and who can approve or decline time-off requests"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/workforce-management-security-roles"
    api:
      kind: "rest"
      call: "POST /api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "Dataverse Web API call; the request body sets @odata.id to the role. The WEM roles page is a preview and says its roles apply only within the WEM app."
  - governs: "A switch that turns off only the WEM request tools"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026). Role assignment is the documented lever."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-21T02:55:45"
changes:
  - date: "2026-11-21"
    note: "New briefing: WEM MCP tools let supervisors and representatives work with workforce requests in chat; licensing and default state not yet published."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the governance controls note: Service app deployment, availability and blocking are additional app-level controls, and tools are described as not typically used directly."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 69
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "427416ae7b6849210f57ae106a91714e"
---

## What's changing

Dynamics 365 Workforce Engagement Management (WEM) now offers three Model Context Protocol (MCP) tools that let people work with workforce requests in a chat conversation: list requests, open one request, and approve or reject a time-off request. Representatives and supervisors do not typically use the tools directly. The Learn overview says they interact with a conversational experience, and that Service Agent "determines which tool to use, invokes it in the background, and presents the result in the conversation".

The roadmap item describes the integration as Microsoft 365 Copilot, while the Learn overview names Service Agent as its example experience. This briefing reports both and does not equate them.

The tools are `list_wem_requests` (read-only, shown as an interactive list), `get_wem_request_details` (read-only, shown as an interactive card) and `decide_wem_time_off_request` (writes data, returns a text confirmation). Supervisors can review requests for their planning group and, with the required reviewer permission, approve or reject pending time-off requests. A rejection needs a reason, which is saved as the reviewer note. The decision tool does not overwrite a decision another reviewer already made. Representatives can list their own requests, check status and open the details. Shift-swap and shift-bid requests can be listed and opened but not decided through these tools.

The roadmap record gives the status as Launched, with a preview date of June CY2026, a target date of July CY2026 and release phases General Availability and Preview. The Learn tool pages say tool names, parameters and response formats can change over time.

## Why it matters

This adds a chat route for approving or rejecting time-off requests. Nobody has to configure a separate permissions framework, according to the roadmap, so the controls that matter are the Dynamics 365 and Dataverse security roles you already assign. If a person already holds approval rights, chat now makes them easier to use, so those assignments deserve a review before supervisors start asking the assistant to decide requests.

Microsoft has not stated what happens on arrival or who is switched on by default, and no source says existing behaviour changes. Treat it as something to check for fit rather than a change that lands on its own.

## Risk assessment

**Data exposure**
- `list_wem_requests` defaults to team scope and, with no filters, returns all requests the caller can access, of every type, across all dates and statuses. The default result count is 25, capped at 200. For team scope it relies on Dataverse and WEM security. The control is the security roles row below.
- Request details can include notes, review information and, for time-off, the time-off window. They appear in chat to whoever the roles allow.

**Security & identity**
- Learn says tool responses are limited to the records and actions the signed-in user is authorised to access: supervisors for their planning group, representatives for their own records.
- The tool pages name "reviewer permission" without naming a role. The preview WEM roles page shows WFM Administrator and WFM Scheduler holding "Approve or decline a time-off request"; confirm that this is the permission the tools check.

**Autonomy & actions**
- The decision tool changes data: it sets the request to approved or rejected and records the reviewer. It refuses shift-swap and shift-bid records and does not overwrite an existing decision.
- When a name or agent reference matches more than one pending request, the tool lists the candidates instead of guessing. Test whether the chat experience also asks for confirmation before it approves or rejects.

**Change & support**
- Learn warns that tool names, parameters and response formats can change, so anything built on them needs retesting after service updates.
- The roadmap and the Learn overview name different conversational experiences. Expect support questions about which one surfaces the tools.

## Cost and licensing

The Learn overview and the three tool pages list WEM being enabled and reviewer or read access as prerequisites. They name no licence and no meter for these tools, and a licence or charge specific to this feature is not yet published. The roadmap lists Dynamics 365 Customer Service and Microsoft Copilot (Microsoft 365) as the products; it does not say which licence covers the tools.

The known indirect costs are admin time to review role assignments and to pilot the tools with supervisors, and installing the Workforce Management for Customer Service package where WEM is not yet in use.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. It lists no other cloud.

Supervisors see requests within their authorised planning group, and customer service representatives see only their own. The tool pages require WEM to be enabled in the environment, read access to WEM requests for listing and opening, and supervisor or reviewer access to time-off requests for deciding. Learn's package page says the Workforce Management for Customer Service package must be installed before the workforce features can be enabled. Requests live in the Dataverse `msdyn_wemrequest` table.

## Governance guidance

### Before rollout
- Identify the environments where WEM is enabled and the Workforce Management for Customer Service package is installed, because the tool pages require WEM to be enabled.
- List who holds roles that can approve or decline time-off requests (the preview roles page shows WFM Administrator and WFM Scheduler) in the Power Platform admin center, and remove approval rights that supervisors do not need.
- Ask Microsoft or your account team which licence covers these tools before you budget, since Learn names none.

### At rollout
- Pilot with a small group of supervisors and representatives, and check that a representative sees only their own requests and a supervisor only their planning group.
- Approve and reject a test time-off request, and check that the reviewer is recorded and a rejection saves its reason as the reviewer note.
- Tell supervisors that shift-swap and shift-bid requests can be listed and opened in chat but not decided there.

### After rollout
- Re-check role assignments after reorganisations or planning group changes, since scope follows them.
- Re-read the tool reference pages after service updates, because Learn says tool names, parameters and responses can change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can read WEM requests and who can approve or decline time-off requests</strong><br><small>Environment</small><br><small class="controls__note">Dataverse Web API call; the request body sets @odata.id to the role. The WEM roles page is a preview and says its roles apply only within the WEM app.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/workforce-management-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch that turns off only the WEM request tools</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026). Role assignment is the documented lever.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Dynamics 365 and Dataverse security govern access to WEM tools and requests. For the Service Agent experience, Service app deployment, availability and blocking are additional app-level controls; they do not target only WEM tools. The roadmap says no separate permissions framework is needed. Role assignment is therefore the lever for both visibility and approval rights.

The preview WEM roles page says its roles apply only within the Workforce Engagement Management app and that WFM Service Rep users see their own requests. It does not say which role the MCP tools treat as the reviewer permission, so check that mapping in a test environment. The page is marked preview, so its privileges may change.

Administrators who want the tools unavailable to a person can remove that person's access to WEM requests through role changes. Microsoft Learn documents no setting that turns off only these tools at the time of writing (November 2026).

## Open questions

- Which licence covers these tools for Microsoft 365 Copilot or Service Agent users, and is any meter involved? Watch the Learn overview and the Dynamics 365 licensing guide.
- What happens on arrival: is the experience on for every WEM user, or does an administrator switch it on? Watch Message center and the Learn overview.
- Which security role or privilege is the "reviewer permission" that the decision tool checks?
- Does the chat experience ask the supervisor to confirm before it approves or rejects a time-off request?
- Are the Microsoft 365 Copilot experience in the roadmap and the Service Agent experience in the Learn overview the same surface?

<!-- rationale
risk: Medium. Supervisors with reviewer permission can approve or reject time-off requests from chat, which changes data in Dynamics 365; access follows existing Dynamics 365 and Dataverse security.
cost: Low. The Learn pages for these tools name no licence or meter, so the only cost known is admin time to review role assignments; licensing for this feature is not yet published.
impact: Medium. It affects Workforce Engagement Management supervisors, who review requests for their planning group, and customer service representatives, who see their own requests.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui and api; controls[1].note; Governance controls final paragraph / absence: Microsoft documents no control that turns off only the WEM request tools. | Found: Use this capability when you want to hide or show MCP tools at the organization or profile level. Maker tools cannot be hidden. | Fix: Remove the both-null controls[1] row and the repeated no-setting assertion. Replace that assertion with 'Service Agent supports organization- and profile-level visibility overrides for individual MCP tools; a profile can restore a tool hidden at organization level.' Cite https://learn.microsoft.com/dynamics365/developer/reference/mcp-tools/save_tool_selection and https://learn.microsoft.com/dynamics365/customer-service/administer/configure-service-agent-experiences. Do not describe visibility overrides as an unoverrideable tenant-wide enforcement switch. | Source: https://learn.microsoft.com/dynamics365/developer/reference/mcp-tools/save_tool_selection
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; Why it matters; Open questions; changes / absence: Microsoft has not stated the arrival default for the new WEM request tools. | Found: Searched: WEM tools default enabled; WEM request MCP tools default enabled Service Agent. Read WEM overview, all three tool pages, configure-service-agent and Service Agent FAQ excerpts; host setup is documented, but the new WEM tools' arrival default is not. | Fix: Keep defaultState unknown, but replace the broad sentence in Why it matters with 'Microsoft has not stated the arrival default for these WEM tools. Service Agent itself requires administrator configuration.' Cite https://learn.microsoft.com/dynamics365/customer-service/use/service-agent-faq for the second sentence.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost; Open questions / absence: No licence entitlement specific to these WEM request tools is published. | Found: Searched: Workforce Engagement Management MCP tools licensing license pricing; "Workforce Engagement Management" "MCP" "license". Read WEM overview, tool pages, WEM app prerequisites and Service app requirements; no WEM-tool-specific licence was named. | Fix: The product-level licence is published. Set licensing.model to included and add to its notes: 'Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible subscription plans. Licensing specific to these WEM tools is not yet published.' Cite https://learn.microsoft.com/copilot/plan/copilot-license-options. Do not assert that additional tool charges are ruled out.
- [contradicted, minor] Governance guidance: Before rollout; controls table / consistency: The checklist asks administrators to identify enabled WEM environments and installed packages, but neither control has a table row. | Found: Identify the environments where WEM is enabled and the Workforce Management for Customer Service package is installed; table rows cover security roles and a tools-only switch. | Fix: Remove the first Before rollout checklist bullet, which asks readers to take stock of WEM enablement and package installation without corresponding control rows. Keep the prerequisites already stated in Scope; do not add rows.
-->
