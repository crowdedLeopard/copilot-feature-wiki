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
  model: "unknown"
  notes: "Not yet published for this feature. Microsoft Learn says items ingested through custom connectors built with the Graph APIs consume item quota, and does not say whether people-data connectors count against it."
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
  - title: "Use people data connectors with Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/graph/peopleconnectors"
    kind: "learn"
  - title: "Build Microsoft 365 Copilot connectors for people data"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/build-connectors-with-people-data"
    kind: "learn"
  - title: "Add or remove custom attributes on a profile card using the profile card API"
    url: "https://learn.microsoft.com/graph/add-properties-profilecard"
    kind: "learn"
  - title: "profileCardProperty resource type"
    url: "https://learn.microsoft.com/graph/api/resources/profilecardproperty"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Work with the Copilot connectors API"
    url: "https://learn.microsoft.com/graph/connecting-external-content-connectors-api-overview"
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
    note: "Path as given in Message Center post MC1193692; Learn does not yet describe it. People settings need Global Administrator or People Administrator."
  - governs: "Optional Microsoft Entra properties shown on profile cards (existing control)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > People settings > Profile card > Contact info"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/customize-profile-cards"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/admin/people/profileCardProperties (directoryPropertyName, annotations, isVisible)"
      docs: "https://learn.microsoft.com/graph/add-properties-profilecard"
    note: "Covers Microsoft Entra attributes, including CustomAttribute1 to 15. Microsoft has not confirmed it governs connector-sourced properties."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item; rollout moved to January 2027 in the 6 November 2026 update of MC1193692."
version: 1
---

## What's changing

Microsoft plans to let organisations add up to 10 custom properties to Microsoft 365 profile cards, sourced from external systems such as HR platforms. Admins set a display name and an icon for each property, and the property appears in the Contact Information section of the profile card. Microsoft's notice MC1193692 says the properties appear in Outlook on the web and that data arrives through Microsoft Graph People connectors (Microsoft 365 Copilot connectors for people data).

Microsoft's notice says the feature is off by default and needs admin configuration, with visibility, display name and icon set per property in the Microsoft 365 admin center. Changes can take up to 24 hours to appear on profile cards. The notice also says future updates will add direct ingestion from SAP SuccessFactors and Workday connectors.

The roadmap record lists the item as In development, targeted for January CY2027, General Availability, Worldwide (Standard Multi-Tenant), on the Web platform. MC1193692 was updated on 6 November 2026 and now gives a rollout start and finish of January 2027 (previously November 2026), with Microsoft's end date shown as 2027-03-01. The notice sets no act-by date.

Microsoft Learn does not describe this connector-sourced custom property feature yet at the time of writing (November 2026). Its page on enriching profile cards covers a related, existing setting for optional Microsoft Entra properties, covered under Governance controls.

## Why it matters

This puts HR-system values in front of every colleague who opens a profile card, so the decision is which attributes belong in a tenant-wide directory view. Microsoft Learn states that people data provided through a Copilot connector is visible to all users in the organisation, so a property such as a cost centre or employee type is not limited to managers or HR.

If nobody acts, nothing changes: the feature is off by default per Microsoft's notice. The work lands on the team that owns the people-data connector and the profile card settings, who should decide the property list and the wording before enabling anything, and brief the helpdesk.

## Risk assessment

**Data exposure**

- Connector-sourced people data is visible to all users in the tenant and is stored in the user's Microsoft 365 profile, per Microsoft Learn. Each property made visible on profile cards therefore reaches every user who can view a colleague's card. Choose properties accordingly; Learn documents no per-audience visibility setting for them.
- Microsoft Learn says hiding an optional property removes it from profile cards but does not delete it from Microsoft 365 profiles or stop it appearing in other experiences. Whether the same holds for connector custom properties is not documented.

**Security & identity**

- Setting up people connectors requires OAuth 2.0 authentication, and Learn lists Global Administrator and Copilot Administrator as the roles that can configure them. The connector prerequisites page names the AI administrator role instead; confirm which role your tenant needs.
- Microsoft Learn says people-data connectors comply with Microsoft Purview Information Barriers.

**Autonomy & actions**

- No change: the feature displays values on a card and takes no actions. Microsoft Learn notes that people data from connectors also feeds Microsoft 365 Copilot, Microsoft Search and Org Explorer, which is a separate consumer of the same data.

**Change & support**

- Users cannot edit connector-ingested values: Learn says they are read-only, so corrections mean the admin updating the source system and waiting for the connector's next crawl.
- Changes take up to 24 hours to show on cards, so expect "I enabled it and nothing happened" tickets.
- Microsoft's notice names Outlook on the web as the surface; do not promise the same view in other clients.

