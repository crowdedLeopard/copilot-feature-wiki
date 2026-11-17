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
defaultState: "unknown"
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
  - title: "Delete externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete"
    kind: "learn"
videos: []
related: ["work-iq-federated-connectors"]
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
      path: "Copilot > Connectors > Your Connections > select the connector > Permissions"
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
    api:
      kind: "graph"
      call: "DELETE https://graph.microsoft.com/v1.0/external/connections/{connectionId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete"
    note: "Learn says deletion removes the connector from all instances but delays can be expected."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item: records the planned people data ACL support (In development, June CY2027 target) against today's documented everyone-visible limit."
  - date: "2026-11-16"
    note: "Correction: default state is now Not stated; migration of existing people connections is described as undocumented; Permissions path completed; Graph delete call added to the removal row; two checklist items without table rows removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 58
  unconfirmed: 1
  contradicted: 2
  attempts: 2
  hash: "2ba59f591359b8a8498bae650d802541"
---

## What's changing

The roadmap item states that the Copilot People Connector will support importing people data together with access control lists (ACLs), so Copilot respects the permissions defined in the source system. Imported data can be scoped to specific individuals and groups, and Copilot can reason over it while honouring those restrictions.

This is a plan, not shipped behaviour. The roadmap record shows the status as In development, with a General Availability target of June CY2027, for the Worldwide (Standard Multi-Tenant) cloud on the Developer platform. No preview date and no more-info link are given.

The documentation at the time of writing (November 2026) describes the current limit that this item would change. The Learn page on people data connectors says that, by default, people data provided via a Copilot connector is visible to all users in the tenant, and the build guide says you must set the ACL on ingested items to grant access to everyone. Neither page describes differentiated access for people data, and no Learn page for this roadmap feature was found.

Microsoft Learn also says people connectors are built with the Microsoft Graph external connections APIs, that the connection must set `people` in the `contentCategory` property, and that data is stored in the user's Microsoft 365 profile and in their Exchange Online mailbox.

## Why it matters

People data is among the most sensitive content a tenant can connect: HR, talent and recruiting systems hold information that should not reach every employee. Because Learn currently requires an everyone ACL for people connectors, some organisations may have held back from connecting such sources. If ACL support ships, those sources become candidates, and the permission model you set at ingestion becomes the thing that decides what Copilot can say about colleagues.

Microsoft has not stated the new ACL control's default or whether existing connections change automatically. The risk is deferred, not removed. Microsoft has not documented how existing people connections with everyone ACLs will migrate; verify their permissions when rollout documentation is published. For connectors in general, the Learn page on access permissions says updating permissions after a connection is created is not currently supported, and describes deleting and recreating the connection. That is today's general guidance, not a documented route for people ACLs, so confirm the published migration process before deleting or rebuilding people connections.

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

No meter, credit rate or cap is documented for people data ingestion at the time of writing. Indirect cost is admin and developer time: custom people connectors are built against the Graph external connections APIs. Microsoft has not documented a migration process for existing people connections, so the effort of moving to ACLs is not yet known.

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

### At rollout

- Read the Learn pages for people data connectors and Build Microsoft 365 Copilot connectors for people data when Microsoft updates them for ACL support, and confirm the new limits before building.
- Confirm the migration process Microsoft publishes for existing people connections before deleting or rebuilding any of them; the access permissions page's delete-and-recreate steps are today's general connector guidance.
- Pilot with a limited audience, since staged connections are not supported for people data connections.

### After rollout

- Verify the **Permissions** setting on each people connection in the connector details pane and confirm it matches the intended model.
- Test with accounts in different groups in Copilot Chat to confirm restricted attributes do not appear for users outside the ACL.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Scoping imported people data to specific individuals and groups</strong><br><small class="controls__note">Not yet documented. Learn currently says people connector data is visible to all users and the ACL must grant everyone.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Permission model shown for a connector (source ACLs or visible to everyone)</strong><br><small class="controls__note">General connector control: Learn does not confirm it covers people connectors. Updating permissions after creation is not currently supported.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › select the connector › Permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a connector's data is visible in Copilot Search and Copilot Chat</strong><br><small class="controls__note">Learn describes this for partner connectors; not confirmed for people connectors. AI administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › select the connection › Copilot Visibility <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a connection that carries people data</strong><br><small>Tenant</small><br><small class="controls__note">Admin UI creation for custom people connectors is not documented on the pages read. Roles per the people connectors page: Global Administrator and Copilot Administrator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/external/connections (set contentCategory to people)</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Removing a people connector and its data from Microsoft 365</strong><br><small>Tenant</small><br><small class="controls__note">Learn says deletion removes the connector from all instances but delays can be expected.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Connectors › Your Connections › select the connector › Delete <a href="https://learn.microsoft.com/graph/peopleconnectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE https://graph.microsoft.com/v1.0/external/connections/{connectionId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No Microsoft page documents an admin setting, PowerShell cmdlet or API for scoping people data to individuals and groups, so the first row is empty on both surfaces. The rows beneath it are existing connector controls: the Learn pages read for this briefing do not confirm that the Copilot Visibility toggle or the Permissions view apply to people connectors, so treat them as general controls.

The Permissions view and the Copilot Visibility toggle are documented on the connector management pages, which name the AI administrator role. The people connectors page names Global Administrator and Copilot Administrator for configuring people connectors. Learn states that updating access permissions after creation is not currently supported and describes deleting and recreating the connection. That is today's general connector guidance, not a documented migration route for future people ACLs.

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

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure, second bullet / behaviour: Future ACL-scoped people data would still sit with the Microsoft 365 profile. | Found: Searched: "people data" "scoped" "profile" "ACL". Opened peopleconnectors and build-connectors-with-people-data; storage is described for today's everyone-visible data, not for the planned differentiated-access design. | Fix: Remove 'so scoped data would still sit with the profile,' and retain the current-storage fact followed by 'How scoping applies to profile cards, Org Explorer and search is not yet documented.'
- [contradicted, blocker] Cost and licensing: third paragraph / absence: No cap is documented for people data ingestion. | Found: If you reach the maximum limit of a single connection or the tenant level quota across all connections, you can't add more items until you exit the state. | Fix: Replace 'No meter, credit rate or cap is documented for people data ingestion at the time of writing' with 'No meter, credit rate or spending cap specific to the planned ACL capability was found at the time of writing.' This removes the broader ingestion-limit absence claim; the Graph connections documentation describes connection and tenant item quotas. | Source: https://learn.microsoft.com/graph/connecting-external-content-manage-connections
- [contradicted, blocker] controls[1].note; Governance controls / applicability: Learn does not confirm that the Permissions view covers people connectors. | Found: You can review and validate access permissions for each Microsoft 365 Copilot connector from the connection details pane in the Microsoft 365 admin center. | Fix: Replace the Permissions-specific applicability disclaimer in controls[1].note and Governance controls with 'The Permissions view is documented for each Microsoft 365 Copilot connector; this does not document configuration of the planned differentiated people ACLs.' Retain the separate qualification on Copilot Visibility, which is documented for partner connectors. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: Existing connectors can be reviewed at Microsoft 365 admin center > Copilot > Connectors > Your Connections. | Found: In the Microsoft 365 Admin Center, go to Copilot > Connectors > Your Connections. | Fix: Keep the cited path, but add: 'The Graph connection-management article uses the alternative navigation label Copilot > Agents and connectors.' Cite https://learn.microsoft.com/graph/connecting-external-content-manage-connections, which says a search admin can manage all tenant connections there. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions
-->
