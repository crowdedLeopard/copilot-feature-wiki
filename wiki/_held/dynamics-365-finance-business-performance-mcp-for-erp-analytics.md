---
title: "Dynamics 365 Finance: ERP Analytics MCP gives agents access to Business performance analytics data"
slug: "dynamics-365-finance-business-performance-mcp-for-erp-analytics"
roadmapId: 576762
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Finance"]
summary: "Microsoft plans an MCP server that lets AI agents query Business performance analytics data in Dynamics 365 Finance. The roadmap says it is enabled automatically; Learn documents a preview gated by BPA roles, so review those roles."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "January CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "mixed"
  notes: "BPA is included as part of the Dynamics 365 Finance licence. Building in Copilot Studio needs its licence and agent-creation permissions. Copilot Studio agent usage can consume Copilot Credits; qualifying authenticated employee-facing use by Microsoft 365 Copilot licensed users is included. No server-specific licence or meter is published (November 2026)."
audiences: ["service-owner","security","maker","power-platform-admin"]
tags: ["mcp","mcp-server","dynamics-365","finance-and-operations","analytics","power-bi","copilot-studio","row-level-security","semantic-model"]
sources:
  - title: "Microsoft 365 Roadmap 576762"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576762"
    kind: "roadmap"
  - title: "Dynamics 365 ERP Analytics MCP for finance and operations apps (preview)"
    url: "https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/erp-analytics-mcp-overview"
    kind: "learn"
  - title: "ERP Analytics MCP technical details"
    url: "https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/erp-analytics-mcp-technical-details"
    kind: "learn"
  - title: "Dynamics 365 ERP Analytics MCP frequently asked questions"
    url: "https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/erp-analytics-mcp-faq"
    kind: "learn"
  - title: "Build an agent with ERP Analytics MCP in Copilot Studio (preview)"
    url: "https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/erp-analytics-mcp-copilot-studio"
    kind: "learn"
  - title: "What is Business performance analytics?"
    url: "https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/business-performance-analytics-home-page"
    kind: "learn"
  - title: "Set up security for Business performance analytics"
    url: "https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/set-up-security"
    kind: "learn"
  - title: "Build an agent with Dynamics 365 ERP MCP"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/build-agent-mcp"
    kind: "learn"
  - title: "Use Model Context Protocol for finance and operations apps"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp"
    kind: "learn"
  - title: "Security for Dynamics 365 ERP MCP"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/mcp/mcp-security"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
videos: []
related: ["mcp","dynamics-365-customer-insights-data-agents-and-copilot-increase-ai-accuracy-by-grounding-a","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities"]
controls:
  - governs: "Dedicated on/off setting for the ERP Analytics MCP server"
    scope: "environment"
    ui: null
    api: null
    note: "Learn's troubleshooting says to check that the server is enabled but gives no steps. Access is gated by the BPA and finance and operations roles below."
  - governs: "Which users can access BPA data, and so what an agent can query"
    scope: "user"
    ui:
      surface: "Business performance analytics"
      path: "Administration > Set up user"
      docs: "https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/set-up-security"
    api: null
    note: "This opens user setup: search for the user, select Next, then assign at least one role and one dimension group. The BPA admin role gives access to the Administrator section."
  - governs: "Which data values each BPA user, and so each agent acting for them, can see"
    scope: "user"
    ui:
      surface: "Business performance analytics"
      path: "Administration > Set up dimension groups > Select specific values"
      docs: "https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/set-up-security"
    api: null
    note: "Secure dimensions first; enter a group name and select Next before choosing specific values. Dimensions that are not secured are visible to all users. Learn says the MCP server enforces row-level security by user role."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-20"
roadmapModified: "2026-10-16T19:08:46"
changes:
  - date: "2026-11-19"
    note: "First briefing: roadmap item for MCP for ERP analytics, matched to the Learn preview of the Dynamics 365 ERP Analytics MCP server."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected: cost is now variable (Copilot Credits, with the Copilot USL inclusion), the separate ERP MCP billing rules are qualified, and the default follows the roadmap's automatic enablement."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 88
  confirmed: 86
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "74fca154e7024c70c108f9ded2b40297"
---

