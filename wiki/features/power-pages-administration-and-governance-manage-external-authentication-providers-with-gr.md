---
title: "Power Pages: environment-level governance of external authentication providers"
slug: "power-pages-administration-and-governance-manage-external-authentication-providers-with-gr"
roadmapId: 578062
desk: "power-platform"
products: ["Power Pages"]
summary: "Administrators will set which external identity providers Power Pages sites may use across an environment, with optional site-level exceptions."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["power-platform-admin","security","maker"]
tags: ["power-pages","authentication","identity-providers","governance","power-platform-admin-center","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 578062"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578062"
    kind: "roadmap"
  - title: "Manage website security from the Power Platform admin center"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-security"
    kind: "learn"
videos: []
related: ["managed-environments","data-policies","agent-identity"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-23T22:45:54"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 578062; roadmap text only."
version: 1
---

## What's changing

Power Pages will let administrators manage external authentication providers with environment-level controls and optional site-level exceptions. An administrator enforces which identity providers are allowed across all sites in an environment, and makers see only the approved ones when they set up authentication.

The roadmap gives the path: Power Platform admin center > Manage > Power Pages > Governance settings > Authentication providers. There an administrator configures allowed or restricted providers, enables the control for environments and manages exceptions for specific sites.

Preview is listed for November CY2026 and general availability for January CY2027, in Worldwide, GCC, GCC High and DoD. The roadmap entry reads as enabled automatically, but whether any restriction applies by default is not clear. I found no Learn page yet.

## Why it matters

Makers can currently pick any supported provider for a site. Central control helps security teams keep sign-in to approved identity providers and meet policy.

Enforcement may affect live sites, so the order of rollout matters.

## Risk assessment

**Data exposure**
- No new data exposure. Restricting providers can reduce accidental use of unapproved social or third-party identities.

**Security & identity**
- Improves control over who can authenticate to external sites. Exceptions weaken the control, so keep them few and reviewed.

**Autonomy & actions**
- None.

**Change & support**
- Sites already using a provider that later becomes restricted may fail sign-in. Test before enforcing.

## Cost and licensing

No licence or meter is published. Treat it as included in Power Pages. Not yet published: any dependency on Managed Environments.

## Scope

Power Platform administrators and Power Pages makers. Clouds: Worldwide, GCC, GCC High and DoD.

## Governance guidance

### Before rollout
- [ ] Inventory the identity providers used by existing sites in each environment.
- [ ] Decide the approved list and who may approve exceptions.

### At rollout
- [ ] Enable the control in a test environment first.
- [ ] Tell makers which providers they will see.

### After rollout
- [ ] Review exceptions on a schedule.
- [ ] Check sign-in failures after enforcement.

## Admin controls

Power Platform admin center > Manage > Power Pages > Governance settings > Authentication providers, per the roadmap. Details on PowerShell or API control are not yet published.

## Open questions

- Is enforcement blocking for existing sites, or only for new configuration?
- Does it cover Microsoft Entra External ID and local sign-in?
- Is the control audited in Microsoft Purview?

<!-- rationale
risk: Low. It adds a restriction control. The risk is mainly that existing sites with unapproved providers could be affected once enforcement is enabled.
cost: Low. No licence is published; the cost is admin time to define the allowed providers.
impact: Medium. Makers see only approved providers, and sites using others may need rework.
-->
