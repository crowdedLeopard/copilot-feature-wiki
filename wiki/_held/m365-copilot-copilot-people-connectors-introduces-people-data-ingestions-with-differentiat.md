---
title: "Microsoft 365 Copilot connectors: people data with source-system access controls"
slug: "m365-copilot-copilot-people-connectors-introduces-people-data-ingestions-with-differentiat"
roadmapId: 561326
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let Copilot connectors for people data import ACLs, so HR-style data can be scoped to individuals and groups. Today it is visible to everyone. Admins who run people connectors should review before June 2027."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "June CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this capability. The general connectors page says Copilot grounding on synced connector data needs a Microsoft 365 Copilot add-on licence or Microsoft 365 E7, and that indexing incurs no extra cost for tenants with Microsoft 365 licences."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["copilot-connectors","m365-copilot","microsoft-graph","oversharing","privacy","m365-admin-center","authorisation","knowledge-grounding"]
sources:
  - title: "Microsoft 365 Roadmap 561326"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561326"
    kind: "roadmap"
  - title: "Use people data connectors with Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/graph/peopleconnectors"
    kind: "learn"
  - title: "Build Microsoft 365 Copilot connectors for people data"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/build-connectors-with-people-data"
    kind: "learn"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Manage access permissions for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Create externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections"
    kind: "learn"
videos: []
related: ["work-iq-federated-connectors","m365-copilot-federated-connectors-write-update-delete"]
controls:
  - governs: "Scoping imported people data to specific individuals and groups"
    scope: "other"
    ui: null
    api: null
    note: "Not yet documented. Learn currently says people connector data is visible to all users and the ACL must grant everyone."
  - governs: "Permission model shown for a connector (source ACLs or visible to everyone)"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    api: null
    note: "General connector control: Learn does not confirm it covers people connectors. Updating permissions after creation is not currently supported."
  - governs: "Whether a connector's data is visible in Copilot Search and Copilot Chat"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > select the connection > Copilot Visibility"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "Learn describes this for partner connectors; not confirmed for people connectors. AI administrator role."
  - governs: "Creating a connection that carries people data"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/external/connections (set contentCategory to people)"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections"
    note: "Admin UI creation for custom people connectors is not documented on the pages read. Roles per the people connectors page: Global Administrator and Copilot Administrator."
  - governs: "Removing a people connector and its data from Microsoft 365"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Connectors > Your Connections > select the connector > Delete"
      docs: "https://learn.microsoft.com/graph/peopleconnectors"
    api: null
    note: "Learn says deletion removes the connector from all instances but delays can be expected."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item: records the planned people data ACL support (In development, June CY2027 target) against today's documented everyone-visible limit."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 52
  unconfirmed: 3
  contradicted: 3
  attempts: 1
---

## What's changing

The roadmap item states that the Copilot People Connector will support importing people data together with access control lists (ACLs), so Copilot respects the permissions defined in the source system. Imported data can be scoped to specific individuals and groups, and Copilot can reason over it while honouring those restrictions.

This is a plan, not shipped behaviour. The roadmap record shows the status as In development, with a General Availability target of June CY2027, for the Worldwide (Standard Multi-Tenant) cloud on the Developer platform. No preview date and no more-info link are given.

The documentation at the time of writing (November 2026) describes the current limit that this item would change. The Learn page on people data connectors says that, by default, people data provided via a Copilot connector is visible to all users in the tenant, and the build guide says you must set the ACL on ingested items to grant access to everyone. Neither page describes differentiated access for people data, and no Learn page for this roadmap feature was found.

Microsoft Learn also says people connectors are built with the Microsoft Graph external connections APIs, that the connection must set `people` in the `contentCategory` property, and that data is stored in the user's Microsoft 365 profile and in their Exchange Online mailbox.

## Why it matters

People data is among the most sensitive content a tenant can connect: HR, talent and recruiting systems hold information that should not reach every employee. Because Learn currently requires an everyone ACL for people connectors, some organisations may have held back from connecting such sources. If ACL support ships, those sources become candidates, and the permission model you set at ingestion becomes the thing that decides what Copilot can say about colleagues.

If nobody acts, nothing changes on arrival: people connectors are configured by admins. The risk is deferred, not removed. A connector built under today's rules keeps its everyone ACL, and the Learn page on access permissions says updating permissions after a connection is created is not currently supported. Plan to rebuild rather than edit.

## Risk assessment

**Data exposure**

- Today, people connector data is visible to all users in the tenant and the ACL must grant everyone. Any sensitive attribute you map into a profile is therefore tenant-wide, and Copilot and people search can surface it. The planned ACL support is the only change the sources describe that would narrow this; its mechanics are not yet documented.
- Learn says data is stored in the user's Microsoft 365 profile and in the Exchange Online mailbox, so scoped data would still sit with the profile, and how scoping applies to profile cards, Org Explorer and search is not yet documented.

