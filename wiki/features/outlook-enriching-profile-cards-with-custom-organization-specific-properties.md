---
title: "Outlook: custom organisation properties on profile cards"
slug: "outlook-enriching-profile-cards-with-custom-organization-specific-properties"
roadmapId: 529851
topic: "modern-work"
products: ["Outlook"]
summary: "Microsoft plans to let admins show up to 10 custom properties from external systems such as HR platforms on profile cards in Outlook on the web. Off by default; nothing changes until an admin configures it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The connector prerequisites require Microsoft 365 licenses for the tenant; available connector types and surfaces depend on licensing. A licence requirement specific to these new custom profile card properties is not yet published."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["outlook","copilot-connectors","microsoft-graph","m365-admin-center","admin-controls","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 529851"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=529851"
    kind: "roadmap"
  - title: "MC1193692: (Updated) Microsoft 365: Enrich profile cards with custom properties from third-party systems"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1193692"
    kind: "message-center"
  - title: "Enriching and customizing your organization's profile cards"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/customize-profile-cards"
    kind: "learn"
  - title: "Manage people data and related experiences from the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/people-settings-in-microsoft-365-admin-center"
    kind: "learn"
  - title: "Use people data connectors with Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/graph/peopleconnectors"
    kind: "learn"
  - title: "Build Microsoft 365 Copilot connectors for people data"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/build-connectors-with-people-data"
    kind: "learn"
  - title: "Add or remove custom attributes on a profile card using the profile card API"
    url: "https://learn.microsoft.com/graph/add-properties-profilecard"
    kind: "learn"
  - title: "Create profileCardProperty"
    url: "https://learn.microsoft.com/graph/api/peopleadminsettings-post-profilecardproperties"
    kind: "learn"
  - title: "Create externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections"
    kind: "learn"
  - title: "externalConnection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Deploy connectors in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Visibility, display name and icon of connector-sourced custom properties on profile cards"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > People settings > Profile > Person info on profile cards"
      docs: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1193692"
    api: null
    note: "Path as given in Message Center post MC1193692; Learn does not yet describe it. Profile card settings need Global Administrator or People Administrator."
  - governs: "Which people-data connection supplies the properties"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Gallery > Human resources & recruiting > data source"
      docs: "https://learn.microsoft.com/graph/peopleconnectors"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/external/connections"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections"
    note: "The request body sets the top-level contentCategory property to people. Learn names Global Administrator and Copilot Administrator for people connectors; the prerequisites page names AI administrator."
  - governs: "Optional Microsoft Entra properties shown on profile cards (existing control)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > People settings > Profile card > Contact info"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/customize-profile-cards"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/admin/people/profileCardProperties"
      docs: "https://learn.microsoft.com/graph/add-properties-profilecard"
    note: "Covers Entra attributes, including CustomAttribute1 to 15. Not confirmed to govern connector-sourced properties. The request body specifies directoryPropertyName, annotations for labels, and isVisible for visibility."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-24"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item; rollout moved to January 2027 in the 6 November 2026 update of MC1193692."
  - date: "2026-11-16"
    note: "Corrected after verification: removed the unsupported no-actions claim, added the connection setup row, role differences and pilot caveat, and dropped the item-quota advice."
  - date: "2026-11-17"
    note: "Corrected the people-connection call (contentCategory is a top-level externalConnection property), aligned the At rollout step with the undocumented hiding effect, and added the People settings role page."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the connector gallery route (Copilot > Connectors > Gallery), the Graph calls and the People settings path; licensing now follows the connector prerequisites page."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the licensing paragraph so the connector prerequisites are described as general requirements, and extended the connector gallery path to include the data source."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 73 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-24"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "2b66e27e4e4d1c2fb2c6e118b5b90912"
---

## What's changing

Microsoft plans to let organisations add up to 10 custom properties to Microsoft 365 profile cards, sourced from external systems such as HR platforms. Admins set a display name and an icon for each property, and the property appears in the Contact Information section of the profile card. Microsoft's notice MC1193692 says the data arrives through Microsoft Graph People connectors and that the properties appear in Outlook on the web.

Microsoft's notice says the feature is off by default and needs admin configuration, with visibility, display name and icon set in the Microsoft 365 admin center. Changes can take up to 24 hours to propagate across profile cards. The notice also says future updates will add direct ingestion from SAP SuccessFactors and Workday connectors.

The roadmap record lists the item as In development, targeted for January CY2027, General Availability, Worldwide (Standard Multi-Tenant), on the Web platform. MC1193692 was updated on 6 November 2026 and now gives a rollout start and finish of January 2027 (previously November 2026), with Microsoft's end date shown as 2027-03-01. The notice sets no act-by date.

Microsoft Learn does not describe this connector-sourced custom property feature at the time of writing (November 2026). Its page on enriching profile cards covers a related, existing setting for optional properties, and its people-data connector pages describe how the data gets in.

## Why it matters

This puts HR-system values in front of colleagues who open a profile card, so the decision is which attributes belong in a tenant-wide directory view. Microsoft Learn says people data provided through a Copilot connector is visible to all users in the organisation, so a property such as a cost centre or employee type is not limited to managers or HR.

If nobody acts, nothing changes: Microsoft's notice says the feature is off by default. The work lands on whoever owns the people-data connector and the People settings page. They should settle the property list and wording, and brief the helpdesk, before enabling anything.

## Risk assessment

**Data exposure**

- Connector-sourced people data is visible to all users in the organisation and is stored in the user's Microsoft 365 profile, per Microsoft Learn. Approve each attribute with HR and privacy before it is ingested: Learn documents no per-audience setting for these properties, and the build guide requires the access control list on ingested items to grant access to everyone.
- Hiding a property is not a data boundary. For the existing optional properties, Learn says hiding a property removes it from profile cards but does not delete the data from Microsoft 365 profiles or stop it appearing in other Microsoft 365 experiences. Whether the same holds for connector custom properties is not documented.

**Security & identity**

- Setting up people connectors requires OAuth 2.0 authentication. The people-connector page says only users with the Global Administrator and Copilot Administrator roles can configure them, while the connector prerequisites page says you must be an AI administrator to configure and deploy Copilot connectors. Confirm which role your tenant needs.
- Microsoft Learn says Copilot connectors for people data comply with Microsoft Purview Information Barriers.

**Autonomy & actions**

- The roadmap describes a display change: custom properties appear in the Contact Information section of profile cards. Learn also says the same people data is used by Microsoft 365 Copilot, Microsoft Search and Org Explorer, which are separate consumers of what you ingest.

**Change & support**

- Users cannot edit connector-ingested values: Learn says they are read-only, so a correction means the admin updating the source system and waiting for the connector's next scheduled crawl.
- Changes can take up to 24 hours to show on cards, so expect "I enabled it and nothing happened" tickets.
- Microsoft's notice names Outlook on the web as the surface; do not promise the same view in other clients.

## Cost and licensing

Microsoft has not published a licence requirement specific to these custom profile card properties. Neither the roadmap record nor MC1193692 names a licence, a meter or a price, and no meter is documented for it at the time of writing (November 2026).

The connector prerequisites page says your tenant must have Microsoft 365 licenses, that the connector types and surfaces available depend on licensing, and that indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses. These are the general connector prerequisites; a licence requirement specific to the new custom profile card properties is not yet published.

The indirect cost is admin and HR time: choosing up to 10 properties, building or configuring the connector, and briefing the helpdesk.

## Scope

Audience: the roadmap record and MC1193692 target Microsoft 365 tenant admins managing profile cards, in the Worldwide (Standard Multi-Tenant) cloud. No other cloud is listed on the roadmap item. The record lists the Web platform, and the notice says properties appear in Outlook on the web.

Roles: Learn says you must be a Global Administrator or a People Administrator to change the profile card settings it describes. Connector setup roles differ between pages and are covered under Risk assessment.

Prerequisites: a people-data connector or custom connection that ingests the properties. Learn says Microsoft Graph ignores accounts without an Exchange Online mailbox and non-matching user accounts, and that new connections can take up to 6 hours to become available.

Rollout: the notice gives January 2027 for start and completion. Dates are Microsoft's targets.

## Governance guidance

### Before rollout

- List the external attributes you want on cards (maximum 10 per Microsoft's notice) and get HR and privacy sign-off, because people data from a connector is visible to all users in the tenant.
- Choose a prebuilt connector from the Human resources & recruiting category of the connector gallery, or build one with the Microsoft Graph external connections APIs, and confirm which admin role your tenant needs to configure it.
- Draft helpdesk guidance: values are read-only for users and corrections go through the source system.

### At rollout

- Validate the values with HR before ingesting them: connector people data is visible to all users by default and is used by other Microsoft 365 experiences. Do not rely on card visibility as a data boundary.
- Pilot with test data or a test tenant. Learn recommends piloting with a limited audience, but the build guide says people-data connections do not support staged connections and require access for everyone, so this is not an audience-scoping control.
- Set visibility, display name and icon for each property under People settings in the Microsoft 365 admin center, as a Global Administrator or People Administrator.

### After rollout

- Wait up to 24 hours, then check a profile card in Outlook on the web for each property.
- Review the property list each quarter and remove any that no longer need to be tenant-wide.
- Watch Message center for MC1193692 updates, since the date has already moved once.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Visibility, display name and icon of connector-sourced custom properties on profile cards</strong><br><small>Tenant</small><br><small class="controls__note">Path as given in Message Center post MC1193692; Learn does not yet describe it. Profile card settings need Global Administrator or People Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › People settings › Profile › Person info on profile cards <a href="https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1193692" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which people-data connection supplies the properties</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets the top-level contentCategory property to people. Learn names Global Administrator and Copilot Administrator for people connectors; the prerequisites page names AI administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Gallery › Human resources &amp; recruiting › data source <a href="https://learn.microsoft.com/graph/peopleconnectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/external/connections</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Optional Microsoft Entra properties shown on profile cards (existing control)</strong><br><small>Tenant</small><br><small class="controls__note">Covers Entra attributes, including CustomAttribute1 to 15. Not confirmed to govern connector-sourced properties. The request body specifies directoryPropertyName, annotations for labels, and isVisible for visibility.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › People settings › Profile card › Contact info <a href="https://learn.microsoft.com/microsoft-365/admin/manage/customize-profile-cards" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/admin/people/profileCardProperties</code> <a href="https://learn.microsoft.com/graph/add-properties-profilecard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row is the control Microsoft's notice describes. Its path comes from that notice, and Learn labels the existing setting differently (Profile card > Contact info), so check the label in your tenant when the feature arrives. No API for the connector-sourced properties is documented at the time of writing (November 2026).

The second row covers how data gets in. Learn's connector deployment page gives the route to the connector gallery; choose the people-data source in the Human resources & recruiting category. In the Microsoft Graph call, contentCategory is a top-level property of the externalConnection, not a property inside configuration. Role requirements differ between the people-connector and prerequisites pages (see Risk assessment).

The third row is an existing control for Microsoft Entra properties. Microsoft has not confirmed it governs connector-sourced properties, so do not use it as a switch for this feature. The overview page says delegated calls need a Tenant Administrator role, while the Create profileCardProperty reference names People Administrator as the least privileged supported role. Writes need the PeopleSettings.ReadWrite.All permission.

## Open questions

- Is there a tenant-wide switch for the whole feature, in addition to the per-property visibility described in MC1193692? Watch the Learn page on customising profile cards.
- Which licence, if any, and which item quota does this feature need? Watch the connector licensing pages and Message center.
- Will the properties appear in clients other than Outlook on the web, such as Teams or Outlook for Windows? Microsoft's notice names only Outlook on the web.
- Which admin role configures the people connector: Global Administrator and Copilot Administrator, or AI administrator? Watch the connector prerequisites page.
- Will the Graph API for profile card properties be extended to connector-sourced properties?

<!-- rationale
risk: Low. The card display needs admin configuration, but Microsoft Learn says people data from a Copilot connector is visible to all users in the tenant by default, so approve the data before ingesting it, not only before showing it on cards.
cost: Low. The only cost the sources show is admin and HR time for the connector and settings work; a licence specific to this feature is not yet published and no meter is documented for it at the time of writing (November 2026).
impact: Low. Admins act first; users notice a new property in the Contact Information section of profile cards in Outlook on the web only after an admin enables it.
-->
