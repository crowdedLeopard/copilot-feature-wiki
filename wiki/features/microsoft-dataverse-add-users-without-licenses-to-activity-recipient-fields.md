---
title: "Microsoft Dataverse: unlicensed Entra users as activity recipients"
slug: "microsoft-dataverse-add-users-without-licenses-to-activity-recipient-fields"
roadmapId: 574121
topic: "power-platform"
products: ["Microsoft 365 app","Dynamics 365 Sales","Dynamics 365 Customer Service","Microsoft Dataverse"]
summary: "Any active Microsoft Entra user can be added to activity recipient fields in Dynamics 365 apps without a Dataverse or Power Apps licence; the created user records stay disabled."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Recipients need no Dataverse or Power Apps licence. Disabled records cannot sign in to or run Dynamics 365 apps. Overall licensing for the feature is not yet published."
audiences: ["power-platform-admin","m365-admin","security","service-owner"]
tags: ["dataverse","dynamics-365","activities","unlicensed-users","entra-id","power-platform-admin-center"]
sources:
  - title: "Add users without licenses to activity recipient fields (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/add-unlicensed-users-activities"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 574121"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574121"
    kind: "roadmap"
  - title: "Microsoft Entra ID (aaduser) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/aaduser"
    kind: "learn"
  - title: "Whether unlicensed Entra users can be activity recipients (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/add-unlicensed-users-activities#turn-on-the-feature-in-power-platform-admin-center"
    kind: "learn"
videos: []
related: ["microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column"]
controls:
  - governs: "Whether unlicensed Entra users can be activity recipients"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Activities for users without licenses > Add anyone with an Entra ID to an activity's recipients fields"
      docs: "https://learn.microsoft.com/power-platform/admin/add-unlicensed-users-activities#turn-on-the-feature-in-power-platform-admin-center"
    api: null
  - governs: "Tenant-wide default for the feature"
    scope: "tenant"
    ui: null
    api: null
confidence: "high"
created: "2026-11-15"
updated: "2026-11-17"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: unlicensed Entra users as activity recipients in Dataverse, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Corrected after verification: licensing model set to not yet published, removed the unsupported portal-only claim, stated the preview status and added the Entra ID table reference."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 38 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 39 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 36
  unconfirmed: 2
  contradicted: 1
  attempts: 0
  hash: "c75e03e4929de7e9159ba16ef970ae42"
---

## What's changing

Microsoft Learn currently documents this feature as a preview (the page is titled "Add users without licenses to activity recipient fields (preview)"), so the behaviour and recipient licensing described here apply to that preview.

By default only users with a Dataverse or Power Apps licence can be added to activities in Dynamics 365 apps. This feature, *Activities for users without licenses*, lets any active Microsoft Entra user be a recipient: the To, Cc or Bcc fields of an email, attendees on appointments, or Call From and Call To on phone calls.

The user lookup uses the Microsoft Entra ID table, a virtual Dataverse table of active Entra users. When someone is chosen, Dataverse creates a disabled unlicensed-user record in the environment. That user cannot sign in to or run Dynamics 365 apps.

When a licence is later assigned, the record becomes a licensed user, and earlier activities stay linked to the same record. The roadmap shows a preview from October 2026 and general availability targeted for January 2027 in Worldwide.

## Why it matters

Teams previously had to license colleagues or work around the limit to log activities with them. This removes that friction, but it widens the directory data visible inside Dataverse and creates user rows that did not exist before.

Security and compliance owners should consider the effect on record counts, user reports and data retention.

## Risk assessment

**Data exposure**
- All users in the tenant need read permission on the Microsoft Entra ID table, so basic directory details become visible in the lookup.

**Security & identity**
- Created records are disabled and do not grant Dynamics 365 app access.

**Autonomy & actions**
- No autonomous behaviour.

**Change & support**
- Disabled user rows appear in the environment; reports of users may need filtering.

## Cost and licensing

No extra licence is needed for recipients. Learn says users without licences cannot use Dynamics 365 apps. Administrator effort is needed to grant the Entra ID table read permission and to enable the setting. No charge for the feature is published.

