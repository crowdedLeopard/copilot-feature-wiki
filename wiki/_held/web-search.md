---
kind: "concept"
title: "Web search in Microsoft Copilot: what leaves the tenant, and who can switch it off?"
slug: "web-search"
summary: "Web search lets Microsoft Copilot and Copilot Chat send short generated queries to Bing to ground answers. Administrators use it to decide who may use it, which sites are excluded and when sensitive prompts are blocked."
created: "2026-11-24"
updated: "2026-11-24"
version: 1
tags: ["web-search","web-grounding","domain-exclusion","copilot","copilot-chat","dlp","cloud-policy","privacy","admin-controls"]
covers: ["web-grounding","domain-exclusion"]
sources:
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Domain exclusion overview"
    url: "https://learn.microsoft.com/copilot/implement/domain-exclusion"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps"
    kind: "learn"
  - title: "Update copilotPolicySetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
related: ["m365-copilot-domain-exclusion-web-grounding","purview-dlp-block-sensitive-data-in-copilot-web-search","cloud-policy","sensitive-information-types","auditing","facilitator"]
controls:
  - governs: "Whether Copilot and Copilot Chat can use web search (Allow web search in Copilot policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update"
    note: "Preview. The request body sets value. Tenant-level policies only; delegated CopilotPolicySettings.ReadWrite."
  - governs: "Which domains are excluded from web grounding"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: ".\\ConfigureTenantDomainExclusions.ps1 -Create -FromFile <csv file>"
      docs: "https://learn.microsoft.com/copilot/implement/domain-exclusion"
    note: "Search Administrator or Global Administrator. Web page results only; -Update replaces the list."
  - governs: "Whether a prompt containing chosen sensitive information types may use web search"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > Prevent Copilot from processing content > Performing Web Searches"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule name> -Policy <policy name> -RestrictWebGrounding $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps"
    note: "Security & Compliance PowerShell. Add the sensitive information type condition in the same rule."
  - governs: "Whether an individual user's Copilot responses include web content (Web content toggle)"
    scope: "user"
    ui:
      surface: "Microsoft Copilot app"
      path: "Settings > Personalization > Advanced > Web search"
      docs: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    api: null
    note: "User setting; dimmed if the admin disables web search."
confidence: "medium"
dependents: 10
changes:
  - date: "2026-11-24"
    note: "New concept page: how Copilot web search works, its Bing data handling, and its policy, domain exclusion, DLP and user controls."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 88 statements contradicted, 1 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 88
  confirmed: 84
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "9bd5a4997dc2755d324827a2110b1c7a"
---

## What it is

Web search is an optional feature that lets Microsoft Copilot and Microsoft Copilot Chat reference web content when they answer a prompt. When it is on, Copilot may fetch information from the Bing search service where web information helps give a more grounded response. Microsoft's controls and the briefings also call this web grounding.

**How a search is made.** Copilot parses the prompt, picks out terms where web information would improve the answer and generates a search query of a few words, which it sends to Bing. Microsoft lists what the query does not include: the user's entire prompt (unless it is very short), entire Microsoft 365 files, and identifying information from the user's Microsoft Entra ID such as username, domain or tenant ID. Copilot does send the user's client IP address to Bing.

In Microsoft Copilot (not Chat), the query can still be informed by data in a document when the user prompts from inside a Microsoft 365 app with the document open, or names a document in the prompt.

**Where it applies.** Microsoft states that the same information applies to Researcher, Analyst and Cowork in Microsoft Copilot. Web search is not a prerequisite for them. Researcher has a **Web search** toggle in the input box; Analyst and Cowork have no such toggle for users.

Microsoft Copilot Search, which searches Microsoft 365 and third-party data sources for users with a Microsoft Copilot licence, is a different feature and is not covered here.

## Why it matters

Web search decides whether text derived from a prompt can leave Microsoft 365's data handling. Microsoft states that the Bing search service operates separately from Microsoft 365 and has different data-handling practices, that the Data Protection Addendum does not apply to the generated queries, and that HIPAA compliance and the EU Data Boundary do not apply to them. Regulated tenants should treat the switch as a compliance decision, not a feature preference.

In commercial tenants where the **Allow web search in Copilot** policy has never been configured, Microsoft says web search is available to users in both Microsoft Copilot and Copilot Chat. Leaving it unset is therefore a decision to allow it. In GCC and DoD it is the other way round: web search is off until the policy is configured. Three layers then narrow what is sent: the admin policy, the per-prompt DLP rule and the domain exclusion list. They do different jobs and none replaces another.

## Cost and licensing

The pages that describe web search state no separate licence, meter or price for it; they say admin controls and the **Web content** toggle are available for "eligible" Microsoft Copilot and Microsoft Copilot Chat users. A web-search-specific meter or charge is not yet published. Microsoft's requirements page points to the Copilot License Details diagnostic to check whether a user's account meets the licensing requirements for a Copilot feature.

