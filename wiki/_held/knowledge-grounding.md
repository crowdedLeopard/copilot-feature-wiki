---
kind: "concept"
title: "Knowledge grounding: which data can a Copilot Studio agent answer from?"
slug: "knowledge-grounding"
summary: "Knowledge grounding points a Copilot Studio agent at your own content through knowledge sources. Administrators use it to decide which source types makers may add, what grounded answers cost in Copilot Credits and when an agent may answer from general knowledge."
created: "2026-11-18"
updated: "2026-11-18"
version: 1
tags: ["knowledge-grounding","copilot-studio","agents","dataverse","sharepoint","copilot-credits","data-policies","power-platform-admin-center","copilot-connectors"]
covers: []
sources:
  - title: "Knowledge sources summary"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
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
  - title: "Search for Dataverse records"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/search/overview"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Manage knowledge sources in an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-edit-source"
    kind: "learn"
related: ["copilot-credits","data-policies","work-iq","agent-identity","managed-environments","microsoft-copilot-studio-dataverse-integration-on-copilot-studio"]
controls:
  - governs: "Which knowledge source types agents may use: SharePoint and OneDrive, public websites, uploaded documents"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Knowledge sources for agents > environment group or environment > Manage knowledge sources"
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
      call: "GET [Organization URI]/api/data/v9.2/organizations?$select=isexternalsearchindexenabled"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/search/overview"
    note: "Sign in as a system administrator. The API call reads whether search is enabled; a call that changes it is not documented on that page."
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
    note: "Maker-side. Requires generative orchestration and Authenticate with Microsoft."
confidence: "medium"
dependents: 12
changes:
  - date: "2026-11-18"
    note: "First version of the page, covering Copilot Studio knowledge sources, their credit rates and the admin and maker controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 81
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "094915bb533625b9cb626c5ed56c8a1d"
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

With agent user authentication, the agent only surfaces content that the asking user can access. SharePoint, Dataverse and connector sources need user authentication configured (see [agent identity](/concepts/agent-identity/)). Dataverse sources also need Dataverse search in the environment, take up to 15 tables per source and need the agent's authentication set to **Authenticate with Microsoft**. When an agent has more than 25 different knowledge sources, generative orchestration filters them with an internal GPT model.

Two agent settings shape how sources are used: **Allow ungrounded responses** and **Tenant graph grounding with semantic search**.

**A different sense.** Several briefings use the term for how agents reach Microsoft 365 and business data through Work IQ. That is explained in [Work IQ](/concepts/work-iq/) and is not covered here.

## Why it matters

Knowledge sources decide what an agent can say about your organisation and whose data it can reach. Makers choose them, so unless an administrator limits the types, each maker decides which SharePoint sites, websites or Dataverse tables an agent is grounded in. Microsoft's page for the administrator setting does not state its default, so read the current state in your tenant instead of assuming one.

**Allow ungrounded responses** decides whether an agent that used no source or tool may still answer from the model's general knowledge. Microsoft documents it as an agent setting in Copilot Studio; no admin-centre setting for it is documented at the time of writing (November 2026). Where it is left on, answers are not limited to the sources you configured.

## Cost and licensing

Grounded answers are metered in Copilot Credits (see [Copilot Credits](/concepts/copilot-credits/)). Microsoft's billing page, which describes agents on the standard harness, lists these rates: Classic answer 1 Copilot Credit, Generative answer 2 Copilot Credits, and Tenant graph grounding for messages 10 Copilot Credits. Its example is an agent grounded in a tenant graph using 12 Copilot Credits for one complex prompt.

The same page says employee-facing usage is included in the Microsoft Copilot USL when the agent's user is licensed with Microsoft Copilot and the agent operates under that authenticated user's identity, within fair usage limits. It also says agents incur charges for generative answers unless the agent was created in Agent Builder in Microsoft 365 and the response does not use tenant graph grounding.

Tenant graph grounding is optional for each agent. By default, users with Microsoft 365 Copilot licences use it; if not all end users have that licence, turning the setting on for the others comes at extra cost. Files added through **Upload files > SharePoint** are stored in Dataverse and consume data storage.

## Risks and limits

