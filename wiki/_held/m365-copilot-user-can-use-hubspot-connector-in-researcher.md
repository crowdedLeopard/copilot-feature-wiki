---
title: "Microsoft 365 Copilot: HubSpot connector in the Researcher agent"
slug: "m365-copilot-user-can-use-hubspot-connector-in-researcher"
roadmapId: 501292
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Researcher users with a Microsoft 365 Copilot licence can pull HubSpot CRM data into answers. Admins control it through federated connector settings; Microsoft has not stated its default on arrival."
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
  model: "add-on"
  notes: "Microsoft's connector prerequisites page says federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7). A price specific to the HubSpot connector is not yet published."
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
      path: "Agents > Settings > Agent and plugin access"
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
      path: "Copilot connectors > Your connections > connector"
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
    note: "The page describes this control as Tools block / unblock; it does not say whether the HubSpot connector appears there."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-23"
    note: "First briefing for the HubSpot connector in Researcher, with the federated connector controls, licence requirement and open questions."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 74 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 65
  unconfirmed: 4
  contradicted: 5
  attempts: 1
  hash: "26255a954089a2d1e554c92db4bf7400"
---

## What's changing

Users of the Researcher agent in Microsoft 365 Copilot can use a HubSpot connector, so that Researcher can use third-party information from HubSpot to enrich the answers it generates. The roadmap item describes it in those terms and lists the platform as Web.

HubSpot is one of the federated Copilot connectors that Microsoft's overview page lists in its Connectors Gallery, under the CRM category. Microsoft describes federated connectors as using the Model Context Protocol (MCP) to read data in real time, using the user's identity and permissions, without indexing external data into Microsoft 365. Users find the data source in the **Sources** menu in the Researcher agent and sign in with their own credentials when prompted. Microsoft's overview page states that the Researcher agent does not support write, update or delete actions, so federated connectors stay read-only there.

The roadmap record gives the status as Launched, the release phase as General Availability, the target as November CY2025 and the cloud as Worldwide (Standard Multi-Tenant). Microsoft's Microsoft 365 Copilot release notes carry an entry for this item under November 4, 2026.

## Why it matters

This puts a third-party CRM inside a research tool that many users already open. The exposure is bounded by what each user can already see in HubSpot, but the data leaves HubSpot to reach Copilot answers, so a service owner should decide deliberately who gets it rather than find it in the Sources menu.

Microsoft has not stated whether the HubSpot connector is available to users by default in a tenant, so do not assume either way. The overview page says Microsoft-built connectors are available by default when **Allow agents and plugins built by Microsoft** is selected and the user is included in **User access**, and that external-publisher connectors are available only when **Allow agents and plugins built by external publishers** is selected or an admin turns the connector on. Which publisher type HubSpot falls under on the current pages is something to confirm in your own tenant's Your connections list.

## Risk assessment

**Data exposure**
- HubSpot records (contacts, deals, customer notes, whatever the user can open in HubSpot) can be retrieved into Researcher responses. Microsoft states that Copilot only accesses data the user already has permission to see and that no data is indexed into Microsoft 365. Limit the audience with staged rollout or **User access** if CRM data is sensitive.
- Responses are fetched dynamically through MCP, so the controls that apply are the connector's settings and HubSpot's own permissions, not Microsoft 365 indexing settings.

**Security & identity**
- Users authenticate with their own credentials, so access follows each person's HubSpot role. Microsoft's page states that OAuth 2.0 and encrypted communication secure access and authentication.
- Microsoft's overview page says that, if the MCP server restricts incoming traffic by source IP address, its firewall must allow the static egress IP addresses used by Microsoft 365 Copilot. Confirm whether this applies to HubSpot before changing any firewall rules.

**Autonomy & actions**
- Researcher does not support write, update or delete actions, so HubSpot stays read-only in this experience. Microsoft says write tools are part of a connector and are not enabled separately, which matters if your users also use HubSpot in other Copilot experiences; check the connector's tools in the admin centre where that view is available.

**Change & support**
- A connector can appear in the admin centre before users see it: Microsoft's earlier preview documentation described a seven-day admin-only review window for Microsoft-published connectors, but the current pages do not repeat it, so confirm in your tenant.
- Expect help-desk questions about why the source is missing for some users: a user sees a federated connector only when its publisher type is allowed, it is enabled, the user is in **User access** and staged rollout, and the user has a Microsoft 365 Copilot licence.

