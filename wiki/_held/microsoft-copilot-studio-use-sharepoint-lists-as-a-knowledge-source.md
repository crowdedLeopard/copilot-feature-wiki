---
title: "Copilot Studio: SharePoint lists as an agent knowledge source"
slug: "microsoft-copilot-studio-use-sharepoint-lists-as-a-knowledge-source"
roadmapId: 566859
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Copilot Studio agents can use SharePoint lists as a knowledge source. Nothing changes until a maker adds a list; use is billed in Copilot Credits, and admins can restrict SharePoint knowledge and cap agent credits."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says Microsoft Copilot harness agents use consumption-based billing and are not covered by a Microsoft 365 Copilot licence. Standard harness rates are on the billing rates page. A rate specific to list knowledge is not yet published."
audiences: ["maker","power-platform-admin","service-owner","finops"]
tags: ["copilot-studio","sharepoint","knowledge-grounding","copilot-credits","dataverse","power-platform-admin-center","agents"]
sources:
  - title: "Add SharePoint as a knowledge source"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-sharepoint"
    kind: "learn"
  - title: "Add SharePoint lists (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-sharepoint-lists"
    kind: "learn"
  - title: "Quotas and limits"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-quotas"
    kind: "learn"
  - title: "Configure knowledge sources for agents in the Power Platform admin center (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule"
    kind: "learn"
  - title: "Choose knowledge sources for agents built in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/choose-knowledge-sources"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "pac governance"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/governance"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 566859"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566859"
    kind: "roadmap"
videos: []
related: ["microsoft-copilot-studio-dataverse-integration-on-copilot-studio","microsoft-copilot-studio-sql-server-support-in-microsoft-copilot-studio","copilot-credits","data-policies"]
controls:
  - governs: "Whether agents can use SharePoint and OneDrive as knowledge sources"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Knowledge sources for agents > Environment groups > environment group > Manage knowledge sources > SharePoint + OneDrive"
      docs: "https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule"
    api: null
    note: "Preview page. Also settable per environment by choosing Environments. Options: None, All, Custom. Learn's add-list steps use the Upload file > SharePoint entry the page maps to this rule."
  - governs: "Monthly Copilot Credit limit and hard stop for an agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Agents"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api: null
    note: "Select the agent, then Set limit and turn on Stop usage. Needs Power Platform Administrator, Global Administrator or an equivalent licensing role. Applies to Copilot Studio agents generally."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-07-07T23:01:01"
changes:
  - date: "2026-11-18"
    note: "First briefing for roadmap item 566859: SharePoint lists as a Copilot Studio knowledge source, with the conflicting list limits and Copilot Credit billing noted."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 68
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "83d7c511dceb9e98bd028671ba5bd8e5"
---

## What's changing

The roadmap item states that Microsoft Copilot Studio agents will be able to use SharePoint lists as a knowledge source, so that answers are grounded in structured list data such as tasks, inventory, customers or operations, "without manual data movement or complex integrations". The record lists Worldwide (Standard Multi-Tenant), the Web platform and the General Availability and Preview release phases. Status is In development, with a preview target of July CY2026 and a General Availability target of September CY2026. These are Microsoft's targets, and both months have passed while the record still shows In development.

The record has no more-info link, but Microsoft Learn already documents SharePoint lists as a knowledge source, and this briefing takes those pages as the closest description of the item. A maker opens the agent, selects **Add knowledge**, selects **SharePoint** in the **Upload file** section, then browses to a list or enters its URL. Learn says the selected lists are ingested into Dataverse and indexed, that the connection to the source is real-time, and that users authenticate with their SharePoint credentials. A separate Learn page for agents on the Microsoft Copilot harness describes analytical and aggregation queries over list data and calls the large-list support a preview.

The pages disagree on limits. The Microsoft Copilot harness page says up to 10 lists per agent and up to 120,000 rows, with quality and latency possibly degrading beyond that. The quotas page for the standard harness says up to 15 lists and up to 35,000 rows across the 15 lists, as long as the total stays within 120,000 rows, and says list queries return data from the first 2,048 rows. The standard harness SharePoint page says to use up to 10 lists per agent. Treat all three as unsettled while the feature is in preview.

## Why it matters

Lists often hold operational records such as tickets, procurement requests and inventory. This item lets makers connect them to agents, so SharePoint list permissions become the main control over what an agent can say. Learn states that users must have at least Read permission on the site or list, and that an agent responds with "no response" when the user lacks permission. Review the permissions of lists that makers are likely to connect before the option reaches them.

If nobody acts, nothing changes for existing agents: a maker has to add a list. The cost side deserves more attention. Learn says that agents on the Microsoft Copilot harness are billed for all usage and that building and testing consume credits, so makers can spend credits before an agent is shared.

## Risk assessment

**Data exposure**
- Learn says the selected lists are ingested into Dataverse and indexed, so list content is held in the environment where the agent lives. Confirm who can read that environment's data before makers connect lists of customer or personnel records.
- Learn says the user needs at least Read permission on the site or list. A list with broad read access becomes answerable through any agent that connects it.

