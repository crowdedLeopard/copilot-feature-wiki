---
kind: "concept"
title: "Microsoft Frontier program: who in your tenant gets pre-release features?"
slug: "frontier-program"
summary: "The Frontier program is Microsoft's opt-in route to preview features before general availability. An administrator uses it to decide whether the tenant joins, which users and groups receive Frontier features, and which Frontier agents stay available."
created: "2026-11-21"
updated: "2026-11-21"
version: 1
tags: ["frontier-program","m365-admin-center","admin-controls","m365-copilot","agents","licensing","release-channels"]
covers: []
sources:
  - title: "Get started with the Microsoft Frontier Program"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    kind: "learn"
  - title: "Configure new Standard and Deferred release options for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Preview Microsoft Agent 365 features through the Frontier program"
    url: "https://learn.microsoft.com/microsoft-agent-365/frontier"
    kind: "learn"
related: ["m365-copilot-workforce-insights-agent","m365-copilot-sales-development-agent-is-now-available","copilot-credits","spending-policies"]
controls:
  - governs: "Whether the tenant opts in to Frontier, and whether all users or specific users and groups receive it"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Organization profile > Release preferences > Turn on Frontier"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    api: null
    note: "Roles: AI Administrator, Security Administrator or Office Apps Administrator. Unified experience rolling out from mid-November 2026; the existing path Copilot > Settings > View all > Copilot Frontier > Turn on Frontier remains."
  - governs: "Whether Microsoft-built agents, including Frontier agents, can be installed by users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agent > Settings > Agent and plugin access > Allow agents and plugins built by Microsoft"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    api: null
    note: "Learn says users still see Microsoft-built agents when this is disabled, but cannot install them."
  - governs: "Whether a specific Frontier agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta API; needs a Microsoft Agent 365 licence and the CopilotPackages.ReadWrite.All delegated permission. Not available in US Government clouds."
confidence: "medium"
dependents: 10
changes:
  - date: "2026-11-21"
    note: "New concept page on the Frontier program: enrolment, licences, preview terms and the controls that decide which users and agents it reaches."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 59
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "5b4df76e6996a026e107e0dc81d8d34f"
---

## What it is

The Microsoft Frontier program is an opt-in release audience that gives a tenant preview access to Microsoft 365 capabilities before general availability (GA). Microsoft describes it as covering Copilot agents and other AI and non-AI experiences, and says Frontier features are preview and subject to change.

Frontier is one of three audiences in Microsoft's audience-based release model:

| Audience | What it is |
| --- | --- |
| Frontier (opt-in) | Features before GA, for users who want to evaluate and prepare |
| Standard release | The default: features as soon as they are generally available |
| Deferred release | Deferred-eligible major updates about 30 days after rollout to Standard release begins |

The choices combine: a user can be opted in to Frontier and also assigned to Standard or Deferred release. Frontier decides when a user receives eligible pre-GA features; for everything else, their Standard or Deferred preference decides when they receive features at GA.

Frontier is managed at the tenant level. An administrator turns it on and then chooses **All users** or **Specific users and groups**. Enrolment alone is not enough for a particular feature: the user also needs the licence for that product, and agents have their own controls (see Governance controls). Frontier agents published after 29 March 2026 are available only to Frontier-enrolled users. Frontier agents appear in the Agent Store in Microsoft Copilot with **(Frontier)** in the name. Changes can take up to three hours to reach users.

## Why it matters

Frontier is the switch that decides whether preview behaviour, including agents that read tenant data and take actions, reaches your users at all. Enrolling "All users" exposes the whole tenant to preview features that Microsoft says may change or be withdrawn; enrolling a security group lets you run a pilot first.

The briefings that tag Frontier show how often it is the gate on a change: a Frontier label on an agent or feature means an administrator's enrolment choice, not a release date, decides who sees it. Microsoft's Learn page does not state whether Frontier is on or off for a tenant that has never visited the setting, so confirm the current state before assuming either.

## Cost and licensing

Frontier enrolment has its own prerequisites. To enrol users you need the AI Administrator, Security Administrator or Office Apps Administrator role. A Microsoft Copilot licence is not required to enrol users, but users need a Copilot licence, or a licence that includes Copilot access, to be shown Copilot-related Frontier features. Teams-related Frontier features likewise need a licence that includes Teams. The Get started page lists these roles and licences as its prerequisites and names no separate Frontier fee.

