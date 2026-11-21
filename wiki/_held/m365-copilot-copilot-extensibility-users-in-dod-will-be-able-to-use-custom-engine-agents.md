---
title: "Microsoft 365 Copilot: custom engine agents for DoD users"
slug: "m365-copilot-copilot-extensibility-users-in-dod-will-be-able-to-use-custom-engine-agents"
roadmapId: 503772
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists custom engine agents as launched for DoD users on the web. Nothing reaches users until a developer builds an agent; admins should check which controls apply in DoD and what Learn lists as unsupported."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["DoD"]
platforms: ["Web"]
targetDate: "August CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's agent licensing table marks custom engine agents as available in Copilot Chat without usage-based billing, with it, and with a Microsoft 365 Copilot licence. Builders budget their own orchestration, models and hosting. Usage-based billing is listed as unsupported in GCC and GCC High; DoD is not named."
audiences: ["m365-admin","security","service-owner"]
tags: ["custom-engine-agents","agents","m365-copilot","copilot-chat","extensibility","m365-admin-center","dod"]
sources:
  - title: "Microsoft 365 Roadmap 503772"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503772"
    kind: "roadmap"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Known issues"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues"
    kind: "learn"
  - title: "Custom engine agents for Microsoft 365 overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-custom-engine-agent"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-users-in-gcc-h-will-be-able-to-use-custom-engine-agents","sensitivity-labels","m365-copilot-mcp-based-agent-enablement-for-u-s-government-clouds","auditing"]
controls:
  - governs: "Whether an agent is available to anyone in the organisation (block or unblock)"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Reference lists the API as unavailable in US Government L5 (DOD) and needing a Microsoft Agent 365 licence. UI page names agents from Agent Builder, Copilot Studio, SharePoint and Foundry."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-21"
    note: "First briefing: custom engine agents for DoD users, with the service description, Known issues and licensing limits for government clouds."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 11 of 69 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 57
  unconfirmed: 1
  contradicted: 11
  attempts: 1
  hash: "4c99ae43672b7abfd8fd0381c3f9c5be"
---

## What's changing

The roadmap item states that users in the DoD cloud will be able to use custom engine agents. Its status is Launched, the release phase is General Availability, the platform is Web and the target date is August CY2025. The record's description is a single sentence and gives no default, rollout window or admin action.

Microsoft Learn describes custom engine agents as agents that give developers control over orchestration, AI models and data integrations. Learn says they can be created using Copilot Studio, the Microsoft 365 Agents SDK, Teams SDK or Microsoft Foundry, and that they require app manifest version 1.21 or later.

Microsoft Learn has no page written for custom engine agents in DoD at the time of writing (November 2026), so the DoD detail below comes from general extensibility pages and the two pages that disagree about government clouds. The Microsoft Copilot service description's feature table lists Declarative agents and Agent Builder as "Not currently available" for DoD and has no separate row for custom engine agents. The agent licensing table in the extensibility prerequisites marks custom engine agents as available in each of its three licensing columns, with a separate note that agents grounded in shared tenant work data aren't currently available in DoD.

The Known issues page lists features unsupported in Microsoft 365 Government tenants, including publishing agents via the Microsoft 365 Agents Toolkit. It also lists limits for custom engine agents in Microsoft 365 Copilot: sensitivity labels aren't supported, and the agents aren't supported in Outlook, Word, Excel, PowerPoint and the Microsoft Edge browser.

## Why it matters

This matters because a custom engine agent runs on logic the builder chooses, not on Microsoft's own orchestration, so the usual assumptions about what Copilot will and won't do with labelled content do not carry over. Learn lists sensitivity labels as unsupported for these agents, and a DoD tenant that relies on labels to keep material out of AI responses should treat that as a gap to plan around.

Microsoft has not stated what happens on arrival in a DoD tenant, so no source says existing behaviour changes. The practical effect is that a developer or Copilot Studio maker can now be expected to ask for one; decide beforehand who may build and publish, and where the Block action sits in your process.

## Risk assessment

