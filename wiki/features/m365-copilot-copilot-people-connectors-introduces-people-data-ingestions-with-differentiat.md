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
  model: "included"
  notes: "Connector grounding in Copilot is included with Microsoft 365 Copilot licences, and synced connector indexing incurs no extra cost for tenants with Microsoft 365 licences. A licence or price specific to the planned ACL option is not yet published."
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
  - title: "externalConnection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create, update, and delete connections in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-connections"
    kind: "learn"
videos: []
related: ["copilot-connectors"]
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
    note: "The Permissions view is documented for each Microsoft 365 Copilot connector; this does not document configuration of the planned differentiated people ACLs. Updating permissions after creation is not currently supported."
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
      call: "POST https://graph.microsoft.com/v1.0/external/connections"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections"
    note: "Admin UI creation for custom people connectors is not documented on the pages read. The request body sets contentCategory to people. Roles per the people connectors page: Global Administrator and Copilot Administrator."
  - governs: "Removing a people connector and its data from Microsoft 365"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > select the connector > Delete"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    api:
      kind: "graph"
      call: "DELETE https://graph.microsoft.com/v1.0/external/connections/{connectionId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete"
    note: "Learn says deletion removes the connector from all instances but delays can be expected."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-24"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item: records the planned people data ACL support (In development, June CY2027 target) against today's documented everyone-visible limit."
  - date: "2026-11-16"
    note: "Correction: default state is now Not stated; migration of existing people connections is described as undocumented; Permissions path completed; Graph delete call added to the removal row; two checklist items without table rows removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: removed the claim about where scoped data would sit, narrowed the cost-cap statement to the planned ACL capability, and stated that the Permissions view is documented for each connector."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: tenant-wide exposure wording now cites profile visibility controls and information barriers; unmatched accounts are described as ignored; deletion path now starts at Copilot; licensing model set to included for connector grounding; create call shown without a body detail."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 70 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f6a4d27b342233efb18bcf062dbbf314"
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

- Today, people connector data is visible to all users in the tenant and the ACL must grant everyone. By default, people connector data is visible to all tenant users, subject to existing Microsoft 365 profile visibility and access controls and information barriers, and Copilot and people search can surface it. The planned ACL support is the only change the sources describe that would narrow this; its mechanics are not yet documented.
- Learn says data is stored in the user's Microsoft 365 profile and in the Exchange Online mailbox. How scoping applies to profile cards, Org Explorer and search is not yet documented.

**Security & identity**

- Learn says Microsoft Purview Information Barriers are respected by people connectors, but it does not say how this interacts with per-person ACLs.
- Accounts that do not match a Microsoft Entra user, or that have no Exchange Online mailbox, are ignored. Microsoft Graph ignores nonmatched user accounts.

**Autonomy & actions**

- No change documented: the sources describe ingestion and grounding, not write actions.

**Change & support**

- Connections with people data do not support staged connections, so a connector cannot be piloted through that route; Learn separately advises piloting with a limited audience.
- Users cannot edit connector-ingested properties, and Learn recommends disabling user editing of those properties to avoid edits that do not show on the profile card. Expect help desk questions when scoped data differs between viewers.

## Cost and licensing

Connector grounding in Copilot is included with Microsoft 365 Copilot licences. Microsoft has not published a licence or price specific to the planned people-data ACL option.

The general connectors prerequisites page (Prerequisites for deploying connectors) says synced connectors support Copilot grounding and agents with Microsoft 365 plus the Microsoft 365 Copilot add-on or with Microsoft 365 E7, and that a Microsoft 365 licence alone supports Microsoft Search only. It also says that indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses. That page is about connectors in general; it does not mention people connectors, so treat it as background.

No meter, credit rate or spending cap specific to the planned ACL capability was found at the time of writing. Indirect cost is admin and developer time: custom people connectors are built against the Graph external connections APIs. Microsoft has not documented a migration process for existing people connections, so the effort of moving to ACLs is not yet known.

## Scope

- **Users and licences:** not yet published for the planned capability. Learn says people data persists while the user is active and has a valid Microsoft 365 licence.
- **Roles:** the people connectors page says only users with Global Administrator and Copilot Administrator roles can configure people connectors, while the connector management page says you must be an AI administrator to manage Copilot connectors. The two pages differ; check both before delegating.
- **Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Developer platform. The record lists no US Government cloud.
- **Prerequisites documented today:** OAuth 2.0 authentication is required to set up people connectors; accounts need an Exchange Online mailbox to be matched.
- **Rollout:** status In development, GA targeted for June CY2027. No release channel or rollout mechanics are published.

## Governance guidance

### Before rollout

- Inventory existing Copilot connectors in the Microsoft 365 admin center (Copilot > Connectors > Your Connections) and flag any that carry people data with an everyone ACL. The Graph connection-management article uses the alternative navigation label Copilot > Agents and connectors.
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
<tr><td data-label="Control"><strong>Permission model shown for a connector (source ACLs or visible to everyone)</strong><br><small class="controls__note">The Permissions view is documented for each Microsoft 365 Copilot connector; this does not document configuration of the planned differentiated people ACLs. Updating permissions after creation is not currently supported.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › select the connector › Permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a connector's data is visible in Copilot Search and Copilot Chat</strong><br><small class="controls__note">Learn describes this for partner connectors; not confirmed for people connectors. AI administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › select the connection › Copilot Visibility <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a connection that carries people data</strong><br><small>Tenant</small><br><small class="controls__note">Admin UI creation for custom people connectors is not documented on the pages read. The request body sets contentCategory to people. Roles per the people connectors page: Global Administrator and Copilot Administrator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/external/connections</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Removing a people connector and its data from Microsoft 365</strong><br><small>Tenant</small><br><small class="controls__note">Learn says deletion removes the connector from all instances but delays can be expected.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › select the connector › Delete <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE https://graph.microsoft.com/v1.0/external/connections/{connectionId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No Microsoft page documents an admin setting, PowerShell cmdlet or API for scoping people data to individuals and groups, so the first row is empty on both surfaces. The rows beneath it are existing connector controls. The Permissions view is documented for each Microsoft 365 Copilot connector; this does not document configuration of the planned differentiated people ACLs. The pages read for this briefing do not confirm that the Copilot Visibility toggle, which Learn describes for partner connectors, applies to people connectors, so treat it as a general control.

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
