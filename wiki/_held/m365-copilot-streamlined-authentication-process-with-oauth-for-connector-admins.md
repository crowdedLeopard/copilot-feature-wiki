---
title: "Microsoft 365 Copilot connectors: guided OAuth sign-in for connector admins"
slug: "m365-copilot-streamlined-authentication-process-with-oauth-for-connector-admins"
roadmapId: 502530
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Connector setup in the Microsoft 365 admin center now offers a guided OAuth sign-in for Gong, GitHub and monday.com. It changes how admins authorise the source; no action is required, but check who can do it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences; Copilot grounding in the licensing table needs the Microsoft 365 Copilot add-on or Microsoft 365 E7. No price specific to the OAuth flow is published."
audiences: ["m365-admin","security"]
tags: ["copilot-connectors","connectors","authentication","m365-admin-center","m365-copilot","copilot-control-system"]
sources:
  - title: "Microsoft 365 Roadmap 502530"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502530"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Gong Copilot connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/gong-connector"
    kind: "learn"
  - title: "Deploy the GitHub Cloud Knowledge connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/github-cloud-knowledge-deployment"
    kind: "learn"
  - title: "Deploy the monday.com Microsoft 365 Copilot connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/monday-deployment"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Deploy connectors in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    kind: "learn"
  - title: "Staged rollout for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout"
    kind: "learn"
  - title: "Manage access permissions for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Which users can use agents and plugins, including connectors (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access"
    kind: "learn"
videos: []
related: ["m365-admin-center-usage-reports-m365-copilot-connectors","m365-copilot-federated-copilot-connectors-in-m365-copilot"]
controls:
  - governs: "Which users and groups see a connector's data during a staged rollout"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connector > Staged Rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout"
    api: null
    note: "Requires the AI administrator role. Up to 100 users and 15 Microsoft 365 groups. Applies to Search and Copilot experiences."
  - governs: "Which users can use agents and plugins, including connectors"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access"
    api: null
    note: "Options are All users (the default), No users and Specific users or groups. A connector's staged rollout cannot go beyond this setting."
  - governs: "Whether indexed connector data is visible to everyone or only people with access to the source"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Gallery > connector > Custom setup > Users > Access Permissions"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    api: null
    note: "Set when the connection is created; Microsoft says updating it afterwards isn't currently supported."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: guided OAuth sign-in for Copilot connector setup (Gong, GitHub, monday.com), with staged rollout, user access and access permissions controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 54
  unconfirmed: 3
  contradicted: 1
  attempts: 1
  hash: "e3b94c71c3c4b5e3db3e1831646911ca"
---

## What's changing

Microsoft 365 Copilot connector setup now offers a guided OAuth sign-in, so an admin authorises the connector to its source system by consenting in a pop-up flow. The roadmap description reads: "Effortless authentication, unified through OAuth — empowering Connector Admins to connect in just a few clicks." It names no connectors; Microsoft's Copilot release notes name Gong, GitHub and Monday.

The release notes say "The connector setup flow now uses a streamlined OAuth process that replaces lengthy manual steps." Microsoft Learn deployment pages show what an admin does. For Gong: select OAuth 2.0, select Authorize, sign in with a Gong administrator account and complete the OAuth consent flow. For GitHub Cloud Knowledge: choose OAuth (Recommended), install the GitHub Knowledge GitHub app in the GitHub organisation, enter the organisation name and choose Authorize. For monday.com: choose OAuth (recommended), install the Microsoft 365 Copilot monday app in your monday workspaces and choose Authorize; a separate option, OAuth 2.0 with a customised monday.com app, remains for organisations that need their own app.

The roadmap record lists the item as Launched, General Availability, Worldwide (Standard Multi-Tenant), Web, with a target of December CY2025. The release notes list the change under February 10, 2026 and March 24, 2026. The sources differ on maturity: the GitHub Cloud Knowledge page says of its OAuth method "This authentication method is currently in preview." Treat that connector's OAuth option as preview until that page says otherwise.

## Why it matters

