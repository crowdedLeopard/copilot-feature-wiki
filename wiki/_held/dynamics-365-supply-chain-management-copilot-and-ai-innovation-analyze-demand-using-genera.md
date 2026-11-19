---
title: "Dynamics 365 Supply Chain Management: generative insights in Demand planning, with a trends metric at general availability"
slug: "dynamics-365-supply-chain-management-copilot-and-ai-innovation-analyze-demand-using-genera"
roadmapId: 577817
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Supply Chain Management"]
summary: "Demand planning generative insights are due at general availability in January CY2027 with a trends metric. No admin switch is documented; check licences and planner access."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Demand planning needs a licence for each relevant user in production. A licence or meter specific to generative insights is not yet published."
audiences: ["service-owner","power-platform-admin","change-adoption"]
tags: ["dynamics-365","supply-chain-management","demand-planning","ai","analytics","licensing","security-roles","row-level-security"]
sources:
  - title: "Microsoft 365 Roadmap 577817"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577817"
    kind: "roadmap"
  - title: "Generative insights for Demand planning (production-ready preview)"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/generative-insights"
    kind: "learn"
  - title: "Responsible AI FAQ for Generative insights for Demand planning (production-ready preview)"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/faq-demand-planning-generative-insights"
    kind: "learn"
  - title: "Demand planning license requirements"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/demand-planning-licensing"
    kind: "learn"
  - title: "Install, enable, and set up Demand planning"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/install-demand-planning"
    kind: "learn"
  - title: "Security roles and row-level security in Demand planning"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/users-access"
    kind: "learn"
  - title: "Assign a security role to a user"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Demand planning licence (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    kind: "learn"
  - title: "Which users hold the Demand planning security roles (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
videos: []
related: ["security-roles"]
controls:
  - governs: "Which users hold a Demand planning licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    note: "General licence assignment. The Demand planning licensing page links both the assignment pages and does not name this Graph call. Needs License Administrator or User Administrator."
  - governs: "Which users hold the Demand planning security roles"
    scope: "user"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "Dataverse security roles in general. The request body names the role as @odata.id. Demand planning roles are listed on its security roles page."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-22T23:45:43"
changes:
  - date: "2026-11-19"
    note: "First briefing: roadmap adds a trends metric at general availability; Learn still documents a preview with two metrics and no admin switch."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 58
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "ba894470af3c438262cc7c6078d522ac"
---

## What's changing

Generative insights in Demand planning for Dynamics 365 Supply Chain Management analyse sales history and forecast data across dimensions such as product and location. The roadmap item states that at general availability they gain a new metric, trends: the system clusters data by detected pattern, such as high trending, medium trending, relative flat and declining trend, and planners can view aggregated values by selected dimensions or drill into each planning object.

Microsoft Learn describes an earlier state. Its page on the feature is marked as a production-ready preview and says it "currently supports two metrics: seasonality and signal correlation". It does not mention trends. To use it, a planner opens a time series (for example Planning data > Forecasts), selects **Generate insights**, and then views confidence scores, key figures and natural-language descriptions for each insight. Production-ready previews are subject to supplemental terms of use.

The roadmap item is In development with a target of January CY2027, release phase General Availability, Worldwide (Standard Multi-Tenant) cloud, Web platform. These are Microsoft's targets, not commitments. The roadmap says it is enabled for end users automatically; Learn says the insights are produced when a planner selects **Generate insights** on a time series.

## Why it matters

Planners will see AI-generated pattern analysis inside the forecast screens without an administrator switching anything on, according to the roadmap. If nobody acts, the change arrives anyway, so the useful work is to decide who should rely on it and how.

The Responsible AI FAQ says AI-generated content should not be used without manual review or supervision, so the wiki's view is that a change to forecasts based on a generated insight needs a named reviewer. Microsoft Learn describes no setting that turns generative insights off separately, which makes licences, roles and row-level access the controls you have today.

## Risk assessment

**Data exposure**

- Generative insights run an AI model over a planner's time series and report contributors by dimension, such as the products or locations behind a pattern. Row-level access rules decide which data a Demand Planning Contributor can see; whether generated insights are limited to that user's rows is not described on the feature page, so confirm it with test users.
- The Responsible AI FAQ recommends having enough control over data permissions so that business data cannot be manipulated to influence the AI's processing.

**Security & identity**

- Access follows the Demand planning security roles (Demand Planning Contributor, Demand Planning Manager, System Administrator) and a Demand planning licence.

**Autonomy & actions**

- The feature page describes graphs, confidence scores and natural-language descriptions for the planner to read. The risk is a planner acting on a wrong or low-confidence insight; the FAQ says to review the response and compare it with actual demand plan data before modifying a demand plan.
- The FAQ states that the AI-generated results are always presented in US English and that a maximum of fifteen seasonal patterns can be detected, with products that have insufficient data grouped under *Insufficient data*.

**Change & support**

- The roadmap adds trends at general availability, while the Learn page lists two metrics. Expect the feature's screens and wording to change between preview and general availability.
- The FAQ says Microsoft might disable Copilot-driven features for selected customers if abuse of the functionality is detected.

## Cost and licensing

Microsoft's licensing page for Demand planning says that to use Demand planning in a production environment, each relevant user must have a licence for it, and an administrator must assign one to each user who needs it. Prices are on Microsoft's Supply Chain Management pricing page and in the Dynamics 365 Licensing Guide, which that page links.

A licence or meter specific to generative insights is not yet published. The Demand planning licensing page does not mention generative insights or Copilot Credits, and the feature page names no licence. The cost that is known is therefore indirect: licence assignment, planner briefing and the review time that AI-generated output needs.

## Scope

**Who**: the roadmap says end users get it automatically. In practice that means users who can open Demand planning: the install page says users need the Power Platform roles for the features they use, and the security roles page lists Demand Planning Contributor (view, and edit data they have access to), Demand Planning Manager and System Administrator. Contributors see data only where a row-level access rule grants it.

**Where**: Demand planning, a Power Platform app installed from the Power Platform admin center and linked to Supply Chain Management. The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform only.

**When**: target January CY2027 per the roadmap, status In development. Learn currently documents a preview with seasonality and signal correlation.

**Prerequisites**: a Demand planning licence for each relevant user, and Demand planning installed and enabled. The install page says the Demand Planning feature in Feature management is turned on by default as of Supply Chain Management version 10.0.40.

## Governance guidance

### Before rollout

- Identify which planners and managers hold a Demand planning licence, and assign missing licences in the Microsoft 365 admin center (first controls row).
- Review which users hold Demand Planning Contributor, Demand Planning Manager and System Administrator in each environment (second controls row).
- Review the row-level access rules that limit what each Demand Planning Contributor can see, and test with a contributor account that generated insights show only expected products and sites.
- Brief planners that insights are AI-generated, appear in US English and need manual review before a forecast is changed.

### At rollout

- Compare the insight types that appear against the Learn page, and record whether trends is present once the roadmap item launches.
- Ask planners to check each insight against the actual demand plan data before editing a forecast, as the FAQ advises.

### After rollout

- Watch the Learn page and "What's new or changed in Demand planning" for the move from preview to general availability and for any licence or setting added for generative insights.
- Revisit the ratings on this page when a licence, meter or admin setting is published.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a Demand planning licence</strong><br><small>User</small><br><small class="controls__note">General licence assignment. The Demand planning licensing page links both the assignment pages and does not name this Graph call. Needs License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Demand planning security roles</strong><br><small>User</small><br><small class="controls__note">Dataverse security roles in general. The request body names the role as @odata.id. Demand planning roles are listed on its security roles page.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Neither row switches generative insights on or off: they limit who can reach Demand planning at all. The generative insights page describes how to view insights and names no setting that turns them off; the Demand Planning feature switch in Feature management covers Demand planning as a whole, and Learn does not say whether it governs generative insights.

Licence assignment needs at least the License Administrator or User Administrator role, as the assignment page says. Assigning Dataverse security roles in the Power Platform admin center needs the System Administrator role or the privileges the assignment page lists. Row-level access rules are set up inside Demand planning by a system admin account under Configuration > Row level access, as described on the security roles page.

## Open questions

- Will the trends metric ship in the Demand planning version that carries general availability, and will the Learn page then list three metrics? Watch the Learn page and the roadmap item.
- Is there a setting, for a tenant, environment or role, to turn generative insights off while keeping the rest of Demand planning?
- Does generative insights carry a licence or meter beyond the Demand planning licence once it reaches general availability?
- Do generated insights respect a Demand Planning Contributor's row-level access rules in every view, including the dimension breakdown?

<!-- rationale
risk: Medium. The roadmap says end users get it automatically, it produces AI-generated advice that planners may act on, and Microsoft Learn describes no setting that turns it off.
cost: Low. Users already need a Demand planning licence; a separate licence or meter for generative insights is not yet published, so the known cost is admin time and planner briefing.
impact: Medium. Demand planners and managers in tenants that run Demand planning notice it; other users of Supply Chain Management do not.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; Why it matters; Governance controls; Open questions; rationale: risk / absence: Microsoft documents no admin setting that can turn generative insights off while retaining Demand planning. | Found: By default, the tenant-level setting that enables the deployment of Copilot bots in Dataverse environments is enabled. However, a tenant admin can disable this setting. If the setting is disabled, you can't use Copilot features in finance and operations apps. | Fix: Replace the broad no-admin-switch assertions with: 'The feature page documents no generative-insights-specific switch. Microsoft documents a tenant-level Publish bots with AI features setting and states that disabling it prevents use of Copilot features in finance and operations apps; its feature table includes Generative insights for Demand planning.' Cite https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot. Narrow the open question to a switch specific to generative insights, without treating licences and roles as the only documented controls. | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot
- [contradicted, blocker] Risk assessment: Data exposure; Scope; Governance guidance: Before rollout / applicability: Row-level access rules restrict every Demand Planning Contributor to explicitly granted rows. | Found: Users who have the Demand Planning Contributor role (but not Demand Planning Manager or System Administrator) can access Demand planning, but they can only view and edit data that they're granted access to. | Fix: Qualify each statement about contributor row-level restrictions in Risk assessment, Scope and the Before rollout checklist with 'who do not also hold Demand Planning Manager or System Administrator'. In Scope use: 'Contributors who do not also hold Demand Planning Manager or System Administrator can view and edit only data granted by row-level access rules.' The cited security roles page explicitly excludes those two additional roles. | Source: https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/users-access
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; front matter: targetDate; What's changing; Scope / record: General availability is due in January CY2027. | Found: "status": "In development", "targetDate": "January CY2027" | Fix: In the summary, replace 'are due at general availability in January CY2027 with a trends metric' with 'are targeted for general availability in January CY2027 with a trends metric'. The body already correctly calls this a target.
- [supported, minor] controls[0].api; Governance controls: first row / command: POST /v1.0/users/{id | userPrincipalName}/assignLicense assigns or removes a user's licences. | Found: Add or remove licenses for the user to enable or disable their use of Microsoft cloud offerings that the company has licenses to. POST /users/{id | userPrincipalName}/assignLicense | Fix: Keep the endpoint unchanged: the cited v1.0 reference supports it, so the deterministic path-string warning is not a fault. Add to the row note: 'The request body uses addLicenses to specify licences to add and removeLicenses to specify licence skuIds to remove; removeLicenses is required and can be empty.' | Source: https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits the standard for the verified default, target and risk. | Found: action: "prepare"; risk: "medium"; targetDate: "January CY2027"; defaultState: "on". The standard counts a month-only target from its first day and calls for act-now within about 60 days when risk or cost is medium or higher. | Fix: Set action to 'act-now'. January 1, 2027 is 43 days after the supplied November 19, 2026 run date; the roadmap enables the feature automatically and the page rates risk medium and identifies pre-rollout access and communication decisions.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the governance checklist asks administrators to review appears in the controls table. | Found: Review the row-level access rules that limit what each Demand Planning Contributor can see ... The controls table lists only licence assignment and security-role assignment. | Fix: The Before rollout step asking administrators to review row-level access rules has no corresponding controls-table row. Remove that checklist step; the existing prose about where row-level rules live can remain. Do not add a control row as part of this correction.
-->
