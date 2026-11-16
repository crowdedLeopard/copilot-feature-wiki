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
action: "act-now"
licensing:
  model: "unknown"
  notes: "No separate licence is stated on the roadmap item or the preview documentation. Confirm before general availability."
audiences: ["power-platform-admin","maker","security","service-owner"]
tags: ["power-pages","security-agent","authentication","web-roles","table-permissions","least-privilege","design-studio"]
sources:
  - title: "Security agent overview (preview)"
    url: "https://learn.microsoft.com/power-pages/security/security-agent"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 577809"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577809"
    kind: "roadmap"
  - title: "FAQ for security agent"
    url: "https://learn.microsoft.com/power-pages/faq-security-agent"
    kind: "learn"
  - title: "Power Pages licensing"
    url: "https://learn.microsoft.com/power-pages/go-live/assign-licensing"
    kind: "learn"
  - title: "Copilot hub for Power Pages"
    url: "https://learn.microsoft.com/power-pages/admin/copilot-hub"
    kind: "learn"
  - title: "Control use of Generative AI features for users (preview)"
    url: "https://learn.microsoft.com/power-pages/admin/copilot-governance"
    kind: "learn"
  - title: "Publish Copilots with AI features (tenant setting) (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    kind: "learn"
  - title: "Security scan of a site (Power Pages design studio (maker))"
    url: "https://learn.microsoft.com/power-pages/security/security-scan"
    kind: "learn"
  - title: "Security scan of a site (Power Platform API)"
    url: "https://learn.microsoft.com/rest/api/power-platform/powerpages/websites/start-deep-scan"
    kind: "learn"
  - title: "AI features for Power Pages per environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Publish Copilots with AI features (tenant setting)"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Tenant settings > Publish Copilots with AI features"
      docs: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    api: null
    note: "Site chatbot publishing control; Microsoft has not confirmed that it applies to the security agent."
  - governs: "AI features for Power Pages per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot Hub > Power Pages > Settings"
      docs: "https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience"
    api: null
    note: "Copilot hub controls whether makers in specific environments can use AI features; a separate Security agent switch is not documented."
  - governs: "Security scan of a site"
    scope: "site"
    ui:
      surface: "Power Pages design studio (maker)"
      path: "Security workspace > Run scan"
      docs: "https://learn.microsoft.com/power-pages/security/security-scan"
    api:
      kind: "power-platform-api"
      call: "POST https://api.powerplatform.com/powerpages/environments/{environmentId}/websites/{id}/scan/deep/start?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/rest/api/power-platform/powerpages/websites/start-deep-scan"
  - governs: "Switch specific to the security agent"
    scope: "site"
    ui: null
    api: null
    note: "The feature documentation does not specify the roles or privileges required to use the agent; confirm access in a test environment."
confidence: "high"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-22T23:45:34"
changes:
  - date: "2026-11-15"
    note: "New briefing: Power Pages security agent in design studio, in development with GA targeted November 2026."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected: security scan API call now gives the HTTP method and endpoint; tenant and Copilot hub settings are marked as not confirmed for the security agent; access-role note reworded."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected: Copilot hub row note and text now say it controls maker AI features and that no separate security agent switch is documented; removed redirect settings from what the agent configures; action set to act-now; dropped an unmatched review step."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 59 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-16"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 59
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "b576d3445e2611c4b0b3552b82d9a3d8"
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
- The agent can configure identity providers and session controls.
- It is designed to recommend least-privilege access, but the output is advice, not a guarantee.

**Autonomy & actions**
- Learn states that the agent always requests approval before making updates and confirms what changed afterwards.

**Change & support**
- Preview feature: not meant for production use. Changes should go through the normal ALM process.

## Cost and licensing

No separate licence, meter or credit charge is stated on the roadmap item or the preview Learn article. The [Power Pages licensing](https://learn.microsoft.com/power-pages/go-live/assign-licensing) page covers subscriptions for the underlying site and states no entitlement specific to the security agent. Pricing and any consumption model for general availability are not yet published.

## Scope

Makers and administrators of Power Pages sites in the Worldwide (Standard Multi-Tenant) cloud, using the web design studio. The roadmap says it is enabled automatically for admins, makers and marketers. Sovereign clouds are not listed.

## Governance guidance

### Before rollout
- Decide whether AI-assisted security configuration is allowed for production sites.
- Limit use to development and test environments first, as Microsoft advises.
- Confirm which roles can open the Security workspace.

### At rollout
- Require makers to review each proposed change before approving it.
- Deploy approved changes through the standard ALM pipeline.

### After rollout
- Compare the agent output with the Security scan results.
- Record any approval patterns that caused over-broad access.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Publish Copilots with AI features (tenant setting)</strong><br><small>Tenant</small><br><small class="controls__note">Site chatbot publishing control; Microsoft has not confirmed that it applies to the security agent.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Tenant settings › Publish Copilots with AI features <a href="https://learn.microsoft.com/power-platform/admin/tenant-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>AI features for Power Pages per environment</strong><br><small>Environment</small><br><small class="controls__note">Copilot hub controls whether makers in specific environments can use AI features; a separate Security agent switch is not documented.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot Hub › Power Pages › Settings <a href="https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security scan of a site</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Pages design studio (maker)</strong><br>Security workspace › Run scan <a href="https://learn.microsoft.com/power-pages/security/security-scan" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.powerplatform.com/powerpages/environments/{environmentId}/websites/{id}/scan/deep/start?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/powerpages/websites/start-deep-scan" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch specific to the security agent</strong><br><small>Site</small><br><small class="controls__note">The feature documentation does not specify the roles or privileges required to use the agent; confirm access in a test environment.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The security agent is an AI-powered maker tool. Copilot hub documents controls to enable or disable AI features for makers in specific environments; Microsoft does not name a separate Security agent switch. The Copilot hub manages governance settings for Copilot features in Power Pages, and the older tenant-level [governance configuration](https://learn.microsoft.com/power-pages/admin/copilot-hub#admin-experience) is deprecated; that older control covered AI experiences for site users and states that maker experiences are not covered by it.

The Learn FAQ describes a wider security agent system that includes scheduled vulnerability scanning, and the chat assistant's documented posture review analyses scan findings. A chat command that starts a scan is not documented. Admins can run scans from the [security pages](https://learn.microsoft.com/power-pages/admin/admin-center-security) in the admin center, and the admin API exposes the scan for automation.

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