**Security & identity**
- Learn says users authenticate with their SharePoint credentials and that the agent surfaces content the user has permission to access. Guest users are not covered: Learn says generative answers from SharePoint sources are not available to guest users in SSO-enabled apps.
- Learn says that if Restricted SharePoint Search is enabled, use of SharePoint is blocked. Expect failures in tenants that use it.

**Autonomy & actions**
- No new autonomy is documented: the pages describe answering questions from list data, not acting on lists.

**Change & support**
- Limits differ between Learn pages and the large-list support is described as a preview, so expect support questions about missing or slow answers.
- Learn says list views and document libraries are not supported as lists, and that the Attachments column is not reasoned over. Makers who connect those will see gaps rather than errors.
- Credit use starts when makers build and test, which can surprise environment owners.

## Cost and licensing

**Licence.** Learn says agents on the Microsoft Copilot harness use consumption-based billing and that this usage is not included with a user's Microsoft 365 Copilot licence (Manage costs for agents powered by the Microsoft Copilot harness). For standard harness agents, the billing rates page says employee-facing usage is included in the Microsoft Copilot user licence when the user is licensed and the agent operates using that user's identity.

**Meter.** Copilot Credits. Learn says that for Microsoft Copilot harness agents credits are charged for model tokens, tools (including knowledge) and the harness, from the moment a maker starts building. For standard harness agents, the billing rates page publishes a rate for generative answers (2 Copilot Credits). A credit rate specific to SharePoint list knowledge is not yet published.

**Caps.** An agent monthly limit in the Power Platform admin center has a hard stop that turns the agent off at the limit (controls table, row 2). Learn says limits are not applied instantly. An environment's credit allocation is not a boundary while it can draw on tenant capacity or a pay-as-you-go plan, and Azure budgets send alerts but do not stop use.

**Indirect costs.** Admin time to review list permissions and set limits.

## Scope

Makers and the users of agents that add a list. The record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform; it lists no US Government cloud. Learn documents the option in both the standard harness and Microsoft Copilot harness knowledge pages. The prerequisite stated on Learn is that a user has at least Read permission on the SharePoint site or list. Learn says list views and document libraries are not supported as lists. Capacity and credit controls need the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

## Governance guidance

### Before rollout
- Decide which environment groups may use SharePoint knowledge and set the **Knowledge sources for agents** rule for them (controls table, row 1); Power Platform administrators do this.
- Review read permissions on the lists makers are likely to connect, since Learn ties answers to the user's access; SharePoint site owners do this.
- Set a monthly limit with **Stop usage** on agents in development environments (row 2) and decide who reviews alerts.
- Brief makers on the documented limits: lists, not list views or document libraries, and the conflicting list and row counts.

### At rollout
- Test each connected list with an account that lacks access and confirm the agent responds with "no response".
- Run evaluations on the agent before production, as the Learn best practices advise.
- Check results for guest users and in tenants that use Restricted SharePoint Search, where Learn documents gaps.

### After rollout
- Review month-to-date billed credits and agent status on **Manage Agents** (row 2), and download the detailed report, which includes a **Knowledge sources / Tool used** column.
- Re-read the Learn pages and the roadmap item when the status moves from In development, because limits and billing may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether agents can use SharePoint and OneDrive as knowledge sources</strong><br><small>Environment group</small><br><small class="controls__note">Preview page. Also settable per environment by choosing Environments. Options: None, All, Custom. Learn's add-list steps use the Upload file &gt; SharePoint entry the page maps to this rule.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Knowledge sources for agents › Environment groups › environment group › Manage knowledge sources › SharePoint + OneDrive <a href="https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit and hard stop for an agent</strong><br><small>Agent</small><br><small class="controls__note">Select the agent, then Set limit and turn on Stop usage. Needs Power Platform Administrator, Global Administrator or an equivalent licensing role. Applies to Copilot Studio agents generally.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The **Knowledge sources for agents** page is marked preview. Its table lists **Upload files > SharePoint** under **SharePoint + OneDrive**, and Learn's steps for adding a list also start at the **SharePoint** option in the **Upload file** section. The **Custom** option allows or denies SharePoint and OneDrive sites by URL; the page does not say how list URLs are treated. If a group-level rule is set, the environment's setting cannot be changed there.

Microsoft Learn documents no API for the Knowledge sources for agents setting or for agent monthly limits at the time of writing (November 2026). The pac governance reference lists commands for environment group rule sets but does not name this rule. The agent limit applies to Copilot Studio agents generally, not only to this feature.

## Open questions

- Which list limits will apply at launch: 10 or 15 lists, and a 35,000-row or 120,000-row ceiling? Watch the Quotas and limits page.
- When will the roadmap item move from In development, given that the July and September CY2026 targets have passed? Watch the roadmap item and Message center.
- Does the Knowledge sources for agents **Custom** allow and deny list apply to individual list URLs?
- What credit rate applies to list knowledge, and does it differ between the standard and Microsoft Copilot harnesses? Watch the billing rates page.
- How do changes to a list's permissions reach the copy ingested into Dataverse? Watch the Add SharePoint as a knowledge source page.

