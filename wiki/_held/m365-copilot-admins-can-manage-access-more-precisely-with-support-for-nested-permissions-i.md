---
title: "Microsoft 365 Copilot connectors: parent-level permissions for ServiceNow and Confluence"
slug: "m365-copilot-admins-can-manage-access-more-precisely-with-support-for-nested-permissions-i"
roadmapId: 503587
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Launched: Confluence and ServiceNow Copilot connectors now evaluate parent-level permissions for child items. Jira is in the roadmap title only. Connector admins should re-test who sees indexed content."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The connectors prerequisites page says the tenant must have Microsoft 365 licenses and that indexing of synced connector data incurs no extra cost for such tenants. Nothing specific to hierarchical permissions is published."
audiences: ["m365-admin","security","service-owner"]
tags: ["copilot-connectors","m365-copilot","servicenow","confluence","oversharing","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 503587"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503587"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Set up the ServiceNow service for ServiceNow Knowledge connector ingestion"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/servicenow-knowledge-admin-setup"
    kind: "learn"
  - title: "Deploy the ServiceNow Knowledge Copilot connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/servicenow-knowledge-deployment"
    kind: "learn"
  - title: "Set up the Confluence Cloud service for connector ingestion"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-cloud-admin-setup"
    kind: "learn"
  - title: "Confluence Cloud Copilot connector overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-cloud-overview"
    kind: "learn"
  - title: "Jira Cloud Microsoft 365 Copilot connector overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/jira-cloud-overview"
    kind: "learn"
  - title: "Manage access permissions for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Update externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-copilot-people-connectors-introduces-people-data-ingestions-with-differentiat"]
controls:
  - governs: "Whether a connection honours source ACLs or is visible to everyone"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Permissions"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    api: null
    note: "Needs the AI administrator role. Learn says access permissions cannot be updated after the connection is created."
  - governs: "Whether the ServiceNow Knowledge connector evaluates advanced script-based user criteria"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Connectors > Gallery > ServiceNow Knowledge"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/servicenow-knowledge-deployment"
    api: null
    note: "At the Choose flow based on user criteria step, pick Simple (default) or Advanced; Advanced needs the Scripted REST API set up in ServiceNow."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-23"
    note: "First briefing: records the Confluence and ServiceNow parent-level permission change, the Confluence page that disagrees with it, and that Jira is named only in the roadmap title."
version: 1
---

## What's changing

The roadmap item adds support for hierarchical access control lists (ACLs) in the Microsoft 365 Copilot connectors for ServiceNow, Confluence and Jira. The roadmap title names all three. The Microsoft 365 Copilot release notes for July 15, 2026 name only Confluence and ServiceNow, and say those connectors "now evaluate parent-level permissions when determining access to child items", where previously only child item permissions were considered.

For ServiceNow Knowledge, Learn defines the model: permissions are set at the knowledge base (parent) level and the article (child) level, and the system evaluates them together. The connector supports this. A July 1, 2026 release note (roadmap item 505438) adds that admins previously had to create new ServiceNow Knowledge and Catalog connections to adopt hierarchical permissions, and can now edit an existing connection to switch between the Simple and Advanced permission handling options.

For Confluence, the sources differ. The release note says the connector evaluates parent-level permissions. At the time of writing (November 2026), the Confluence Cloud setup page on Learn says "Permissions are managed only at the space and page level. Parent page permissions aren't considered." Both statements are reported here as published. That page also describes synced nested groups as usable for ACLs, which is a different meaning of nested from parent and child items.

For Jira, the Jira Cloud connector pages read for this briefing describe project permission schemes and issue-level security, and do not mention hierarchical or nested permissions. The roadmap item is Launched, General Availability, for Web, in Worldwide (Standard Multi-Tenant), with a target of April CY2026 and a preview date of March CY2026.

## Why it matters

These connectors copy ServiceNow and Confluence content into the Microsoft 365 index, so Copilot answers depend on the connector reproducing the source system's access rules. A connector that checks only the child item can show an article the parent knowledge base should hide, or hide one it should show. Microsoft's own release note describes the earlier behaviour as capable of "inconsistent access control".

Microsoft has not stated whether existing connections pick up parent-level evaluation without admin action, so treat results from existing ServiceNow and Confluence connections as something to re-test now rather than assume unchanged. Confluence in particular has conflicting statements on Microsoft's pages.

## Risk assessment

**Data exposure**

- ServiceNow Simple flow does not evaluate advanced script-based user criteria. On a Can Read path it skips the criterion, which Learn says might result in oversharing. On a Cannot Read path it treats the criterion as deny all, so that knowledge base or article is blocked for all users. The Advanced flow is the documented alternative.
- If the ServiceNow service account cannot read the sys_properties table, the connector defaults to the most restrictive settings, and articles without explicit user criteria can drop out of results. Where knowledge bases are in the HR Service Delivery scope and the account lacks the sn_hr_core.content_reader or sn_hr_core.admin role, Learn warns that HR-restricted articles can be indexed as accessible to all users.
- A connection set to **Visible to everyone** grants access to all users in the organisation, whatever the source ACLs say.

