---
title: "Visio: Desktop MCP server lets AI clients create and edit diagrams"
slug: "visio-desktop-model-context-protocol-mcp-server"
roadmapId: 574125
topic: "modern-work"
products: ["Visio"]
summary: "A planned Visio Desktop MCP server will let AI clients edit diagrams on Windows. No Visio-specific admin control is documented yet; a licensed Visio Desktop app is required, but qualifying plans and any separate server price are not yet published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Developer"]
targetDate: "June CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The roadmap requires a licensed Visio Desktop application. The deployment guide says the subscription desktop app comes with Visio Plan 2; MCP-eligible plans and any separate server price or meter are not yet published."
audiences: ["m365-admin","security","service-owner"]
tags: ["mcp","mcp-server","ai","visio","microsoft-365-apps","agent-governance","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 574125"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574125"
    kind: "roadmap"
  - title: "Visio service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/visio-online-service-description/visio-online-service-description"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Model Context Protocol (MCP) on Windows"
    url: "https://learn.microsoft.com/windows/ai/mcp/overview"
    kind: "learn"
  - title: "Deployment guide for Visio"
    url: "https://learn.microsoft.com/microsoft-365-apps/deploy/deployment-guide-for-visio"
    kind: "learn"
videos: []
related: ["mcp"]
controls:
  - governs: "Whether the Visio Desktop MCP server is available"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
  - governs: "Whether an MCP server in the Agent 365 registry is available across the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Existing control for registered MCP servers; not confirmed to cover the Visio server. Blocking disables all tools the server exposes."
confidence: "low"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-20"
    note: "New briefing from the roadmap record; Microsoft Learn does not yet document the Visio Desktop MCP server."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Summary now states that a licensed Visio Desktop application is required; licensing model set to included from the Visio deployment guide; MCP definition cited to Learn."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5d3ab95f9fe3ee5f5b105366ce523819"
---

## What's changing

Microsoft plans a Visio Desktop Model Context Protocol (MCP) server. MCP is an open standard that lets AI clients call tools exposed by another application. The roadmap item says the server enables compatible AI clients to connect with the Visio Desktop application to create, read and update Visio diagrams using natural language. It runs locally on Windows and requires a licensed Visio Desktop application.

Microsoft Learn does not describe this server yet. The Visio server capabilities above are the roadmap's description. At the time of writing (November 2026) Learn documents no Visio MCP server page, no setup steps, no list of tools and no admin setting for it. Which AI clients are "compatible", how a client connects, and what happens to a diagram an AI client has changed are all not stated.

The roadmap record shows the item as In development, with a Preview target of November CY2026 and a General Availability target of June CY2027. It lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop and Developer as platforms. These are Microsoft's targets, not commitments. The record does not state whether the server is on by default.

## Why it matters

This puts an AI client in the position of editing diagrams on a user's PC. Visio diagrams commonly describe networks, processes and architectures, so reading and updating them through an AI client is a new route to that content.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. Treat this as something to watch and decide on, not as a change that needs action today. The work for administrators is to find out how the server is enabled and which AI clients can reach it before the November 2026 preview target, and to decide who may use it.

## Risk assessment

**Data exposure**
- The roadmap says AI clients can read Visio diagrams through the server. Which diagrams and files it can reach, and where an AI client sends what it reads, are not stated. Confirm both before allowing it on devices that open sensitive diagrams.

**Security & identity**
- Microsoft has not said what identity or authentication the server uses, or which AI clients count as compatible. Confirm this once Microsoft publishes the setup page.
- The Agent 365 registry in the Microsoft 365 admin center is documented for MCP servers that developers register and administrators approve. Learn does not say whether a local Visio server appears there.

**Autonomy & actions**
- The roadmap says clients can create and update diagrams, not only read them. Whether the user approves each change, and whether there is an undo path beyond Visio's own, is not stated.

**Change & support**
- A new AI route into Visio Desktop will generate support questions about diagrams changed by an AI client. Microsoft Learn documents no admin switch for it at the time of writing.

## Cost and licensing

The roadmap item says the server requires a licensed Visio Desktop application. The Visio service description points to the Microsoft 365 business and enterprise plan comparisons for the subscriptions that enable users for Visio, and does not mention the MCP server. The deployment guide for Visio says the Visio desktop app comes with a Visio Plan 2 subscription, and lists volume-licensed LTSC and perpetual versions as other purchase options.

A price, credit rate or meter specific to the MCP server is not yet published, and Microsoft Learn documents no charge for it at the time of writing. Which Visio plans or versions qualify for the MCP server is not yet published. The known cost is administrator time to assess the feature and communicate with Visio users.

## Scope

- **Users:** Windows users of Visio Desktop who connect a compatible AI client. The roadmap names no plan beyond "a licensed Visio Desktop application".
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Platforms:** Desktop and Developer, per the record. The server runs locally on Windows.
- **Rollout:** In development, with a Preview target of November CY2026 and General Availability targeted for June CY2027. Rollout mechanics and release channel are not stated.
- **Roles:** Microsoft has not said which administrator role, if any, configures the server.

## Governance guidance

### Before rollout
- Ask Visio Desktop owners which diagrams hold network, security or architecture detail, so you know what an AI client could read.
- List the AI clients already allowed on Windows devices, because the roadmap says only "compatible AI clients" will connect.
- Check the Message center and the roadmap item for the Learn page that documents the server, and for any admin setting, before the preview target.

### At rollout
- Test the server in a small pilot group once a preview build is available, and note which setting enables it.
- Decide whether AI clients may connect to Visio on devices that open sensitive diagrams.
- Review the Agent 365 registry (Agents > Tools > Registry) to see whether the server is listed and can be blocked.

### After rollout
- Ask pilot users which diagrams AI clients changed, and whether the changes were wanted.
- Re-check Learn for an admin setting or API for the server and update your controls list.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Visio Desktop MCP server is available</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an MCP server in the Agent 365 registry is available across the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for registered MCP servers; not confirmed to cover the Visio server. Blocking disables all tools the server exposes.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026) Microsoft Learn documents no setting, policy or API that turns the Visio Desktop MCP server on or off, so the first row records that gap.

