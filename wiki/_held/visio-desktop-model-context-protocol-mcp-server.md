---
title: "Visio: Desktop MCP server lets AI clients create and edit diagrams"
slug: "visio-desktop-model-context-protocol-mcp-server"
roadmapId: 574125
topic: "modern-work"
products: ["Visio"]
summary: "A planned Visio Desktop MCP server will let compatible AI clients create, read and update Visio diagrams on Windows. Preview is targeted for November 2026; no admin control or licence detail is published yet."
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
  model: "unknown"
  notes: "The roadmap item says the server requires a licensed Visio Desktop application. Which Visio plans qualify, and any separate price or meter for the MCP server, is not yet published."
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
updated: "2026-11-20"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-20"
    note: "New briefing from the roadmap record; Microsoft Learn does not yet document the Visio Desktop MCP server."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 51
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "35474ff6f9ca56384ba8e40b81cdb284"
---

## What's changing

Microsoft plans a Visio Desktop Model Context Protocol (MCP) server. MCP is an open standard that lets AI clients call tools exposed by another application. The roadmap item says the server enables compatible AI clients to connect with the Visio Desktop application to create, read and update Visio diagrams using natural language. It runs locally on Windows and requires a licensed Visio Desktop application.

Microsoft Learn does not describe this server yet, so everything above is the roadmap's description. At the time of writing (November 2026) Learn documents no Visio MCP server page, no setup steps, no list of tools and no admin setting for it. Which AI clients are "compatible", how a client connects, and what happens to a diagram an AI client has changed are all not stated.

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

The roadmap item says the server requires a licensed Visio Desktop application. The Visio service description points to the Microsoft 365 business and enterprise plan comparisons for the subscriptions that enable users for Visio, and does not mention the MCP server.

A price, credit rate or meter specific to the MCP server is not yet published, and Microsoft Learn documents no charge for it at the time of writing. The known cost is administrator time to assess the feature and communicate with Visio users.

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

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; front matter: licensing.notes; Cost and licensing / consistency: No licence detail is published yet. | Found: Summary: 'no admin control or licence detail is published yet.' Licensing notes: 'The roadmap item says the server requires a licensed Visio Desktop application.' | Fix: Replace the summary's final clause with 'no Visio-specific admin control is documented yet; a licensed Visio Desktop application is required, but qualifying plans and any separate server price are not yet published.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: MCP is an open standard connecting AI applications to external tools. | Found: MCP is an open protocol designed to standardize integrations between AI apps and external tools and data sources. | Fix: Cite https://learn.microsoft.com/windows/ai/mcp/overview for the MCP definition. Replace 'so everything above is the roadmap's description' with 'The Visio server capabilities above are the roadmap's description' so the separate definition is not attributed to the record. | Source: https://learn.microsoft.com/windows/ai/mcp/overview
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown because feature-specific plan eligibility is unpublished. | Found: Visio desktop app that comes with a Visio Plan 2 subscription. | Fix: Set licensing.model to 'included' to reflect the known underlying product licence, without asserting MCP eligibility for any specific edition. Use notes: 'The roadmap requires a licensed Visio Desktop application. The deployment guide says the subscription desktop app comes with Visio Plan 2; MCP-eligible plans and any separate server price or meter are not yet published.' Cite https://learn.microsoft.com/microsoft-365-apps/deploy/deployment-guide-for-visio. | Source: https://learn.microsoft.com/microsoft-365-apps/deploy/deployment-guide-for-visio
- [supported, minor] Why it matters / behaviour: Visio diagrams are used to describe networks. | Found: Download a Visio file of this architecture. The previous diagram demonstrates a typical basic or baseline networking implementation. | Fix: Cite https://learn.microsoft.com/azure/architecture/networking/networking-get-started#architecture for the network example; avoid treating 'commonly' as a measured prevalence claim. | Source: https://learn.microsoft.com/azure/architecture/networking/networking-get-started#architecture
- [supported, minor] Why it matters / behaviour: Visio diagrams are used to describe processes. | Found: Microsoft Visio – You can associate a business process with a Visio diagram by manually uploading a Visio file. | Fix: Cite https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/lifecycle-services/using-activity-diagrams for the business-process example. | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/lifecycle-services/using-activity-diagrams
- [supported, minor] Why it matters / behaviour: Visio diagrams are used to describe architectures. | Found: You can create a reference architecture diagram using various tools. However, we recommend Microsoft Visio because it has Azure Architecture models that you can use as a helpful starting point. | Fix: Cite https://learn.microsoft.com/partner-center/referrals/reference-architecture-diagram for the architecture example. | Source: https://learn.microsoft.com/partner-center/referrals/reference-architecture-diagram
-->
