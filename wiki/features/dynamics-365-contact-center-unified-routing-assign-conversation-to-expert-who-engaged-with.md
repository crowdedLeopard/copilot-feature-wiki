---
title: "Dynamics 365 Contact Center: route returning customers to a previous or preferred expert"
slug: "dynamics-365-contact-center-unified-routing-assign-conversation-to-expert-who-engaged-with"
roadmapId: 576746
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Contact Center"]
summary: "Unified routing playbooks can send a returning customer to the expert who handled them before, or to a mapped preferred expert, with fallback to the queue. Nothing is active until an admin publishes a playbook; publishing uses Copilot credits."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says specific licensing requirements apply to configure and use conversation orchestration in Dynamics 365 Contact Center (see the Dynamics 365 Licensing Guide), and consumption-based billing must be set up. No licence name is given on the Learn pages read."
audiences: ["service-owner","finops","change-adoption"]
tags: ["contact-center","unified-routing","conversation-orchestration","dynamics-365","copilot-credits","usage-based-billing"]
sources:
  - title: "Microsoft 365 Roadmap 576746"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576746"
    kind: "roadmap"
  - title: "Configure routing to preferred or previously engaged representatives"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-preferred-agent"
    kind: "learn"
  - title: "Configure conversation orchestration by using natural language playbooks"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    kind: "learn"
  - title: "Responsible AI FAQ for conversation orchestration"
    url: "https://learn.microsoft.com/dynamics365/contact-center/implement/conversation-orchestration-rai-faq"
    kind: "learn"
  - title: "Manage consumption-based billing and capacity"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go"
    kind: "learn"
  - title: "System requirements for Dynamics 365 Contact Center"
    url: "https://learn.microsoft.com/dynamics365/contact-center/implement/system-requirements-contact-center"
    kind: "learn"
  - title: "CC User Prompt (msdyn_ccuserprompt) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    kind: "docs"
  - title: "Preferred Agent (msdyn_preferredagent) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_preferredagent"
    kind: "docs"
videos: []
related: ["dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat","copilot-credits"]
controls:
  - governs: "Whether a previous or preferred expert playbook is published for a queue"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Conversation orchestration > Prompt gallery > Assign to a previous or preferred expert scenario > Assign to a previous or preferred expert > Publish"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    api: null
    note: "System administrator or Omnichannel administrator. Save keeps a draft; Publish activates. The table reference documents record operations, but not an operation that publishes a playbook."
  - governs: "Whether returning asynchronous chats keep the same expert, with presence and active conversation limit checks"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Conversation orchestration > Prompt gallery > Assign to a previous or preferred expert scenario > Keep the same expert for async chats > Publish"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-preferred-agent"
    api: null
    note: "Applies to messaging queues where representative affinity is enabled. Allowed presences and fallback are set in the playbook. The playbook selects the active conversation limit check; the limit itself is a representative-level attribute."
  - governs: "Which preferred representatives are mapped to a contact"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Routing > Preferred representative routing > Manage > Preferred representatives matrix > Add a contact > contact > Add user"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-preferred-agent"
    api:
      kind: "rest"
      call: "POST /msdyn_preferredagents"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_preferredagent"
    note: "Omnichannel Administrator (Contact Center) or CSR Manager (Customer Service). Enable preferred representative routing first. Body: msdyn_recordid is the contact, msdyn_systemuserid the representative, msdyn_preferencerating the rating."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-20"
    note: "New briefing: previous and preferred expert assignment in Contact Center unified routing, its playbook controls and the Copilot credit charge on publish."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected: the playbook publish row no longer names an API call, the CC User Prompt columns are stated as the reference lists them, and the active conversation limit is described as a representative-level attribute."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 85 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 90 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 90
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "379d113f3be7c574391bb62a4cccf0e0"
---

## What's changing

Dynamics 365 Contact Center unified routing can now assign a conversation to an expert who engaged with the customer before, or to a preferred expert mapped to the contact. Administrators write the assignment logic as natural-language playbooks in conversation orchestration, using the **Assign to a previous or preferred expert** playbook, and set the precedence order and the look-back period. Microsoft Learn says an admin can change the priority between preferred and previous experts; by default the order is preferred expert, then previous expert, then fallback.

Before assigning, the system checks that the expert is in an allowed presence status and is a member of the relevant queue, and that the previous interaction falls inside the recency window. Learn gives 7, 10 or 30 days as examples and says the system supports a cut-off of up to 30 days. If no preferred or previous expert qualifies, the system uses the queue's configured assignment method to pick the next best available expert. To use the preferred-expert option, preferred representatives must already be configured.