## Scope

Environments with Dynamics 365 apps such as Sales and Customer Service, in the Worldwide cloud. Setting is per environment. Requires Privileged Role Administrator for the security role step and Power Platform administrator for the toggle.

## Governance guidance

### Before rollout
- Review which directory attributes the Microsoft Entra ID table exposes.
- Plan the security role change: update existing roles or create a custom role with read on the Entra ID table.
- Agree with privacy owners on creating Dataverse rows for non-licensed staff.

### At rollout
- Enable the setting in a test environment first.
- Assign the read role to all users before turning on the feature.

### After rollout
- Review disabled user records created.
- Check reports and automations that count users.
- Confirm licence assignment converts users as expected.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether unlicensed Entra users can be activity recipients</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Activities for users without licenses › Add anyone with an Entra ID to an activity's recipients fields <a href="https://learn.microsoft.com/power-platform/admin/add-unlicensed-users-activities#turn-on-the-feature-in-power-platform-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide default for the feature</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The switch is per environment. As of November 2026, Microsoft documents the admin UI but no feature-specific API or automation equivalent. `pac env update-settings` is documented for organization settings generally in the [CLI reference](https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings), but Learn does not name this feature's setting, so do not assume it is scriptable. Users also need read permission on the Microsoft Entra ID table through a security role before the recipient lookup returns results.

## Open questions

- Does the feature cover Microsoft 365 apps beyond Dynamics 365 surfaces?
- How are the disabled records audited and cleaned up?
- Is the setting preview-only until January 2027?

<!-- rationale
risk: Medium. It needs read access to the Entra ID table for all users and creates user records in Dataverse, though the records are disabled and grant no app access.
cost: Low. The point is to avoid buying licences for recipients; cost is admin effort. A later licence assignment converts the user automatically. Overall licensing for the feature is not yet published.
impact: Medium. Sales and service users who send email or schedule meetings with colleagues gain broader recipient lookup.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: There is no autonomous behaviour. | Found: Searched: Dataverse add unlicensed users activities licensing pricing tenant default API organization settings pac env update-settings autonomous; Activities for users without licenses autonomous price. Opened add-unlicensed-users-activities; no categorical absence of autonomous behaviour is stated. | Fix: Replace 'No autonomous behaviour.' with 'Dataverse creates a corresponding unlicensed-user record when someone selects a Microsoft Entra ID user for an activity.'
- [unsupported, major] Governance controls: final sentence / behaviour: The recipient lookup returns results only after users receive Entra table read permission through a security role. | Found: Searched: organization unlicensed activity recipients Entra. Opened add-unlicensed-users-activities and aaduser. Read permission is required before enabling the feature; the exact lookup-results behaviour is not stated. | Fix: Replace the final sentence with 'Before turning on the feature, grant all users in the tenant read permission on the Microsoft Entra ID table through existing security roles or a custom security role.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; rationale: cost / licensing: Overall feature licensing is not yet published, represented by the unknown licensing model. | Found: Qualifying Dynamics 365 licenses include Power Apps and Power Automate use rights for extending and customizing the licensed Dynamics 365 application. These rights must be used in the context of the licensed Dynamics 365 application. | Fix: Set licensing.model to included. Replace 'Overall licensing for the feature is not yet published.' in the notes and rationale with 'Existing Dynamics 365 app licensing still applies to app users; recipients need no Dataverse or Power Apps licence. No feature-specific licence is published.' Cite https://learn.microsoft.com/power-platform/admin/pricing-billing-skus and https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-entity-licenses. | Source: https://learn.microsoft.com/power-platform/admin/pricing-billing-skus
- [contradicted, minor] Governance guidance: Before rollout; At rollout; Governance controls table / consistency: Every configuration control in the governance checklist is represented in the controls table. | Found: Checklist: 'update existing roles or create a custom role with read on the Entra ID table'; 'Assign the read role to all users'. Table: recipient switch and undocumented tenant-wide default only. | Fix: The checklist's Entra table read-permission configuration has no corresponding controls-table row. Record this coverage gap; do not add a row as part of this correction.
-->
