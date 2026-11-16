---
title: "Power Pages: enhanced authorisation maps web roles and site users to Dataverse security"
slug: "power-pages-design-studio-unify-power-pages-authorization-by-merging-web-role-with-dataver"
roadmapId: 576750
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages web roles and site users are mapped to Dataverse security roles and system users so Dataverse evaluates permissions directly and records operations under the site user."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn states the system users are managed internally, grant no direct Dataverse access and need no additional licensing."
audiences: ["power-platform-admin","security","maker","compliance"]
tags: ["power-pages","authorisation","dataverse","web-roles","security-roles","auditing","impersonation"]
sources:
  - title: "Enable enhanced authorization (preview)"
    url: "https://learn.microsoft.com/en-us/power-pages/security/unify-pages-security-with-dataverse"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576750"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576750"
    kind: "roadmap"
videos: []
related: ["microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column","power-pages-administration-and-governance-manage-external-authentication-providers-with-gr"]
confidence: "high"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-16T19:08:35"
changes:
  - date: "2026-11-15"
    note: "New briefing: Power Pages enhanced authorisation merging web roles with Dataverse security roles, in development."
version: 1
---

## What's changing

Power Pages continues to use contacts and web roles, but with enhanced authorisation each contact is mapped to a Dataverse system user and each web role to a Dataverse security role. Dataverse then evaluates permissions and returns only permitted records, replacing a check inside Power Pages that ran under an elevated application user.

Learn states that operations run through impersonation as the site user, plug-ins run as the calling user unless configured otherwise, and audit entries track under the respective site user. Column-level permissions set for the Power Pages Web API are bypassed and Dataverse column security profiles apply instead.

To enable, the site needs Power Pages Core 1.1.2605.258 or later and Dataverse Base Portal 9.3.2605.265 or later, then the Enable Enhanced Authorization check box in the Power Pages admin center. The roadmap shows a preview from July 2026 and general availability targeted for November 2026.

## Why it matters

The model gives native auditing and removes duplicate permission checks, which supports compliance and performance. It also means Dataverse admins will see many managed system users and security roles that originate from sites.

Plug-ins and column permissions behave differently, so teams must test before enabling on production sites.

## Risk assessment

**Data exposure**
- Permissions are enforced by Dataverse, which can narrow or change what the Web API returns; column permissions move to column security profiles.

**Security & identity**
- Multiple system users may be created for one contact across sites.

**Autonomy & actions**
- Plug-ins run as the calling user, which can change their effective privileges.

**Change & support**
- Preview feature; Microsoft says no maker changes or migration are needed, but behaviour should be verified.

## Cost and licensing

No extra licence is required according to Learn: the system users are managed internally and access continues to be governed by Power Pages licensing. Plan testing and update effort for the Power Pages solutions.

## Scope

Power Pages sites in the Worldwide cloud. Requires the minimum Power Pages Core and Dataverse Base Portal versions named above. Enabled per site by an admin.

## Governance guidance

### Before rollout
- [ ] Update the Power Pages solutions to the minimum versions.
- [ ] Inventory plug-ins on tables that sites use and check their calling-user assumptions.
- [ ] Review Web API column permissions and plan column security profiles.

### At rollout
- [ ] Enable enhanced authorisation on a test site first.
- [ ] Verify access for each web role.

### After rollout
- [ ] Review audit logs for site-user entries.
- [ ] Check the growth of system users and security roles.
- [ ] Monitor Web API performance.

## Admin controls

In Power Pages, open the Power Pages admin center for the site (ellipsis next to the site), select Edit next to site details, tick Enable Enhanced Authorization and save. Related controls are table permissions, web roles, and Dataverse column security profiles.

## Open questions

- Can enhanced authorisation be reverted once enabled?
- Will it become the default for new sites at general availability?
- How should system user growth be managed in large external sites?

<!-- rationale
risk: Medium. Authorisation moves into Dataverse with impersonation, which changes plug-in context and column security behaviour, but existing configuration is meant to remain intact.
cost: Low. Learn says the created system users need no extra licensing and access stays governed by Power Pages licensing; cost is testing effort.
impact: Medium. Site makers and administrators see new system user and security role records, while site visitors see no change.
-->
