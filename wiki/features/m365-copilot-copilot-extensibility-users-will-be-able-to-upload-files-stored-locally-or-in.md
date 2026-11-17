---
title: "Microsoft 365 Copilot: users can upload local and OneDrive files to custom engine agents"
slug: "m365-copilot-copilot-extensibility-users-will-be-able-to-upload-files-stored-locally-or-in"
roadmapId: 503767
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let users attach local or OneDrive files in chats with custom engine agents, which Learn lists as unsupported today. No tenant-wide upload switch is documented. Target: January CY2027."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Licensing for file upload is not yet published. The Agents admin guide documents Copilot Studio agents in Copilot Chat under Microsoft 365 Copilot licences or pay-as-you-go models; check the licensing for the selected agent and capabilities."
audiences: ["m365-admin","security","service-owner","compliance"]
tags: ["m365-copilot","agents","extensibility","file-upload","onedrive","custom-engine-agents","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap 503767"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503767"
    kind: "roadmap"
  - title: "Known issues"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Compare declarative and custom engine agents"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/agents-overview"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Agents admin guide for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide"
    kind: "learn"
  - title: "Allow file input from users"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/image-input-analysis"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Whether a custom engine agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General control: not confirmed for file upload. For agents created with SharePoint or Microsoft Foundry, blocking only affects availability in Microsoft Copilot Chat. API is beta; needs a Microsoft Agent 365 licence."
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "General control: Microsoft has not confirmed it applies to file upload. Options are All users (the default), No users, or specific users or groups."
  - governs: "A tenant-wide switch for file upload to custom engine agents"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-16"
    note: "First briefing: roadmap-only item. Learn lists file attachments as unsupported for custom engine agents and documents no upload-specific control."
  - date: "2026-11-16"
    note: "Corrected: User access is tenant-wide, not per agent; removed unsupported claims on today's data flow and on where uploaded files are stored; qualified hosting; fixed the table row reference."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 57 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: qualified what blocking an agent covers, replaced the unsupported licence statements, set licensing to unknown and action to review, and narrowed the no-upload-setting statements."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3fb0d11e3ca4bd02d235a5cd09b5de2c"
---

## What's changing

The Microsoft 365 Roadmap item states that users will be able to upload files stored locally or in OneDrive to custom engine agents. Custom engine agents are agents that bring their own orchestrator and models rather than using Copilot's. The roadmap lists the platform as Web, the cloud as Worldwide (Standard Multi-Tenant) and the release phase as General Availability.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's one-line description. The Learn known-issues page currently lists file and image attachments as unsupported for custom engine agents in agent chats, and says images uploaded in chat aren't passed to the agent. That limit applies to agents built with the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. At the time of writing (November 2026) the page does not mention the planned change.

The record gives the status as In development and a target of January CY2027. That is a target, not a commitment. The record does not say whether upload is on by default, which surfaces show it, or whether each agent must opt in.

## Why it matters

Learn currently lists file attachments in custom engine agent chats as unsupported. Once upload ships, any user of a custom engine agent could hand it a file, and what that agent does with the file is a risk to assess agent by agent.

The Learn comparison table of agent types lists custom engine agents as hosted in Microsoft 365 with Copilot Studio or externally with custom solutions such as Azure AI, and says the builder must ensure their own compliance, responsible AI practices and security. The Agents admin guide gives conflicting general guidance, saying both approaches adhere to the security, compliance and Responsible AI requirements for Microsoft 365; confirm coverage for the particular agent rather than assuming it. Expect questions about which agents are approved to receive documents. The controls documented for agents act on a whole agent or on tenant-wide access to agents and plugins, and no tenant-wide switch is documented for the planned upload, so the decision is which agents stay available. Copilot Studio separately documents a maker-side File uploads setting for standard-harness agents; Microsoft has not confirmed its applicability to this roadmap change.

## Risk assessment

**Data exposure**

- A file a user uploads, from the device or OneDrive, would reach a custom engine agent, whose orchestrator and models are the builder's own. Microsoft has not documented the storage, retention, logging or Microsoft governance coverage for files supplied through this planned upload capability. Ask each agent owner to explain its downstream processing and controls.
- Learn lists sensitivity labels as unsupported for custom engine agents built with the Agents Toolkit and Agents SDK. Do not assume a labelled file keeps its protection after it is handed to such an agent. Microsoft has not said how upload will treat labels.

**Security & identity**

- No Learn page describes a permission model for uploads. The Agents > Settings > User access setting governs which users or groups can access agents and plugins across the tenant, not selected agents.

**Autonomy & actions**

- Custom engine agents can be built to act on their own, including proactive triggers, according to the Learn comparison with declarative agents. A file the agent can read could feed those actions. Learn does not say what an agent may do with an uploaded file.

**Change & support**

- Expect users to ask why a file attached in an agent chat is ignored or rejected, because support will differ by agent and the record gives no detail on rollout. Agent owners need to say which file types their agent handles.

## Cost and licensing

For custom engine agents in general, the Agents admin guide says agents that access shared tenant data, such as SharePoint or Graph Connector content, are billed based on metered consumption, and that agents using metered consumption are off by default for users in Microsoft Copilot Chat. The same guide documents Copilot Studio agents in Copilot Chat under Microsoft 365 Copilot licences or pay-as-you-go models; check the licensing for the selected agent and capabilities.

Hosting is a separate cost: the Plan licensing and cost page says hosting these agents might incur additional hosting costs. Whether file upload carries its own licence, meter or limit is not yet published. The Copilot Studio licensing page describes Copilot Credits as the common currency across Copilot Studio capabilities. See [Copilot Credits](/concepts/copilot-credits/) for how that meter works.

## Scope

The record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with General Availability as the release phase and a target of January CY2027. It lists no US Government cloud, which is a record fact and not a statement that the feature is unavailable there.

The feature concerns custom engine agents. The record names no licence, role or prerequisite. Admin roles that Learn lists for configuring, managing and deploying agents in the Microsoft 365 admin center are AI Admin and Global Admin; Global Reader is view-only.

## Governance guidance

### Before rollout

- Inventory the custom engine agents in your tenant at Agents > All agents in the Microsoft 365 admin center, and note who owns and hosts each one.
- Ask each agent owner whether their agent will accept uploaded files, where it would store them and for how long.
- Decide whether tenant-wide access to agents and plugins should be restricted using Agents > Settings > User access; this affects all agents and plugins, not selected agents.
- Tell service desk staff that file support will vary by agent.

### At rollout

- Check the Microsoft 365 Roadmap item and Message center for a change to status, a date or a default.
- Block any agent whose owner cannot say how it handles uploaded files, using Agents > All agents > agent > Block.
- Pilot with a small group before widening access to an agent that takes uploads.

### After rollout

- Review the agent list again and confirm that blocked agents stay blocked.
- Re-read the Learn known-issues page for custom engine agents and update your guidance when the file attachments entry changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a custom engine agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">General control: not confirmed for file upload. For agents created with SharePoint or Microsoft Foundry, blocking only affects availability in Microsoft Copilot Chat. API is beta; needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to file upload. Options are All users (the default), No users, or specific users or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A tenant-wide switch for file upload to custom engine agents</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant-wide switch is documented for the planned roadmap upload capability at the time of writing (November 2026). Copilot Studio separately documents a maker-side File uploads setting for standard-harness agents (Settings > Generative AI > File processing capabilities > File uploads); Microsoft has not confirmed its applicability to this roadmap change. The controls in the table work on a whole agent or on tenant-wide access. Learn describes Block as restricting access to an agent across the organisation, and says that blocking an agent created with SharePoint or Microsoft Foundry only impacts its availability in Microsoft Copilot Chat. The User access setting governs access to agents and plugins in general. Microsoft has not confirmed that either setting changes how uploads behave.

The Package Management API in the first row requires a Microsoft Agent 365 licence and is in /beta, where Learn says use in production applications is not supported. Learn lists AI Admin and Global Admin as the roles that configure, manage and deploy agents.

## Open questions

- Will file upload be on by default for custom engine agents, or must each agent opt in? Watch the Microsoft 365 Roadmap item and Message center.
- Will an admin setting control uploads for all custom engine agents or per agent? Watch the Learn Agent settings page.
- Will uploads honour sensitivity labels, given that Learn lists labels as unsupported for these agents?
- Is there a licence, Copilot Credits charge or size limit for uploaded files? Watch the Plan licensing and cost page.
- Which surfaces will show the upload option beyond the Web platform named in the record?

<!-- rationale
risk: Medium. Uploaded files would go to custom engine agents whose storage, retention and logging Microsoft has not documented for this feature, and no tenant-wide switch for upload is documented.
cost: Variable. The Agents admin guide documents metered consumption for agents that access shared tenant data, and Learn mentions possible hosting costs; pricing for file upload itself is not yet published.
impact: Medium. Only people who use custom engine agents on the web would notice, but those users would start sending documents to agents that their tenant, or a vendor, built and hosts.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; rationale: cost / cost: The Agents admin guide says agents accessing shared tenant data such as SharePoint or Graph Connector content are billed on metered consumption. | Found: Agents that access shared tenant data, such as SharePoint or Graph Connector content, are billed based on metered consumption. | Fix: After this general billing statement add: 'The Copilot Studio licensing page separately says classic answers, generative answers and Microsoft Graph tenant grounding are not charged for Microsoft 365 Copilot licence holders when the agent runs with their authenticated identity in Copilot Chat, Teams or SharePoint.' Cite https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide
-->
