---
title: "Copilot Studio: web browsing for agents on the Microsoft Copilot harness"
slug: "copilot-studio-computer-use-for-web-browsing-on-microsoft-copilot-harness"
roadmapId: 576272
desk: "agents"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio agents will browse and interact with websites natively on the Microsoft Copilot harness: navigating, extracting information and downloading files."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Existing computer use costs 5 Copilot Credits per step (15 for premium models). This feature is not yet priced."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["copilot-studio","web-browsing","computer-use","agents","copilot-harness"]
sources:
  - title: "Microsoft 365 Roadmap item 576272"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576272"
    kind: "roadmap"
  - title: "Automate web and desktop apps with computer use"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/computer-use"
    kind: "learn"
  - title: "FAQ for the computer use tool"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/faqs-computer-use"
    kind: "learn"
videos: []
related: ["copilot-studio-require-human-approval-for-tool-calls","copilot-studio-mcp-tools-in-agents","copilot-credits","data-policies"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-28T20:19:16"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576272."
version: 1
---

## What's changing

Copilot Studio agents will be able to browse and interact with websites as a native capability powered by the Microsoft Copilot harness. With natural-language instructions, agents can navigate pages, extract information and download files, then use them with other tools to complete end-to-end workflows.

This extends reach beyond configured knowledge sources and API integrations. The roadmap target is January 2027, Worldwide, status In development.

Copilot Studio already offers a computer use tool that interprets screens and acts through a virtual mouse and keyboard on a hosted browser or your own machine. How the harness capability differs is not yet documented.

## Why it matters

Web interaction opens agents to untrusted content and external accounts. Learn warns that computer use can take unintended actions through ambiguous instructions or unexpected on-screen content.

## Risk assessment

**Data exposure**
- Agents can download files and extract page content into workflows.

**Security & identity**
- Credentials and sessions used on websites need careful scoping; Learn lists an allow list and Enforce HTTPS for computer use.

**Autonomy & actions**
- Autonomous agents can act without a person watching.

**Change & support**
- Site changes and throttling affect reliability.

## Cost and licensing

Not yet published for this capability. For computer use, Learn states 5 Copilot Credits per step, or 15 with a premium model, billed through the Agent action feature.

## Scope

Copilot Studio agents on the Microsoft Copilot harness in Worldwide (Standard Multi-Tenant).

## Governance guidance

### Before rollout
- Decide which sites agents may visit and set allow lists where available.
- Review data policies and external model settings.

### At rollout
- Pilot with low-risk sites and test runs.
- Require human approval for sensitive actions.

### After rollout
- Review run logs and credit use.
- Update allow lists as needs change.

## Admin controls

No control for this capability is published. For computer use, makers can set an allow list and Enforce HTTPS; admins control external model access and data policies in the Power Platform admin center.

## Open questions

- Whether computer use controls apply to the harness capability.
- Credit billing and limits.
- Handling of authenticated sites and downloaded files.

<!-- rationale
risk: High. Agents act on live websites, may download files and enter data, and screen content can steer them in unintended ways.
cost: Variable. Computer use today bills Copilot Credits per step; billing for this native capability is not yet published.
impact: Medium. Affects makers and owners of agents that gain web access, and the sites they interact with.
-->
