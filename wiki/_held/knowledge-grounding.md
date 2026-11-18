---
kind: "concept"
title: "Knowledge grounding: which data can a Copilot Studio agent answer from?"
slug: "knowledge-grounding"
summary: "Knowledge grounding points a Copilot Studio agent at your own content through knowledge sources. Administrators use it to decide which source types makers may add, what grounded answers cost in Copilot Credits and when an agent may answer from general knowledge."
created: "2026-11-18"
updated: "2026-11-18"
version: 3
tags: ["knowledge-grounding","copilot-studio","agents","dataverse","sharepoint","copilot-credits","data-policies","power-platform-admin-center","copilot-connectors"]
covers: []
sources:
  - title: "Knowledge sources summary"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Configure knowledge sources for agents in the Power Platform admin center (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule"
    kind: "learn"
  - title: "Choose knowledge sources for agents built in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/choose-knowledge-sources"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Connector endpoint filtering (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    kind: "learn"
  - title: "Add unstructured data as a knowledge source"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-unstructured-data"
    kind: "learn"
  - title: "Configure Dataverse search for your environment"
    url: "https://learn.microsoft.com/power-platform/admin/configure-relevance-search-organization"
    kind: "learn"
  - title: "What is Dataverse search?"
    url: "https://learn.microsoft.com/power-apps/user/relevance-search-benefits"
    kind: "learn"
  - title: "Add Dataverse tables to your agent as a knowledge source (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-add-dataverse-tables"
    kind: "learn"
  - title: "Organization table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Manage knowledge sources in an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-edit-source"
    kind: "learn"
  - title: "Rules for environment groups"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups-rules"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
related: ["copilot-credits","data-policies","work-iq","agent-identity","managed-environments","microsoft-copilot-studio-dataverse-integration-on-copilot-studio"]
controls:
  - governs: "Which knowledge source types agents may use: SharePoint and OneDrive, public websites, uploaded documents"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Knowledge sources for agents > Environment groups or Environments > environment group or environment > Manage knowledge sources"
      docs: "https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule"
    api: null
    note: "Preview. SharePoint and public websites offer None, All or Custom with Allow or Deny per URL. Set at environment group level, it can't be changed in the environment."
  - governs: "Whether makers can add SharePoint knowledge sources through Upload files > SharePoint"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Edit Policy > Next > Next > connector > three dots (⋮) > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Classification <group> -Connectors $connectors"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    note: "The connector is Knowledge source with SharePoint and OneDrive in Copilot Studio. The cmdlet moves connectors to the named data policy group. See the data policies page."
  - governs: "Whether Dataverse search is on in an environment, which Dataverse knowledge sources and uploaded files need"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse search"
      docs: "https://learn.microsoft.com/power-platform/admin/configure-relevance-search-organization"
    api:
      kind: "rest"
      call: "PATCH /organizations(organizationid)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    note: "Sign in as a system administrator. The request body sets isexternalsearchindexenabled."
  - governs: "Whether an agent may answer from the model's general knowledge without using a source or tool"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Agent > Generative AI settings > Knowledge > Allow ungrounded responses"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio"
    api: null
    note: "Maker-side. Requires generative orchestration."
  - governs: "Whether an agent uses tenant graph grounding with semantic search, which adds a charge"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Agent > Generative AI settings > Tenant graph grounding with semantic search"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio"
    api: null
    note: "Maker-side. Requires generative orchestration and Authenticate with Microsoft. This requires a configured semantic index and at least one user assigned a Microsoft 365 Copilot licence in the agent's tenant."
confidence: "medium"
dependents: 14
changes:
  - date: "2026-11-18"
    note: "First version of the page, covering Copilot Studio knowledge sources, their credit rates and the admin and maker controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: Documents is a Yes or No setting, tenant graph grounding now states its semantic index and Microsoft 365 Copilot licence prerequisites, and web search, status and checklist wording was tightened."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 89 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: the Dataverse search API row now gives the documented PATCH on the organization table, Microsoft Copilot harness billing is stated from Microsoft's page, the multi-day index caveat is added and the analytics checklist bullet is removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 94 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-18"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 94
  confirmed: 92
  unconfirmed: 0
  contradicted: 2
  attempts: 3
  hash: "fabfca132a1d837c59b9f672a104e98e"
---

## What it is

Knowledge grounding means pointing an agent at your own content so that its answers come from that content rather than from the model's general knowledge. In Copilot Studio each pointer is a **knowledge source**: Microsoft states that knowledge sources ground an agent's responses in enterprise data. Makers add them on an agent's **Knowledge** page or in a generative answers node inside a topic, and a published agent uses the sources it was configured with.

| Source | What it searches | Authentication |
| --- | --- | --- |
| Public website | Bing, returning results only from the websites provided | None |
| Documents | Documents uploaded to Dataverse | None |
| SharePoint | A SharePoint URL, using GraphSearch | Agent user's Microsoft Entra ID authentication |
| Dataverse | Tables in the configured Dataverse environment | Agent user's Microsoft Entra ID authentication |
| Enterprise data using connectors | Connectors whose organisation data is indexed by Microsoft Search | Agent user's Microsoft Entra ID authentication |

With agent user authentication, the agent only surfaces content that the asking user can access. SharePoint, Dataverse and connector sources need user authentication configured (see [agent identity](/concepts/agent-identity/)). Dataverse sources also need Dataverse search in the environment, take up to 15 tables per source and need the agent's authentication set to **Authenticate with Microsoft**. When an agent has more than 25 different knowledge sources, generative orchestration filters them with an internal GPT model. Uploaded files are excluded from this count.

**A different sense.** Several briefings use the term for how agents reach Microsoft 365 and business data through Work IQ. That is explained in [Work IQ](/concepts/work-iq/) and is not covered here.

## Why it matters

Knowledge sources decide what an agent can say about your organisation and whose data it can reach. Makers choose them, so unless an administrator limits the types, each maker decides which SharePoint sites, websites or Dataverse tables an agent is grounded in. Microsoft's page for the administrator setting does not state its default, so read the current state in your tenant instead of assuming one.

**Allow ungrounded responses** decides whether an agent that used no source or tool may still answer from the model's general knowledge. Microsoft documents it as an agent setting in Copilot Studio; no admin-centre setting for it is documented at the time of writing (November 2026). Where it is left on, answers are not limited to the sources you configured.

## Cost and licensing

Grounded answers are metered in Copilot Credits (see [Copilot Credits](/concepts/copilot-credits/)). Microsoft's billing page, which describes agents on the standard harness, lists these rates: Classic answer 1 Copilot Credit, Generative answer 2 Copilot Credits, and Tenant graph grounding for messages 10 Copilot Credits. Its example is an agent grounded in a tenant graph using 12 Copilot Credits for one complex prompt.

Agents powered by the Microsoft Copilot harness are billed differently: Copilot Credits cover LLM tokens, tools including knowledge and MCPs, and the harness itself.

The same page says employee-facing usage is included in the Microsoft Copilot USL when the agent's user is licensed with Microsoft Copilot and the agent operates under that authenticated user's identity, within fair usage limits. It also says agents incur charges for generative answers unless the agent was created in Agent Builder in Microsoft 365 and the response does not use tenant graph grounding.

Tenant graph grounding is optional for each agent. By default, users with Microsoft 365 Copilot licences use it; if not all end users have that licence, turning the setting on for the others comes at extra cost. This requires a configured semantic index and at least one user assigned a Microsoft 365 Copilot licence in the agent's tenant. Files added through **Upload files > SharePoint** are stored in Dataverse and consume data storage.

## Risks and limits

- **Ungrounded answers stay possible.** With **Allow ungrounded responses** on, the agent can answer from general knowledge without using any source. With it off, Microsoft says the agent can still combine general knowledge with retrieved content, so it is not a guarantee.
- **Turning it off withholds answers.** The agent then blocks any turn that used no source or tool, such as a follow-up answered from conversation history, and returns an answer from a source only if it carries an in-text citation. A correct but uncited answer is withheld.
- **The Documents setting is narrow.** Setting **Documents** to not allow uploads only blocks local file uploads; makers can still add files from SharePoint or OneDrive unless **SharePoint + OneDrive** is also restricted.
- **Uploaded files skip per-user checks.** Microsoft says the upload method lets anyone with permission to the agent access the file, whereas SharePoint sources verify the user's credentials.
- **Turning Dataverse search off breaks sources.** The index is removed within 12 hours, uploaded-file and SharePoint or OneDrive upload sources in agents stop working, and rebuilding takes an hour or more, or a couple of days for large organisations. Microsoft also cautions that index removal or provisioning can take multiple days, depending on indexed data volume.
- **Web search reaches beyond your list.** For the standard-harness setting described in Knowledge sources summary, when a maker turns on web search, it searches all public websites indexed by Bing, in parallel with any websites added as sources. For Microsoft Copilot harness agents, Microsoft instead says existing website sources are kept but not used while web search is on.
- **The tenant graph option needs sign-in.** It requires the agent's user authentication to be **Authenticate with Microsoft**.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which knowledge source types agents may use: SharePoint and OneDrive, public websites, uploaded documents</strong><br><small>Environment group</small><br><small class="controls__note">Preview. SharePoint and public websites offer None, All or Custom with Allow or Deny per URL. Set at environment group level, it can't be changed in the environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Knowledge sources for agents › Environment groups or Environments › environment group or environment › Manage knowledge sources <a href="https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether makers can add SharePoint knowledge sources through Upload files &gt; SharePoint</strong><br><small>Environment</small><br><small class="controls__note">The connector is Knowledge source with SharePoint and OneDrive in Copilot Studio. The cmdlet moves connectors to the named data policy group. See the data policies page.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit Policy › Next › Next › connector › three dots (⋮) › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Classification &lt;group&gt; -Connectors $connectors</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Dataverse search is on in an environment, which Dataverse knowledge sources and uploaded files need</strong><br><small>Environment</small><br><small class="controls__note">Sign in as a system administrator. The request body sets isexternalsearchindexenabled.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse search <a href="https://learn.microsoft.com/power-platform/admin/configure-relevance-search-organization" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /organizations(organizationid)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent may answer from the model's general knowledge without using a source or tool</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Requires generative orchestration.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agent › Generative AI settings › Knowledge › Allow ungrounded responses <a href="https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent uses tenant graph grounding with semantic search, which adds a charge</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Requires generative orchestration and Authenticate with Microsoft. This requires a configured semantic index and at least one user assigned a Microsoft 365 Copilot licence in the agent's tenant.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agent › Generative AI settings › Tenant graph grounding with semantic search <a href="https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Dataverse search is managed by signing in as a system administrator. The **Knowledge sources for agents** setting is preview documentation: set at environment group level it is distributed to the environments and can't be modified there. The rules index lists Knowledge sources for agents without a preview label and says unlabelled rules are generally available, so Microsoft's status descriptions differ. Its **Custom** option lets administrators allow or deny individual SharePoint and OneDrive or public website URLs.

The controls act at different points. The data policy connector controls whether makers can add SharePoint knowledge sources through **Upload files > SharePoint**; the Knowledge sources rule limits types and URLs; the agent settings are chosen by makers.

Two Learn pages say endpoint filtering can restrict the SharePoint or public website locations makers use as knowledge sources, but the endpoint filtering page lists HTTP, SQL Server, Azure Blob Storage, SMTP and desktop automation connectors and does not list them. Confirm in your own policy before relying on it.

For monitoring, Copilot Studio documents analytics on a per knowledge source basis, and Dataverse search storage reports show how much capacity each indexed table consumes.

## What to check

- Open **Knowledge sources for agents** for each environment group and environment; record None, All or Custom for SharePoint + OneDrive and Public websites, and Yes or No for Documents.
- Review data policies for the **Knowledge source with SharePoint and OneDrive in Copilot Studio** connector in environments where makers add SharePoint sources.
- Confirm the Dataverse search state in each environment where agents use Dataverse tables, and plan for the 12-hour index removal, which Microsoft cautions can take multiple days, before switching it off.
- Find agents with **Allow ungrounded responses** on and decide whether general-knowledge answers are acceptable for them.
- Check **Tenant graph grounding with semantic search** on agents whose users are not all licensed for Microsoft 365 Copilot, and estimate credits from the billing rates.

## Open questions

- What is the default state of the **Knowledge sources for agents** setting, and does it apply to agents already published? Microsoft's preview page does not say.
- Is there an API or PowerShell equivalent for the **Knowledge sources for agents** setting, **Allow ungrounded responses** or tenant graph grounding? None is documented at the time of writing.
- Which admin setting turns off web search for agents powered by the Microsoft Copilot harness? Microsoft's page says the toggle is disabled if an admin turned it off but does not name the setting.
- Does endpoint filtering restrict SharePoint and public website knowledge sources? Microsoft's pages differ.

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[3].ui; Governance controls: fourth table row / admin-path: The maker path to Allow ungrounded responses is Agent > Generative AI settings > Knowledge > Allow ungrounded responses. | Found: Go to the **Settings** page for your agent. 2. In the **Generative AI** section | Fix: Replace the path in front matter and the rendered table with 'agent > Settings > Generative AI > Knowledge > Allow ungrounded responses'. Settings is the page the maker must open; Generative AI is within it, not a navigation item labelled 'Generative AI settings'. The cited knowledge-copilot-studio page supplies the Knowledge section and final setting. | Source: https://learn.microsoft.com/microsoft-copilot-studio/advanced-generative-actions
- [contradicted, blocker] controls[4].ui; Governance controls: fifth table row / admin-path: The tenant graph maker path is Agent > Generative AI settings > Tenant graph grounding with semantic search. | Found: Go to the **Settings** page for your agent. 2. In the **Generative AI** section | Fix: Replace the path in front matter and the rendered table with 'agent > Settings > Generative AI > Tenant graph grounding with semantic search'. The cited knowledge-copilot-studio page places the final control on the agent's Generative AI settings page; advanced-generative-actions documents entering Settings first. | Source: https://learn.microsoft.com/microsoft-copilot-studio/advanced-generative-actions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: opening paragraph / behaviour: Makers add knowledge sources on an agent's Knowledge page. | Found: You can incorporate knowledge at the agent level, in the **Knowledge** page | Fix: Begin the navigation sentence 'For agents powered by the standard harness, makers add them'. The Microsoft Copilot harness instead uses the Knowledge button on the Build tab, as documented at https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-add-existing-copilot; this qualification avoids presenting the older navigation as universal. | Source: https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio
- [supported, minor] controls[2].api and note; Governance controls: Dataverse API / command: PATCH /organizations(organizationid) can update the writable isexternalsearchindexenabled property controlling search enablement. | Found: | `Update`Event: True | `PATCH` /organizations(*organizationid*)See [Update](/en-us/powerapps/developer/data-platform/webapi/update-delete-entities-using-web-api#basic-update) | | Fix: Add the supporting pages missing from sources: https://learn.microsoft.com/power-apps/developer/data-platform/search/overview (states that IsExternalSearchIndexEnabled indicates whether search is enabled); https://learn.microsoft.com/microsoft-copilot-studio/advanced-generative-actions (Settings entry point and standard-harness orchestration scope); https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-add-existing-copilot (Microsoft Copilot harness navigation and its lack of a general-knowledge switch). The Organization reference lists IsExternalSearchIndexEnabled among writable columns and gives logical name isexternalsearchindexenabled. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization
-->
