---
title: "Microsoft 365 Copilot: exclude specific domains from web grounding"
slug: "m365-copilot-domain-exclusion-web-grounding"
roadmapId: 503144
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Admins can list up to 1,000 sites that Microsoft 365 Copilot and Copilot Chat must not use when grounding answers in web content, via a PowerShell script. Cowork honours the same exclusions."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "off"
action: "review"
licensing:
  model: "included"
  notes: "No additional licence. Applies to Microsoft 365 Copilot and Copilot Chat tenants where web search is enabled."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["m365-copilot","copilot-chat","web-grounding","web-search","domain-exclusion","powershell","cloud-policy","cowork"]
sources:
  - title: "Microsoft 365 Roadmap 503144"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503144"
    kind: "roadmap"
  - title: "Domain exclusion overview"
    url: "https://learn.microsoft.com/copilot/implement/domain-exclusion"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Microsoft Copilot prompt defense in depth"
    url: "https://learn.microsoft.com/copilot/plan/copilot-prompt-defense-in-depth"
    kind: "learn"
  - title: "Whether web search is allowed at all (Microsoft 365 Apps admin center)"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access#controls-available-to-manage-web-search"
    kind: "learn"
  - title: "Sensitive content sent to web search (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Sensitive content sent to web search (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search","m365-copilot-federated-connectors-write-update-delete"]
controls:
  - governs: "Which domains are excluded from web grounding"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "ConfigureTenantDomainExclusions.ps1 -Create -FromFile <csv>"
      docs: "https://learn.microsoft.com/copilot/implement/domain-exclusion"
    note: "Search Administrator or Global Administrator; needs the Az.Accounts module. The script also supports get, update, delete and template."
  - governs: "Whether web search is allowed at all"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Cloud Policy > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/copilot/plan/manage-public-web-access#controls-available-to-manage-web-search"
    api: null
    note: "Tenant or group scope; on, off, or off in work mode only."
  - governs: "Sensitive content sent to web search"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > location Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <name> -Locations <location> -EnforcementPlanes @('CopilotExperiences')"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 35
  unconfirmed: 6
  contradicted: 8
  attempts: 2
---

## What's changing

When web search is enabled, Microsoft 365 Copilot and Copilot Chat may ground a response in public web content. **Domain exclusion** lets an administrator specify up to 1,000 sites that must not be used for that grounding. The configuration supports up to two levels of subdomain and is managed with the `ConfigureTenantDomainExclusions.ps1` PowerShell script (download at aka.ms/Copilot/DomainExclusionScript), which can export the current list to CSV, create or update the list from CSV, delete it, and generate a template.

There is no exclusion list by default; the tenant opts in by running the script. Cowork uses the same exclusion policy. The roadmap shows the feature rolling out with a September 2026 General Availability date.

This sits alongside the existing coarse control, the **Allow web search in Copilot** policy in Cloud Policy service for Microsoft 365 (enable, disable, or disable in work mode only), and the Purview DLP action that blocks web search when a prompt contains sensitive information types.

## Why it matters

Few organisations want to turn web grounding off entirely; it is what makes Copilot useful for current events, vendor documentation and public standards. But most have a short list of sites they do not want cited in work output: competitor marketing, unreliable content farms, sites that violate acceptable-use policy, or domains under legal dispute. Domain exclusion is the surgical option between "web on" and "web off".

It is also part of Microsoft's prompt-injection defence story: excluding domains known to host adversarial content reduces one path for indirect prompt injection into Copilot responses.

## Risk assessment

**Data exposure**
- Neutral to positive. Web grounding sends a derived query, not Graph data, to the search provider; this control narrows which results come back. It does not stop prompts leaving the tenant; the Purview DLP web-search action does that for sensitive content.

**Security & identity**
- The script is run by an administrator with the appropriate Copilot or Global admin role; store the CSV in source control so changes are reviewable.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Users will not be told why a site was not cited. Publish the exclusion policy internally so people understand.
- Limit of 1,000 entries and two subdomain levels; wildcard-style blocking of whole TLDs is not described.

## Cost and licensing

- No licence or metered cost.
- Indirect: maintaining the CSV and running the script when the list changes.

## Scope

- Microsoft 365 Copilot and Copilot Chat (desktop and web) where web search is enabled; Cowork honours the same list.
- Worldwide (standard multi-tenant). Government clouds have web search off by default and are not listed for this item.
- Does not apply to declarative agents' scoped web search sites, which are configured per agent in the manifest; confirm behaviour if an agent scopes to an excluded site.

## Governance guidance

**Before rollout**
- Agree ownership of the exclusion list (information security or legal) and a change process.
- Confirm the current web search posture in Cloud Policy service (enabled, disabled, work-mode disabled) so exclusion is applied where it matters.

