---
title: "SharePoint: Copilot in SharePoint, with advanced work billed in Copilot Credits"
slug: "m365-copilot-copilot-in-sharepoint"
roadmapId: 501451
topic: "m365-copilot"
products: ["SharePoint","SharePoint Syntex","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in SharePoint is rolling out to general availability. Everyday use is included with a Microsoft 365 Copilot licence; advanced work uses Copilot Credits and needs a spending policy. Admins should check policies and site controls."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "September CY2025"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Everyday capabilities are included with the Microsoft 365 Copilot licence. Advanced work needs usage-based billing, a spending policy and available Copilot Credits. Credit rates for specific tasks are not stated on the page read."
audiences: ["m365-admin","finops","service-owner","security"]
tags: ["sharepoint","m365-copilot","copilot-credits","usage-based-billing","spending-policies","cost-management","sharepoint-advanced-management","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 501451"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501451"
    kind: "roadmap"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Create spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    kind: "learn"
  - title: "MC1479277: (Updated) Microsoft Copilot: New ways to work across Microsoft Copilot and Microsoft 365"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1479277"
    kind: "message-center"
videos: []
related: ["copilot-credits","m365-admin-center-copilot-credits-usage-report","m365-admin-center-agent-level-pay-as-you-go-controls","sharepoint-admin-center-data-access-governance-permission-report-for-a-given-group"]
controls:
  - governs: "Whether Copilot in SharePoint appears on a site, and what site owners choose"
    scope: "site"
    ui:
      surface: "SharePoint site (site owner)"
      path: "Settings > Site AI"
      docs: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    api: null
    note: "Site owners choose the global header agent, hide the Copilot button for visitors and enable advanced document processing."
  - governs: "Removing Copilot in SharePoint and AI actions from selected sites"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Needs a Microsoft Copilot licence and SharePoint Advanced Management. Affects discoverability, not permissions."
  - governs: "Preview-era tenant and site availability scope for Copilot in SharePoint"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -KnowledgeAgentScope NoSites"
      docs: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    note: "Retired: existing settings were honoured until November 1, 2026. Valid values are AllSites, IncludeSelectedSites, ExcludeSelectedSites and NoSites."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-17"
    note: "New briefing: Copilot in SharePoint reaches general availability, with advanced work billed in Copilot Credits and preview PowerShell controls retired."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 101 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected: Microsoft documents spending-policy creation through a beta Microsoft Graph API, so the spending-policy control row and the claim of no automation were removed; added the setup-page link and the Auto-apply new services label."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 110 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 110
  confirmed: 109
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "406426cdbb064b9169e2cadbf709b312"
---

## What's changing

Copilot in SharePoint is an agentic assistant inside SharePoint. Microsoft's Learn page says teams can ask questions, run workflows, and create sites, pages, interactive reports and Office files from their SharePoint content in natural language.

Microsoft splits the capabilities in two. Everyday capabilities, such as asking questions, creating Word, Excel, PowerPoint or HTML files, creating and editing pages, libraries and lists, and Autofill metadata, stay included with the Microsoft 365 Copilot licence. Advanced work, such as creating entire sites and solutions, working across large or unbounded content sets, real-time Autofill metadata, image generation and site analytics, requires usage-based billing and consumes Copilot Credits. Users with credits are asked to approve credit use before Copilot continues.

Availability controls change at general availability (GA). The Learn page says the preview PowerShell parameters (`KnowledgeAgentScope`, `KnowledgeAgentSelectedSitesList`, `KnowledgeAgentSelectedSitesListOperation`) are being retired, that existing settings were honoured until November 1, 2026, and that availability is managed afterwards through Site AI settings and Restricted Content Discovery. The same page says the weekly limits from public preview are removed at GA, although daily service protection limits may still apply in rare cases.

Status and dates differ between sources. The roadmap item has status Launched, with release phases General Availability and Preview, a preview date of September CY2025 and a target of September CY2026; its description still says Microsoft is in development for GA and has launched to Preview only. The Learn page says the feature is in public preview and that GA begins rolling out on September 30, 2026, with capabilities appearing in tenants as rollout progresses. Microsoft's notice MC1479277 (published 2026-09-25, updated 2026-11-09) announces GA of Copilot in SharePoint and Copilot in OneDrive, says GA begins rolling out later that month and says tenant availability may follow as rollout progresses. MC1479277 sets no act-by date.

## Why it matters

This change reaches users and spend without an administrator doing anything. The Learn page says Copilot-licensed users need no opt-in step for everyday capabilities, and MC1479277 says no action is required to keep using them. The decisions fall on the credit-consuming side: advanced work is available only through a spending policy, and Microsoft says existing cost management policies might automatically include newly available services.

The tenant-wide opt-in or opt-out that preview used is retired. After the November 1, 2026 date, a tenant that relied on `Set-SPOTenant -KnowledgeAgentScope NoSites` to keep Copilot in SharePoint off should not assume that setting still holds. Plan to use site-level controls instead, and check what users see today.

## Risk assessment

**Data exposure**

- Restricted Content Discovery is the documented control for sites that need review before Copilot touches them. Where it is enabled, the Learn page says Copilot in SharePoint and AI actions do not appear on that site, whatever the other availability settings.
- Restricted Content Discovery does not change permissions: users who already have access keep it. Use it for sites with oversharing or permissions under review, and sparingly, because the Restricted Content Discovery page warns that excessive use reduces the content available to search and Copilot.

**Security & identity**

- Microsoft Learn describes site owners choosing, in Site AI settings, which agent opens from the global header, hiding the Copilot button for visitors and enabling advanced document processing for the site. Site owners therefore hold some of the availability decisions; confirm who your site owners are before relying on a central setting.
- Which identity Copilot in SharePoint acts under, and what it can read beyond the user's own permissions, is not described on the page read. Confirm this with Microsoft before treating it as covered by existing permissions.

**Autonomy & actions**

- Advanced work includes building multistep AI workflows, scheduled AI automations, creating entire sites and creating and editing files, pages, libraries and lists at scale. The Learn page says Copilot asks the user to approve credit use before moving into advanced work; it does not describe an approval step for each change Copilot then makes.

**Change & support**

- Spend: the Learn page says existing cost management policies might include the new service automatically when the **Allow new agents and services as they become available** option is on. The general spending-policy guide calls this setting **Auto-apply new services**. Review each policy before users start asking for advanced work.
- Users who run out of credits get an explanation of what Copilot cannot complete, and users warned at 20% of their monthly limit may request more credits. Expect requests to reach IT.
- Support: the preview PowerShell parameters retain their preview names and were honoured only until November 1, 2026, so scripts and runbooks that use them need updating.

## Cost and licensing

**Licence.** Users must have an active Microsoft 365 Copilot licence. The Learn page says everyday Copilot in SharePoint capabilities are included with it at no extra cost, and MC1479277 says the everyday capabilities that were in public preview stay included with the licence.

**Meter.** Advanced work uses Copilot Credits through usage-based billing. Users need usage-based billing enabled through a spending policy in the Microsoft 365 admin center and available Copilot Credits. For site-wide, real-time metadata Autofill, usage-based billing must also be enabled for the SharePoint site. The Learn page says credit consumption varies with the type and complexity of the task and the nature and volume of the content; it points to the Copilot Credits Guide for example scenarios and states no per-task rate.

**Caps.** The spending policy has **Limits and alerts**. On Microsoft's usage-based billing page, a policy with a limited monthly budget stops access to agents and services for the rest of the month when users hit the limit, until credits reset on the first of the month, and the page asks for at least 2,000 credits per user per month in per-user limits. That page describes identity-based policies generally; the SharePoint page is the one that lists **Advanced work in SharePoint** as a service to select.

**Indirect cost.** Admin time to review spending policies and site settings, and communications to content and site managers. The Learn page suggests prioritising credits for content managers and site managers rather than all SharePoint users. The SharePoint page states no credit price.

## Scope

**Users and licences.** Users need a Microsoft 365 Copilot licence. Advanced work additionally needs a spending policy and available credits.

**Clouds and platform.** The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform. The Learn page adds that Microsoft 365 Government (GCC, GCC High, DoD), Office 365 air-gapped cloud environments and Microsoft 365 operated by 21Vianet do not currently support Copilot in SharePoint.

**Rollout.** Microsoft's notice MC1479277 says GA begins rolling out later in the month it was published, and the Learn page gives September 30, 2026 as the start. Both say capabilities may reach tenants at different times as rollout progresses.

**Roles.** The Learn page gives site owners the Site AI settings panel. Restricted Content Discovery is managed by SharePoint administrators by default; the Restricted Content Discovery page describes delegation to site administrators. The roles needed to create spending policies are covered on Microsoft's [usage-based billing setup page](https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup) for Copilot Credits.

**Languages.** Copilot in SharePoint supports only languages that appear in both the SharePoint Online and Microsoft Copilot supported-language lists, according to the Learn page.

## Governance guidance

### Before rollout

- Review every existing spending policy in Microsoft 365 admin center > Copilot > Cost management, and decide whether each should include **Advanced work in SharePoint** automatically.
- Identify who needs credits: the Learn page names knowledge managers, records managers, SharePoint administrators and intranet managers as the priority groups.
- Replace any use of `Set-SPOTenant -KnowledgeAgentScope` in scripts and runbooks with site-level controls, and record which sites relied on the exclusion list.
- Apply Restricted Content Discovery to sites under permissions review, and tell site owners what Site AI settings let them change.

### At rollout

- Create or edit a spending policy that selects **Advanced work in SharePoint**, scoped to a security group, with limits and alerts set, for the people who need it.
- Tell content and site managers that Copilot asks for approval before credit use, and that `/cost` shows credits used and the monthly limit remaining.
- Check a pilot site's Settings > Site AI panel to see what site owners can change.

### After rollout

- Watch the policy alerts and the requests for more credits that users raise from the warning prompt.
- Re-run a check on the Restricted Content Discovery status of sensitive sites after changes, allowing time for propagation.
- Recheck the Learn page for rollout status, because it still says public preview while the roadmap says Launched.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in SharePoint appears on a site, and what site owners choose</strong><br><small>Site</small><br><small class="controls__note">Site owners choose the global header agent, hide the Copilot button for visitors and enable advanced document processing.</small></td><td data-label="Admin UI"><strong>SharePoint site (site owner)</strong><br>Settings › Site AI <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removing Copilot in SharePoint and AI actions from selected sites</strong><br><small>Site</small><br><small class="controls__note">Needs a Microsoft Copilot licence and SharePoint Advanced Management. Affects discoverability, not permissions.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Preview-era tenant and site availability scope for Copilot in SharePoint</strong><br><small>Tenant</small><br><small class="controls__note">Retired: existing settings were honoured until November 1, 2026. Valid values are AllSites, IncludeSelectedSites, ExcludeSelectedSites and NoSites.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -KnowledgeAgentScope NoSites</code> <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Spending policies are the only documented cap on advanced work. They govern credit spend and who can use the credit-consuming capabilities; they are not an availability switch for everyday capabilities.

Microsoft is retiring the tenant-wide PowerShell switch for availability, and Microsoft Learn documents no tenant-level admin centre setting for it at the time of writing (November 2026). Site-level controls are the replacement the Learn page names.

Restricted Content Discovery needs a Microsoft Copilot licence and SharePoint Advanced Management, according to its Learn page. Site AI settings are a site-owner panel, so a central administrator cannot assume they have been set.

Microsoft Learn documents no PowerShell or API for Site AI settings at the time of writing (November 2026). Microsoft documents spending-policy creation through a beta Microsoft Graph API; production use is not supported ([Create spendingPolicy](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create)).

## Open questions

- Which identity does Copilot in SharePoint act under for advanced work, and can it read content the user could not open directly? Watch the Learn page and Message center.
- What happens to tenants that left the preview PowerShell setting at its default of `NoSites` now that the setting is no longer honoured? Watch the Learn page and MC1479277 updates.
- What credit rates apply to each advanced SharePoint capability? The Learn page states none and points to the Copilot Credits Guide.
- When will the Learn page and the roadmap item agree on GA status, given that the page says public preview and the roadmap says Launched?
- Is there an API or PowerShell setting for Site AI settings? Microsoft Learn documents none at the time of writing (November 2026). Microsoft documents spending-policy creation through a beta Microsoft Graph API; production use is not supported.

<!-- rationale
risk: Medium. Existing spending policies might automatically include the new advanced-work service, and preview PowerShell availability controls stopped being honoured after November 1, 2026.
cost: Variable. Everyday use is included with the Microsoft 365 Copilot licence; advanced work consumes Copilot Credits through usage-based billing, and the amount varies with the task.
impact: Medium. Copilot-licensed SharePoint users see it; site and content managers are the people most likely to reach the credit-consuming capabilities.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support / behaviour: Users are warned at 20% of their monthly limit. | Found: When 20% of the monthly credit limit remains, Copilot notifies the user that usage-based features pause until the next month when the limit is reached. | Fix: Replace 'users warned at 20% of their monthly limit' with 'users warned when 20% of their monthly credit limit remains'. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [supported, minor] What's changing: replacement availability controls; Why it matters; Governance controls / applicability: After November 1, 2026, availability is managed using Site AI settings and Restricted Content Discovery. | Found: After November 1, 2026, manage availability using Site AI settings and Restricted Content Discovery. | Fix: Add: 'The separate Create sites with AI page still calls site creation preview and requires tenant opt-in using All Sites or Exclude Selected Sites, which conflicts with the get-started page's retirement guidance (https://learn.microsoft.com/sharepoint/create-sites-with-ai).' | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls table / consistency: The governance checklist's spending-policy control is represented in the controls table. | Found: Checklist: 'Create or edit a spending policy'. Table controls: 'Whether Copilot in SharePoint appears on a site'; 'Removing Copilot in SharePoint and AI actions from selected sites'; 'Preview-era tenant and site availability scope for Copilot in SharePoint'. | Fix: The checklist steps to review and configure spending policies, including service coverage, group scope, limits and alerts, have no corresponding controls-table row. Record this omission; this correction does not require adding a row.
-->