## Cost and licensing

Microsoft has not published a licence requirement for this feature. Neither the roadmap record nor MC1193692 names a licence, a meter or a price.

General connector guidance applies to the ingestion side. Microsoft Learn says items ingested through connections built with the Copilot connectors APIs consume your item quota, with extra quota available to buy, and that indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses. Neither page says how people-data connectors are counted, so confirm quota before ingesting a large population.

The indirect cost is admin and HR time: choosing up to 10 properties, building or configuring the connector, and briefing the helpdesk.

## Scope

Audience: the roadmap record and MC1193692 target Microsoft 365 tenant admins managing profile cards, in the Worldwide (Standard Multi-Tenant) cloud. No other cloud is listed on the roadmap item. The record lists the Web platform, and the notice says properties appear in Outlook on the web.

Roles: Microsoft Learn says Global Administrator or People Administrator can change People settings. Connector setup roles are covered under Risk assessment.

Prerequisites: a people-data connector or custom connection that ingests the properties. Microsoft Learn says Microsoft Graph ignores accounts without an Exchange Online mailbox and non-matching user accounts, and that new connections can take up to 6 hours to become available.

Rollout: the notice gives January 2027 for start and completion. Dates are Microsoft's targets.

## Governance guidance

### Before rollout

- List the external attributes you want on cards (maximum 10 per Microsoft's notice) and get HR and privacy sign-off, because every user in the tenant can see them.
- Choose or build the people-data connector (Connectors gallery in the Microsoft 365 admin center, or the Graph external connections APIs) and confirm which admin role your tenant needs to configure it.
- Check your connector item quota with the Microsoft 365 admin team before ingesting.
- Draft helpdesk guidance: values are read-only for users and corrections go through the source system.

### At rollout

- Ingest the properties through the connector and pilot with a limited audience before wide enablement, as Learn recommends.
- Set visibility, display name and icon for each property under People settings in the Microsoft 365 admin center, as a Global Administrator or People Administrator.
- Leave properties hidden until HR has verified the ingested values.

### After rollout

- Wait up to 24 hours, then check a profile card in Outlook on the web for each property.
- Review the property list each quarter and remove any that no longer need to be tenant-wide.
- Watch Message center for MC1193692 updates, since the date has already moved once.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Visibility, display name and icon of connector-sourced custom properties on profile cards</strong><br><small>Tenant</small><br><small class="controls__note">Path as given in Message Center post MC1193692; Learn does not yet describe it. People settings need Global Administrator or People Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › People settings › Profile › Person info on profile cards <a href="https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1193692" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Optional Microsoft Entra properties shown on profile cards (existing control)</strong><br><small>Tenant</small><br><small class="controls__note">Covers Microsoft Entra attributes, including CustomAttribute1 to 15. Microsoft has not confirmed it governs connector-sourced properties.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › People settings › Profile card › Contact info <a href="https://learn.microsoft.com/microsoft-365/admin/manage/customize-profile-cards" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/admin/people/profileCardProperties (directoryPropertyName, annotations, isVisible)</code> <a href="https://learn.microsoft.com/graph/add-properties-profilecard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row is the control Microsoft's notice describes; its path comes from that notice, and Microsoft Learn labels the existing setting differently (Profile card > Contact info), so check the label in your tenant when the feature arrives. No API for the connector-sourced properties is documented at the time of writing (November 2026).

The second row is an existing control for Microsoft Entra attributes. Microsoft has not confirmed it governs connector-sourced properties, so do not use it as a switch for this feature. Delegated calls need a Tenant Administrator role, and writes need the PeopleSettings.ReadWrite.All permission.

## Open questions

- Does a per-property visibility setting exist for the connector-sourced properties, and is there a tenant-wide switch for the whole feature? Watch the Learn page on customising profile cards.
- Which licence, if any, and which item quota does this feature need? Watch the connector licensing pages and Message center.
- Will the properties appear in clients other than Outlook on the web, such as Teams or Outlook for Windows? Microsoft's notice names only Outlook on the web.
- Which admin role configures the connector: Global Administrator and Copilot Administrator, or AI administrator? Watch the connector prerequisites page.
- Is the Graph API for profile card properties extended to the connector-sourced properties?

<!-- rationale
risk: Low. Microsoft's notice says the feature is off by default and needs admin configuration, so nothing is exposed until an admin ingests data and makes a property visible; once visible, every user in the tenant can see it.
cost: Low. The only cost the sources show is admin time for the connector and settings work; licensing for this feature is not yet published, and connector item quota applies to custom connectors built with the Graph APIs.
impact: Low. Only admins act at first; users notice a new property in the Contact Information section of profile cards in Outlook on the web only after an admin enables it.
-->
