---
title: "Copilot Studio: persistent identity (agent accounts) for agents"
slug: "microsoft-copilot-studio-persistent-identity-for-copilot-studio-agents"
roadmapId: 570430
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio makers can give an agent its own Microsoft 365 account, with mailbox and Teams presence. Documented today as a Frontier preview that admins must switch on in two places; it needs its own licence per agent."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn documents a Microsoft 365 Frontier for AI Teammates licence per agent account, a maker licence (Microsoft 365 E5 plus Agent 365, or Microsoft 365 E7), and separate usage charges. Prices are not given on the feature page."
audiences: ["m365-admin","power-platform-admin","security","finops"]
tags: ["copilot-studio","agent-identity","agent-users","entra-agent-id","agent-365","memory","licensing","copilot-credits","teams","exchange"]
sources:
  - title: "Microsoft 365 Roadmap 570430"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570430"
    kind: "roadmap"
  - title: "Give your agent an account (Frontier)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-account"
    kind: "learn"
  - title: "FAQ for agent accounts (Frontier)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/faq-agent-accounts"
    kind: "learn"
  - title: "Microsoft Entra Agent IDs for Copilot Studio agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-use-entra-agent-identities"
    kind: "learn"
  - title: "Agent identities and authentication for Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/govern-agents-identities-overview"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
videos: []
related: ["agent-identity","dataverse-agent-users-entra-agent-identity","agent-365-control-plane-for-agents","copilot-credits","work-iq-memory-capabilities-expand-to-agents"]
controls:
  - governs: "Which users and groups can create agents with accounts (template activation)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "All Agents > filter Agent template: Yes > Copilot Studio (Frontier) > Activate > Users step"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-account"
    api: null
    note: "Tenant admin. Preview (Frontier) documentation."
  - governs: "Whether agents in an environment can have accounts"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Copilot Studio > Agent accounts"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-account"
    api: null
    note: "Turning it off hides the Agent account button. Also the only documented way to turn off shared memory. Preview."
  - governs: "Blocking a specific agent that has an account"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > select an agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api: null
    note: "General control for agents in the admin centre; the page does not mention agent accounts specifically."
  - governs: "Shared memory of an agent with an account"
    scope: "agent"
    ui: null
    api: null
    note: "FAQ: an admin cannot turn shared memory off independently of agent accounts; users cannot opt out."
confidence: "high"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-16"
    note: "First briefing: documents the Frontier preview of agent accounts, its two admin switches, per-agent licence and shared-memory behaviour."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 65
  unconfirmed: 0
  contradicted: 3
  attempts: 1
---

## What's changing

Makers will be able to give a Copilot Studio agent its own account, so the agent becomes a named identity in Microsoft 365 rather than something that only runs behind a maker or a shared service connection. Microsoft Learn describes the account as giving the agent "its own Microsoft Entra ID, mailbox, and presence across Microsoft 365".

Once the agent is published, it has its own mailbox (it can send and receive email and be added to distribution lists), appears in Microsoft Teams and the organisation's directory, and can be @mentioned by colleagues. Supported tools can use the agent's own scoped access, and tools set to end-user authentication use the agent's identity and consent. Learn lists current limits: the agent does not respond to anyone outside its tenant, replies in email only with up to 250 people, cannot co-author existing documents, and cannot read documents protected by sensitivity labels such as Confidential or Internal Only.

The feature is not generally available. The roadmap item (In development) lists a preview date of September CY2026 and a target date of November CY2026, with Preview and General Availability phases, for the Worldwide (Standard Multi-Tenant) cloud on the web. The Learn page "Give your agent an account (Frontier)" is prerelease documentation for the Frontier preview programme, so its limits and licensing describe the preview and may change before general availability.

## Why it matters

This creates a new kind of identity in the tenant: an agent that is addressable like a colleague, holds a mailbox and a licence, and keeps a memory shared across its users. Your service desk, records and eDiscovery owners, and Teams owners will start to meet agents as directory members rather than as apps.

Nothing happens until an admin activates the Copilot Studio (Frontier) template and turns on Agent accounts for an environment, so the decision is yours. The shared-memory behaviour is the point to settle first: Learn says shared memory has no privacy boundary between users and cannot be switched off without turning off agent accounts altogether. Treat the first pilot as a small, internal, non-sensitive team process.

## Risk assessment

**Data exposure**

- Shared memory: the agent keeps one memory across everyone it works with, and Learn says the People card warns that shared files and chats "can be summarized and included in the agent's responses to any user, even users without permissions to the files or chats and regardless of sensitivity label". Memory is deleted after 28 days without interaction, and users cannot opt out.
- Protected documents: Learn states agents with an account cannot read documents protected with sensitivity labels such as Confidential. Labelling therefore limits what the agent ingests, but people can still paste or share content in chats, which memory can retain.

**Security & identity**