The controls have their own prerequisites. Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps; Microsoft 365 operated by 21Vianet is not supported. The Purview DLP page for the Copilot location refers to the Microsoft 365 service descriptions for licensing. See /concepts/cloud-policy/ for the policy service.

## Risks and limits

- **Unset means on (commercial).** With no policy configured, web search is available in Copilot and Copilot Chat; prompts can produce queries to Bing until someone sets the policy.
- **The connected-experiences policy is a blunt instrument.** Setting **Allow the use of additional optional connected experiences in Office** to Disabled restricts web search when the web search policy is unset, but it also restricts multiple other Microsoft 365 experiences. Microsoft also states the per-user optional connected experiences privacy setting has no effect on web search.
- **Users can only narrow, not widen.** A user can turn off the **Web content** toggle even when the admin allows search. If the admin disables search, the toggle is dimmed and users cannot turn it on.
- **Option three also removes web search from Researcher and Cowork.** Choosing "Disabled in Microsoft Copilot Work mode; Enabled in Microsoft Copilot Web mode and Microsoft Copilot Chat" disables web search in both.
- **Domain exclusion is partial.** It filters web page results only; results from other verticals such as news might still be cited. It supports up to 1,000 sites and up to two levels of subdomains, and an update replaces the whole previous list.
- **DLP reads the prompt text.** The web-search rule detects sensitive information types in text entered directly into the prompt, and then blocks web grounding for that prompt; Copilot still answers from internal data. A rule cannot combine sensitive information type and sensitivity label conditions.
- **Query visibility is limited for users.** Query citations appear only in Copilot Chat, not the Copilot pane in Word or PowerPoint, and the queries stay in the chat thread for 24 hours.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot and Copilot Chat can use web search (Allow web search in Copilot policy)</strong><br><small>Tenant</small><br><small class="controls__note">Preview. The request body sets value. Tenant-level policies only; delegated CopilotPolicySettings.ReadWrite.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which domains are excluded from web grounding</strong><br><small>Tenant</small><br><small class="controls__note">Search Administrator or Global Administrator. Web page results only; -Update replaces the list.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>.\ConfigureTenantDomainExclusions.ps1 -Create -FromFile &lt;csv file&gt;</code> <a href="https://learn.microsoft.com/copilot/implement/domain-exclusion" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a prompt containing chosen sensitive information types may use web search</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Add the sensitive information type condition in the same rule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork › Prevent Copilot from processing content › Performing Web Searches <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -RestrictWebGrounding $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an individual user's Copilot responses include web content (Web content toggle)</strong><br><small>User</small><br><small class="controls__note">User setting; dimmed if the admin disables web search.</small></td><td data-label="Admin UI"><strong>Microsoft Copilot app</strong><br>Settings › Personalization › Advanced › Web search <a href="https://learn.microsoft.com/copilot/plan/manage-public-web-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** Creating the Cloud Policy setting needs the Office Apps admin role; the Microsoft 365 admin center Copilot settings page names AI Administrator as an appropriate role, and Global Reader can view but not change. Domain exclusion needs Search Administrator or Global Administrator. DLP policies for the Copilot location can be created by Microsoft Entra AI Admin or Purview Data Security AI Admin, among other roles.

**How they interact.** Cloud Policy resolves conflicting configurations by priority, so check which configuration wins for each user. The Microsoft 365 admin center entry **Copilot > Settings > Data access > Web search for Microsoft Copilot and Microsoft Copilot Chat** links out to the Microsoft 365 Apps admin center rather than holding the setting. Cowork uses the tenant's domain exclusion policies.

**Watching it.** Microsoft states that web search query logging lets admins search, audit and run eDiscovery on the exact queries, and that DSPM for AI activity explorer shows the terms beside the prompt and response. See /concepts/auditing/ and /concepts/sensitive-information-types/. These are not controls and have no row above.

## What to check

- Open Cloud Policy and look for an **Allow web search in Copilot** configuration; note which of the three options is set and which configuration has priority per group.
- Confirm GCC or DoD tenants have configured the policy if web search is wanted; it stays off otherwise.
- Export the domain exclusion list with the script's `-Get` option and compare it with your blocked-site list.
- Review DLP policies at the Microsoft Copilot, Copilot Chat, and Copilot Cowork location for a rule with the **Performing Web Searches** action.
- Search the audit log or DSPM for AI activity explorer for web search queries from a test prompt.
- Test as an ordinary user: confirm the **Web content** toggle is present or dimmed as intended.

## Open questions

