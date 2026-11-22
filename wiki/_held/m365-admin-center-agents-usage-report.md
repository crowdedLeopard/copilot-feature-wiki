---
title: "Microsoft 365 admin center: Agents usage report"
slug: "m365-admin-center-agents-usage-report"
roadmapId: 497999
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Copilot (Microsoft 365)"]
summary: "A new Agents usage report in the Microsoft 365 admin center shows who uses agents in Copilot Chat and Microsoft 365 apps, split by licence and creator type. It is a view, not a switch; admins choose who reads it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "August CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published: the Learn report page and the usage reports overview name roles, not a licence, for viewing the report. The report splits users by Microsoft Copilot licence; agent access is licensed on its own pages."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["usage-reports","agents","m365-admin-center","copilot-chat","m365-copilot","analytics","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 497999"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=497999"
    kind: "roadmap"
  - title: "Microsoft Copilot Agents usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-agents-new"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Microsoft Copilot Agent usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-agents"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Purchase and manage agents in Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat"
    kind: "learn"
  - title: "copilotReportRoot resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/reports/resources/copilotreportroot"
    kind: "learn"
videos: []
related: ["usage-reports","m365-admin-center-copilot-credits-usage-report","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u","m365-admin-center-usage-reports-m365-copilot-connectors","m365-copilot-agent-365-business-analytics-experience"]
controls:
  - governs: "Whether usage reports, including the Agents report, conceal user, group and site names"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    note: "Global administrators can change it. The request body sets displayConcealedNames (true conceals). Also applies to Graph, Power BI and Teams admin center reports."
  - governs: "Whether an agent listed in the report is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Acts on the agent, not on the report. The Graph API requires a Microsoft Agent 365 licence and is beta."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-11T22:53:53"
changes:
  - date: "2026-11-22"
    note: "First briefing: the Agents usage report as Learn documents it, with the name-concealing setting and the agent block control, and the licence and default left as not yet published."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 81 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 81
  confirmed: 76
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "adb0c5238a9e0eb3fefaaad29ce5f36a"
---

## What's changing

Microsoft is adding an **Agents usage report** to the Microsoft 365 admin center. The roadmap item describes a report scoped to agents in Microsoft 365 Copilot and Copilot Chat, with usage by both Microsoft 365 Copilot licensed and unlicensed users. It lists total active agent users, total active agents, active users split by licensed and unlicensed, active users and active agents split by publisher type, and usage details per user, per agent and per user-agent pair.

Microsoft Learn now documents the report. It tracks agents in Microsoft Copilot Chat and in Word, Excel and PowerPoint, across Declarative, SharePoint and Custom engine agents built by your organisation, Microsoft or third parties. Learn says usage can be viewed within an hour of a user interacting with an agent, and that the report covers the last 7 or 30 days; 90 and 180 days are to be added "in a future update", with no date given. An active user is one who asks an agent a question and receives a response. The roadmap's "publisher type" appears on Learn as **Creator type**, with the values Your Users, Your org, Microsoft and Third-party.

To open it, go to Reports, then Usage, then under Reports select Microsoft Copilot and then Agents. Learn lists some usage as out of scope: Cowork usage is reported in the separate Cowork usage report, and SharePoint agents used in Teams are not currently included. Learn marks the earlier Microsoft Copilot Agent usage report as deprecated and points to this one. The roadmap item shows status Launched, release phase General Availability, a target of July CY2026 and a preview date of August CY2025, for Worldwide (Standard Multi-Tenant) on the web.

## Why it matters

This is the first place the record shows agent adoption across licensed and unlicensed users together, and by who built the agent. Creator type matters most for the **Your Users** group: Learn describes these agents as not listed in the organisation-wide catalogue, usable by their creator or shared by link within the organisation. A rising Your Users count tells you where unmanaged agents are spreading before you decide to block any.

The report also gives finance and licensing owners a basis for the licensing conversation. Learn's Copilot Chat page says access to agents that use shared tenant data is pay-as-you-go only for Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) users, so unlicensed agent users in this report are the people to compare against your Copilot Credits reporting. Microsoft has not stated whether the report appears in a tenant with no admin action, so treat it as something to open and check, not something that will reach you.

## Risk assessment

**Data exposure**

- Learn states that usernames, display names, groups and sites are hidden in usage reports by default. The user details table lists username, display name, number of agents used and agent responses received, so the setting that conceals names decides whether individuals are identifiable. See the first controls row.
- A Global administrator can reveal names. Learn says the setting also applies to usage reports in Microsoft Graph, Power BI and the Teams admin center, and that showing identifiable user information is a logged event in the Microsoft Purview portal audit log.

**Security & identity**

- Learn lists the roles that can view usage reports, among them Global Administrator, Reports Reader and AI Administrator. Usage Summary Reports Reader and User Experience Success Manager are listed "with no user details". Choose the narrowest role that fits each reader.

**Autonomy & actions**

- No change: Learn describes the report as a view of usage and documents no action taken from it. Acting on an agent the report shows is done in the agent controls (second controls row).

