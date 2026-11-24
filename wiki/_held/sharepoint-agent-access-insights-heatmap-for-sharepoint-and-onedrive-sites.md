---
title: "SharePoint: agent access heatmap for SharePoint and OneDrive sites"
slug: "sharepoint-agent-access-insights-heatmap-for-sharepoint-and-onedrive-sites"
roadmapId: 565027
topic: "modern-work"
products: ["OneDrive","SharePoint"]
summary: "Microsoft plans a heatmap in the SharePoint admin center showing which agents access which SharePoint, OneDrive and Teams-connected content. An admin has to turn on data collection and generate a report; it needs an Agent 365 or E7 licence."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn lists \"Microsoft Agent 365 or Microsoft 365 E7 license\" as a prerequisite for the heatmap and points licensing questions to the Microsoft Product Terms or an account representative. The pages give no price for the heatmap itself."
audiences: ["m365-admin","security","service-owner"]
tags: ["sharepoint","onedrive","agents","agent-governance","agent-365","e7","auditing","restricted-content-discovery","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 565027"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565027"
    kind: "roadmap"
  - title: "Agent access heatmap overview (preview)"
    url: "https://learn.microsoft.com/sharepoint/agent-access-heatmap-overview"
    kind: "learn"
  - title: "Generate a report and explore the agent access heatmap (preview)"
    url: "https://learn.microsoft.com/sharepoint/agent-governance-generate-agent-access-report"
    kind: "learn"
  - title: "View agent activity in the agent governance overview"
    url: "https://learn.microsoft.com/sharepoint/agent-governance-overview"
    kind: "learn"
  - title: "Monitor agent access to SharePoint and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/insights-on-agent-access"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Restrict SharePoint site access with Microsoft 365 groups and Microsoft Entra security groups"
    url: "https://learn.microsoft.com/sharepoint/restricted-access-control"
    kind: "learn"
videos: []
related: ["sharepoint-sharepoint-agent-usage-statistics-across-all-sharepoint-sites","restricted-content-discovery","agent-registry","auditing"]
controls:
  - governs: "The agent access heatmap, its data collection and its reports"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Agent governance > Agent access heatmap > Generate report"
      docs: "https://learn.microsoft.com/sharepoint/agent-governance-generate-agent-access-report"
    api: null
    note: "Preview. Admin turns on data collection here if prompted, then generates reports. Needs SharePoint Administrator or AI Administrator, and an Agent 365 or E7 licence."
  - governs: "Whether a site's content is discoverable by Copilot and organisation-wide search (heatmap site action)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Its page says it applies to SharePoint sites, not OneDrive sites, and does not change permissions. Only SharePoint administrators manage it unless delegated."
  - governs: "Which groups can access a site (restricted site access, a site action offered from the heatmap)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restricted site access > Edit > Restrict SharePoint site access to only users in specified groups"
      docs: "https://learn.microsoft.com/sharepoint/restricted-access-control"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <siteurl> -RestrictedAccessControl $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-access-control"
    note: "Site-level access restriction must first be allowed for the organisation. At least one group is needed to apply it to a site."
  - governs: "The existing agent access insights report under Reports > Agent insights (today's alternative, not the heatmap)"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Agent insights > Agent access"
      docs: "https://learn.microsoft.com/sharepoint/insights-on-agent-access"
    api:
      kind: "powershell"
      call: "Start-SPOM365AgentAccessInsightsReport -ReportPeriodInDays 28"
      docs: "https://learn.microsoft.com/sharepoint/insights-on-agent-access"
    note: "A separate report that Learn says remains available. Needs at least SharePoint administrator; PowerShell use needs a SharePoint Advanced Management add-on or Microsoft Copilot licence."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-04T23:15:54"
changes:
  - date: "2026-11-24"
    note: "First briefing: planned agent access heatmap for SharePoint and OneDrive, documented in Learn as a preview that an admin must turn on and generate."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 91 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: added the shared channel qualification to restricted site access, removed the open question on Agent 365 pricing, extended two admin paths and narrowed two checklist steps."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 103 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 100
  unconfirmed: 0
  contradicted: 3
  attempts: 2
  hash: "81b52fd0cff6c47d3e10bfa5997b6c04"
---

## What's changing

The roadmap item describes a visual heatmap of agent activity that helps admins detect patterns, hotspots and unusual access behaviour on SharePoint and OneDrive sites. Microsoft Learn documents what appears to be this feature as the "agent access heatmap", in a new **Agent governance** node of the SharePoint admin center. Learn marks it as a preview and says features and terminology might change before general availability.

The heatmap is a grid. Rows are agent platforms (Learn lists Copilot declarative agents, Copilot Studio agents, agents in SharePoint, custom engine agents and third-party agents). Columns are business groups or sensitivity labels, depending on the view chosen. Each cell counts the sites, OneDrive accounts and Teams-connected sites that agents from that platform accessed, and darker cells mean more. An admin can select a cell, drill into a site, see the top agents that use it and the operations they performed (for example FileAccessed or FileModified), and apply site actions from the same pane.

It does not run by itself. Reports are built from the Microsoft 365 unified audit log, only from the point an admin turns on data collection, and the admin then generates a report for the last 1, 7, 14 or 28 days. The existing agent access insights report under **Reports** > **Agent insights** remains available alongside it.

The roadmap record lists the item as In development, release phase General Availability, target July CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the Web platform. The record has no preview date. Learn's preview label and the roadmap's General Availability target describe different stages, and the target month has passed with the record still at In development.

## Why it matters

The heatmap gives an admin one view of which agents touch which SharePoint, OneDrive and Teams-connected content, joined to sensitivity labels and business groups. That lets a service owner ask whether agents are reaching the content that matters most, not just how many agents exist.

If nobody acts, nothing is collected: Learn says reports are built from audit data collected after data collection is turned on, and that insights are not generated automatically. The heatmap is therefore a decision for the service owner to take, not a change that lands on users. The value depends on groundwork: Learn says a tenant with neither site sensitivity labels nor business groups gets no business group or sensitivity view, and activity is grouped by site template instead.

## Risk assessment

**Data exposure**
- The detailed report download holds up to 1 million rows with site details and owner, business group (department), agent ID, name, type and platform, request volume, operations, site sensitivity, and whether restricted content discovery, restricted site access and external sharing are enabled per site. Treat the download as sensitive and decide where it may be stored.
- Learn says the heatmap does not show end-user identities, and it reports on a chosen period rather than in real time.

**Security & identity**
- Learn lists the SharePoint Administrator or AI Administrator role as the prerequisite. Anyone holding either role can open a report listing agents, sites and owners, so keep those role assignments reviewed.
- The site actions change settings. **Restrict site access** limits a site to members of the groups chosen, and the restricted access control page says users outside the group cannot open the site or its content even with prior permissions or a shared link. For shared channel sites, this applies only to internal users in the resource tenant; external participants from another tenant are not evaluated against the policy, and their access remains governed by shared-channel and site permissions. Apply it only after the site owner has agreed.
- **Restrict content discovery** keeps the site's content out of Microsoft 365 Copilot agent search and discovery without changing permissions, and its own page says users lose entry points such as the Copilot button on that site.

**Autonomy & actions**
- The heatmap observes agents; it does not block an agent. Its actions work on a site, and Learn says content guardrails on the Settings page in Agent governance apply an intent to every agent in scope, including agents created in future.
- Actions show whether agents only read content or also create and update it, from the top three operations per agent and resource in the audit log.

**Change & support**
- The heatmap considers the 500 resources with the most agent activity and shows the top five agent platforms and the top five business groups or sensitivity labels, so a quiet but sensitive site can fall outside the grid. Use the Report tab (top 100 sites) or the detailed report for the full data.
- After a policy is applied from a report, the status in that report does not update until the next report is generated. Expect support questions about a site that still looks unrestricted.
- One report is kept per reporting period (up to four), a new report for a period replaces the old one, and a new report can be generated once every 24 hours. Download a report before replacing it.

## Cost and licensing

**Licence.** The Learn heatmap overview and report pages list "Microsoft Agent 365 or Microsoft 365 E7 license" as the licence requirement and point licensing questions to the Microsoft Product Terms or a Microsoft account representative. The agent governance overview lists the same licence plus the SharePoint Administrator role.

**Meter and price.** The pages read give no price for the licence and describe no meter or credit rate for the heatmap, so cost is rated on the licence prerequisite.

**Indirect cost.** Admin time to prepare labels and business groups, to generate and review reports, and to talk to site owners before restricting a site. Restricting content discovery on a site reduces what Copilot and organisation-wide search can use from it; the restricted content discovery page cautions that excessive use can reduce the completeness and relevance of results.

**Other licences.** The existing agent access insights report is documented separately: its PowerShell route needs a licence for the SharePoint Advanced Management add-on or Microsoft Copilot, and without a SharePoint Advanced Management licence its data collection must be enabled. Do not assume that applies to the heatmap.

## Scope

**Who and what.** The heatmap covers agent activity on SharePoint sites, OneDrive accounts and Teams-connected sites. Learn says it includes declarative agents, Agent 365 agents, and Microsoft and third-party agents registered in Microsoft Entra ID.

**Roles and licence.** SharePoint Administrator or AI Administrator, and a Microsoft Agent 365 or Microsoft 365 E7 licence.

**Prerequisites for the full view.** The sensitivity view uses sensitivity labels applied to sites (container labels); labels applied only to files or emails are not used. The business group view uses the Department category in catalog management, which assigns each site to a department from the Microsoft Entra ID department attribute of the site's owner. A tenant with one of the two gets that one view.

**Clouds and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the Web platform.

**Timing.** Data collection starts when turned on and earlier activity is not included. The first report can be generated after 24 hours, and for large tenants data can take up to 48 hours to become available. If no report is generated for three months, data collection turns off automatically and can be turned on again.

## Governance guidance

### Before rollout
- Confirm who holds the SharePoint Administrator or AI Administrator role and whether the tenant holds a Microsoft Agent 365 or Microsoft 365 E7 licence, as the Learn pages list both as prerequisites.
- Check whether sites already carry sensitivity labels and whether departments are already populated in catalog management before the first report. Learn says each report reflects the configuration in place when it was generated.
- Agree with site owners that they will be consulted before any restriction is applied, because Learn says the site owner usually knows whether an agent belongs with the content.

### At rollout
- Turn on data collection under **Agent governance** > **Agent access heatmap** in the SharePoint admin center (table row 1), and note the date, because activity before that point is not included.
- Wait 24 hours, or up to 48 for a large tenant, then generate the first report for the 28-day period and open its Dashboard.
- Start in the sensitivity view filtered to your most sensitive labels, as Learn suggests, then switch to the business group view to see whose content is involved.

### After rollout
- Regenerate reports on a schedule and download a report before replacing it, because a new report for the same period replaces the old one.
- Apply **Restrict content discovery** (row 2) or restricted site access (row 3) to a site only after the owner has reviewed the agents and operations shown; check first that the tenant-level setting for restricted site access is already allowed, because Learn says it must be enabled before it can be configured for individual sites.
- Check the site's settings after applying a policy, because the policy status in the existing report does not update.
- Keep the Reports > Agent insights report (row 4) in any script that already uses it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>The agent access heatmap, its data collection and its reports</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Admin turns on data collection here if prompted, then generates reports. Needs SharePoint Administrator or AI Administrator, and an Agent 365 or E7 licence.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Agent governance › Agent access heatmap › Generate report <a href="https://learn.microsoft.com/sharepoint/agent-governance-generate-agent-access-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a site's content is discoverable by Copilot and organisation-wide search (heatmap site action)</strong><br><small>Site</small><br><small class="controls__note">Its page says it applies to SharePoint sites, not OneDrive sites, and does not change permissions. Only SharePoint administrators manage it unless delegated.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which groups can access a site (restricted site access, a site action offered from the heatmap)</strong><br><small>Site</small><br><small class="controls__note">Site-level access restriction must first be allowed for the organisation. At least one group is needed to apply it to a site.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restricted site access › Edit › Restrict SharePoint site access to only users in specified groups <a href="https://learn.microsoft.com/sharepoint/restricted-access-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;siteurl&gt; -RestrictedAccessControl $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-access-control" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The existing agent access insights report under Reports &gt; Agent insights (today's alternative, not the heatmap)</strong><br><small>Tenant</small><br><small class="controls__note">A separate report that Learn says remains available. Needs at least SharePoint administrator; PowerShell use needs a SharePoint Advanced Management add-on or Microsoft Copilot licence.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Agent insights › Agent access <a href="https://learn.microsoft.com/sharepoint/insights-on-agent-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOM365AgentAccessInsightsReport -ReportPeriodInDays 28</code> <a href="https://learn.microsoft.com/sharepoint/insights-on-agent-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The heatmap is a visibility tool and enforces nothing; the controls that change agent reach are the two site-level policies below it. Learn says the heatmap does not replace audit log analysis, per-file diagnostics or security investigations.

The SharePoint Administrator or AI Administrator role is listed for the heatmap. The restricted content discovery page says that by default only SharePoint administrators can manage it, with delegation to site administrators available as a tenant setting. Restricted site access must be allowed for the organisation before it can be set on a site, and Microsoft documents it as covering OneDrive as well as SharePoint sites.

The restricted content discovery page says the feature applies to SharePoint sites only and is not supported for OneDrive sites, while the heatmap lists OneDrive accounts among the content it reports on. Row 2 describes the control as that page documents it.

Row 4 is today's report under Reports > Agent insights, which Learn says remains available. It is a different report with its own PowerShell cmdlets and is not a control over the heatmap. Learn also says content guardrails on the Settings page in Agent governance apply intent to every agent in scope; that setting is not a row here because its steps were not read for this briefing.

## Open questions

- When will the agent access heatmap leave preview, and does the roadmap's July CY2026 General Availability target still stand now the record remains In development? Watch the roadmap item and the Learn page.
- Will the heatmap reach GCC, GCC High and DoD as the roadmap lists, and will the licence requirement be the same there?
- What does **Restrict content discovery** do when applied from the heatmap to a OneDrive account, given that the restricted content discovery page says OneDrive sites are not supported?
- Is there a PowerShell cmdlet or API for the heatmap report and its data collection, or will the admin centre remain the only route?
- Does anything else (storage, audit retention) add cost for the heatmap's data collection?

<!-- rationale
risk: Low. The heatmap is a reporting view built from audit data after an admin turns on data collection; any exposure comes from the optional site actions, such as restricting site access, that an admin applies from it.
cost: Medium. Learn lists a Microsoft Agent 365 or Microsoft 365 E7 licence as a prerequisite for the heatmap; the pages read give no price and name no meter.
impact: Low. Learn lists the SharePoint Administrator or AI Administrator role as the prerequisite, so admins are the people who see the heatmap; end users are affected only if an admin applies a site restriction.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; Why it matters; What's changing / default: An administrator always has to turn on data collection, and if nobody acts nothing is collected. | Found: In the SharePoint admin center, expand Agent governance, select Agent access heatmap, and turn on data collection if it isn't already on. | Fix: In the summary replace 'An admin has to turn on data collection and generate a report' with 'An admin generates a report and turns on data collection if it is not already on'. Replace 'If nobody acts, nothing is collected' with 'An admin must generate insights; data collection may already be on'. Do not equate manual report generation with a universally off collection default. Source: https://learn.microsoft.com/sharepoint/agent-access-heatmap-overview. | Source: https://learn.microsoft.com/sharepoint/agent-access-heatmap-overview
- [contradicted, blocker] controls[1].note; Cost and licensing; Governance guidance: After rollout / licensing: The page presents restricted content discovery as an available site action without qualifying its entitlement beyond the heatmap's Agent 365 or E7 prerequisite. | Found: Ensure your organization has a Microsoft Copilot license. ... You can configure Restricted Content Discovery if your organization is licensed for Copilot and has SharePoint Advanced Management available. | Fix: Add to row 2's note and its rendered counterpart: 'Requires the organisation to be licensed for Microsoft Copilot and to have SharePoint Advanced Management available.' Add the same qualification to the advice to apply restricted content discovery. This requirement is stated at https://learn.microsoft.com/sharepoint/restricted-content-discovery; the heatmap's Agent 365 prerequisite alone does not state it. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Timing; Governance guidance: At rollout / behaviour: The first report can be generated after 24 hours. | Found: You can generate your first report after 24 hours. | Fix: Keep the 24-hour guidance and add: 'The heatmap overview also says the first report can be generated within a few hours; the report-generation page specifies 24 hours.' Both pages are already cited: https://learn.microsoft.com/sharepoint/agent-access-heatmap-overview and https://learn.microsoft.com/sharepoint/agent-governance-generate-agent-access-report. | Source: https://learn.microsoft.com/sharepoint/agent-governance-generate-agent-access-report
- [contradicted, minor] Governance guidance: Before rollout; After rollout / consistency: The checklist's controls are represented in the controls table. | Found: Check whether sites already carry sensitivity labels and whether departments are already populated in catalog management ... check first that the tenant-level setting for restricted site access is already allowed. Table rows: heatmap, two site policies, existing report. | Fix: The checklist checks site sensitivity labels, catalog management departments and the tenant-level restricted access setting without corresponding rows. Remove these control-check clauses from the checklist; retain their already documented prerequisites in Scope and the row 3 note. Do not add rows as part of this correction.
-->
