---
title: "Microsoft 365 Copilot: Researcher agent for GCC users"
slug: "m365-copilot-researcher-agent-for-gcc"
roadmapId: 554928
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Researcher, Copilot's multi-step research agent, is launched for GCC users who hold a Microsoft 365 Copilot add-on licence. Check web search, blocking and data-boundary questions before users rely on it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC"]
platforms: ["Android","Desktop","iOS","Web"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "add-on"
  notes: "The roadmap item names a Microsoft 365 Copilot add-on licence. The Copilot service description marks Researcher as needing a Microsoft 365 Copilot licence. A price or credit rate specific to Researcher in GCC is not yet published."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["m365-copilot","researcher","agents","web-search","cloud-policy","m365-admin-center","licensing","copilot-chat","gcc"]
sources:
  - title: "Microsoft 365 Roadmap: Researcher Agent for GCC"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=554928"
    kind: "roadmap"
  - title: "Microsoft Copilot Researcher agent frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/faq-researcher"
    kind: "learn"
  - title: "Get started with Researcher agent in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/researcher-agent"
    kind: "learn"
  - title: "Agent installation in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-agent-install"
    kind: "learn"
  - title: "Microsoft Copilot service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Manage agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-copilot-agents-integrated-apps"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Overview of the Tenant Configuration Management APIs in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/unified-tenant-configuration-management-concept-overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Microsoft Graph national cloud deployments"
    url: "https://learn.microsoft.com/graph/deployments"
    kind: "learn"
  - title: "Anthropic operated models for non-federal customers in GCC"
    url: "https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Whether Researcher and Copilot can use web search (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence Researcher requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence Researcher requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["web-search","cloud-policy","m365-copilot-copilot-cowork-for-government-clouds","m365-copilot-user-can-use-hubspot-connector-in-researcher","m365-copilot-work-iq-apis-researcher-agent-access"]
controls:
  - governs: "Whether Researcher is available to the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Preview package-block API; requires a Microsoft Agent 365 licence. GCC uses the worldwide Graph endpoint. Pages disagree on whether Researcher is subject to agent settings; confirm its package and blocking behaviour first."
  - governs: "Whether Researcher and Copilot can use web search"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview; applyOnce mode. The UI can also target users or groups, but this Graph route supports tenant-level policies only and fails if the setting is configured in any group-level policy."
  - governs: "Which users hold the Microsoft 365 Copilot licence Researcher requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Existing licence route, not a Researcher-specific switch."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-13T23:15:13"
changes:
  - date: "2026-11-25"
    note: "First briefing for Researcher in GCC: launched per the roadmap, with conflicting Microsoft pages on sovereign availability, data boundary and blocking."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: added the Graph package-block API and GCC endpoint note, fixed the web-search path and scope, removed the exclusive-switch claim, and reconciled conflicting Microsoft guidance."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5db9f95658e6e851d7757ba2bcee8c54"
---

## What's changing

Researcher is now listed as launched for Microsoft 365 Copilot in GCC. The roadmap item describes it as an advanced deep reasoning agent that tackles complex, multi-step tasks by acting as a deep research assistant, available to Microsoft 365 business and enterprise users with a Microsoft 365 Copilot add-on licence. The record lists Android, Desktop, iOS and Web.

Microsoft's Copilot service description lists Researcher as available in GCC and GCC High and "Not currently available" in DoD. Microsoft's Researcher FAQ describes it differently: it answers "To be released soon" to the question of availability in sovereign clouds, and says Researcher operates within the Microsoft 365 commercial data processing boundary. This page reports both rather than choosing one.

The FAQ says Researcher uses Microsoft Graph, connectors and the Bing index for recent web data, and that users can run it from Copilot Chat under Tools. It describes Researcher as part of the core default experience for Microsoft Copilot licensed users, but gives no GCC-specific default or rollout mechanism.

The roadmap record gives the status as Launched, the release phase as General Availability and the target date as March CY2026.

## Why it matters

For a GCC tenant, Researcher is a licensed Copilot capability that Microsoft's FAQ says users cannot disable or unpin for themselves, so any restriction has to come from administrators. Microsoft's Agent installation page instead says individual users can share and unpin Microsoft-installed Researcher and Analyst agents. If nobody acts, that page says Researcher is preinstalled and/or pre-pinned in Microsoft Copilot for all licensed users, and the FAQ describes it as part of the core default experience, so check whether it has already reached your users.

The two decisions that matter are web search and boundary assurance. Web search is turned off by default in GCC, so Researcher's web reach depends on a policy you may not have set. The data-boundary wording on Microsoft's pages is inconsistent, and a GCC compliance owner should confirm it before approving use for sensitive work.

## Risk assessment

**Data exposure**

- Researcher reads work data through Microsoft Graph and connectors, according to the FAQ, and the FAQ says it can include archived emails as backfill when the primary inbox lacks enough data. Its reach follows the user's access, so oversharing in SharePoint or mailboxes feeds directly into its reports.
- When web search is allowed, Copilot sends generated search queries to the Bing search service, which Microsoft's web search page says operates separately from Microsoft 365 with different data-handling practices. In GCC, web search is off by default and stays off until the **Allow web search in Copilot** policy is configured.
- Microsoft's pages disagree on the boundary: the FAQ describes the commercial data processing boundary, while the government cloud overview says Microsoft Copilot in GCC operates entirely within the customer's U.S. government cloud tenant. Confirm before relying on either.

**Security & identity**

- The FAQ says Researcher adheres to DLP policies and follows the same policies as Microsoft Copilot. The FAQ names no Purview DLP location or rule action for Researcher specifically.
- The FAQ states that the content of Researcher sessions is not directly accessible to admins or compliance tools by default. Microsoft's web-search guidance, which explicitly applies to Researcher, instead says administrators can search, audit and eDiscover prompts and responses; confirm which guidance applies in GCC.

**Autonomy & actions**

- Researcher is a first-party agent that produces research reports; the FAQ says responses can take 10 to 45 minutes for highly complex queries.
- The FAQ says connector configuration for Researcher is planned ("future updates will allow connector configuration"), so the data it can reach may widen.

**Change & support**

- Blocking Researcher is documented inconsistently: the Agent 365 admin page and the Researcher FAQ say admins can block it, while the Manage agents page says it is not subject to agent-related settings. Test the block in a pilot tenant before promising users a result.
- The FAQ says there is no reporting tool for Researcher and Analyst, yet also says admins can see usage metrics. Expect support questions about who is using it.

## Cost and licensing

**Licence.** The roadmap item says Researcher is available to users with a Microsoft 365 Copilot add-on licence. The Copilot service description says the same in its table notes: a Microsoft 365 Copilot licence is required to access Researcher, and Microsoft 365 Copilot is an add-on plan with licensing prerequisites. Microsoft's licence options page lists Copilot as an add-on in GCC, GCC High and DoD for eligible plans.

**Meter and limits.** Microsoft's licensing pages name the Copilot add-on licence and publish no separate Researcher price or meter at the time of writing (November 2026). The FAQ states a maximum of 25 queries per user per month; that FAQ also describes a commercial boundary, so confirm the figure applies to GCC.

**Indirect cost.** Admin time to set web search, test blocking and brief users; licence assignment for any users not yet covered. A price or credit rate specific to Researcher in GCC is not yet published.

## Scope

**Users and licences.** Users with a Microsoft 365 Copilot licence in GCC. The roadmap record lists the GCC cloud only.

**Other clouds.** The service description lists Researcher as available in GCC High and not currently available in DoD; this item covers GCC only.

**Platforms.** Android, Desktop, iOS and Web per the roadmap record. The FAQ says it is available on iOS and Android in the Copilot mobile app.

**Rollout.** Roadmap status Launched, General Availability, target March CY2026. No rollout mechanism or GCC Message Center post was supplied.

## Governance guidance

### Before rollout

- Confirm with your Microsoft account team or Message center that Researcher is enabled for your GCC tenant, because the Researcher FAQ still says sovereign cloud availability is to be released soon.
- Decide whether web search should be on for Researcher, and name the group allowed to use it, before changing the **Allow web search in Copilot** policy.
- Review who holds the Microsoft 365 Copilot licence, since the service description says a Copilot licence is required for Researcher.
- Ask your compliance owner to decide which data boundary statement applies, given the two Microsoft pages that differ.

### At rollout

- Test the **Block** action for Researcher in the Microsoft 365 admin center with a pilot user and record whether it takes effect in GCC.
- Set the **Allow web search in Copilot** policy deliberately: the option that disables Copilot Work mode web search also disables it in Researcher.
- Tell users that Researcher is part of the Copilot experience and that web search is a separate choice.

### After rollout

- Check Message center and the Researcher FAQ for GCC-specific changes, including the connector configuration the FAQ says is planned.
- Revisit web search and licence assignment if use grows beyond the pilot group.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Researcher is available to the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Preview package-block API; requires a Microsoft Agent 365 licence. GCC uses the worldwide Graph endpoint. Pages disagree on whether Researcher is subject to agent settings; confirm its package and blocking behaviour first.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Researcher and Copilot can use web search</strong><br><small>Tenant</small><br><small class="controls__note">Preview; applyOnce mode. The UI can also target users or groups, but this Graph route supports tenant-level policies only and fails if the setting is configured in any group-level policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Create › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/copilot/plan/manage-public-web-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence Researcher requires</strong><br><small>User</small><br><small class="controls__note">Existing licence route, not a Researcher-specific switch.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Agent 365 actions page documents tenant-wide blocking for Researcher, and the pages disagree on it: the Agent 365 admin page says the **Edit users** panel is disabled for Researcher and that its availability is managed by blocking it for the tenant, while the Manage agents page says Researcher is not subject to agent-related settings. Treat the block as something to test.

Web search is controlled by Cloud Policy, not by an agent setting. In GCC the policy must be configured for web search to work, and the option that disables Copilot Work mode web search also disables it in Researcher. For the Graph route, the Tenant Configuration Management page says it supports these Copilot settings only in tenant-level policies in the Microsoft 365 Apps admin center, and names AI Administrator as the least-privileged role for remediation and applyOnce.

The Copilot licence row is the existing route to control who can use Researcher; it is not a Researcher-specific control.

## Open questions

- Is Researcher enabled for GCC tenants now, given the Researcher FAQ's "To be released soon" answer for sovereign clouds? Watch Message center and the Researcher FAQ.
- Which data boundary applies to Researcher in GCC: the commercial boundary the FAQ describes, or the U.S. government cloud tenant the government overview describes?
- Does the Block action in the Microsoft 365 admin center work for Researcher in GCC? GCC uses the worldwide Graph endpoint; the package-block API supports the global service but requires an Agent 365 licence.
- Which guidance applies to Researcher in GCC for audit and eDiscovery: the FAQ's statement that session content is not directly accessible to admins or compliance tools, or the web-search page's statement that admins can search, audit and eDiscover prompts and responses?
- Does the non-federal GCC Anthropic opt-in extend to Researcher? Microsoft's non-federal GCC page currently documents model-picker access only in Copilot Chat in the Microsoft Copilot app and on the web; federal GCC, GCC High and DoD customers are excluded.

<!-- rationale
risk: Medium. Researcher reasons over work data and, where web search is allowed, the web; existing controls cover both, but Microsoft's pages disagree on the data boundary and on whether it can be blocked.
cost: Low. Users need the Microsoft 365 Copilot add-on licence; no separate Researcher licence or meter is published, so a tenant already licensing Copilot adds mainly admin time.
impact: Medium. Researcher reaches Copilot-licensed GCC users on desktop, web and mobile, and the FAQ says users cannot remove it themselves.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls / admin-path: Web search is configured through Microsoft 365 Apps admin center > Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow web search in Copilot. | Found: Under Customization, select Policy Management. On the Policy configurations page, select Create. On the Start with the basics page, enter a name (required) and a description (optional), then select Next. | Fix: Complete the path in controls[1].ui and its rendered row as 'Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot'. The existing Cloud Policy source supplies the omitted heading and name-entry page; the cited web-search article supplies the final policy. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] controls[1].api; controls[1].note; Governance controls / command: POST /beta/admin/configurationManagement/configurationMonitors can set web search using applyOnce mode. | Found: Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency to detect configuration drift in monitorOnly mode, or applies a desired-state baseline once in applyOnce mode. | Fix: Keep the call unchanged. Add to controls[1].note and the rendered row: 'The request body sets mode to applyOnce and includes a baseline resource with resourceType microsoft.copilot.allowwebsearch, resourceVersion 1 and properties.value: "0" enables web search in both experiences, "1" disables it in both, and "2" disables Work mode web search, including Researcher.' The resource and property values are documented at https://learn.microsoft.com/graph/utcm-copilot-resources#allowwebsearch-resource-type. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
-->