- Does Microsoft publish a licence requirement or meter specific to web search? None is published at the time of writing (November 2026).
- Is there an admin centre setting for domain exclusion? Only the PowerShell script is documented.
- Does the **Allow web search in Copilot** policy govern web references in other features, such as PowerPoint Agent Mode or Facilitator? Microsoft's policy page names Copilot, Copilot Chat, Researcher, Analyst and Cowork.
- Will the Microsoft Graph copilotPolicySetting API move beyond preview? It is documented under /beta/ at the time of writing.

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; Risks and limits: Unset means on / default: An unconfigured Allow web search in Copilot policy always leaves web search available in commercial tenants. | Found: web search will be available to users in both Microsoft Copilot and Microsoft Copilot Chat, unless the IT admin has set the Allow the use of additional optional connected experiences in Office policy to Disabled. | Fix: In Why it matters and the Unset means on bullet, replace the unconditional default with: 'In commercial tenants, an unconfigured Allow web search in Copilot policy leaves web search available unless Allow the use of additional optional connected experiences in Office is Disabled.' Replace 'Leaving it unset is therefore a decision to allow it' with 'Check both policies before treating an unset web-search policy as permission to search.' | Source: https://learn.microsoft.com/copilot/plan/manage-public-web-access
- [contradicted, blocker] Why it matters: Three layers / behaviour: The domain exclusion list is one of three layers that narrow what is sent outside Microsoft 365. | Found: Currently, domain exclusions support filtering on web page results only. Results from other answer verticals, such as news, might still be cited. | Fix: Replace 'Three layers then narrow what is sent: the admin policy, the per-prompt DLP rule and the domain exclusion list. They do different jobs and none replaces another.' with 'The admin policy controls whether web search is allowed; DLP can block web search for a sensitive prompt; domain exclusions filter returned web page results rather than the query sent to Bing.' | Source: https://learn.microsoft.com/copilot/implement/domain-exclusion
- [unsupported, blocker] controls[0].ui; Governance controls table / admin-path: The cited Cloud Policy overview documents the full printed route ending at Allow web search in Copilot. | Found: Searched: 'web search Microsoft Copilot manage-public-web-access Allow web search policy privacy licensing'. Read overview-cloud-policy, manage-public-web-access and configure-copilot-admin-center on Learn. The overview gives Configure Settings, not the final setting label. | Fix: Keep the path, which is supported jointly by the Cloud Policy overview and the web-search page, but change controls[0].ui.docs and its rendered Learn link to https://learn.microsoft.com/copilot/plan/manage-public-web-access#it-admin-control-for-both-microsoft-copilot-and-microsoft-copilot-chat, which documents the control's own part of the route.
- [contradicted, blocker] controls[0].api; Governance controls table / command: PATCH /beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch is presented as the tenant web-search automation without a cloud restriction. | Found: PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/{id} / Global service | US Government L4 | US Government L5 (DOD) | China operated by 21Vianet / ✅ | ❌ | ❌ | ❌ | Fix: Keep the method and endpoint. Append to controls[0].note and the rendered note: 'Graph API: Global service only; not supported in US Government L4, US Government L5 (DOD), or China operated by 21Vianet.' The page expressly discusses government tenants, but this automation cannot be used there. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risks and limits: Users can only narrow; controls[3].note; What to check / behaviour: An admin-disabled Web content toggle appears dimmed. | Found: If the IT admin turns off web search, the Web content toggle is turned off and appears dimmed. / If the IT admin disables web search, the Web content toggle isn't available to the user and web search is disabled. | Fix: Replace assertions that the toggle is necessarily dimmed with: 'Microsoft describes the admin-disabled toggle as dimmed in its IT admin section and unavailable in its user-toggle section.' In What to check, use 'confirm users cannot enable web search when the admin disables it'. | Source: https://learn.microsoft.com/copilot/plan/manage-public-web-access
- [supported, minor] controls[2].ui; Governance controls table; What to check / admin-path: The printed Purview path reaches the Performing Web Searches action for the Copilot DLP location. | Found: Go to Data Loss Prevention > Policies and select + Create policy. Select the Custom template, then Custom policy. / Add a rule with the Content contains > Sensitive information types condition / set the action to Prevent Copilot from processing content > Performing Web Searches. | Fix: Include the rule context in controls[2].ui.path and the table: 'Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > rule > Prevent Copilot from processing content > Performing Web Searches'. Keep the note requiring the sensitive information type condition in that rule. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] Governance controls: Roles / role: Creating Cloud Policy settings needs the Office Apps admin role. | Found: For example, creating Cloud Policy settings for Microsoft 365 apps requires the Office Apps admin role. | Fix: Replace with: 'The Copilot settings page says creating Cloud Policy settings requires the Office Apps admin role; the Cloud Policy overview also lists Security Administrator and Global Administrator as supported management roles, with Office Apps Administrator recommended.' Both pages are already cited. | Source: https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center
-->
