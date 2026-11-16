---
title: "Microsoft Purview DLP: stop Copilot sending sensitive data to external web search"
slug: "purview-dlp-block-sensitive-data-in-copilot-web-search"
roadmapId: 548671
topic: "governance"
products: ["Microsoft Purview"]
summary: "A DLP rule at the Copilot location can detect sensitive information types in a prompt and block web grounding for that response, so Copilot answers from internal data only. Covers Copilot Chat, Microsoft 365 Copilot and Copilot Studio agents in Copilot."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this web-search action. The feature article's Licensing section links to general Microsoft 365 licensing pages and names no entitlement for it; the Purview service description lists DLP for files and emails and DLP for prompts separately."
audiences: ["security","compliance","m365-admin","service-owner"]
tags: ["purview","dlp","m365-copilot","copilot-chat","web-search","web-grounding","sensitive-information-types","cowork","copilot-studio"]
sources:
  - title: "Microsoft 365 Roadmap 548671"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=548671"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 565870 (government clouds)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565870"
    kind: "roadmap"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Update copilotPolicySetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Domain exclusion overview"
    url: "https://learn.microsoft.com/copilot/implement/domain-exclusion"
    kind: "learn"
  - title: "Learn about Data Security Posture Management for AI (classic)"
    url: "https://learn.microsoft.com/purview/dspm-for-ai"
    kind: "learn"
  - title: "Considerations for DSPM for AI (classic): activity explorer events"
    url: "https://learn.microsoft.com/purview/dspm-for-ai-considerations#activity-explorer-events"
    kind: "learn"
  - title: "Service components for Copilot guidance for Sensitive and Regulated customers"
    url: "https://learn.microsoft.com/compliance/anz/blueprint-copilot-servicecom#service-components"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "DLP policy at the Copilot location with the Performing Web Searches action"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule> -Policy <policy> -ContentContainsSensitiveInformation @(@{Name=\"<SIT name>\"}) -RestrictWebGrounding $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps"
    note: "Needs a Purview compliance role such as Purview Data Security AI Admin."
  - governs: "Whether web search is allowed at all"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch with body {\"value\": \"<value>\"}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update"
    note: "Cloud Policy can target groups; the Graph beta API is tenant-level only. Delegated CopilotPolicySettings.ReadWrite only; beta."
  - governs: "Which domains are excluded from web grounding"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "ConfigureTenantDomainExclusions.ps1 -Create -FromFile <csv>"
      docs: "https://learn.microsoft.com/copilot/implement/domain-exclusion"
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-06-12T22:00:47"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected licensing to not yet published (cost low), the Purview and Cloud Policy paths, the DLP rule and Graph calls, the role name, scoping, the DSPM wording and the identity statement."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 58
  unconfirmed: 1
  contradicted: 1
  attempts: 2
  hash: "10e556d457cc481b12b2487c42c381e1"
---

## What's changing

When web search is enabled, Copilot may send a derived query to the web search provider to ground a response. Purview DLP can now intervene in real time: a policy at the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** location with a rule that matches **sensitive information types** in the prompt and the action **Prevent Copilot from processing content > Performing Web Searches** stops Copilot using external web search for that response. Copilot still answers from internal Microsoft 365 sources the user is allowed to see.

The capability covers Microsoft 365 Copilot, Copilot Chat, Cowork and Copilot Studio agents published to Microsoft 365 Copilot. It launched worldwide in June 2026; a separate roadmap item brought it to GCC, GCC High and DoD in July 2026. The existing DLP actions at the same location (prevent Copilot summarising labelled content, and blocking sensitive prompts, which the feature article marks as preview) continue to apply.

## Why it matters

The coarse controls for web grounding are tenant- or group-wide (the Cloud Policy switch) or site-based (domain exclusion). Neither looks at what is in the prompt. This rule does: a user can paste a customer record into Copilot and still get an answer, but the customer's identifiers never reach the search provider. For regulated organisations that has been the blocker to leaving web search on at all.

It is opt-in and needs a DLP policy, so nothing changes until someone builds one. The design decision is which sensitive information types to include: too few and the control is cosmetic, too many and web grounding is effectively off.

## Risk assessment

**Data exposure**
- Positive. Reduces leakage of sensitive identifiers to the external web search provider. Does not affect Microsoft Graph grounding, which Microsoft describes as enforcing the security permissions on a customer's content; that is a statement about content access, not about where processing happens.

**Security & identity**
- Requires Purview DLP policy management roles. Copilot prompts run in the security context of the user who initiates the prompt.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Users may notice fewer web citations on certain prompts without being told why. The feature article states that DLP alerts and DLP notifications are supported and documents customising the Learn about access restrictions link through Policy Tips; it does not describe messaging specific to a web-search-only block.
- False positives on common sensitive information types (for example numbers that look like national IDs) could block web grounding for benign prompts; tune confidence levels.

## Cost and licensing

- Licensing for the Performing Web Searches action is Not yet published. The feature article's Licensing section points to Microsoft 365 Enterprise Plans and the Microsoft 365 security and compliance licensing guidance and names no entitlement for this action.
- The Microsoft Purview service description lists Purview DLP to restrict Copilot from processing files and emails, and Purview DLP to safeguard prompts, as separate entitlements. Neither is assumed to cover this action; confirm the entitlement for your plan before budgeting.
- No meter is documented for this web-search action at the time of writing (November 2026).
- Indirect: policy design, testing in simulation mode, tuning.

## Scope

- Microsoft 365 Copilot, Copilot Chat, Cowork, and Copilot Studio agents published to Microsoft 365 Copilot.
- Worldwide, GCC, GCC High and DoD (government clouds via roadmap 565870).
- Scope the policy to users and groups. Administrative-unit scoping is documented in preview and may not yet be available in the tenant.

## Governance guidance

### Before rollout
- List the sensitive information types that must never reach a web search provider (customer identifiers, health, payment data, internal project codes as custom SITs).
- Confirm web search posture in Cloud Policy so the rule is relevant; if web search is off, this rule has nothing to do.

### At rollout
- Create the policy in simulation mode first, review matches for a fortnight, then turn it on.
- Set the action to Performing Web Searches only; keep other Copilot DLP actions in separate rules so you can tune them independently.
- Tell users that some prompts will not use web content and why.

### After rollout
- Review DLP alerts and DSPM for AI (classic) activity explorer monthly for match volumes and false positives.
- Add new custom SITs as internal classification matures.
- Combine with domain exclusion for site-level control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>DLP policy at the Copilot location with the Performing Web Searches action</strong><br><small>Tenant</small><br><small class="controls__note">Needs a Purview compliance role such as Purview Data Security AI Admin.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule&gt; -Policy &lt;policy&gt; -ContentContainsSensitiveInformation @(@{Name=&quot;&lt;SIT name&gt;&quot;}) -RestrictWebGrounding $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether web search is allowed at all</strong><br><small>Group</small><br><small class="controls__note">Cloud Policy can target groups; the Graph beta API is tenant-level only. Delegated CopilotPolicySettings.ReadWrite only; beta.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch with body {&quot;value&quot;: &quot;&lt;value&gt;&quot;}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which domains are excluded from web grounding</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>ConfigureTenantDomainExclusions.ps1 -Create -FromFile &lt;csv&gt;</code> <a href="https://learn.microsoft.com/copilot/implement/domain-exclusion" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The DLP route is the one that inspects prompt content: Cloud Policy controls whether web search is available to users and groups, and domain exclusion filters where answers come from, not what leaves the tenant. The beta Graph call for **Allow web search in Copilot** is separate from group-scoped Cloud Policy: Microsoft documents it as tenant-level only, with group-level and user-level policies unsupported, only the delegated work or school permission CopilotPolicySettings.ReadWrite supported, available in the global service only, and beta APIs not supported in production.

DLP policies can be created in Security & Compliance PowerShell as well as the portal. Microsoft's cmdlet reference creates the policy with `New-DlpCompliancePolicy -Name <policy> -Locations $loc -EnforcementPlanes @("CopilotExperiences")`, where the Copilot location value is `470f2276-e011-4e9d-a6ec-20768be3a4b0`, and the rule call in the table adds the web-grounding block. DSPM for AI can display matches and activate protective policies; the Performing Web Searches action in the Copilot DLP rule enforces this particular web-search restriction.

## Open questions

- Which licence entitles a tenant to the Performing Web Searches action? Watch the Purview service description and the feature article's Licensing section.
- Whether trainable classifiers (not only SITs) can drive the web search block.
- What users see when web grounding is suppressed by a web-search-only rule, and whether that message can be customised beyond the Policy Tips link.
- Coverage for declarative agents built with Agent Builder that enable scoped web search.

<!-- rationale
risk: Low. A restrictive control that reduces data leaving the tenant; opt-in.
cost: Low. The only cost the sources show is admin time to design, test and tune the policy; licensing for this web-search action is Not yet published.
impact: Medium. Affects which prompts get web-grounded answers for users in scope.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[1].ui; Governance controls / admin-path: The cited Cloud Policy overview documents the entire path through Configure Settings > Allow web search in Copilot. | Found: Searched: Cloud Policy Allow web search in Copilot Customization Policy Management Configure Settings. Opened overview-cloud-policy and manage-public-web-access: the overview documents navigation only through Configure Settings, not the named final policy. | Fix: Shorten controls[1].ui.path and its rendered counterpart to 'Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings', retaining the existing overview-cloud-policy docs URL. Keep the separately sourced policy name in the prose; https://learn.microsoft.com/copilot/plan/manage-public-web-access documents that name.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Why it matters / behaviour: The Copilot-location DLP rule detects configured sensitive information types in prompt text. | Found: Add a rule with the Content contains > Sensitive information types condition and choose the SITs you want to detect. | Fix: Add: 'The feature article documents SIT-based web-search blocking; the general DLP policy reference still labels the Copilot location preview and its content-definition table says SIT detection is unsupported.' The conflicting table is at https://learn.microsoft.com/purview/dlp-policy-reference#location-support-for-how-content-can-be-defined. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] Risk assessment: Change & support; Open questions / behaviour: The feature article documents customising the Learn about access restrictions link through Policy Tips. | Found: In the rule's user notification settings, turn on Policy Tips. Select Provide a compliance URL for the end user to learn more about your organization's policies. Customizing the link in Copilot policy tips isn't yet supported for Cowork. | Fix: Add the qualification 'Customising this link is not yet supported for Cowork.' to the existing Policy Tips sentence. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] controls[2].governs; Why it matters; Governance guidance: After rollout; Governance controls / behaviour: Domain exclusion provides site-based filtering of web-grounding sources. | Found: Currently, domain exclusions support filtering on web page results only. Results from other answer verticals, such as news, might still be cited. | Fix: Qualify the site-level-control statement with: 'Domain exclusions filter web page results only; results from other answer verticals, such as news, might still be cited.' | Source: https://learn.microsoft.com/copilot/implement/domain-exclusion
- [contradicted, minor] Governance guidance: After rollout versus Governance controls / consistency: Every control the governance checklist asks the reader to manage or review is represented in the controls table. | Found: Checklist: 'Review DLP alerts and DSPM for AI (classic) activity explorer monthly' and 'Add new custom SITs'. Table: DLP policy creation, web-search availability, domain exclusion only. | Fix: The monitoring-review and custom-SIT-management steps have no corresponding control rows. Without adding rows, remove the first two After rollout bullets; retain the domain-exclusion bullet.
-->