## Cost and licensing

Users need a Microsoft 365 Copilot add-on licence or Microsoft 365 E7. Microsoft's prerequisites page states: "Federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on license (or Microsoft 365 E7). They aren't supported with Copilot Studio licenses or Microsoft 365 Copilot pay-as-you-go." The same page lists a Microsoft 365 Copilot add-on licence for every user who queries a federated source as a prerequisite.

Microsoft Learn publishes no separate meter or price for the HubSpot connector at the time of writing (November 2026), and a Copilot Credits rate specific to it is not yet published. Any cost of the HubSpot subscription itself is outside Microsoft's pages and is not stated there.

The indirect cost is admin time to review the connector, set staged rollout and brief users.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud, Web as the platform and General Availability as the release phase.

Per Microsoft's overview page, a user sees a federated connector only when its publisher type is allowed in **Agent and plugin access** (or an admin turned the connector on individually), the connector is enabled, the user is in **User access** and in the connector's staged rollout, and the user has a Microsoft 365 Copilot licence.

To manage federated connectors, Microsoft's management page says you need the Global Administrator or Search Administrator role. The connector prerequisites page says that to configure and deploy Copilot connectors you must be an AI administrator in the Microsoft 365 admin center. The two pages name different roles, so confirm which applies to you.

## Governance guidance

### Before rollout
- Check **Copilot connectors** > **Your connections** in the Microsoft 365 admin center for the HubSpot connector and note its enabled state and staged rollout.
- Decide which HubSpot users should have it, and confirm they hold a Microsoft 365 Copilot add-on licence or Microsoft 365 E7.
- Review the connector's capabilities and privacy terms against your acceptable-use rules, as Microsoft advises for connectors, and ask the HubSpot owner which data users can reach in HubSpot.

### At rollout
- Set **Add staging** in the **Staged rollout** column to a pilot group before opening the connector to everyone, or disable the connector if the review is not finished.
- Check **Agents** > **Settings** > **User access** so it matches the audience you intend, because staging cannot widen it.
- Tell pilot users that they find HubSpot under **Sources** in Researcher, sign in with their own credentials and can turn the source off there.

### After rollout
- Test as a pilot user that HubSpot appears in Researcher's **Sources** menu, allowing up to 10 minutes for a change to take effect, as Microsoft states.
- Review Microsoft Purview audit for connector activity; Microsoft says admins can audit federated connector activity there.
- Re-check **Your connections** periodically, because Microsoft says publishers can add or change tools over time.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which publisher types of federated connectors are available, including future ones</strong><br><small>Tenant</small><br><small class="controls__note">Clearing a publisher type sets that type's connectors' staged rollout to No users. Roles named on the page: Global Administrator or Search Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide ceiling on which users can use any agent, plugin or connector</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), Specific users or groups, No users. Connector staging can narrow but not widen this population.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual connector such as HubSpot is enabled</strong><br><small>Tenant</small><br><small class="controls__note">The connector's pane has an enable or disable control; the page's table calls it Enable / Disable.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot connectors › Your connections › connector <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups get an individual connector (staged rollout)</strong><br><small>Group</small><br><small class="controls__note">Limits a connector to specific users or Microsoft Entra ID groups, within the User access population.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot connectors › Your connections › Staged rollout › Add staging <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tool-level and connector-level blocking</strong><br><small>Tenant</small><br><small class="controls__note">The page describes this control as Tools block / unblock; it does not say whether the HubSpot connector appears there.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Settings combine as follows: a setting on an individual connector takes precedence over the bulk **Agent and plugin access** setting, and **User access** always applies. Clearing a publisher type sets that type's connectors' staged rollout to **No users**; individual connectors can then be turned on from **Your connections**. Changes can take up to 10 minutes to take effect.

No row gives an API because Microsoft Learn documents no API for these connector settings at the time of writing (November 2026). Microsoft documents no setting specific to the HubSpot connector beyond the connector-level ones listed. Audit of connector activity is in Microsoft Purview, which Microsoft's overview page names without giving a path.

## Open questions

- Is the HubSpot connector Microsoft-built or partner-published, and so which **Agent and plugin access** option decides its default availability? Watch the Federated connectors overview page and your tenant's Your connections list.
- Is the HubSpot connector available to users on arrival, or does an admin have to enable it? Microsoft has not stated this for this connector.
- Is a seven-day admin-only review window still applied to new connectors? An earlier preview page described one; the current pages do not mention it.
- Does the HubSpot connector consume Copilot Credits or carry any charge beyond the Microsoft 365 Copilot licence? Watch the connector prerequisites page.