For asynchronous chats, a second playbook, **Keep the same expert for async chats**, reconnects a returning customer to the previous representative when the representative's presence is allowed and their total active conversations are below their active conversation limit. If not, an administrator-chosen fallback either assigns the chat to the next best representative or keeps it unassigned in the queue. The playbook applies to queues where representative affinity is enabled.

The roadmap record shows status Launched, with a target of October CY2026 and a preview date of June CY2026, for Worldwide (Standard Multi-Tenant) on the web. Conversation orchestration is available for voice and messaging channels only.

## Why it matters

This is a routing change that only takes effect when an administrator publishes a playbook, so the decision for a service owner is whether continuity with a named expert is worth the trade-offs for queue balance and spend. Microsoft's stated aim is fewer repeat explanations and faster resolution; the cost side is that preferred and previous experts can attract more work than the queue's normal method would give them.

If nobody acts, the Learn page describes a playbook in Draft status as saved but not active, so existing routing carries on. Playbooks are converted by a language model into a runtime format, so a published playbook needs testing against real queues before it is trusted for VIP customers.

## Risk assessment

**Data exposure**
- Previous-expert assignment retrieves the previous experts from the customer's interaction history, so who handled a customer before now drives routing. Learn does not describe a separate retention setting for that history in these pages.
- Preferred-expert assignment relies on contacts mapped to representatives. Learn says representatives can be mapped to contacts only, with up to three per contact, so incomplete contact identification means no preferred match.

**Security & identity**
- Configuration needs the System administrator or Omnichannel administrator role for conversation orchestration, and Omnichannel Administrator (Contact Center) or CSR Manager (Customer Service) for preferred representatives. A custom role also needs access to the msdyn_preferredagent and msdyn_preferredagentcustomeridentity tables.

**Autonomy & actions**
- A published playbook assigns conversations without a supervisor approving each one. Learn warns that the language-model conversion of a natural-language playbook might not fully capture the intended logic and that deviations show only at runtime, so test and monitor after publishing.
- A returning async chat is reconnected to the same representative when the total is below the active conversation limit, even when that limit exceeds the configured capacity profile. Set limits with that in mind.
- Learn states the feature is not intended for decisions that affect an employee's employment, compensation or similar rights; do not reuse diagnostics for that.

**Change & support**
- You cannot publish two active playbooks for the same scenario and queue; the publish fails with a conflict message. Deleting an active playbook stops conversation orchestration for the corresponding queue immediately.
- Troubleshooting starts with queue membership, presence and the recency window of the previous representative, and diagnostics are read with a custom query.
- The Responsible AI FAQ states the system currently supports English only.

## Cost and licensing

Learn's prerequisites for conversation orchestration say that specific licensing requirements apply to configure and use it in Dynamics 365 Contact Center, and point to the Dynamics 365 Licensing Guide. The Learn pages read for this briefing name no licence; the guide is the place to confirm which one your users hold.

The meter is Copilot credits. Learn says conversation orchestration consumes Copilot credits only when a playbook is published, and that a published playbook can then process any number of customer conversations without consuming extra Copilot credits. Saving a draft or enabling conversation orchestration does not consume credits. Consumption-based billing must be set up first; Dynamics 365 supports prepaid capacity and pay-as-you-go, and pay-as-you-go needs an Azure subscription. The credit rate per published playbook for this scenario is not yet published.

Indirect costs are admin time to write, test and re-publish playbooks and to map preferred representatives to contacts. Learn describes editing an active playbook with **Save & publish**; whether that second publish consumes credits again is not stated.

## Scope

Applies to queues for voice and messaging channels where an administrator publishes the playbook; the playbook can apply to all queues, a list of queues, or all queues except those excluded. The Learn page applies to Dynamics 365 Contact Center (embedded and standalone) and Dynamics 365 Customer Service.

Prerequisites on Learn: the System administrator or Omnichannel administrator role, consumption-based billing, unified routing enabled for the environment, at least one queue and workstream configured for voice or messaging, and a configured voice or messaging channel. Preferred-expert assignment also needs preferred representatives configured. The async playbook needs a messaging queue and workstream with representative affinity enabled.

The roadmap lists Worldwide (Standard Multi-Tenant) only and the web platform. The record does not list US Government clouds; that is a record fact, not a statement that it is unavailable there.

