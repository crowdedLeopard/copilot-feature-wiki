---
title: "Microsoft 365 Copilot: custom engine agents for GCC users"
slug: "m365-copilot-copilot-extensibility-users-in-gcc-m-will-able-to-use-custom-engine-agents"
roadmapId: 501111
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists custom engine agents as launched for GCC (GCC-M) users of Microsoft 365 Copilot. Learn does not yet confirm this for GCC, so check your tenant and the agent block control before relying on it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's prerequisites page lists custom engine agents for Copilot Chat users and for users with a Microsoft 365 Copilot licence, and says usage-based billing is not supported in GCC. A licence or meter specific to this GCC release is not yet published."
audiences: ["m365-admin","service-owner","security","maker"]
tags: ["custom-engine-agents","m365-copilot","copilot-chat","copilot-studio","extensibility","agents","agent-governance","m365-admin-center","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 501111"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501111"
    kind: "roadmap"
  - title: "Custom engine agents for Microsoft 365 overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-custom-engine-agent"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites"
    kind: "learn"
  - title: "Known issues"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Copilot Studio for US Government customers"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing-gcc"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Microsoft Agent 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Frequently asked questions for Microsoft 365 Copilot extensibility"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/faq"
    kind: "learn"
  - title: "Compare declarative and custom engine agents"
    url: "https://learn.microsoft.com/plugins/agents-overview"
    kind: "learn"
  - title: "Custom engine agent architecture"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/custom-engine-agent-architecture"
    kind: "learn"
  - title: "Build custom engine agents with Microsoft 365 Agents SDK"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/m365-agents-sdk"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-users-in-gcc-h-will-be-able-to-use-custom-engine-agents","m365-copilot-copilot-extensibility-users-will-be-able-to-upload-files-stored-locally-or-in","m365-copilot-mcp-based-agent-enablement-for-u-s-government-clouds"]
controls:
  - governs: "Whether an agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General agent control, not specific to custom engine agents. The Graph API is beta, needs a Microsoft Agent 365 licence and marks US Government L4 and L5 as not available."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-14T23:03:47"
changes:
  - date: "2026-11-21"
    note: "New briefing: the roadmap lists custom engine agents as launched for GCC users, but Learn's availability tables do not yet list them for GCC."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: cost is now variable (hosting and Azure consumption), the Graph API is stated as unavailable in GCC per the Agent 365 service description, and host support and usage-limit notes were added."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 70 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 88
  confirmed: 88
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "25f3deffcf16c8136ff3ddc0e8ee69e5"
---

## What's changing

The roadmap item states that users in GCC-M will be able to use custom engine agents. The record lists the cloud as GCC, the product as Microsoft Copilot (Microsoft 365), the platform as Web, the release phase as General Availability, the status as Launched and the target date as August CY2026. It has no more-info link and no preview date.

Microsoft Learn describes custom engine agents as agents where developers bring their own orchestration and AI services, and says they can be created using Copilot Studio, the Microsoft 365 Agents SDK, Teams SDK or Microsoft Foundry. Learn has no page for a GCC-specific version of the feature, so the behaviour described here is that of custom engine agents in general.

The Learn sources do not yet mirror the roadmap at the time of writing (November 2026). The Microsoft Copilot service description's feature availability table has GCC rows for declarative agents and Agent Builder but no row for custom engine agents. Treat the roadmap's Launched status as Microsoft's statement and confirm what you can see in your own tenant.

## Why it matters

For a GCC tenant this means agents whose orchestration and models are chosen by the builder, and for pro-code builds hosted by the builder, can reach users through Microsoft 365 Copilot. That matters in a tenant that adopted GCC for compliance reasons. Copilot Studio's US Government page says third-party applications and services integrated through connectors or Azure Bot Service skills are not covered by its compliance and data protection commitments.

Microsoft has not stated whether the capability is on, off or something an administrator enables, so do not assume either. The practical view is to treat each custom engine agent as a new component to approve, and to find out now whether the agent list and block control cover the agents your builders produce.

## Risk assessment

**Data exposure**

- Learn says that for pro-code custom engine development you choose a supported SDK and provide your own orchestration and hosting. Prompts sent to such an agent reach a service the builder operates, so confirm that the host and any model it calls fit your GCC boundary before approving it. Learn describes Copilot Studio as a fully managed SaaS platform for the low-code route.
- Learn says custom engine agent prompts and responses in Copilot Chat and Teams are stored under Microsoft 365 product terms, and that admins can use Content Search or Microsoft Purview to view and manage them.
- Learn says agents grounded in shared tenant work data are not currently available in GCC, GCCH or DoD, so an agent that depends on that grounding may not behave as its builder expects.

**Security & identity**

- Learn lists publishing agents via the Microsoft 365 Agents Toolkit as unsupported in Microsoft 365 Government tenants. Settle which build route is allowed before builders start.
- For agents built using the Microsoft 365 Agents Toolkit and Agents SDK, the known-issues page lists sensitivity labels as unsupported. Check what that means for labelled content before pointing such an agent at it.

**Autonomy & actions**

- Learn lists proactive automation as a characteristic of custom engine agents: they can programmatically trigger workflows and take actions across enterprise applications. Review each agent's actions before approving it.
- The Copilot Studio US Government page lists Triggers / Autonomous Agents as not available in GCC. The known-issues page lists proactive notifications as unsupported for agents built using the Agents Toolkit and Agents SDK.

**Change & support**