- **Ungrounded answers stay possible.** With **Allow ungrounded responses** on, the agent can answer from general knowledge without using any source. With it off, Microsoft says the agent can still combine general knowledge with retrieved content, so it is not a guarantee.
- **Turning it off withholds answers.** The agent then blocks any turn that used no source or tool, such as a follow-up answered from conversation history, and returns an answer from a source only if it carries an in-text citation. A correct but uncited answer is withheld.
- **The Documents setting is narrow.** Setting **Documents** to not allow uploads only blocks local file uploads; makers can still add files from SharePoint or OneDrive unless **SharePoint + OneDrive** is also restricted.
- **Uploaded files skip per-user checks.** Microsoft says the upload method lets anyone with permission to the agent access the file, whereas SharePoint sources verify the user's credentials.
- **Turning Dataverse search off breaks sources.** The index is removed within 12 hours, uploaded-file and SharePoint or OneDrive upload sources in agents stop working, and rebuilding takes an hour or more, or a couple of days for large organisations.
- **Web search reaches beyond your list.** When a maker turns on web search, it searches all public websites indexed by Bing, in parallel with any websites added as sources.
- **The tenant graph option needs sign-in.** It requires the agent's user authentication to be **Authenticate with Microsoft**.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which knowledge source types agents may use: SharePoint and OneDrive, public websites, uploaded documents</strong><br><small>Environment group</small><br><small class="controls__note">Preview. SharePoint and public websites offer None, All or Custom with Allow or Deny per URL. Set at environment group level, it can't be changed in the environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Knowledge sources for agents › environment group or environment › Manage knowledge sources <a href="https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether makers can add SharePoint knowledge sources through Upload files &gt; SharePoint</strong><br><small>Environment</small><br><small class="controls__note">The connector is Knowledge source with SharePoint and OneDrive in Copilot Studio. The cmdlet moves connectors to the named data policy group. See the data policies page.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit Policy › Next › Next › connector › three dots (⋮) › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Classification &lt;group&gt; -Connectors $connectors</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Dataverse search is on in an environment, which Dataverse knowledge sources and uploaded files need</strong><br><small>Environment</small><br><small class="controls__note">Sign in as a system administrator. The API call reads whether search is enabled; a call that changes it is not documented on that page.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse search <a href="https://learn.microsoft.com/power-platform/admin/configure-relevance-search-organization" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [Organization URI]/api/data/v9.2/organizations?$select=isexternalsearchindexenabled</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/search/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent may answer from the model's general knowledge without using a source or tool</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Requires generative orchestration.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agent › Generative AI settings › Knowledge › Allow ungrounded responses <a href="https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent uses tenant graph grounding with semantic search, which adds a charge</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Requires generative orchestration and Authenticate with Microsoft.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agent › Generative AI settings › Tenant graph grounding with semantic search <a href="https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Dataverse search is managed by signing in as a system administrator. The **Knowledge sources for agents** setting is preview documentation: set at environment group level it is distributed to the environments and can't be modified there. Its **Custom** option lets administrators allow or deny individual SharePoint and OneDrive or public website URLs.

The controls act at different points. The data policy connector controls whether makers can add SharePoint knowledge sources through **Upload files > SharePoint**; the Knowledge sources rule limits types and URLs; the agent settings are chosen by makers.

Two Learn pages say endpoint filtering can restrict the SharePoint or public website locations makers use as knowledge sources, but the endpoint filtering page lists HTTP, SQL Server, Azure Blob Storage, SMTP and desktop automation connectors and does not list them. Confirm in your own policy before relying on it.

For monitoring, Copilot Studio documents analytics on a per knowledge source basis, and Dataverse search storage reports show how much capacity each indexed table consumes.

## What to check

- Open **Knowledge sources for agents** for each environment group and environment and note whether SharePoint + OneDrive, Public websites and Documents are set to None, All or Custom.
- Review data policies for the **Knowledge source with SharePoint and OneDrive in Copilot Studio** connector in environments where makers add SharePoint sources.
- Confirm the Dataverse search state in each environment where agents use Dataverse tables, and plan for the 12-hour index removal before switching it off.
- Find agents with **Allow ungrounded responses** on and decide whether general-knowledge answers are acceptable for them.
- Check **Tenant graph grounding with semantic search** on agents whose users are not all licensed for Microsoft 365 Copilot, and estimate credits from the billing rates.
- Compare each agent's user authentication with the sources it uses; SharePoint, Dataverse and connector sources need it.
- Read the per-knowledge-source analytics before widening or removing a source.

## Open questions