<!-- rationale
risk: Medium. Makers can connect business lists to agents, and Learn says the lists are ingested into Dataverse and indexed; answers depend on each user's SharePoint permissions, which existing controls cover but which need checking.
cost: Variable. Usage is metered in Copilot Credits: Learn says Microsoft Copilot harness agents are billed for all usage, and a rate specific to list knowledge is not yet published.
impact: Medium. Makers who build agents, and the users of agents that gain list knowledge, notice it; nothing changes for existing agents until a maker adds a list.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Ingested list content is held specifically in the environment where the agent lives. | Found: Searched: Copilot Studio SharePoint lists ingested Dataverse stored same environment agent; SharePoint lists Dataverse environment stored Copilot Studio. Read knowledge-add-sharepoint and search excerpts for knowledge-unstructured-data, environments-first-run-experience and geo-data-residency. | Fix: Remove ', so list content is held in the environment where the agent lives'. Keep the documented statement that selected lists are ingested into Dataverse and indexed; the cited page does not specify the storage environment.
- [unsupported, major] Risk assessment: Change & support / behaviour: Makers connecting list views, document libraries or attachments will see gaps rather than errors. | Found: Searched: SharePoint lists no error Copilot Studio views. Opened requirements-quotas and knowledge-add-sharepoint; read SharePoint troubleshooting search excerpts. Only the Attachments limitation expressly says no error occurs, not list views or document libraries. | Fix: Replace 'Makers who connect those will see gaps rather than errors' with 'For attachments, Learn says the list is indexed without an error, but responses do not use attachment contents.' Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-quotas.
- [contradicted, blocker] front matter: licensing.model; Cost and licensing: Licence / consistency: The feature's licensing model is consumption-only even though the page covers both harnesses and documents licence-included standard-harness use. | Found: model: "consumption"; "For standard harness agents, the billing rates page says employee-facing usage is included in the Microsoft Copilot user licence when the user is licensed and the agent operates using that user's identity." | Fix: Set licensing.model to 'mixed'. Add to licensing.notes: 'For standard-harness agents, employee-facing usage is included in the Microsoft Copilot USL when the user is licensed and the agent uses that authenticated user's identity, subject to fair usage limits.' This is stated at https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management. Retain the separately qualified Microsoft Copilot harness consumption rule.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risk assessment: Change & support; Cost and licensing: Meter / cost: Microsoft Copilot harness credit charges can begin during building and testing before an agent is shared. | Found: Unlike the standard harness, which starts billing after publish, the Microsoft Copilot harness charges credits from the moment you start building. | Fix: In Risk assessment: Change & support, replace 'Credit use starts when makers build and test' with 'For Microsoft Copilot harness agents, credit use starts when makers build and test'. The billing overview distinguishes the standard harness, which starts billing after publish. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [supported, minor] summary; front matter: cost; Cost and licensing: Meter; rationale: cost / cost: Agent use is metered in Copilot Credits, making the cost variable. | Found: Copilot Credits are the unit that measures agent usage. ... | Generative answer ... | 2 Copilot Credits | No charge | | Fix: In the summary, replace 'use is billed in Copilot Credits' with 'use can consume Copilot Credits depending on the harness and user licence'. Keep cost 'variable'; the body already explains the licence-included standard-harness case. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [supported, minor] controls[0].note; Governance controls / applicability: The Upload files > SharePoint entry is mapped to the SharePoint + OneDrive knowledge-source setting. | Found: | Upload files > SharePoint | SharePoint + OneDrive | Configures whether agents can use SharePoint and OneDrive sites as knowledge sources. | | Fix: In Governance controls, replace 'Its table lists' with 'The Choose knowledge sources for agents built in Copilot Studio table lists'. The mapping is on the already-cited https://learn.microsoft.com/microsoft-copilot-studio/choose-knowledge-sources, not the Knowledge sources for agents configuration page. | Source: https://learn.microsoft.com/microsoft-copilot-studio/choose-knowledge-sources
- [supported, minor] Governance guidance: Before rollout / role: Power Platform administrators can configure environment-group rules. | Found: After you create the environment group, Power Platform tenant administrators can immediately add managed environments or configure the group's rules. | Fix: Cite https://learn.microsoft.com/power-platform/admin/environment-groups for the Power Platform administrator assignment in the first Before rollout bullet. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [supported, minor] Governance guidance: Before rollout / role: SharePoint site owners can review and change list permissions. | Found: Lists and libraries inherit permissions from the site to which they belong. If you're a site owner, you can stop permissions inheritance and change the permission settings for the list or library. | Fix: Cite https://learn.microsoft.com/sharepoint/understanding-permission-levels for assigning list-permission review to SharePoint site owners. | Source: https://learn.microsoft.com/sharepoint/understanding-permission-levels
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the governance checklist asks readers to review appears in the controls table. | Found: "Review read permissions on the lists makers are likely to connect"; the controls table contains only the knowledge-source rule and monthly agent credit limit. | Fix: The Before rollout list-permission review has no matching controls-table row. Remove that checklist bullet to make the checklist match the existing table; retain the permission-review advice in Why it matters.
-->
