---
title: "Microsoft 365 admin center: migrate Google Groups to Microsoft 365 Groups"
slug: "m365-admin-center-google-groups-to-m365-modern-groups-migration-service"
roadmapId: 470024
topic: "governance"
products: ["Microsoft 365","Microsoft 365 Admin Center"]
summary: "Microsoft plans a service in the Microsoft 365 admin center that migrates Google Groups, members, conversations and permissions into Microsoft 365 Groups. Still in development; licensing and default are not published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2025"
previewDate: "January CY2025"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence or meter, and Microsoft Learn describes no page for this service at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-admin-center","migration","microsoft-365-groups","google-workspace"]
sources:
  - title: "Microsoft 365 Roadmap item 470024"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=470024"
    kind: "roadmap"
  - title: "Google Identity Sync"
    url: "https://learn.microsoft.com/sharepointmigration/google-identity-sync"
    kind: "learn"
  - title: "Data Migration"
    url: "https://learn.microsoft.com/microsoft-365/fasttrack/data-migration"
    kind: "learn"
  - title: "Manage a group in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/create-groups/manage-groups"
    kind: "learn"
  - title: "Set up self-service group management in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/users/groups-self-service-management"
    kind: "learn"
  - title: "Who can create Microsoft 365 groups (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/groupsetting-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Owners and members of a migrated Microsoft 365 group (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Availability of the Google Groups migration service"
    scope: "tenant"
    ui: null
    api: null
    note: "No tenant switch, role or API for this service is documented at the time of writing (November 2026)."
  - governs: "Who can create Microsoft 365 groups"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Microsoft Entra ID > All groups > Groups > General settings > Users can create Microsoft 365 groups in Azure portals, API or PowerShell"
      docs: "https://learn.microsoft.com/entra/identity/users/groups-self-service-management"
    api:
      kind: "graph"
      call: "PATCH /v1.0/groupSettings/{groupSettingId}"
      docs: "https://learn.microsoft.com/graph/api/groupsetting-update?view=graph-rest-1.0"
    note: "Existing control. The page says it affects users, not service principals; whether it applies to this service is not documented. The EnableGroupCreation value is set through the group setting's values."
  - governs: "Owners and members of a migrated Microsoft 365 group"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Teams & groups > Active teams & groups > group > Membership"
      docs: "https://learn.microsoft.com/microsoft-365/admin/create-groups/manage-groups"
    api:
      kind: "graph"
      call: "POST /v1.0/groups/{group-id}/members/$ref"
      docs: "https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0"
    note: "Existing group controls for review after a migration. The Graph call adds members only."
confidence: "low"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2024-11-22T23:15:35"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item; Microsoft Learn does not yet document the service, so the page rests on the roadmap text and existing group controls."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 51 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 48
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "388361f1428f5c3528a3363fabb437ea"
---

## What's changing

Microsoft plans a first-party service in the Microsoft 365 admin center that migrates Google Groups into Microsoft 365 Groups. The roadmap item describes it as a way for customers moving from Google to create the groups, their members, member conversations and all permissions in Microsoft 365 Groups automatically, without recreating the groups by hand.

Microsoft Learn does not describe this service yet, so what follows about its behaviour is the roadmap's description. Microsoft Learn does document a separate, existing tool, Google Identity Sync, which does one-way synchronisation of user and group identities from Google Workspace to Microsoft 365. For groups it maps each Google Workspace group to a Microsoft 365 unified group and synchronises owners and members; it is a different feature from this roadmap item and is not a description of it. [Google Identity Sync](https://learn.microsoft.com/sharepointmigration/google-identity-sync)

The roadmap record lists the status as In development, with a preview target of January CY2025 and a general availability target of February CY2025, for Worldwide (Standard Multi-Tenant) on the web. Both targets are earlier than today's date (22 November 2026) while the status is still In development, and the record was last modified on 22 November 2024, so treat the dates as unreliable and watch for an update.

## Why it matters

If this ships as described, a Google Groups migration would write conversations, memberships and permissions into your tenant in bulk, which is a different exposure from a mailbox or file copy. Groups carry membership, and in Microsoft 365 a group's membership decides who can reach its content, so what the service does with Google's permissions and external members is the point to settle before running it.

Microsoft has not stated what happens on arrival, and no source says existing behaviour changes, so there is nothing to do until a tenant chooses to migrate. Microsoft's FastTrack data migration page currently lists Google Groups among the items its Gmail, Contacts and Calendar migration does not migrate, so tenants planning a move today still have to plan groups separately.

## Risk assessment