**At rollout**
- Generate the template CSV with the script, populate from your web filtering deny categories where relevant, and create the configuration.
- Export and store the configuration; record the run in your change log.

**After rollout**
- Review the list quarterly alongside web filtering policies.
- Watch Message center for an admin center UI replacing the script, and for GCC availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which domains are excluded from web grounding</strong><br><small>Tenant</small><br><small class="controls__note">Search Administrator or Global Administrator; needs the Az.Accounts module. The script also supports get, update, delete and template.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>ConfigureTenantDomainExclusions.ps1 -Create -FromFile &lt;csv&gt;</code> <a href="https://learn.microsoft.com/copilot/implement/domain-exclusion" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether web search is allowed at all</strong><br><small>Group</small><br><small class="controls__note">Tenant or group scope; on, off, or off in work mode only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Cloud Policy › Allow web search in Copilot <a href="https://learn.microsoft.com/copilot/plan/manage-public-web-access#controls-available-to-manage-web-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sensitive content sent to web search</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › location Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;name&gt; -Locations &lt;location&gt; -EnforcementPlanes @('CopilotExperiences')</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Domain exclusion is script-only: there is no admin centre page, and the exclusion list is not visible in Cloud Policy. The web search policy is linked from the Microsoft 365 admin center under Copilot > Settings > Data access, as described in [Configure Copilot settings](https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center#configure-data-access), but it is set in Cloud Policy. Users keep a personal web search toggle unless the policy turns it off. The DLP action Performing Web Searches is covered in the [Purview DLP briefing](/features/purview-dlp-block-sensitive-data-in-copilot-web-search/).

## Open questions

- Whether a Microsoft 365 admin center UI will replace the PowerShell script.
- Interaction with declarative agents that scope web search to a site on the exclusion list.
- Government cloud availability.