- Each agent with an account has a Microsoft Entra account plus a separate Microsoft Entra Agent ID that admins manage separately. Plan reviews of both, as the identity inventory now holds two objects per agent.
- The account does not automatically grant every tool permission, so check which identity each tool uses; tools set to end-user authentication use the agent's identity and consent.
- The agent's email address cannot be changed after publishing, and the maker-based alias prefix and reporting line cannot be changed in the preview.

**Autonomy & actions**

- Agents with an account can be triggered and can send email and generate documents as themselves. Microsoft does not document, at the time of writing (November 2026), a tenant-level control that limits which actions an agent account may take, beyond the Agent accounts switch and agent blocking.

**Change & support**

- Publishing fails when no Microsoft 365 Frontier for AI Teammates licence is free, which makers will report as an error. In the European Economic Area the agent appears in Teams only if Teams is separately licensed.

## Cost and licensing

Learn lists these requirements on "Give your agent an account (Frontier)": a maker licence of Microsoft 365 E5 with the Microsoft Agent 365 add-on, or Microsoft 365 E7 (which includes Agent 365); tenant enrolment in the Microsoft Frontier Program with the Agent 365 Terms of Service accepted; and Microsoft 365 Frontier for AI Teammates licences. Each licence is assigned per agent and used when the maker publishes. When none is free, publishing fails until an admin removes a licence from another agent or acquires more.

Usage is charged separately. Learn says account licensing and usage-based service charges are separate, and that using, building, testing and evaluating agents on this harness might consume Copilot Credits (see /concepts/copilot-credits/). The pool size provisioned on enrolment, the price of the Frontier for AI Teammates licence, and the general-availability licensing are not published on the feature page; check the Copilot Credits Licensing Guide it links and Message center.

## Scope

Only users and groups selected in the activation wizard of the Copilot Studio (Frontier) template can create agents with accounts. Admin switches apply per environment: Learn requires the environment to use the early release cycle, and makers build in Copilot Studio Preview.

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the web platform. Learn says agent accounts are available to customers in the European Economic Area. Tenant admins activate the template, and a global admin enrols the tenant in Frontier from Agents > Overview in the Microsoft 365 admin center. Learn names no roles for the Power Platform admin center step.

## Governance guidance

### Before rollout

- Decide whether to pilot: read the Learn page, then confirm your tenant is enrolled in Frontier and has free Microsoft 365 Frontier for AI Teammates licences (Microsoft 365 admin center, global admin).
- Name a small group of makers and a non-sensitive internal process for the first agent; only they will be selected at the template's Users step.
- Brief colleagues that the agent's memory is shared across all users and that files and chats they share can appear in responses to others; ask the records and privacy owners to agree wording.
- Agree an alias and job-title convention, because the email address cannot be changed after publishing.

### At rollout

- Activate the Copilot Studio (Frontier) template in the Microsoft 365 admin center and select only the pilot users or groups.
- Turn on Agent accounts only in an early release environment used for the pilot, in the Power Platform admin center.
- Ask pilot makers to avoid sensitive labelled content, since agents with an account cannot read protected documents and testing must use approved, non-sensitive samples.

### After rollout

- Review the agents in the Microsoft 365 admin center agent list and block any that should not run, and remove a licence from retired agents to free the pool.
- Check the agent's Entra Agent ID and sign-in state in the Microsoft Entra admin center when an agent stops responding in Teams; Learn says a disabled or blocked Agent ID can cause this.
- Monitor Copilot Credits consumption for pilot agents against budget.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can create agents with accounts (template activation)</strong><br><small>Tenant</small><br><small class="controls__note">Tenant admin. Preview (Frontier) documentation.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>All Agents › filter Agent template: Yes › Copilot Studio (Frontier) › Activate › Users step <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-account" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether agents in an environment can have accounts</strong><br><small>Environment</small><br><small class="controls__note">Turning it off hides the Agent account button. Also the only documented way to turn off shared memory. Preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Copilot Studio › Agent accounts <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-account" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Blocking a specific agent that has an account</strong><br><small>Agent</small><br><small class="controls__note">General control for agents in the admin centre; the page does not mention agent accounts specifically.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › select an agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Shared memory of an agent with an account</strong><br><small>Agent</small><br><small class="controls__note">FAQ: an admin cannot turn shared memory off independently of agent accounts; users cannot opt out.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Switching Agent accounts off in an environment hides the **Agent account** button for agents there; the shared-memory feature cannot be disabled on its own, so turning off agent accounts is the only documented way to turn off shared memory. The two on-switches work together: a maker needs both the template activation (user or group selection) and the environment setting. Blocking an agent in the Microsoft 365 admin center uses the controls that work for any other app, and for Copilot Studio agents affects availability in Microsoft Copilot and in host products such as Outlook and Teams. At the time of writing (November 2026), Microsoft Learn documents no PowerShell, Graph or Power Platform API for the Agent accounts setting or the template activation. Microsoft Entra Agent IDs created by Copilot Studio are managed separately in the Microsoft Entra admin center.