**Data exposure**
- Learn lists sensitivity labels as not supported for custom engine agents in Microsoft 365 Copilot, so label-based protection should not be assumed to constrain what such an agent returns. Use Learn's stated storage and search route for review: prompts and responses in Copilot Chat and Teams are stored under Microsoft 365 product terms, and admins can use Content Search or Microsoft Purview.
- Learn states that agents grounded in shared tenant work data aren't currently available in DoD, so expect any agent in a DoD tenant to run without that grounding.

**Security & identity**
- The overview says custom engine agents give full control over orchestration, AI models and data integrations. The builder, not Microsoft's orchestration, decides which external systems the agent calls and which model it uses, so review each agent's hosting and model choice before approving it.
- Learn lists authenticated custom actions as unsupported in Microsoft 365 Government tenants; confirm that this applies to DoD before designing around it.

**Autonomy & actions**
- The overview lists proactive automation among the characteristics of custom engine agents: they can programmatically trigger workflows and take actions across enterprise applications. Learn also lists proactive notifications as unsupported in Microsoft 365 Copilot, so confirm what an agent can actually trigger in your tenant before relying on either statement.

**Change & support**
- Support calls will come from developers and users hitting the listed limits: no file attachments, no file downloads, and no Outlook, Word, Excel, PowerPoint or Edge support.
- The service description and the roadmap item disagree about DoD availability of neighbouring agent types. Tell the help desk which source you are treating as authoritative.

## Cost and licensing

Learn's agent licensing table in the extensibility prerequisites marks custom engine agents as available for Copilot Chat without usage-based billing, Copilot Chat with usage-based billing, and Microsoft 365 Copilot (licensed) users. A footnote says usage limits apply to all included features.

The cost Learn names for building one is the builder's own: its cost page says to budget for your own orchestration, models and hosting, and lists Azure AI Foundry, App Service and Azure AI Bot Service pricing as example resources. A DoD-specific price or meter for custom engine agents is not yet published.

Usage-based billing (pay-as-you-go, consumed as Copilot Credits) is listed as unsupported in GCC and GCC High, and the Known issues page lists support for usage billing for extensibility features as unsupported in Microsoft 365 Government tenants. Neither names DoD separately, so confirm with your Microsoft account team whether it applies to a DoD tenant before planning around a Copilot Credits meter. The service description describes Microsoft 365 Copilot as an add-on plan.

## Scope

The roadmap record lists the cloud as DoD, the platform as Web, the product as Microsoft Copilot (Microsoft 365) and the release phase as General Availability. Its status is Launched with a target date of August CY2025; the record was last modified on 2026-09-21.

Learn's agent licensing table marks custom engine agents as available to Copilot Chat users with and without usage-based billing, and to Microsoft 365 Copilot licensed users. Learn lists custom engine agents as unsupported in Outlook, Word, Excel, PowerPoint and the Microsoft Edge browser.

## Governance guidance

### Before rollout
- Decide which tools your developers may use to build agents (Copilot Studio, Microsoft 365 Agents SDK, Teams SDK or Foundry) and who approves them.
- Review the Known issues limits (no sensitivity label support, no file attachments, no Outlook or Office app support) with the agents' owners before they commit to a design.
- Budget with builders for their own orchestration, models and hosting, since Learn's cost page says to account for them.
- Check the tenant's Agents > All agents page in the Microsoft 365 admin center before relying on it; the page's government note names GCC High and GCC Moderate, not DoD.

### At rollout
- Test the Block action on a non-production agent before you need it.
- Test a real agent in Copilot Chat on the web, the platform the roadmap lists, and record which of the listed limits you hit.

### After rollout
- Review stored prompts and responses with Content Search or Microsoft Purview, the route Learn gives for custom engine agent data.
- Re-read the service description table and Known issues page each month, since DoD availability of neighbouring agent types is listed as not currently available.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is available to anyone in the organisation (block or unblock)</strong><br><small>Agent</small><br><small class="controls__note">Reference lists the API as unavailable in US Government L5 (DOD) and needing a Microsoft Agent 365 licence. UI page names agents from Agent Builder, Copilot Studio, SharePoint and Foundry.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented off-switch is the Block action in the Microsoft 365 admin center, which stops any user in the organisation from using the selected agent. The page says blocking an agent built with Agent Builder or Copilot Studio affects it in Microsoft Copilot and other host products such as Outlook and Teams; blocking an agent created by using SharePoint or Foundry affects its availability in Copilot Chat only.