## Governance guidance

### Before rollout
- Confirm the licensing requirements for conversation orchestration in the Dynamics 365 Licensing Guide before anyone publishes.
- Map preferred representatives to contacts in Copilot Service admin center if you plan to use the preferred-expert option, and check that each mapped representative belongs to the queue that receives the conversation.
- Decide the order of preferred, previous and fallback per customer segment, and the recency window (Learn supports up to 30 days).

### At rollout
- Create the playbook from the Prompt gallery, select the queues, review validation warnings, save as a draft and test before choosing Publish.
- Start with one queue; remember that a second active playbook for the same scenario and queue blocks publishing.
- Choose the async fallback (next best expert, or keep the chat unassigned) deliberately for each queue.

### After rollout
- Watch for deviations between the written playbook and runtime behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a previous or preferred expert playbook is published for a queue</strong><br><small class="controls__note">System administrator or Omnichannel administrator. Save keeps a draft; Publish activates. The table reference documents record operations, but not an operation that publishes a playbook.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Conversation orchestration › Prompt gallery › Assign to a previous or preferred expert scenario › Assign to a previous or preferred expert › Publish <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether returning asynchronous chats keep the same expert, with presence and active conversation limit checks</strong><br><small class="controls__note">Applies to messaging queues where representative affinity is enabled. Allowed presences and fallback are set in the playbook. The playbook selects the active conversation limit check; the limit itself is a representative-level attribute.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Conversation orchestration › Prompt gallery › Assign to a previous or preferred expert scenario › Keep the same expert for async chats › Publish <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-preferred-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which preferred representatives are mapped to a contact</strong><br><small class="controls__note">Omnichannel Administrator (Contact Center) or CSR Manager (Customer Service). Enable preferred representative routing first. Body: msdyn_recordid is the contact, msdyn_systemuserid the representative, msdyn_preferencerating the rating.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Routing › Preferred representative routing › Manage › Preferred representatives matrix › Add a contact › contact › Add user <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-preferred-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /msdyn_preferredagents</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_preferredagent" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The playbook rows are the decisive controls: nothing routes through a playbook until it is published, and deleting an active one stops orchestration for that queue. The playbook editor sets the precedence order, recency window, allowed presences, active conversation limit check and fallback. The Learn page names no separate tenant-wide switch for this scenario, and none is listed in the table.

Roles: System administrator or Omnichannel administrator for conversation orchestration; Omnichannel Administrator (Contact Center) or CSR Manager (Customer Service) for preferred representatives. At the time of writing (November 2026), the CC User Prompt table reference lists msdyn_prompt (Prompt), msdyn_promptstage (including Published = 3) and msdyn_promptstatus (Active or Inactive), but does not document a playbook publishing procedure. The table reference documents record operations, but not an operation that publishes a playbook. Learn describes moving playbooks between environments through solution export and import.

## Open questions

- What Copilot credit rate applies when a playbook for this scenario is published, and does each re-publish of an edited active playbook count again? Watch the conversation orchestration page and the Copilot Studio billing rates page.
- Which Dynamics 365 licence does a representative or administrator need for conversation orchestration, since the Learn pages point only to the Dynamics 365 Licensing Guide?
- How long is the interaction history used to find previous experts retained, and which audit or retention setting governs it?
- Will Microsoft add the planned human review step for converted playbooks before publication, as the Responsible AI FAQ says it will introduce?

<!-- rationale
risk: Medium. A published playbook changes which representative receives a conversation, and a returning asynchronous chat can be reassigned to the same representative even when the active conversation limit exceeds the capacity profile.
cost: Variable. Publishing a playbook consumes Copilot credits (the rate for this scenario is not yet published), and Dynamics 365 Contact Center licensing requirements apply on top.
impact: Medium. Contact centre administrators, supervisors and representatives in queues covered by a playbook notice first, and returning customers are connected to a different person than before.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / absence: The configuration article names no separate tenant-wide switch for this scenario. | Found: Searched: '"conversation orchestration" "enable" "toggle"'; read the configuration article and RAI FAQ. The configuration article gives no tenant-wide switch, but the FAQ says administrators can 'disable the feature toggle to turn off the feature'. | Fix: Replace the switch sentence with: 'The configuration article gives no separate tenant-wide switch path for this scenario. The Responsible AI FAQ says administrators can disable a feature toggle to turn off conversation orchestration, but gives neither its navigation path nor its scope.'
-->
