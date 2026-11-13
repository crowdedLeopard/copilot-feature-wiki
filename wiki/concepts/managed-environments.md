---
title: "Managed Environments and environment groups"
slug: "managed-environments"
summary: "The Power Platform governance tier that unlocks sharing limits, maker guidance, usage insights and group-level rules for Copilot Studio and Power Platform environments, and the licensing condition attached to it."
updated: "2026-11-13"
tags: ["managed-environments","environment-groups","power-platform","copilot-studio","sharing-limits","governance","licensing"]
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