<!-- rationale
risk: Medium. HubSpot data can reach Researcher answers under each user's own HubSpot permissions, and existing connector controls cover it, but Microsoft has not stated whether it is available by default.
cost: Low. The connector needs a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) that users must already hold; Microsoft Learn publishes no separate charge or meter for the HubSpot connector.
impact: Medium. Sales, marketing and other HubSpot users with a Copilot licence notice it in Researcher's Sources menu; admins see a new connector in Your connections.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; summary; Why it matters; Open questions; rationale: risk / default: Microsoft has not stated whether the HubSpot connector is available by default on arrival. | Found: Federated connectors are enabled by default for a tenant. ... When a Microsoft-published federated connector first appears in the admin center, it's available only to admins for seven calendar days before it's available to users. | Fix: Replace the blanket absence in the summary, Why it matters, Open questions and risk rationale with: 'Earlier preview documentation described federated connectors, including HubSpot, as enabled by default after a seven-calendar-day admin review window; the current overview instead describes availability through publisher-type, User access and connector settings.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview. Retain defaultState unknown for the current arrival state rather than treating the historical preview default as a current commitment. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls
- [unsupported, major] Risk assessment: Data exposure / behaviour: The HubSpot connector retrieves contacts into Researcher responses. | Found: Searched: 'HubSpot Researcher connector contacts deals customer notes supported tools configuration'; read overview and release notes. Contact-table results describe Lakeflow Connect, not the Researcher federated connector. | Fix: Remove 'contacts' from the parenthetical list; the verified replacement for the whole sentence is 'Researcher can retrieve relevant HubSpot information through the connector, within the user's source-system permissions.'
- [unsupported, major] Risk assessment: Data exposure / behaviour: The HubSpot connector retrieves deals into Researcher responses. | Found: Searched: 'HubSpot Researcher connector contacts deals customer notes supported tools configuration'; read overview and release notes. Deal-table results concern Lakeflow Connect, not Researcher. | Fix: Remove 'deals' from the parenthetical list; use 'Researcher can retrieve relevant HubSpot information through the connector, within the user's source-system permissions.'
- [unsupported, major] Risk assessment: Data exposure / behaviour: The HubSpot connector retrieves customer notes into Researcher responses. | Found: Searched: 'HubSpot Researcher connector contacts deals customer notes supported tools configuration'; read overview and release notes. Neither specifies customer notes for this connector. | Fix: Remove 'customer notes' from the parenthetical list; use 'Researcher can retrieve relevant HubSpot information through the connector, within the user's source-system permissions.'
- [unsupported, major] Risk assessment: Data exposure / behaviour: The connector can retrieve whatever the user can open in HubSpot. | Found: Searched: 'HubSpot Researcher connector contacts deals customer notes supported tools configuration'; read overview and release notes. Source permissions bound access, but no text says the connector exposes every record the user can open. | Fix: Remove 'whatever the user can open in HubSpot'; use 'Researcher can retrieve relevant HubSpot information through the connector, within the user's source-system permissions.'
- [contradicted, blocker] Risk assessment: Change & support; Scope / availability: The risk paragraph makes an allowed publisher type mandatory for visibility, although Scope allows individual enablement. | Found: The connector's publisher type is allowed in Agent and plugin access, or an admin turned on the connector individually. | Fix: In Risk assessment: Change & support, replace 'only when its publisher type is allowed' with 'only when its publisher type is allowed or an admin has turned on the connector individually'. Keep the remaining enabled, User access, staged rollout and licence conditions. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, blocker] front matter: licensing.model / licensing: The HubSpot connector's entitlement model is add-on rather than included in the licence Copilot already needs. | Found: Microsoft 365 Copilot is an add-on to Microsoft 365. If your organization has Microsoft 365 Copilot licenses, connector grounding in Copilot is included, and no extra charges apply. | Fix: Set licensing.model to 'included'. Keep the Microsoft 365 Copilot add-on or Microsoft 365 E7 requirement in licensing.notes, and add 'Connector grounding in Copilot is included for organisations with Microsoft 365 Copilot licences, and no extra charges apply' with https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites
- [contradicted, blocker] rationale: cost; Open questions / absence: Microsoft has not published whether connector use carries an extra charge beyond the Copilot licence. | Found: If your organization has Microsoft 365 Copilot licenses, connector grounding in Copilot is included, and no extra charges apply. | Fix: Replace the rationale's 'Microsoft Learn publishes no separate charge or meter for the HubSpot connector' with 'Microsoft says connector grounding in Copilot is included for organisations with Microsoft 365 Copilot licences and no extra charges apply'. State the same qualification in Cost and licensing and remove the open question about charges beyond that licence. Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites. The narrower absence of a HubSpot-specific numeric rate can remain. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Open questions / absence: The current overview does not identify HubSpot's publisher type. | Found: Searched: 'HubSpot federated connector Researcher default publisher seven calendar days contacts deals notes'; read current overview and preview search excerpts. Current gallery lists HubSpot without a publisher; preview text lists it under Microsoft-published connectors. | Fix: Narrow the open question to the current publisher classification and add: 'Earlier preview documentation listed HubSpot under Microsoft-published federated connectors.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Publisher-type availability is controlled at Microsoft 365 admin center > Agents > Settings > Agent and plugin access. | Found: In the Microsoft 365 admin center, go to Agents > Settings > Agent and plugin access. ... Clear the publisher types you want to block. | Fix: Extend controls[0].ui.path to 'Agents > Settings > Agent and plugin access > publisher type' so it ends at the deciding option. The documented options are 'Allow agents and plugins built by Microsoft', 'Allow agents and plugins built by your organization' and 'Allow agents and plugins built by external publishers'. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [supported, minor] controls[2].ui; Governance controls table; Governance guidance / admin-path: An individual connector's enable control is reached through Copilot connectors > Your connections > connector. | Found: Admins can manage federated Copilot connectors ... by choosing Copilot connectors > Your connections. ... Screenshot of the HubSpot connector in the admin center with Staged rollout and Enable/disable data source highlighted. | Fix: Extend controls[2].ui.path to 'Copilot connectors > Your connections > connector > Enable/disable data source'. The cited overview's HubSpot screenshot caption identifies that control; the current path stops on its pane. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] controls[3].ui; Governance controls table; Governance guidance: At rollout / admin-path: Staged rollout is set through Copilot connectors > Your connections > Staged rollout > Add staging. | Found: Limit a connector to specific users or Microsoft Entra ID groups by choosing Add staging in the Staged rollout column. | Fix: Use 'Copilot connectors > Your connections > connector > Staged rollout > Add staging' in controls[3].ui.path; 'connector' identifies the target row whose Staged rollout column is being used. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] controls[4].note; Governance controls table / applicability: The documented general Tools blocking control is not specifically confirmed for HubSpot in the management page. | Found: Control | Location | What it does for connectors ... Tools block / unblock | Agents > Tools | Tool-level and connector-level blocking. | Fix: Replace controls[4].note with 'Microsoft describes this as Tools block / unblock for tool-level and connector-level blocking of federated connectors.' The table already gives its reach in this connector class; a HubSpot-specific confirmation caveat is unnecessary. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [supported, minor] Governance guidance: Before rollout / behaviour: Microsoft advises reviewing connector capabilities and privacy terms against acceptable-use rules. | Found: Before enabling or continuing to use a connector that exposes write, update, or delete tools, review the connector's capabilities, privacy terms, and third-party agreements against your organization's security, compliance, and acceptable-use requirements. | Fix: Remove 'as Microsoft advises for connectors' from the checklist item, leaving the review as the wiki's advice. Microsoft's stated recommendation is qualified to connectors exposing write, update or delete tools, while this Researcher experience is read-only. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Some connectors expose an admin-centre tool view that administrators can review. | Found: View a connector's tools in the admin center (Coming soon) ... For connectors that support this feature, the details page in the Microsoft 365 admin center includes a Tools section | Fix: Replace 'check the connector's tools in the admin centre where that view is available' with 'check the connector's tools in the admin centre where that view is available; Microsoft labels this admin tool view Coming soon'. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells administrators to review Purview audit, but the controls table contains no audit row. | Found: Review Microsoft Purview audit for connector activity; Microsoft says admins can audit federated connector activity there. ... The five controls rows cover publisher access, User access, enablement, staged rollout and blocking, not audit. | Fix: Remove the 'Review Microsoft Purview audit for connector activity' checklist bullet. Keep the verified statement about Purview auditing in Governance controls; do not add an unverified audit path or a new controls row.
-->
