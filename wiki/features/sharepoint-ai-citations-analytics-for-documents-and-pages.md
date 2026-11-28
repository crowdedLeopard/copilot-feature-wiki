---
title: "SharePoint: AI citations analytics show how often Copilot cites documents, news and pages"
slug: "sharepoint-ai-citations-analytics-for-documents-and-pages"
roadmapId: 480725
topic: "modern-work"
products: ["SharePoint"]
summary: "SharePoint adds figures on how often its documents, news and pages are cited in Copilot and agent responses, per file and per site. Launched per the roadmap; who sees it, its default and licensing specific to it are not yet published."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Access to SharePoint requires a licence that includes SharePoint. Licensing specific to AI citations analytics, including whether it consumes Copilot Credits, is not yet published; the Get started with Copilot in SharePoint page lists analytics on how sites, pages, news and documents are performing as advanced work, but does not mention citations."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","analytics","m365-copilot","copilot-in-sharepoint","restricted-content-discovery","spending-policies","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap: SharePoint: AI citations analytics for documents and pages"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=480725"
    kind: "roadmap"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Monitor agent usage in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/monitor-agent-usage"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "SharePoint service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","restricted-content-discovery","microsoft-viva-sharepoint-agent-analytics-on-viva-insights","spending-policies"]
controls:
  - governs: "Whether AI citations analytics is available, and who can see it"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no switch or audience setting for citation analytics at the time of writing (November 2026)."
  - governs: "Whether a site's content is discoverable by Microsoft Copilot, and its AI entry points show"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Limits the content Copilot can cite; does not govern the analytics. Temporary control; needs Copilot licensing and SharePoint Advanced Management."
  - governs: "Copilot Credit limits for advanced work in SharePoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Add spending policy > Access scope > Agents and services > Advanced work in SharePoint > Limits and alerts"
      docs: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "The request body sets periodLimit and perUserLimit. Applies to citation analytics only if it is billed as advanced work, which is not stated. Beta API."
confidence: "low"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-28"
    note: "New briefing: roadmap-only feature; licensing, default and audience not yet published, with Restricted Content Discovery and the SharePoint spending policy as related controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the Restricted Content Discovery statement: it limits Copilot discovery scenarios but not experiences on content already in use. Licensing now cites the SharePoint licence requirement."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 63 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 62
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "2314422b8609a59c0d1f8aae1bfc2d9c"
---

## What's changing

SharePoint is adding AI citations analytics: figures that show how often a SharePoint document, news post or page is referenced in responses from Copilot and AI agents. Microsoft Learn does not describe this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description.

The roadmap item states that you will be able to see how often a page or a file is referenced in a Copilot response, and to see SharePoint site content referenced in Copilot responses aggregated at the site level. It does not say where in SharePoint the figures appear, who can see them, which agents are counted, or whether an administrator has to turn anything on. Microsoft has not stated what happens on arrival.

The roadmap item lists the feature as Launched, in General Availability, with a target of August CY2026, on the Web platform, for the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

Citation figures tell content owners which pages and documents Copilot actually draws on. That is a practical input to content governance: a page Copilot cites often is one whose accuracy and ownership matter more, and an out-of-date policy page that is cited often is a correction to make first. The site-level view also shows administrators which sites feed Copilot answers, which helps when deciding where a permissions review or [Restricted Content Discovery](/concepts/restricted-content-discovery/) is warranted.

Microsoft has not stated whether the figures appear for site owners automatically or need enabling, and no source says existing SharePoint or Copilot behaviour changes. The open decision for most tenants is who should read these figures and whether they cost Copilot Credits.

## Risk assessment

**Data exposure**
- The roadmap describes counts of references per file, page and site. Microsoft has not said whether the figures name the users whose prompts produced a citation or show prompt text. Existing SharePoint site usage data can be viewed by site admins, owners, members and visitors; whether citation figures follow that audience is not yet documented.

**Security & identity**
- No change described: the roadmap describes reporting on Copilot responses, not new access to content.

**Autonomy & actions**
- No change described: the feature reports and, per the roadmap, does not act on content.

**Change & support**
- Expect site owners to ask why a page is or is not cited. Restricted Content Discovery limits discovery of a site's content in organisation-wide search and Microsoft Copilot discovery scenarios, but does not affect experiences using content already in use, such as summarising an open document. It also hides the Copilot button and AI actions on that site, and Microsoft advises using it selectively, so it is not a fix for a page that is cited too often.

## Cost and licensing

Access to SharePoint requires a licence that includes SharePoint, per the [SharePoint service description](https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description). Licensing specific to AI citations analytics, including whether it consumes Copilot Credits, is not yet published; the roadmap item names no licence. The closest published statement is on [Get started with Copilot in SharePoint](https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started): everyday Copilot in SharePoint capabilities are included with the Microsoft 365 Copilot licence, while advanced work requires usage-based billing and consumes Copilot Credits, and "Get analytics on how sites, pages, news, and documents are performing" is listed among the advanced-work capabilities. That page does not mention citations, so whether citation analytics is billed this way is not stated.