**Change & support**

- Learn says the total active user count can be lower than the licensed plus unlicensed counts if a user's licence changes during the period, so expect questions about figures that do not add up.
- Cowork usage and SharePoint agents used in Teams are not in the report. A count here is not a complete count of agent activity in the tenant.
- Anyone relying on the earlier Agent usage report is using one Learn marks as deprecated.

## Cost and licensing

**Licence to view the report.** The Learn report page and the usage reports overview give roles as the prerequisite for viewing and name no licence, meter or charge for the report itself. A licence statement for the report is not yet published; this briefing does not conclude that none is needed.

**What the report segments by.** It splits users by whether they hold a Microsoft Copilot licence. Learn's Copilot Chat page says agents using public data are available for Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) licences, access to agents that use shared tenant data is pay-as-you-go only, pay-as-you-go agents are turned off by default for those users, and agent use comes with a Microsoft 365 Copilot (Premium) licence.

**Spend.** The report's metrics are users, agents and responses; spend in Copilot Credits is reported in the separate Microsoft Copilot credits report listed in the usage reports overview (see [the Copilot Credits usage report briefing](/features/m365-admin-center-copilot-credits-usage-report/) and [Copilot Credits](/concepts/copilot-credits/)). Indirect cost is admin time to review it.

## Scope

**Who and where.** The roadmap lists Worldwide (Standard Multi-Tenant), on the web. The usage reports overview lists Microsoft Copilot Agent usage as available in the public cloud and as N/A for GCC, GCC High and DoD. Its notes say N/A with note 1 means the report will be released in the future, and note 2 means the service is not available in the environment and there is no plan to release it. For US Government clouds see [the US Government usage reports briefing](/features/m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u/).

**Who can read it.** The roles Learn lists for usage reports, including Global Administrator, Reports Reader and AI Administrator. Two roles see no user details.

**What it counts.** Agents in Copilot Chat and in Word, Excel and PowerPoint, used by licensed and unlicensed users. Agents from Copilot Studio and Teams Toolkit that an admin approved are included, as are agent builder agents shared with other users. Periods are 7 and 30 days.

## Governance guidance

### Before rollout

- Decide which of the roles Learn lists for usage reports will read this report, and whether any reader needs user details; two of the listed roles see none.
- Decide whether usernames and display names should be visible, because the setting is tenant-wide and covers Graph, Power BI and Teams admin center reports as well.
- Tell anyone who relies on the earlier Microsoft Copilot Agent usage report that Learn marks it deprecated.

### At rollout

- Open Reports > Usage > Microsoft Copilot > Agents and note the 7-day and 30-day figures for total active users, licensed and unlicensed users, and total active agents as a baseline.
- Compare the Your Users and Your org agent counts with the agents your organisation has approved.
- Record that Cowork and SharePoint agents used in Teams fall outside the report, so adoption figures are not read as complete.

### After rollout

- Review the agent details table for agents with unlicensed active users and decide whether any should be blocked through All agents.
- Compare unlicensed agent usage with the Microsoft Copilot credits report to see where pay-as-you-go consumption could arise.
- Check the Learn page for the 90-day and 180-day periods it says will be added.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether usage reports, including the Agents report, conceal user, group and site names</strong><br><small>Tenant</small><br><small class="controls__note">Global administrators can change it. The request body sets displayConcealedNames (true conceals). Also applies to Graph, Power BI and Teams admin center reports.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent listed in the report is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Acts on the agent, not on the report. The Graph API requires a Microsoft Agent 365 licence and is beta.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The conceal setting is tenant-wide and Learn says Global administrators can change it. The block control governs the availability of an agent the report lists, not the report: the report page links to Copilot controls in the Microsoft 365 admin center as the place to manage agents and documents no action inside the report. For agents built in Agent Builder or Copilot Studio, Learn says blocking also affects host products such as Outlook and Teams; for agents built in SharePoint or Microsoft Foundry it affects availability in Copilot Chat. Learn states that the Package Management API behind the Graph call requires a Microsoft Agent 365 licence. Assigning the roles that can view the report is done through Microsoft Entra roles in the admin centre; its path is not given here.

## Open questions

- Does the report appear in a tenant without any admin action, and is there a tenant setting that turns it off? Microsoft has not stated the default; watch the Learn report page and Message center.
- When will the 90-day and 180-day periods arrive? Learn says only "a future update".
- Will the report reach GCC and GCC High? The roadmap lists Worldwide only, and the overview lists those clouds as to be released in the future.
- Is there a Microsoft Graph report method for agent usage data? At the time of writing (November 2026) the Copilot usage report API reference lists four methods, none for the agents report.
- Is a licence needed to view the report beyond the admin role? Neither Learn page says.

