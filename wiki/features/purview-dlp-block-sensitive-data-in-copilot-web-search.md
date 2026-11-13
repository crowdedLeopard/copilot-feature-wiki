---
title: "Microsoft Purview DLP: stop Copilot sending sensitive data to external web search"
slug: "purview-dlp-block-sensitive-data-in-copilot-web-search"
roadmapId: 548671
desk: "security-compliance"
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
videos: []
related: ["m365-copilot-domain-exclusion-web-grounding","copilot-studio-purview-information-protection-labelled-files","m365-copilot-federated-connectors-write-update-delete"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-06-12T22:00:47"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Microsoft Purview portal > **Data Loss Prevention** > **Policies** > **Create policy** > Custom > location **Microsoft Copilot, Copilot Chat, and Copilot Cowork** > rule condition **Content contains > Sensitive information types** > action **Prevent Copilot from processing content > Performing Web Searches**.
- Microsoft Purview portal > **DSPM for AI**: activity explorer for Copilot interactions and DLP matches.
- Microsoft 365 Apps admin center > **Cloud Policy** > **Allow web search in Copilot**: the coarse switch.
- PowerShell: `ConfigureTenantDomainExclusions.ps1` for site-level exclusion.

## Open questions

- Whether trainable classifiers (not only SITs) can drive the web search block.
- User notification options when web grounding is suppressed by policy.
- Coverage for declarative agents built with Agent Builder that enable scoped web search.

<!-- rationale
risk: Low. A restrictive control that reduces data leaving the tenant; opt-in.
cost: None. Existing Purview DLP entitlements.
impact: Medium. Affects which prompts get web-grounded answers for users in scope.
-->