The page does not name agents built with the Microsoft 365 Agents SDK or Teams SDK, and its government note names GCC High and GCC Moderate, not DoD. The Graph reference lists the block API as unavailable in US Government L5 (DOD), so the row's API side is documented but not usable in DoD today, and the Package Management API needs a Microsoft Agent 365 licence.

## Open questions

- Is the Agents > All agents page, with its Block action, available in a DoD tenant, and does it list agents built with the Microsoft 365 Agents SDK? Watch the agent actions page on Microsoft Learn.
- Why does the Microsoft Copilot service description feature table have no row for custom engine agents in DoD while listing Declarative agents and Agent Builder as not currently available? Watch that table and the roadmap item.
- Does the Known issues statement that publishing agents via the Microsoft 365 Agents Toolkit is unsupported in Government tenants apply to DoD, and which publishing route should a DoD developer use?
- Is usage-based billing available to DoD tenants, given that the pages name GCC and GCC High but not DoD?

<!-- rationale
risk: Medium. Custom engine agents bring their own orchestration and models, and Learn lists sensitivity labels as unsupported for them; the admin centre Block action is the documented off-switch, and Learn does not confirm it for DoD.
cost: Low. Learn's licensing table lists custom engine agents in each of its three licensing columns, and the cost it names is the builder's own orchestration, models and hosting. A DoD-specific price is not yet published.
impact: Low. Only developers who build an agent and the users they share it with notice; Microsoft has not stated that any agent appears in DoD tenants on its own.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; front matter: defaultState; Why it matters / consistency: Nothing reaches users until a developer builds an agent. | Found: Summary: "Nothing reaches users until a developer builds an agent"; defaultState: "unknown"; Why it matters: "Microsoft has not stated what happens on arrival in a DoD tenant". | Fix: Replace the summary's second sentence with: 'Microsoft has not stated what happens on arrival in a DoD tenant; admins should check which controls apply in DoD and what Learn lists as unsupported.'
- [contradicted, blocker] Open questions: Agents Toolkit publishing / absence: It is not documented whether the Government Agents Toolkit publishing restriction applies to DoD. | Found: Support for GCC High and DoD environments is not yet available, but both are on our roadmap. Updates will be shared as soon as they are ready. | Fix: Replace this open question with: 'Which supported publishing route should a DoD developer use? Microsoft 365 Agents Toolkit documentation explicitly says support for GCC High and DoD is not yet available.' Cite https://learn.microsoft.com/microsoftteams/platform/toolkit/agents-toolkit-fundamentals. | Source: https://learn.microsoft.com/microsoftteams/platform/toolkit/agents-toolkit-fundamentals
- [contradicted, blocker] Cost and licensing; Open questions: usage-based billing / absence: Whether the documented Government usage-billing restriction applies to DoD remains unpublished. | Found: The following features aren't currently supported in Microsoft 365 Government tenants: ... Support for usage billing for extensibility features. | Fix: Replace 'Neither names DoD separately, so confirm ... Copilot Credits meter' with: 'The Known issues restriction covers Microsoft 365 Government tenants; Microsoft identifies DoD as one of its Microsoft 365 government cloud environments.' Remove the open question about whether the restriction applies to DoD. Retain the narrower statement that the prerequisites billing note names GCC and GCC High. Cite https://learn.microsoft.com/copilot/plan/gov-overview alongside Known issues. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [contradicted, blocker] What's changing; Why it matters; Risk assessment; Governance guidance; rationale: risk / applicability: The Known issues sensitivity-label limitation applies to custom engine agents generally. | Found: These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. ... Sensitivity labels aren't supported. | Fix: Qualify each use of this limitation as applying to 'custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot.' In Why it matters and the risk rationale, apply the sensitivity-label warning to those agents rather than every custom engine agent. The cited Known issues page explicitly gives this scope. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [contradicted, blocker] What's changing; Risk assessment: Change & support; Scope; Governance guidance / availability: Custom engine agents generally are unsupported in Outlook, Word, Excel, PowerPoint and Microsoft Edge. | Found: These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. ... Custom engine agents aren't supported in Outlook, Word, Excel, PowerPoint, and the Microsoft Edge browser. | Fix: Qualify this limitation wherever repeated with 'For custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot'. Also report the documented disagreement: 'The comparison page describes custom engine agents as able to run in Teams, Word, Excel and Edge, while Known issues lists Word, Excel and Edge as unsupported for these SDK-built agents.' Cite https://learn.microsoft.com/plugins/agents-overview for that comparison. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [contradicted, blocker] Risk assessment: Change & support; Governance guidance: Before rollout / applicability: The no-file-attachments limitation applies to custom engine agents generally. | Found: These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. ... Custom engine agents don't support file or image attachments in agent chats. | Fix: Qualify the file-attachment limitation in the risk and governance lists as applying to custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot, as stated at https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [contradicted, blocker] Risk assessment: Change & support / applicability: The no-file-downloads limitation applies to custom engine agents without a channel qualification. | Found: File downloads aren't supported for custom engine agents in Microsoft 365 Copilot. ... The same agent renders the file correctly in Microsoft Teams and in the Copilot Studio test panel. | Fix: Replace 'no file downloads' with 'no file downloads in the Microsoft 365 Copilot channel for custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK'. Do not imply a limitation in Teams or the Copilot Studio test panel; the cited Known issues page explicitly distinguishes those channels. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [contradicted, blocker] Risk assessment: Autonomy & actions / applicability: Proactive notifications are unsupported for custom engine agents in Microsoft 365 Copilot generally. | Found: These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. ... Proactive notifications aren't supported. | Fix: Replace that sentence with: 'Known issues lists proactive notifications as unsupported for custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot.' Retain the advice to test actual tenant behavior. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues
- [contradicted, blocker] What's changing; Risk assessment: Change & support / record: The roadmap item and service description disagree about DoD availability of neighboring agent types. | Found: "description": "Users in DoD will be able to use custom engine agents." | Fix: Replace the disagreement sentence with: 'The roadmap item covers custom engine agents, while the service description lists Declarative agents and Agent Builder as not currently available in DoD; these are different agent types.' In What's changing, replace 'the two pages that disagree about government clouds' with 'general extensibility pages and government-cloud availability notes'. Remove the instruction to choose one of these sources as authoritative over the other.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: Cost is low, although the deciding costs are the builder's orchestration, models and hosting. | Found: cost: "low"; rationale: "the cost it names is the builder's own orchestration, models and hosting". The standard defines low as "indirect cost only: admin time, communications, training", not paid hosting or model consumption. | Fix: Set cost to 'variable'. Replace the cost rationale with: 'Variable. Builders must budget for their own orchestration, models and hosting, with costs depending on the selected Azure AI Foundry, App Service or Azure AI Bot Service resources. A DoD-specific price is not yet published.' Keep the cost page citation and do not invent a DoD credit rate.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage. ... POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Add to controls[0].note and the corresponding prose: 'This is a beta API; Microsoft does not support beta APIs in production applications.' The cited reference explicitly states that qualification. Retain the existing DoD-unavailability warning. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [unsupported, minor] rationale: impact / behaviour: Only developers who build an agent and the users they share it with notice this change. | Found: Searched: custom engine agents available automatically deployed default new agents DoD tenant. Read overview, comparison, agent-installation and agent-actions excerpts; none limits everyone affected to builders and their sharing recipients, and organizational/store distribution is documented. | Fix: Replace the impact rationale with: 'Low. The likely impact is a small group choosing to build or use an agent; Microsoft has not stated that an agent appears in DoD tenants on its own.' This expresses the rating as analysis without asserting an exhaustive affected-user list.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The governance checklist tells readers to review stored prompts and responses through Content Search or Purview, but the table has no corresponding control. | Found: After rollout: "Review stored prompts and responses with Content Search or Microsoft Purview". The controls table has only the agent Block action. | Fix: Remove the After rollout checklist step 'Review stored prompts and responses with Content Search or Microsoft Purview, the route Learn gives for custom engine agent data.' Retain the supported background statement in Risk assessment; do not add an unverified control row.
-->