**Data exposure**
- The roadmap says member conversations migrate into Microsoft 365 Groups. Conversation content from Google lands in the tenant and becomes visible to whoever the destination group's membership allows. Review destination membership with the Membership control in the controls table.
- The roadmap says "all permissions" are migrated. How Google permissions map to Microsoft 365 roles is not documented for this service; the existing Google Identity Sync page maps Google Owner and Manager to Owner and Member to Member, and does not synchronise external users or custom-permission members. Confirm what this service does before relying on either mapping.

**Security & identity**
- Microsoft Learn states that the Users can create Microsoft 365 groups setting applies to users and does not affect service principals. Which identity this service creates groups under is not described, so confirm whether the group creation restriction applies to it.
- Google Identity Sync warns that re-sync can remove member and owner assignments added only in Microsoft 365. Ask whether this service re-runs in the same way before editing migrated groups.

**Autonomy & actions**
- The roadmap describes an automatic service that creates groups, members and permissions. Microsoft has not said whether an administrator approves each run, so confirm the approval and review steps when documentation appears.

**Change & support**
- Users who are members of migrated groups will see new groups and conversation history. Plan communication and a support route for missing members or conversations.
- The status is In development and the record has not changed since November 2024, so planning dates cannot rest on the roadmap targets.

## Cost and licensing

A licence or meter for this service is not yet published: the roadmap item names none, and Microsoft Learn has no page for it at the time of writing (November 2026). Do not budget for a charge or assume there is none until Microsoft publishes it.

The cost known today is indirect: administrator time to plan the migration and to review destination groups afterwards. For the separate Google Identity Sync tool, Microsoft's page says synchronised users still need licences for the Microsoft 365 services being migrated to; that page does not describe licensing for this roadmap service.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform, with General Availability and Preview as release phases. The audience is customers moving from Google, who are the roadmap's stated target. Roles, prerequisites and rollout mechanics are not yet documented.

For comparison, the separate Google Identity Sync page states that it is available to tenants with fewer than 300 licensed users; do not assume the same limit applies here.

## Governance guidance

### Before rollout
- Inventory the Google Groups you intend to move, and decide which should become Microsoft 365 Groups; the Google Identity Sync page maps Google Workspace groups to unified groups.
- Check who can create Microsoft 365 groups in your tenant (Entra group settings row) and record the current value before any migration run.
- Decide who in your team reviews owners and members of destination groups afterwards.

### At rollout
- Start with a small pilot group and compare its members and owners with the Google source.
- Confirm in Microsoft's documentation, once it is published, which identity creates the groups and whether the creation restriction applies.

### After rollout
- Review owners and members of each migrated group in the Microsoft 365 admin center.
- Remove any membership that should not exist in Microsoft 365, then tell group owners where conversations now live.
- Watch Message center and the roadmap item for the Learn page that documents this service.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Availability of the Google Groups migration service</strong><br><small>Tenant</small><br><small class="controls__note">No tenant switch, role or API for this service is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create Microsoft 365 groups</strong><br><small>Tenant</small><br><small class="controls__note">Existing control. The page says it affects users, not service principals; whether it applies to this service is not documented. The EnableGroupCreation value is set through the group setting's values.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Microsoft Entra ID › All groups › Groups › General settings › Users can create Microsoft 365 groups in Azure portals, API or PowerShell <a href="https://learn.microsoft.com/entra/identity/users/groups-self-service-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/groupSettings/{groupSettingId}</code> <a href="https://learn.microsoft.com/graph/api/groupsetting-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Owners and members of a migrated Microsoft 365 group</strong><br><small>Group</small><br><small class="controls__note">Existing group controls for review after a migration. The Graph call adds members only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Teams &amp; groups › Active teams &amp; groups › group › Membership <a href="https://learn.microsoft.com/microsoft-365/admin/create-groups/manage-groups" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/groups/{group-id}/members/$ref</code> <a href="https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No switch, role or setting specific to this service is documented at the time of writing (November 2026), so the first row is empty on both sides. The other rows are existing Microsoft 365 group controls that you can use around a migration; they do not govern the migration service itself.

The Users can create Microsoft 365 groups setting needs at least the Global Administrator role to change in the Entra admin center, per the page that gives the path, and its page says it does not affect service principals. Changing group membership through the Graph call needs a supported Microsoft Entra role, such as Groups Administrator, or group ownership, per the reference page.

## Open questions

