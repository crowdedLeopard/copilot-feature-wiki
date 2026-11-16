---
title: "Power Pages: security agent in design studio configures authentication and authorisation"
slug: "power-pages-design-studio-configure-authentication-with-security-agent"
roadmapId: 577809
topic: "power-platform"
products: ["Power Pages"]
summary: "An AI chat panel in the Power Pages design studio Security workspace reviews and configures authentication, web roles and table permissions, applying changes only after the maker approves them."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "No separate licence is stated on the roadmap item or the preview documentation. Confirm before general availability."
audiences: ["power-platform-admin","maker","security","service-owner"]
tags: ["power-pages","security-agent","authentication","web-roles","table-permissions","least-privilege","design-studio"]
sources:
  - title: "Security agent overview (preview)"
    url: "https://learn.microsoft.com/en-us/power-pages/security/security-agent"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 577809"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577809"
    kind: "roadmap"
videos: []
related: ["power-pages-administration-and-governance-manage-external-authentication-providers-with-gr","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities","power-pages-first-class-support-for-connector-apis-in-power-pages"]
confidence: "high"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-22T23:45:34"
changes:
  - date: "2026-11-15"
    note: "New briefing: Power Pages security agent in design studio, in development with GA targeted November 2026."
version: 1
---

## What's changing

The security agent is an AI assistant embedded in the **Security** workspace of Power Pages design studio. Makers open the Security agent tab, which provides a chat panel, and describe what they want in natural language: review risks, understand a configuration, or take a guided action.

It covers four scenarios according to the preview documentation: a site security posture review, authorisation configuration (web roles, page permissions and table permissions), authentication configuration and troubleshooting (Microsoft Entra ID, OpenID Connect and SAML 2.0), and application security settings such as Content Security Policy, HTTP security headers, CORS, cookies and session management.

The roadmap lists a preview from April 2026 and general availability targeted for November 2026, in the Worldwide cloud only. The Learn article is still marked as prerelease documentation.

## Why it matters

Power Pages sites are frequently exposed to anonymous or external users, and misconfigured table permissions are a direct route to data exposure. The agent lowers the expertise needed to configure access, which can reduce mistakes, but it also means more makers may change security settings with AI-suggested values.

Service owners should decide whether AI-assisted security configuration is acceptable under their change process, and how its output is validated.

## Risk assessment

**Data exposure**
- Recommendations draw on the site configuration, including data schema and permissions, so makers see how access is set up.
- Suggested access levels could be broader than intended if a maker approves without review.

**Security & identity**
- The agent can configure identity providers, redirect settings and session controls.
- It is designed to recommend least-privilege access, but the output is advice, not a guarantee.

**Autonomy & actions**
- Learn states that the agent always requests approval before making updates and confirms what changed afterwards.

**Change & support**
- Preview feature: not meant for production use. Changes should go through the normal ALM process.

## Cost and licensing

No separate licence, meter or credit charge is stated on the roadmap item or the preview Learn article. Power Pages licensing continues to apply to the site. Pricing and any consumption model for general availability are not yet published.

## Scope

Makers and administrators of Power Pages sites in the Worldwide (Standard Multi-Tenant) cloud, using the web design studio. The roadmap says it is enabled automatically for admins, makers and marketers. Sovereign clouds are not listed.

## Governance guidance

### Before rollout
- [ ] Decide whether AI-assisted security configuration is allowed for production sites.
- [ ] Limit use to development and test environments first, as Microsoft advises.
- [ ] Confirm which roles can open the Security workspace.

### At rollout
- [ ] Require makers to review each proposed change before approving it.
- [ ] Deploy approved changes through the standard ALM pipeline.

### After rollout
- [ ] Review web roles and table permissions after agent-driven changes.
- [ ] Compare the agent output with the Security scan results.
- [ ] Record any approval patterns that caused over-broad access.

## Admin controls

No dedicated tenant switch has been published for the security agent. It is available in the Security workspace of design studio and is governed by who can edit the site. Related controls include the Power Pages Security scan and advanced settings. Check the Power Platform admin center for any future toggle.

## Open questions

- Is there an admin switch to disable the security agent per environment or tenant?
- Will general availability change licensing or add consumption metering?
- Which sovereign clouds will receive it, and when?
- What logging exists for approvals the agent applies?

<!-- rationale
risk: Medium. The agent can change authentication and permission settings, but every write needs explicit maker approval and Microsoft advises using it in development or test first.
cost: Low. The roadmap and Learn pages state no separate licence or meter; the main cost is admin and maker time for review. Pricing is not yet published for general availability.
impact: Medium. It is aimed at makers and site owners who configure Power Pages sites, not at end users or site visitors.
-->