## What's changing

The roadmap item describes an MCP (Model Context Protocol, the open standard that connects AI agents to data systems) server for ERP analytics. Per the roadmap text, it gives agents structured access to ERP analytics data, key metrics, dimensions, relationships and the full semantic model, and lets them connect to tools such as Power BI and Business Performance Analytics.

Microsoft Learn documents a server that appears to be this one: the **Dynamics 365 ERP Analytics MCP** server for finance and operations apps, marked as a preview. It lets agents access and analyse Business performance analytics (BPA) data through natural language. Learn lists two tools: one retrieves the BPA data model schema (tables, columns, measures and relationships), the other runs DAX queries against BPA data. Results come back as JSON. The match between the roadmap item and this Learn page is the wiki's reading; the roadmap's "more info" link goes to a different page, about the Dynamics 365 ERP MCP server, which performs data operations and business logic in finance and operations apps.

The record gives the status as In development, with a target of December CY2026 and a preview date of January CY2026, for Worldwide (Standard Multi-Tenant) on the web, with both General Availability and Preview release phases. Learn already treats the server as a public preview, so the roadmap status and Learn differ in how far along they say it is. Learn's preview notice says preview features aren't meant for production use. The roadmap's "Enabled for" line reads "Enabled for admins/makers/marketers automatically".

## Why it matters

This puts finance data (P&L, budgets, purchase orders, vendors, sales orders and receivables, according to Learn) within reach of any agent a maker connects to the server. What an agent sees is decided by the signed-in user's BPA roles and dimension groups, so the real control sits inside BPA and finance and operations security, not in a tenant-wide setting. If you already use BPA, check those roles before makers start building.

The roadmap says enabled for admins/makers/marketers automatically; Learn separately requires BPA installation, permissions and an agent connection. No source says existing behaviour changes, so this is a review item rather than a deadline.

## Risk assessment

**Data exposure**
- Agents receive the BPA data model and query results as JSON, so finance data reaches whichever agent platform and model the maker chose. Learn recommends Claude Sonnet 4.5, which it describes as an external model not hosted in Azure that tenant administrators must approve.
- Dimension security filters data only for dimensions an admin secures: "If you don't secure a dimension, all users can access the values in that dimension." Agents inherit that gap.
- Learn lists a query timeout of 120 seconds and about 10MB returned per query.

**Security & identity**
- Learn says the authenticated user's security role decides what the agent can access and that row-level security is enforced. Users need both a BPA role and the Basic user role in finance and operations. BPA data access is disabled by default.
- Learn says the server currently requires Microsoft authentication clients; direct access from non-Microsoft clients might not work during the preview.

**Autonomy & actions**
- The two documented Analytics tools read the data model and run DAX queries. Learn also describes combining this server with the Dynamics 365 ERP MCP server to "trigger Dynamics 365 finance and operations actions"; that server's data tools can create, update and delete records, so agents that use both can act as well as analyse.

**Change & support**
- It is a preview, with BPA data refreshed twice daily, so answers can lag live transactions. Plan for behaviour to change before general availability.

## Cost and licensing

Learn states that BPA is "included as part of the Dynamics 365 Finance license" (BPA overview page). The Copilot Studio build guide lists Copilot Studio access, meaning a licence and permissions to create agents, as a prerequisite for building an agent there, and points to the technical details page for the environment and system prerequisites.

Copilot Studio agents can consume Copilot Credits, the unit that measures agent usage ([Billing rates and management](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management)). That page says employee-facing (Business to Employee) usage of Copilot Studio agents is included in the Microsoft Copilot USL when the user of the agent is licensed with Microsoft Copilot and the agent operates using that authenticated user's identity. The ERP Analytics MCP overview, Copilot Studio guide and FAQ name no execution rate, meter or price specific to this server at the time of writing (November 2026), so an Analytics MCP server-specific charge is not published.

