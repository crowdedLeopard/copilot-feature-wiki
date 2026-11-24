---
kind: "concept"
title: "Web search in Microsoft Copilot: what leaves the tenant, and who can switch it off?"
slug: "web-search"
summary: "Web search lets Microsoft Copilot and Copilot Chat send short generated queries to Bing to ground answers. Administrators use it to decide who may use it, which sites are excluded and when sensitive prompts are blocked."
created: "2026-11-24"
updated: "2026-11-24"
version: 2
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
  - title: "Whether Copilot and Copilot Chat can use web search (Allow web search in Copilot policy) (Microsoft 365 Apps admin center)"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access#it-admin-control-for-both-microsoft-copilot-and-microsoft-copilot-chat"
    kind: "learn"
related: ["m365-copilot-domain-exclusion-web-grounding","purview-dlp-block-sensitive-data-in-copilot-web-search","cloud-policy","sensitive-information-types","auditing","facilitator"]
controls:
  - governs: "Whether Copilot and Copilot Chat can use web search (Allow web search in Copilot policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/copilot/plan/manage-public-web-access#it-admin-control-for-both-microsoft-copilot-and-microsoft-copilot-chat"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update"
    note: "Preview. The request body sets value. Tenant-level policies only; delegated CopilotPolicySettings.ReadWrite. Graph API: Global service only; not supported in US Government L4, US Government L5 (DOD), or China operated by 21Vianet."
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
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > rule > Prevent Copilot from processing content > Performing Web Searches"
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
    note: "User setting; Microsoft describes it as dimmed or unavailable if the admin disables web search."
confidence: "medium"
dependents: 10
changes:
  - date: "2026-11-24"
    note: "New concept page: how Copilot web search works, its Bing data handling, and its policy, domain exclusion, DLP and user controls."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 88 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the unset-policy default, the three-layer description, the Cloud Policy path source, the Graph cloud restriction and the Purview path."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 95
  confirmed: 95
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1e9c1974fbed3a7a9b71a02beabe1dbf"
---

## What it is

Web search is an optional feature that lets Microsoft Copilot and Microsoft Copilot Chat reference web content when they answer a prompt. When it is on, Copilot may fetch information from the Bing search service where web information helps give a more grounded response. Microsoft's controls and the briefings also call this web grounding.

**How a search is made.** Copilot parses the prompt, picks out terms where web information would improve the answer and generates a search query of a few words, which it sends to Bing. Microsoft lists what the query does not include: the user's entire prompt (unless it is very short), entire Microsoft 365 files, and identifying information from the user's Microsoft Entra ID such as username, domain or tenant ID. Copilot does send the user's client IP address to Bing.

In Microsoft Copilot (not Chat), the query can still be informed by data in a document when the user prompts from inside a Microsoft 365 app with the document open, or names a document in the prompt.

**Where it applies.** Microsoft states that the same information applies to Researcher, Analyst and Cowork in Microsoft Copilot. Web search is not a prerequisite for them. Researcher has a **Web search** toggle in the input box; Analyst and Cowork have no such toggle for users.

Microsoft Copilot Search, which searches Microsoft 365 and third-party data sources for users with a Microsoft Copilot licence, is a different feature and is not covered here.

## Why it matters

Web search decides whether text derived from a prompt can leave Microsoft 365's data handling. Microsoft states that the Bing search service operates separately from Microsoft 365 and has different data-handling practices, that the Data Protection Addendum does not apply to the generated queries, and that HIPAA compliance and the EU Data Boundary do not apply to them. Regulated tenants should treat the switch as a compliance decision, not a feature preference.

In commercial tenants, an unconfigured **Allow web search in Copilot** policy leaves web search available unless **Allow the use of additional optional connected experiences in Office** is Disabled. Check both policies before treating an unset web-search policy as permission to search. In GCC and DoD, web search is off until the **Allow web search in Copilot** policy is configured. The admin policy controls whether web search is allowed; DLP can block web search for a sensitive prompt; domain exclusions filter returned web page results rather than the query sent to Bing.

## Cost and licensing

The pages that describe web search state no separate licence, meter or price for it; they say admin controls and the **Web content** toggle are available for "eligible" Microsoft Copilot and Microsoft Copilot Chat users. A web-search-specific meter or charge is not yet published. Microsoft's requirements page points to the Copilot License Details diagnostic to check whether a user's account meets the licensing requirements for a Copilot feature.

The controls have their own prerequisites. Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps; Microsoft 365 operated by 21Vianet is not supported. The Purview DLP page for the Copilot location refers to the Microsoft 365 service descriptions for licensing. See [Cloud Policy service for Microsoft 365](/concepts/cloud-policy/) for the policy service.

## Risks and limits

