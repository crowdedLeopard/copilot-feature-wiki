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
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["power-platform-admin","security","maker"]
tags: ["power-pages","authentication","identity-providers","governance","power-platform-admin-center","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 578062"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578062"
    kind: "roadmap"
  - title: "Manage website security from the Power Platform admin center"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-security"
    kind: "learn"
  - title: "Which external authentication providers sites in an environment may use (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls"
    kind: "learn"
  - title: "Public visibility for non-production sites (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    kind: "learn"
  - title: "Public visibility for non-production sites (PowerShell)"
    url: "https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility"
    kind: "learn"
videos: []
related: ["managed-environments","data-policies","agent-identity"]
controls:
  - governs: "Which external authentication providers sites in an environment may use"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Power Pages > Settings > Authentication > option > environment > Manage"
      docs: "https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls"
    api: null
    note: "Values: All sites, All sites except specific sites, Specific sites, None of the sites."
  - governs: "Public visibility for non-production sites"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Power Pages > Settings > Set site visibility to public access for non-production sites"
      docs: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    api:
      kind: "powershell"
      call: "Set-TenantSettings -RequestBody @{ powerPlatform = @{ powerPages = @{ enableSystemAdminsToChangeSiteVisibility = $false } } }"
      docs: "https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility"
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-23T22:45:54"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 578062; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 31
  confirmed: 23
  unconfirmed: 3
  contradicted: 5
  attempts: 1
---

## What's changing

Power Pages will let administrators manage external authentication providers with environment-level controls and optional site-level exceptions. An administrator enforces which identity providers are allowed across all sites in an environment, and makers see only the approved ones when they set up authentication.

The roadmap gives the path: Power Platform admin center > Manage > Power Pages > Governance settings > Authentication providers. There an administrator configures allowed or restricted providers, enables the control for environments and manages exceptions for specific sites.

Preview is listed for November CY2026 and general availability for January CY2027, in Worldwide, GCC, GCC High and DoD. The roadmap entry reads as enabled automatically, but whether any restriction applies by default is not clear. I found no Learn page yet.

## Why it matters

Makers can currently pick any supported provider for a site. Central control helps security teams keep sign-in to approved identity providers and meet policy.

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

No licence or meter is published. Treat it as included in Power Pages. Not yet published: any dependency on Managed Environments.

## Scope

Power Platform administrators and Power Pages makers. Clouds: Worldwide, GCC, GCC High and DoD.

## Governance guidance

### Before rollout
- [ ] Inventory the identity providers used by existing sites in each environment.
- [ ] Decide the approved list and who may approve exceptions.

### At rollout
- [ ] Enable the control in a test environment first.
- [ ] Tell makers which providers they will see.

### After rollout
- [ ] Review exceptions on a schedule.
- [ ] Check sign-in failures after enforcement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which external authentication providers sites in an environment may use</strong><br><small>Environment</small><br><small class="controls__note">Values: All sites, All sites except specific sites, Specific sites, None of the sites.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › Settings › Authentication › option › environment › Manage <a href="https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Public visibility for non-production sites</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › Settings › Set site visibility to public access for non-production sites <a href="https://learn.microsoft.com/power-pages/admin/site-visibility-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-TenantSettings -RequestBody @{ powerPlatform = @{ powerPages = @{ enableSystemAdminsToChangeSiteVisibility = $false } } }</code> <a href="https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The authentication governance setting has no documented API; the site visibility setting does, through the tenant settings cmdlet. Blocking a provider overrides maker configuration, and sites that already use it stop authenticating users through it, so audit identity providers per site before enforcing. Power Platform admin is required for both settings.

## Open questions

- Is enforcement blocking for existing sites, or only for new configuration?
- Does it cover Microsoft Entra External ID and local sign-in?
- Is the control audited in Microsoft Purview?

<!-- rationale
risk: Low. It adds a restriction control. The risk is mainly that existing sites with unapproved providers could be affected once enforcement is enabled.
cost: Low. No licence is published; the cost is admin time to define the allowed providers.
impact: Medium. Makers see only approved providers, and sites using others may need rework.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] title; summary; What's changing; Scope / behaviour: Administrators can govern the external authentication options available to Power Pages makers across an environment. | Found: Authentication governance gives you, as an admin, control over which authentication options makers can configure for Power Pages sites in your environments. | Fix: Acknowledge that Learn now documents the control while the roadmap remains In development. Flag the authentication-protocol and individual OAuth provider controls as preview, as the cited Learn page does, rather than describing all granular behaviour as final. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
- [supported, minor] What's changing; Governance guidance; rationale: impact / record: Makers will only see and select approved identity providers. | Found: Makers will only see and select from the approved IDPs when setting up authentication | Fix: Distinguish the roadmap wording from current Learn guidance: blocked options remain visible but dimmed and cannot be configured. State that makers can configure only allowed options; cite https://learn.microsoft.com/power-pages/security/external-auth-control#what-makers-see.
- [supported, minor] What's changing: roadmap navigation path / record: The roadmap gives Power Platform admin center > Manage > Power Pages > Governance settings > Authentication providers. | Found: Navigate to Manage > Power Pages > Governance settings > Authentication providers. | Fix: Keep this explicitly attributed to the roadmap and explain that current Learn uses Manage > Power Pages > Settings > Authentication > option > environment > Manage, as already shown in the table. Identify this as a source difference rather than leaving two unexplained paths.
- [contradicted, blocker] What's changing: restriction default / default: Whether any restriction applies by default is unclear. | Found: By default, all authentication options are allowed for makers to configure. No action is required unless your organization wants to restrict the options available to makers. | Fix: Replace the uncertainty with: 'Learn says all authentication options are allowed by default; administrators configure restrictions if required. Previously configured tenant restrictions are preserved and should be reviewed per environment.' Keep the roadmap's automatic-availability wording separate. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
- [contradicted, blocker] What's changing: I found no Learn page yet / absence: There is no Microsoft Learn page describing this feature. | Found: # Use governance controls to manage site authentication | Fix: Remove 'I found no Learn page yet.' Cite the already-listed authentication governance page and use its documented defaults, enforcement behaviour and preview qualifications. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Non-production public-access governance is under Manage > Power Pages > Settings > Set site visibility to public access for non-production sites. | Found: 5. Select **Set site visibility to public access for non-production sites**.
6. Select the environment you want to manage.
7. Choose a policy value: | Fix: Append '> environment' to controls[1].ui.path and the rendered table so readers reach the policy values. | Source: https://learn.microsoft.com/power-pages/admin/site-visibility-governance
- [contradicted, blocker] controls[1].scope; Governance controls table / applicability: The non-production public-access policy shown in this row has tenant scope. | Found: Select the environment you want to manage. | Fix: Set controls[1].scope to 'environment' and render 'Environment': a tenant administrator selects an environment and can target sites within it. Do not equate the administrator's tenant role with the policy's scope. | Source: https://learn.microsoft.com/power-pages/admin/site-visibility-governance
- [contradicted, blocker] controls[1].api; Governance controls table and closing paragraph / command: Set-TenantSettings with enableSystemAdminsToChangeSiteVisibility = $false is the automation equivalent of the non-production public-access policy. | Found: When you don't want all system administrators to be able to change site visibility, set `enableSystemAdminsToChangeSiteVisibility` to `false`. Then delegate site visibility management to a select set of users. | Fix: Remove this command from the non-production public-access row and remove the equivalence asserted below the table. It controls delegation of site-visibility permissions, not the environment's None/All/site-targeting policy. If retained, give it a separate, accurately named tenant delegation row. | Source: https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility
- [unsupported, blocker] Governance controls closing paragraph: authentication role / role: The Power Platform administrator role is required to configure authentication governance. | Found: Searched: Power Pages authentication governance configure required role Power Platform administrator. Read external-auth-control and admin-roles search excerpts; neither states an exclusive required role for this authentication control. | Fix: Remove the assertion that Power Platform administrator is required for authentication governance. State that the feature page describes administrator configuration but does not specify the exact required role.
- [unsupported, blocker] Governance controls closing paragraph: public-access role / role: The Power Platform administrator role is required to configure the non-production public-access policy. | Found: Searched: Power Pages authentication governance configure required role Power Platform administrator. Opened site-visibility-governance and site-visibility; the former says tenant admins, while the latter's named roles concern a different site-visibility permissions control. | Fix: Replace this part of 'Power Platform admin is required for both settings' with 'Tenant administrators configure non-production public-access governance', matching https://learn.microsoft.com/power-pages/admin/site-visibility-governance. Do not assert an exclusive named role.
- [unsupported, blocker] Cost and licensing: Treat it as included in Power Pages / licensing: Administrators should treat the authentication governance feature as included in Power Pages. | Found: Searched: Power Pages authentication governance external authentication controls licensing Managed Environments license pricing meter. Read external-auth-control and Power Platform licensing FAQs excerpts; neither states that this feature is included. | Fix: Delete 'Treat it as included in Power Pages.' Retain licensing.model = 'unknown' and say 'Feature-specific licensing and metering have not yet been published; the known preparation cost is administrator time.'
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits a low-risk optional restriction control that changes nothing until configured. | Found: No action is required unless your organization wants to restrict the options available to makers. | Fix: Set action to 'review'. The standard assigns review to an optional new control with no default behaviour change; the page rates the remaining exposure low, so the high-risk-control exception does not apply. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
-->
