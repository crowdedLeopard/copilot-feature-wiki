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
cost: "none"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Requires Microsoft Purview DLP entitlement for the Copilot location (Microsoft 365 E5, E5 Compliance or Purview Suite) plus Microsoft 365 Copilot or Copilot Chat. A government cloud rollout (roadmap 565870) followed in July 2026."
audiences: ["security","compliance","m365-admin","service-owner"]
tags: ["purview","dlp","m365-copilot","copilot-chat","web-search","web-grounding","sensitive-information-types","cowork","copilot-studio"]
sources:
  - title: "Microsoft 365 Roadmap 548671"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=548671"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 565870 (government clouds)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565870"
    kind: "roadmap"
  - title: "Learn about using Microsoft Purview DLP to protect interactions with Microsoft 365 Copilot, Copilot Chat and Cowork: block sensitive information types in web search"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "DLP policy at the Copilot location with the Performing Web Searches action (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Whether web search is allowed at all (Microsoft 365 Apps admin center)"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access#controls-available-to-manage-web-search"
    kind: "learn"
  - title: "Which domains are excluded from web grounding (PowerShell)"
    url: "https://learn.microsoft.com/copilot/implement/domain-exclusion"
    kind: "learn"
videos: []
related: ["m365-copilot-domain-exclusion-web-grounding","copilot-studio-purview-information-protection-labelled-files","m365-copilot-federated-connectors-write-update-delete"]
controls:
  - governs: "DLP policy at the Copilot location with the Performing Web Searches action"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > location Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <name> -Locations <location> -EnforcementPlanes @('CopilotExperiences'); New-DlpComplianceRule -RestrictAccess"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "Needs a Purview compliance role such as Purview Data Security AI Administrator."
  - governs: "Whether web search is allowed at all"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Cloud Policy > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/copilot/plan/manage-public-web-access#controls-available-to-manage-web-search"
    api: null
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
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 35
  unconfirmed: 5
  contradicted: 7
  attempts: 1
---

## What's changing

When web search is enabled, Copilot may send a derived query to the web search provider to ground a response. Purview DLP can now intervene in real time: a policy at the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** location with a rule that matches **sensitive information types** in the prompt and the action **Prevent Copilot from processing content > Performing Web Searches** stops Copilot using external web search for that response. Copilot still answers from internal Microsoft 365 sources the user is allowed to see.

The capability covers Microsoft 365 Copilot, Copilot Chat, Cowork and Copilot Studio agents published to Microsoft 365 Copilot. It launched worldwide in June 2026; a separate roadmap item brought it to GCC, GCC High and DoD in July 2026. The existing DLP actions at the same location (prevent Copilot summarising labelled content, protect prompts) continue to apply.

## Why it matters

The coarse controls for web grounding are tenant- or group-wide (the Cloud Policy switch) or site-based (domain exclusion). Neither looks at what is in the prompt. This rule does: a user can paste a customer record into Copilot and still get an answer, but the customer's identifiers never reach the search provider. For regulated organisations that has been the blocker to leaving web search on at all.

It is opt-in and needs a DLP policy, so nothing changes until someone builds one. The design decision is which sensitive information types to include: too few and the control is cosmetic, too many and web grounding is effectively off.

## Risk assessment

**Data exposure**
- Positive. Reduces leakage of sensitive identifiers to the external web search provider. Does not affect Microsoft Graph grounding, which stays within the tenant boundary.

**Security & identity**
- Requires Purview DLP policy management roles; no new identities.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Users may notice fewer web citations on certain prompts without being told why; in-product notifications depend on policy configuration.
- False positives on common sensitive information types (for example numbers that look like national IDs) will block web grounding for benign prompts; tune confidence levels.

## Cost and licensing

- Included with Microsoft Purview DLP entitlements that cover the Copilot location (Microsoft 365 E5, E5 Compliance or the Purview Suite). Check the Purview licensing guidance for your plan.
- No metered cost.
- Indirect: policy design, testing in simulation mode, tuning.

## Scope

