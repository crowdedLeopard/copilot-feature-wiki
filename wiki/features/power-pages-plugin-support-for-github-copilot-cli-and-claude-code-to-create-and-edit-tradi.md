---
title: "Power Pages: plugin for GitHub Copilot CLI and Claude Code edits traditional sites"
slug: "power-pages-plugin-support-for-github-copilot-cli-and-claude-code-to-create-and-edit-tradi"
roadmapId: 577900
desk: "power-platform"
products: ["Power Pages"]
summary: "The Power Pages plugin for GitHub Copilot CLI and Claude Code will create and edit traditional (non-SPA) sites, uploading changes with the Power Platform CLI."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Plugin pricing is not published. GitHub Copilot or Claude subscriptions are separate and outside Microsoft licensing."
audiences: ["maker","power-platform-admin","security","service-owner"]
tags: ["power-pages","github-copilot-cli","claude-code","coding-agents","power-platform-cli","table-permissions"]
sources:
  - title: "Microsoft 365 Roadmap item 577900"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577900"
    kind: "roadmap"
  - title: "Get started with the Power Pages plugin for GitHub Copilot CLI and Claude Code"
    url: "https://learn.microsoft.com/power-pages/configure/create-code-site-using-claude-code"
    kind: "learn"
videos: []
related: ["agent-identity"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577900 with Learn plugin guidance."
version: 1
---

## What's changing

The Power Pages plugin for GitHub Copilot CLI and Claude Code will support traditional (non-SPA) Power Pages sites. Developers can use natural language to create a traditional site, or download, inspect and update existing site metadata.

The roadmap lists web pages, web templates, content snippets, basic and multistep forms, lists, table permissions, web roles and site settings. Changes are uploaded back to the environment with the Power Platform CLI.

Preview is listed for October CY2026 and general availability for November CY2026, Worldwide only. Learn today describes the plugin for modern SPA sites, with a warning that generated code and configuration can be inaccurate and must be reviewed.

## Why it matters

Traditional sites often hold years of configuration, including table permissions and web roles that protect Dataverse data. Letting an agent edit these is productive but needs control.

It also introduces third-party AI tools into the Power Platform developer workflow, which security teams should know about.

## Risk assessment

**Data exposure**
- The agent downloads site metadata to a developer machine, which may include configuration details.

**Security & identity**
- Table permissions and web roles are security controls. An incorrect edit could widen anonymous or authenticated access.

**Autonomy & actions**
- Agent proposals upload changes through the CLI after developer approval. Learn says to review proposals before approving.

**Change & support**
- Changes made outside the maker studio may be harder to trace. Use source control.

## Cost and licensing

No Microsoft charge for the plugin is published. GitHub Copilot or Claude subscriptions are separate and billed by those providers. Developer time for review is the main cost.

## Scope

Developers and makers using GitHub Copilot CLI or Claude Code with the Power Platform CLI. Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- [ ] Decide whether coding agents are permitted against your Power Pages environments.
- [ ] Require source control and code review for site metadata.

### At rollout
- [ ] Limit use to development environments.
- [ ] Ask developers to review every permission and web role change before upload.

### After rollout
- [ ] Run table permission audits after agent changes.
- [ ] Review who has installed the plugin and which environments they target.

## Admin controls

No Power Platform admin control for the plugin is described. Access follows the developer's own Power Platform CLI sign-in and environment permissions, so use security roles and environment access to limit it.

## Open questions

- Will an admin control exist to restrict agent-driven site changes?
- What audit trail shows changes made through the plugin?
- How will traditional-site support relate to the existing security review skills?

<!-- rationale
risk: Medium. An AI coding agent can change site metadata, table permissions and web roles in an environment, so developer authentication and review matter.
cost: Low. The plugin has no published charge; the coding agent subscription is separate and the cost is developer time.
impact: Low. It affects developers and makers who adopt the plugin.
-->
