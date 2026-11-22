---
title: "Microsoft 365 Copilot connectors: permission sync in incremental crawls"
slug: "m365-copilot-support-permission-sync-missed-in-incremental-crawl"
roadmapId: 503570
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Launched: Copilot connectors can sync permission changes between full crawls, not only in the roughly daily full crawl. Admins should check which connectors support it and keep periodic full crawls. No action is forced."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "none"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's prerequisites page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses, and that Copilot grounding on connector content is included with Microsoft 365 Copilot licences. A licence specific to this feature is not yet published."
audiences: ["m365-admin","security","service-owner"]
tags: ["copilot-connectors","m365-copilot","m365-admin-center","oversharing","knowledge-grounding"]
sources:
  - title: "Deploy connectors in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    kind: "learn"
  - title: "Deploy the ServiceNow Knowledge Copilot connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/servicenow-knowledge-deployment"
    kind: "learn"
  - title: "Set up ServiceNow Knowledge connector prerequisites by using background scripts"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/servicenow-knowledge-setup-scripts"
    kind: "learn"
  - title: "Release history for Microsoft Graph connector agent"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/connector-agent-releases"
    kind: "learn"
  - title: "Deploy the Confluence Cloud connector in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-cloud-deployment"
    kind: "learn"
  - title: "Veeva On-Premises Microsoft 365 Copilot connector overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/veeva-onpremise-overview"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Manage Microsoft 365 Copilot connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Update externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 503570"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503570"
    kind: "roadmap"
videos: []
related: ["copilot-connectors","knowledge-grounding"]
controls:
  - governs: "How often a connection runs full and incremental crawls, which sets how soon permission changes can reach the index"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Gallery > data source > Custom setup > Sync"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    api: null
    note: "Requires the AI administrator role. Learn's deployment overview says incremental crawls don't support permission updates, so confirm each connector's own page."
  - governs: "Whether a connection's indexed content is visible to everyone or only to people with access to the content"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Gallery > data source > Custom setup > Users > Access Permissions"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    api: null
    note: "Permission sync has an effect only where content is limited to people with access. The Map Identities section on the same tab sets how users are matched to Microsoft Entra ID."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-22"
    note: "New briefing: permission sync in incremental crawls for Copilot connectors, with the connector-level behaviour Learn documents and where Learn's general pages still differ."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 59 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 58
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "4ba8981e5988cee5cfaa982a106314bb"
---

## What's changing

Microsoft's roadmap item says Copilot connectors can now sync permissions more often. Until now, the item says, permissions were synced only in the periodic full crawl, which generally has a default frequency of one day for most connectors. The item says there is now support for doing permission syncs more frequently, in an incremental way.

Microsoft Learn does not yet describe this as one tenant-wide feature. It documents the behaviour per connector. The ServiceNow Knowledge connector page describes an "incremental identity sync crawl", a new type of incremental crawl that checks for identity changes and updates permissions between full crawls; it is available for Advanced flow connections that set up the `user_changes` resource, and its default frequency is every 30 minutes, which cannot be changed in the admin centre. The Microsoft Graph connector agent release history lists version 4.0.7.0 (17 November 2026) as adding incremental identity crawling for the Confluence On-Premises connector. Neither page says it is this roadmap item.

Learn's general pages still say the opposite for connectors without this support. The deployment overview says incremental crawls do not currently process updates to permissions and that full crawls should run periodically, and the Confluence Cloud page says incremental crawls do not pick up ACL (access control list) changes. Both statements are reported here; which connectors have the new behaviour is not stated in one place.

The roadmap record lists the status as Launched, with a preview target of May CY2026 and a general availability target of July CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform.

## Why it matters

Copilot grounds its answers on indexed connector content, and each indexed item carries the access rules copied from the source system. When someone loses access in the source, the index keeps the old rule until a crawl that processes permissions runs. Where a connector now does that in incremental crawls, the window shrinks from the full-crawl interval (generally a day, per the roadmap item) to the incremental interval.

Microsoft has not stated what arrives without an administrator acting, so treat the benefit as connector by connector. For connectors that Learn still describes as full-crawl only for permissions, nothing in the sources says the window has changed, and the daily full crawl remains the safeguard.

## Risk assessment

**Data exposure**
- On connectors where incremental crawls skip permission updates, a revoked source permission can remain in the index until the next full crawl. Learn lists "Updating ACLs" as a reason to run a full refresh. Shorten the full-crawl interval or run an on-demand full crawl from the connection pane after urgent access removals.
- The Veeva On-Premises page warns that Document Roles and some permission changes might not be fully captured during every incremental crawl, so even a connector with incremental permission handling can need a full crawl.