<!-- rationale
risk: Low. A restrictive control that narrows web grounding; no new data movement.
cost: None. Script-based configuration.
impact: Medium. Changes what web sources every Copilot user may see cited once configured.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: targetDate; What's changing / record: The roadmap gives September 2026 as the General Availability date. | Found: "targetDate": "September CY2026" | Fix: Replace 'with a September 2026 General Availability date' with 'with General Availability targeted for September CY2026'; the status remains Rolling out.
- [contradicted, blocker] summary; What's changing; Why it matters / behaviour: Excluded sites must not be used or cited in web-grounded answers. | Found: Currently, domain exclusions support filtering on web page results only. Results from other answer verticals, such as news, might still be cited. | Fix: Qualify the summary and body: domain exclusion filters web page results only; news and other answer verticals might still cite excluded sites. Remove language implying a comprehensive citation or acceptable-use block. | Source: https://learn.microsoft.com/copilot/implement/domain-exclusion
- [contradicted, blocker] front matter: defaultState / default: The feature's default-state classification is off. | Found: Default settings don't include the domain exclusion configuration. Opt in to use the feature by running the PowerShell script. | Fix: Set defaultState to admin-opt-in. The standard assigns that classification to a new control that restricts nothing until an administrator configures it. | Source: https://learn.microsoft.com/copilot/implement/domain-exclusion
- [contradicted, blocker] controls[1].ui; Governance controls: second row / admin-path: The exact Microsoft 365 Apps admin center path is Cloud Policy > Allow web search in Copilot. | Found: Under Customization, select Policy Management.
On the Policy configurations page, select Create. | Fix: Replace the path with 'Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot'. Cite overview-cloud-policy for navigation and manage-public-web-access for the setting; the existing docs link alone does not give the path. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [contradicted, blocker] controls[2].ui; Governance controls: third row / admin-path: The Purview configuration path goes directly from Custom to location Microsoft Copilot, Copilot Chat, and Copilot Cowork. | Found: Select the Custom template, then Custom policy.
On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: Use 'Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork'. Explain that a rule must use 'Content contains > Sensitive information types' and 'Prevent Copilot from processing content > Performing Web Searches', then save and turn on the policy. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [contradicted, blocker] controls[2].api; Governance controls: third row / command: New-DlpCompliancePolicy -Name <name> -Locations <location> -EnforcementPlanes @('CopilotExperiences') implements the sensitive-content web-search blocking control. | Found: The fourth command creates the DLP policy using the $loc variable for the value of the Locations parameter, and "Copilot Policy" as the name of the policy (use any unique name). | Fix: The cmdlet, all three parameters and CopilotExperiences value exist in Security & Compliance PowerShell, but this creates only a policy container. Label it 'policy creation only; also configure a sensitive-information rule with the Performing Web Searches action' rather than presenting it as an equivalent blocking command. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: The web search query does not contain Graph data. | Found: Copilot finds the name of the user's manager from Microsoft 365 data. It then generates a Bing search query based on their name to see what information about them is available on the web. | Fix: Replace 'not Graph data' with 'not entire Microsoft 365 files; generated search terms can be informed by organizational data, including document content or a manager name'. | Source: https://learn.microsoft.com/copilot/plan/manage-public-web-access
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Prompts leave the tenant unless the Purview DLP web-search action stops them. | Found: The user's prompts and Copilot's responses are stored within Microsoft 365 and never leave the service boundary for both Microsoft Copilot and Microsoft Copilot Chat without customer direction. | Fix: Say 'Domain exclusion filters incoming web results; it does not prevent generated search queries being sent to Bing. Purview DLP can block external web search when prompt text matches configured sensitive information types.' Distinguish derived queries from full prompts; very short prompts can themselves form the query. | Source: https://learn.microsoft.com/copilot/plan/manage-public-web-access
- [contradicted, blocker] Risk assessment: Security & identity / role: The script can be run by an administrator with the appropriate Copilot or Global admin role. | Found: Sign in as a Search Administrator or Global Administrator. | Fix: Replace 'appropriate Copilot or Global admin role' with 'Search Administrator or Global Administrator', matching the documented prerequisites and the table note. | Source: https://learn.microsoft.com/copilot/implement/domain-exclusion
- [unsupported, major] Risk assessment: Change & support / behaviour: Users will not be told why a site was not cited. | Found: Searched: "Copilot" "domain exclusion" "notification". Opened domain-exclusion and manage-public-web-access on Microsoft Learn; neither states how domain-exclusion notifications work. | Fix: Remove the assertion or write 'Microsoft has not documented domain-exclusion user messaging at the time of writing (November 2026).' Keep the advice to publish the policy internally.
- [unsupported, blocker] front matter: licensing.model and licensing.notes; Cost and licensing / licensing: Domain exclusion is included and requires no additional licence. | Found: Searched: Copilot domain exclusion licensing pricing admin UI ConfigureTenantDomainExclusions; "Copilot" "domain exclusion" "license" "cost". Opened domain-exclusion and read licensing search excerpts; no feature-specific inclusion statement was found. | Fix: Set licensing.model to unknown. Replace 'No additional licence' and 'No licence' with 'Feature-specific licensing is not yet published; the documented script prerequisites name roles, PowerShell and CSV requirements but no licence.'
- [unsupported, blocker] Cost and licensing / cost: Domain exclusion has no metered cost. | Found: Searched: Copilot domain exclusion licensing pricing admin UI ConfigureTenantDomainExclusions; "Copilot" "domain exclusion" "license" "cost". Opened domain-exclusion and read Plan licensing and cost search excerpts; none states domain exclusion is unmetered. | Fix: Replace 'No licence or metered cost' with 'Feature-specific licensing and pricing are not yet published; no domain-exclusion meter is documented at the time of writing (November 2026).'
- [unsupported, blocker] front matter: cost; rationale: cost / cost: The cost classification is none because configuration uses a script. | Found: Searched: Copilot domain exclusion licensing pricing admin UI ConfigureTenantDomainExclusions; "Copilot" "domain exclusion" "license" "cost". Read the roadmap record and domain-exclusion; neither states inclusion in existing licences. | Fix: Set cost to low. Use the rationale 'Low. Maintaining the CSV and running the script take administrator time; feature-specific licensing and pricing are not yet published.' Script-based configuration is not evidence for the standard's none classification.
- [unsupported, blocker] Scope / applicability: Domain exclusion does not apply to declarative agents' scoped web search sites. | Found: Searched: Copilot domain exclusion declarative agents scoped web search excluded sites notification wildcard TLD. Opened domain-exclusion and knowledge-sources on Microsoft Learn; neither states this exemption. | Fix: Remove the assertion that domain exclusion does not apply to declarative agents' scoped web search sites. Say 'Microsoft has not documented how tenant domain exclusions interact with declarative agents that scope web search to an excluded site at the time of writing (November 2026).' Retain this as an open question.
- [supported, minor] Scope / behaviour: Declarative agents can configure scoped web search sites in their manifest. | Found: To scope your web search to specific sites, add the sites property and specify up to four URLs, as shown in the following example. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/knowledge-sources#web-and-scoped-web-search to sources for the manifest statement. It does not establish an exemption from tenant exclusions. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/knowledge-sources#web-and-scoped-web-search
- [unsupported, major] Governance controls: paragraph after table / behaviour: The domain exclusion list is not visible in Cloud Policy. | Found: Searched: "domain exclusion" "Cloud Policy" "admin center"; "Copilot" "domain exclusion" "admin center". Opened domain-exclusion, configure-copilot-admin-center and overview-cloud-policy; none states whether the exclusion list is visible there. | Fix: Replace the visibility assertion with 'Microsoft documents domain exclusion management through the PowerShell script at the time of writing (November 2026).'
-->
