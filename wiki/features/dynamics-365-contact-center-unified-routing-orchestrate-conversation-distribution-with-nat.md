---
title: "Dynamics 365 Contact Center: conversation orchestration with natural language playbooks"
slug: "dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat"
roadmapId: 577788
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Contact Center"]
summary: "Contact Center administrators can write natural language playbooks that reprioritise, overflow and assign queued conversations. Publishing a playbook uses Copilot credits. Nothing is documented as changing until an admin configures one."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "The Learn page says specific licensing requirements apply and points to the Dynamics 365 Licensing Guide. Copilot credits are consumed when a playbook is published, under a consumption-based billing set-up. The credit rate is not stated on those pages."
audiences: ["service-owner","finops","change-adoption"]
tags: ["dynamics-365","contact-center","conversation-orchestration","unified-routing","copilot-credits","pay-as-you-go","ai","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 577788"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577788"
    kind: "roadmap"
  - title: "Configure conversation orchestration by using natural language playbooks"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    kind: "learn"
  - title: "Manage consumption-based billing and capacity"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go"
    kind: "learn"
  - title: "CC User Prompt (msdyn_ccuserprompt) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    kind: "learn"
  - title: "Manage overflow of work items in queues"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow"
    kind: "learn"
  - title: "Responsible AI FAQ for conversation orchestration"
    url: "https://learn.microsoft.com/dynamics365/contact-center/implement/conversation-orchestration-rai-faq"
    kind: "learn"
  - title: "MC1536059: Microsoft 365 Copilot: Conversation orchestration expands routing and overflow capabilities"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1536059"
    kind: "message-center"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Which queues and channels a playbook applies to, and whether it is published"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Conversation Orchestration > Prompt gallery > scenario category > playbook template > Queues > Edit"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    api: null
    note: "Needs System administrator or Omnichannel administrator. The Learn page names the CC User Prompt table for solution migration only; it does not describe the Web API as a way to publish."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: conversation orchestration playbooks in Dynamics 365 Contact Center, with the Copilot credit charge on publish and the Copilot Service admin center path."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: removed the Dataverse GET as the control's automation, added the scenario-category step to the path, the feature toggle named in the Responsible AI FAQ and the planned credit exemption."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 89 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 81
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "efc172284f668edb22a718dfb5b902a5"
---

## What's changing

Conversation orchestration lets Dynamics 365 Contact Center administrators write natural language playbooks that act on conversations while they wait. A playbook is a trigger event plus conditions and actions, built from guided templates. The Learn page documents four scenarios: dynamic prioritisation, overflow handling, assignment to a preferred or previously engaged representative, and bullseye routing, which expands the pool of eligible representatives in stages through user groups.

When an administrator publishes a playbook, the system uses a language model to convert it into a structured runtime format. Learn says the converted output might not fully capture the intended logic and that deviations can be identified only at runtime. Actions the page lists include changing priority, transferring to another queue or an external number, offering a callback or voicemail, ending the conversation, and setting a representative's presence. The feature is available for voice and messaging channels only.

The roadmap item is Launched, with a target of October CY2026 and a preview date of April CY2026. It lists General Availability and Preview as release phases and Worldwide (Standard Multi-Tenant) as the cloud. Microsoft's notice MC1536059 (published 3 November 2026) gives the General Availability rollout as beginning in late October 2026 and expected to complete by late November 2026, and sets no act-by date. It says existing Conversation Orchestration customers can keep their configurations without further action, and new customers can enable it and configure playbooks.

## Why it matters

This moves routing decisions that were fixed rules into text that administrators write and a model interprets. The decision for a service owner is who may publish playbooks, how each one is tested before it goes live, and who watches the result. Learn tells administrators to test and monitor runtime behaviour and to revise a playbook that does not work as intended.

Microsoft's notice describes enabling the feature as a step for new customers and says existing customers need no action, so the briefing treats it as opt-in. Nothing in the notice or on the Learn page says routing changes for queues without an active playbook. The cost to plan for is Copilot credits at publication, not per conversation.

## Risk assessment

**Data exposure**

- Conditions use context variables. Learn names CustomerTier, Is VIP Customer, Preferred Language, Customer Region and Account Type as examples, so customer attributes drive routing decisions and the playbook text. The configuration page does not say what data the language model receives when it converts a playbook.

**Security & identity**

- Configuration needs the System administrator or Omnichannel administrator role. Learn also says the feature is not intended for decisions that affect an employee's employment, such as compensation, rewards or seniority, and that customers are responsible for lawful use, including notifying end users and obtaining consent where the law requires it. Check that representative-related playbooks, such as setting presence or assigning a preferred expert, are not repurposed for performance management.

**Autonomy & actions**

- A published playbook acts without a person approving each run: it can end a conversation, transfer to an external number, offer voicemail or a callback, or keep a conversation unassigned. Learn says that deleting an active playbook stops conversation orchestration for the corresponding queue immediately.
- Because a model converts the playbook, the runtime behaviour may differ from the text. Learn says to test and monitor it.

**Change & support**

- Learn says only one active playbook can exist for the same scenario and queue, and dynamic prioritisation does not apply to queues with custom prioritisation rules. Expect a conflict error at publish time and a support question when priority does not change.
- Learn documents validation warnings (required fields, ranges, duplicate and conflicting conditions) and diagnostics for each conversation processed by an active playbook, viewed with a custom query.

## Cost and licensing

**Licence.** The Learn page's prerequisites say that specific licensing requirements apply to configure and use conversation orchestration in Dynamics 365 Contact Center and point to the Dynamics 365 Licensing Guide. The licence itself is not named on the page.

**Meter.** The Learn page says conversation orchestration consumes Copilot credits only when a playbook is published. After that, the playbook can process any number of customer conversations without consuming extra Copilot credits. Saving a draft or enabling conversation orchestration does not consume credits. Microsoft's notice MC1536059 says the same. Re-publishing an active playbook after an edit (**Save & publish**) is a publish, so expect credits to be consumed again. Learn does not state this, so confirm it.

**Planned exemption.** The overflow documentation describes a planned credit exemption: upgrading a single queue or multiple queues from legacy in-queue overflow does not use Copilot credits, and upgraded and newly created playbooks do not use credits when they have only one branch, that branch contains only the wait time in queue exceeds condition, and they use no context variables. The same page says playbooks with other conditions, multiple branches or any context variables use credits, and that publishing fails if the required credits are not available. See [Manage overflow of work items in queues](https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow#upgrade-legacy-in-queue-overflow-to-a-conversation-orchestration-playbook).

**Billing set-up.** The prerequisites require consumption-based billing. If you use the Power Platform pay-as-you-go plan, you need an Azure subscription. For pay-as-you-go, Dynamics 365 documents Microsoft Cost Management in the Azure portal for viewing usage and adjusting budgets. See [Copilot Credits](/concepts/copilot-credits/) for the shared meter.

**Not yet published.** The number of Copilot credits per publish is not stated on the pages read at the time of writing (November 2026).

## Scope

Roadmap record: Dynamics 365 Contact Center, Worldwide (Standard Multi-Tenant), web, Launched. The record lists no US Government cloud.

Learn lists these prerequisites: the licensing requirements above, the System administrator or Omnichannel administrator role, consumption-based billing, unified routing enabled for the environment, at least one queue and one workstream for voice or messaging, and a configured voice or messaging channel. A playbook applies to all queues, a list of queues or all queues except those excluded, for the voice or messaging channel selected.

Per MC1536059, General Availability began in late October 2026 and is expected to complete by late November 2026. Existing customers keep their configurations.

## Governance guidance

### Before rollout

- Confirm the licensing requirements in the Dynamics 365 Licensing Guide for your Contact Center tenancy before anyone publishes a playbook.
- Set up consumption-based billing and agree who owns the Copilot credit spend, using the [Dynamics 365 consumption-based billing documentation](https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go).
- Limit the System administrator and Omnichannel administrator roles to people who will own routing logic.
- Decide which of the four scenarios you want first, and list queues that have custom prioritisation rules, because dynamic prioritisation does not apply to them.

### At rollout

- Create each playbook from a template in Copilot Service admin center, save it as a draft and resolve every validation warning before selecting Publish.
- Apply a playbook to a named list of queues first, not all queues, so a faulty conversion affects fewer customers.
- Test the published playbook with test conversations and record the outcome before widening its queue scope.

### After rollout

- Monitor playbook behaviour with the diagnostics custom query that Learn documents, and revise playbooks that do not behave as written.
- Review active playbooks for conflicts with other queue rules, and re-check them when queues, context variables or user groups change.
- Track Copilot credit usage after each publish so budget owners see the cost of editing active playbooks.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which queues and channels a playbook applies to, and whether it is published</strong><br><small>Environment</small><br><small class="controls__note">Needs System administrator or Omnichannel administrator. The Learn page names the CC User Prompt table for solution migration only; it does not describe the Web API as a way to publish.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Conversation Orchestration › Prompt gallery › scenario category › playbook template › Queues › Edit <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The configuration page does not give a feature-toggle path. The [Responsible AI FAQ](https://learn.microsoft.com/dynamics365/contact-center/implement/conversation-orchestration-rai-faq) says administrators can disable the feature toggle to turn off conversation orchestration. Queue scope, the active or draft status, and deletion are managed per playbook. Learn says the Save button is disabled for active playbooks, so changes go through Save & publish, and cancelling reverts to the last published version.

The Learn page tells administrators to add the CC User Prompt table to a solution to move playbooks between environments. The CC User Prompt table reference lists a Web API request that retrieves records from the table (GET /msdyn_ccuserprompts); that request lists records and is not documented as a way to set queue scope, publish or enable a playbook. Create the queues and context variables a playbook references in the destination environment before migrating it.

Credit spend is governed outside this page: the Dynamics 365 billing page documents Microsoft Cost Management in the Azure portal for pay-as-you-go budgets.

## Open questions

- Which Dynamics 365 Contact Center licence is required, and does it include any credits? Watch the Dynamics 365 Licensing Guide that the Learn page links.
- How many Copilot credits does one publish consume, and does Save & publish on an active playbook consume them again? Watch the Learn page and the Copilot Credits documentation.
- What data does the language model receive when it converts a playbook, and where is it processed? Watch the Conversation orchestration Responsible AI FAQ linked from the Learn page.
- Where is the feature toggle that the Responsible AI FAQ says administrators can disable, and what does it cover (tenant, environment or queue)? Is there a documented automation for publishing or deactivating playbooks? Watch the Learn page and the Dataverse table reference.

<!-- rationale
risk: Medium. A language model converts each playbook into runtime logic that can transfer or end conversations, and Microsoft says deviations from the intended logic may show only at runtime.
cost: Variable. Publishing a playbook consumes Copilot credits (the Dynamics 365 consumption meter); drafts and enabling the feature do not. The rate and the Contact Center licence terms are not stated on the feature page.
impact: Medium. Contact centre administrators configure it, but customers in queues and the representatives who receive their conversations feel the routing changes.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Scope; Governance controls / admin-path: Copilot Service admin center > Customer support > Conversation Orchestration > Prompt gallery > scenario category > playbook template > Queues > Edit reaches the playbook queue and channel configuration pane. | Found: go to Customer support > Conversation Orchestration. On the Conversation Orchestration page, select Prompt gallery. In the drop-down field, select a scenario category, and then select a playbook template. Select Queues > Edit to open the queues pane. | Fix: Keep the supported path, but complete its note: 'In Queues > Edit, select Channel: Voice or Messaging, then Apply to: All queues, List of queues, or All queues except. Return to the editor, select Save to save a draft, and select Publish to activate the playbook.' The printed route reaches the correct pane but does not itself reach publication. | Source: https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration
- [contradicted, minor] Governance guidance; Governance controls table / consistency: All controls the governance checklist asks readers to set or review are represented in the controls table. | Found: Checklist: 'Set up consumption-based billing'; 'Monitor playbook behaviour with the diagnostics custom query'. Table: 'Which queues and channels a playbook applies to, and whether it is published'. | Fix: The billing set-up, administrator-role restriction, custom-prioritisation inventory and diagnostics-monitoring checklist steps lack corresponding control rows. Treat this as a table-coverage gap; do not add rows or unverified paths and automation.
-->
