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
  model: "included"
  notes: "Recipients need no Dataverse or Power Apps licence. Disabled records cannot sign in to or run Dynamics 365 apps."
audiences: ["power-platform-admin","m365-admin","security","service-owner"]
tags: ["dataverse","dynamics-365","activities","unlicensed-users","entra-id","power-platform-admin-center"]
sources:
  - title: "Add users without licenses to activity recipient fields (preview)"
    url: "https://learn.microsoft.com/en-us/power-platform/admin/add-unlicensed-users-activities"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 574121"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574121"
    kind: "roadmap"
  - title: "Whether unlicensed Entra users can be activity recipients (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/add-unlicensed-users-activities#turn-on-the-feature-in-power-platform-admin-center"
    kind: "learn"
videos: []
related: ["managed-environments","dataverse-agent-users-entra-agent-identity","microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column"]
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
updated: "2026-11-16"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: unlicensed Entra users as activity recipients in Dataverse, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 35
  unconfirmed: 2
  contradicted: 1
  attempts: 1
---

## What's changing

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
- [ ] Review which directory attributes the Microsoft Entra ID table exposes.
- [ ] Plan the security role change: update existing roles or create a custom role with read on the Entra ID table.
- [ ] Agree with privacy owners on creating Dataverse rows for non-licensed staff.

### At rollout
- [ ] Enable the setting in a test environment first.
- [ ] Assign the read role to all users before turning on the feature.

### After rollout
- [ ] Review disabled user records created.
- [ ] Check reports and automations that count users.
- [ ] Confirm licence assignment converts users as expected.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether unlicensed Entra users can be activity recipients</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Activities for users without licenses › Add anyone with an Entra ID to an activity's recipients fields <a href="https://learn.microsoft.com/power-platform/admin/add-unlicensed-users-activities#turn-on-the-feature-in-power-platform-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide default for the feature</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The switch is per environment and portal-only; `pac env update-settings` is documented for organization settings generally in the [CLI reference](https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings), but Learn does not name this feature's setting, so do not assume it is scriptable. Users also need read permission on the Microsoft Entra ID table through a security role before the recipient lookup returns results.

## Open questions

- Does the feature cover Microsoft 365 apps beyond Dynamics 365 surfaces?
- How are the disabled records audited and cleaned up?
- Is the setting preview-only until January 2027?

<!-- rationale
risk: Medium. It needs read access to the Entra ID table for all users and creates user records in Dataverse, though the records are disabled and grant no app access.
cost: Low. The point is to avoid buying licences for recipients; cost is admin effort. A later licence assignment converts the user automatically.
impact: Medium. Sales and service users who send email or schedule meetings with colleagues gain broader recipient lookup.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] front matter: licensing.model / licensing: The feature's licensing model is included in an existing product licence. | Found: Searched: "Add users without licenses" activities pricing charge license; "add-unlicensed-users-activities" "license" pricing included. Read feature page; it exempts recipients but names no licence that includes the feature. | Fix: Set licensing.model to unknown unless a Microsoft source explicitly establishes inclusion in a named existing licence. Retain the supported notes that recipients need no Dataverse or Power Apps licence and cannot run Dynamics 365 apps; distinguish that exemption from the feature's overall licensing.
- [supported, minor] summary; What's changing / behaviour: The feature allows active Microsoft Entra users in the tenant to be activity recipients in Dynamics 365 apps. | Found: Users without licenses are people in your tenant who have an active Microsoft Entra ID account but don't have a Dataverse or Power Apps license. | Fix: Introduce the behavior as 'Activities for users without licenses is currently documented as a preview feature; the following behavior and licensing describe that preview.' The cited feature page is titled 'Add users without licenses to activity recipient fields (preview)'. | Source: https://learn.microsoft.com/power-platform/admin/add-unlicensed-users-activities
- [unsupported, blocker] Governance controls: paragraph after table / absence: The feature's switch is portal-only. | Found: Searched: "Activities for users without licenses" API organization setting tenant default PowerShell. Read feature and pac env pages; searched Organization reference. None states that only the portal can set it. | Fix: Replace 'The switch is per environment and portal-only' with 'The switch is per environment. As of November 2026, Microsoft documents the admin UI but no feature-specific API or automation equivalent.' Keep controls[0].api null; absence of API documentation does not establish a portal-only restriction.
- [supported, minor] Risk assessment: Data exposure; Why it matters / behaviour: The Microsoft Entra ID lookup exposes basic directory information about users. | Found: | Description | **The name displayed in the address book for the user.** |
| DisplayName | **Display Name** |
| IsValidForForm | True |
| IsValidForRead | True | | Fix: Add the Microsoft Entra ID (aaduser) table reference to sources to substantiate the directory-attributes exposure: https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/aaduser. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/aaduser#writable-columns-attributes
- [contradicted, minor] Governance guidance: Before rollout; At rollout; Governance controls / consistency: The checklist instructs administrators to configure Entra ID table read permission, but that control has no row in the controls table. | Found: Plan the security role change: update existing roles or create a custom role with read on the Entra ID table. | Controls: Whether unlicensed Entra users can be activity recipients; Tenant-wide default for the feature. | Fix: Add a controls row for 'Who can read the Microsoft Entra ID table', covering the security-role prerequisite and linking to https://learn.microsoft.com/power-platform/admin/add-unlicensed-users-activities#grant-users-read-access-to-the-microsoft-entra-id-table. Research its UI and API surfaces before filling them.
-->
