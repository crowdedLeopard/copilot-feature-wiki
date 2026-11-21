---
title: "Microsoft Copilot: Excel Agent builds charts, summaries and formulas from your data"
slug: "m365-copilot-excel-agent"
roadmapId: 543422
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)"]
summary: "Excel Agent is a launched Microsoft Copilot agent that builds Excel output from chat. Learn ties it to a paid Copilot licence and Anthropic models; the roadmap says no licence is needed. Admins can block the provider or the agent."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "March CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Learn says Word, Excel and PowerPoint Agents are available only to users with a paid Microsoft 365 Copilot licence. The roadmap says Excel Agent is available with or without that licence. Microsoft has not reconciled the two."
audiences: ["m365-admin","security","compliance","end-user"]
tags: ["excel","m365-copilot","copilot","agents","anthropic","licensing","enterprise-data-protection","data-residency"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Copilot (Microsoft 365): Excel Agent"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=543422"
    kind: "roadmap"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["work-iq"]
controls:
  - governs: "Whether Anthropic models, which the agent requires, are available to the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor"
    api: null
    note: "AI Administrator or Global Administrator. A Disable Anthropic as a Microsoft subprocessor option removes the agents for all users. Also affects other Anthropic-based features."
  - governs: "Which users or groups can use Anthropic models in Copilot and generative AI experiences"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor"
    api: null
    note: "Applies at provider level across Microsoft Copilot and Copilot Studio, not to Excel Agent alone."
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General agent control: whether Excel Agent is listed and covered is not stated. Graph is beta and needs a Microsoft Agent 365 licence."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-29T23:05:21"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: status Launched; Learn and the roadmap disagree on whether a Copilot licence is needed; the Anthropic setting is the main control."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 60
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "e9204a5957c5886cec492d78ac537d95"
---

## What's changing

Excel Agent is an agent in Microsoft Copilot that helps users turn data into charts, summaries and insights using formulas and logic. Users refine the result through multi-turn chat or open it in Excel for full editing and collaboration. The roadmap record gives Desktop, Mac and Web as platforms and Worldwide (Standard Multi-Tenant) as the cloud.

The roadmap status is Launched, with a target of March CY2026 and a preview from November CY2025. The release phases listed are General Availability and Preview.

Microsoft Learn documents this capability on a page titled "Word, Excel, and PowerPoint Agents in Microsoft Copilot". That page says the agents are installed by Microsoft, use Anthropic's AI models exclusively, and appear in the Tools menu and under All Agents in the Microsoft Copilot app when Anthropic models are enabled for the tenant. It does not use the roadmap's name "Excel Agent", so this briefing treats it as the same capability and flags that as an open question.

The two sources disagree on licensing. The roadmap says the agent is available to Microsoft 365 users with or without a Microsoft 365 Copilot licence. Learn says these agents are available only to users with a paid Microsoft 365 Copilot licence and are not available to Copilot Chat users without one. Both are reported here without choosing between them.

## Why it matters

The agent changes where spreadsheet work starts: a user can ask Copilot for a forecast or project plan and get a workbook generated by an Anthropic model, then open it in Excel. For a service owner that brings in a model provider the tenant may not have reviewed, and generated files that Learn says are stored in OneDrive.

Because Microsoft enables Claude models by default for most commercial-cloud customers outside the EU/EFTA and UK, expect licensed users in those tenants to see the agent without anyone switching it on. Where nobody acts, the agent follows the tenant's Anthropic setting, so that setting is the decision to take now.

## Risk assessment

**Data exposure**

- The agents use Work IQ to retrieve information from files, emails, meetings and sites the licensed user has permission to access. Anything a user can open can reach the model, so oversharing in SharePoint and OneDrive becomes a data-exposure issue here too.
- Learn says only relevant context is shared with the reasoning model and that sensitivity labels and compliance policies are respected.
- Learn says Anthropic models are currently excluded from the EU Data Boundary and, where applicable, in-country/region processing commitments. Tenants with data-residency obligations should decide on that basis.

**Security & identity**

- Anthropic operates as a Microsoft subprocessor under the Product Terms and Data Protection Addendum, and Learn says use of Anthropic models in Microsoft Copilot falls under Enterprise Data Protection. Review that against your own subprocessor policy.
- Access to the provider can be limited to users or Microsoft Entra security groups. Learn says that applies at provider level across Microsoft Copilot and Copilot Studio, so a change here also affects other Anthropic-based features.

**Autonomy & actions**

- No change to confirm beyond file creation: Learn describes these agents as creating Word, Excel and PowerPoint files within Microsoft Copilot, and the roadmap describes chat refinement of the output.

**Change & support**

- The agent can appear in the agent store even where users cannot use it, because Learn says store visibility does not show that Anthropic models are enabled. Expect help desk questions about an agent that is visible but not usable.
- Disabling Anthropic removes the agents for every user, including those with a paid Microsoft 365 Copilot licence, and other features that need Claude models stop with them.

## Cost and licensing

Learn says Word, Excel and PowerPoint Agents are available only to users with a paid Microsoft 365 Copilot licence and are not available to Copilot Chat users who lack one. The roadmap item says Excel Agent is available to Microsoft 365 users with or without a Microsoft 365 Copilot licence. Treat the Learn page as the stricter reading when budgeting, and watch Message center for a correction.

The Learn page names no meter, credit rate or price for these agents. No Copilot Credits charge is stated for them, so do not assume one or rule one out. The indirect costs are the licence for each user who needs the agent and admin time to review the Anthropic setting.

## Scope

**Users and licences:** per Learn, users with a paid Microsoft 365 Copilot licence, when Anthropic models are enabled for the tenant. The roadmap describes wider availability (see Cost and licensing).

**Platforms and cloud:** the roadmap lists Desktop, Mac and Web, and the Worldwide (Standard Multi-Tenant) cloud only. The roadmap record lists no US Government cloud for this item. Separately, Learn says Claude models aren't available for federal customers in GCC or for any customers in GCC High and DoD, and the agents require Anthropic models; confirm the effect before planning a government rollout.

**Regions:** Claude models are on by default for most commercial-cloud customers, excluding the EU/EFTA and the UK, where the Anthropic setting defaults to No users. Because the agents need Anthropic models, expect those tenants to need an admin opt-in first.

**Roles:** Learn says you must be an AI Administrator or Global Administrator to change the Anthropic setting. Learn says rollout of Anthropic as a subprocessor was phased, with full availability expected by the end of February 2026.

## Governance guidance

### Before rollout

- Decide whether the organisation accepts Anthropic as a subprocessor and the exclusion from the EU Data Boundary; the Microsoft 365 admin center row in the controls table sets it.
- Check which users hold a paid Microsoft 365 Copilot licence, since Learn ties the agents to that licence.
- Review oversharing on SharePoint and OneDrive sites the licensed users can reach, because the agents retrieve what each user can access.

### At rollout

- Restrict Anthropic access to a pilot Microsoft Entra security group if you want a staged start; this is the user and group row in the controls table.
- Tell users that generated files are saved in OneDrive and that they can open them in Excel for editing.
- Brief the help desk that the agent can be visible in the agent store without being usable.

### After rollout

- Re-check the Anthropic setting after any change to your region or compliance position; it covers all Anthropic-based features.
- Use the Block action on the All agents page if you need to withdraw the agent for the organisation, after confirming it is listed there.
- Watch Message center and the Learn page for a ruling on licensing and for any change to the data-boundary position.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Anthropic models, which the agent requires, are available to the tenant</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. A Disable Anthropic as a Microsoft subprocessor option removes the agents for all users. Also affects other Anthropic-based features.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic <a href="https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can use Anthropic models in Copilot and generative AI experiences</strong><br><small>Group</small><br><small class="controls__note">Applies at provider level across Microsoft Copilot and Copilot Studio, not to Excel Agent alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">General agent control: whether Excel Agent is listed and covered is not stated. Graph is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Disabling Anthropic is the broadest control: Learn says it prevents users from accessing the agents, including paid-licence holders, and it also affects other Anthropic-based features. Limiting access by user or group applies at provider level, not to Excel Agent alone.

The Block action is documented for agents in the Microsoft 365 admin center, and Learn says Microsoft-installed agents are managed similarly. The Learn page does not say that Excel Agent appears in the All agents list or what its entry is called, so check your own tenant. The Graph call needs a Microsoft Agent 365 licence and its page does not say whether it covers Microsoft-installed agents. A Power Platform setting also exists for Anthropic in Copilot Studio, but Learn presents it as a Copilot Studio and Power Platform control, not one for these agents.

## Open questions

- Is the roadmap's "Excel Agent" the same capability as the "Word, Excel, and PowerPoint Agents" on Learn, and does the Learn licensing rule apply to it?
- Which statement holds for entitlement: the roadmap's "with or without a Microsoft 365 Copilot licence" or Learn's paid-licence-only rule? Watch the Learn page and Message center.
- Does a charge in Copilot Credits or another meter apply to Excel Agent use, and where would it appear?
- Does Excel Agent appear in the Microsoft 365 admin center's All agents list so it can be blocked on its own, and does the Graph block call cover it?
- Will the agent run in tenants in the EU/EFTA and UK or in US Government clouds, where Claude models are off by default or unavailable?

<!-- rationale
risk: Medium. Learn says the agents run only on Anthropic models, which are outside the EU Data Boundary, and read files and mail the user can access through Work IQ; admins can block the provider.
cost: Low. The Learn page names a paid Microsoft 365 Copilot licence and no separate meter, while the roadmap says users with or without that licence; the main cost is licence and admin time.
impact: Medium. Licensed Copilot users see the agent in the Tools menu and under All Agents when Anthropic models are enabled for the tenant, so analysts and finance users notice it first.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary / licensing: The roadmap says no licence is needed. | Found: Available to Microsoft 365 users with or without a Microsoft 365 Copilot license. | Fix: Replace 'the roadmap says no licence is needed' with 'the roadmap says Microsoft 365 users can use it with or without a Microsoft 365 Copilot licence'. The record does not waive Microsoft 365 licensing.
- [unsupported, blocker] front matter: licensing.model / licensing: Excel Agent has a mixed licensing model. | Found: Searched: 'Excel Agent Word Excel PowerPoint Agents licensing pricing Copilot Credits meter'; 'Excel Agent license without'. Opened wordexcelppt-agents and usage-based-billing-overview-copilot-credits. Found conflicting entitlement statements, not a documented mixed model. | Fix: Set licensing.model to 'included' for the capability covered by Learn's named paid Microsoft 365 Copilot licence, as the schema defines inclusion in a named licence. Keep the existing notes reporting the roadmap's conflicting entitlement statement; disagreement is not a mixed licensing mechanism.
- [unsupported, major] Risk assessment: Data exposure, first bullet / behaviour: Anything a user can open can reach the model. | Found: Searched: 'Word, Excel, and PowerPoint Agents data access limits'. Opened wordexcelppt-agents and faq-wordexcelppt-agents. They describe authorised enterprise data and relevant uploaded files, not unrestricted support for anything the user can open. | Fix: Replace 'Anything a user can open can reach the model, so oversharing in SharePoint and OneDrive becomes a data-exposure issue here too' with 'Because the agents retrieve information the user has permission to access, review oversharing in SharePoint and OneDrive.'
- [contradicted, blocker] front matter: cost; Cost and licensing; rationale: cost / consistency: A low, indirect-cost-only rating is consistent with treating a paid licence for each required user as the main cost. | Found: cost: "low"; 'The indirect costs are the licence for each user who needs the agent and admin time'; 'the main cost is licence and admin time'. The schema defines low as indirect cost only, and medium as add-on licences for a subset of users. | Fix: Set cost to 'medium'. Replace the rationale with 'Medium. Budgeting on Learn's stricter entitlement statement may require paid Microsoft 365 Copilot licences for users who lack them; the roadmap reports wider entitlement, and no separate agent meter is published.' Replace 'The indirect costs are the licence for each user who needs the agent and admin time to review the Anthropic setting' with 'The potential direct cost is a paid Microsoft 365 Copilot licence for users who lack one; reviewing the Anthropic setting adds admin time.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance controls / behaviour: The Word, Excel and PowerPoint Agents in the Microsoft Copilot app are installed by Microsoft. | Found: Word, Excel, and PowerPoint Agents in the Microsoft Copilot app are installed by Microsoft. | Fix: Cite https://learn.microsoft.com/copilot/manage/copilot-agent-install and qualify the installation statement with: 'The general agent-installation overview still says only Researcher and Analyst are preinstalled or pre-pinned this way, whereas the feature-specific page says Word, Excel and PowerPoint Agents are installed by Microsoft.' | Source: https://learn.microsoft.com/copilot/manage/wordexcelppt-agents
- [supported, minor] What's changing: Learn capability identification; Open questions: first bullet / behaviour: The briefing treats Excel Agent as the Excel capability in Learn's collectively named Word, Excel and PowerPoint Agents. | Found: What are Word Agent, Excel Agent, and PowerPoint Agents? These are dedicated Word, Excel, and PowerPoint creation agents powered by reasoning models. | Fix: Cite https://learn.microsoft.com/copilot/manage/faq-wordexcelppt-agents. Replace the last sentence of the identification paragraph with 'Microsoft Learn's responsible AI FAQ explicitly names Excel Agent as one of these document-creation agents.' Remove the first Open questions bullet; retain the separate licensing disagreement. | Source: https://learn.microsoft.com/copilot/manage/faq-wordexcelppt-agents
- [supported, minor] controls[2].governs and note; summary; Governance controls / applicability: Block prevents organisation-wide agent use, but the row cautions that coverage of Excel Agent is not stated. | Found: Admins can manage these agents similarly to other agents that were installed by Microsoft. | Fix: Replace 'General agent control: whether Excel Agent is listed and covered is not stated' with 'Learn says these Microsoft-installed agents can be managed similarly to other Microsoft-installed agents; check the agent entry in your tenant.' Retain the separate caution about the Graph package API. Cite https://learn.microsoft.com/copilot/manage/copilot-agent-install, which says Microsoft-installed agents can be blocked in the tenant. | Source: https://learn.microsoft.com/copilot/manage/wordexcelppt-agents
-->
