---
title: "Microsoft 365 Copilot: custom engine agents for DoD users"
slug: "m365-copilot-copilot-extensibility-users-in-dod-will-be-able-to-use-custom-engine-agents"
roadmapId: 503772
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists custom engine agents as launched for DoD users on the web. Microsoft has not stated what happens on arrival in a DoD tenant; admins should check which controls apply in DoD and what Learn lists as unsupported."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["DoD"]
platforms: ["Web"]
targetDate: "August CY2025"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's agent licensing table marks custom engine agents as available in Copilot Chat without usage-based billing, with it, and with a Microsoft 365 Copilot licence. Builders budget their own orchestration, models and hosting. Known issues lists usage billing for extensibility features as unsupported in Microsoft 365 Government tenants."
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
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Microsoft 365 Agents Toolkit Overview"
    url: "https://learn.microsoft.com/microsoftteams/platform/toolkit/agents-toolkit-fundamentals"
    kind: "learn"
  - title: "Compare declarative and custom engine agents"
    url: "https://learn.microsoft.com/plugins/agents-overview"
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
    note: "Beta API; Microsoft does not support beta APIs in production. Reference lists it unavailable in US Government L5 (DOD) and needing a Microsoft Agent 365 licence. UI page names Agent Builder, Copilot Studio, SharePoint, Foundry."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-21"
    note: "First briefing: custom engine agents for DoD users, with the service description, Known issues and licensing limits for government clouds."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 11 of 69 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: scoped the Known issues limits to SDK-built agents, set cost to variable, and updated the summary, usage-billing wording and open questions."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 83 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 83
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "2821b25218900a5eaf797cac76f914f8"
---

## What's changing

The roadmap item states that users in the DoD cloud will be able to use custom engine agents. Its status is Launched, the release phase is General Availability, the platform is Web and the target date is August CY2025. The record's description is a single sentence and gives no default, rollout window or admin action.

Microsoft Learn describes custom engine agents as agents that give developers control over orchestration, AI models and data integrations. Learn says they can be created using Copilot Studio, the Microsoft 365 Agents SDK, Teams SDK or Microsoft Foundry, and that they require app manifest version 1.21 or later.

Microsoft Learn has no page written for custom engine agents in DoD at the time of writing (November 2026), so the DoD detail below comes from general extensibility pages and government-cloud availability notes. The Microsoft Copilot service description's feature table lists Declarative agents and Agent Builder as "Not currently available" for DoD and has no separate row for custom engine agents. The agent licensing table in the extensibility prerequisites marks custom engine agents as available in each of its three licensing columns, with a separate note that agents grounded in shared tenant work data aren't currently available in DoD.

The Known issues page lists features unsupported in Microsoft 365 Government tenants, including publishing agents via the Microsoft 365 Agents Toolkit. For custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot, it also lists limits: sensitivity labels aren't supported, and the agents aren't supported in Outlook, Word, Excel, PowerPoint and the Microsoft Edge browser. The comparison page describes custom engine agents as able to run in Teams, Word, Excel and Edge, while Known issues lists Word, Excel and Edge as unsupported for these SDK-built agents.

## Why it matters

This matters because a custom engine agent runs on logic the builder chooses, not on Microsoft's own orchestration, so the usual assumptions about what Copilot will and won't do with labelled content do not carry over. Learn lists sensitivity labels as unsupported for custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot, and a DoD tenant that relies on labels to keep material out of AI responses should treat that as a gap to plan around for those agents.

Microsoft has not stated what happens on arrival in a DoD tenant, so no source says existing behaviour changes. The practical effect is that a developer or Copilot Studio maker can now be expected to ask for one; decide beforehand who may build and publish, and where the Block action sits in your process.

## Risk assessment

**Data exposure**
- Learn lists sensitivity labels as not supported for custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot, so label-based protection should not be assumed to constrain what such an agent returns. Use Learn's stated storage and search route for review: prompts and responses in Copilot Chat and Teams are stored under Microsoft 365 product terms, and admins can use Content Search or Microsoft Purview.
- Learn states that agents grounded in shared tenant work data aren't currently available in DoD, so expect any agent in a DoD tenant to run without that grounding.

**Security & identity**
- The overview says custom engine agents give full control over orchestration, AI models and data integrations. The builder, not Microsoft's orchestration, decides which external systems the agent calls and which model it uses, so review each agent's hosting and model choice before approving it.
- Learn lists authenticated custom actions as unsupported in Microsoft 365 Government tenants, and Microsoft's government cloud overview lists DoD as one of its Microsoft 365 government cloud environments.

**Autonomy & actions**
- The overview lists proactive automation among the characteristics of custom engine agents: they can programmatically trigger workflows and take actions across enterprise applications. Known issues lists proactive notifications as unsupported for custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot. Confirm what an agent can actually trigger in your tenant before relying on either statement.

