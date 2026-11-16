---
title: "Power Pages: enhanced authorisation maps web roles and site users to Dataverse security"
slug: "power-pages-design-studio-unify-power-pages-authorization-by-merging-web-role-with-dataver"
roadmapId: 576750
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages web roles and site users are mapped to Dataverse security roles and system users so Dataverse evaluates permissions directly and records operations under the site user."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn states the system users are managed internally, grant no direct Dataverse access and need no additional licensing."
audiences: ["power-platform-admin","security","maker","compliance"]
tags: ["power-pages","authorisation","dataverse","web-roles","security-roles","auditing","impersonation"]
sources:
  - title: "Enable enhanced authorization (preview)"
    url: "https://learn.microsoft.com/en-us/power-pages/security/unify-pages-security-with-dataverse"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576750"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576750"
    kind: "roadmap"
  - title: "Enhanced authorization for a site (Power Pages)"
    url: "https://learn.microsoft.com/power-pages/security/unify-pages-security-with-dataverse#enable-enhanced-authorization"
    kind: "learn"
videos: []
related: ["microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column","power-pages-administration-and-governance-manage-external-authentication-providers-with-gr"]
controls:
  - governs: "Enhanced authorization for a site"
    scope: "site"
    ui:
      surface: "Power Pages"
      path: "site > ... > Admin center > Edit site details > Enable Enhanced Authorization"
      docs: "https://learn.microsoft.com/power-pages/security/unify-pages-security-with-dataverse#enable-enhanced-authorization"
    api: null
  - governs: "Tenant or environment enforcement of enhanced authorization"
    scope: "tenant"
    ui: null
    api: null
confidence: "high"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-16T19:08:35"
changes:
  - date: "2026-11-15"
    note: "New briefing: Power Pages enhanced authorisation merging web roles with Dataverse security roles, in development."
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
  claims: 44
  confirmed: 37
  unconfirmed: 1
  contradicted: 6
  attempts: 1
---

## What's changing

Power Pages continues to use contacts and web roles, but with enhanced authorisation each contact is mapped to a Dataverse system user and each web role to a Dataverse security role. Dataverse then evaluates permissions and returns only permitted records, replacing a check inside Power Pages that ran under an elevated application user.

Learn states that operations run through impersonation as the site user, plug-ins run as the calling user unless configured otherwise, and audit entries track under the respective site user. Column-level permissions set for the Power Pages Web API are bypassed and Dataverse column security profiles apply instead.

To enable, the site needs Power Pages Core 1.1.2605.258 or later and Dataverse Base Portal 9.3.2605.265 or later, then the Enable Enhanced Authorization check box in the Power Pages admin center. The roadmap shows a preview from July 2026 and general availability targeted for November 2026.

## Why it matters

The model gives native auditing and removes duplicate permission checks, which supports compliance and performance. It also means Dataverse admins will see many managed system users and security roles that originate from sites.

Plug-ins and column permissions behave differently, so teams must test before enabling on production sites.

## Risk assessment

**Data exposure**
- Permissions are enforced by Dataverse, which can narrow or change what the Web API returns; column permissions move to column security profiles.

**Security & identity**
- Multiple system users may be created for one contact across sites.

**Autonomy & actions**
- Plug-ins run as the calling user, which can change their effective privileges.

**Change & support**
- Preview feature; Microsoft says no maker changes or migration are needed, but behaviour should be verified.

## Cost and licensing

No extra licence is required according to Learn: the system users are managed internally and access continues to be governed by Power Pages licensing. Plan testing and update effort for the Power Pages solutions.

## Scope

Power Pages sites in the Worldwide cloud. Requires the minimum Power Pages Core and Dataverse Base Portal versions named above. Enabled per site by an admin.

## Governance guidance

### Before rollout
- [ ] Update the Power Pages solutions to the minimum versions.
- [ ] Inventory plug-ins on tables that sites use and check their calling-user assumptions.
- [ ] Review Web API column permissions and plan column security profiles.

### At rollout
- [ ] Enable enhanced authorisation on a test site first.
- [ ] Verify access for each web role.

### After rollout
- [ ] Review audit logs for site-user entries.
- [ ] Check the growth of system users and security roles.
- [ ] Monitor Web API performance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enhanced authorization for a site</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Pages</strong><br>site › ... › Admin center › Edit site details › Enable Enhanced Authorization <a href="https://learn.microsoft.com/power-pages/security/unify-pages-security-with-dataverse#enable-enhanced-authorization" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment enforcement of enhanced authorization</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The switch is per site and portal-only. Once on, access is evaluated through Dataverse security roles and column security profiles as well as web roles and table permissions, so review both models before enabling on a production site. Power Platform admins can see which sites have it on from the site details, but there is no tenant report or policy.

## Open questions

- Can enhanced authorisation be reverted once enabled?
- Will it become the default for new sites at general availability?
- How should system user growth be managed in large external sites?

