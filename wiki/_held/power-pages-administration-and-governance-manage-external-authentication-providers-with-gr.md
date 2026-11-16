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
  - title: "Microsoft 365 Roadmap item 578062"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578062"
    kind: "roadmap"
  - title: "Manage website security from the Power Platform admin center"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-security"
    kind: "learn"
  - title: "Use governance controls to manage site authentication"
    url: "https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls"
    kind: "learn"
  - title: "Control public access for non-production Power Pages sites"
    url: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    kind: "learn"
videos: []
related: []
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
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Power Pages > Settings > Set site visibility to public access for non-production sites > environment"
      docs: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    api: null
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
  - date: "2026-11-16"
    note: "Corrected after the independent check: default state and Learn documentation now stated, non-production row set to environment scope without the unrelated tenant command, role and licence claims removed, action set to review."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 38 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 33
  unconfirmed: 0
  contradicted: 5
  attempts: 2
  hash: "597e70c985443b80d4f70a478f1eb304"
---

## What's changing

Power Pages will let administrators manage external authentication providers with environment-level controls and optional site-level exceptions. An administrator enforces which identity providers are allowed across all sites in an environment. The roadmap says makers will only see and select the approved ones when they set up authentication; Learn says a blocked option appears dimmed in the design studio and cannot be configured.

Microsoft Learn now documents the control in [Use governance controls to manage site authentication](https://learn.microsoft.com/power-pages/security/external-auth-control), while the roadmap item remains In development. Learn says all authentication options are allowed by default, and administrators configure restrictions if required. Previously configured tenant restrictions are preserved and should be reviewed per environment. The roadmap's "Enabled for end users automatically" is a separate statement and does not describe a default restriction. Learn marks the authentication protocol, OAuth 2.0 identity provider and local authentication controls as preview, so their behaviour may change.

The roadmap gives the path Power Platform admin center > Manage > Power Pages > Governance settings > Authentication providers. Current Learn gives a different path: Manage > Power Pages > Settings > Authentication > option > environment > Manage, as shown in the table below.

Preview is listed for November CY2026 and general availability for January CY2027, in Worldwide, GCC, GCC High and DoD.

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
<tr><td data-label="Control"><strong>Which external authentication providers sites in an environment may use</strong><br><small>Environment</small><br><small class="controls__note">Values: All sites, All sites except specific sites, Specific sites, None of the sites.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › Settings › Authentication › option › environment › Manage <a href="https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Public visibility for non-production sites</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › Settings › Set site visibility to public access for non-production sites › environment <a href="https://learn.microsoft.com/power-pages/admin/site-visibility-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no API for the authentication governance setting at the time of writing (November 2026). Blocking a provider overrides maker configuration, and sites that already use it stop authenticating users through it, so audit identity providers per site before enforcing. The Learn page describes administrators configuring the authentication setting but does not specify the exact role required. Tenant administrators configure non-production public-access governance.

## Open questions

- Is enforcement blocking for existing sites, or only for new configuration?
- Does it cover Microsoft Entra External ID and local sign-in?
- Is the control audited in Microsoft Purview?

<!-- rationale
risk: Low. It adds a restriction control. The risk is mainly that existing sites with unapproved providers could be affected once enforcement is enabled.
cost: Low. No licence is published; the cost is admin time to define the allowed providers.
impact: Medium. Makers can configure only the allowed options, and sites using others may need rework.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; What's changing; Governance controls table / admin-path: The current authentication-governance path is Manage > Power Pages > Settings > Authentication > option > environment > Manage. | Found: In the left navigation pane, select Manage. Under Products, select Power Pages. Select the Settings tab. Under Authentication, select the authentication option you want to manage. Select an environment, and then select Manage. | Fix: Insert the documented Products grouping: 'Manage > Products > Power Pages > Settings > Authentication > option > environment > Manage'. Apply this to controls[0].ui.path and both rendered and prose versions of the current Learn path. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control#configure-authentication-governance-controls
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: Non-production public-access governance is at Manage > Power Pages > Settings > Set site visibility to public access for non-production sites > environment. | Found: In the left navigation pane, select Manage. Under Products, select Power Pages. Select the Settings tab. Select Set site visibility to public access for non-production sites. Select the environment you want to manage. | Fix: Replace controls[1].ui.path and its rendered version with 'Manage > Products > Power Pages > Settings > Set site visibility to public access for non-production sites > environment', including the documented Products grouping. | Source: https://learn.microsoft.com/power-pages/admin/site-visibility-governance
- [contradicted, blocker] Open questions: existing-site enforcement; Governance controls / consistency: Whether enforcement blocks existing sites remains an open question. | Found: Governance controls: 'sites that already use it stop authenticating users through it'. Open questions: 'Is enforcement blocking for existing sites, or only for new configuration?' | Fix: Remove 'Is enforcement blocking for existing sites, or only for new configuration?' from Open questions. The existing Governance controls paragraph already gives the answer verified at https://learn.microsoft.com/power-pages/security/external-auth-control.
- [contradicted, blocker] Open questions: Microsoft Entra External ID coverage / absence: Whether the authentication-governance control covers Microsoft Entra External ID is not yet answered. | Found: OpenID Connect | OpenID Connect (OIDC) identity providers, including Microsoft Entra External ID. | Fix: Remove the Microsoft Entra External ID portion of 'Does it cover Microsoft Entra External ID and local sign-in?' from Open questions; the cited Learn page explicitly includes it under the preview OpenID Connect control. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
- [contradicted, blocker] Open questions: local sign-in coverage / absence: Whether the authentication-governance control covers local sign-in is not yet answered. | Found: Local authentication determines whether makers can configure username and password sign-in by using locally stored accounts. It's available only when the site also allows external authentication. | Fix: Remove the local sign-in portion of 'Does it cover Microsoft Entra External ID and local sign-in?' from Open questions. Together with the External ID correction, remove that entire bullet; Learn explicitly documents local authentication governance as preview. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: targetDate; What's changing / record: The roadmap lists January CY2027 as the general availability target. | Found: "targetDate": "January CY2027" | Fix: After the roadmap dates, add: 'A separate Microsoft release-plan page lists January 2026; the roadmap currently targets January CY2027.' Cite https://learn.microsoft.com/power-platform/release-plan/2025wave2/power-pages/manage-external-authentication-provider-governance, whose availability table says 'Users, automatically | - | Jan 2026'.
- [supported, minor] Why it matters: opening sentence / behaviour: Makers can currently pick any supported provider for a site. | Found: By default, all authentication options are allowed for makers to configure. No action is required unless your organization wants to restrict the options available to makers. | Fix: Narrow the sentence to the documented default: 'By default, all authentication options are allowed for makers to configure.' The existing sentence reads as unconditional despite the restrictions documented elsewhere on this same page. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
-->