**Security & identity**

- Learn says Microsoft Purview Information Barriers are respected by people connectors, but it does not say how this interacts with per-person ACLs.
- Accounts that do not match a Microsoft Entra user, or that have no Exchange Online mailbox, are ignored. Mismatched identifiers in a source system would therefore silently drop data rather than fail.

**Autonomy & actions**

- No change documented: the sources describe ingestion and grounding, not write actions.

**Change & support**

- Connections with people data do not support staged connections, so a connector cannot be piloted through that route; Learn separately advises piloting with a limited audience.
- Users cannot edit connector-ingested properties, and Learn recommends disabling user editing of those properties to avoid edits that do not show on the profile card. Expect help desk questions when scoped data differs between viewers.

## Cost and licensing

No licence or price is published for the planned ACL capability, and the roadmap item names none. Treat licensing for this feature as not yet published.

The general connectors prerequisites page (Prerequisites for deploying connectors) says synced connectors support Copilot grounding and agents with Microsoft 365 plus the Microsoft 365 Copilot add-on or with Microsoft 365 E7, and that a Microsoft 365 licence alone supports Microsoft Search only. It also says that indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses. That page is about connectors in general; it does not mention people connectors, so treat it as background.

No meter, credit rate or cap is documented for people data ingestion at the time of writing. Indirect cost is admin and developer time: custom people connectors are built against the Graph external connections APIs, and permissions cannot be changed after creation, so a rebuild is the likely cost of moving to ACLs.

## Scope

- **Users and licences:** not yet published for the planned capability. Learn says people data persists while the user is active and has a valid Microsoft 365 licence.
- **Roles:** the people connectors page says only users with Global Administrator and Copilot Administrator roles can configure people connectors, while the connector management page says you must be an AI administrator to manage Copilot connectors. The two pages differ; check both before delegating.
- **Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Developer platform. The record lists no US Government cloud.
- **Prerequisites documented today:** OAuth 2.0 authentication is required to set up people connectors; accounts need an Exchange Online mailbox to be matched.
- **Rollout:** status In development, GA targeted for June CY2027. No release channel or rollout mechanics are published.

## Governance guidance

### Before rollout

- Inventory existing Copilot connectors in the Microsoft 365 admin center (Copilot > Connectors > Your Connections) and flag any that carry people data with an everyone ACL.
- List the people attributes you would map (for example skills, positions, addresses, phones) and decide which should stay tenant-wide and which need restricting once ACLs are available.
- Check which roles can configure people connectors in your tenant, given that two Learn pages name different roles.
- Review user editing of the same profile properties in the SharePoint admin center, as Learn recommends disabling user editing for properties ingested through people connectors.

### At rollout

- Read the Learn pages for people data connectors and Build Microsoft 365 Copilot connectors for people data when Microsoft updates them for ACL support, and confirm the new limits before building.
- Build new connections only with the permission model you intend, because the access permissions page says updating permissions after creation is not currently supported.
- Pilot with a limited audience, since staged connections are not supported for people data connections.

### After rollout

- Verify the **Permissions** setting on each people connection in the connector details pane and confirm it matches the intended model.
- Test with accounts in different groups in Copilot Chat to confirm restricted attributes do not appear for users outside the ACL.
- Watch the **Connection state** on Your Connections and the service health notifications for failed crawls.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Scoping imported people data to specific individuals and groups</strong><br><small class="controls__note">Not yet documented. Learn currently says people connector data is visible to all users and the ACL must grant everyone.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Permission model shown for a connector (source ACLs or visible to everyone)</strong><br><small class="controls__note">General connector control: Learn does not confirm it covers people connectors. Updating permissions after creation is not currently supported.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a connector's data is visible in Copilot Search and Copilot Chat</strong><br><small class="controls__note">Learn describes this for partner connectors; not confirmed for people connectors. AI administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › select the connection › Copilot Visibility <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a connection that carries people data</strong><br><small>Tenant</small><br><small class="controls__note">Admin UI creation for custom people connectors is not documented on the pages read. Roles per the people connectors page: Global Administrator and Copilot Administrator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/external/connections (set contentCategory to people)</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Removing a people connector and its data from Microsoft 365</strong><br><small>Tenant</small><br><small class="controls__note">Learn says deletion removes the connector from all instances but delays can be expected.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Connectors › Your Connections › select the connector › Delete <a href="https://learn.microsoft.com/graph/peopleconnectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No Microsoft page documents an admin setting, PowerShell cmdlet or API for scoping people data to individuals and groups, so the first row is empty on both surfaces. The rows beneath it are existing connector controls: the Learn pages read for this briefing do not confirm that the Copilot Visibility toggle or the Permissions view apply to people connectors, so treat them as general controls.

