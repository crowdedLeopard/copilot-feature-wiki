---
title: "Power Pages: MCP server exposes site data to AI clients"
slug: "power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities"
roadmapId: 577813
desk: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Power Pages"]
summary: "Makers can provision an MCP server endpoint for a Power Pages site so AI clients can run create, read, update and delete operations over its Web API."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "January CY2026"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn requires a Microsoft 365 Copilot licence for end users of the Copilot agent example. Power Pages licensing is separate."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["power-pages","mcp","model-context-protocol","web-api","dataverse","table-permissions","microsoft-365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap item 577813"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577813"
    kind: "roadmap"
  - title: "Model Context Protocol (MCP) Server for Power Pages overview"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-overview"
    kind: "learn"
  - title: "Configure site settings for MCP server"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings"
    kind: "learn"
  - title: "Connect to MCP server via Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-connect-clients"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","agent-identity"]
confidence: "high"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-22T23:45:38"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577813 with Learn MCP setup guidance."
version: 1
---

## What's changing

The MCP server for Power Pages exposes site data and operations through a standard interface for AI clients. In public preview, makers enable create, read, update and delete operations over the site's Web API without custom code, and provision the endpoint through site settings.

Learn describes it as respecting web roles, table permissions and authentication boundaries. Setup involves a Microsoft Entra or Entra External ID app registration with an exposed MCP scope, site settings including MCP/Enabled, and a client such as an agent in Copilot Studio published to Microsoft 365 Copilot.

The roadmap lists a preview date of January CY2026 and general availability in January CY2027, Worldwide only.

## Why it matters

Natural-language access to site data changes how records are read and altered. Table permissions that were adequate for a form-based site can behave differently when an agent issues arbitrary queries.

It also lets internal teams work with portal data from Copilot, which is useful but adds a new path to the data.

## Risk assessment

**Data exposure**
- Agents can query anything the signed-in user's web role and table permissions allow.

**Security & identity**
- OAuth with Entra scopes and bearer authentication settings protect the endpoint. Client secrets and redirect URIs need careful handling.

**Autonomy & actions**
- CRUD operations include deletes and updates. Consider read-only permissions for pilots.

**Change & support**
- Misconfigured site settings can break sign-in or leave the endpoint exposed.

## Cost and licensing

No charge for the MCP server is published. Learn lists a Microsoft 365 Copilot licence for end users of the Copilot agent example, and Copilot Studio use may consume credits. Confirm against your agent design.

## Scope

Makers and admins of Power Pages sites, and users of MCP-compatible clients such as VS Code, Copilot Studio and Microsoft 365 Copilot. Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- [ ] Audit table permissions and web roles for every table the Web API exposes.
- [ ] Choose Entra ID or External ID and plan app registrations.

### At rollout
- [ ] Enable MCP only on a test site first.
- [ ] Grant admin consent only for the required MCP, openid and profile scopes.

### After rollout
- [ ] Review who connects and what operations they run.
- [ ] Re-test permissions whenever tables or roles change.

## Admin controls

Controlled per site through Power Pages Management > Site Settings, including MCP/Enabled and the bearer authentication settings, plus app registrations in the Microsoft Entra admin center. A tenant-wide Power Platform admin switch is not yet published.

## Open questions

- Will administrators get a tenant-level control over MCP on sites?
- What logging shows agent calls to the endpoint?
- What will be generally available at January CY2027?

<!-- rationale
risk: High. It opens site data and write operations to AI agents, so a weak table permission or web role could expose or alter Dataverse records.
cost: Low. No charge is published for the server; Learn notes users of Microsoft 365 Copilot agents need a licence.
impact: Medium. It affects site makers and the users or agents that connect to site data.
-->
