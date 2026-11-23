---
title: "Microsoft 365 Copilot Chat: filter responses by content source"
slug: "m365-copilot-copilot-extensibility-improved-discovery-of-copilot-connector-sources-in-m365"
roadmapId: 502541
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Licensed Copilot users can limit a Copilot Chat prompt to chosen content sources, including connectors. It is on by default and Microsoft says no action is required, but connector names and health decide what users see."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "MC1548004 says the feature is enabled by default for users with a Microsoft 365 Copilot licence. Learn says connector grounding in Copilot is included with Microsoft 365 Copilot licences; no price specific to the filter is published."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["m365-copilot","copilot-chat","copilot-connectors","federated-connectors","knowledge-grounding","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap 502541"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502541"
    kind: "roadmap"
  - title: "MC1548004: Microsoft 365 Copilot Chat: Filter responses by content source"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1548004"
    kind: "message-center"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-copilot-discover-graph-connector-prompts-in-the-prompt-gallery-when-using-copilot-cha"]
controls:
  - governs: "Tenant switch for the content source selector in Copilot Chat"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1548004 says the feature is enabled by default for users with a Microsoft 365 Copilot licence."
  - governs: "Which publisher types of federated connectors are available to users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Clearing a publisher type sets that type's federated connectors to No users; individual connector settings take precedence."
  - governs: "Tenant-wide ceiling on who can use agents, plugins and federated connectors"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Options are All users (default), Specific users or groups, and No users."
  - governs: "Which users or groups get an individual federated connector"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connector > Staged rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Narrows the User access population; it cannot widen it."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-07T23:01:35"
changes:
  - date: "2026-11-23"
    note: "New briefing: Copilot Chat content source filter, on by default per MC1548004, with federated connector controls and open questions."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 63 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 61
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "9a9df4e29cf0bf9ea90f6a5663a76762"
---

## What's changing

Microsoft 365 Copilot Chat gets a content source filter: users can scope a single prompt to one or more content sources, so that Copilot grounds its response only in the sources they select. The roadmap item describes it as improved discovery of Copilot connector sources, with content source filters.

Microsoft's notice MC1548004 (published 2026-11-10) says a source selection control appears in the Copilot Chat prompt area. The available sources reflect the content sources enabled in your tenant, including Graph connectors and federated connectors available to users. If no source is selected, Copilot Chat uses its default orchestration across available sources. Responses keep citations that reflect the selected sources, and the selection applies only to the current prompt and does not persist across sessions.

The roadmap record lists the item as Launched, with a target of September CY2026, General Availability, Web, Worldwide (Standard Multi-Tenant). MC1548004 gives a later rollout window: it begins in mid-November 2026 and is expected to complete in mid-November 2026. The notice sets no act-by date and says no action is required. Microsoft Learn has no page for the filter itself at the time of writing (November 2026), so its behaviour here is the roadmap's and the notice's description.

## Why it matters

The filter changes how users steer Copilot, not what they may see. MC1548004 says data access, compliance boundaries and tenant data handling remain unchanged, so existing permissions still decide what a connector or Microsoft 365 source can return. The change for an administrator is that connector display names and connector health become visible to users in the selector.

Because the notice says the feature is enabled by default for users with a Microsoft 365 Copilot licence, licensed users will see the control without any admin action. Expect questions from users whose connector does not appear: the notice says connectors in an error or unpublished state do not appear.

## Risk assessment

**Data exposure**
- The notice says the filter limits retrieval and grounding for a prompt to the selected sources and does not change what content a user is permitted to access. Existing source permissions remain the control.
- Federated connectors fetch from the data source at runtime under the signed-in user's permissions (Learn, Federated connectors overview), so selecting one only changes where a prompt looks, not who can read the data.

**Security & identity**
- No new identity or permission model is described in the notice. Which sources are listed depends on tenant connector settings, so a connector left available to all users will be offered to all of them.

**Autonomy & actions**
- No change documented: the notice describes a selection control on a single prompt, with no autonomous behaviour.

**Change & support**
- Unclear or technical connector display names will appear in the selector, and the notice recommends reviewing them.
- A connector in an error or unpublished state is not listed, so a source can vanish for users without an announcement; expect help desk questions.
- With no source selected, behaviour is unchanged, so users who ignore the control see no difference.

## Cost and licensing

No charge or meter specific to the content source filter is published at the time of writing. MC1548004 names users licensed for Microsoft 365 Copilot as the people affected and says the feature is enabled by default for them.

The Learn page Prerequisites for deploying connectors says that if an organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply. The same page says federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7).

The indirect cost is admin time to review connector display names, health and search permissions.

## Scope

**Who gets it:** users licensed for Microsoft 365 Copilot, per MC1548004, in Microsoft 365 Copilot Chat. The roadmap record lists platform Web and cloud Worldwide (Standard Multi-Tenant); no other clouds are listed on the record.

**Rollout:** MC1548004 gives mid-November 2026 for both the start and expected completion of General Availability (Worldwide). The roadmap target is September CY2026 and its status is Launched.

