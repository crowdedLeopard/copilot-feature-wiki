---
title: "Power Platform: secure Dataverse records with column-based filtering"
slug: "microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column"
roadmapId: 577860
topic: "power-platform"
products: ["Microsoft Power Platform governance and administration"]
summary: "Dataverse security can grant record access by column values such as region or department rather than by ownership, aimed at reporting and aggregated data."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Dataverse licensing applies."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["dataverse","security-roles","row-level-security","filter-based-security","power-platform"]
sources:
  - title: "Microsoft 365 Roadmap 577860"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577860"
    kind: "roadmap"
  - title: "Filter-based security in Microsoft Dataverse (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/filter-based-security"
    kind: "learn"
  - title: "Filtered record ownership (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership"
    kind: "learn"
  - title: "Filtered record ownership by using code (preview)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership"
    kind: "learn"
  - title: "Create or edit a security role to manage access"
    url: "https://learn.microsoft.com/power-platform/admin/create-edit-security-role"
    kind: "learn"
  - title: "AddPrivilegesRole Action"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/addprivilegesrole"
    kind: "learn"
  - title: "RolePrivilege ComplexType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/roleprivilege"
    kind: "learn"
  - title: "License requirements for tables"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-entity-licenses"
    kind: "learn"
  - title: "Dataverse capacity-based storage details"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-storage"
    kind: "learn"
  - title: "Tables with filtered record ownership and their record filters (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-a-filtered-record-ownership-table"
    kind: "learn"
  - title: "Tables with filtered record ownership and their record filters (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership#create-a-record-filter"
    kind: "learn"
  - title: "Filter privileges in security roles (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/create-edit-security-role#edit-privileges-of-a-security-role"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Tables with filtered record ownership and their record filters"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "environment > Solutions > solution > New table > Table (advanced properties) > Record ownership > Filtered (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-a-filtered-record-ownership-table"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.2/recordfilters and POST [Organization URI]/api/data/v9.2/entityrecordfilters, each with a request body"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership#create-a-record-filter"
    note: "Preview. Needs the System Administrator role. The UI path creates the table; filters are separate (+ New > More > Other > Record Filter, then EntityRecordFilter). The API calls create filters, not tables."
  - governs: "Filter privileges in security roles"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Security roles > role"
      docs: "https://learn.microsoft.com/power-platform/admin/create-edit-security-role#edit-privileges-of-a-security-role"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.2/roles(<roleid>)/Microsoft.Dynamics.CRM.AddPrivilegesRole with a Privileges collection of RolePrivilege values"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/addprivilegesrole"
    note: "Preview. Then select the target table and filter privilege, grant it and assign the role (filter-based-security guide). RolePrivilege has RecordFilterId and RecordFilterUniqueName. The action adds existing privileges to an existing role."
  - governs: "Tenant-wide availability switch for filter-based security"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577860."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected control paths and APIs for security-role filter privileges and filter creation, added a tenant-switch gap row, and narrowed the cloud and default-availability statements."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 45 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 45
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "08b1b2b7847805d9c1248497bca4402c"
---

## What's changing

This enhancement introduces column-based security filtering, so records are secured by attribute values rather than by ownership. Security admins can define access by business dimensions such as region or department, which suits reporting and aggregated datasets where records have no natural owner.

Microsoft Learn documents a preview of filter-based security in Dataverse. Record Filters use FetchXML, Entity Record Filters tie them to tables, and filter privileges are granted through security roles. Tables can use a filtered record ownership type, with no record owner, or filters can be added to user, team or organisation-owned tables.

The roadmap target is January 2027, status In development. The roadmap lists Worldwide (Standard Multi-Tenant); sovereign-cloud availability is not stated. Whether the roadmap item equals the documented preview is not confirmed.

## Why it matters

It removes the need for artificial ownership or complex sharing to restrict data by region or department, simplifying administration at scale. It also changes how effective access is calculated, which affects audits and access reviews.

## Risk assessment

**Data exposure**
- On user-owned tables, filter privileges add access to ownership-based access, so they never reduce it.

**Security & identity**
- Filtered ownership tables cannot be shared or assigned; the system grants an All records privilege to System Administrator.

**Autonomy & actions**
- None; this is a static access model.

**Change & support**
- Troubleshooting needs FetchXML knowledge and a clear view of combined roles and teams.

## Cost and licensing

No separate licence is published. Dataverse capacity and licensing apply as for any table. Not yet published: any general availability pricing.

## Scope

Dataverse environments in Worldwide (Standard Multi-Tenant). Applies to makers and security admins; the system administrator role is required to configure it in the preview.

## Governance guidance

### Before rollout
- Inventory tables where ownership is artificial.
- Model filters in a development environment and document intended access.

### At rollout
- Grant filter privileges through dedicated security roles.
- Test with representative users in each role and team.

### After rollout
- Review effective access periodically.
- Check that additive filters on owned tables do not over-share.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tables with filtered record ownership and their record filters</strong><br><small>Environment</small><br><small class="controls__note">Preview. Needs the System Administrator role. The UI path creates the table; filters are separate (+ New &gt; More &gt; Other &gt; Record Filter, then EntityRecordFilter). The API calls create filters, not tables.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>environment › Solutions › solution › New table › Table (advanced properties) › Record ownership › Filtered (preview) <a href="https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-a-filtered-record-ownership-table" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.2/recordfilters and POST [Organization URI]/api/data/v9.2/entityrecordfilters, each with a request body</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership#create-a-record-filter" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Filter privileges in security roles</strong><br><small>Environment</small><br><small class="controls__note">Preview. Then select the target table and filter privilege, grant it and assign the role (filter-based-security guide). RolePrivilege has RecordFilterId and RecordFilterUniqueName. The action adds existing privileges to an existing role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Security roles › role <a href="https://learn.microsoft.com/power-platform/admin/create-edit-security-role#edit-privileges-of-a-security-role" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.2/roles(&lt;roleid&gt;)/Microsoft.Dynamics.CRM.AddPrivilegesRole with a Privileges collection of RolePrivilege values</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/addprivilegesrole" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide availability switch for filter-based security</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Record Filters and Entity Record Filters are solution components, so they travel with the solution and can be deployed through the usual ALM pipeline. Granting the filter privileges is described in [Filter-based security](https://learn.microsoft.com/power-platform/admin/filter-based-security#grant-filter-privileges-in-security-roles). The maker path creates the table, and the Web API calls create the filters; neither grants access until a security role holds the filter privilege.

Microsoft Learn documents no tenant-level switch for filter-based security at the time of writing (November 2026). The documented access model requires configuring filters and granting their privileges through security roles; preview enablement and rollout mechanics are not stated.

## Open questions

- Whether the feature reaches general availability in January 2027.
- Support for sovereign clouds.
- Interaction with column-level security and Managed Environments.

<!-- rationale
risk: Medium. A new access model that adds to or replaces ownership-based access, so misconfigured filters can over-share or hide records.
cost: Low. No licence change is published; the cost is design and testing effort for security roles and filters.
impact: Low. Affects security admins and makers who design Dataverse tables and roles.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: These solution components can travel with solutions through application lifecycle management deployments. | Found: Solutions are the mechanism for implementing application lifecycle management (ALM) in Power Apps and Power Automate. ... The purpose of having components is ... so that it can be exported, imported | Fix: Add https://learn.microsoft.com/power-platform/alm/solution-concepts-alm to sources for the statement that solution components can be exported, imported and deployed through ALM. | Source: https://learn.microsoft.com/power-platform/alm/solution-concepts-alm
-->