The Permissions view and the Copilot Visibility toggle are documented on the connector management pages, which name the AI administrator role. The people connectors page names Global Administrator and Copilot Administrator for configuring people connectors. Learn states that changing access permissions after creation is not currently supported, so deletion and recreation is the documented route.

## Open questions

- Which ACL identity types (users, Microsoft Entra groups, security identifiers) will people connectors accept, and will deny entries be supported? Watch the Build Microsoft 365 Copilot connectors for people data page.
- Will scoped people data apply equally to Copilot, Microsoft Search, profile cards and Org Explorer, or only to Copilot? Not yet documented.
- Will existing people connections with an everyone ACL be editable in place, or only recreated, given that updating permissions after creation is not currently supported?
- What licence does the capability need, and is any meter involved? Not yet published; watch the roadmap item and Message center.
- Which admin roles will configure it: Global Administrator and Copilot Administrator, or AI administrator as on the connector management page?

<!-- rationale
risk: Medium. Today Microsoft Learn says people connector data is visible to all users in the tenant; the planned ACL support narrows that, but how it is configured and enforced is not yet documented.
cost: Low. The only cost the sources show is admin and developer time to build or change a connector; licensing for the new ACL capability is not yet published, and Copilot grounding on connector data needs a Copilot licence.
impact: Low. Only admins and developers who build or run people connectors are affected directly; users would notice only when Copilot answers people questions with different data.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] front matter: defaultState; Why it matters / default: The new ACL control is admin-opt-in and nothing changes on arrival if administrators do nothing. | Found: Searched: "people" "connectors" "access control" "default". Read the roadmap, graph/peopleconnectors and the people-data build guide; none states the new control's default. | Fix: Set defaultState to unknown. Replace 'If nobody acts, nothing changes on arrival' with 'Microsoft has not stated the new ACL control's default or whether existing connections change automatically.' Admin configuration of today's connectors does not establish the new control's default.
- [unsupported, blocker] Why it matters / default: A connector built under today's rules will keep its everyone ACL after the new capability arrives. | Found: Searched: "people" "connectors" "existing" "ACL" update migration. Read the roadmap, graph/peopleconnectors, the people-data build guide and manage-access-permissions; none describes migration or the resulting ACLs of existing people connections. | Fix: Replace the assurance about existing ACLs with 'Microsoft has not documented how existing people connections with everyone ACLs will migrate; verify their permissions when rollout documentation is published.'
- [unsupported, blocker] Why it matters; Cost and licensing; Governance guidance: At rollout; Governance controls / applicability: The general delete-and-recreate permission workflow establishes how people connectors must move to the planned ACL capability. | Found: Searched: "people" "connectors" "existing" "ACL" update migration. Opened manage-access-permissions and the people-data build guide; neither documents this feature's migration workflow. | Fix: Keep deletion and recreation explicitly labelled as today's general connector guidance, not the documented migration route for future people ACLs. Replace 'Plan to rebuild rather than edit' and the categorical At rollout instruction with advice to confirm the published migration process before deleting or rebuilding people connections.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The recorded path to a connector's permission model is Microsoft 365 admin center > Copilot > Connectors > Your Connections. | Found: Select the connector you want to review to open the details pane. ... Under Permissions, you can view the permissions set for the connector. | Fix: Set controls[1].ui.path to 'Copilot > Connectors > Your Connections > select the connector > Permissions' and update the rendered row. The listed path stops at the connections list, omitting both selection and the Permissions section, not just an item-selection step. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions
- [contradicted, blocker] controls[4].api; Governance controls table / absence: An API for removing the people connector is not yet documented. | Found: Deletes an externalConnection object. ... DELETE https://graph.microsoft.com/v1.0/external/connections/contosohr | Fix: Populate controls[4].api with kind 'graph', call 'DELETE https://graph.microsoft.com/v1.0/external/connections/{connectionId}', and docs 'https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete'. People connections use this externalConnection resource; retain the note about deletion delays and do not imply immediate profile-data purging. | Source: https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete?view=graph-rest-1.0
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The governance checklist names profile-property editing and connection monitoring controls without corresponding controls-table rows. | Found: Checklist: 'Review user editing ... in the SharePoint admin center' and 'Watch the Connection state ... and the service health notifications'. The table covers ACL scoping, Permissions, Copilot Visibility, creation and deletion only. | Fix: Add documented rows for profile-property user editing and connection monitoring, or remove those control-specific checklist instructions. Use the existing peopleconnectors citation for editing and manage-connector citation for Connection state and service health; read the linked editing instructions before adding an exact editing path.
-->