<!-- rationale
risk: Medium. Authorisation moves into Dataverse with impersonation, which changes plug-in context and column security behaviour, but existing configuration is meant to remain intact.
cost: Low. Learn says the created system users need no extra licensing and access stays governed by Power Pages licensing; cost is testing effort.
impact: Medium. Site makers and administrators see new system user and security role records, while site visitors see no change.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: previewDate; What's changing / record: The roadmap shows a preview from July 2026. | Found: "previewDate": "July CY2026" | Fix: Replace 'a preview from July 2026' with 'a preview target of July CY2026'; the record supplies a target, not proof of when preview began.
- [contradicted, blocker] summary; What's changing; Why it matters; Governance guidance: After rollout / behaviour: Enabling enhanced authorization records operations and audit entries under the site user without any stated auditing prerequisite. | Found: When auditing is enabled on a Dataverse table, any operation performed from the Power Pages site tracks under the respective site user. | Fix: Qualify the summary and auditing prose: 'When auditing is enabled on the Dataverse table, operations from the site are audited under the respective site user.' Add a checklist step to verify auditing is enabled for the relevant tables before relying on these entries. | Source: https://learn.microsoft.com/en-us/power-pages/security/unify-pages-security-with-dataverse
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The enablement path is Power Pages > site > ... > Admin center > Edit site details > Enable Enhanced Authorization. | Found: Select Edit next to the site details.
Select the Enable Enhanced Authorization check box and save. | Fix: Use 'environment > site > ... > Admin center > Edit (next to site details) > Enable Enhanced Authorization' in controls[0].ui.path and the rendered table. The documented button is 'Edit', not 'Edit site details'; also restore the environment-selection step. | Source: https://learn.microsoft.com/power-pages/security/unify-pages-security-with-dataverse#enable-enhanced-authorization
- [supported, minor] controls[0].api; Governance controls table and prose / absence: No API or automation control is documented for enabling enhanced authorization. | Found: Searched: '"enhanced authorization" "Power Pages" automation PowerShell REST'. Read Enable enhanced authorization and Power Platform API Websites operations; no enablement API found. | Fix: Retain the null API side, but replace the absolute 'portal-only' with 'Microsoft documents per-site enablement in the portal; no equivalent automation control was found as of November 2026.'
- [supported, minor] Governance controls: closing paragraph / role: Power Platform administrators can inspect sites and their details to check the enhanced authorization setting. | Found: From here you can configure website details, for more information go to site details.
If you are a service administrator (Dynamics 365 administrator or Power Platform administrator), you can view the list of all websites in your tenant. | Fix: Cite https://learn.microsoft.com/power-pages/admin/power-platform-admin-center for administrator access to site details, alongside the existing feature page documenting the checkbox. | Source: https://learn.microsoft.com/power-pages/admin/power-platform-admin-center
- [supported, minor] Governance controls: closing paragraph / absence: No tenant report identifying enhanced authorization enablement is documented. | Found: Searched: '"enhanced authorization" "Power Pages" "report" "policy"'. Read feature enablement, admin-center tenant listing and Get Websites response schema; no enhanced-authorization reporting field found. | Fix: Replace 'there is no tenant report or policy' with 'No tenant-wide enhanced-authorization report or enforcement policy was found in Microsoft's documentation as of November 2026.'
- [unsupported, minor] rationale: impact / behaviour: Site visitors see no change. | Found: Searched: '"enhanced authorization" "Power Pages" "visitors"'. Read Enable enhanced authorization; it preserves role definitions but does not promise unchanged visitor experience or results. | Fix: Remove 'while site visitors see no change'. Replace with 'Existing role definitions continue to work, but teams should verify visitor access, plug-ins and column security on a test site.'
- [contradicted, minor] front matter: action / consistency: The prepare action fits a capability that requires per-site administrative opt-in. | Found: action: "prepare"; defaultState: "admin-opt-in"; 'Enabled per site by an admin.' | Fix: Set action to 'review': the Assessment scales define review for optional capabilities that change nothing until an administrator chooses them, and no supplied notice establishes an automatic transition or deadline.
- [contradicted, minor] front matter: risk; rationale: risk / consistency: Medium risk describes the exposure when a typical tenant leaves this opt-in control untouched. | Found: risk: "medium"; defaultState: "admin-opt-in"; 'Enabled per site by an admin.' | Fix: Set risk to 'low' and explain that current authorization remains in place until the administrator opts in. Keep plug-in context and column security as testing risks when evaluating adoption.
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The controls table includes the permission and auditing controls the checklist asks administrators to review. | Found: 'Review Web API column permissions and plan column security profiles'; 'Verify access for each web role'; 'Review audit logs for site-user entries'. The table lists only site enablement and tenant/environment enforcement. | Fix: Add rows for column security profiles, web-role/table-permission configuration, and Dataverse auditing. For column profiles, https://learn.microsoft.com/power-pages/security/column-security-profile documents Power Pages studio > Security > Column Security Profile > profile; research the other row surfaces before publishing.
- [contradicted, minor] Governance controls: closing paragraph and table / consistency: The table represents the tenant enablement-reporting gap described in the prose. | Found: The prose says 'there is no tenant report or policy'; the only tenant row is 'Tenant or environment enforcement of enhanced authorization'. | Fix: Add a separate tenant-scoped row for 'Enhanced authorization enablement reporting', with UI and API null and a note that no reporting control was found as of November 2026; the enforcement row does not describe reporting.
-->
