---
title: "Microsoft 365 Copilot connectors: space and CQL filters for what the Confluence connectors index"
slug: "m365-copilot-support-for-refining-query-filters-for-confluence-copilot-connectors"
roadmapId: 503571
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Admins can narrow which Confluence pages the Cloud and On-premises Copilot connectors index, by space, date or a CQL query. Nothing changes until an admin sets a filter; On-premises CQL needs connector agent 3.1.22 or later."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Synced connectors are covered by Microsoft 365 licences for Microsoft Search. Copilot grounding needs the Microsoft 365 Copilot add-on or Microsoft 365 E7 (connector prerequisites page). Microsoft publishes no separate licence for the filters."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["confluence","copilot-connectors","m365-copilot","m365-admin-center","admin-controls","data-governance"]
sources:
  - title: "Deploy the Confluence Cloud connector in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-cloud-deployment"
    kind: "learn"
  - title: "Deploy the Confluence On-premises Copilot connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-onpremises-deployment"
    kind: "learn"
  - title: "Confluence On-premises Copilot connector overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-onpremises-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Microsoft Copilot Search frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-faq"
    kind: "learn"
  - title: "externalConnection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 503571"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503571"
    kind: "roadmap"
videos: []
related: ["copilot-connectors","m365-copilot-admins-can-now-edit-user-mappings-and-query-filters-for-servicenow-connector","m365-copilot-admins-can-manage-access-more-precisely-with-support-for-nested-permissions-i","m365-copilot-copilot-extensibility-adminx-pre-setup-guides-editability-actionable-errors-a"]
controls:
  - governs: "Which Confluence Cloud spaces and pages (by CQL) a connection indexes"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Connectors > Gallery > Confluence Cloud > Custom setup > Include or exclude data"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-cloud-deployment"
    api: null
    note: "Set per connection. The Include or exclude data label is from the November 17, 2026 release notes. Preview results checks the CQL string."
  - governs: "Which Confluence On-premises spaces, date ranges and CQL-matched pages a connection indexes"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Gallery > Confluence On-premises > Custom setup"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-onpremises-deployment"
    api: null
    note: "Set the space filter, Last Created Date or Last Modified Date range, and CQL string in content settings. CQL needs Microsoft Graph Connector Agent 3.1.22 or later."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-27"
    note: "New briefing: space, date and CQL filters for the Confluence Cloud and On-premises connectors, with the agent version needed for On-premises CQL."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 54
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "7d813fd86b772d2e5e05af08b8c3741c"
---

## What's changing

Admins get more ways to limit which Confluence content the Microsoft-built Copilot connectors index into Microsoft 365, where Copilot and Microsoft Search use it.

**Confluence Cloud.** The deployment page says that by default the connector indexes all blogs and pages. Admins can include or exclude spaces and, for advanced scenarios, enter a Confluence Query Language (CQL) string that sets which pages sync, for example `lastModified >= "2024/12/31"`. **Preview results** shows sample values for the selected properties and CQL string before the connection is created.

**Confluence On-premises** (self-hosted Confluence Data Center or Server). Admins can include or exclude spaces by space key, filter pages by **Last Created Date** or **Last Modified Date**, and enter a CQL string. The CQL filter needs Microsoft Graph Connector Agent version 3.1.22 or later.

**Status and differences between sources.** The roadmap item is Launched, with general availability targeted for May CY2026 after a preview in March CY2026. The roadmap describes simplified filters for the Cloud connector (page ID, creation date/time and last update date/time) and CQL for the On-premises connector. The Microsoft 365 Copilot release notes for November 17, 2026 link this roadmap ID to space and CQL filters for the Cloud connector. The Cloud deployment page documents space and CQL filters but has no separate page ID or date fields at the time of writing (November 2026).

## Why it matters

With these filters, a connection no longer has to index everything the crawl account can read. A CQL date condition can keep old Confluence pages out of Copilot answers, and space filters can leave out spaces that are not meant for Copilot. Narrowing the index also cuts what each crawl has to process. It does not replace Confluence permissions: by default, results are shown only to people with access in Confluence.

If nobody acts, the documented default stays in place: Cloud connections index all blogs and pages, and On-premises connections include all spaces. Tenants without a Confluence connection see no change.

## Risk assessment

**Data exposure**
- A filter only narrows what is indexed. A connection set to the **Everyone** access permission shows indexed data to all users whatever the filter, so check that setting before relying on a filter to keep a space out of view.
- A badly written CQL string can leave in content an admin meant to exclude. **Preview results** on the Cloud connector shows sample values before you create the connection.

**Security & identity**
- No change. Identity mapping and the permission model stay as they are. Permission changes still sync only during full crawls, which run every 24 hours by default.

**Autonomy & actions**
- No change. The filters govern what is indexed and add no actions.

**Change & support**
- On-premises CQL fails without agent version 3.1.22 or later on the Windows computer that runs the Microsoft Graph connector agent.
- The manage-connections page lists query string editing on published connections for ServiceNow only. It says that to stop indexing items, you delete the connection and create a new one with an exclusion filter. Plan filters before the first crawl.

## Cost and licensing