- Microsoft 365 Copilot, Copilot Chat, Cowork, and Copilot Studio agents published to Microsoft 365 Copilot.
- Worldwide, GCC, GCC High and DoD (government clouds via roadmap 565870).
- Applies to users in the policy scope; adaptive and static scopes available as for other DLP locations.

## Governance guidance

**Before rollout**
- List the sensitive information types that must never reach a web search provider (customer identifiers, health, payment data, internal project codes as custom SITs).
- Confirm web search posture in Cloud Policy so the rule is relevant; if web search is off, this rule has nothing to do.

**At rollout**
- Create the policy in simulation mode first, review matches for a fortnight, then turn it on.
- Set the action to Performing Web Searches only; keep other Copilot DLP actions in separate rules so you can tune them independently.
- Tell users that some prompts will not use web content and why.

**After rollout**
- Review DLP alerts and DSPM for AI activity monthly for match volumes and false positives.
- Add new custom SITs as internal classification matures.
- Combine with domain exclusion for site-level control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>DLP policy at the Copilot location with the Performing Web Searches action</strong><br><small>Tenant</small><br><small class="controls__note">Needs a Purview compliance role such as Purview Data Security AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › location Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;name&gt; -Locations &lt;location&gt; -EnforcementPlanes @('CopilotExperiences'); New-DlpComplianceRule -RestrictAccess</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether web search is allowed at all</strong><br><small>Group</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Cloud Policy › Allow web search in Copilot <a href="https://learn.microsoft.com/copilot/plan/manage-public-web-access#controls-available-to-manage-web-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which domains are excluded from web grounding</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>ConfigureTenantDomainExclusions.ps1 -Create -FromFile &lt;csv&gt;</code> <a href="https://learn.microsoft.com/copilot/implement/domain-exclusion" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The DLP route is the only one that inspects content: Cloud Policy is an all-or-nothing switch and domain exclusion filters where answers come from, not what leaves the tenant. DLP policies can be created in Security & Compliance PowerShell as well as the portal, which is what the cmdlets above do. DSPM for AI shows matches but is not a control. Related: [domain exclusion](/features/m365-copilot-domain-exclusion-web-grounding/).

## Open questions

- Whether trainable classifiers (not only SITs) can drive the web search block.
- User notification options when web grounding is suppressed by policy.
- Coverage for declarative agents built with Agent Builder that enable scoped web search.