- What is the default state of the **Knowledge sources for agents** setting, and does it apply to agents already published? Microsoft's preview page does not say.
- Is there an API or PowerShell equivalent for the **Knowledge sources for agents** setting, **Allow ungrounded responses** or tenant graph grounding? None is documented at the time of writing.
- Which admin setting turns off web search for agents powered by the Microsoft Copilot harness? Microsoft's page says the toggle is disabled if an admin turned it off but does not name the setting.
- Does endpoint filtering restrict SharePoint and public website knowledge sources? Microsoft's pages differ.
- Do the billing page's rates, written for the standard harness, apply unchanged to Microsoft Copilot harness agents?

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What to check: first bullet / admin-path: Documents, like SharePoint + OneDrive and Public websites, is set to None, All or Custom. | Found: Documents: Configures whether people can upload documents to their agents to use as knowledge sources. Yes: Agents can use uploaded documents as knowledge sources. No: Agents can't use uploaded documents as knowledge sources. | Fix: Replace the first checklist bullet with: 'Open Knowledge sources for agents for each environment group and environment; record None, All or Custom for SharePoint + OneDrive and Public websites, and Yes or No for Documents.' | Source: https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule
- [contradicted, blocker] Cost and licensing: tenant graph; controls[4].note / licensing: The page tells readers they can enable tenant graph grounding for unlicensed users at extra cost without stating the tenant licence and semantic index prerequisites. | Found: This feature requires the agent to share a tenant with a Microsoft 365 Copilot license. It also requires that a semantic index is configured for use. To use a semantic index, the Microsoft 365 Copilot license must be assigned to at least one user in the enterprise. | Fix: After the extra-cost sentence and in the control note, add: 'This requires a configured semantic index and at least one user assigned a Microsoft 365 Copilot licence in the agent's tenant.' Keep the existing generative orchestration and Authenticate with Microsoft requirements. | Source: https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Knowledge sources are managed at Security > Data and privacy > Knowledge sources for agents > environment group or environment > Manage knowledge sources. | Found: In the side pane, choose whether to sort by Environment groups or by Environments. Select the environment group or environment that you want to configure. | Fix: Include the omitted selector in both representations of controls[0].ui.path: Security > Data and privacy > Knowledge sources for agents > Environment groups or Environments > environment group or environment > Manage knowledge sources. | Source: https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule
- [supported, minor] controls[0].note; Governance controls / availability: The Knowledge sources for agents setting has preview documentation. | Found: [This article is prerelease documentation and is subject to change.] | Fix: Retain the dedicated page's preview qualification, but append: 'The rules index lists Knowledge sources for agents without a preview label and says unlabelled rules are generally available, so Microsoft's status descriptions differ.' Cite https://learn.microsoft.com/power-platform/admin/environment-groups-rules. | Source: https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule
- [supported, minor] What it is: authentication paragraph / behaviour: Generative orchestration filters more than 25 different knowledge sources with an internal GPT model. | Found: Generative orchestration filters knowledge sources by using an internal GPT model when there are more than 25 different knowledge sources. Files uploaded to the agent aren't part of the 25 knowledge source search limit. | Fix: Append to the filtering sentence: 'Uploaded files are excluded from this count.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio
- [supported, minor] What it is: A different sense / behaviour: Work IQ lets agents reach Microsoft 365 and business data for grounding. | Found: Work IQ is a workplace intelligence layer that enables agents to access and reason over organizational and business data, context, and tools. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/ to sources for the Work IQ distinction; the linked wiki concept is not Microsoft evidence. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/
- [supported, minor] Risks and limits: Web search / behaviour: Web search runs in parallel with searches of configured website sources. | Found: This type of search happens in parallel with any searches of public websites you added as knowledge sources. | Fix: Begin this bullet 'For the standard-harness setting described in Knowledge sources summary, ...'. Append: 'For Microsoft Copilot harness agents, Microsoft instead says existing website sources are kept but not used while web search is on.' Cite the already-listed https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-edit-source. | Source: https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio
- [contradicted, minor] What to check: authentication bullet; Governance controls table / consistency: The checklist asks readers to review agent user authentication, but that control has no dedicated row in the table. | Found: Compare each agent's user authentication with the sources it uses; SharePoint, Dataverse and connector sources need it. The table covers knowledge source types, the SharePoint upload connector, Dataverse search, ungrounded responses and tenant graph grounding. | Fix: Remove the authentication checklist bullet; retain the already-supported authentication prerequisites in What it is. This corrects the checklist/table mismatch without adding a control row.
-->