- **Unset can mean on (commercial).** With the **Allow web search in Copilot** policy unconfigured, web search is available in Copilot and Copilot Chat unless **Allow the use of additional optional connected experiences in Office** is Disabled; until one of the two is set, prompts can produce queries to Bing.
- **The connected-experiences policy is a blunt instrument.** Setting **Allow the use of additional optional connected experiences in Office** to Disabled restricts web search when the web search policy is unset, but it also restricts multiple other Microsoft 365 experiences. Microsoft also states the per-user optional connected experiences privacy setting has no effect on web search.
- **Users can only narrow, not widen.** A user can turn off the **Web content** toggle even when the admin allows search. Microsoft describes the admin-disabled toggle as dimmed in its IT admin section and as unavailable in its user-toggle section; users cannot turn it on.
- **Option three also removes web search from Researcher and Cowork.** Choosing "Disabled in Microsoft Copilot Work mode; Enabled in Microsoft Copilot Web mode and Microsoft Copilot Chat" disables web search in both.
- **Domain exclusion is partial.** It filters web page results only; results from other verticals such as news might still be cited. It supports up to 1,000 sites and up to two levels of subdomains, and an update replaces the whole previous list.
- **DLP reads the prompt text.** The web-search rule detects sensitive information types in text entered directly into the prompt, and then blocks web grounding for that prompt; Copilot still answers from internal data. A rule cannot combine sensitive information type and sensitivity label conditions.
- **Query visibility is limited for users.** Query citations appear only in Copilot Chat, not the Copilot pane in Word or PowerPoint, and the queries stay in the chat thread for 24 hours.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot and Copilot Chat can use web search (Allow web search in Copilot policy)</strong><br><small>Tenant</small><br><small class="controls__note">Preview. The request body sets value. Tenant-level policies only; delegated CopilotPolicySettings.ReadWrite. Graph API: Global service only; not supported in US Government L4, US Government L5 (DOD), or China operated by 21Vianet.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/copilot/plan/manage-public-web-access#it-admin-control-for-both-microsoft-copilot-and-microsoft-copilot-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which domains are excluded from web grounding</strong><br><small>Tenant</small><br><small class="controls__note">Search Administrator or Global Administrator. Web page results only; -Update replaces the list.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>.\ConfigureTenantDomainExclusions.ps1 -Create -FromFile &lt;csv file&gt;</code> <a href="https://learn.microsoft.com/copilot/implement/domain-exclusion" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a prompt containing chosen sensitive information types may use web search</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Add the sensitive information type condition in the same rule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork › rule › Prevent Copilot from processing content › Performing Web Searches <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -RestrictWebGrounding $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an individual user's Copilot responses include web content (Web content toggle)</strong><br><small>User</small><br><small class="controls__note">User setting; Microsoft describes it as dimmed or unavailable if the admin disables web search.</small></td><td data-label="Admin UI"><strong>Microsoft Copilot app</strong><br>Settings › Personalization › Advanced › Web search <a href="https://learn.microsoft.com/copilot/plan/manage-public-web-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** The Copilot settings page says creating Cloud Policy settings requires the Office Apps admin role; the Cloud Policy overview also lists Security Administrator and Global Administrator as supported management roles, with Office Apps Administrator recommended. The Microsoft 365 admin center Copilot settings page names AI Administrator as an appropriate role, and Global Reader can view but not change. Domain exclusion needs Search Administrator or Global Administrator. DLP policies for the Copilot location can be created by Microsoft Entra AI Admin or Purview Data Security AI Admin, among other roles.

**How they interact.** Cloud Policy resolves conflicting configurations by priority, so check which configuration wins for each user. The Microsoft 365 admin center entry **Copilot > Settings > Data access > Web search for Microsoft Copilot and Microsoft Copilot Chat** links out to the Microsoft 365 Apps admin center rather than holding the setting. Cowork uses the tenant's domain exclusion policies.

**Watching it.** Microsoft states that web search query logging lets admins search, audit and run eDiscovery on the exact queries, and that DSPM for AI activity explorer shows the terms beside the prompt and response. See [Microsoft Purview Audit](/concepts/auditing/) and [Sensitive information types](/concepts/sensitive-information-types/). These are not controls and have no row above.

## What to check

- Open Cloud Policy and look for an **Allow web search in Copilot** configuration; note which of the three options is set and which configuration has priority per group.
- Confirm GCC or DoD tenants have configured the policy if web search is wanted; it stays off otherwise.
- Export the domain exclusion list with the script's `-Get` option and compare it with your blocked-site list.
- Review DLP policies at the Microsoft Copilot, Copilot Chat, and Copilot Cowork location for a rule with the **Performing Web Searches** action.
- Search the audit log or DSPM for AI activity explorer for web search queries from a test prompt.
- Test as an ordinary user: confirm users cannot enable web search when the admin disables it.

## Open questions

- Does Microsoft publish a licence requirement or meter specific to web search? None is published at the time of writing (November 2026).
- Is there an admin centre setting for domain exclusion? Only the PowerShell script is documented.
- Does the **Allow web search in Copilot** policy govern web references in other features, such as PowerPoint Agent Mode or Facilitator? Microsoft's policy page names Copilot, Copilot Chat, Researcher, Analyst and Cowork.
- Will the Microsoft Graph copilotPolicySetting API move beyond preview? It is documented under /beta/ at the time of writing.

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: '(not Chat)' / behaviour: The document-informed query explanation is restricted to Copilot, not Copilot Chat. | Found: Unlike with Microsoft Copilot, users can't invoke organizational content like files, emails, or chats, when prompting in Microsoft Copilot Chat. | Fix: Remove '(not Chat)' so the sentence starts 'In Microsoft Copilot, the query can still be informed by data in a document'. The cited article supports the Copilot conditions, but https://learn.microsoft.com/copilot/plan/copilot-overview says Chat can use explicitly provided organizational content and open content in Teams and Outlook; it does not establish how that content informs Chat's web queries. | Source: https://learn.microsoft.com/copilot/plan/manage-public-web-access
-->
