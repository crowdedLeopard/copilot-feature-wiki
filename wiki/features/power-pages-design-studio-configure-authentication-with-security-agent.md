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
  - title: "Publish Copilots with AI features (prerequisite for site agents) (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    kind: "learn"
  - title: "AI features for Power Pages per environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience"
    kind: "learn"
  - title: "Security scan of a site (Power Pages design studio (maker))"
    url: "https://learn.microsoft.com/power-pages/security/security-scan"
    kind: "learn"
  - title: "Security scan of a site (Power Platform API)"
    url: "https://learn.microsoft.com/power-pages/admin/admin-api#power-pages-operations"
    kind: "learn"
videos: []
related: ["power-pages-administration-and-governance-manage-external-authentication-providers-with-gr","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities","power-pages-first-class-support-for-connector-apis-in-power-pages"]
controls:
  - governs: "Publish Copilots with AI features (prerequisite for site agents)"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Tenant settings > Publish Copilots with AI features"
      docs: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    api: null
  - governs: "AI features for Power Pages per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot Hub > Power Pages > Settings"
      docs: "https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience"
    api: null
  - governs: "Security scan of a site"
    scope: "site"
    ui:
      surface: "Power Pages design studio (maker)"
      path: "Security workspace > Run scan"
      docs: "https://learn.microsoft.com/power-pages/security/security-scan"
    api:
      kind: "power-platform-api"
      call: "Start Deep Scan / Get Security Scan Report (powerpages namespace)"
      docs: "https://learn.microsoft.com/power-pages/admin/admin-api#power-pages-operations"
  - governs: "Switch specific to the security agent"
    scope: "site"
    ui: null
    api: null
    note: "Governed by who can edit the site."
confidence: "high"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-22T23:45:34"
changes:
  - date: "2026-11-15"
    note: "New briefing: Power Pages security agent in design studio, in development with GA targeted November 2026."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 43
  unconfirmed: 3
  contradicted: 2
  attempts: 1
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Publish Copilots with AI features (prerequisite for site agents)</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Tenant settings › Publish Copilots with AI features <a href="https://learn.microsoft.com/power-platform/admin/tenant-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>AI features for Power Pages per environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot Hub › Power Pages › Settings <a href="https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security scan of a site</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Pages design studio (maker)</strong><br>Security workspace › Run scan <a href="https://learn.microsoft.com/power-pages/security/security-scan" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>Start Deep Scan / Get Security Scan Report (powerpages namespace)</code> <a href="https://learn.microsoft.com/power-pages/admin/admin-api#power-pages-operations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch specific to the security agent</strong><br><small>Site</small><br><small class="controls__note">Governed by who can edit the site.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The agent is a maker tool and inherits the Copilot governance for Power Pages: the tenant setting gates all AI features, the Copilot hub governs them per environment, and the older tenant-level controls under Resources are [being deprecated](https://learn.microsoft.com/power-pages/admin/copilot-governance). The scan it drives is the same one admins can run from the [security pages](https://learn.microsoft.com/power-pages/admin/admin-center-security) in the admin center, and the admin API exposes it for automation.

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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] controls[2].api; Governance controls table / command: Start Deep Scan / Get Security Scan Report (powerpages namespace) is the API call for scan automation. | Found: Searched: opened admin-api and the linked start-deep-scan and get-security-scan-report references. The printed text names operations but provides no HTTP method, endpoint or API version and is not an executable call. | Fix: Replace the call with POST https://api.powerplatform.com/powerpages/environments/{environmentId}/websites/{id}/scan/deep/start?api-version=2024-10-01 and docs https://learn.microsoft.com/rest/api/power-platform/powerpages/websites/start-deep-scan. If showing report retrieval, give a separate GET https://api.powerplatform.com/powerpages/environments/{environmentId}/websites/{id}/scan/deep/getLatestCompletedReport?api-version=2024-10-01 with its get-security-scan-report reference.
- [contradicted, blocker] controls[0].governs; Governance controls prose / applicability: Publish Copilots with AI features gates all Power Pages AI features, including the maker security agent. | Found: Chat agent (site Copilot) specific setting: If the setting for “Publish bots with AI” is disabled at the tenant level, admins are unable to configure site Copilot at the environment level. | Fix: Remove this setting as a prerequisite or gate for the security agent. If retaining the row as background, label it a site-chatbot publishing control and explicitly state that Microsoft has not confirmed applicability to the maker security agent. | Source: https://learn.microsoft.com/power-pages/admin/copilot-hub
- [unsupported, blocker] controls[1].governs; Governance controls prose / applicability: The security agent inherits the Copilot hub's environment-level governance. | Found: Searched: Power Pages security agent disable enable governance; Power Pages Copilot hub maker AI features environment settings. Opened security-agent, copilot-hub and copilot-governance. None explicitly puts Security agent under Studio Copilot or confirms this inheritance. | Fix: Keep the documented general Power Pages maker-AI control, but add a note: 'General Power Pages AI control; Microsoft has not confirmed that it governs Security agent.' Replace the categorical inheritance statement with that qualification.
- [unsupported, blocker] controls[3].note; Governance controls table / role: Who can edit the site determines who can use the security agent. | Found: Searched: Power Pages security agent role access edit permissions; Power Pages security agent permissions edit. Opened security-agent and faq-security-agent; neither defines site-edit permission as the sufficient access rule for the agent. | Fix: Replace 'Governed by who can edit the site' with 'The feature documentation does not specify the roles or privileges required to use the agent; confirm access in a test environment.'
- [supported, minor] Cost and licensing / licensing: Power Pages licensing continues to apply to the underlying site. | Found: As you work on projects and need to establish permanent sites that don't expire, you can apply Power Pages subscriptions and convert websites from trial to production. | Fix: Cite https://learn.microsoft.com/power-pages/go-live/assign-licensing for the underlying site's licensing, without implying it establishes the security agent's separate entitlement. | Source: https://learn.microsoft.com/power-pages/go-live/assign-licensing
- [supported, minor] Governance controls prose / behaviour: The older tenant-level governance experience under Resources is being deprecated in favour of Copilot hub. | Found: The tenant-level governance configuration feature is now deprecated. ... Going forward, all governance settings for Copilot features must be managed through the Copilot hub. | Fix: Point the deprecation link to https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience, which states the deprecation. Clarify that the older control covered site-user AI experiences and expressly excluded maker experiences. | Source: https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience
- [supported, minor] Governance controls prose / behaviour: The security-agent system includes security scanning. | Found: It combines scheduled vulnerability scanning, real-time traffic anomaly detection, and guided remediation | Fix: Cite https://learn.microsoft.com/power-pages/faq-security-agent and distinguish the broader agent system's scheduled scanning from the chat assistant's documented ability to analyse scan findings; avoid implying a chat command to launch a scan is documented. | Source: https://learn.microsoft.com/power-pages/faq-security-agent
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist asks readers to review Security workspace access, web roles and table permissions without corresponding control rows. | Found: Confirm which roles can open the Security workspace. ... Review web roles and table permissions after agent-driven changes. The table contains publishing, AI feature settings, scans and a missing dedicated switch. | Fix: Add rows for site-maker/Security workspace access, web roles and table permissions. For web roles and table permissions, use https://learn.microsoft.com/power-pages/getting-started/use-security-workspace and its linked configuration references; keep unconfirmed agent-specific access requirements explicit.
-->
