---
title: "Microsoft 365 Copilot: exclude specific domains from web grounding"
slug: "m365-copilot-domain-exclusion-web-grounding"
roadmapId: 503144
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Admins can list up to 1,000 sites to exclude from web grounding in Microsoft 365 Copilot and Copilot Chat using a PowerShell script. Only web page results are filtered; news results might still cite them."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Feature-specific licensing is not yet published; the documented script prerequisites name roles, PowerShell and CSV requirements but no licence."
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
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Add knowledge sources to your declarative agent"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/knowledge-sources#web-and-scoped-web-search"
    kind: "learn"
  - title: "Microsoft Copilot prompt defense in depth"
    url: "https://learn.microsoft.com/copilot/plan/copilot-prompt-defense-in-depth"
    kind: "learn"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search"]
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
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Tenant or group scope; on, off, or off in work mode only."
  - governs: "Sensitive content sent to web search"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <name> -Locations <location> -EnforcementPlanes @('CopilotExperiences')"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "Rule: Content contains > Sensitive information types, action Prevent Copilot from processing content > Performing Web Searches. The cmdlet creates the policy only; a rule is also needed."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-17"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Correction: domain exclusion filters web page results only; default set to admin opt-in; licensing marked not yet published and cost rated low; Cloud Policy and Purview paths, roles and query-data wording corrected; unsupported claims removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 51 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: shortened the Cloud Policy path in the web search control row to the steps its Learn page documents; the policy name stays in the prose."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "cd808a965b8e178edb836f7956f04317"
---

## What's changing

When web search is enabled, Microsoft 365 Copilot and Copilot Chat may ground a response in public web content. **Domain exclusion** lets an administrator specify up to 1,000 sites to exclude from that grounding. The configuration supports up to two levels of subdomain and is managed with the `ConfigureTenantDomainExclusions.ps1` PowerShell script (download at aka.ms/Copilot/DomainExclusionScript), which can export the current list to CSV, create or update the list from CSV, delete it, and generate a template.

Microsoft's page says that, currently, domain exclusions support filtering on web page results only. Results from other answer verticals, such as news, might still be cited.

The default settings do not include a domain exclusion configuration; the tenant opts in by running the script. Cowork uses the same exclusion policy. The roadmap shows the feature rolling out, with General Availability targeted for September CY2026.

This sits alongside the existing coarse control, the **Allow web search in Copilot** policy in Cloud Policy service for Microsoft 365 (enable, disable, or disable in work mode only), and the Purview DLP action that blocks web search when a prompt contains sensitive information types.

## Why it matters

Few organisations want to turn web grounding off entirely; it is what makes Copilot useful for current events, vendor documentation and public standards. But most have a short list of sites they would rather not see cited in work output, such as competitor marketing, unreliable content farms or domains under legal dispute. Domain exclusion is the surgical option between "web on" and "web off", with the limit that it filters web page results only, so a listed site might still appear through other answer verticals such as news.

It is also part of Microsoft's prompt-injection defence story: excluding domains known to host adversarial content reduces one path for indirect prompt injection into Copilot responses.

## Risk assessment

**Data exposure**
- Domain exclusion filters incoming web results; it does not prevent generated search queries being sent to Bing. Those queries are a few words informed by the prompt, not entire Microsoft 365 files, but they can be informed by organisational data, such as document content or a manager's name. Very short prompts can themselves form the query. Purview DLP can block external web search when prompt text matches configured sensitive information types.

**Security & identity**
- The script is run by a Search Administrator or Global Administrator; store the CSV in source control so changes are reviewable.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Microsoft has not documented domain-exclusion user messaging at the time of writing (November 2026). Publish the exclusion policy internally so people understand.
- Limit of 1,000 entries and two subdomain levels; wildcard-style blocking of whole TLDs is not described.

## Cost and licensing

- Feature-specific licensing and pricing are not yet published; no domain-exclusion meter is documented at the time of writing (November 2026). The [Domain exclusion overview](https://learn.microsoft.com/copilot/implement/domain-exclusion) lists administrator roles, PowerShell and CSV requirements as its prerequisites and names no licence.
- Indirect: maintaining the CSV and running the script when the list changes.

## Scope

- Microsoft 365 Copilot and Copilot Chat (desktop and web) where web search is enabled; Cowork honours the same list.
- Worldwide (standard multi-tenant). Government clouds have web search off by default and are not listed for this item.
- Declarative agents can scope web search to specific sites in their manifest ([knowledge sources](https://learn.microsoft.com/microsoft-365/copilot/extensibility/knowledge-sources#web-and-scoped-web-search)). Microsoft has not documented how tenant domain exclusions interact with declarative agents that scope web search to an excluded site at the time of writing (November 2026).

## Governance guidance

### Before rollout
- Agree ownership of the exclusion list (information security or legal) and a change process.
- Confirm the current web search posture in Cloud Policy service (enabled, disabled, work-mode disabled) so exclusion is applied where it matters.

### At rollout
- Generate the template CSV with the script, populate from your web filtering deny categories where relevant, and create the configuration.
- Export and store the configuration; record the run in your change log.

### After rollout
- Review the list quarterly alongside web filtering policies.
- Watch Message center for an admin center UI replacing the script, and for GCC availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which domains are excluded from web grounding</strong><br><small>Tenant</small><br><small class="controls__note">Search Administrator or Global Administrator; needs the Az.Accounts module. The script also supports get, update, delete and template.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>ConfigureTenantDomainExclusions.ps1 -Create -FromFile &lt;csv&gt;</code> <a href="https://learn.microsoft.com/copilot/implement/domain-exclusion" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether web search is allowed at all</strong><br><small>Group</small><br><small class="controls__note">Tenant or group scope; on, off, or off in work mode only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sensitive content sent to web search</strong><br><small>Tenant</small><br><small class="controls__note">Rule: Content contains &gt; Sensitive information types, action Prevent Copilot from processing content &gt; Performing Web Searches. The cmdlet creates the policy only; a rule is also needed.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;name&gt; -Locations &lt;location&gt; -EnforcementPlanes @('CopilotExperiences')</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft documents domain exclusion management through the PowerShell script at the time of writing (November 2026). The web search policy is linked from the Microsoft 365 admin center under Copilot > Settings > Data access, as described in [Configure Copilot settings](https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center#configure-data-access), but it is set in Cloud Policy. Users keep a personal web search toggle unless the policy turns it off.

The Purview rule for blocking web search uses **Content contains** > **Sensitive information types** with the action **Prevent Copilot from processing content** > **Performing Web Searches**; save and turn on the policy. The `New-DlpCompliancePolicy` cmdlet in the table is policy creation only and also needs a sensitive-information rule with that action. The DLP action is covered in the [Purview DLP briefing](/features/purview-dlp-block-sensitive-data-in-copilot-web-search/).

## Open questions

- Will a Microsoft 365 admin center UI replace the PowerShell script?
- How do tenant domain exclusions interact with declarative agents that scope web search to a site on the exclusion list?
- Will domain exclusion become available in government clouds?

<!-- rationale
risk: Low. A restrictive control that narrows web grounding; no new data movement.
cost: Low. Maintaining the CSV and running the script take administrator time; feature-specific licensing and pricing are not yet published.
impact: Medium. Changes what web sources every Copilot user may see cited once configured.
-->