## Open questions

- What will the Microsoft 365 Frontier for AI Teammates licence cost, and what licensing replaces it at general availability? Watch the Learn page and Message center.
- Will an admin be able to turn off shared memory, or restrict it by sensitivity or audience, independently of agent accounts?
- Is there an API or PowerShell route to turn Agent accounts on and off, or to audit which agents have accounts?
- Will the roadmap target of November CY2026 move general availability past the Frontier restrictions (early release environments, Frontier enrolment)?
- Do Conditional Access policies and Agent 365 controls apply to the agent's user account in the same way as to its Entra Agent ID?

<!-- rationale
risk: High. An agent with an account keeps one shared memory across everyone it works with, Microsoft says it can surface content to users who lack access to the source, and an admin cannot turn that memory off separately from agent accounts.
cost: Variable. Each agent account uses one Microsoft 365 Frontier for AI Teammates licence, makers need Microsoft 365 E5 with the Agent 365 add-on or Microsoft 365 E7, and usage may consume Copilot Credits.
impact: Medium. Only makers selected by an admin can create these agents, but colleagues will see the agent in Teams, email and the directory, and anyone who talks to it contributes to its shared memory.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] controls[2].api; Governance controls table / absence: The general agent-blocking control has no documented API or automation equivalent. | Found: Block a Copilot package to prevent its usage.
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Set controls[2].api to kind graph, call 'POST /beta/copilot/admin/catalog/packages/{id}/block', and docs https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block. State that this is a preview API, requires Microsoft Agent 365 licensing and delegated CopilotPackages.ReadWrite.All, and is not supported for production applications. Retain the row's general-control applicability caveat. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, blocker] Risk assessment: Autonomy & actions / absence: Microsoft documents no tenant-level control limiting agent-account actions beyond the Agent accounts switch and agent blocking. | Found: Policies with a tenant scope apply to all agents in all environments across the tenant.
To prevent agent makers from using Power Platform connectors as tools in Copilot Studio agents, configure a data policy with the connectors you want to block. | Fix: Remove the broad absence claim. Replace it with: 'Tenant-scoped Copilot Studio data policies can restrict connector tools and supported capabilities; this is not a universal per-account action allow-list.' Cite https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention and describe only its documented scope. The already-cited govern-agents-identities-overview also states that advanced connector policies and data policies govern connector calls at execution time. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] Cost and licensing; Governance guidance: Before rollout / licensing: Tenant enrolment in the Microsoft Frontier Program is required. | Found: Your tenant is enrolled in the Microsoft Frontier Program, with the Microsoft Agent 365 Terms of Service accepted | Fix: Keep the feature-page prerequisites, but also cite https://learn.microsoft.com/microsoft-agent-365/frontier and report its additional tenant prerequisite: at least one Microsoft E7 licence to access Agent 365 preview features. Distinguish that tenant requirement from the feature page's E5-plus-Agent-365 or E7 maker options. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-account
- [supported, minor] Cost and licensing / absence: The feature page does not publish the number of Frontier for AI Teammates licences provisioned on enrolment. | Found: Searched: "agent accounts" "Frontier" pricing licenses general availability pool. Read authoring-agent-account, which says 'enough' without a number; also read microsoft-agent-365/frontier, which specifies 25 active licences. | Fix: Avoid leaving the known pool size as an unresolved gap: cite https://learn.microsoft.com/microsoft-agent-365/frontier and say its enrolment instructions tell admins to confirm 25 active Microsoft 365 Frontier for AI Teammates licences at Billing > Licenses.
- [supported, minor] Cost and licensing; Open questions / absence: The agent-account feature page does not publish its general-availability licensing. | Found: Searched: "agent accounts" "Frontier" pricing licenses general availability pool. Read authoring-agent-account and microsoft-agent-365/frontier; the feature page describes preview licensing, while Frontier's FAQ separately explains Agent 365 GA per-user licensing. | Fix: Keep the feature-specific GA question, but distinguish it from published Agent 365 GA licensing. Cite https://learn.microsoft.com/microsoft-agent-365/frontier: Agent 365 at GA is licensed per user and agents managed or owned by that licensed user do not need their own Agent 365 or E7 licence. Do not equate that general rule with an announced GA design for this roadmap feature.
- [contradicted, minor] Governance guidance: Before rollout and After rollout; controls / consistency: Every control the governance checklist asks readers to check or manage appears in the controls table. | Found: confirm your tenant is enrolled in Frontier and has free Microsoft 365 Frontier for AI Teammates licences; Check the agent's Entra Agent ID and sign-in state; Monitor Copilot Credits consumption. The four table rows cover activation, Agent accounts, blocking and shared memory only. | Fix: Add rows for Frontier enrolment/licence-pool management, Entra Agent ID sign-in/risk inspection, and Copilot Credits consumption monitoring, with documented surfaces and separately researched automation sides. Alternatively remove checklist instructions for controls the table does not cover.
-->
