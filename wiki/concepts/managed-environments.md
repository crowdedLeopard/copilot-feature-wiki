---
title: "Managed Environments and environment groups"
slug: "managed-environments"
summary: "The Power Platform governance tier that unlocks sharing limits, maker guidance, usage insights and group-level rules for Copilot Studio and Power Platform environments, and the licensing condition attached to it."
updated: "2026-11-13"
tags: ["managed-environments","environment-groups","power-platform","copilot-studio","sharing-limits","governance","licensing"]
covers: ["environment-groups","sharing-limits"]
sources:
  - title: "Managed Environments overview"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-overview"
    kind: "learn"
  - title: "Environment groups"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups"
    kind: "learn"
  - title: "Limit sharing (Managed Environments)"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
  - title: "Tenant settings"
    url: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    kind: "learn"
related: ["power-platform-maker-guidelines-copilot-studio","copilot-studio-safe-sharing-credential-oversharing","copilot-studio-block-maker-provided-credentials","copilot-studio-share-autonomous-agents-run-only"]
kind: "concept"
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 31
  confirmed: 23
  unconfirmed: 2
  contradicted: 6
  attempts: 1
---

## What it is

A Managed Environment is an ordinary Power Platform environment with a governance flag switched on. The flag unlocks a set of admin controls that unmanaged environments do not get: sharing limits for apps, flows and agents (Editor and Viewer rules, group sharing, viewer caps), maker welcome content and maker guidelines, usage insights emails, solution checker enforcement, data policy inheritance, IP firewall and others. Several Copilot Studio controls on this wiki say "Managed Environments only" for exactly this reason.

**Environment groups** let administrators apply rules to many managed environments at once. A rule set (sharing limits, maker guidelines, credential controls, Copilot settings) is published to the group and inherited by every member; environments inside a group cannot override those settings individually. Microsoft's default environment routing can place new personal developer environments into a group automatically.

## The licensing condition

Managed Environments is not a separate SKU, but an environment can only be managed when the users who run apps, flows and agents in it hold **standalone** Power Platform or Copilot Studio licences (Power Apps or Power Automate premium, Copilot Studio) rather than relying solely on rights seeded in Microsoft 365. In practice that means production environments with licensed makers can be managed; the default environment often cannot without a licensing decision. Check the current licensing guide before planning a rollout that assumes every environment can be managed.

## Why service owners care

- Most new Copilot Studio governance controls (safe sharing enforcement at group scale, maker guidelines, credential controls for groups) are delivered as environment-group rules. Without groups you configure each environment by hand.
- Sharing limits are the only structural control over how far an agent can spread inside the tenant.
- Usage insights give environment admins a weekly view of what is being built and used.

## Operating pattern

