---
title: "Data policies (DLP) for Copilot Studio agents"
slug: "data-policies"
summary: "How Power Platform data policies govern what Copilot Studio agents can connect to and where they can be published, the connector names that map to agent capabilities, and why MCP tools and channels are governed the same way."
updated: "2026-11-13"
tags: ["data-policies","dlp","power-platform","copilot-studio","connectors","channels","mcp","endpoint-filtering"]
covers: ["dlp","endpoint-filtering"]
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
kind: "concept"
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 37
  unconfirmed: 2
  contradicted: 4
  attempts: 1
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What a data policy does: apps and flows cannot combine connector groups / behaviour: An app or flow cannot combine Business and Non-business connectors. | Found: makers can't create an app or flow that uses both the SharePoint and Gmail connectors. | Fix: Add the Microsoft pages relied on but absent from sources, together: https://learn.microsoft.com/power-platform/admin/dlp-connector-classification ; https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention ; https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-status ; https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status ; https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent ; https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits ; https://learn.microsoft.com/purview/ai-copilot-studio . These substantiate connector classification, virtual connectors, readiness and guidance, credential selection, sharing and Purview applicability. | Source: https://learn.microsoft.com/power-platform/admin/dlp-connector-classification
- [contradicted, blocker] What a data policy does: Since January 2025 / date: Mandatory data policy enforcement on every agent without opt-in has applied since January 2025. | Found: Since March 2025, agents can't be exempted from data policy enforcement. It's no longer possible to exempt agents with a PowerShell command. | Fix: Replace the date with 'Since March 2025, agents cannot be exempted from data policy enforcement.' January 6, 2025 was the MC973179 announcement date, not the documented date exemptions ended. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-dlp-troubleshooting
- [supported, minor] Connector names that govern agent capabilities: HTTP endpoint filtering / behaviour: HTTP supports endpoint filtering with allow or deny lists. | Found: Alternatively, if you want to allow or deny specific HTTP endpoints instead of blocking all HTTP calls, use endpoint filtering. | Fix: Mark HTTP connector endpoint filtering as preview, as explicitly stated at https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering . Its HTTP section documents ordered Allow and Deny URL patterns. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] How restrictions appear to makers: Review pane / behaviour: The Review pane lists blocking issues and warnings. | Found: The Review panel lists issues ordered by severity: Blocking issues first, followed by Warnings. | Fix: Identify the harness: the Microsoft Copilot harness has the Review panel described at this URL. For standard-harness agents, describe Overview > Agent status > Review and flag that readiness experience as preview, as documented at https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status . | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-status
- [supported, minor] How restrictions appear to makers; Operating pattern: custom guidance message / behaviour: Administrators can set a custom guidance message and contact details for makers blocked by policy. | Found: Custom guidance message (preview)

As an admin, you can set an environment-level guidance message for users when they encounter a blocked or disabled capability. This plain-text message replaces the default Contact your admin prompt. | Fix: Label custom guidance messages as preview in both their description and the operating-pattern recommendation. Distinguish this environment/environment-group Maker guidance feature from the existing tenant-wide data-policy contact email and Learn more link. | Source: https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status
- [contradicted, blocker] Working with the rest of the control set: Endpoint filtering / applicability: Connector endpoint filtering narrows both HTTP and custom connectors to specific hosts. | Found: it's exclusively available for the following connectors:
- HTTP
- HTTP with Microsoft Entra ID (AD)
- HTTP Webhook
- SQL Server (includes using SQL Server Connector to access Azure Synapse data warehouse)
- Azure Blob Storage
- SMTP
- Browser Automation
- UI Automation | Fix: Separate the controls: HTTP connector endpoint filtering is preview and evaluates static design-time endpoints, not dynamically bound runtime endpoints. Custom connectors are classified by Host URL patterns in tenant-level data policies, as documented at https://learn.microsoft.com/power-platform/admin/dlp-connector-classification#tenant-level-data-policies ; do not describe that classification as the same endpoint-filtering feature. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [unsupported, blocker] Working with the rest of the control set: pin an MCP server / applicability: Endpoint filtering can pin an MCP server without blocking its connector. | Found: Searched: Copilot Studio MCP endpoint filtering. Opened connector-endpoint-filtering, dlp-connector-classification, admin-data-loss-prevention and wp-data-loss-prevention; none states that HTTP endpoint rules pin an MCP server while leaving its connector available. | Fix: Remove 'which is how you pin an MCP server or API without blocking the connector'. State instead that blocking an MCP server's underlying connector blocks its tools; custom connector Host URL classification and HTTP static-endpoint rules are distinct controls with different scopes.
- [contradicted, blocker] Working with the rest of the control set: Purview DLP / applicability: Purview DLP at the Microsoft 365 Copilot location governs what content agents may process without knowledge-source or channel qualifications. | Found: When the knowledge source is SharePoint, a DLP policy scoped to the Microsoft 365 Copilot location can restrict agents built in Copilot Studio for Microsoft Teams, SharePoint, and Microsoft 365 Copilot from processing sensitive content based on a specified sensitivity label. | Fix: Replace with: 'For SharePoint knowledge sources, a Purview DLP policy scoped to the Microsoft 365 Copilot location can restrict Copilot Studio agents for Teams, SharePoint and Microsoft 365 Copilot from processing content with a specified sensitivity label. This is separate from connector governance.' | Source: https://learn.microsoft.com/purview/ai-copilot-studio
- [unsupported, blocker] Operating pattern: connector dependency insights in the Power Platform admin center / admin-path: Copilot Studio connector dependency insights are available in the Power Platform admin center. | Found: Searched: Copilot Studio connector dependency admin center; site:learn.microsoft.com/power-platform connector dependencies agents; Copilot Studio dependency insights. Opened security-and-governance and admin-data-loss-prevention; neither locates that view in the portal. | Fix: Remove the unverified portal location. For an actionable documented alternative, direct makers and admins to check published agent status and download policy-violation reports from the agent's Channels page in Copilot Studio, as documented at https://learn.microsoft.com/microsoft-copilot-studio/admin-dlp-troubleshooting#identify-agents-in-violation-of-a-data-policy .
- [contradicted, minor] Operating pattern: controls named without governance control rows / consistency: The operating checklist tells administrators to configure controls that have no corresponding governance controls rows. | Found: Start from the default environment: block channels and connectors citizen makers should not use; allow Teams and Microsoft 365 if that is your intended surface.
Set a custom guidance message so blocked makers get your request process, not a generic prompt. | Fix: Add governance controls rows for environment/tenant data policies controlling connectors and channels, and for custom maker guidance. Use the documented Power Platform admin center paths in admin-data-loss-prevention and authoring-agent-status respectively; flag Maker guidance as preview.
-->