**Security & identity**
- For ServiceNow Advanced flow connections, incremental identity sync depends on setup inside ServiceNow: the setup script, run with the `security_admin` role elevated, adds the `user_changes` resource, creates READ ACLs on `sys_audit` and `sys_audit_delete` and turns on table-level auditing for `sys_user`, `sys_user_has_role`, `sys_user_grmember` and `user_criteria`. Have the ServiceNow owner approve those changes first.

**Autonomy & actions**
- No change: the roadmap item describes how often permissions are refreshed, not new actions by Copilot.

**Change & support**
- Learn's general pages and the roadmap item disagree, so helpdesk answers about "how fast do access changes reach Copilot" will differ by connector. Record the answer per connection.

## Cost and licensing

No licence or meter specific to this feature is published. The general rule is on Learn's prerequisites page for deploying connectors: indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses, and where an organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included with no extra charges. The same page's licensing table says synced connectors reach Copilot grounding with a Microsoft 365 Copilot add-on or Microsoft 365 E7, while Microsoft 365 alone supports Microsoft Search only.

Indirect cost is admin time: reviewing sync settings per connection and, for ServiceNow, ServiceNow-side configuration work. Whether more frequent permission sync adds load on source systems is not stated for this feature.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), the Web platform and General Availability as the release phase. Which connectors support incremental permission sync is not stated in one place; Learn documents it for the ServiceNow Knowledge connector (Advanced flow with the `user_changes` resource) and, in the connector agent release history, for the Confluence On-Premises connector.

It concerns synced connectors, which index content on a schedule. Federated connectors do not index content, so crawl schedules do not apply to them. Configuring connectors needs the AI administrator role in the Microsoft 365 admin center, and prebuilt synced connectors also need admin access to the external service.

## Governance guidance

### Before rollout
- List each synced connection under Copilot > Connectors and note whether its access permissions are set to only people with access to the content or to everyone, because permission sync matters only for the first.
- Read the deployment page of each connector you run and note whether it describes incremental permission or identity handling; do not assume it from the roadmap item.
- Ask the ServiceNow owner to review `incremental_identity_sync_setup.js` before an AI administrator relies on incremental identity sync for an Advanced flow connection.

### At rollout
- Review the Sync tab of each connection and keep the full crawl scheduled; Learn says to run full crawls periodically even when incremental crawls are used.
- Record the incremental frequency for each connection, remembering that the ServiceNow incremental identity sync interval is not changeable in the admin centre.

### After rollout
- Test with a non-critical item: remove a test user's access in the source, wait for the next incremental crawl, then check whether Copilot still returns the item. If it does, treat that connector as full-crawl only for permissions.
- Watch Message center and the connector deployment pages for the list of supported connectors.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>How often a connection runs full and incremental crawls, which sets how soon permission changes can reach the index</strong><br><small class="controls__note">Requires the AI administrator role. Learn's deployment overview says incremental crawls don't support permission updates, so confirm each connector's own page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Gallery › data source › Custom setup › Sync <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a connection's indexed content is visible to everyone or only to people with access to the content</strong><br><small class="controls__note">Permission sync has an effect only where content is limited to people with access. The Map Identities section on the same tab sets how users are matched to Microsoft Entra ID.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Gallery › data source › Custom setup › Users › Access Permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both rows are set per connection in the Microsoft 365 admin center, which needs the AI administrator role. The sync schedule decides how often permission changes can reach the index; the access permissions setting decides whether permissions apply at all, because choosing everyone in the organisation makes indexed data visible to everyone.

The Manage Microsoft 365 Copilot connector connections page also describes on-demand full or incremental crawls from the connection pane, which is a way to refresh permissions outside the schedule. The sync and access settings are not listed among the updatable properties of the Graph externalConnection update operation, so Microsoft Learn documents no API for them at the time of writing (November 2026).

## Open questions

- Which Copilot connectors support permission sync in incremental crawls, and will the deployment overview and each connector page be updated to say so? Watch the deployment overview and the connector pages on Learn.
- What is the default incremental permission-sync frequency outside ServiceNow, and can administrators change it? Watch the connector deployment pages.
- Does a connector have the new behaviour on arrival, or must an administrator enable it, as ServiceNow requires setup of the `user_changes` resource? Watch Message center.
- Is the Confluence On-Premises incremental identity crawl in agent version 4.0.7.0 the same capability as this roadmap item?

