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
  - title: "Microsoft 365 Roadmap item 577860"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577860"
    kind: "roadmap"
  - title: "Filter-based security in Microsoft Dataverse (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/filter-based-security"
    kind: "learn"
  - title: "Filtered record ownership (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership"
    kind: "learn"
  - title: "Tables with filtered record ownership and their record filters (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-and-assign-a-security-role"
    kind: "learn"
  - title: "Tables with filtered record ownership and their record filters (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership#grant-access-with-security-roles"
    kind: "learn"
videos: []
related: ["managed-environments","data-policies","dataverse-agent-users-entra-agent-identity"]
controls:
  - governs: "Tables with filtered record ownership and their record filters"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > New table (advanced) > Record ownership: Filtered"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-and-assign-a-security-role"
    api:
      kind: "rest"
      call: "Create recordfilter and entityrecordfilter rows through the Dataverse Web API"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership#grant-access-with-security-roles"
    note: "Preview. Needs the System Administrator role."
  - governs: "Filter privileges in security roles"
    scope: "environment"
    ui: null
    api: null
    note: "Documented in the admin guide for filter-based security; the role editor path is not spelt out."
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
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 35
  unconfirmed: 3
  contradicted: 4
  attempts: 1
---

## What's changing

This enhancement introduces column-based security filtering, so records are secured by attribute values rather than by ownership. Security admins can define access by business dimensions such as region or department, which suits reporting and aggregated datasets where records have no natural owner.

Microsoft Learn documents a preview of filter-based security in Dataverse. Record Filters use FetchXML, Entity Record Filters tie them to tables, and filter privileges are granted through security roles. Tables can use a filtered record ownership type, with no record owner, or filters can be added to user, team or organisation-owned tables.

The roadmap target is January 2027, Worldwide only, status In development. Whether the roadmap item equals the documented preview is not confirmed.

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
<tr><td data-label="Control"><strong>Tables with filtered record ownership and their record filters</strong><br><small>Environment</small><br><small class="controls__note">Preview. Needs the System Administrator role.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › New table (advanced) › Record ownership: Filtered <a href="https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-and-assign-a-security-role" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>Create recordfilter and entityrecordfilter rows through the Dataverse Web API</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership#grant-access-with-security-roles" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Filter privileges in security roles</strong><br><small>Environment</small><br><small class="controls__note">Documented in the admin guide for filter-based security; the role editor path is not spelt out.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Record Filters and Entity Record Filters are solution components, so they travel with the solution and can be deployed through the usual ALM pipeline. Granting the filter privileges is described in [Filter-based security](https://learn.microsoft.com/power-platform/admin/filter-based-security#grant-filter-privileges-in-security-roles). There is no tenant-level switch; the feature is on wherever the preview has reached.

## Open questions

- Whether the feature reaches general availability in January 2027.
- Support for sovereign clouds.
- Interaction with column-level security and Managed Environments.

