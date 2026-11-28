---
title: "SharePoint: AI citations analytics show how often Copilot cites documents, news and pages"
slug: "sharepoint-ai-citations-analytics-for-documents-and-pages"
roadmapId: 480725
topic: "modern-work"
products: ["SharePoint"]
summary: "SharePoint adds figures on how often its documents, news and pages are cited in Copilot and agent responses, per file and per site. Launched per the roadmap; who sees it, its default and its licensing are not yet published."
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
  model: "unknown"
  notes: "Not yet published for citation analytics. The Get started with Copilot in SharePoint page lists analytics on how sites, pages, news and documents are performing among capabilities that require Copilot Credits, but does not mention citations."
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
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 49
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "726ef51c14e3c41be196cc4448f5b7ae"
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
- Expect site owners to ask why a page is or is not cited. Restricted Content Discovery keeps a site's content out of Microsoft Copilot responses, but it also hides the Copilot button and AI actions on that site, and Microsoft advises using it selectively, so it is not a fix for a page that is cited too often.

## Cost and licensing

Licensing for AI citations analytics is not yet published; the roadmap item names no licence. The closest published statement is on [Get started with Copilot in SharePoint](https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started): everyday Copilot in SharePoint capabilities are included with the Microsoft 365 Copilot licence, while advanced work requires usage-based billing and consumes Copilot Credits, and "Get analytics on how sites, pages, news, and documents are performing" is listed among the advanced-work capabilities. That page does not mention citations, so whether citation analytics is billed this way is not stated.

If it is, the spending-policy row of the controls table applies: advanced work needs a spending policy in the Microsoft 365 admin center that includes **Advanced work in SharePoint**, and the same page says usage-based features pause until the next month when the monthly credit limit is reached. Existing policies might include newly available services automatically if **Allow new agents and services as they become available** is turned on. Otherwise the cost is site-owner and admin time spent reading and acting on the figures.

## Scope

- **Content covered:** SharePoint documents, news and pages, with site-level aggregation, per the roadmap.
- **Responses counted:** Copilot and AI agents, per the roadmap; which agents are included is not stated.
- **Who sees the figures and who configures them:** not yet documented.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the record lists it.
- **Platform:** Web.
- **Prerequisites and licence:** not yet published.

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
cost: Low. The only cost the sources show is site-owner and admin time. Licensing is not yet published, although the Copilot in SharePoint page bills analytics on site, page, news and document performance in Copilot Credits.
impact: Medium. Site owners, intranet and knowledge managers are the people who would read citation figures; other users are not described as seeing a change.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Change & support / applicability: Restricted Content Discovery keeps a site's content out of Microsoft Copilot responses. | Found: Restricted Content Discovery doesn't affect experiences that operate on content that's already in use by the user, such as summarizing an open document. | Fix: Replace 'Restricted Content Discovery keeps a site's content out of Microsoft Copilot responses' with 'Restricted Content Discovery limits discovery of a site's content in organization-wide search and Microsoft Copilot discovery scenarios, but does not affect experiences using content already in use, such as summarizing an open document'. Keep the following statement about hiding AI entry points and selective use. Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; summary; Cost and licensing; Scope; rationale: cost / licensing: The licensing model is unknown because licensing specific to citation analytics is not yet published. | Found: To access SharePoint, users in your organization need to be assigned a license that includes SharePoint. | Fix: Set licensing.model to included for the published product-level entitlement, and cite https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description. Replace the opening licensing statement with: 'Access to SharePoint requires a license that includes SharePoint. Licensing specific to AI citations analytics, including whether it consumes Copilot Credits, is not yet published.' Keep the distinction from advanced-work performance analytics and do not claim that citation analytics has no additional charge. | Source: https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Restricted Content Discovery is under SharePoint admin center > Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot. | Found: In the SharePoint admin center, expand Sites and select Active sites. Select the site you want to configure. Open the Settings tab, and then turn Restrict content from Microsoft Copilot on. | Fix: Keep the path supported by its cited control reference. Add a short note: 'Microsoft's readiness guidance instead labels the final setting Restrict content discovery > On.' Cite https://learn.microsoft.com/sharepoint/get-ready-copilot-sharepoint-advanced-management#step-3-prevent-accidental-oversharing for that differing label. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
-->