**Which sources appear:** those enabled in your tenant, including Graph connectors and federated connectors available to users. Connectors in an error or unpublished state do not appear, per the notice.

## Governance guidance

### Before rollout
- Review the display names of published Graph connectors in the Microsoft 365 admin center so users can recognise them in the selector, as MC1548004 recommends.
- Check the health and search permissions of each connector that should be available; the notice says connectors in an error or unpublished state do not appear.
- Decide which federated connectors should be available, using the Agent and plugin access and User access rows in the controls table.
- Brief the help desk that a source selector is arriving for Copilot-licensed users and that selecting nothing leaves behaviour unchanged.

### At rollout
- Confirm that expected sources show for a test user with a Microsoft 365 Copilot licence; Learn suggests checking Settings > Sources in Copilot Chat as a test user for federated connectors.
- Allow up to 10 minutes after changing a federated connector setting before testing, as Learn says changes can take that long to take effect.

### After rollout
- Re-check connector health regularly, since a connector that falls into an error state drops out of the selector.
- Collect user reports of missing or confusingly named sources and fix the connector name or state.
- Watch Message center and the Learn release notes for a page describing the filter and any admin setting for it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for the content source selector in Copilot Chat</strong><br><small>Tenant</small><br><small class="controls__note">MC1548004 says the feature is enabled by default for users with a Microsoft 365 Copilot licence.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which publisher types of federated connectors are available to users</strong><br><small>Tenant</small><br><small class="controls__note">Clearing a publisher type sets that type's federated connectors to No users; individual connector settings take precedence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide ceiling on who can use agents, plugins and federated connectors</strong><br><small>Tenant</small><br><small class="controls__note">Options are All users (default), Specific users or groups, and No users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups get an individual federated connector</strong><br><small>Group</small><br><small class="controls__note">Narrows the User access population; it cannot widen it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting that turns the content source selector on or off is documented at the time of writing, and MC1548004 says the feature is enabled by default. The rows below govern which federated connectors are available to users, which the notice says feed the selector. Whether changing them removes a source from the selector is not described on a page for the filter.

Setting a connector-level option takes precedence over the bulk Agent and plugin access setting, and User access always applies, per the Learn page on managing federated connector availability. These controls are documented for federated connectors; Learn has not been read for how they apply to synced connectors in the selector.

## Open questions

- Is there an admin setting to turn the content source filter off for a tenant or a group? MC1548004 says it is enabled by default; watch Message center and the Copilot release notes.
- Do the Agent and plugin access, User access and staged rollout settings decide which federated connectors appear in the selector, and what shows for synced connectors? Watch the Learn page on managing federated connector availability.
- Does the roadmap title's wording, optionally add chat, describe an extra surface beyond Copilot Chat? The notice covers only Microsoft 365 Copilot Chat.
- Is a Learn page for the selector planned, and will it list the audit or usage reporting available for selected sources?

<!-- rationale
risk: Low. Microsoft's notice MC1548004 says the filter changes where Copilot retrieves information for a prompt, not what a user is permitted to access, and that behaviour is unchanged when no source is selected.
cost: Low. The only cost the sources show is admin time to review connectors; no charge or meter specific to the filter is published, and connector grounding is included with Microsoft 365 Copilot licences.
impact: Medium. Users licensed for Microsoft 365 Copilot get a new source selection control in the Copilot Chat prompt area, so they will notice it and may ask why a connector is missing.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Connector health becomes visible to users in the selector. | Found: Searched: Microsoft 365 Copilot Chat source selection filter connector health status error unpublished selector. Read MC1548004 and Learn's Monitor Microsoft 365 Copilot connector errors excerpts; neither describes user-visible health information in the selector. | Fix: Replace the sentence with: 'Connector display names appear in the selector, and connectors in an error or unpublished state do not appear, per MC1548004.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Publisher-type availability is managed in Microsoft 365 admin center > Agents > Settings > Agent and plugin access. | Found: In the Microsoft 365 admin center, go to Agents > Settings > Agent and plugin access. Clear the publisher types you want to block: | Fix: The path reaches the correct page but stops before the deciding checkbox. Set controls[1].ui.path to 'Agents > Settings > Agent and plugin access > publisher type'. In its note, name the choices: 'Allow agents and plugins built by Microsoft', 'Allow agents and plugins built by your organization', and 'Allow agents and plugins built by external publishers', as documented at https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [contradicted, minor] Governance guidance: Before rollout; After rollout; Governance controls table / consistency: The checklist tells administrators to review and change connector display names, health and search permissions, but the controls table has no corresponding rows. | Found: Review the display names of published Graph connectors; Check the health and search permissions; Re-check connector health regularly. The table contains only the selector switch and federated connector availability controls. | Fix: The Before rollout display-name and health/search-permissions steps, and After rollout connector-health and name/state correction steps, have no matching controls row. Remove those checklist instructions; retain the notice's verified recommendations in the prose. Do not add unverified control rows.
-->
