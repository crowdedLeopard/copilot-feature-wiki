---
title: "Microsoft Purview portal: service health dashboard"
slug: "microsoft-purview-compliance-portal-service-health-dashboard"
roadmapId: 497944
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a dashboard in the Purview portal that shows outages, service issues and advisories for Purview, Microsoft 365 and Azure services. Read-only; no admin action is documented yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and the Purview portal overview says only that the solutions and features you see depend on your permissions and Purview subscription."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","monitoring","admin-center","service-health"]
sources:
  - title: "Microsoft 365 Roadmap 497944"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=497944"
    kind: "roadmap"
  - title: "How to check Microsoft 365 service health"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"
    kind: "learn"
  - title: "List healthOverviews"
    url: "https://learn.microsoft.com/graph/api/serviceannouncement-list-healthoverviews"
    kind: "learn"
  - title: "Azure Service Health portal"
    url: "https://learn.microsoft.com/azure/service-health/service-health-portal-update"
    kind: "learn"
  - title: "Learn about the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-portal"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Access to the service health dashboard in the Purview portal"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
  - governs: "Viewing Microsoft 365 service health today (existing page, not the Purview dashboard)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Health > Service health"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/view-service-health"
    api:
      kind: "graph"
      call: "GET /v1.0/admin/serviceAnnouncement/healthOverviews"
      docs: "https://learn.microsoft.com/graph/api/serviceannouncement-list-healthoverviews"
    note: "Read-only. Service Support admin and Helpdesk admin roles can view service health. Does not cover the planned Purview dashboard."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-03-10T23:00:58"
changes:
  - date: "2026-11-24"
    note: "First briefing: roadmap-only description of a planned Purview portal service health dashboard; Learn does not document it yet."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 46 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 43
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "1f99e24c2350f8f62953a17ebbc7b780"
---

## What's changing

Microsoft plans a service health dashboard in the Microsoft Purview portal. The roadmap item says Purview users will be able to view outages, service issues and advisories that might affect their services, and that the dashboard will combine the health of Purview services and solutions, Microsoft 365 services and Azure cloud services in one place in the Purview portal.

Microsoft Learn does not describe this dashboard yet, so everything about its behaviour on this page is the roadmap's description. Which services and events it lists, who can open it and whether it can send notifications are not documented at the time of writing (November 2026).

The roadmap record shows the item as In development, with a target of September CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) on the web. The target month has passed and the record, last modified on 10 March 2026, still says In development. Treat the date as a target, not as availability.

Service health already exists elsewhere. In the Microsoft 365 admin center, **Health > Service health** shows each cloud service's state with active incidents and advisories, and the Azure Service Health portal tracks Azure service issues, planned maintenance and health advisories. The new dashboard is described as bringing this information into the Purview portal; the roadmap does not say whether it replaces either page.

## Why it matters

Purview administrators who suspect a service fault currently have to look in other portals, as the roadmap's own wording ("eliminating the need to go to several places") implies. A single view inside the Purview portal could shorten that check before a ticket is raised or a policy is blamed.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. The practical task is small: find out who in your organisation needs to see the dashboard, and make sure they hold whatever role Microsoft eventually documents for it. Until then, keep using the existing Microsoft 365 and Azure service health pages.

## Risk assessment

**Data exposure**

- The roadmap describes a view of service status. It does not say the dashboard reads or exposes tenant content; how it gets its information is not described, so confirm that when Learn documents it.

**Security & identity**

- Which roles can open the dashboard is not documented. For comparison, the Microsoft 365 service health page says people assigned the Service Support admin and Helpdesk admin roles can view service health, and Azure Service Health separates tenant-level and subscription-level events by access. Do not assume the Purview dashboard follows either rule.

**Autonomy & actions**

- No autonomous behaviour is described. The roadmap describes viewing outages, issues and advisories only.

**Change & support**

- Combining Purview, Microsoft 365 and Azure health in one dashboard could change where your help desk tells administrators to check first. Until the dashboard ships and is documented, existing runbooks that point at the Microsoft 365 admin center or the Azure portal remain the documented routes.

## Cost and licensing

The roadmap item names no licence and no meter, and Microsoft has not published licensing for this dashboard. The Purview portal overview says the solutions, cards and features you see depend on your permissions and your Microsoft Purview subscription, but it says nothing about service health.

The cost known today is indirect: admin time to learn the dashboard and update runbooks. The existing Microsoft 365 service health and Azure Service Health pages are different surfaces from this dashboard, so do not carry their licensing across to it.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud, the web as the platform and General Availability as the release phase. Government clouds are not listed on the roadmap item; that is a record fact, not a statement that the feature is unavailable there.