<!-- rationale
risk: Medium. A new access model that adds to or replaces ownership-based access, so misconfigured filters can over-share or hide records.
cost: Low. No licence change is published; the cost is design and testing effort for security roles and filters.
impact: Low. Affects security admins and makers who design Dataverse tables and roles.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Normal Dataverse table licensing still applies. | Found: App makers can use most of the tables available within Microsoft Dataverse (including custom tables and tables that are part of the Common Data Model) to create apps and flows for users who have a Power Apps or Power Automate license. | Fix: Cite https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-entity-licenses for baseline table licensing. Keep this separate from the statement that feature-specific licensing is not yet published. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-entity-licenses
- [supported, minor] Cost and licensing / cost: Dataverse table capacity accounting applies to these tables. | Found: All Dataverse tables, including system tables, are included in the storage capacity reports. | Fix: Add https://learn.microsoft.com/power-platform/admin/capacity-storage to sources and cite it for the general Dataverse capacity statement. | Source: https://learn.microsoft.com/power-platform/admin/capacity-storage#capacity-page-details
- [contradicted, blocker] controls[0].ui; rendered controls table / admin-path: The maker path is Solutions > New table (advanced) > Record ownership: Filtered. | Found: Select New table on the command bar, and then select Table (advanced properties). ... From the Record ownership list, select Filtered (preview). | Fix: Replace the path with 'environment > Solutions > solution > New table > Table (advanced properties) > Record ownership > Filtered (preview)' and use https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership#create-a-filtered-record-ownership-table. Note that this creates the table, not its filters; the same guide separately documents + New > More > Other > Record Filter and + New > More > Other > EntityRecordFilter. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership
- [supported, minor] controls[0].api; rendered controls table / command: The Dataverse Web API can create recordfilter and entityrecordfilter rows. | Found: POST [Organization URI]/api/data/v9.2/recordfilters HTTP/1.1 ... POST [Organization URI]/api/data/v9.2/entityrecordfilters HTTP/1.1 | Fix: Replace the prose call with the documented POST /api/data/v9.2/recordfilters and POST /api/data/v9.2/entityrecordfilters operations, linking to #create-a-record-filter and #associate-the-filter-with-a-table. State that request bodies are required and that these operations configure filters, not table ownership. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/filtered-record-ownership
- [contradicted, blocker] controls[1].ui; controls[1].note; rendered controls table / absence: The UI path for managing filter privileges in security roles is not documented. | Found: Select Manage on the navigation pane. ... select Environments and then select an environment. ... select Settings. ... Expand Users + permissions and select Security roles. ... Choose the security role you want to edit. | Fix: Replace ui:null with Power Platform admin center > Manage > Environments > environment > Settings > Users + permissions > Security roles > role, citing https://learn.microsoft.com/power-platform/admin/create-edit-security-role#edit-privileges-of-a-security-role. In the note, cite https://learn.microsoft.com/power-platform/admin/filter-based-security#grant-filter-privileges-in-security-roles for selecting the target table and filter privilege, granting it and assigning the role to users or teams. Remove the claim that the editor path is not documented. | Source: https://learn.microsoft.com/power-platform/admin/create-edit-security-role
- [contradicted, blocker] controls[1].api; rendered controls table / absence: No API surface is documented for granting filter privileges to security roles. | Found: RecordFilterId | Edm.Guid | The Record Filter of the privilege. ... RecordFilterUniqueName | Edm.String | The Unique Name for the Record Filter of the privilege. ... AddPrivilegesRole | Privileges Parameter | Fix: Replace the absence claim with the documented AddPrivilegesRole bound action, whose Privileges collection contains RolePrivilege values with RecordFilterId or RecordFilterUniqueName. Cite https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/addprivilegesrole and https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/roleprivilege. The action adds existing privileges to an existing role; do not imply creating filter rows alone grants access. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/roleprivilege
- [supported, minor] Governance controls / behaviour: Solution-packaged filters can be deployed through a normal solution ALM pipeline. | Found: in your DevOps project pipeline you might want to execute some custom code or script that creates a sandbox environment, imports an unmanaged solution, exports that unmanaged solution as a managed solution | Fix: Cite https://learn.microsoft.com/power-platform/alm/solution-api alongside the existing developer guide for solution-based deployment. | Source: https://learn.microsoft.com/power-platform/alm/solution-api
- [unsupported, blocker] Governance controls / absence: There is no tenant-level switch for this feature. | Found: Searched: Dataverse filter-based security enable tenant switch default preview environment; "filter-based security" sovereign GCC availability tenant switch. Opened the admin, maker and developer feature guides; none states that a tenant switch does not exist. | Fix: Replace with 'Microsoft Learn documents no tenant-level switch for filter-based security at the time of writing (November 2026).' The search establishes a documentation gap, not that no switch exists.
- [unsupported, blocker] Governance controls / default: The feature is on wherever the preview has reached. | Found: Searched: Dataverse filter-based security enable tenant switch default preview environment. Opened the admin, maker and developer feature guides; they describe configuration but do not state automatic enablement or the preview rollout's environment coverage. | Fix: Remove 'the feature is on wherever the preview has reached'. Replace it with 'The documented access model requires configuring filters and granting their privileges through security roles; preview enablement and rollout mechanics are not stated.'
- [unsupported, blocker] What's changing: Worldwide only / availability: The feature is restricted to Worldwide, excluding other clouds. | Found: Searched: "filter-based security" sovereign GCC availability tenant switch. Read the roadmap cloud list and the admin, maker and developer feature guides. The record lists Worldwide, but no source read explicitly excludes other clouds. | Fix: Change 'Worldwide only' to 'the roadmap lists Worldwide (Standard Multi-Tenant); sovereign-cloud availability is not stated'. Keep the sovereign-cloud open question.
- [contradicted, minor] Governance controls: tenant-switch statement and table / consistency: The page states that a tenant-level switch is absent but has no corresponding controls row. | Found: There is no tenant-level switch; the feature is on wherever the preview has reached. / The table contains only 'Tables with filtered record ownership and their record filters' and 'Filter privileges in security roles'. | Fix: After narrowing the prose to a documentation gap, add a tenant-scoped 'Tenant-wide availability switch for filter-based security' row with ui:null and api:null, noting that no such switch is documented as of November 2026.
-->
