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
version: 2
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