**Change & support**
- Support calls will come from developers and users hitting the limits Known issues lists for custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot: no file or image attachments, no file downloads in the Microsoft 365 Copilot channel, and no Outlook, Word, Excel, PowerPoint or Edge support.
- The roadmap item covers custom engine agents, while the service description lists Declarative agents and Agent Builder as not currently available in DoD; these are different agent types.

## Cost and licensing

Learn's agent licensing table in the extensibility prerequisites marks custom engine agents as available for Copilot Chat without usage-based billing, Copilot Chat with usage-based billing, and Microsoft 365 Copilot (licensed) users. A footnote says usage limits apply to all included features.

The cost Learn names for building one is the builder's own: its cost page says to budget for your own orchestration, models and hosting, and lists Azure AI Foundry, App Service and Azure AI Bot Service pricing as example resources. A DoD-specific price or meter for custom engine agents is not yet published.

The prerequisites billing note lists usage-based billing (pay-as-you-go, consumed as Copilot Credits) as unsupported in GCC and GCC High. The Known issues page lists support for usage billing for extensibility features as unsupported in Microsoft 365 Government tenants; Microsoft identifies DoD as one of its Microsoft 365 government cloud environments. The service description describes Microsoft 365 Copilot as an add-on plan.

## Scope

The roadmap record lists the cloud as DoD, the platform as Web, the product as Microsoft Copilot (Microsoft 365) and the release phase as General Availability. Its status is Launched with a target date of August CY2025; the record was last modified on 2026-09-21.

Learn's agent licensing table marks custom engine agents as available to Copilot Chat users with and without usage-based billing, and to Microsoft 365 Copilot licensed users. For custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot, Learn lists them as unsupported in Outlook, Word, Excel, PowerPoint and the Microsoft Edge browser.

## Governance guidance

### Before rollout
- Decide which tools your developers may use to build agents (Copilot Studio, Microsoft 365 Agents SDK, Teams SDK or Foundry) and who approves them.
- Review the Known issues limits for custom engine agents built using Microsoft 365 Agents Toolkit or Microsoft 365 Agents SDK that run in Microsoft 365 Copilot (no sensitivity label support, no file or image attachments, no Outlook or Office app support) with the agents' owners before they commit to a design.
- Budget with builders for their own orchestration, models and hosting, since Learn's cost page says to account for them.
- Check the tenant's Agents > All agents page in the Microsoft 365 admin center before relying on it; the page's government note names GCC High and GCC Moderate, not DoD.

### At rollout
- Test the Block action on a non-production agent before you need it.
- Test a real agent in Copilot Chat on the web, the platform the roadmap lists, and record which of the listed limits you hit.

### After rollout
- Re-read the service description table and Known issues page each month, since DoD availability of neighbouring agent types is listed as not currently available.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is available to anyone in the organisation (block or unblock)</strong><br><small>Agent</small><br><small class="controls__note">Beta API; Microsoft does not support beta APIs in production. Reference lists it unavailable in US Government L5 (DOD) and needing a Microsoft Agent 365 licence. UI page names Agent Builder, Copilot Studio, SharePoint, Foundry.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented off-switch is the Block action in the Microsoft 365 admin center, which stops any user in the organisation from using the selected agent. The page says blocking an agent built with Agent Builder or Copilot Studio affects it in Microsoft Copilot and other host products such as Outlook and Teams; blocking an agent created by using SharePoint or Foundry affects its availability in Copilot Chat only.

The page does not name agents built with the Microsoft 365 Agents SDK or Teams SDK, and its government note names GCC High and GCC Moderate, not DoD. The Graph reference lists the block API as unavailable in US Government L5 (DOD), so the row's API side is documented but not usable in DoD today, and the Package Management API needs a Microsoft Agent 365 licence. It is a beta API, and Microsoft does not support the use of beta APIs in production applications.

## Open questions

- Is the Agents > All agents page, with its Block action, available in a DoD tenant, and does it list agents built with the Microsoft 365 Agents SDK? Watch the agent actions page on Microsoft Learn.
- Why does the Microsoft Copilot service description feature table have no row for custom engine agents in DoD while listing Declarative agents and Agent Builder as not currently available? Watch that table and the roadmap item.
- Which supported publishing route should a DoD developer use? Microsoft 365 Agents Toolkit documentation explicitly says support for GCC High and DoD is not yet available.

<!-- rationale
risk: Medium. Custom engine agents bring their own orchestration and models, and Learn lists sensitivity labels as unsupported for those built with the Agents Toolkit or Agents SDK that run in Microsoft 365 Copilot; the Block action is the documented off-switch, not confirmed for DoD.
cost: Variable. Builders must budget for their own orchestration, models and hosting, with costs depending on the selected Azure AI Foundry, App Service or Azure AI Bot Service resources. A DoD-specific price is not yet published.
impact: Low. The likely impact is a small group choosing to build or use an agent; Microsoft has not stated that an agent appears in DoD tenants on its own.
-->
