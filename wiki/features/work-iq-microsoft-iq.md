---
title: "Work IQ: Microsoft IQ as a unified intelligence layer for agents"
slug: "work-iq-microsoft-iq"
roadmapId: 570870
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a unified intelligence layer for agents, with preview in November 2026 and general availability in January 2027. Microsoft has not published its behaviour, default or licence; Work IQ usage is billed in Copilot Credits."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Learn describes Work IQ API usage as billed by usage in Copilot Credits, independent of Microsoft 365 Copilot licensing. A licence or rate for the roadmap item itself is not yet published."
audiences: ["m365-admin","service-owner","finops","security"]
tags: ["work-iq","microsoft-iq","agents","knowledge-grounding","copilot-credits","usage-based-billing","mcp","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 570870"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570870"
    kind: "roadmap"
  - title: "Microsoft IQ documentation"
    url: "https://learn.microsoft.com/microsoft-iq"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
videos: []
related: ["work-iq","copilot-credits","mcp","work-iq-agent-policy-governance","agent-identity"]
controls:
  - governs: "Work IQ MCP tenant policy, including whether mutation operations are allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "General control: Microsoft has not confirmed it applies to this roadmap item. The Policy tab appears when it is available. Changes can take up to 24 hours to apply."
  - governs: "Spending policies and consumption for Work IQ API usage"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "General control for Work IQ API: Microsoft has not confirmed it applies to this roadmap item. Beta API, subject to change."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-17"
    note: "First briefing on the Work IQ: Microsoft IQ roadmap item, with the Work IQ policy and Copilot Credits controls Learn documents today and what Microsoft has not yet said."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: licensing model and cost rating now reflect that the release's licensing is not yet published; added the harness write-default note and service-principal auto-creation note; removed the service-principal setup step from the checklist."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "efff8de7d7d268732629c4db3d974a8e"
---

## What's changing

The roadmap item "Work IQ: Microsoft IQ" describes a unified intelligence layer that helps agents discover, reason over and use organisational knowledge. That one sentence is all the roadmap record says. The roadmap lists the status as In development, with a preview targeted for November CY2026 and general availability targeted for January CY2027, on the Worldwide (Standard Multi-Tenant) cloud and the Web platform. These are Microsoft's targets, not commitments.

Microsoft Learn has a Microsoft IQ documentation hub that describes Microsoft IQ as "a unified intelligence layer for enterprise AI". It lists four capabilities: Work IQ (how employees work, with context on people, collaboration and workflows), Fabric IQ (the live state of the business), Foundry IQ (curated institutional knowledge) and Web IQ (fresh intelligence from the web). Whether the roadmap item is that hub, a change to Work IQ, or something else is not stated, so what follows about behaviour is background from Learn, not a description of the planned release.

The Work IQ overview on Learn calls Work IQ a workplace intelligence layer that lets agents access and reason over organisational and business data, context and tools, with permission-aware governance. It lists A2A, a remote MCP server and a REST API as its endpoints, and says every request runs in the context of a specific user.

## Why it matters

If this item widens what agents can retrieve or do through Work IQ, a small number of tenant settings will decide that for many agents at once, and the meter is shared with other Copilot Credits services. Microsoft has not stated what happens on arrival, so the sensible position is to assume no source says existing behaviour changes, and to check your Work IQ policy and spending settings before the November 2026 preview target rather than after general availability.

The practical value of the page is the gap it exposes: the roadmap promises a layer for agents to "use" organisational knowledge, while the documented controls are specific to Work IQ MCP policy and to Copilot Credits spending. Confirm which of them will cover the new capability once Microsoft documents it.

## Risk assessment

**Data exposure**

- Learn says Work IQ includes productivity data from Microsoft 365 applications and business and workflow data from Dynamics 365 and Power Platform. If the roadmap's "organizational knowledge" draws on the same data, agents gain a wider route to it; Work IQ requests are user-scoped, so the user's existing permissions still decide what is returned.
- Learn says the Work IQ MCP policy cannot grant access beyond what the signed-in user can already access. Oversharing in SharePoint or mailboxes is therefore the exposure to review, not the policy.

**Security & identity**

- The Work IQ MCP policy page states that policy does not replace Microsoft Entra authentication, OAuth permissions or the signed-in user's Microsoft 365 permissions, so those layers still apply.
- Microsoft has not said which identity the new capability would use. Treat that as something to confirm.

**Autonomy & actions**

- Learn says Work IQ MCP tools can create, update and delete as well as read, and that mutation operations are not allowed by default under the tenant policy. The Copilot Studio Microsoft Copilot harness guide separately says "Write operations are on by default"; verify the effective setting for your experience. An administrator can enable supported mutation scenarios in the Microsoft 365 admin center, so check that setting before agents are expected to send mail or change data.
- Whether the roadmap item adds actions beyond those tools is not stated.

**Change & support**

- Preview and general availability are both listed in the release phase, so expect preview behaviour to change before general availability.
- Microsoft states the MCP policy change can take up to 24 hours to apply, which matters when testing a block.

## Cost and licensing

No licence or price is published for the roadmap item itself. For Work IQ, Learn states that API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing, that Microsoft 365 Copilot licensed users get Work IQ in Copilot experiences and agents subject to usage-based billing for custom and third-party agents, and that users without a Copilot licence are billed on usage (Work IQ overview).

The meter is Copilot Credits, shared with other eligible services. The enablement guide lists a usage-based billing plan set up in Copilot Studio, with an Azure subscription and resource group assigned, as a prerequisite. Spending is managed in the Microsoft 365 admin center under Copilot > Cost management, where spending policies, alerts and consumption by service and agent are available. Spending policies have an Auto-apply new services setting that is enabled by default, so a newly supported service can inherit an existing policy.

A rate for the new capability is not yet published. Do not carry over a Work IQ rate to it until Microsoft states one.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with General Availability and Preview release phases. It lists no US Government cloud; that is a record fact, not a statement that the capability is unavailable elsewhere.

For Work IQ, Learn names a one-time setup by a user with the Global Administrator role to create the Work IQ service principal, and a usage-based billing plan as prerequisites. The MCP overview also says the service principal is created automatically on first use; manual provisioning can be needed to configure policy before that use. Whether the new capability needs the same setup, which users it reaches and how it rolls out are not stated.

## Governance guidance

### Before rollout

- Inventory where Work IQ is already in use.
- Review spending policies under Copilot > Cost management, including whether Auto-apply new services should stay on, so that a new service does not inherit coverage unreviewed.
- Check the Work IQ MCP policy state in the Microsoft 365 admin center and whether mutation operations have been enabled.
- Review SharePoint and mailbox oversharing, since Work IQ requests run with the user's permissions.

### At rollout

- Watch the Microsoft 365 roadmap item and Message center for the November 2026 preview and the January 2027 general availability targets, and for any act-by date.
- Test with a small group before widening, and allow up to 24 hours for an MCP policy change to apply.
- Set a spending limit and alerts for the services that draw on Copilot Credits before agents are widely used.

### After rollout

- Review consumption by service and agent in the Cost management dashboard.
- Re-check the Work IQ MCP policy settings once Microsoft documents what the new capability adds.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ MCP tenant policy, including whether mutation operations are allowed</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to this roadmap item. The Policy tab appears when it is available. Changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending policies and consumption for Work IQ API usage</strong><br><small>Tenant</small><br><small class="controls__note">General control for Work IQ API: Microsoft has not confirmed it applies to this roadmap item. Beta API, subject to change.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are controls for Work IQ and Copilot Credits that Learn documents today; Microsoft has not confirmed that either applies to the capability in this roadmap item. The MCP policy page describes tenant-level control only: per-user, per-app, per-agent or scenario-specific policy templates are not part of the initial policy control surface, and the page says more granular controls might be added later. Microsoft Learn documents no API for the Work IQ MCP policy toggle at the time of writing (November 2026). The Cost Management API is under /beta, which Learn says is subject to change and not supported in production; creating a spending policy also requires the Billing Administrator or Global Administrator role.

## Open questions

- Is the roadmap item the Microsoft IQ capability described on Learn, or a change to Work IQ? Watch the roadmap item and the Microsoft IQ hub on Learn.
- What is the default state when the preview and general availability arrive, and does any tenant switch exist for it? Watch Message center.
- Will the new capability be metered in Copilot Credits at the Work IQ rate, or at a separate rate? Watch the usage-based billing page on Learn.
- Will the Work IQ MCP policy and spending policies cover it, and which identity does it use? Watch the Work IQ policy governance page.

<!-- rationale
risk: Medium. The roadmap describes agents discovering and using organisational knowledge, and the default state is not stated; the Work IQ controls Learn documents cover part of this, but none is confirmed for the new item.
cost: Low. The known cost for this roadmap change is admin review time; licensing and metering for the release are not yet published. Existing Work IQ API usage separately consumes Copilot Credits.
impact: Medium. Makers, developers and agent owners who build on Work IQ are most likely to notice; Microsoft has not said whether ordinary Microsoft 365 Copilot users see any change.
-->