**Security & identity**

- Confluence maps users to Microsoft Entra ID by email address against the user principal name; where they differ, Learn says content might not appear for intended users until a mapping is configured.
- Parent-level permission changes are not picked up promptly. ServiceNow incremental crawls do not update permissions for articles whose knowledge base (parent) permissions changed, and Confluence permission changes are picked up only in the full crawl (once every 24 hours by default).

**Autonomy & actions**

- No change described: the connectors index content for search and Copilot grounding, and this feature changes how access to that content is evaluated.

**Change & support**

- Microsoft's Confluence setup page and release note disagree on parent permissions, so expect support questions about restricted Confluence child pages.
- The roadmap title includes Jira but the release note does not; set no expectation of nested permissions in the Jira connector until Microsoft documents it.

## Cost and licensing

The Learn page on connector prerequisites says the tenant must have Microsoft 365 licenses, that the surfaces available to users depend on the organisation's licensing, and that indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses. Its Microsoft 365 Copilot add-on licence requirement is stated for federated connectors, not synced ones such as Confluence and ServiceNow.

Microsoft Learn documents no separate licence, meter or price for hierarchical permissions at the time of writing (November 2026). The indirect cost is admin time: reviewing connection permissions, ServiceNow service-account access and identity mapping, and re-testing after the next full crawl.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) only. The ServiceNow Knowledge admin setup page adds that hierarchical permissions are not available in government or sovereign clouds or dedicated forests in multitenant environments.

To configure and deploy Copilot connectors you must be an AI administrator in the Microsoft 365 admin center, and for prebuilt synced connectors such as Confluence and ServiceNow you also need admin access to the external service. The Confluence Cloud connector supports Confluence Cloud only; Server and Data Center need a separate on-premises connector. The roadmap lists the Web platform and General Availability.

## Governance guidance

### Before rollout

- List every ServiceNow and Confluence connection under Copilot > Connectors > Your Connections and read its Permissions value; a connection set to Visible to everyone ignores source ACLs.
- Ask the ServiceNow admin whether any User Criteria uses advanced scripts, and choose the Advanced flow for connections that do.
- Confirm with the ServiceNow admin that the connector's service account can read sys_properties, and holds an HR Service Delivery role if those knowledge bases are indexed.
- Check that Confluence user emails match Microsoft Entra ID user principal names, or that a mapping rule exists.

### At rollout

- Test with a user who should be denied a ServiceNow article whose permissions are set at the knowledge base level, and with one who should be allowed it.
- Compare a Confluence page under a restricted parent page with what Confluence itself shows the same user, given the conflicting statements on parent permissions.
- Follow Microsoft's release-note steps: review parent and child permissions in the source and verify access control behaviour in Microsoft Copilot.

### After rollout

- Re-test after the next full crawl, because incremental crawls do not pick up parent-level permission changes in ServiceNow or any permission change in Confluence.
- Delete and recreate any connection whose access permissions are wrong, since Learn says updating them after creation is not supported.
- Watch the Microsoft 365 Copilot release notes for Jira Cloud statements.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a connection honours source ACLs or is visible to everyone</strong><br><small class="controls__note">Needs the AI administrator role. Learn says access permissions cannot be updated after the connection is created.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the ServiceNow Knowledge connector evaluates advanced script-based user criteria</strong><br><small class="controls__note">At the Choose flow based on user criteria step, pick Simple (default) or Advanced; Advanced needs the Scripted REST API set up in ServiceNow.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Connectors › Gallery › ServiceNow Knowledge <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/servicenow-knowledge-deployment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both rows are set in the Microsoft 365 admin center, which Learn says needs the AI administrator role. The access permissions setting cannot be changed on an existing connection, according to Learn, so a wrong choice means deleting and recreating the connection through Custom setup.

The Simple or Advanced flow applies to ServiceNow Knowledge. A July 1, 2026 release note says admins can now edit existing ServiceNow Knowledge and Catalog connections to switch between them. Settings inside ServiceNow (user criteria, sys_properties access, roles) and inside Confluence (space permissions, page restrictions) are made in those products, not in the Microsoft 365 admin center.

## Open questions

- Do existing Confluence and ServiceNow connections evaluate parent-level permissions automatically, or only after an admin change? Watch the release notes and the connector deployment pages.
- Which Confluence behaviour applies: the release note's parent-level evaluation or the setup page's statement that parent page permissions aren't considered?
- Will the Jira connectors get hierarchical or nested permissions, given the roadmap title names Jira and the release note does not?
- Is any admin switch or Graph or PowerShell setting planned for choosing the permission mode of a connection?

<!-- rationale
risk: Medium. The change alters which indexed ServiceNow and Confluence items users see in Copilot, and Learn says the ServiceNow Simple flow can skip or over-block script-based criteria; the connector's access setting covers it.
cost: Low. Learn states indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses; the cost is admin time to review permissions. No meter is documented for this feature.
impact: Medium. Only people whose tenant has a ServiceNow or Confluence connector notice it, but for them search and Copilot answers can show or hide items.
-->