If it is, the spending-policy row of the controls table applies: advanced work needs a spending policy in the Microsoft 365 admin center that includes **Advanced work in SharePoint**, and the same page says usage-based features pause until the next month when the monthly credit limit is reached. Existing policies might include newly available services automatically if **Allow new agents and services as they become available** is turned on. Otherwise the cost is site-owner and admin time spent reading and acting on the figures.

## Scope

- **Content covered:** SharePoint documents, news and pages, with site-level aggregation, per the roadmap.
- **Responses counted:** Copilot and AI agents, per the roadmap; which agents are included is not stated.
- **Who sees the figures and who configures them:** not yet documented.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the record lists it.
- **Platform:** Web.
- **Prerequisites and licence:** access to SharePoint requires a licence that includes SharePoint; prerequisites and licensing specific to citation analytics are not yet published.

## Governance guidance

### Before rollout
- Decide which roles should read citation figures (intranet owners, knowledge managers, communications) and tell them the roadmap lists the feature as launched.
- Check in Microsoft 365 admin center > Copilot > Cost management whether any spending policy includes Advanced work in SharePoint and has Allow new agents and services as they become available turned on, in case citation analytics is billed as advanced work.

### At rollout
- Open a high-traffic communication site and confirm where the citation figures appear and which site roles can see them before announcing the feature.
- Confirm whether viewing or refreshing the figures prompts users to approve Copilot Credit use.

### After rollout
- Use the most-cited pages and documents to order content reviews: confirm each has a current owner, recent updates and the right permissions.
- Apply Restricted Content Discovery to a highly cited site only while its permissions are reviewed, as Microsoft describes it as a temporary control, and remove it afterwards.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI citations analytics is available, and who can see it</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no switch or audience setting for citation analytics at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a site's content is discoverable by Microsoft Copilot, and its AI entry points show</strong><br><small>Site</small><br><small class="controls__note">Limits the content Copilot can cite; does not govern the analytics. Temporary control; needs Copilot licensing and SharePoint Advanced Management.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Credit limits for advanced work in SharePoint</strong><br><small>User</small><br><small class="controls__note">The request body sets periodLimit and perUserLimit. Applies to citation analytics only if it is billed as advanced work, which is not stated. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Add spending policy › Access scope › Agents and services › Advanced work in SharePoint › Limits and alerts <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns AI citations analytics on or off, or limits who sees it, at the time of writing (November 2026). The Site AI settings panel that site owners open from Settings > Site AI covers which agent opens from the header, hiding the Copilot button for site visitors, and advanced document processing; none of these is about analytics.

Restricted Content Discovery governs which sites' content Microsoft Copilot discovers, not the analytics. By default only SharePoint administrators manage it; `Set-SPOTenant -DelegateRestrictedContentDiscoverabilityManagement $true` lets site administrators manage it for their own sites. The page says configuring it needs an organisation licensed for Copilot with SharePoint Advanced Management available. The spending-policy row applies to citation analytics only if Microsoft bills it as advanced work in SharePoint, which it has not stated.

## Open questions

- Where do the citation figures appear (site usage, page analytics, the SharePoint admin center), and which roles can see them? Watch the Monitor agent usage in SharePoint page and Message center.
- Is citation analytics the "Get analytics on how sites, pages, news, and documents are performing" capability that the Copilot in SharePoint page bills in Copilot Credits?
- Which agents are counted: Microsoft 365 Copilot only, or also SharePoint agents and agents built in Copilot Studio?
- Do the figures identify users or prompts, or only counts?
- Will there be a tenant or site setting to turn the analytics off?

<!-- rationale
risk: Low. The roadmap describes reporting on citations in existing Copilot responses and no new access to content; who can see the figures is not yet documented.
cost: Low. The only cost the sources show is site-owner and admin time. Licensing specific to citation analytics is not yet published, although the Copilot in SharePoint page bills analytics on site, page, news and document performance in Copilot Credits.
impact: Medium. Site owners, intranet and knowledge managers are the people who would read citation figures; other users are not described as seeing a change.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature does not act on content. | Found: Searched: SharePoint AI citations analytics acts on content reporting actions automatic changes. Read roadmap; opened Copilot in SharePoint setup and Monitor agent usage. The roadmap describes reporting, but neither it nor these pages expressly rules out actions on content. | Fix: Replace the bullet with 'No change described: the roadmap describes reporting on citations and does not describe actions on content.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; Governance guidance: Before rollout / behaviour: Existing policies may automatically include new services when Allow new agents and services as they become available is on. | Found: Existing cost management policies might automatically include newly available services if the Allow new agents and services as they become available option is turned on for the policy. | Fix: After this sentence, add: 'The usage-based billing overview calls this setting Auto-apply new services and says it is enabled by default for spending policies.' Cite https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits and add it to sources. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
-->