Microsoft states that certain Frontier experiences may only be available on a paid basis, and refers to its Copilot Credits guide for credit consumption. Charges belong to each feature: see [Copilot Credits](/concepts/copilot-credits/) and [Spending policies](/concepts/spending-policies/), and the feature's own briefing.

The Get started page notes that once the unified release preferences experience reaches commercial clouds, admins will no longer need a licence that includes Copilot to opt in. Microsoft's Agent 365 Frontier FAQ gives a different answer for the Copilot Frontier setting, saying a Copilot or E7 licence is needed to see it; the two pages differ.

## Risks and limits

- **Preview terms apply.** Frontier experiences may be modified, suspended or discontinued, may not be covered by standard support commitments or service level agreements, and may carry Frontier-specific preview terms. Do not build a business process on one.
- **Compliance coverage is reduced.** Microsoft states that HIPAA Business Associate Agreement coverage is not included and that Frontier features do not comply with ISO 27001, ISO 27002 or ISO 27018. Check this with your compliance owner before enrolling regulated users.
- **Enrolling "All users" is a tenant-wide decision.** Preview features, including agents, then reach every user who holds the right licence, so use **Specific users and groups** for a pilot.
- **Frontier does not override agent controls.** An agent that an admin turned off in the Agent view is unavailable regardless of Frontier enrolment, and Microsoft-built agents need **Allow agents and plugins built by Microsoft**.
- **Frontier never enables AI providers for you.** If a Frontier feature relies on a provider such as Anthropic and you have not approved it, the feature is not usable for your users.
- **Government clouds.** Microsoft states that Frontier is currently not available in GCC, GCC High or DoD.
- **Licensed admins.** Your own admin account needs the matching licence, or some Frontier settings and agents may not appear.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the tenant opts in to Frontier, and whether all users or specific users and groups receive it</strong><br><small>Tenant</small><br><small class="controls__note">Roles: AI Administrator, Security Administrator or Office Apps Administrator. Unified experience rolling out from mid-November 2026; the existing path Copilot &gt; Settings &gt; View all &gt; Copilot Frontier &gt; Turn on Frontier remains.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Organization profile › Release preferences › Turn on Frontier <a href="https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft-built agents, including Frontier agents, can be installed by users</strong><br><small>Tenant</small><br><small class="controls__note">Learn says users still see Microsoft-built agents when this is disabled, but cannot install them.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agent › Settings › Agent and plugin access › Allow agents and plugins built by Microsoft <a href="https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a specific Frontier agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Beta API; needs a Microsoft Agent 365 licence and the CopilotPackages.ReadWrite.All delegated permission. Not available in US Government clouds.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Enrolment and the agent-level controls are separate, and both must allow an agent before a user can use it. Enrolment sets who receives Frontier features and agents; **Agent and plugin access** and the per-agent **Block** action in the Agent view decide whether an agent is available at all. Microsoft Learn describes **Allow agents and plugins built by Microsoft** as the setting that allows Microsoft Frontier agents, and says Frontier does not override the Agent settings.

To give a pilot group a Frontier agent without relying on the Agent Store, add users or Microsoft Entra ID security groups on the agent's **Users** tab under **Agents** > **All agents**, then select **Install**. Microsoft notes you must assign those users in Frontier admin control as well.

The Package Management API needs a Microsoft Agent 365 licence. Learn documents no PowerShell or Graph call for the Frontier enrolment setting itself at the time of writing (November 2026). Learn also does not describe an audit event or report that records Frontier enrolment changes.

## What to check

- Open the Frontier setting in the Microsoft 365 admin center and record whether **Turn on Frontier** is on and whether it is set to **All users** or **Specific users and groups**.
- Confirm that you hold the AI Administrator, Security Administrator or Office Apps Administrator role before planning changes.
- Create a Microsoft Entra ID security group for pilot users and enrol only that group before widening access.
- Check that **Allow agents and plugins built by Microsoft** is set as you intend, and list which Frontier agents are blocked in **Agents** > **All agents**.
- Review which AI providers, such as Anthropic, are approved, because Frontier features that depend on one cannot be used until you approve it.
- Ask your compliance owner whether the missing HIPAA BAA and ISO coverage affects the users you plan to enrol.

