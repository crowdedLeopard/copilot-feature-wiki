---
title: "Microsoft Entra: cross-tenant synchronisation of security groups"
slug: "microsoft-entra-cross-tenant-security-group-synchronization"
roadmapId: 518221
topic: "governance"
products: ["Microsoft Entra"]
summary: "Cross-tenant synchronization can now create security groups and their members in another Entra tenant. It is off until a source admin enables group provisioning and needs Entra ID Governance or Entra Suite licences."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "January CY2026"
risk: "low"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Microsoft Learn lists cross-tenant synchronization for groups (same cloud) under Microsoft Entra ID Governance, Microsoft Entra Suite and Microsoft 365 E7, required for each synchronised user in the source tenant. No licence is required in the target tenant for the sync itself."
audiences: ["m365-admin","security","finops"]
tags: ["cross-tenant","entra-id","entra-id-governance","app-provisioning","guest-access","microsoft-graph","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 518221"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=518221"
    kind: "roadmap"
  - title: "What is cross-tenant synchronization?"
    url: "https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-overview"
    kind: "learn"
  - title: "Configure cross-tenant synchronization"
    url: "https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure"
    kind: "learn"
  - title: "Configure cross-tenant synchronization using PowerShell or Microsoft Graph API"
    url: "https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure-graph"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "crossTenantGroupSyncInbound resource type"
    url: "https://learn.microsoft.com/graph/api/resources/crosstenantgroupsyncinbound?view=graph-rest-beta"
    kind: "docs"
  - title: "objectMapping resource type"
    url: "https://learn.microsoft.com/graph/api/resources/synchronization-objectmapping?view=graph-rest-1.0"
    kind: "docs"
  - title: "Update crossTenantIdentitySyncPolicyPartner (v1.0)"
    url: "https://learn.microsoft.com/graph/api/crosstenantidentitysyncpolicypartner-update?view=graph-rest-1.0"
    kind: "docs"
  - title: "Whether the target tenant accepts security groups from a partner tenant (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/crosstenantidentitysyncpolicypartner-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Whether the source configuration provisions groups at all (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/synchronization-synchronizationschema-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Which source security groups are in scope for synchronisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignedto?view=graph-rest-1.0"
    kind: "learn"
  - title: "Record of groups and members provisioned, skipped or failed (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/provisioningobjectsummary-list?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["guest-access","microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g"]
controls:
  - governs: "Whether the target tenant accepts security groups from a partner tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > External Identities > Cross-tenant access settings > Organization settings > organization > Inbound access > Cross-tenant sync > Allow group synchronization into this tenant"
      docs: "https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure"
    api:
      kind: "graph"
      call: "PATCH /beta/policies/crossTenantAccessPolicy/partners/{id}/identitySynchronization"
      docs: "https://learn.microsoft.com/graph/api/crosstenantidentitysyncpolicypartner-update?view=graph-rest-beta"
    note: "Set in the target tenant by a Security Administrator. The request body sets groupSyncInbound (isSyncAllowed); beta only at the time of writing."
  - governs: "Whether synchronised groups may be created as role-assignable in the target tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > External Identities > Cross-tenant access settings > Organization settings > organization > Inbound access > Cross-tenant sync > Allow role-enabled group synchronization into this tenant"
      docs: "https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure"
    api: null
    note: "Preview. Selected together with Allow group synchronization into this tenant. Synchronises role-assignability, not role assignments."
  - governs: "Whether the source configuration provisions groups at all"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Cross-tenant synchronization > Configurations > configuration > Provisioning > Mappings > Provision Microsoft Entra ID Groups > Enabled"
      docs: "https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure"
    api:
      kind: "graph"
      call: "PUT /v1.0/servicePrincipals/{id}/synchronization/jobs/{jobId}/schema"
      docs: "https://learn.microsoft.com/graph/api/synchronization-synchronizationschema-update?view=graph-rest-1.0"
    note: "Default No. Newer interface: Attribute mapping > Groups. The request replaces the whole schema; the group objectMapping's enabled property decides whether it is processed."
  - governs: "Which source security groups are in scope for synchronisation"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Cross-tenant synchronization > Configurations > configuration > Users and groups > Add user/group"
      docs: "https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure"
    api:
      kind: "graph"
      call: "POST /v1.0/servicePrincipals/{id}/appRoleAssignedTo"
      docs: "https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignedto?view=graph-rest-1.0"
    note: "Cloud Application Administrator or Application Administrator. The request body's principalId is the group. Group sync needs scope Sync only assigned users and groups."
  - governs: "Record of groups and members provisioned, skipped or failed"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Cross-tenant synchronization > Configurations > configuration > Provisioning logs"
      docs: "https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure"
    api:
      kind: "graph"
      call: "GET /v1.0/auditLogs/provisioning"
      docs: "https://learn.microsoft.com/graph/api/provisioningobjectsummary-list?view=graph-rest-1.0"
    note: "Read access for monitoring only. Target tenant audit logs show the sync's changes with Microsoft.Azure.SyncFabric as the actor."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-01T23:15:29"
changes:
  - date: "2026-11-27"
    note: "New briefing: cross-tenant security group synchronisation, its Entra ID Governance licensing and the source and target tenant controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 61
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "f650048165178d84bf6533dfc37b3062"
---

## What's changing

Cross-tenant synchronization in Microsoft Entra ID, which already creates B2B collaboration users in a partner tenant, can now also create security groups there and keep their membership in step with the source tenant. Microsoft Learn describes it as automating "creating, updating, and deleting Microsoft Entra B2B collaboration users and groups across tenants". When a group is synchronised, its members who are in scope are synchronised with it.

It arrives switched off. In the source tenant's sync configuration, the **Provision Microsoft Entra ID Groups** mapping has an **Enabled** toggle that Learn says is set to **No** by default. The target tenant separately decides whether to accept groups, with the **Allow group synchronization into this tenant** checkbox on the partner's cross-tenant sync settings. Source security groups (static and dynamic) and Microsoft 365 groups are supported as sources; in the target they become static security groups. Nested groups are not supported, and a group that already exists in the target tenant, created outside the sync, is not updated by it.

A preview extension, role-enabled group sync, can create role-assignable groups in the target tenant. Learn states that it synchronises the group's ability to receive role assignments, not the source group's role assignments.

The roadmap item lists the feature as Launched, with preview in January CY2026 and general availability targeted for April CY2026, for Worldwide, GCC, GCC High and DoD, on the Web platform.

## Why it matters

This moves group membership decisions for a partner tenant's resources into the hands of whoever manages the group in the source tenant. Once a target tenant grants a synchronised group access to SharePoint sites, apps or Microsoft Entra roles, adding a person to the source group extends that access in the next sync cycle, which Learn puts at approximately every 40 minutes. Target administrators who are used to owning their own groups need to agree with the source tenant which groups are synchronised and who can change them.

Nothing crosses tenants until a source administrator enables group provisioning and the target tenant allows inbound group sync. The licensing step is the larger cost: the per-user licence for groups is Entra ID Governance or Entra Suite, not the P1 that user sync needs, so a multitenant organisation that already syncs users on P1 should budget before switching groups on.

## Risk assessment

**Data exposure**
- Access granted to a synchronised group in the target tenant follows the source tenant's membership; the target's **Allow group synchronization into this tenant** checkbox decides whether that link exists for each partner.
- Changes made to a synchronised group in the target tenant persist until the group changes in the source tenant, then are overwritten. Expect drift if target administrators edit synchronised groups directly.

**Security & identity**
- With role-enabled group sync (preview), a synchronised group can be role-assignable in the target tenant. Role assignments are not copied, so the target tenant still decides which roles the group holds, but membership of any role it is given is then managed from the source tenant. The target controls this with **Allow role-enabled group synchronization into this tenant**.
- The `isAssignableToRole` property is set only when the target group is created and cannot be changed afterwards, so groups synchronised before the mapping was added stay non-role-assignable.

**Autonomy & actions**
- The provisioning service creates and updates groups and memberships on its own schedule once the job runs; in the target tenant its changes are logged with the "Microsoft.Azure.SyncFabric" application as the actor.

**Change & support**
- Group sync requires the configuration's scope to be **Sync only assigned users and groups**; **Sync all users** is not supported with group sync, so tenants syncing all users today must change scope and assign users and groups first.
- Learn warns that sync cycles lengthen as the number of objects and group memberships grows, and recommends scoping to the groups that are needed.

## Cost and licensing

**Licence.** The cross-tenant synchronization overview states: "Synchronizing a group and its members requires a Microsoft Entra ID Governance or Microsoft Entra Suite license for each synchronized user in the source tenant." Using groups only to choose which users are synchronised, without synchronising the groups, needs Microsoft Entra ID P1. The Microsoft Entra licensing page lists cross-tenant synchronization for groups (same cloud) under Microsoft Entra ID Governance, Microsoft Entra Suite and Microsoft 365 E7, and not under P1 or P2.

**Target tenant.** The overview says licences aren't required for cross-tenant synchronization in the target tenant, but that tenants which enabled External ID billing and provision external guests might be charged under the Microsoft Entra External ID billing model. The Microsoft Entra licensing page adds that the target tenant needs at least one Microsoft Entra ID P1 licence to enable automatic redemption.

**Meter and caps.** Microsoft publishes no meter specific to group sync; the External ID billing model applies only where the target tenant has enabled it and provisions guests.

**Indirect costs.** Admin time in both tenants to agree scope, configure the inbound settings and monitor provisioning logs.

## Scope

- **Objects:** security groups (static and dynamic) and Microsoft 365 groups in the source become static security groups in the target. Mail-enabled security groups, distribution groups and shared mailboxes are not supported; devices and contacts are not supported.
- **Clouds:** the roadmap lists Worldwide, GCC, GCC High and DoD. Learn supports users and groups for Azure commercial to Azure commercial and Azure Government to Azure Government; synchronising groups across cloud environments is not supported.
- **Roles (source):** Hybrid Identity Administrator to configure cross-tenant synchronization; Security Administrator for cross-tenant access settings; Cloud Application Administrator or Application Administrator to assign users to a configuration.
- **Roles (target):** Security Administrator to configure cross-tenant access settings.
- **Prerequisite:** an existing cross-tenant synchronization configuration whose scope is **Sync only assigned users and groups**.
- **Preview:** role-enabled group sync is marked preview on Learn.

## Governance guidance

### Before rollout
- Count the users who would be synchronised through groups and confirm each holds a Microsoft Entra ID Governance, Microsoft Entra Suite or Microsoft 365 E7 licence in the source tenant.
- Agree with each partner tenant which security groups will be synchronised and who owns their membership in the source tenant.
- Decide in each target tenant whether to tick **Allow group synchronization into this tenant**, and separately **Allow role-enabled group synchronization into this tenant**, per partner organisation.

### At rollout
- Assign only the agreed groups to the configuration under **Users and groups**, after confirming the scope is **Sync only assigned users and groups**.
- Add the direct `isAssignableToRole` mapping, applied only during object creation, before assigning any role-assignable group, if role-enabled sync is wanted.
- Set the **Enabled** toggle on **Provision Microsoft Entra ID Groups** to **Yes** and test with **Provision on demand** for one group.

### After rollout
- Review the configuration's **Provisioning logs** for skipped or failed groups, including EntityTypeNotSupported.
- Check the target tenant's audit logs for changes by "Microsoft.Azure.SyncFabric" against the agreed group list.
- Tell target administrators to request membership changes in the source tenant, since direct edits to a synchronised group persist only until the next source change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the target tenant accepts security groups from a partner tenant</strong><br><small>Tenant</small><br><small class="controls__note">Set in the target tenant by a Security Administrator. The request body sets groupSyncInbound (isSyncAllowed); beta only at the time of writing.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › External Identities › Cross-tenant access settings › Organization settings › organization › Inbound access › Cross-tenant sync › Allow group synchronization into this tenant <a href="https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/policies/crossTenantAccessPolicy/partners/{id}/identitySynchronization</code> <a href="https://learn.microsoft.com/graph/api/crosstenantidentitysyncpolicypartner-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether synchronised groups may be created as role-assignable in the target tenant</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Selected together with Allow group synchronization into this tenant. Synchronises role-assignability, not role assignments.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › External Identities › Cross-tenant access settings › Organization settings › organization › Inbound access › Cross-tenant sync › Allow role-enabled group synchronization into this tenant <a href="https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the source configuration provisions groups at all</strong><br><small>App</small><br><small class="controls__note">Default No. Newer interface: Attribute mapping &gt; Groups. The request replaces the whole schema; the group objectMapping's enabled property decides whether it is processed.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Cross-tenant synchronization › Configurations › configuration › Provisioning › Mappings › Provision Microsoft Entra ID Groups › Enabled <a href="https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PUT /v1.0/servicePrincipals/{id}/synchronization/jobs/{jobId}/schema</code> <a href="https://learn.microsoft.com/graph/api/synchronization-synchronizationschema-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which source security groups are in scope for synchronisation</strong><br><small>Group</small><br><small class="controls__note">Cloud Application Administrator or Application Administrator. The request body's principalId is the group. Group sync needs scope Sync only assigned users and groups.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Cross-tenant synchronization › Configurations › configuration › Users and groups › Add user/group <a href="https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals/{id}/appRoleAssignedTo</code> <a href="https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignedto?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Record of groups and members provisioned, skipped or failed</strong><br><small>App</small><br><small class="controls__note">Read access for monitoring only. Target tenant audit logs show the sync's changes with Microsoft.Azure.SyncFabric as the actor.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Cross-tenant synchronization › Configurations › configuration › Provisioning logs <a href="https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/auditLogs/provisioning</code> <a href="https://learn.microsoft.com/graph/api/provisioningobjectsummary-list?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Two tenants hold the controls. The target tenant's inbound checkboxes decide whether it accepts groups from a partner; the source tenant's group mapping toggle and assignments decide what is sent. Both must be on for a group to arrive. Setting the target's inbound group setting to false stops current group synchronisation from that partner but, per the Graph reference, has no impact on groups already synchronised; plan their removal separately. The inbound group setting is in the Microsoft Graph beta endpoint only at the time of writing (November 2026); the v1.0 reference documents `userSyncInbound` alone. The schema update call replaces the whole synchronisation schema, so read the current schema first and change only the group mapping.

## Open questions

- When will the inbound group synchronisation setting (`groupSyncInbound`) reach the Microsoft Graph v1.0 endpoint? Watch the crossTenantIdentitySyncPolicyPartner reference.
- Will role-enabled group sync leave preview, and will a Graph property for **Allow role-enabled group synchronization into this tenant** be documented?
- Will nested groups be supported, so that existing nested security groups can be synchronised without flattening them?
- Will group sync across cloud environments (commercial to US Government) be supported, as cross-cloud user sync is in preview?

<!-- rationale
risk: Low. Group provisioning in a sync configuration is set to No by default, so no group crosses tenants until a source admin enables it and the target tenant allows inbound group sync.
cost: Medium. Synchronising a group and its members needs a Microsoft Entra ID Governance or Microsoft Entra Suite licence for each synchronised user in the source tenant, above the P1 that user sync needs.
impact: Low. Identity administrators in the paired tenants configure it; users notice only through the access the synchronised groups grant in the target tenant.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls: table / admin-path: The inbound group checkbox is reached through Organization settings > organization > Inbound access > Cross-tenant sync. | Found: Under Inbound access of the added organization, select Inherited from default. Select the Cross-tenant sync tab. | Fix: Replace controls[0].ui.path and its table rendering with 'Entra ID > External Identities > Cross-tenant access settings > Organization settings > organization > Inbound access > Inherited from default > Cross-tenant sync > Allow group synchronization into this tenant'. The cited configure page explicitly requires selecting Inherited from default before the tab. | Source: https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure
- [contradicted, blocker] controls[1].ui; Governance controls: table / admin-path: The inbound role-enabled group checkbox is reached through Organization settings > organization > Inbound access > Cross-tenant sync. | Found: Under Inbound access of the added organization, select Inherited from default. Select the Cross-tenant sync tab. | Fix: Replace controls[1].ui.path and its table rendering with 'Entra ID > External Identities > Cross-tenant access settings > Organization settings > organization > Inbound access > Inherited from default > Cross-tenant sync > Allow role-enabled group synchronization into this tenant', following the cited configure page. | Source: https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure
- [contradicted, blocker] controls[1].api; Governance controls: table; Open questions: role-enabled automation / absence: Microsoft has not documented automation or a Graph property for allowing inbound role-enabled group synchronization. | Found: -RoleEnabledGroupSyncInbound crossTenantRoleEnabledGroupSyncInbound To construct, see NOTES section for ROLEENABLEDGROUPSYNCINBOUND properties and create a hash table. [IsSyncAllowed <Boolean?>] | Fix: Replace controls[1].api with kind 'powershell', call 'Set-MgBetaPolicyCrossTenantAccessPolicyPartnerIdentitySynchronization -CrossTenantAccessPolicyConfigurationPartnerTenantId <source-tenant-id> -GroupSyncInbound @{IsSyncAllowed=$true} -RoleEnabledGroupSyncInbound @{IsSyncAllowed=$true}', and docs 'https://learn.microsoft.com/powershell/module/microsoft.graph.beta.identity.signins/set-mgbetapolicycrosstenantaccesspolicypartneridentitysynchronization?view=graph-powershell-beta'. Name module Microsoft.Graph.Beta.Identity.SignIns in the note and cite the reference. Remove the clause asking whether a Graph property will be documented; keep only the question about leaving preview. | Source: https://learn.microsoft.com/powershell/module/microsoft.graph.beta.identity.signins/set-mgbetapolicycrosstenantaccesspolicypartneridentitysynchronization?view=graph-powershell-beta
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls: table / admin-path: The source Enabled toggle is at Entra ID > Cross-tenant synchronization > Configurations > configuration > Provisioning > Mappings > Provision Microsoft Entra ID Groups > Enabled. | Found: On the Provisioning page, under the Mappings section, select Provision Microsoft Entra ID Groups to open the Attribute Mapping page. If you want to synchronize groups, set the Enabled toggle to Yes. | Fix: Add the page heading before the toggle: 'Entra ID > Cross-tenant synchronization > Configurations > configuration > Provisioning > Mappings > Provision Microsoft Entra ID Groups > Attribute Mapping > Enabled'. The cited configure page opens Attribute Mapping after selecting the group mapping. | Source: https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure
- [supported, minor] controls[3].ui; Governance controls: table; Governance guidance: At rollout / admin-path: Groups are assigned through Entra ID > Cross-tenant synchronization > Configurations > configuration > Users and groups > Add user/group. | Found: On the configuration page, select Users and groups. Select Add user/group. On the Add Assignment page, under Users and groups, select None Selected. | Fix: Complete the early-stopping path as 'Entra ID > Cross-tenant synchronization > Configurations > configuration > Users and groups > Add user/group > Add Assignment > Users and groups > None Selected > Users and groups > user or group > Select > Assign', using step 7 of the cited configure page. | Source: https://learn.microsoft.com/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure
- [supported, minor] Why it matters; Risk assessment: Data exposure / applicability: A target security group can be granted access to SharePoint sites. | Found: Security groups are used for granting access to Microsoft 365 resources, such as SharePoint sites. They can make administration easier because you need only administer the group rather than adding users to each resource individually. | Fix: Add 'Compare types of groups in Microsoft 365' at https://learn.microsoft.com/microsoft-365/admin/create-groups/compare-groups?view=o365-worldwide to sources for the SharePoint access example. | Source: https://learn.microsoft.com/microsoft-365/admin/create-groups/compare-groups?view=o365-worldwide
- [supported, minor] Why it matters; Risk assessment: Data exposure and Security & identity / behaviour: Members inherit permissions assigned to a group, so synchronizing membership transfers source membership decisions to target resource access. | Found: You can use Microsoft Entra security groups and Microsoft 365 Groups as the basis for securing access to resources. Group owners – manage group settings and its membership Members – inherit permissions and access assigned to the group | Fix: Add 'Secure external access with groups in Microsoft Entra ID and Microsoft 365' at https://learn.microsoft.com/entra/architecture/4-secure-access-groups to sources for group-based permission inheritance. | Source: https://learn.microsoft.com/entra/architecture/4-secure-access-groups
- [supported, minor] Cost and licensing: Meter and caps / cost: For workforce B2B synchronization, External ID billing concerns guests rather than organizational members and requires billing subscription linkage. | Found: For B2B collaboration, the MAU billing model applies only to external users who have a UserType value of Guest. It doesn't apply to users who originate from within the organization and have a UserType value of Member. External ID requires an Azure subscription for billing. | Fix: Cite https://learn.microsoft.com/entra/external-id/external-identities-pricing and narrow the meter sentence to 'For B2B collaboration in workforce tenants, External ID MAU billing applies to external users with UserType Guest, not users originating within the organisation with UserType Member; billing requires an Azure subscription.' | Source: https://learn.microsoft.com/entra/external-id/external-identities-pricing
- [supported, minor] Open questions: cross-cloud users / availability: Cross-cloud user synchronization is in preview. | Found: As of 2025 August, the Cross-tenant synchronization feature is now in public preview stage for Cross-cloud scenarios, which means tenant admins can sync users across different clouds | Fix: Remove 'as cross-cloud user sync is in preview' from the open question. The supporting page is not cited and dates that preview statement to August 2025; removing the incidental clause preserves the verified question about unsupported cross-cloud group sync. | Source: https://learn.microsoft.com/microsoft-365/enterprise/cross-cloud-collaboration?view=o365-worldwide
- [contradicted, minor] Governance guidance: At rollout, isAssignableToRole mapping / consistency: The checklist's source isAssignableToRole attribute-mapping control is represented in the controls table. | Found: Checklist: 'Add the direct isAssignableToRole mapping, applied only during object creation'. Table: inbound groups, inbound role-enabled groups, group provisioning Enabled, group assignments and provisioning logs; no source role-assignability attribute-mapping row. | Fix: Remove the standalone checklist bullet 'Add the direct isAssignableToRole mapping, applied only during object creation, before assigning any role-assignable group, if role-enabled sync is wanted.' The table has no row for that source attribute-mapping control; do not add a row in this correction.
- [contradicted, minor] Governance guidance: At rollout, Provision on demand / consistency: The checklist's Provision on demand control is represented in the controls table. | Found: Checklist: 'test with Provision on demand for one group'. The table contains no Provision on demand row. | Fix: Remove 'and test with Provision on demand for one group' from the Enabled-toggle checklist bullet. The table has no corresponding on-demand provisioning row; do not add a row in this correction.
- [contradicted, minor] Governance guidance: After rollout, target audit logs / consistency: The checklist's target-tenant audit-log control is represented in the controls table. | Found: Checklist: 'Check the target tenant's audit logs'. The monitoring row's UI is source-configuration Provisioning logs and its API is GET /v1.0/auditLogs/provisioning; the target audit log is mentioned only in its note. | Fix: Remove the standalone checklist bullet 'Check the target tenant's audit logs for changes by "Microsoft.Azure.SyncFabric" against the agreed group list.' A note about the actor does not provide the target audit-log control row; do not add a row in this correction.
-->