- **Licence.** The connector prerequisites page says indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences. Any Microsoft 365 plan covers synced connectors in Microsoft Search. Copilot grounding needs the Microsoft 365 Copilot add-on or Microsoft 365 E7, and with Microsoft 365 Copilot licences connector grounding is included with no extra charges.
- **Conflicting statement.** The Copilot Search FAQ says Copilot connectors are licensed separately and may need Microsoft 365 E5, Microsoft Viva or additional capacity units, depending on the volume and type of data indexed.
- **Meter.** Microsoft publishes no meter or separate price for the filters themselves.
- **Indirect costs.** Admin time to write and test CQL, and for On-premises, upgrading the connector agent to 3.1.22 or later.

## Scope

- **Connectors:** the Microsoft-built Confluence Cloud and Confluence On-premises Copilot connectors, set up in the Microsoft 365 admin center.
- **Roles:** the connector prerequisites page names the AI administrator role. Each Confluence deployment page also lists a Confluence admin for the source-side setup.
- **On-premises prerequisites:** Confluence version 8.0 or higher, the Microsoft Graph connector agent on a Windows computer on the same network as the Confluence server, and agent 3.1.22 or later for CQL.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant). **Platform:** Web.

## Governance guidance

### Before rollout
- List existing Confluence Cloud and On-premises connections in Microsoft 365 admin center > Copilot > Connectors > Your Connections, and note each one's access permission setting.
- Decide with Confluence space owners which spaces and date ranges belong in Copilot, and draft the CQL for each connection.
- Upgrade the Microsoft Graph connector agent to 3.1.22 or later before using CQL on an On-premises connection.

### At rollout
- Enter space filters and CQL under **Custom setup** when creating the connection, and check them with **Preview results** on Confluence Cloud.
- Use **Rollout to limited audience** to test a filtered connection with a small group before wider release.

### After rollout
- Check the connection state and last sync time on **Your Connections** after the first full crawl.
- Test in Copilot that pages from excluded spaces or outside the CQL date range no longer appear.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Confluence Cloud spaces and pages (by CQL) a connection indexes</strong><br><small class="controls__note">Set per connection. The Include or exclude data label is from the November 17, 2026 release notes. Preview results checks the CQL string.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Connectors › Gallery › Confluence Cloud › Custom setup › Include or exclude data <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-cloud-deployment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Confluence On-premises spaces, date ranges and CQL-matched pages a connection indexes</strong><br><small class="controls__note">Set the space filter, Last Created Date or Last Modified Date range, and CQL string in content settings. CQL needs Microsoft Graph Connector Agent 3.1.22 or later.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Gallery › Confluence On-premises › Custom setup <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-onpremises-deployment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The filters are set per connection by an AI administrator, inside the connector's **Custom setup**. The manage-connections page lists query string editing on published connections for ServiceNow only, so changing a Confluence filter after publishing may mean deleting the connection and creating a new one. The filters decide what is indexed, while the connection's access permission setting decides who sees it. Microsoft Graph's externalConnection resource, which manages custom connections, has no property for these filters at the time of writing (November 2026).

## Open questions

- Will the Confluence Cloud connector get the page ID, creation date/time and last update date/time filters the roadmap describes, or do space and CQL filters fully deliver this item? Watch the Cloud deployment page.
- Can space and CQL filters be edited on a published Confluence connection, or does a change need the connection to be deleted and recreated? Watch the manage-connections page.
- When a filter narrows an existing connection, are pages that fall outside it removed from the index at the next full crawl?
- Will Microsoft document a Graph or PowerShell way to set Confluence connector filters?

<!-- rationale
risk: Low. This is an optional filter that narrows what a Confluence connection indexes. Microsoft Learn says the connector indexes all blogs and pages by default, so existing behaviour continues until an admin sets one.
cost: Low. Microsoft Learn says indexing synced connector data costs nothing extra for tenants with Microsoft 365 licences. The only cost is admin time, plus a connector agent upgrade for On-premises CQL.
impact: Low. Only connector admins see the new options. Users notice only that Copilot and Microsoft Search return fewer, more current Confluence pages once a filter is applied.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Cloud filter is at Microsoft 365 admin center > Copilot > Connectors > Connectors > Gallery > Confluence Cloud > Custom setup > Include or exclude data. | Found: Choose the **Connectors** tab, and in the left pane, choose **Gallery**. | Fix: Include the intervening content-settings heading: 'Copilot > Connectors > Connectors > Gallery > Confluence Cloud > Custom setup > Customize content settings > Include or exclude data', as documented at https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-cloud-deployment. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-cloud-deployment
- [supported, minor] controls[1].ui; Governance controls table / admin-path: On-premises filter setup is at Microsoft 365 admin center > Copilot > Connectors > Gallery > Confluence On-premises > Custom setup. | Found: To customize settings, on the connector page in the admin center, select **Custom setup**. | Fix: Complete the path to the documented filter section: 'Copilot > Connectors > Gallery > Confluence On-premises > Custom setup > Customize content settings', at https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-onpremises-deployment. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-onpremises-deployment
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls table / consistency: The checklist names access permissions and limited-audience rollout controls that have no corresponding controls-table rows. | Found: note each one's access permission setting; Use Rollout to limited audience; the table contains only Cloud and On-premises indexing-filter controls. | Fix: The checklist's access-permission review and Rollout to limited audience steps have no corresponding table rows. Remove those two checklist instructions to make the checklist match the existing table.
-->
