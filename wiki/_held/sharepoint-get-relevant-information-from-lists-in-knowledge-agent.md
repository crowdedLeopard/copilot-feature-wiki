---
title: "SharePoint: find information and get answers from Lists in Knowledge Agent"
slug: "sharepoint-get-relevant-information-from-lists-in-knowledge-agent"
roadmapId: 527837
topic: "m365-copilot"
products: ["SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "Roadmap item: Knowledge Agent in SharePoint will answer questions from Microsoft Lists. Learn now calls the agent Copilot in SharePoint, licensed with Microsoft 365 Copilot. Admins should check site controls and spending policies."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: "January CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn says everyday Copilot in SharePoint capabilities are included with the Microsoft 365 Copilot licence, and advanced work uses Copilot Credits through usage-based billing. A licence or meter specific to lists is not yet published."
audiences: ["m365-admin","service-owner","finops"]
tags: ["sharepoint","m365-copilot","copilot-in-sharepoint","restricted-content-discovery","copilot-credits","usage-based-billing","spending-policies","powershell"]
sources:
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 527837"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=527837"
    kind: "roadmap"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","spending-policies","copilot-credits","sharepoint-copilot-search-in-sharepoint-and-onedrive"]
controls:
  - governs: "Whether Copilot in SharePoint and Copilot discovery are available on a site"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Learn says Copilot in SharePoint and AI actions don't appear on a site where this is on. It does not change permissions. Needs a Copilot licence and SharePoint Advanced Management."
  - governs: "Tenant-wide or per-site availability of Copilot in SharePoint (preview setting, being retired)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -KnowledgeAgentScope NoSites"
      docs: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    note: "Other values are AllSites, IncludeSelectedSites and ExcludeSelectedSites. Learn says these parameters are retiring and remain in effect until 1 November 2026."
  - governs: "Monthly credit limits on a spending policy that covers advanced work in SharePoint"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Add spending policy > Limits and alerts"
      docs: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API. The request body sets periodLimit and perUserLimit. Applies to advanced work, not to the included everyday capabilities."
  - governs: "Which users hold the Microsoft 365 Copilot licence that Copilot in SharePoint requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Needs at least the License Administrator or User Administrator role."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-11-18T17:15:10"
changes:
  - date: "2026-11-22"
    note: "New briefing. Learn now describes this area as Copilot in SharePoint, with everyday use included in the Microsoft 365 Copilot licence and advanced work billed in Copilot Credits."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 53
  unconfirmed: 0
  contradicted: 8
  attempts: 1
  hash: "77c6f35095484a1b4b9b439294424a85"
---

## What's changing

The roadmap item says users will be able to find relevant information, matching items and get answers from Microsoft Lists using Knowledge Agent. The record gives the status as In development, a preview target of January CY2026 and a target date of February CY2026, with General Availability and Preview as release phases, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. Both target months have passed at the time of writing (November 2026) while the record still reads In development.

Microsoft Learn has no page that describes this lists capability under the name Knowledge Agent. The Learn page [Get started with Copilot in SharePoint](https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started) keeps `KnowledgeAgent` parameter names for its availability settings and says the feature is now described as Copilot in SharePoint. This briefing treats the roadmap's Knowledge Agent as that product, and lists that identification as something to confirm. What follows about behaviour is that page's description of Copilot in SharePoint, not a description of this roadmap item.

That page lists lists among the content Copilot in SharePoint works with: its included capabilities cover questions, finding content and creating or editing lists. It says Copilot in SharePoint is in public preview and that general availability begins rolling out on 30 September 2026, with capabilities appearing in a tenant after that date as the rollout progresses.

## Why it matters

Learn says everyday Copilot in SharePoint capabilities need a Microsoft 365 Copilot licence and no opt-in step, while the preview PowerShell setting that governed availability had a default of `NoSites`. Microsoft has not stated what happens on arrival for the lists capability itself, so plan on the basis that no source says existing behaviour changes, and check what your tenant shows rather than waiting for a notice.

For a service owner, the practical effect is that the contents of SharePoint lists, which often hold registers, requests and other structured business data, become something people ask Copilot about. Lists with loose permissions are the first thing to review, because the Restricted Content Discovery page says the control does not change permissions.

## Risk assessment

**Data exposure**
- Lists are named in Learn's included capabilities for Copilot in SharePoint, so list content is a source for Copilot answers. Restricted Content Discovery removes the Copilot button and AI actions from a site where it is turned on, but Learn states it does not change permissions, so a list that is widely shared stays widely readable by other routes.

**Security & identity**
- Use of Copilot in SharePoint depends on a Microsoft 365 Copilot licence per user, so licence assignment is the user-level gate. Site owners have a Site AI panel that can hide the Copilot button for visitors on their own site; a tenant administrator who wants a uniform position has to use Restricted Content Discovery or the preview PowerShell setting.

**Autonomy & actions**
- The same page lists creating and editing pages, libraries and lists as capabilities of Copilot in SharePoint, so the agent that answers questions about a list is documented as able to change lists too. The roadmap item describes retrieval only; confirm that the question-answering path is read-only.
- For advanced work, Learn says Copilot asks the user to approve credit use before continuing.

**Change & support**
- The feature is in public preview, and Learn says the preview PowerShell settings (`KnowledgeAgentScope` and related parameters) remain in effect until 1 November 2026, after which availability is managed through Site AI settings and Restricted Content Discovery. Expect help-desk questions where scripts or documentation still use the old parameters.
- The roadmap record and Learn use different names and dates for the same area, so announcements may refer to either.

## Cost and licensing

**Licence.** Learn states that users must have an active Microsoft 365 Copilot license and that everyday Copilot in SharePoint capabilities are included with it at no extra cost, with no opt-in step required. Its included column lists understanding and creating content across files, pages, lists and libraries, and asking questions and finding content. The page does not mention the roadmap's Knowledge Agent name, so which column this roadmap item falls in is for you to confirm.

**Meter.** Advanced work requires usage-based billing and consumes Copilot Credits. Admins create a spending policy in the Microsoft 365 admin center and select **Advanced work in SharePoint** under **Agents and services** (see the controls table). Learn says users are warned when 20% of the monthly credit limit remains and that usage-based features pause until the next month when the limit is reached. It says existing policies might automatically include new services if **Allow new agents and services as they become available** is turned on.

**Not yet published.** A credit rate or licence term specific to lists is not yet published. Admin time to review list permissions and site settings is an indirect cost. See [Copilot Credits](/concepts/copilot-credits/) and [Spending policies](/concepts/spending-policies/).

## Scope

Learn names a Microsoft 365 Copilot licence as the prerequisite for Copilot in SharePoint, and usage-based billing through a spending policy as the prerequisite for advanced work. Learn says Microsoft 365 Government (GCC, GCC High, DoD), Office 365 air-gapped cloud environments and Microsoft 365 operated by 21Vianet do not currently support Copilot in SharePoint; the roadmap record lists Worldwide (Standard Multi-Tenant) only and the Web platform.

Learn says the availability PowerShell parameters need a Microsoft Copilot licence and, for multigeo tenants, must be run in each geo. Rollout: the roadmap targets are January and February CY2026 with status In development, while Learn says general availability of Copilot in SharePoint begins rolling out on 30 September 2026.

## Governance guidance

### Before rollout
- Confirm in the Message center and on the roadmap item whether the Knowledge Agent lists capability is the same as Copilot in SharePoint, since no Learn page names it.
- Identify the SharePoint sites whose lists hold sensitive registers, and decide which should have Restricted Content Discovery turned on (SharePoint admin center, see the controls table).
- Check which users hold a Microsoft 365 Copilot licence, as it is the stated prerequisite (Microsoft 365 admin center).
- Review the preview `KnowledgeAgentScope` setting in your tenant, because Learn says it stays in effect until 1 November 2026 and then Site AI settings and Restricted Content Discovery take over.

### At rollout
- Turn on Restricted Content Discovery for sites that need review before Copilot can be used on them, accepting that it removes Copilot entry points from the whole site.
- Create or edit a spending policy that includes **Advanced work in SharePoint** only for the users who need advanced work, and set its limits and alerts.
- Tell site owners about the Site AI panel (**Settings** > **Site AI**) so they know which options they hold for their own sites.

### After rollout
- Review Copilot Credit use in **Cost management** by spending policy, user and service, as Learn describes for usage-based billing.
- Re-check the Learn page for changes to availability settings and to the included-versus-credits split.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot in SharePoint and Copilot discovery are available on a site</strong><br><small>Site</small><br><small class="controls__note">Learn says Copilot in SharePoint and AI actions don't appear on a site where this is on. It does not change permissions. Needs a Copilot licence and SharePoint Advanced Management.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide or per-site availability of Copilot in SharePoint (preview setting, being retired)</strong><br><small>Tenant</small><br><small class="controls__note">Other values are AllSites, IncludeSelectedSites and ExcludeSelectedSites. Learn says these parameters are retiring and remain in effect until 1 November 2026.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -KnowledgeAgentScope NoSites</code> <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limits on a spending policy that covers advanced work in SharePoint</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. The request body sets periodLimit and perUserLimit. Applies to advanced work, not to the included everyday capabilities.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Add spending policy › Limits and alerts <a href="https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that Copilot in SharePoint requires</strong><br><small>User</small><br><small class="controls__note">Needs at least the License Administrator or User Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Restricted Content Discovery is a site-level control and, by Learn's account, removes the Copilot button and AI actions from the sites it covers; Learn also says that by default only SharePoint administrators can manage it, and that delegation to site administrators is a separate tenant setting. It needs a Copilot licence and SharePoint Advanced Management to be available.

The `KnowledgeAgent` parameters are the preview availability controls, and Learn says they are being retired. Site owners also have a **Site AI** panel on each site (**Settings** > **Site AI**) that can hide the Copilot button for visitors on that site; it is a site-owner setting and is not a tenant control. The spending policy row governs advanced work only. Licence assignment needs at least the License Administrator or User Administrator role.

## Open questions

- Is the roadmap's Knowledge Agent lists capability the same as the Copilot in SharePoint capabilities Learn describes, and does it fall under the included Microsoft 365 Copilot licence or under advanced work with Copilot Credits? Watch the Learn page and the roadmap item.
- What happens on arrival for the lists capability: is it available to every licensed user without an admin step? Learn says no opt-in step is required for everyday capabilities, but the roadmap item gives no default.
- How do list-level permissions and sensitivity labels apply to Copilot's answers from lists? Microsoft Learn does not say at the time of writing (November 2026).
- Why does the roadmap still say In development with February CY2026 targets when Learn says general availability begins rolling out on 30 September 2026? Watch the roadmap item for a status change.
- Is there a tenant-wide switch for availability once the preview PowerShell parameters are retired, other than Restricted Content Discovery per site?

<!-- rationale
risk: Medium. Copilot in SharePoint is documented as working across lists and is covered by Restricted Content Discovery and a site-level panel, but Microsoft has not stated this feature's default or how it treats list permissions.
cost: Low. The Learn page lists questions across lists under capabilities included with the Microsoft 365 Copilot licence; only advanced work draws Copilot Credits, and no rate specific to lists is published.
impact: Medium. Users with a Microsoft 365 Copilot licence are the people the Learn page says Copilot in SharePoint is for, so list owners and the people who ask questions of lists will notice first.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Security & identity; Governance guidance: Before rollout; controls[1].governs / applicability: Administrators can still rely on the preview KnowledgeAgentScope availability setting as a current governance option. | Found: Existing PowerShell settings remain in effect until November 1, 2026. After November 1, 2026, manage availability by using Site AI settings and Restricted Content Discovery. | Fix: Remove 'or the preview PowerShell setting' from Security & identity. Replace the Before rollout review bullet with 'The preview KnowledgeAgentScope settings were honored only until 1 November 2026; manage availability through Site AI settings and Restricted Content Discovery.' Rename controls[1].governs to 'Historical preview availability of Copilot in SharePoint (retired after 1 November 2026)' and make its note explicitly historical. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: Copilot > Cost management > Add spending policy > Limits and alerts is the route for a policy covering advanced SharePoint work. | Found: Under Access scope, choose whether the policy applies to all users or to specific security groups. Under Agents and services, select Advanced work in SharePoint. Set Limits and alerts for the policy, choose a Billing method, then review and add the policy. | Fix: Replace controls[2].ui.path and its table path with 'Copilot > Cost management > Add spending policy > Access scope > Agents and services > Advanced work in SharePoint > Limits and alerts'. The service selection is a required choice, not a heading that can be omitted. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions; rationale: risk / default: Microsoft has not stated the arrival default for the list-question capability, so defaultState is unknown. | Found: Everyday Copilot in SharePoint capabilities are included with this license at no extra cost, and no opt-in step is required. | Fix: Set defaultState to 'on'. Replace the claimed absence with 'Learn says everyday Copilot in SharePoint capabilities, including questions over lists, require no opt-in step for users with an active Microsoft 365 Copilot licence; site availability controls still apply.' Keep the roadmap's stale status and dates separately attributed to the record. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [contradicted, blocker] front matter: licensing.model / licensing: The licensing model for this list-information retrieval change is mixed. | Found: Everyday individual productivity is included with the Microsoft 365 Copilot license. Advanced work requires usage-based billing and consumes Copilot Credits. | Fix: Set licensing.model to 'included'. Use the note 'Everyday questions and content discovery across lists are included with an active Microsoft 365 Copilot licence. Advanced work at greater scale uses Copilot Credits through usage-based billing.' The product's hybrid model does not make this retrieval-only change mixed. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [contradicted, blocker] Cost and licensing; Open questions / licensing: Which licensing column covers ordinary questions and content discovery from lists remains unconfirmed. | Found: Included with the Microsoft 365 Copilot license: Understand and create content across files, pages, lists, and libraries. Copilot in SharePoint works with your content—answering questions, drafting what's next, and organizing as you go. | Fix: Replace the uncertain-column sentence with 'Learn places everyday questions and content discovery across lists in the included Microsoft 365 Copilot licence column; advanced work at greater scale requires Copilot Credits.' Remove the included-versus-advanced licensing question for ordinary list retrieval. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [contradicted, blocker] Open questions; rationale: risk / absence: Microsoft Learn does not say how permissions apply to Copilot answers from lists. | Found: Permissions come first. Copilot only summarizes or references content that the user is already authorized to access. | Fix: Remove the permission-absence statement from Open questions and the risk rationale. Replace it with 'Copilot only summarizes or references content that the user is already authorized to access.' Cite https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing. | Source: https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing
- [contradicted, blocker] Open questions / absence: Microsoft Learn does not say how sensitivity labels apply to Copilot answers from lists. | Found: Similarly, content from SharePoint site pages and lists won't display the sensitivity label of their container label. | Fix: Replace the sensitivity-label absence with 'SharePoint site pages and lists do not inherit or display their container's sensitivity label in Copilot.' Cite https://learn.microsoft.com/purview/ai-m365-copilot-considerations. | Source: https://learn.microsoft.com/purview/ai-m365-copilot-considerations
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: Learn says usage-based features pause until the next month when the monthly credit limit is reached. | Found: When 20% of the monthly credit limit remains, Copilot notifies the user that usage-based features pause until the next month when the limit is reached. | Fix: Keep the attribution to the SharePoint page, but add: 'The general monitoring documentation qualifies per-user limits: a running task that exceeds a group policy's per-user limit can complete without interruption.' Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started
- [supported, minor] Governance guidance: After rollout / behaviour: Administrators can review Copilot Credit usage in Cost management by spending policy, user and service. | Found: The Consumption tab provides reporting experiences for copilot credit usage by: Spending policy; User; Group; Agent; Service. | Fix: Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending for this monitoring statement; the SharePoint get-started page does not document these reporting views. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending
- [contradicted, minor] front matter: action / consistency: The action rating is prepare despite documented no-opt-in rollout, a medium risk rating and available site controls. | Found: action: prepare; risk: medium; no opt-in step is required; general availability begins rolling out on 30 September 2026; Turn on Restricted Content Discovery for sites that need review. | Fix: Set action to 'act-now': on the 22 November 2026 run, the documented no-opt-in rollout started within about 60 days, risk is medium and site controls are available.
-->
