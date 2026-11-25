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
  - title: "Copilot Cowork in Government Community Cloud (GCC)"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-government"
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
    api: null
    note: "Pages differ on whether Researcher is subject to agent settings. The Graph block API lists US Government L4 as unavailable and needs an Agent 365 licence."
  - governs: "Whether Researcher and Copilot can use web search"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview. Baseline resource microsoft.copilot.allowwebsearch, applyOnce mode. The TCM overview says global service only; this reference marks US Government L4 supported. Confirm for GCC."
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
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 58
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "bdb7ddaf5b4b13b8771265161dcc75d1"
---

## What's changing

Researcher is now listed as launched for Microsoft 365 Copilot in GCC. The roadmap item describes it as an advanced deep reasoning agent that tackles complex, multi-step tasks by acting as a deep research assistant, available to Microsoft 365 business and enterprise users with a Microsoft 365 Copilot add-on licence. The record lists Android, Desktop, iOS and Web.

Microsoft's Copilot service description lists Researcher as available in GCC and GCC High and "Not currently available" in DoD. Microsoft's Researcher FAQ describes it differently: it answers "To be released soon" to the question of availability in sovereign clouds, and says Researcher operates within the Microsoft 365 commercial data processing boundary. This page reports both rather than choosing one.

The FAQ says Researcher uses Microsoft Graph, connectors and the Bing index for recent web data, and that users can run it from Copilot Chat under Tools. It describes Researcher as part of the core default experience for Microsoft Copilot licensed users, but gives no GCC-specific default or rollout mechanism.

The roadmap record gives the status as Launched, the release phase as General Availability and the target date as March CY2026.

## Why it matters

For a GCC tenant, Researcher is a licensed Copilot capability that Microsoft's FAQ says users cannot disable or unpin for themselves, so any restriction has to come from administrators. If nobody acts, the FAQ's description is that licensed users have it, so check whether it has already reached your users.

The two decisions that matter are web search and boundary assurance. Web search is turned off by default in GCC, so Researcher's web reach depends on a policy you may not have set. The data-boundary wording on Microsoft's pages is inconsistent, and a GCC compliance owner should confirm it before approving use for sensitive work.

## Risk assessment

**Data exposure**

- Researcher reads work data through Microsoft Graph and connectors, according to the FAQ, and the FAQ says it can include archived emails as backfill when the primary inbox lacks enough data. Its reach follows the user's access, so oversharing in SharePoint or mailboxes feeds directly into its reports.
- When web search is allowed, Copilot sends generated search queries to the Bing search service, which Microsoft's web search page says operates separately from Microsoft 365 with different data-handling practices. In GCC, web search is off by default and stays off until the **Allow web search in Copilot** policy is configured.
- Microsoft's pages disagree on the boundary: the FAQ describes the commercial data processing boundary, while the government cloud overview says Microsoft Copilot in GCC operates entirely within the customer's U.S. government cloud tenant. Confirm before relying on either.

**Security & identity**

- The FAQ says Researcher adheres to DLP policies and follows the same policies as Microsoft Copilot. The FAQ names no Purview DLP location or rule action for Researcher specifically.
- The FAQ states that the content of Researcher sessions is not directly accessible to admins or compliance tools by default. Whether audit and eDiscovery cover Researcher in GCC is an open question for compliance teams.

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
- Re-test audit and eDiscovery visibility of Researcher activity with your compliance team, given the FAQ's statement about session content.
- Revisit web search and licence assignment if use grows beyond the pilot group.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Researcher is available to the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Pages differ on whether Researcher is subject to agent settings. The Graph block API lists US Government L4 as unavailable and needs an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Researcher and Copilot can use web search</strong><br><small>Group</small><br><small class="controls__note">Preview. Baseline resource microsoft.copilot.allowwebsearch, applyOnce mode. The TCM overview says global service only; this reference marks US Government L4 supported. Confirm for GCC.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence Researcher requires</strong><br><small>User</small><br><small class="controls__note">Existing licence route, not a Researcher-specific switch.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Blocking Researcher is the only documented switch for the agent itself, and the pages disagree on it: the Agent 365 admin page says the **Edit users** panel is disabled for Researcher and that its availability is managed by blocking it for the tenant, while the Manage agents page says Researcher is not subject to agent-related settings. Treat the block as something to test.

Web search is controlled by Cloud Policy, not by an agent setting. In GCC the policy must be configured for web search to work, and the option that disables Copilot Work mode web search also disables it in Researcher. For the Graph route, the Tenant Configuration Management page says it supports these Copilot settings only in tenant-level policies in the Microsoft 365 Apps admin center, and names AI Administrator as the least-privileged role for remediation and applyOnce.