<!-- rationale
risk: Low. A restrictive control that reduces data leaving the tenant; opt-in.
cost: None. Existing Purview DLP entitlements.
impact: Medium. Affects which prompts get web-grounded answers for users in scope.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What's changing: existing protect-prompts action / applicability: The same DLP location supports blocking sensitive prompts. | Found: This feature is in preview and is rolling out to all tenants with access to Microsoft 365 Copilot and Copilot Chat. | Fix: Qualify the neighbouring prompt-blocking action as preview; the web-search action's own section is not marked preview. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] front matter: defaultState; Why it matters; rationale: risk / default: The web-search restriction is admin-opt-in and does not block grounding until an administrator configures enforcement. | Found: The RestrictWebGrounding parameter specifies an action for the DLP rule that blocks web grounding. Valid values are: $true: Web grounding is blocked. $False: Web grounding isn't blocked. This value is the default. | Fix: Add the New-DlpComplianceRule reference to sources; its RestrictWebGrounding parameter explicitly documents the nonblocking default. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps
- [unsupported, blocker] front matter: licensing.model, cost; Cost and licensing; rationale: cost / licensing: This web-search protection is included in licences already held, justifying licensing.model included and cost none. | Found: Searched: Copilot DLP web search licensing; web search DLP no additional license. Opened the feature article and Microsoft Purview service description; the latter distinguishes prompt safeguards from file/email protection but does not explicitly identify this web-search action's entitlement. | Fix: Set licensing.model to unknown and cost to low for the documented administrative work until an explicit entitlement for this action is established. State that feature-specific licensing is Not yet published and remove the assertion that existing Purview DLP entitlements establish inclusion.
- [unsupported, blocker] licensing.notes; Cost and licensing: entitlement bullet / licensing: The web-search action requires Microsoft 365 E5, E5 Compliance or Purview Suite plus Microsoft 365 Copilot or Copilot Chat. | Found: Searched: Copilot DLP web search licensing E5; web search Purview licensing DLP safeguard. Opened feature Licensing and Purview service description. No passage assigns this SKU requirement to the web-search action; prompt safeguards are listed for all Copilot and Copilot Chat users. | Fix: Remove the E5/E5 Compliance/Purview Suite prerequisite for this action. Link https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description and explain that its file/email and prompt entitlements differ, without transferring either to this action without explicit confirmation.
- [unsupported, blocker] Cost and licensing: No metered cost / cost: There is no metered cost for the feature. | Found: Searched: Copilot DLP web search metered licensing; Copilot web search DLP no additional license. Opened feature Licensing and Microsoft Purview service description. Neither states that this web-search action is unmetered. | Fix: Replace 'No metered cost' with 'No meter is documented for this web-search action at the time of writing (November 2026)'; do not turn the documentation gap into a guarantee of no charge.
- [contradicted, blocker] controls[0].ui; Governance controls: first row / admin-path: The Purview path is Data Loss Prevention > Policies > + Create policy > Custom > location Microsoft Copilot, Copilot Chat, and Copilot Cowork. | Found: Select the Custom template, then Custom policy. On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: Use 'Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork'. The pre-check's missing phrase is not an invented location, but the path does omit Custom policy and the Locations page. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [contradicted, blocker] controls[0].api; Governance controls: first row and following prose / command: The printed New-DlpCompliancePolicy and bare New-DlpComplianceRule -RestrictAccess calls create the Performing Web Searches policy and rule. | Found: The RestrictWebGrounding parameter specifies an action for the DLP rule that blocks web grounding. Valid values are: $true: Web grounding is blocked. | Fix: Keep the policy-creation call only as policy scaffolding, with a correctly supplied Locations value. Replace the rule fragment with 'New-DlpComplianceRule -Name <rule> -Policy <policy> -ContentContainsSensitiveInformation @(@{Name="<SIT name>"}) -RestrictWebGrounding $true' and cite this rule reference. RestrictAccess requires a hashtable array, not a bare switch; Name and Policy are mandatory, and the cited policy example configures labelled-content exclusion rather than this web-search action. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps
- [contradicted, blocker] controls[0].note; Governance controls: first-row note / role: Purview Data Security AI Administrator is a documented role that can manage these policies. | Found: Purview Data Security AI Admin - Role for editing Data Loss Prevention policies related to Copilot and viewing AI content in Data Security Posture Management. | Fix: Replace 'Purview Data Security AI Administrator' with the documented role name 'Purview Data Security AI Admin' in the front matter and rendered table. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [contradicted, blocker] controls[1].ui; Governance controls: second row / admin-path: The exact Microsoft 365 Apps admin center path is Cloud Policy > Allow web search in Copilot. | Found: Under Customization, select Policy Management. On the Policy configurations page, select Create. | Fix: Replace the shorthand with the documented navigation: 'Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot'. Add the Cloud Policy overview as the path's docs link/source and retain manage-public-web-access for the setting's behaviour. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [contradicted, blocker] controls[1].api; Governance controls: second-row API absence / absence: Microsoft has not documented an API surface for the Allow web search in Copilot control. | Found: microsoft.copilot.allowwebsearch | Allow web search in Copilot | Fix: Document the preview tenant-only API separately from group-scoped Cloud Policy: PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch, with the required value request-body property, citing https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update. State that group/user policies are unsupported by this API, only delegated work/school permission CopilotPolicySettings.ReadWrite is supported, it is global-service only, and beta production use is unsupported. Do not present it as a group-policy equivalent. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting
- [unsupported, major] Risk assessment: Security & identity / behaviour: This feature creates no new identities. | Found: Searched: Copilot DLP web search identities. Opened the Copilot DLP feature article, including Permissions and Supported conditions and actions; it specifies the initiating user's security context but does not state that no new identities are created. | Fix: Replace 'no new identities' with the documented statement: 'Copilot prompts run in the security context of the user who initiates the prompt.'
- [supported, minor] Risk assessment: in-product notifications; Open questions: notifications / behaviour: Copilot DLP supports configurable user notifications. | Found: DLP alerts and DLP notifications are supported. | Fix: Retain the feature article's support statement, but distinguish the documented Policy Tips/compliance-link customization from unconfirmed messaging specifically for a web-search-only block. Note that https://learn.microsoft.com/purview/dlp-policy-reference still lists Copilot user notifications and policy tips as not supported, while the feature article documents support. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] Risk assessment: false positives and confidence tuning / behaviour: SIT confidence levels can be tuned to reduce false-positive matches. | Found: SITs have a predefined confidence level which you can alter if needed. | Fix: Add https://learn.microsoft.com/purview/dlp-policy-reference to sources for the confidence-level tuning advice. Keep the national-ID false-positive example framed as a possible operational risk, not a documented observed incident. | Source: https://learn.microsoft.com/purview/dlp-policy-reference
- [unsupported, blocker] Scope: adaptive and static scopes / applicability: Adaptive scopes are available for this Copilot DLP location as for other DLP locations. | Found: Searched: DLP Copilot adaptive scopes; Copilot DLP adaptive static scopes supported. Opened Copilot DLP Admin units, DLP policy reference and Adaptive scopes. Copilot DLP documents users/groups and admin units; Adaptive scopes describes retention, communication compliance and auto-labeling. | Fix: Replace 'adaptive and static scopes available as for other DLP locations' with 'Scope the policy to users and groups. Administrative-unit scoping is documented in preview and may not yet be available in the tenant.' Cite https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about#admin-units. Do not equate dynamic group membership or retention scopes with adaptive DLP scopes.
- [supported, minor] Governance guidance: DSPM review; Governance controls: matches / applicability: DSPM for AI activity explorer can show DLP rule matches for Microsoft 365 Copilot. | Found: DLP rule match | A data loss prevention rule was matched when a user interacted with a generative AI site. Includes DLP for Microsoft 365 Copilot. | Fix: Add https://learn.microsoft.com/purview/dspm-for-ai-considerations#activity-explorer-events to sources for DLP-match visibility. Identify this as classic DSPM for AI documentation rather than silently presenting classic navigation as the new DSPM experience. | Source: https://learn.microsoft.com/purview/dspm-for-ai-considerations#activity-explorer-events
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist's monitoring instructions are represented in the controls table. | Found: Checklist: 'Review DLP alerts and DSPM for AI activity monthly'. Table: DLP policy, web-search availability, domain exclusion; no monitoring row. | Fix: Add a monitoring row for DLP alerts and DSPM for AI activity explorer, with sourced investigation paths and independently checked automation or absence claims.
- [contradicted, blocker] Governance controls: DSPM for AI is not a control / applicability: DSPM for AI only shows matches and is not a control surface. | Found: Data Security Posture Management for AI provides some recommended preconfigured policies that you can activate with a single click. | Fix: Replace the blanket exclusion with: 'DSPM for AI can display matches and activate protective policies; the Performing Web Searches action in the Copilot DLP rule enforces this particular web-search restriction.' Cite the DSPM overview and the Copilot DLP feature article. | Source: https://learn.microsoft.com/purview/dspm-for-ai
- [supported, minor] Risk assessment: Microsoft Graph tenant boundary / behaviour: Microsoft Graph grounding respects the tenant's existing content security boundary. | Found: The Graph is an integral part of every organization's Microsoft 365 tenancy. ... It enforces the security permissions present on a customer's content and provides secure, compliant, auditable access to that content. | Fix: Cite this Microsoft service-components page and clarify 'tenant boundary' as content-access permissions, not a promise that all processing takes place inside a tenant-specific geographic boundary. | Source: https://learn.microsoft.com/compliance/anz/blueprint-copilot-servicecom#service-components
-->
