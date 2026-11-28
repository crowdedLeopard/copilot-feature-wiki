---
title: "Microsoft Copilot: Excel Agent builds charts, summaries and formulas from your data"
slug: "m365-copilot-excel-agent"
roadmapId: 543422
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)"]
summary: "Excel Agent is a launched Microsoft Copilot agent that builds Excel output from chat. Learn ties it to a paid Copilot licence and Anthropic models; the roadmap says users can use it with or without a Copilot licence. Admins can block it."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "March CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
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
  - title: "Frequently asked questions about Word, Excel, and PowerPoint Agents: Responsible AI FAQ"
    url: "https://learn.microsoft.com/copilot/manage/faq-wordexcelppt-agents"
    kind: "learn"
  - title: "Agent installation in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-agent-install"
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
    note: "Learn says these Microsoft-installed agents can be managed similarly to other Microsoft-installed agents; check the agent entry in your tenant. Graph is beta and needs a Microsoft Agent 365 licence."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-29T23:05:21"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: status Launched; Learn and the roadmap disagree on whether a Copilot licence is needed; the Anthropic setting is the main control."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: licensing model, cost rating and rationale, summary wording on the roadmap's licence statement, an oversharing bullet, the Excel Agent identification, and the Block control note."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 70 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 75 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 73
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "51f6dbef554a7be9ffd7d38728b2b07b"
---

## What's changing

Excel Agent is an agent in Microsoft Copilot that helps users turn data into charts, summaries and insights using formulas and logic. Users refine the result through multi-turn chat or open it in Excel for full editing and collaboration. The roadmap record gives Desktop, Mac and Web as platforms and Worldwide (Standard Multi-Tenant) as the cloud.

The roadmap status is Launched, with a target of March CY2026 and a preview from November CY2025. The release phases listed are General Availability and Preview.

Microsoft Learn documents this capability on a page titled "Word, Excel, and PowerPoint Agents in Microsoft Copilot". That page says the agents are installed by Microsoft, use Anthropic's AI models exclusively, and appear in the Tools menu and under All Agents in the Microsoft Copilot app when Anthropic models are enabled for the tenant. The general agent-installation overview still says only Researcher and Analyst are preinstalled or pre-pinned this way, whereas the feature-specific page says Word, Excel and PowerPoint Agents are installed by Microsoft. Microsoft Learn's responsible AI FAQ explicitly names Excel Agent as one of these document-creation agents.

The two sources disagree on licensing. The roadmap says the agent is available to Microsoft 365 users with or without a Microsoft 365 Copilot licence. Learn says these agents are available only to users with a paid Microsoft 365 Copilot licence and are not available to Copilot Chat users without one. Both are reported here without choosing between them.

## Why it matters

The agent changes where spreadsheet work starts: a user can ask Copilot for a forecast or project plan and get a workbook generated by an Anthropic model, then open it in Excel. For a service owner that brings in a model provider the tenant may not have reviewed, and generated files that Learn says are stored in OneDrive.

Because Microsoft enables Claude models by default for most commercial-cloud customers outside the EU/EFTA and UK, expect licensed users in those tenants to see the agent without anyone switching it on. Where nobody acts, the agent follows the tenant's Anthropic setting, so that setting is the decision to take now.

## Risk assessment

**Data exposure**

- The agents use Work IQ to retrieve information from files, emails, meetings and sites the licensed user has permission to access. Because the agents retrieve information the user has permission to access, review oversharing in SharePoint and OneDrive.
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

The Learn page names no meter, credit rate or price for these agents. No Copilot Credits charge is stated for them, so do not assume one or rule one out. The potential direct cost is a paid Microsoft 365 Copilot licence for users who lack one; reviewing the Anthropic setting adds admin time.

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
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Learn says these Microsoft-installed agents can be managed similarly to other Microsoft-installed agents; check the agent entry in your tenant. Graph is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Disabling Anthropic is the broadest control: Learn says it prevents users from accessing the agents, including paid-licence holders, and it also affects other Anthropic-based features. Limiting access by user or group applies at provider level, not to Excel Agent alone.

The Block action is documented for agents in the Microsoft 365 admin center, and Learn says Microsoft-installed agents are managed similarly. The Learn page does not say that Excel Agent appears in the All agents list or what its entry is called, so check your own tenant. The Graph call needs a Microsoft Agent 365 licence and its page does not say whether it covers Microsoft-installed agents. A Power Platform setting also exists for Anthropic in Copilot Studio, but Learn presents it as a Copilot Studio and Power Platform control, not one for these agents.

## Open questions

- Which statement holds for entitlement: the roadmap's "with or without a Microsoft 365 Copilot licence" or Learn's paid-licence-only rule? Watch the Learn page and Message center.
- Does a charge in Copilot Credits or another meter apply to Excel Agent use, and where would it appear?
- Does Excel Agent appear in the Microsoft 365 admin center's All agents list so it can be blocked on its own, and does the Graph block call cover it?
- Will the agent run in tenants in the EU/EFTA and UK or in US Government clouds, where Claude models are off by default or unavailable?

<!-- rationale
risk: Medium. Learn says the agents run only on Anthropic models, which are outside the EU Data Boundary, and read files and mail the user can access through Work IQ; admins can block the provider.
cost: Medium. Budgeting on Learn's stricter entitlement statement may require paid Microsoft 365 Copilot licences for users who lack them; the roadmap reports wider entitlement, and no separate agent meter is published.
impact: Medium. Licensed Copilot users see the agent in the Tools menu and under All Agents when Anthropic models are enabled for the tenant, so analysts and finance users notice it first.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Change & support; Governance guidance: At rollout / behaviour: Excel Agent can remain visible in the agent store when Anthropic is disabled, without being usable. | Found: Searched: Excel Agent agent store Anthropic disabled visible All agents block Microsoft installed Graph copilot package; opened wordexcelppt-agents and faq-wordexcelppt-agents; read copilot-agent-store excerpts. The visibility passage names Office Agent, not Excel Agent. | Fix: Replace the risk bullet's first sentence with 'Learn says Office Agent might still appear in the agent store when Anthropic models are disabled, but users cannot access or use it.' Replace the help-desk checklist bullet with 'Brief the help desk that Learn says Office Agent can remain visible in the agent store when Anthropic models are disabled, without being usable.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks admins to check licence assignments without a corresponding controls-table row. | Found: Check which users hold a paid Microsoft 365 Copilot licence ... Controls table: Anthropic tenant availability; Anthropic user/group access; organisation-wide agent blocking. | Fix: Remove the checklist bullet 'Check which users hold a paid Microsoft 365 Copilot licence, since Learn ties the agents to that licence.' Keep the licensing requirement in Cost and licensing; do not add a control row.
-->