The Copilot licence row is the existing route to control who can use Researcher; it is not a Researcher-specific control.

## Open questions

- Is Researcher enabled for GCC tenants now, given the Researcher FAQ's "To be released soon" answer for sovereign clouds? Watch Message center and the Researcher FAQ.
- Which data boundary applies to Researcher in GCC: the commercial boundary the FAQ describes, or the U.S. government cloud tenant the government overview describes?
- Does the Block action in the Microsoft 365 admin center work for Researcher in GCC, and is there a Graph or PowerShell equivalent there? The Graph block API page lists US Government L4 as unavailable.
- Do Purview Audit and eDiscovery cover Researcher prompts and responses in GCC, given the FAQ's statement that session content is not directly accessible to admins?
- Is Claude in Researcher available in GCC? The FAQ says Claude can be enabled in Researcher, while the Cowork GCC page says Anthropic models aren't available in government clouds.

<!-- rationale
risk: Medium. Researcher reasons over work data and, where web search is allowed, the web; existing controls cover both, but Microsoft's pages disagree on the data boundary and on whether it can be blocked.
cost: Low. Users need the Microsoft 365 Copilot add-on licence; no separate Researcher licence or meter is published, so a tenant already licensing Copilot adds mainly admin time.
impact: Medium. Researcher reaches Copilot-licensed GCC users on desktop, web and mobile, and the FAQ says users cannot remove it themselves.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; controls[0].note; Open questions / absence: Blocking automation is not documented for GCC, with US Government L4 unavailability offered as the reason. | Found: Microsoft Graph for US Government L4 (GCC High) ... If you're working in a Microsoft 365 GCC environment, continue using the worldwide endpoints: https://portal.azure.com and https://graph.microsoft.com. | Fix: Do not treat GCC as L4. Replace the null API with the documented general package operation POST /beta/copilot/admin/catalog/packages/{id}/block, docs https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block. Set the note to 'Preview package-block API; requires a Microsoft Agent 365 licence. GCC uses the worldwide Graph endpoint. Microsoft pages disagree on whether Researcher is subject to agent settings; confirm the Researcher package and blocking behaviour before use.' Replace the Open questions API sentence with 'GCC uses the worldwide Graph endpoint; the package-block API supports the global service but requires an Agent 365 licence.' Cite the API page and https://learn.microsoft.com/graph/deployments. | Source: https://learn.microsoft.com/graph/deployments
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The web-search route is Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow web search in Copilot, documented by the Cloud Policy overview. | Found: On the Policy configurations page, select Create. ... On the Choose the scope page ... On the Configure Settings page, select the policies that you want to include in the policy configuration. | Fix: Replace the path with 'Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow web search in Copilot'. Set ui.docs to https://learn.microsoft.com/copilot/plan/manage-public-web-access, which documents the control itself; retain the Cloud Policy overview in sources for the route into the wizard. The current overview link alone does not show the control's last step. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [contradicted, blocker] controls[1].scope; controls[1].note; Governance controls / applicability: The web-search row presents its Graph operation as automation for a group-scoped control. | Found: TCM supports these settings only in tenant-level policies in the Microsoft 365 Apps admin center. Before using TCM, ensure that the target setting isn't configured in any group-level policy ... monitoring, snapshots, remediation, and applyOnce fail for that resource. | Fix: Set controls[1].scope to tenant. Add to its note: 'The UI can also target users or groups, but this Graph route supports tenant-level policies only and fails if the setting is configured in any group-level policy.' Retain group-targeting advice only for the UI route. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources
- [contradicted, blocker] Governance controls / absence: Blocking Researcher is the only documented switch for the agent itself. | Found: Alternately, administrators can disable or restrict Copilot extensibility for their organization, however this will apply to non-Microsoft deployed agents, as well as Microsoft-deployed agents. | Fix: Replace 'Blocking Researcher is the only documented switch for the agent itself' with 'The Agent 365 actions page documents tenant-wide blocking for Researcher'. This removes the unsupported exclusivity without adding another control; retain the existing discussion of conflicting agent-setting documentation. | Source: https://learn.microsoft.com/copilot/manage/copilot-agent-install
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; Why it matters; rationale: impact / default: Researcher is on by default for Copilot-licensed GCC users if administrators do nothing. | Found: These agents and features, built by Microsoft, are preinstalled and/or pre-pinned in Microsoft Copilot for all licensed users. Currently, only Researcher and Analyst are deployed this way. | Fix: Keep defaultState on. Cite https://learn.microsoft.com/copilot/manage/copilot-agent-install and attribute the default to its statement that Researcher is preinstalled and/or pre-pinned for all licensed users, rather than relying only on the commercial-boundary FAQ. Retain the existing sovereign-availability disagreement. | Source: https://learn.microsoft.com/copilot/manage/copilot-agent-install
- [supported, minor] Why it matters; rationale: impact / behaviour: The FAQ says users cannot independently remove or unpin Researcher. | Found: Researcher agent is a core part of the Microsoft Copilot experience and users cannot independently remove or unpin it. | Fix: Add 'Microsoft's Agent installation page instead says individual users can share and unpin Microsoft-installed Researcher and Analyst agents.' Cite https://learn.microsoft.com/copilot/manage/copilot-agent-install; retain the attributed FAQ statement rather than choosing between the conflicting pages. | Source: https://learn.microsoft.com/copilot/manage/faq-researcher
- [supported, minor] Risk assessment: Data exposure / applicability: Researcher's access to work content follows the user's permissions. | Found: Researcher draws insights from both the web and your work content - including files, emails, meetings, and chats you have access to. | Fix: Add https://learn.microsoft.com/copilot/manage/researcher-agent to sources for the user-permissions statement. | Source: https://learn.microsoft.com/copilot/manage/researcher-agent
- [supported, minor] Risk assessment: Security & identity; Governance guidance: After rollout; Open questions / behaviour: The FAQ states that Researcher session content is not directly accessible to administrators or compliance tools by default. | Found: By default, no. The content of Researcher sessions isn't directly accessible to admins or compliance tools. Admins can see usage metrics (like how many times it's used) but not the actual conversation content. | Fix: After this attributed statement, add 'Microsoft's web-search guidance, which explicitly applies to Researcher, instead says administrators can search, audit and eDiscover prompts and responses; confirm which guidance applies in GCC.' The source is the already-cited https://learn.microsoft.com/copilot/plan/manage-public-web-access. Frame the open question as this documentation conflict. | Source: https://learn.microsoft.com/copilot/manage/faq-researcher
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Researcher produces research reports. | Found: Researcher agent is an intelligent assistant within Microsoft Copilot, designed to handle complex, multi-step research tasks. It delivers comprehensive, source-cited reports | Fix: Cite https://learn.microsoft.com/copilot/manage/researcher-agent for production of research reports; the cited FAQ already supports its first-party status. | Source: https://learn.microsoft.com/copilot/manage/researcher-agent
- [supported, minor] controls[0].note; Governance controls table / licensing: The package-block API requires a Microsoft Agent 365 licence. | Found: Access to the Package Management API requires a Microsoft Agent 365 license. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block to sources; it is mentioned in the writer's evidence but not cited in the briefing. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [supported, minor] controls[1].api; controls[1].note; Governance controls table / command: POST /beta/admin/configurationManagement/configurationMonitors can apply the microsoft.copilot.allowwebsearch baseline in applyOnce mode. | Found: POST /admin/configurationManagement/configurationMonitors ... mode ... monitorOnly, applyOnce, unknownFutureValue ... An active applyOnce monitor runs in the background on behalf of the signed-in administrator and then becomes inactive. | Fix: Keep the call. In the note explicitly name the request properties: 'Set mode to applyOnce and baseline.resources to resourceType microsoft.copilot.allowwebsearch, resourceVersion 1, with properties.value: "0" enables web search, "1" disables it, "2" disables Work mode only.' Values are documented at the already-cited https://learn.microsoft.com/graph/utcm-copilot-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] Open questions / availability: The Cowork GCC page says Anthropic models are not available in government clouds. | Found: Anthropic models aren't available in government clouds. The generic instruction that an admin can enable them doesn't apply here. | Fix: Narrow the question to 'Does the non-federal GCC Anthropic opt-in extend to Researcher? Microsoft's non-federal GCC page currently documents model-picker access only in Copilot Chat in the Microsoft Copilot app and on the web; federal GCC, GCC High and DoD customers are excluded.' Cite https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc and https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor. The Cowork page is not sufficient to establish a blanket Researcher exclusion. | Source: https://learn.microsoft.com/copilot/cowork/cowork-government
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks readers to re-test audit and eDiscovery visibility, but neither control appears in the controls table. | Found: Re-test audit and eDiscovery visibility of Researcher activity with your compliance team ... Controls rows cover only agent blocking, web search and licence assignment. | Fix: Remove the 'Re-test audit and eDiscovery visibility' checklist bullet; keep the documentation-conflict question in Open questions. No new control row is requested.
-->