Connector authentication is the point where an admin grants Microsoft 365 a standing right to read a source system such as Gong calls or GitHub repositories. A faster flow lowers the effort of that grant, which also lowers the friction that normally makes someone ask who is allowed to approve it. Plan for more connectors being created, and decide who may do so.

Microsoft has not stated what happens on arrival, so this page does not claim the flow is on or off by default. No source says existing connections change; the page treats the item as a new way to authorise, to review rather than to prepare for.

## Risk assessment

**Data exposure**
- Connector consent lets the connector index source content into Microsoft 365 for Search and Copilot. The access permissions choice on the connector's Custom setup Users tab (Only people with access to this data source, or Everyone) decides who sees indexed data; the Manage access permissions page says choosing Everyone can lead to oversharing, and that permissions cannot be updated after the connection is created (row 3 of the controls table).

**Security & identity**
- The authorisation is held by an account in the source system: Gong's page asks for a Gong administrator account, and the GitHub page asks for the app to be installed in the GitHub organisation. Confirm who holds those roles on the source side as well as the AI administrator role in the Microsoft 365 admin center.
- The GitHub Cloud Knowledge OAuth option is described as in preview on its Learn page, while the roadmap lists General Availability.

**Autonomy & actions**
- No change documented: the monday.com page describes the OAuth consent as granting read permissions required for content ingestion. Federated connectors that can write to source systems are a separate feature (see /features/m365-copilot-federated-connectors-write-update-delete/).

**Change & support**
- The GitHub page lists a customised GitHub app (on behalf of user) method as deprecated. Existing connections that use an older authentication type will need review; Microsoft Learn does not say here whether they move to OAuth.

## Cost and licensing

Microsoft Learn's connector prerequisites page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences. For use in Copilot, its licensing table lists synced connectors for Copilot grounding and agents under Microsoft 365 plus the Microsoft 365 Copilot add-on, and under Microsoft 365 E7; Microsoft 365 on its own is listed for Microsoft Search only. The page also says that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply.

The pages describing the OAuth setup flow publish no separate price or meter for it. The cost that remains is admin time and the source-system licences the connector needs, which the source vendor sets.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform; no other cloud is listed on the record.

To configure and deploy Copilot connectors you must be an AI administrator in the Microsoft 365 admin center. For prebuilt synced connectors you also need admin access to the external service. The release notes name Gong, GitHub and Monday as supported; the notes' wording for the February entry is "supported connectors such as Gong, GitHub, or Monday", so the full list is not given.

## Governance guidance

### Before rollout
- Confirm who holds the AI administrator role in the Microsoft 365 admin center, because that role is required to deploy connectors.
- Name the source-system admins for Gong, GitHub and monday.com who will sign in or install the app during the OAuth step.
- Read the deployment page for each connector you plan to set up and note any preview label, starting with GitHub Cloud Knowledge.
- Check Agents > Settings > User access (row 2) so you know which users can use connectors at all.

### At rollout
- Choose OAuth in the connector's authentication step and complete the consent flow with the source-system admin account.
- Turn on Rollout to limited audience before choosing Create, so a pilot group sees connector data first (row 1).
- Keep Access Permissions on Only people with access to this data source unless you have a documented reason to choose Everyone (row 3).

### After rollout
- Review Copilot > Connectors > Your Connections for the new connection and its staged rollout state.
- Widen the staged rollout once the pilot group confirms results respect source-system permissions.
- Watch the Microsoft 365 Copilot release notes for further connectors that gain the OAuth flow.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups see a connector's data during a staged rollout</strong><br><small>Group</small><br><small class="controls__note">Requires the AI administrator role. Up to 100 users and 15 Microsoft 365 groups. Applies to Search and Copilot experiences.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connector › Staged Rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can use agents and plugins, including connectors</strong><br><small>Tenant</small><br><small class="controls__note">Options are All users (the default), No users and Specific users or groups. A connector's staged rollout cannot go beyond this setting.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether indexed connector data is visible to everyone or only people with access to the source</strong><br><small class="controls__note">Set when the connection is created; Microsoft says updating it afterwards isn't currently supported.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Gallery › connector › Custom setup › Users › Access Permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