1. Define environment classes (personal, development, test, production) and create an environment group per class.
2. Make production and shared development environments managed; decide what to do about the default environment.
3. Publish rules per group: sharing limits, maker guidelines, credential controls, Copilot settings.
4. Use environment routing so new environments land in the right group.
5. Review group rules when a new control ships; most Copilot Studio governance features on this wiki add a rule type.

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What it is, paragraph 1 / behaviour: Managed Environments is an enableable governance property on a Power Platform environment. | Found: Admins enable, disable, and edit managed environments in the Power Platform admin center. | Fix: Add the additional Microsoft sources used to substantiate this page: https://learn.microsoft.com/power-platform/admin/managed-environment-enable ; https://learn.microsoft.com/power-platform/admin/managed-environment-licensing ; https://learn.microsoft.com/power-platform/admin/maker-guidelines ; https://learn.microsoft.com/power-platform/admin/environment-groups-rules ; https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication ; https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials ; https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights . Report these citation additions together rather than as separate findings. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-enable
- [contradicted, blocker] What it is, paragraph 1; Why service owners care, bullet 2 / applicability: Agent sharing limits control how far agents spread without an authentication or existing-access qualification. | Found: Sharing limits only apply to agents that require authentication. | Fix: State that sharing limits apply only to authenticated agents, do not revoke access granted before the rules, and do not restrict publishing to the bound Teams team in Dataverse for Teams. Describe them as prospective sharing restrictions, not a universal boundary on agent reach. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits
- [supported, minor] What it is, paragraph 1 / applicability: Maker guidelines is available only in Managed Environments. | Found: Maker guidelines is available only for managed environments. | Fix: Label maker guidelines as preview wherever the page presents the capability; the source is titled 'Configure maker guidelines for Copilot Studio (preview)' and explicitly identifies itself as prerelease documentation. | Source: https://learn.microsoft.com/power-platform/admin/maker-guidelines
- [unsupported, blocker] What it is, paragraph 1 / applicability: Enabling Managed Environments unlocks data policy inheritance that unmanaged environments do not get. | Found: Searched: "managed environments" "data policy inheritance". Opened managed-environment-overview, managed-environment-data-policies and wp-data-loss-prevention on Microsoft Learn; found filtered policy visibility and general policy cascading, not managed-only inheritance. | Fix: Replace 'data policy inheritance' with 'a filtered view of the data policies applied to the environment'. https://learn.microsoft.com/power-platform/admin/managed-environment-data-policies documents that filtered view, not a separate inheritance capability.
- [contradicted, blocker] The licensing condition / licensing: Users running apps, flows and agents must hold standalone Power Platform or Copilot Studio licences for the environment to be managed. | Found: Pay-as-you-go meters for Power Apps per app, Power Pages, and Copilot Studio also qualify. When you activate managed environments in an environment, all active usage requires one of these standalone licenses or pay-as-you-go meters. | Fix: Describe compliance for active usage, not a technical restriction on enabling management. Include qualifying Dynamics 365 and Power Pages entitlements, Copilot Studio for Microsoft 365 Copilot for Copilot Studio-related features, and qualifying capacity plans or pay-as-you-go meters. Refer to https://learn.microsoft.com/power-platform/admin/managed-environment-licensing for workload-specific coverage rather than requiring every user to hold one of the three named standalone licences. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-licensing
- [contradicted, blocker] The licensing condition, sentence 2 / licensing: Having licensed makers is sufficient to make a production environment managed. | Found: Every user who runs an app in a managed environment is in scope, including users who run standard apps. The requirement applies to active usage in the environment rather than to the type of app. | Fix: Replace 'production environments with licensed makers can be managed' with 'Before enabling management, verify qualifying coverage for all active usage, including app runners and applicable flow usage, not just makers.' Keep the default-environment licensing review as advice. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-licensing
- [unsupported, major] Why service owners care, bullet 1; Operating pattern, step 5 / behaviour: Most new Copilot Studio governance controls are delivered as environment-group rules. | Found: Searched: "Copilot Studio" "most" "environment group" "governance"; "Copilot Studio" "credential" "environment groups". Read environment-groups-rules, environment-groups, maker-guidelines and credential-control documentation; no source establishes 'most new' controls. | Fix: Replace both majority assertions with 'Environment groups support sharing controls, maker guidelines (preview), credential controls and other governance settings; review the available rules when planning governance changes.' Do not quantify how many new features add a rule type.
- [supported, minor] Why service owners care, bullet 1 / applicability: Safe sharing enforcement for embedded maker credentials can be applied at environment-group scale. | Found: You can configure the setting for an individual environment or an environment group. | Fix: Call this 'Sharing agents with embedded maker credentials (preview)' rather than presenting safe sharing enforcement as an unqualified final capability. | Source: https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials
- [contradicted, blocker] Why service owners care, bullet 2 / applicability: Sharing limits are the only structural control over how far an agent can spread inside the tenant. | Found: Administrators can use the **Sharing agents with embedded maker credentials** setting in the Power Platform admin center to prevent agents from being shared when they contain connections configured to use maker credentials that other users aren't permitted to reuse. | Fix: Remove 'the only structural control'. Say 'Sharing limits restrict prospective Editor and Viewer sharing for authenticated agents; other controls, including embedded-credential sharing policy, also constrain sharing or access.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits
- [contradicted, blocker] Why service owners care, bullet 3 / role: Environment admins receive the weekly usage insights view by virtue of their environment-admin role. | Found: The weekly digest is sent to all users with the roles of Power Platform administrator and Dynamics 365 service administrator. | Fix: Say the digest goes to Power Platform administrators and Dynamics 365 service administrators, with environment admins included only if added as additional recipients. Mention that tenant-level analytics must be enabled and the relevant environments included in the digest. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights
- [contradicted, minor] Operating pattern, steps 2-4 / consistency: The operating checklist recommends configuring management, group rules and routing without any corresponding controls table. | Found: Make production and shared development environments managed; decide what to do about the default environment. / Publish rules per group: sharing limits, maker guidelines, credential controls, Copilot settings. / Use environment routing so new environments land in the right group. | Fix: Add governance-control rows for enabling Managed Environments, configuring and publishing group rules, sharing limits, maker guidelines, credential controls, the specific Copilot settings intended, and developer-environment routing. Use the verified Microsoft pages for each UI path; research any API absence before setting that side to null.
-->
