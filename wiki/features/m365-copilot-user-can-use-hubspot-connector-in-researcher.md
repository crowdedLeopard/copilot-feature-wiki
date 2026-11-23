---
title: "Microsoft 365 Copilot: HubSpot connector in the Researcher agent"
slug: "m365-copilot-user-can-use-hubspot-connector-in-researcher"
roadmapId: 501292
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Researcher users with a Microsoft 365 Copilot licence can use HubSpot information in answers. Earlier preview docs described it as on by default after a seven-day admin review; current docs describe publisher-type and connector settings."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's connector prerequisites page says federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7). Connector grounding in Copilot is included for organisations with Microsoft 365 Copilot licences, and no extra charges apply."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["researcher","federated-connectors","copilot-connectors","m365-copilot","mcp","third-party-apps","agent-and-plugin-access","licensing"]
sources:
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 501292"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501292"
    kind: "roadmap"
videos: []
related: ["m365-copilot-federated-copilot-connectors-in-m365-copilot","m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","copilot-connectors","mcp","m365-copilot-federated-connectors-write-update-delete"]
controls:
  - governs: "Which publisher types of federated connectors are available, including future ones"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access > publisher type"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Clearing a publisher type sets that type's connectors' staged rollout to No users. Roles named on the page: Global Administrator or Search Administrator."
  - governs: "Tenant-wide ceiling on which users can use any agent, plugin or connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Options: All users (default), Specific users or groups, No users. Connector staging can narrow but not widen this population."
  - governs: "Whether an individual connector such as HubSpot is enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot connectors > Your connections > connector > Enable/disable data source"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    api: null
    note: "The connector's pane has an enable or disable control; the page's table calls it Enable / Disable."
  - governs: "Which users or groups get an individual connector (staged rollout)"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot connectors > Your connections > Staged rollout > Add staging"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    api: null
    note: "Limits a connector to specific users or Microsoft Entra ID groups, within the User access population."
  - governs: "Tool-level and connector-level blocking"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Microsoft describes this as Tools block / unblock for tool-level and connector-level blocking of federated connectors."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-23"
    note: "First briefing for the HubSpot connector in Researcher, with the federated connector controls, licence requirement and open questions."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 74 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: licensing is now included with the Copilot licence, the default-state wording cites earlier preview documentation, and unsupported HubSpot data examples are removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 69 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the admin path for per-connector staged rollout: Add staging is in the Staged rollout column of Your connections, not inside a connector's pane."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 61 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9862281605edd15135be56c6bed0fda9"
---

## What's changing

Users of the Researcher agent in Microsoft 365 Copilot can use a HubSpot connector, so that Researcher can use third-party information from HubSpot to enrich the answers it generates. The roadmap item describes it in those terms and lists the platform as Web.

HubSpot is one of the federated Copilot connectors that Microsoft's overview page lists in its Connectors Gallery, under the CRM category. Microsoft describes federated connectors as using the Model Context Protocol (MCP) to read data in real time, using the user's identity and permissions, without indexing external data into Microsoft 365. Users find the data source in the **Sources** menu in the Researcher agent and sign in with their own credentials when prompted. Microsoft's overview page states that the Researcher agent does not support write, update or delete actions, so federated connectors stay read-only there.

The roadmap record gives the status as Launched, the release phase as General Availability, the target as November CY2025 and the cloud as Worldwide (Standard Multi-Tenant). Microsoft's Microsoft 365 Copilot release notes carry an entry for this item under November 4, 2026.

## Why it matters

This puts a third-party CRM inside a research tool that many users already open. The exposure is bounded by what each user can already see in HubSpot, but the data leaves HubSpot to reach Copilot answers, so a service owner should decide deliberately who gets it rather than find it in the Sources menu.

Earlier preview documentation described federated connectors, including HubSpot, as enabled by default after a seven-calendar-day admin review window; the current overview instead describes availability through publisher-type, User access and connector settings. Microsoft's current pages do not state a default arrival state for the HubSpot connector, so do not treat the preview default as a current commitment. The overview page says Microsoft-built connectors are available by default when **Allow agents and plugins built by Microsoft** is selected and the user is included in **User access**, and that external-publisher connectors are available only when **Allow agents and plugins built by external publishers** is selected or an admin turns the connector on. Earlier preview documentation listed HubSpot under Microsoft-published federated connectors; which publisher type HubSpot falls under on the current pages is something to confirm in your own tenant's Your connections list.

## Risk assessment

**Data exposure**
- Researcher can retrieve relevant HubSpot information through the connector, within the user's source-system permissions. Microsoft states that Copilot only accesses data the user already has permission to see and that no data is indexed into Microsoft 365. Limit the audience with staged rollout or **User access** if CRM data is sensitive.
- Responses are fetched dynamically through MCP, so the controls that apply are the connector's settings and HubSpot's own permissions, not Microsoft 365 indexing settings.

**Security & identity**
- Users authenticate with their own credentials, so access follows each person's HubSpot role. Microsoft's page states that OAuth 2.0 and encrypted communication secure access and authentication.
- Microsoft's overview page says that, if the MCP server restricts incoming traffic by source IP address, its firewall must allow the static egress IP addresses used by Microsoft 365 Copilot. Confirm whether this applies to HubSpot before changing any firewall rules.

**Autonomy & actions**
- Researcher does not support write, update or delete actions, so HubSpot stays read-only in this experience. Microsoft says write tools are part of a connector and are not enabled separately, which matters if your users also use HubSpot in other Copilot experiences; check the connector's tools in the admin centre where that view is available; Microsoft labels this admin tool view Coming soon.

