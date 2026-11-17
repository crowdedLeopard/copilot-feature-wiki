---
title: "Power Pages: environment-level governance of external authentication providers"
slug: "power-pages-administration-and-governance-manage-external-authentication-providers-with-gr"
roadmapId: 578062
topic: "power-platform"
products: ["Power Pages"]
summary: "Administrators will set which external identity providers Power Pages sites may use across an environment, with optional site-level exceptions."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["power-platform-admin","security","maker"]
tags: ["power-pages","authentication","identity-providers","governance","power-platform-admin-center","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 578062"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578062"
    kind: "roadmap"
  - title: "Use governance controls to manage site authentication"
    url: "https://learn.microsoft.com/power-pages/security/external-auth-control"
    kind: "learn"
  - title: "Control public access for non-production Power Pages sites"
    url: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    kind: "learn"
  - title: "Manage website security from the Power Platform admin center"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-security"
    kind: "learn"
  - title: "Which external authentication providers sites in an environment may use (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which external authentication providers sites in an environment may use"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Products > Power Pages > Settings > Authentication > option > environment > Manage"
      docs: "https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls"
    api: null
    note: "Values: All sites, All sites except specific sites, Specific sites, None of the sites."
  - governs: "Public visibility for non-production sites"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Products > Power Pages > Settings > Set site visibility to public access for non-production sites > environment"
      docs: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-17"
roadmapModified: "2026-10-23T22:45:54"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 578062; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the independent check: default state and Learn documentation now stated, non-production row set to environment scope without the unrelated tenant command, role and licence claims removed, action set to review."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 38 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: admin paths now include the Products grouping, resolved open questions removed, and the opening of Why it matters narrowed to the documented default."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 36 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 36
  confirmed: 36
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8f4b0c00f6d5b7e3b3dec2481fd8c61c"
---

## What's changing

Power Pages will let administrators manage external authentication providers with environment-level controls and optional site-level exceptions. An administrator enforces which identity providers are allowed across all sites in an environment. The roadmap says makers will only see and select the approved ones when they set up authentication; Learn says a blocked option appears dimmed in the design studio and cannot be configured.

Microsoft Learn now documents the control in [Use governance controls to manage site authentication](https://learn.microsoft.com/power-pages/security/external-auth-control), while the roadmap item remains In development. Learn says all authentication options are allowed by default, and administrators configure restrictions if required. Previously configured tenant restrictions are preserved and should be reviewed per environment. The roadmap's "Enabled for end users automatically" is a separate statement and does not describe a default restriction. Learn marks the authentication protocol, OAuth 2.0 identity provider and local authentication controls as preview, so their behaviour may change.

The roadmap gives the path Power Platform admin center > Manage > Power Pages > Governance settings > Authentication providers. Current Learn gives a different path: Manage > Products > Power Pages > Settings > Authentication > option > environment > Manage, as shown in the table below.

Preview is listed for November CY2026 and general availability for January CY2027, in Worldwide, GCC, GCC High and DoD.

## Why it matters

By default, all authentication options are allowed for makers to configure. Central control helps security teams keep sign-in to approved identity providers and meet policy.

Enforcement may affect live sites, so the order of rollout matters.

## Risk assessment

**Data exposure**
- No new data exposure. Restricting providers can reduce accidental use of unapproved social or third-party identities.

**Security & identity**
- Improves control over who can authenticate to external sites. Exceptions weaken the control, so keep them few and reviewed.

**Autonomy & actions**
- None.

**Change & support**
- Sites already using a provider that later becomes restricted may fail sign-in. Test before enforcing.

## Cost and licensing

Feature-specific licensing and metering have not yet been published; the known preparation cost is administrator time. Not yet published: any dependency on Managed Environments.

## Scope

Power Platform administrators and Power Pages makers. Clouds: Worldwide, GCC, GCC High and DoD.

## Governance guidance

### Before rollout
- Inventory the identity providers used by existing sites in each environment.
- Decide the approved list and who may approve exceptions.

### At rollout
- Enable the control in a test environment first.
- Tell makers which providers they can configure.

### After rollout
- Review exceptions on a schedule.
- Check sign-in failures after enforcement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which external authentication providers sites in an environment may use</strong><br><small>Environment</small><br><small class="controls__note">Values: All sites, All sites except specific sites, Specific sites, None of the sites.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Settings › Authentication › option › environment › Manage <a href="https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Public visibility for non-production sites</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Settings › Set site visibility to public access for non-production sites › environment <a href="https://learn.microsoft.com/power-pages/admin/site-visibility-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no API for the authentication governance setting at the time of writing (November 2026). Blocking a provider overrides maker configuration, and sites that already use it stop authenticating users through it, so audit identity providers per site before enforcing. The Learn page describes administrators configuring the authentication setting but does not specify the exact role required. Tenant administrators configure non-production public-access governance.

## Open questions

- Is the control audited in Microsoft Purview?

<!-- rationale
risk: Low. It adds a restriction control. The risk is mainly that existing sites with unapproved providers could be affected once enforcement is enabled.
cost: Low. No licence is published; the cost is admin time to define the allowed providers.
impact: Medium. Makers can configure only the allowed options, and sites using others may need rework.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls table / behaviour: Authentication targeting offers All sites, All sites except specific sites, Specific sites and None of the sites. | Found: All sites in this environment All sites except specific sites Specific sites None of the sites in this environment | Fix: Expand the abbreviated first and last labels in controls[0].note and the rendered note to: 'Values: All sites in this environment, All sites except specific sites, Specific sites, None of the sites in this environment.' | Source: https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls
-->