- For agents built using the Agents Toolkit and Agents SDK, the known-issues page lists file and image attachments as unsupported, and lists custom engine agents as unsupported in Outlook, Word, Excel, PowerPoint and the Microsoft Edge browser. Learn's general agent comparison instead lists custom engine agents as able to run in Teams, Word, Excel and Edge; confirm host support for your build route. Expect support calls from users who assume they work there.
- The roadmap says Launched while the service description has no custom engine agents row, so users may be told the feature exists before it is visible in the tenant.

## Cost and licensing

Learn's prerequisites page lists custom engine agents as available to Copilot Chat users without usage-based billing, to Copilot Chat users with usage-based billing and to users with a Microsoft 365 Copilot licence. Usage limits apply to all included features. The same page describes Copilot Chat as available to all Microsoft 365 users, and the service description calls Microsoft 365 Copilot an add-on plan with specific licensing prerequisites.

The prerequisites page says usage-based billing is not supported in GCCH and GCC, so the usage-based billing column does not apply to a GCC tenant. Learn's overview tells builders to consider licensing, consumption and hosting costs for their agent, but publishes no figure for them. Learn's FAQ says you don't need a Microsoft 365 Copilot licence to build custom engine agents by using Teams SDK, and that the cost depends on the Azure services consumed in the app. For Copilot Studio as a build tool, the US Government page says licensing for its US Government plans is the same as for public cloud.

A licence or meter specific to this GCC release is not yet published, and the roadmap item names none. Admin time for approving and reviewing agents is an indirect cost.

## Scope

The roadmap record lists the cloud as GCC, the platform as Web and the release phase as General Availability. The item title says GCC-M. Microsoft has not stated how the rollout is staged or whether a tenant must enable it.

Learn's agent governance page says Microsoft 365 for government Community Cloud High (GCCH) and Government Community Cloud Moderate (GCCM) environments support publishing agents to the organization. Learn says custom engine agents are supported in app manifest version 1.21 and later versions.

The known-issues table of unsupported features applies to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. The prerequisites page lists custom engine agents for Copilot Chat users and licensed Microsoft 365 Copilot users but notes that agents grounded in shared tenant work data are not currently available in GCC.

## Governance guidance

### Before rollout

- Ask your Microsoft account team, or watch Message center, to confirm that custom engine agents are available in your GCC tenant, because the service description lists no row for them.
- Ask each builder which route they use (Copilot Studio, Agents SDK, Teams SDK or Foundry) and where orchestration and models are hosted. Check the host against your GCC boundary and authorisation requirements.
- Decide which build routes are allowed, because publishing via the Microsoft 365 Agents Toolkit is listed as unsupported in Microsoft 365 Government tenants.

### At rollout

- Pilot one agent with a small group on the web client and test the limits the known-issues page lists for Agents Toolkit and Agents SDK agents: attachments, sensitivity labels and the Microsoft 365 apps where they are unsupported.
- Open Agents > All agents in the Microsoft 365 admin center, check whether the pilot agent is listed, and test that Block removes it for users (first row of the controls table).
- Tell makers that the roadmap says Launched while the Learn availability tables do not yet list the feature, so they set expectations with their users.

### After rollout

- Review the agent list regularly and block any agent whose owner, host or actions you cannot account for.
- Re-read the Microsoft Copilot service description availability table and the extensibility known-issues page for updates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">General agent control, not specific to custom engine agents. The Graph API is beta, needs a Microsoft Agent 365 licence and marks US Government L4 and L5 as not available.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The admin centre Block action restricts access to the selected agent across the organisation. Learn says that for agents created by using Agent Builder or Copilot Studio it affects availability in Microsoft Copilot and in other host products such as Outlook and Teams. For agents created by using SharePoint or Microsoft Foundry it affects only Microsoft Copilot Chat. The page does not describe the action for agents built with the Agents SDK or Teams SDK, so confirm in your tenant that such agents appear in the list.

The Graph call is a beta API that needs the delegated permission CopilotPackages.ReadWrite.All and a Microsoft Agent 365 licence. Its national cloud table marks Global service as available and US Government L4 and L5 (DOD) as not available; the block reference has no GCC column, but the Microsoft Agent 365 service description lists the Graph API for agent registry and governance actions as unavailable in GCC.

## Open questions

- Does the GCC release of custom engine agents carry any licence or charge beyond those Learn lists for Copilot Chat users and licensed Microsoft 365 Copilot users? Watch the roadmap item and the Microsoft 365 Copilot licensing pages.
- What does a GCC tenant see on arrival, and is anything for an administrator to enable? Microsoft has not stated a default; watch Message center and the roadmap item.
- Will the Microsoft Copilot service description add a custom engine agents row for GCC, and will the Block action list agents built with the Agents SDK or Teams SDK? Watch the service description and the agent governance page.
- How do the known-issues limits on sensitivity labels and Microsoft 365 apps apply to Copilot Studio custom engine agents in GCC? Watch the known-issues page.

<!-- rationale
risk: Medium. Custom engine agents bring builder-chosen orchestration and models, and for pro-code builds builder-provided hosting, into Copilot; the default for GCC is not stated, and the agent block control covers them only in part.
cost: Variable. Pro-code custom engine agents incur hosting and Azure service consumption costs; no separate GCC-release licence or meter is published.
impact: Medium. Makers and developers who build the agents, and the GCC users who gain access to them, notice the change; users who nobody builds an agent for see nothing.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Data exposure / applicability: Learn says administrators can use Content Search or Microsoft Purview to view and manage stored custom engine agent prompts and responses. | Found: To view and manage this stored data, admins can use Content Search or Microsoft Purview. | Fix: Keep the overview attribution and add: 'The Microsoft Agent 365 service description separately marks audit logs of agent activities and eDiscovery (content search) of agent interactions as unavailable in GCC.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365, whose feature table gives GCC Availability as No for that capability. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-custom-engine-agent
-->