Users, roles and prerequisites are not documented. The roadmap addresses "a Microsoft Purview user" and the Purview portal is where the dashboard will sit. How the dashboard rolls out, and whether anything has to be switched on, is not stated.

## Governance guidance

### Before rollout

- Record which administrators and help desk staff currently check Microsoft 365 service health (Microsoft 365 admin center > Health > Service health) so you know who will want the Purview view.
- Note the role those people hold, because Microsoft has not documented which roles can open the new dashboard.
- Add a watch for the item on the Microsoft 365 roadmap and in Message center, since no Learn page exists yet.

### At rollout

- Check the Purview portal navigation for a service health entry once Microsoft announces availability, and confirm who can see it.
- Compare what it lists against the Microsoft 365 service health page for one known incident before changing any runbook.

### After rollout

- Update support runbooks to say which page is authoritative for Purview incidents, once Microsoft documents the dashboard.
- Review whether administrators who do not hold Purview roles still need the Microsoft 365 or Azure pages.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access to the service health dashboard in the Purview portal</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Viewing Microsoft 365 service health today (existing page, not the Purview dashboard)</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. Service Support admin and Helpdesk admin roles can view service health. Does not cover the planned Purview dashboard.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Health › Service health <a href="https://learn.microsoft.com/microsoft-365/enterprise/view-service-health" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/admin/serviceAnnouncement/healthOverviews</code> <a href="https://learn.microsoft.com/graph/api/serviceannouncement-list-healthoverviews" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting for this dashboard is documented at the time of writing (November 2026). The only service health controls that Learn documents are those of the existing Microsoft 365 service health page and Microsoft Graph, shown in the table as today's alternative; they do not govern the Purview dashboard.

The Graph call reads service health for a tenant and sets nothing. Microsoft Graph lists ServiceHealth.Read.All as the permission for it.

## Open questions

- Which roles can open the service health dashboard in the Purview portal, and does an admin have to grant access? Watch the Purview permissions page on Microsoft Learn.
- Which services and event types appear: incidents, advisories and planned maintenance? Watch for a Learn page describing the dashboard.
- Is it on by default when it arrives, and is there any licence or Purview subscription requirement? Watch Message center and the roadmap item.
- Does it replace or sit alongside Microsoft 365 service health and Azure Service Health, and can it send notifications?
- When will it ship, given the September CY2026 target has passed and the item still shows In development?

<!-- rationale
risk: Low. The roadmap describes a view of outages and advisories, not a change to data, identity or actions; its default state is not stated, so this rates today's behaviour continuing.
cost: Low. The roadmap names no licence or meter and Microsoft has not published licensing for this dashboard, so the only known cost is admin time to learn where service status now lives.
impact: Low. The roadmap addresses Microsoft Purview users who want service status; it describes no change for end users.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] summary / behaviour: The planned Purview dashboard is read-only. | Found: Searched: Microsoft Purview portal service health dashboard read only incidents advisories services data. Opened Purview portal overview and read roadmap description. The roadmap promises viewing, but neither source states that the dashboard is read-only. | Fix: Remove 'Read-only;' from the summary. The roadmap documents viewing outages, service issues and advisories but does not exclude other actions.
- [unsupported, blocker] controls[1].note; Governance controls; rendered controls table / applicability: The existing Microsoft 365 service health controls and Graph do not cover or govern the planned Purview dashboard. | Found: Searched: Microsoft Purview service health dashboard access setting PowerShell Graph API serviceAnnouncement. Opened Graph list healthOverviews and Purview portal overview. Neither states whether the new dashboard uses or is governed by existing service health access. | Fix: Replace 'Does not cover the planned Purview dashboard' in the row note and 'they do not govern the Purview dashboard' in the prose with 'Microsoft has not documented how these existing service health controls relate to the planned Purview dashboard.'
- [contradicted, blocker] Governance controls / behaviour: The only service health controls Learn documents are those of the existing Microsoft 365 service health page and Microsoft Graph. | Found: Use the Service Health dashboard to create and manage Service Health alerts, which proactively notify you when service issues affect you. | Fix: Replace 'The only service health controls that Learn documents are those of the existing Microsoft 365 service health page and Microsoft Graph, shown in the table as today's alternative' with 'The table shows the existing Microsoft 365 service health page and Microsoft Graph as documented alternatives.' Retain the separate applicability qualification only as corrected above. | Source: https://learn.microsoft.com/azure/service-health/service-health-portal-update
-->