The separate Dynamics 365 ERP MCP server has its own billing rules on its page, and they are not Analytics MCP server execution pricing. For that server, Copilot Studio ordinarily bills at its Agent Action rate, but authenticated Business-to-Employee usage by a Copilot USL licensed user is included and does not incur additional tool-call credit consumption. On other clients, that server charges 0.1 Copilot Credits per tool call for standard user licences; Dynamics 365 Finance Premium and Dynamics 365 Supply Chain Management Premium are exempt from that execution charge. Whether anything similar applies to the Analytics server is not published. Indirect cost is admin time to set BPA roles and dimension groups and to test them.

## Scope

Learn lists these prerequisites: Dynamics 365 finance and operations version 10.0.38 or higher; BPA version 2.4.3224 or higher; the Basic user role in finance and operations; the BPA user role; and an agent platform that supports MCP connections. Learn names Copilot Studio and Visual Studio Code with GitHub Copilot as supported clients.

Coverage follows what BPA covers: Record-to-Report, Procure-to-Pay and Order-to-Cash. The record lists Worldwide (Standard Multi-Tenant) and the Web platform; no other cloud is listed. The roadmap says enabled for admins/makers/marketers automatically; Learn separately requires BPA installation, permissions and an agent connection.

## Governance guidance

### Before rollout
- Check which finance and operations environments run version 10.0.38 or higher and BPA 2.4.3224 or higher, since Learn lists both as prerequisites.
- Review BPA users, roles and dimension groups (see the controls table), because unsecured dimensions are visible to every BPA user.
- Account for the documented external-model approval prerequisite when assessing the pilot.

### At rollout
- Pilot with a small group of makers and run the same questions as users with different dimension groups, which Learn advises as a test of row-level security.
- Tell makers the server is a preview, with a 120-second query timeout, about 10MB returned per query and twice-daily data refresh.
- Decide whether agents may combine this server with the Dynamics 365 ERP MCP server, since that adds create, update and delete tools.

### After rollout
- Review who holds BPA roles and which dimension groups they have as people change jobs.
- Watch Microsoft Learn and Message center for the licence, the relationship between automatic enablement and the preview prerequisites, and monitoring details listed under open questions.
- Re-read the Learn page when the roadmap status moves from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Dedicated on/off setting for the ERP Analytics MCP server</strong><br><small>Environment</small><br><small class="controls__note">Learn's troubleshooting says to check that the server is enabled but gives no steps. Access is gated by the BPA and finance and operations roles below.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can access BPA data, and so what an agent can query</strong><br><small>User</small><br><small class="controls__note">This opens user setup: search for the user, select Next, then assign at least one role and one dimension group. The BPA admin role gives access to the Administrator section.</small></td><td data-label="Admin UI"><strong>Business performance analytics</strong><br>Administration › Set up user <a href="https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/set-up-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which data values each BPA user, and so each agent acting for them, can see</strong><br><small>User</small><br><small class="controls__note">Secure dimensions first; enter a group name and select Next before choosing specific values. Dimensions that are not secured are visible to all users. Learn says the MCP server enforces row-level security by user role.</small></td><td data-label="Admin UI"><strong>Business performance analytics</strong><br>Administration › Set up dimension groups › Select specific values <a href="https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/set-up-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented controls sit in BPA and finance and operations security, not in a tenant-wide setting for this server. Learn says access is controlled through BPA user roles and Dynamics 365 finance and operations security roles, and that users need appropriate permissions in both. The first user who signs in to BPA becomes the BPA admin and can set up security.

No dedicated switch to turn the ERP Analytics MCP server on or off is documented; the Copilot Studio troubleshooting only says to check that the server is enabled. The **Allowed MCP clients** list is documented for the Dynamics 365 ERP MCP server, and the Microsoft 365 admin center can block an MCP server in its registry. Neither page says it covers the ERP Analytics MCP server, so do not rely on them for it until Microsoft confirms.