<!-- rationale
risk: Low. It refreshes access rules on content already indexed, so no new data is reached; the exposure that remains is stale permissions on connectors where Learn still says incremental crawls skip permission updates.
cost: None. Learn's connector prerequisites page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses, and no separate charge for this feature is published.
impact: Low. Connector owners and AI administrators notice it in sync settings; users see no new surface, only access changes that may reach the index sooner on supported connectors.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / behaviour: Connector agent version 4.0.7.0 added incremental identity crawling for Confluence On-Premises. | Found: Added incremental identity crawling for the Confluence On-Premises connector, enabling more efficient processing of user and group changes between full crawls. | Fix: After the release-history statement, add: 'The Confluence On-premises deployment page still says permission updates sync only during full crawls.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/confluence-onpremises-deployment, which states 'Updates to permissions sync only during full crawls.' | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/connector-agent-releases
- [supported, minor] Why it matters / behaviour: Copilot grounds answers on indexed connector content. | Found: The conversational Copilot Chat experience in Microsoft Copilot, Teams, Outlook, and other Microsoft 365 apps use connector content to respond to user queries. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/connectors/overview to sources for the grounding and indexed-item ACL statements in Why it matters. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/overview
- [supported, minor] Why it matters / behaviour: Each indexed connector item carries access rules from the source system. | Found: Each item includes content, metadata (like title and URL), and an access control list (ACL) that enforces permissions. | Fix: Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/overview for this sentence; its permission-based filtering passage also says Search and Copilot only show items to users who have access in the source system. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/overview
- [supported, minor] Why it matters / behaviour: For connectors with incremental permission handling, the stale-permission window shrinks to the incremental interval. | Found: checks for identity changes, such as new or removed users, role assignments, group memberships, and user criteria attributes, and updates permissions between full crawls. | Fix: Replace 'Where a connector now does that in incremental crawls, the window shrinks from the full-crawl interval (generally a day, per the roadmap item) to the incremental interval.' with 'Where a connector supports the relevant permission change in incremental crawls, that change can be processed between full crawls.' The cited deployment overview says system load can delay crawl start times by up to an hour; the configured interval is not a guaranteed completion time. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/servicenow-knowledge-deployment
- [supported, minor] controls[0].ui; Governance controls / admin-path: Microsoft 365 admin center > Copilot > Connectors > Gallery > data source > Custom setup > Sync reaches full and incremental crawl scheduling. | Found: On the **Connectors** tab, in the left pane, choose **Gallery**, and select the data source you want to connect ... select **Custom setup** ... On the **Sync** tab, you can configure how often data syncs between the source and the connector index. | Fix: Expand the path to 'Copilot > Connectors > Connectors tab > Gallery > data source > Custom setup > Sync'. The omitted Connectors tab is the tab listing the connector gallery; the printed steps are otherwise in the documented order. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview
- [supported, minor] controls[1].ui; Governance controls / admin-path: Microsoft 365 admin center > Copilot > Connectors > Gallery > data source > Custom setup > Users > Access Permissions reaches the connection-creation visibility setting. | Found: On the **Connectors** tab ... choose **Gallery**, and select the data source ... select **Custom setup** ... On the **Users** tab, under **Access Permissions**, choose whether indexed data is visible to: Only users with access to the content; Everyone in the organization | Fix: Expand the path to 'Copilot > Connectors > Connectors tab > Gallery > data source > Custom setup > Users > Access Permissions'. This is the creation path documented by the cited page, not an edit-in-place path for a published connection. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview
- [supported, minor] Governance guidance: Before rollout / admin-path: Existing synced connections and their configured access permissions can be reviewed under Copilot > Connectors. | Found: go to **Copilot** > **Connectors** > **Your Connections**. ... Select the connector you want to review to open the details pane. ... Under **Permissions**, you can view the permissions set for the connector. | Fix: Replace the first Before rollout bullet with 'List each synced connection under Copilot > Connectors > Your Connections, select the connection, and review Permissions to see whether it respects source access or is visible to everyone.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions
- [unsupported, minor] rationale: impact / behaviour: Users see no new surface as a result of this feature. | Found: Searched: 'Microsoft 365 Copilot permission sync incremental crawl new user interface experience 503570'; read roadmap, deployment-overview, ServiceNow Knowledge deployment, connector-agent-releases and overview. No passage states that this change introduces no user surface. | Fix: Replace 'users see no new surface, only access changes that may reach the index sooner on supported connectors' with 'access changes may reach the index sooner on supported connectors'.
-->