The second row is an existing control, not a confirmed control over this feature. The page documents the registry for MCP servers that developers register and administrators approve, and says blocking a server disables all the tools it exposes. Whether a local Visio server is registered there is not stated. Reviewing requests needs the AI Administrator or Global Administrator role, per that page.

## Open questions

- Will an administrator be able to turn the Visio Desktop MCP server off for the tenant or for some devices, and where? Watch the Visio documentation on Microsoft Learn.
- Is the server on by default when it reaches Preview in November CY2026, or does each user or administrator enable it?
- Which Visio licences or plans qualify, and will Microsoft charge separately for it?
- Which AI clients are compatible, and what identity and consent does a connection use?
- Does the server appear in the Agent 365 registry so it can be blocked there?

<!-- rationale
risk: Medium. The roadmap says AI clients will be able to create, read and update diagrams in Visio Desktop, and Microsoft Learn documents no switch for it yet.
cost: Low. The roadmap says a licensed Visio Desktop application is required; a licence or meter specific to the MCP server is not yet published, so only admin time is known.
impact: Low. Only Windows users of Visio Desktop who connect an AI client are in the picture, and the roadmap record does not say the server is on by default.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Governance controls table and prose / behaviour: Blocking an MCP server disables all tools it exposes. | Found: Blocking an MCP server disables all the tools it exposes. ... Blocking an MCP server (including WorkIQ MCP) blocks usage through governed Agent 365 and Microsoft 365 admin center (MAC) pathways. | Fix: Replace 'Blocking disables all tools the server exposes' in controls[1].note and the matching table and prose with 'Blocking disables all tools the server exposes through governed Agent 365 and Microsoft 365 admin center pathways; it does not automatically disable the underlying API or service endpoint outside those pathways.' Keep the existing caveat that Visio integration is unconfirmed. The cited management page now states this boundary explicitly. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [supported, minor] Why it matters; Governance guidance: Before rollout / behaviour: Visio diagrams are used to describe networks. | Found: Basic flowcharts, organization charts, and network diagrams | Fix: Add https://www.microsoft.com/en-us/microsoft-365/visio/visio-plans-and-pricing to sources to support the network and architecture diagram examples. | Source: https://www.microsoft.com/en-us/microsoft-365/visio/visio-plans-and-pricing
- [supported, minor] Why it matters; Governance guidance: Before rollout / behaviour: Visio diagrams are used to describe architectures. | Found: Cloud architecture diagrams, including Azure and Amazon Web Services (AWS) | Fix: Add https://www.microsoft.com/en-us/microsoft-365/visio/visio-plans-and-pricing to sources to support the network and architecture diagram examples. | Source: https://www.microsoft.com/en-us/microsoft-365/visio/visio-plans-and-pricing
-->
