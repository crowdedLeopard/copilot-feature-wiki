---
title: "Data policies (DLP) for Copilot Studio agents"
slug: "data-policies"
summary: "How Power Platform data policies govern what Copilot Studio agents can connect to and where they can be published, the connector names that map to agent capabilities, and why MCP tools and channels are governed the same way."
updated: "2026-11-13"
tags: ["data-policies","dlp","power-platform","copilot-studio","connectors","channels","mcp","endpoint-filtering"]
sources:
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Troubleshoot data policy enforcement for Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-dlp-troubleshooting"
    kind: "learn"
  - title: "Key concepts: Copilot Studio security and governance"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance"
    kind: "learn"
  - title: "Connector endpoint filtering"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    kind: "learn"
related: ["copilot-studio-mcp-tools-in-agents","copilot-studio-share-autonomous-agents-run-only","copilot-studio-purview-information-protection-labelled-files","managed-environments"]
---

## What a data policy does

Power Platform **data policies** (still called DLP policies in many places) classify connectors into Business, Non-business and Blocked groups per environment or tenant. An app, flow or agent cannot combine connectors from different groups, and cannot use a Blocked connector at all. Since January 2025 Copilot Studio enforces tenant data policies on every agent without an opt-in; agents that violate a policy show errors in the maker experience, cannot be published, and already-published agents stop working on the blocked capability.

The important design point is that Copilot Studio exposes **its own capabilities as connectors** so that one policy mechanism covers tools, knowledge, channels and triggers.

## Connector names that govern agent capabilities

| To prevent makers from... | Block this connector |
| --- | --- |
| Publishing agents without authentication | Chat without Microsoft Entra ID authentication in Copilot Studio |
| Making HTTP requests from an agent | HTTP (supports endpoint filtering for allow or deny lists) |
| Publishing to web, mobile and custom Direct Line channels | Direct Line channels in Copilot Studio |
| Publishing to Teams and Microsoft 365 Copilot | Microsoft Teams + Microsoft 365 Channel in Copilot Studio |
| Publishing to SharePoint, WhatsApp, Facebook, Dynamics 365 Customer Service | The corresponding channel connector |
| Using event triggers (autonomous agents) or authenticated automated evaluations | Microsoft Copilot Studio |
| Using Azure Bot Service skills | Skills with Copilot Studio |
| Sending telemetry to Application Insights | Application Insights in Copilot Studio |
| Using Power Platform connectors (and MCP servers that ride on them) as tools | The specific prebuilt or custom connectors |

If every channel is blocked, or the only allowed channel is not configured, agents cannot be published at all. Direct Line channels are allowed by default, which matters for organisations that assumed agents could only reach Teams.

## How restrictions appear to makers

Blocked connectors and channels appear disabled in the authoring UI with a hover explanation; the **Review** pane lists blockers and warnings; and administrators can add a custom guidance message and contact so blocked makers know where to go. Publishing an agent that violates a policy fails with a `DlpViolationError` whose `violationType` (for example `BlockedConnector`) names the cause.

## Working with the rest of the control set

- **Endpoint filtering** narrows HTTP and custom connectors to specific hosts, which is how you pin an MCP server or API without blocking the connector.
- **Credential controls** decide whose identity a permitted connector uses.
- **Sharing limits** (Managed Environments) decide how far a compliant agent can spread.
- **Purview DLP** at the Microsoft 365 Copilot location governs what content agents may process, which is a different layer from which connectors they may call.

## Operating pattern

1. Start from the default environment: block channels and connectors citizen makers should not use; allow Teams and Microsoft 365 if that is your intended surface.
2. Create environment-scoped policies for production environments that whitelist the connectors their agents need.
3. Review Copilot Studio connector dependency insights in the Power Platform admin center before tightening a policy, so you know which published agents will break.
4. Set a custom guidance message so blocked makers get your request process, not a generic prompt.