A staged rollout cannot extend beyond the users allowed by User access: the federated connectors overview says staging can't extend beyond them. Staged rollout takes up to 100 users and 15 Microsoft 365 groups, and you must be an AI administrator to use it.

None of these controls governs the OAuth step itself; they govern who sees the connector afterwards. Access permissions are chosen at creation: the Manage access permissions page says updating them after creation isn't currently supported, so fixing a wrong choice means deleting and recreating the connection.

## Open questions

- Which connectors beyond Gong, GitHub and monday.com get the guided OAuth flow? The release notes use "such as"; watch the Microsoft 365 Copilot release notes.
- When does the GitHub Cloud Knowledge OAuth option leave preview, given the roadmap lists General Availability? Watch the connector's Learn page.
- Do existing connections that use manual or customised authentication keep working unchanged, or are admins expected to re-authorise? Watch the connector deployment pages and Message center.
- Is the OAuth flow on by default for each connector, or chosen by the admin? Microsoft has not stated the default for this item.

<!-- rationale
risk: Low. The change alters how an admin authorises a connector to its source system; Microsoft Learn shows the connector's access permissions still default to only people with access to the data source.
cost: Low. The only cost the sources show is admin time; Microsoft Learn publishes no separate price or meter for the OAuth setup flow, and connector licensing is the existing Microsoft 365 and Copilot licensing.
impact: Low. Admins who deploy Copilot connectors notice it at setup; end users see no new feature beyond the connector content itself.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary / default: No action is required for this change. | Found: Searched: streamlined OAuth no action; Copilot connectors OAuth existing connections; streamlined OAuth default connector. Read the roadmap, February/March release-note excerpts and Gong, GitHub and monday deployment pages; none states that no action is required. | Fix: Replace 'no action is required, but check who can do it' with 'review who can authorise connectors; Microsoft has not stated what happens to existing connections'.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The authorisation is held by an account in the source system. | Found: Searched: Copilot connectors authorization account OAuth. Read Gong, GitHub Cloud Knowledge and monday deployment pages. They document sign-in, app installation and consent, but do not establish this common account-ownership mechanism. | Fix: Remove 'The authorisation is held by an account in the source system:' and start the bullet 'Gong's page asks for a Gong administrator account, and the GitHub page asks for the app to be installed in the GitHub organisation.'
- [unsupported, blocker] Cost and licensing / licensing: Source-system licences are a remaining cost required by these connectors. | Found: Searched: Gong connector license; GitHub Cloud Knowledge license; monday.com connector license. Read connector prerequisites and all three deployment pages. They require source access and permissions; none specifies a required source-system licence or a resulting licence cost. | Fix: Replace 'The cost that remains is admin time and the source-system licences the connector needs, which the source vendor sets.' with 'Plan for admin time and check your source-system licensing terms before deployment.'
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: Copilot > Connectors > Your Connections > connector > Staged Rollout is the route to changing staged rollout. | Found: In the Microsoft 365 admin center, go to Copilot > Connectors > Your Connections. Find the connector that you want to modify. In the Staged Rollout column, next to Staged, choose Edit. | Fix: Change controls[0].ui.path and the corresponding table path to 'Copilot > Connectors > Your Connections > connector > Staged Rollout > Edit'. Staged Rollout is the column; Edit is the action that opens the control, as documented at https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Risk assessment: Data exposure; Governance controls table / admin-path: Access Permissions is reached through Copilot > Connectors > Gallery > connector > Custom setup > Users > Access Permissions. | Found: On the Connectors tab, in the left pane, choose Gallery, and select the data source you want to connect. On the connector page in the admin center, select Custom setup. On the Users tab, under Access Permissions, choose whether indexed data is visible to: | Fix: Include the Connectors tab heading: set controls[2].ui.path and its table path to 'Copilot > Connectors > Connectors > Gallery > connector > Custom setup > Users > Access Permissions', following https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview
-->
