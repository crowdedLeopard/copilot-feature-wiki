---
title: "Power Pages: enhanced authorisation maps web roles and site users to Dataverse security"
slug: "power-pages-design-studio-unify-power-pages-authorization-by-merging-web-role-with-dataver"
roadmapId: 576750
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages web roles and site users are mapped to Dataverse security roles and system users so Dataverse evaluates permissions directly; with table auditing enabled, operations are audited under the site user."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "July CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn states the system users are managed internally, grant no direct Dataverse access and need no additional licensing."
audiences: ["power-platform-admin","security","maker","compliance"]
tags: ["power-pages","authorisation","dataverse","web-roles","security-roles","auditing","impersonation"]
sources:
  - title: "Enable enhanced authorization (preview)"
    url: "https://learn.microsoft.com/power-pages/security/unify-pages-security-with-dataverse"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576750"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576750"
    kind: "roadmap"
  - title: "Manage websites from the Power Platform admin center"
    url: "https://learn.microsoft.com/power-pages/admin/power-platform-admin-center"
    kind: "learn"
  - title: "Enhanced authorization for a site (Power Pages)"
    url: "https://learn.microsoft.com/power-pages/security/unify-pages-security-with-dataverse#enable-enhanced-authorization"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Enhanced authorization for a site"
    scope: "site"
    ui:
      surface: "Power Pages"
      path: "environment > site > ... > Admin center > Edit (next to site details) > Enable Enhanced Authorization"
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
  - date: "2026-11-16"
    note: "Corrected: auditing under the site user now applies only where table auditing is enabled; enablement path fixed; risk set to low and action to review for an opt-in control."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 37 statements not yet confirmed"
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 42 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 40
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "4e15fe6a38469f37fb73e95fe3f38aa7"
---

## What's changing

Power Pages continues to use contacts and web roles, but with enhanced authorisation each contact is mapped to a Dataverse system user and each web role to a Dataverse security role. Dataverse then evaluates permissions and returns only permitted records, replacing a check inside Power Pages that ran under an elevated application user.

Learn states that operations run through impersonation as the site user and that plug-ins run as the calling user unless configured otherwise. When auditing is enabled on a Dataverse table, Learn states that any operation performed from the Power Pages site tracks under the respective site user. Column-level permissions set for the Power Pages Web API are bypassed and Dataverse column security profiles apply instead.

To enable, the site needs Power Pages Core 1.1.2605.258 or later and Dataverse Base Portal 9.3.2605.265 or later, then the Enable Enhanced Authorization check box in the Power Pages admin center. The roadmap shows a preview target of July CY2026 and general availability targeted for November CY2026.

## Why it matters

The model gives native visibility of site operations: where auditing is enabled on a table, operations appear under the site user. It also removes duplicate permission checks, which supports compliance and performance. It also means Dataverse admins will see many managed system users and security roles that originate from sites.

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
- Update the Power Pages solutions to the minimum versions.
- Inventory plug-ins on tables that sites use and check their calling-user assumptions.
- Review Web API column permissions and plan column security profiles.
- Check that auditing is enabled on the Dataverse tables whose site-user entries you intend to rely on.

### At rollout
- Enable enhanced authorisation on a test site first.
- Verify access for each web role.

### After rollout
- Review audit logs for site-user entries on tables where auditing is enabled.
- Check the growth of system users and security roles.
- Monitor Web API performance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enhanced authorization for a site</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Pages</strong><br>environment › site › ... › Admin center › Edit (next to site details) › Enable Enhanced Authorization <a href="https://learn.microsoft.com/power-pages/security/unify-pages-security-with-dataverse#enable-enhanced-authorization" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment enforcement of enhanced authorization</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft documents per-site enablement in the Power Pages admin center; no equivalent automation control was found as of November 2026. Once on, access is evaluated through Dataverse security roles and column security profiles as well as web roles and table permissions, so review both models before enabling on a production site. Power Platform administrators can list all sites in the tenant and open site details in the Power Platform admin center. No tenant-wide enhanced-authorization report or enforcement policy was found in Microsoft's documentation as of November 2026.

## Open questions

- Can enhanced authorisation be reverted once enabled?
- Will it become the default for new sites at general availability?
- How should system user growth be managed in large external sites?

<!-- rationale
risk: Low. Current authorisation stays in place until an administrator opts a site in. Plug-in context and column security behave differently once enabled, so they are testing risks when evaluating adoption.
cost: Low. Learn says the created system users need no extra licensing and access stays governed by Power Pages licensing; cost is testing effort.
impact: Medium. Site makers and administrators see new system user and security role records. Existing role definitions continue to work, but teams should verify visitor access, plug-ins and column security on a test site.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls / absence: Microsoft has not documented an automation control for enhanced authorization on a site as of November 2026. | Found: `Update`Event: True | `PATCH` /powerpagesites(*powerpagesiteid*) ... Writable columns/attributes ... enhancedauthorization ... enhancedauthorization Choices/Options ... 0 | Disabled ... 1 | Migration in progress ... 2 | Migration Failed ... 3 | Enabled | Fix: Replace controls[0].api with kind rest, call 'PATCH /powerpagesites(<powerpagesiteid>)', and docs 'https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/powerpagesite'. Add the note 'The request body sets enhancedauthorization; documented values are 0 (Disabled), 1 (Migration in progress), 2 (Migration Failed), and 3 (Enabled). The reference documents updating the site-state field, not the migration workflow.' Replace 'no equivalent automation control was found as of November 2026' with 'The Dataverse Site table reference documents updating the enhancedauthorization field through PATCH /powerpagesites(<powerpagesiteid>).' Keep the rendered table consistent and cite that reference. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/powerpagesite
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance; Governance controls / consistency / consistency: Every control the governance checklist tells readers to review or check appears in the controls table. | Found: Checklist: 'Review Web API column permissions and plan column security profiles'; 'Check that auditing is enabled'; 'Verify access for each web role'. Table: 'Enhanced authorization for a site'; 'Tenant or environment enforcement of enhanced authorization'. | Fix: The checklist steps concerning Web API column permissions, column security profiles, table auditing and web-role access have no corresponding controls-table rows. This finding does not request adding rows.
-->
