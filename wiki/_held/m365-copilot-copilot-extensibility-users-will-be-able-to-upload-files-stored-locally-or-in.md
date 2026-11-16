---
title: "Microsoft 365 Copilot: users can upload local and OneDrive files to custom engine agents"
slug: "m365-copilot-copilot-extensibility-users-will-be-able-to-upload-files-stored-locally-or-in"
roadmapId: 503767
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let users attach local or OneDrive files in chats with custom engine agents, which Learn says are unsupported today. No admin switch is documented; control is per agent. Target: January CY2027."
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
action: "prepare"
licensing:
  model: "mixed"
  notes: "For custom engine agents in general, Learn says users need no Copilot licence; licensed users incur no extra charge and unlicensed users may incur Copilot Credits. Licensing for file upload is not yet published."
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
videos: []
related: ["agent-365-control-plane-for-agents","copilot-credits","m365-copilot-agent-lifecycle-management-rules","copilot-studio-purview-information-protection-labelled-files"]
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
    note: "General control: Microsoft has not confirmed it applies to file upload. Blocks the whole agent. API is beta and needs a Microsoft Agent 365 licence."
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "General control: Microsoft has not confirmed it applies to file upload. Options are All users (the default), No users, or specific users or groups."
  - governs: "A switch for file upload to custom engine agents only"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-16"
    note: "First briefing: roadmap-only item. Learn lists file attachments as unsupported for custom engine agents and documents no upload-specific control."
version: 1
---

## What's changing

The Microsoft 365 Roadmap item states that users will be able to upload files stored locally or in OneDrive to custom engine agents. Custom engine agents are agents that bring their own orchestrator and models rather than using Copilot's. The roadmap lists the platform as Web, the cloud as Worldwide (Standard Multi-Tenant) and the release phase as General Availability.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's one-line description. The Learn known-issues page currently lists file and image attachments as unsupported for custom engine agents in agent chats, and says images uploaded in chat aren't passed to the agent. That limit applies to agents built with the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK. At the time of writing (November 2026) the page does not mention the planned change.

The record gives the status as In development and a target of January CY2027. That is a target, not a commitment. The record does not say whether upload is on by default, which surfaces show it, or whether each agent must opt in.

## Why it matters

Today, a custom engine agent cannot receive a file from a chat, so no document leaves a user's device or OneDrive through that route. Once upload ships, any user of a custom engine agent could hand it a file, and the agent's own code decides what happens next.

The agent runs on hosting outside Microsoft 365 Copilot, and Learn says the builder must ensure their own compliance, responsible AI practices and security. Expect questions about which agents are approved to receive documents. The controls that exist today act on the whole agent, so the decision is which agents stay available, not whether uploads are allowed.

## Risk assessment

**Data exposure**

- A file a user uploads, from the device or OneDrive, would reach an agent whose orchestrator and models Learn says are hosted outside Microsoft 365 Copilot. Where the file is stored, retained or logged depends on that agent's code, not on a Microsoft control.
- Learn lists sensitivity labels as unsupported for custom engine agents built with the Agents Toolkit and Agents SDK. Do not assume a labelled file keeps its protection after it is handed to such an agent. Microsoft has not said how upload will treat labels.

**Security & identity**

- No Learn page describes a permission model for uploads. Restricting who can reach an agent relies on the Agents > Settings > User access setting.

**Autonomy & actions**

- Custom engine agents can be built to act on their own, including proactive triggers, according to the Learn comparison with declarative agents. A file the agent can read could feed those actions. Learn does not say what an agent may do with an uploaded file.

**Change & support**

- Expect users to ask why a file attached in an agent chat is ignored or rejected, because support will differ by agent and the record gives no detail on rollout. Agent owners need to say which file types their agent handles.

## Cost and licensing

For custom engine agents in general, the Learn page Plan licensing and cost says users don't need a Copilot licence to access them in Microsoft 365 Copilot Chat. Users with a Microsoft 365 Copilot licence don't incur additional charges. Users without one might incur usage-based billing charges if the agent interacts with shared tenant data (SharePoint or Copilot connectors), metered in Copilot Credits via Copilot Studio.

Hosting is a separate cost: the same page says hosting these agents might incur additional hosting costs. Whether file upload carries its own licence, meter or limit is not yet published. See [Copilot Credits](/concepts/copilot-credits/) for how that meter works.

## Scope

The record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with General Availability as the release phase and a target of January CY2027. It lists no US Government cloud, which is a record fact and not a statement that the feature is unavailable there.

The feature concerns custom engine agents. The record names no licence, role or prerequisite. Admin roles that Learn lists for configuring, managing and deploying agents in the Microsoft 365 admin center are AI Admin and Global Admin; Global Reader is view-only.

## Governance guidance

### Before rollout

- Inventory the custom engine agents in your tenant at Agents > All agents in the Microsoft 365 admin center, and note who owns and hosts each one.
- Ask each agent owner whether their agent will accept uploaded files, where it would store them and for how long.
- Decide which agents, if any, should be limited with the User access setting, so that only named users or groups reach them.
- Tell service desk staff that file support will vary by agent.

### At rollout

- Check the Microsoft 365 Roadmap item and Message center for a change to status, a date or a default.
- Block any agent whose owner cannot say how it handles uploaded files, using Agents > All agents > Block.
- Pilot with a small group before widening access to an agent that takes uploads.

### After rollout

- Review the agent list again and confirm that blocked agents stay blocked.
- Re-read the Learn known-issues page for custom engine agents and update your guidance when the file attachments entry changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a custom engine agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to file upload. Blocks the whole agent. API is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to file upload. Options are All users (the default), No users, or specific users or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A switch for file upload to custom engine agents only</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting that turns off file upload for custom engine agents alone is documented at the time of writing (November 2026), so the controls here work at agent level. Blocking an agent removes all of its use, and the User access setting governs access to agents and plugins in general. Microsoft has not confirmed that either setting changes how uploads behave.

The Package Management API in the second row requires a Microsoft Agent 365 licence and is in /beta, where Learn says use in production applications is not supported. Learn lists AI Admin and Global Admin as the roles that configure, manage and deploy agents.

## Open questions

- Will file upload be on by default for custom engine agents, or must each agent opt in? Watch the Microsoft 365 Roadmap item and Message center.
- Will an admin setting control uploads for all custom engine agents or per agent? Watch the Learn Agent settings page.
- Will uploads honour sensitivity labels, given that Learn lists labels as unsupported for these agents?
- Is there a licence, Copilot Credits charge or size limit for uploaded files? Watch the Plan licensing and cost page.
- Which surfaces will show the upload option beyond the Web platform named in the record?

<!-- rationale
risk: Medium. Uploaded files would go to custom engine agents that run on your own orchestrator and models outside Microsoft 365 Copilot, and the only documented controls block or limit a whole agent, not uploads.
cost: Variable. Learn documents Copilot Credits for users without a Microsoft 365 Copilot licence when a custom engine agent uses shared tenant data, plus hosting costs; pricing for file upload itself is not yet published.
impact: Medium. Only people who use custom engine agents on the web would notice, but those users would start sending documents to agents that their tenant, or a vendor, built and hosts.
-->