**Change & support**
- A connector can appear in the admin centre before users see it: Microsoft's earlier preview documentation described a seven-day admin-only review window for Microsoft-published connectors, but the current pages do not repeat it, so confirm in your tenant.
- Expect help-desk questions about why the source is missing for some users: a user sees a federated connector only when its publisher type is allowed or an admin has turned on the connector individually, it is enabled, the user is in **User access** and staged rollout, and the user has a Microsoft 365 Copilot licence.

## Cost and licensing

Users need a Microsoft 365 Copilot add-on licence or Microsoft 365 E7. Microsoft's prerequisites page states: "Federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on license (or Microsoft 365 E7). They aren't supported with Copilot Studio licenses or Microsoft 365 Copilot pay-as-you-go." The same page lists a Microsoft 365 Copilot add-on licence for every user who queries a federated source as a prerequisite.

The same page also says: "If your organization has Microsoft 365 Copilot licenses, connector grounding in Copilot is included, and no extra charges apply." Any cost of the HubSpot subscription itself is outside Microsoft's pages and is not stated there.

The indirect cost is admin time to review the connector, set staged rollout and brief users.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud, Web as the platform and General Availability as the release phase.

Per Microsoft's overview page, a user sees a federated connector only when its publisher type is allowed in **Agent and plugin access** (or an admin turned the connector on individually), the connector is enabled, the user is in **User access** and in the connector's staged rollout, and the user has a Microsoft 365 Copilot licence.

To manage federated connectors, Microsoft's management page says you need the Global Administrator or Search Administrator role. The connector prerequisites page says that to configure and deploy Copilot connectors you must be an AI administrator in the Microsoft 365 admin center. The two pages name different roles, so confirm which applies to you.

## Governance guidance

### Before rollout
- Check **Copilot connectors** > **Your connections** in the Microsoft 365 admin center for the HubSpot connector and note its enabled state and staged rollout.
- Decide which HubSpot users should have it, and confirm they hold a Microsoft 365 Copilot add-on licence or Microsoft 365 E7.
- Review the connector's capabilities and privacy terms against your acceptable-use rules, and ask the HubSpot owner which data users can reach in HubSpot.

### At rollout
- Set **Add staging** in the **Staged rollout** column to a pilot group before opening the connector to everyone, or disable the connector if the review is not finished.
- Check **Agents** > **Settings** > **User access** so it matches the audience you intend, because staging cannot widen it.
- Tell pilot users that they find HubSpot under **Sources** in Researcher, sign in with their own credentials and can turn the source off there.

### After rollout
- Test as a pilot user that HubSpot appears in Researcher's **Sources** menu, allowing up to 10 minutes for a change to take effect, as Microsoft states.
- Re-check **Your connections** periodically, because Microsoft says publishers can add or change tools over time.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which publisher types of federated connectors are available, including future ones</strong><br><small>Tenant</small><br><small class="controls__note">Clearing a publisher type sets that type's connectors' staged rollout to No users. Roles named on the page: Global Administrator or Search Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access › publisher type <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide ceiling on which users can use any agent, plugin or connector</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), Specific users or groups, No users. Connector staging can narrow but not widen this population.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual connector such as HubSpot is enabled</strong><br><small>Tenant</small><br><small class="controls__note">The connector's pane has an enable or disable control; the page's table calls it Enable / Disable.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot connectors › Your connections › connector › Enable/disable data source <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups get an individual connector (staged rollout)</strong><br><small>Group</small><br><small class="controls__note">Limits a connector to specific users or Microsoft Entra ID groups, within the User access population.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot connectors › Your connections › Staged rollout › Add staging <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tool-level and connector-level blocking</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft describes this as Tools block / unblock for tool-level and connector-level blocking of federated connectors.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Settings combine as follows: a setting on an individual connector takes precedence over the bulk **Agent and plugin access** setting, and **User access** always applies. Clearing a publisher type sets that type's connectors' staged rollout to **No users**; individual connectors can then be turned on from **Your connections**. Changes can take up to 10 minutes to take effect.

No row gives an API because Microsoft Learn documents no API for these connector settings at the time of writing (November 2026). Microsoft documents no setting specific to the HubSpot connector beyond the connector-level ones listed. Audit of connector activity is in Microsoft Purview, which Microsoft's overview page names without giving a path.

## Open questions

- Is the HubSpot connector currently classified as Microsoft-built or partner-published, and so which **Agent and plugin access** option decides its availability? Earlier preview documentation listed HubSpot under Microsoft-published federated connectors; the current gallery lists it without a publisher. Watch the Federated connectors overview page and your tenant's Your connections list.
- Is the HubSpot connector available to users on arrival? Earlier preview documentation described federated connectors, including HubSpot, as enabled by default after a seven-calendar-day admin review window; the current overview instead describes availability through publisher-type, User access and connector settings, and does not state which applies to HubSpot.
- Is a seven-day admin-only review window still applied to new connectors? An earlier preview page described one; the current pages do not mention it.

<!-- rationale
risk: Medium. HubSpot data can reach Researcher answers under each user's own HubSpot permissions, and existing connector controls cover it, but the current pages do not state whether it is available by default on arrival.
cost: Low. The connector needs a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) that users must already hold; Microsoft says connector grounding in Copilot is included for organisations with Microsoft 365 Copilot licences and no extra charges apply.
impact: Medium. Sales, marketing and other HubSpot users with a Copilot licence notice it in Researcher's Sources menu; admins see a new connector in Your connections.
-->