## Open questions

- Is Frontier on or off for a tenant that has never changed the setting? The Learn page does not state a default.
- Which licence is needed to see the Copilot Frontier setting now that the unified release preferences experience is rolling out? The Get started page and the Agent 365 Frontier FAQ differ.
- Is there an API, PowerShell cmdlet or audit event for enrolling users in Frontier? None was found in Learn at the time of writing.

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api / absence: Automation for allowing Microsoft-built agents and plugins is not yet documented. | Found: These resources also support remediation and applyOnce. ... areMicrosoftAppsAllowed | Write | Boolean | Indicates whether apps, agents, and plugins built by Microsoft are allowed. | Fix: Set controls[1].api to kind graph, call 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', docs 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta'. Append to the row note: 'Preview TCM automation: the request body uses mode applyOnce and a baseline.resources entry with resourceType microsoft.agent.allowedagenttypes, resourceVersion 1, and properties.valueObject.areMicrosoftAppsAllowed set to true or false.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. The create-monitor reference explicitly documents applying a baseline in applyOnce mode, not merely monitoring it. | Source: https://learn.microsoft.com/graph/utcm-agent-resources
- [contradicted, blocker] Why it matters; Governance controls / applicability: Frontier enrolment universally decides whether Frontier preview agents reach users at all, and every agent requires enrolment as well as agent access controls. | Found: Frontier agents published before this date continue to be accessible to all users with a Microsoft Copilot license. | Fix: Replace the first sentence of Why it matters with 'Frontier enrolment controls access to eligible pre-GA features and newly published Frontier agents; Frontier agents published before 29 March 2026 remain accessible to all users with a Microsoft Copilot licence.' Replace its second paragraph's first sentence with 'A Frontier label does not by itself establish that enrolment is required: Microsoft exempts agents published before 29 March 2026.' Replace Governance controls' opening sentence with 'Enrolment and agent-level controls are separate; agents published from 29 March 2026 require Frontier enrolment as well as permission under the agent controls.' Keep the following sentences describing agent controls. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier
- [contradicted, blocker] Governance controls; Open questions / absence: Learn does not describe an audit event covering Frontier enrolment setting changes. | Found: Updated a Copilot setting | UpdateTenantSettings | An admin (or system on behalf of an admin) updated a Copilot setting. | Fix: Replace the audit-event absence with 'Microsoft documents the UpdateTenantSettings audit operation for changes to Copilot settings; the audit activities table does not name a Frontier-specific operation.' Cite https://learn.microsoft.com/purview/audit-log-activities. Copilot Frontier is explicitly a Copilot setting in the Get started page, so the documented general event's scope includes that existing setting. Remove 'or audit event' from the final Open questions bullet and its assertion that none was found; do not promise Frontier-specific fields or coverage of the new unified experience. | Source: https://learn.microsoft.com/purview/audit-log-activities#microsoft-365-copilot-admin-activities
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: factual premise about agents reading tenant data / behaviour: Frontier includes agents that read tenant data. | Found: Works across Microsoft 365: Autopilot uses authorized Teams, Outlook, OneDrive, and SharePoint information through its available tools. | Fix: Add https://learn.microsoft.com/copilot/autopilot/microsoft-autopilot-application-card to sources. Its Key features or capabilities section supports both factual premises in Why it matters about Frontier agents reading tenant data and taking actions; the current cited pages do not establish these specific capabilities. | Source: https://learn.microsoft.com/copilot/autopilot/microsoft-autopilot-application-card#key-features-or-capabilities
- [contradicted, minor] What to check: AI provider approvals / consistency: What to check tells administrators to review approved AI providers, but the controls table has no AI provider approval row. | Found: Review which AI providers, such as Anthropic, are approved ... [The controls table contains only Frontier enrolment, Microsoft-built agent access and individual agent blocking.] | Fix: Remove the What to check bullet beginning 'Review which AI providers'. It instructs readers to review a control absent from the table. Keep the verified provider dependency warning in Risks and limits; no new control row is required by this correction.
-->