- Which licence or meter, if any, covers the migration service? Watch the Microsoft 365 roadmap item and the Microsoft 365 admin center pricing and licensing pages.
- Is the service on, off or opt-in on arrival, and which admin role runs it? The roadmap record does not say; watch Message center.
- How are Google group permissions and external members mapped to Microsoft 365 Groups roles, and does the service remove existing Microsoft 365 assignments on a re-run?
- Which identity creates the groups, and does the Users can create Microsoft 365 groups setting apply to it?
- Why is the item still In development with February CY2025 targets? Watch the roadmap item for new dates.

<!-- rationale
risk: Medium. The roadmap says the service creates groups, members, conversations and permissions in Microsoft 365 Groups for migrating tenants; existing group controls mostly cover the result, but Microsoft has not described how the service itself is governed.
cost: Low. The only cost the sources show is admin time and review of migrated groups; a licence or meter for this service is not yet published.
impact: Low. Only tenants moving from Google Workspace and their administrators are affected, plus the members of any migrated group; nothing is described as changing for other tenants.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing / behaviour: Google Identity Sync is a different feature from this roadmap item. | Found: Searched: Google Groups Microsoft 365 Groups migration service 470024; "Google Groups" "migration" "conversations". Opened Google Identity Sync and Consolidated migration of data from Google Workspace. Neither identifies Identity Sync's relationship to this roadmap item. | Fix: Replace 'it is a different feature from this roadmap item and is not a description of it' with 'that page documents identity synchronisation, not conversation migration'. The Google Identity Sync page at https://learn.microsoft.com/sharepointmigration/google-identity-sync does not document conversation migration or identify its relationship to this roadmap item.
- [contradicted, blocker] Governance controls / role: Changing membership through the Graph call requires a supported Microsoft Entra role, such as Groups Administrator, or group ownership. | Found: In delegated scenarios, the signed-in user must also be assigned a supported Microsoft Entra role ... Group owners ... Groups Administrator. Supported resource: user; Application: GroupMember.ReadWrite.All. | Fix: Replace the sentence with: 'In delegated scenarios, the signed-in user adding members through Graph must also have a supported Microsoft Entra role, such as Groups Administrator, or be a group owner.' Cite https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0. The reference also supports application access, so do not state the signed-in-user requirement for every call. | Source: https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0
- [unsupported, blocker] Governance controls / applicability: The existing group-control rows do not govern the migration service itself. | Found: Searched: "Google Groups" migration service enable administrator permissions default; "Google Groups" migration Microsoft Graph beta PowerShell API. Opened self-service group management, Google Identity Sync and Consolidated migration. No source excludes this service from the creation restriction. | Fix: Replace 'they do not govern the migration service itself' with 'the membership controls govern destination groups; whether the group-creation restriction applies to the migration service is not yet documented'. This preserves the distinction without asserting a service exemption that Microsoft has not stated.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risk assessment: Data exposure / applicability: Microsoft 365 group membership grants access to the group's content, including its shared inbox. | Found: When you add users to the group, you automatically grant them the appropriate access. Members - Access all group resources but can't change group settings. | Fix: Add https://learn.microsoft.com/microsoft-365/admin/create-groups/office-365-groups to sources, titled 'Microsoft 365 Groups overview for administrators'; it states the membership-to-resource-access premise. | Source: https://learn.microsoft.com/microsoft-365/admin/create-groups/office-365-groups
- [supported, minor] controls[2].ui; Governance controls table; Governance guidance: After rollout / admin-path: Owners and members can be reviewed at Microsoft 365 admin center > Teams & groups > Active teams & groups > group > Membership. | Found: Expand Teams & groups, and then click Active teams & groups. Click the name of the group ... On the Membership tab, choose if you want to manage Owners or Members. Choose Add ... or click X to remove someone. | Fix: Keep the path, which reaches the right tab, and add to controls[2].note: 'On Membership, choose Owners or Members; choose Add to add someone or X to remove someone.' This completes the route documented at https://learn.microsoft.com/microsoft-365/admin/create-groups/manage-groups without changing the row's scope. | Source: https://learn.microsoft.com/microsoft-365/admin/create-groups/manage-groups
- [supported, minor] controls[2].api; controls[2].note; Governance controls table / command: POST /v1.0/groups/{group-id}/members/$ref adds group members, not owners. | Found: POST https://graph.microsoft.com/v1.0/groups/{group-id}/members/$ref ... supply a JSON object that contains an @odata.id property with a reference by ID to a supported group member object type. | Fix: Keep controls[2].api.call unchanged and add to its note: 'The request body sets @odata.id to a reference to the user being added.' The pre-check's missing-endpoint warning is a false positive: the endpoint appears in Example 1 at https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0. | Source: https://learn.microsoft.com/graph/api/group-post-members?view=graph-rest-1.0
-->