<!-- rationale
risk: Low. The report counts agent usage and takes no action; the one exposure is that usernames are hidden by default and a Global administrator can reveal them for every usage report.
cost: Low. The Learn report page lists roles as its prerequisite and names no licence or charge for viewing it, so the known cost is admin time; spend for agent use is metered elsewhere.
impact: Low. Administrators and report readers see it; end users notice nothing because the report observes usage and changes no agent's availability.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters, first sentence / behaviour: This is the first place the record shows adoption across licensed and unlicensed users together and by agent creator. | Found: Searched: '"Agents usage report" "first" licensed unlicensed publisher type'; read the roadmap and new and deprecated Agents report pages. They describe coverage but do not establish a first. | Fix: Replace the sentence with 'The report shows agent adoption across licensed and unlicensed users together, and by who built the agent.'
- [contradicted, blocker] front matter: licensing.model; Cost and licensing: Licence to view the report; Open questions / licensing: Licensing for the report is not yet published, so its licensing model is unknown. | Found: Basic usage insights for Microsoft Services (1P) agents (active users) in MAC agent usage report | Microsoft 365 admin center | Yes | Yes | Yes | Fix: Set licensing.model to 'mixed'. Replace the unpublished-licensing statement and corresponding open question with 'The Microsoft Agent 365 service description lists basic active-user insights in the MAC agent usage report for Microsoft Services (1P) agents as core capability included with a Microsoft cloud subscription, and for Non-Microsoft Services (3P) agents as premium capability only. Microsoft Agent 365 is available as a stand-alone subscription with eligible Microsoft 365 subscriptions and is included with Microsoft 365 E7. These service categories should not be equated with the report's Creator type categories.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [contradicted, blocker] controls[1].governs; Governance controls; Governance guidance: After rollout / applicability: The admin center block control prevents organisation-wide use of an agent listed in the report without an enforcement qualification. | Found: Active enforcement mode – Admin actions that you initiate from the Microsoft 365 admin center fail and aren't applied to the agent. | Fix: Keep the supported block path, but append to controls[1].note and the blocking guidance: 'Admin center actions fail for agents in a Power Platform environment whose firewall is in active enforcement mode; Microsoft directs administrators to run the action directly against the Power Platform API in that case.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions. Do not add an unverified replacement API call. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: Cost is low because admin time is the only known cost and report licensing is unpublished. | Found: Basic usage insights for Non-Microsoft Services (3P) agents (active users) in MAC agent usage report | Microsoft 365 admin center | No | Yes | Yes | Fix: Set cost to 'medium' and replace its rationale with 'Medium. The Microsoft Agent 365 service description lists basic active-user insights for Non-Microsoft Services (3P) agents in the admin center agent usage report as premium capability only; Microsoft Services (1P) insights are included as core capability with a Microsoft cloud subscription. Reviewing the report also takes admin time.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365; do not infer that all Third-party creator-type agents require premium licensing. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing, third paragraph; Governance guidance: At rollout / admin-path: The report opens at Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Agents. | Found: Select Usage. On the Usage page, under Reports, select Microsoft Copilot, and then select Agents. | Fix: Give the heading-inclusive path as 'Microsoft 365 admin center > Reports > Usage > Reports > Microsoft Copilot > Agents'; the second Reports is the heading on the Usage page. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-agents-new
- [supported, minor] Cost and licensing: Spend; Why it matters; Governance guidance: After rollout; rationale: cost / cost: Copilot Credits consumption is reported separately in the Microsoft Copilot Credits report. | Found: The Microsoft Copilot Credits report helps you manage metered consumption costs for Microsoft Copilot Chat. This report gives you visibility into credits used for your Microsoft Copilot pay-as-you-go billing policies. | Fix: Add https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits to sources for the statement about what the separate credits report measures. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [supported, minor] controls[0].api; rendered controls table / command: PATCH https://graph.microsoft.com/beta/admin/reportSettings updates tenant reporting settings. | Found: PATCH https://graph.microsoft.com/beta/admin/reportSettings | Fix: Append to controls[0].note: 'This Graph API is beta; Microsoft does not support its use in production applications.' | Source: https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta
- [supported, minor] Governance controls, final sentence; summary / role: Administrators assign report-viewing Microsoft Entra roles through the Microsoft 365 admin center. | Found: In the Microsoft 365 admin center, go to Roles > Role assignments. To view the administrator roles available for your organization, choose the Microsoft Entra ID, Exchange, Intune, or Billing tab. | Fix: Add https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles to sources for the statement about assigning roles in the admin center. | Source: https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles
- [contradicted, minor] Governance guidance: Before rollout, At rollout and After rollout; controls / consistency: Every control or monitoring view the governance checklist asks administrators to review has a corresponding controls row. | Found: Decide which of the roles Learn lists for usage reports will read this report; Open Reports > Usage > Microsoft Copilot > Agents; Compare unlicensed agent usage with the Microsoft Copilot credits report. The table contains only concealment and blocking. | Fix: The checklist's report-reader role decision, opening the Agents report, and comparing the Copilot Credits report have no corresponding controls rows. Record this table/checklist gap; do not add new rows as part of this correction.
-->