## Open questions

- How does roadmap automatic enablement relate to the documented preview prerequisites? Watch the ERP Analytics MCP overview page and Message center.
- Does the roadmap item match the preview server on Learn, and what does general availability add? The roadmap mentions connecting to Power BI as a tool; Learn lists two tools.
- Will a licence or meter apply to the server or to agent usage at general availability? Watch the Learn overview and Copilot Studio licensing pages.
- How do administrators monitor which BPA data agents read? Learn advises tracking data access patterns but names no log or report.
- Do the Allowed MCP clients list or the Microsoft 365 admin center MCP server block apply to this server?

<!-- rationale
risk: Medium. Agents can query finance data such as P&L, budgets and vendor performance as the signed-in user, and the documented controls are Business performance analytics roles and dimension groups; no dedicated on/off switch is documented.
cost: Variable. Copilot Studio agents can consume Copilot Credits, although qualifying authenticated employee-facing usage by Microsoft 365 Copilot licensed users is included. No Analytics MCP server-specific execution rate is published.
impact: Low. Learn lists Business performance analytics and finance and operations roles as prerequisites, so the people who notice are makers building agents and analysts who hold those roles.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; licensing.notes; rationale: cost / licensing: Employee-facing Copilot Studio usage is included when the user has Microsoft 365 Copilot and the agent operates using that authenticated user's identity. | Found: The "No charge" inclusion doesn't apply to agents powered by the Microsoft Copilot harness. Usage is limited to fair usage limits. | Fix: Replace the inclusion sentence with: "For agents powered by the standard harness, employee-facing usage is included in the Microsoft 365 Copilot user subscription licence when the user is licensed with Microsoft 365 Copilot and the agent operates using that authenticated user's identity, subject to fair usage limits. The inclusion does not apply to agents powered by the Microsoft Copilot harness." Apply the harness qualification to the licensing notes, cost rationale and the separate ERP MCP inclusion sentence too. Cite https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: The separate Dynamics 365 ERP MCP page says Copilot Studio ordinarily bills its tool calls at the fixed Agent Action rate. | Found: When you use the MCP server in Copilot Studio, the tool calls align with the Agent Action feature, which bills at a fixed rate per tool call. | Fix: Add after the separate ERP MCP fixed-rate statement: "Copilot Studio's current billing documentation differs: the rate card covers the standard harness, reasoning models add premium token charges, and agents powered by the Microsoft Copilot harness use separate usage-based billing." Cite https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management and https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Business performance analytics > Administration > Set up user opens BPA user setup. | Found: In Business performance analytics, on the Administration or Users page, select Set up user. ... Assign at least one role and one dimension group to the user. | Fix: The route reaches the correct setup wizard but stops before its access controls. Extend controls[1].ui.path to "Administration > Set up user > Assign at least one role and one dimension group"; retain the note's user search and Next instructions. The cited security page documents the assignment step. | Source: https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/set-up-security
- [supported, minor] Governance controls / role: The security page says the first user signing in to BPA becomes the BPA admin. | Found: The first user who signs in to the app is assigned the BPA admin role. | Fix: Add after the first-user sentence: "The installation page differs: as of Business performance analytics version 2.5, installation does not create a BPA admin by default, and you must set up your current user as a BPA admin." Cite https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/install-bpa. | Source: https://learn.microsoft.com/dynamics365/finance/business-performance-analytics/set-up-security
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist tells administrators to account for external-model approval, but that control has no controls-table row. | Found: Account for the documented external-model approval prerequisite when assessing the pilot. | Controls table: dedicated on/off setting; BPA user setup; BPA dimension groups. | Fix: Remove the checklist bullet "Account for the documented external-model approval prerequisite when assessing the pilot." Keep the already-supported external-model approval fact in Risk assessment; do not add a control row.
-->
