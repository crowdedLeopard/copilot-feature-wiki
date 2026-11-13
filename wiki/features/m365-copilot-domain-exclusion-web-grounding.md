---
title: "Microsoft 365 Copilot: exclude specific domains from web grounding"
slug: "m365-copilot-domain-exclusion-web-grounding"
roadmapId: 503144
desk: "copilot"
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
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search","m365-copilot-federated-connectors-write-update-delete"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- PowerShell: `ConfigureTenantDomainExclusions.ps1` (get, create, update, delete, template) from aka.ms/Copilot/DomainExclusionScript.
- Microsoft 365 Apps admin center > **Cloud Policy** > **Allow web search in Copilot**: tenant or group level on/off/work-mode-off.
- Microsoft Purview portal > **Data Loss Prevention** > policy at the Microsoft Copilot, Copilot Chat and Cowork location with action **Prevent Copilot from processing content** > **Performing Web Searches** for sensitive information types.
- User side: Copilot app > **Settings** > **Personalization** > **Advanced** > Web search toggle.

## Open questions

- Whether a Microsoft 365 admin center UI will replace the PowerShell script.
- Interaction with declarative agents that scope web search to a site on the exclusion list.
- Government cloud availability.

<!-- rationale
risk: Low. A restrictive control that narrows web grounding; no new data movement.
cost: None. Script-based configuration.
impact: Medium. Changes what web sources every Copilot user may see cited once configured.
-->
