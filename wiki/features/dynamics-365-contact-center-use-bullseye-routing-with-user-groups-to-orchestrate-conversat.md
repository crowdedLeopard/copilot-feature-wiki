---
title: "Dynamics 365 Contact Center: bullseye routing with user groups expands the eligible pool as wait time grows"
slug: "dynamics-365-contact-center-use-bullseye-routing-with-user-groups-to-orchestrate-conversat"
roadmapId: 576606
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Contact Center"]
summary: "Contact Center administrators can assign conversations to a targeted user group first, then widen the pool level by level as wait time grows. It is a playbook template that an administrator creates and publishes; publishing uses Copilot credits."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "July CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says specific licensing requirements apply to configure and use conversation orchestration in Dynamics 365 Contact Center (see the Dynamics 365 Licensing Guide) and that publishing a playbook consumes Copilot credits. A credit rate for bullseye routing is not yet published."
audiences: ["service-owner","finops","change-adoption"]
tags: ["contact-center","conversation-orchestration","unified-routing","copilot-credits","dynamics-365"]
sources:
  - title: "Microsoft 365 Roadmap 576606"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576606"
    kind: "roadmap"
  - title: "Configure bullseye routing by using conversation orchestration playbooks"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-bullseye-routing"
    kind: "learn"
  - title: "Configure conversation orchestration by using natural language playbooks"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    kind: "learn"
  - title: "Responsible AI FAQ for conversation orchestration"
    url: "https://learn.microsoft.com/dynamics365/contact-center/implement/conversation-orchestration-rai-faq"
    kind: "learn"
  - title: "CC User Prompt (msdyn_ccuserprompt) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    kind: "learn"
  - title: "Agent Group (msdyn_agentgroup) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_agentgroup"
    kind: "learn"
  - title: "Queue User Group Membership (msdyn_queueusergroupmembership) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_queueusergroupmembership"
    kind: "learn"
videos: []
related: ["dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat","copilot-credits"]
controls:
  - governs: "Creating and publishing a bullseye routing playbook for chosen queues"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Conversation Orchestration > Prompt gallery > scenario category > Bullseye routing"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    api:
      kind: "rest"
      call: "POST /msdyn_ccuserprompts"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    note: "Set levels and wait times, then publish (System administrator or Omnichannel administrator role; publishing uses Copilot credits). The API creates the CC User Prompt record; its reference documents no publish operation."
  - governs: "User groups that form the bullseye levels"
    scope: "group"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > User management > User groups > Manage > New"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-bullseye-routing"
    api:
      kind: "rest"
      call: "POST /msdyn_agentgroups"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_agentgroup"
    note: "Select New to create a group with members and queues; queue membership comes through the user groups. The API creates the group record (msdyn_name, msdyn_description), not the complete member-and-queue setup."
  - governs: "Editing or deleting a published playbook"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Conversation Orchestration > All playbooks > playbook > Edit"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    api:
      kind: "rest"
      call: "DELETE /msdyn_ccuserprompts(<msdyn_ccuserpromptid>)"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    note: "The API deletes the CC User Prompt record. Learn's UI delete steps name the Playbook tab; deleting an active playbook stops conversation orchestration for the corresponding queue immediately."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: bullseye routing as a Contact Center playbook template, with its Copilot credit trigger and admin-centre controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected: added the documented Dataverse create and delete calls for playbooks and the create call for user groups, fixed the wait-time rule, and trimmed the risk rationale."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 76
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "63f1ba2ee80bd91219a42077451065af"
---

## What's changing

Bullseye routing with user groups is a playbook template in Dynamics 365 Contact Center conversation orchestration. Learn describes it as starting assignment with a targeted Level 0 user group, then progressively expanding the pool of eligible representatives to more user groups as wait time increases. Earlier groups stay active and take priority over later groups, and the conversation stays in the same queue.

An administrator creates user groups, associates them with queues, then creates a playbook from the **Bullseye routing** template with levels and wait times for one or more queues. Learn's example has three levels: Level 0 (Expert support group), Level 1 at 30 seconds (Regional support group) and Level 2 at 60 seconds (General support group). The roadmap item gives a similar example with three tiers. Wait time is measured cumulatively from the first attempt to assign to a human representative, and the minimum wait time is at least 30 seconds, except that Level 1 also supports 0 seconds. If a conversation is transferred to another queue, the wait time resets and evaluation restarts from Level 0 in the new queue.

The routing still honours representative presence, capacity and skills (if skill-based routing is configured). Within a user group, the queue's assignment strategy (round robin, highest capacity or least active) picks the representative, and Learn says custom assignments aren't supported. Conversation orchestration is available for voice and messaging channels only.

The roadmap record lists the item as Launched, with a preview date of July CY2026 and a target date of October CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform. It lists release phases General Availability and Preview.

## Why it matters

This gives service owners a way to keep the most qualified representatives first in line without sending the conversation to another queue, while still letting the wider pool take over when wait time grows. The fallback setting decides what happens when no level finds an eligible representative, so it is the setting that governs worst-case wait.

Microsoft's pages describe the template as something an administrator creates and publishes, so no source says existing queues change until someone does that. The costs are admin time, the Copilot credits consumed when a playbook is published, and testing, because Learn says the playbook is converted by a language model and any deviation from the intended logic may only be identified at runtime.

## Risk assessment

**Data exposure**

- No new data source is described: Learn's page for this template describes assignment among representatives and queues that already exist. Diagnostics are available through a custom query, so decide who can run it.

**Security & identity**

- Queue membership can come through user groups. Learn says that if a user group is associated with the queue, the system considers all users in that group as part of the queue, so a user added to a group can receive that queue's conversations.
- Conversation orchestration needs the System administrator or Omnichannel administrator role to configure.

**Autonomy & actions**

- Learn says the system converts natural language playbooks into a structured runtime format with a language model, and that the converted output might not fully capture the intended logic. Test each published playbook against real queue behaviour.
- Fallback decides whether a conversation may go to any eligible queue user or only to users in the defined user groups. A restrictive setting can leave conversations waiting if the defined groups have no available representative.

**Change & support**

- Only one active playbook per scenario and queue is allowed, so a second bullseye playbook for the same queue cannot be published until the first is edited or deactivated.
- Deleting an active playbook stops conversation orchestration for the corresponding queue immediately.
- Multiple queues in one playbook must share common user groups; queues that do not share groups need separate playbooks.

## Cost and licensing

Learn's prerequisites for conversation orchestration in Dynamics 365 Contact Center say specific licensing requirements apply and point to the Dynamics 365 Licensing Guide; the licence names are not reproduced on that page.

Conversation orchestration consumes Copilot credits only when you publish a playbook. After publishing, the playbook can process any number of customer conversations without consuming extra Copilot credits, and saving a draft or enabling conversation orchestration does not consume credits. The prerequisites also require consumption-based billing, with an Azure subscription if you use the Power Platform pay-as-you-go plan. Bullseye routing is one of the playbook templates in that article.

A credit rate specific to publishing a bullseye routing playbook is not yet published. Indirect costs are the admin time to build user groups and playbooks, and testing. See [Copilot Credits](/concepts/copilot-credits/) for the meter.

## Scope

Roadmap record: Dynamics 365 Contact Center, Worldwide (Standard Multi-Tenant), Web platform, status Launched.

Learn lists these prerequisites for conversation orchestration: the System administrator or Omnichannel administrator role, consumption-based billing, unified routing enabled for the environment, at least one queue and workstream configured for voice or messaging channels, and a voice or messaging channel. For bullseye routing itself, Learn requires conversation orchestration to be available and at least one user and queue associated with a user group. Conversation orchestration is available for voice and messaging channels only.

## Governance guidance

### Before rollout

- Confirm the licensing and consumption-based billing prerequisites with your Dynamics 365 licensing contact, using the Dynamics 365 Licensing Guide that Learn links.
- Create user groups in Copilot Service admin center and add the queues each group belongs to, so that Level 0 is the best-fit group and later levels are broader.
- Decide the fallback behaviour: any eligible queue user, or only users in the defined user groups.
- Check that queues you plan to share in one playbook share common user groups.

### At rollout

- Create the playbook from the **Bullseye routing** template, choose the channel and queues, and set level wait times; the minimum wait time is 30 seconds except that Level 1 also supports 0 seconds, and a later level can use the same wait time as the preceding level or increase it by at least 10 seconds.
- Save as a draft, review the validation warnings, then publish; budget for the Copilot credits consumed at publish.
- Check that no other active bullseye routing playbook exists for the same queue.

### After rollout

- Test the published playbook against real queue behaviour, because the language-model conversion can deviate from the intended logic.
- Review diagnostics with the custom query Learn references.
- Edit from the All playbooks tab when the group structure changes; Learn documents deletion from the Playbook tab using the playbook actions menu > Delete, and deleting an active playbook stops orchestration for the queue immediately.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating and publishing a bullseye routing playbook for chosen queues</strong><br><small>Environment</small><br><small class="controls__note">Set levels and wait times, then publish (System administrator or Omnichannel administrator role; publishing uses Copilot credits). The API creates the CC User Prompt record; its reference documents no publish operation.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Conversation Orchestration › Prompt gallery › scenario category › Bullseye routing <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /msdyn_ccuserprompts</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>User groups that form the bullseye levels</strong><br><small>Group</small><br><small class="controls__note">Select New to create a group with members and queues; queue membership comes through the user groups. The API creates the group record (msdyn_name, msdyn_description), not the complete member-and-queue setup.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › User management › User groups › Manage › New <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/configure-bullseye-routing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /msdyn_agentgroups</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_agentgroup" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Editing or deleting a published playbook</strong><br><small>Environment</small><br><small class="controls__note">The API deletes the CC User Prompt record. Learn's UI delete steps name the Playbook tab; deleting an active playbook stops conversation orchestration for the corresponding queue immediately.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Conversation Orchestration › All playbooks › playbook › Edit <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>DELETE /msdyn_ccuserprompts(&lt;msdyn_ccuserpromptid&gt;)</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents playbook creation, editing and deletion in Copilot Service admin center, and user group creation there. Microsoft also documents `POST /msdyn_ccuserprompts` to create CC User Prompt records, and the conversation orchestration article names CC User Prompt as the table to add to a solution to migrate playbooks. The table reference does not establish a publishing operation at the time of writing (November 2026).

Microsoft documents `POST /msdyn_agentgroups` to create Agent Group records, which the Queue User Group Membership reference identifies as the target of its User Group lookup. That call creates the group record; it is not the complete member-and-queue setup.

User groups feed the playbook: the playbook only lists user groups common to the queues you select, so create or adjust groups before the playbook. The Responsible AI FAQ for conversation orchestration says administrators can delete saved or published playbooks and disable the feature toggle to turn off the feature; Microsoft Learn gives no path to that toggle at the time of writing (November 2026).

## Open questions

- What credit rate applies to publishing a bullseye routing playbook, and where will it appear? Watch the conversation orchestration article and the Dynamics 365 Licensing Guide.
- Which Dynamics 365 Contact Center licences cover conversation orchestration? Learn points to the Licensing Guide without naming them.
- Which API operation publishes a playbook, and which operations complete user group member and queue setup beyond creating the group record? Watch Microsoft Learn's Dynamics 365 developer reference.
- Where is the conversation orchestration feature toggle that the Responsible AI FAQ mentions? Watch the conversation orchestration article.

<!-- rationale
risk: Low. Bullseye routing is a playbook template that an administrator must create and publish per queue; it changes who receives conversations in those queues.
cost: Variable. Learn says conversation orchestration consumes Copilot credits when a playbook is published, requires consumption-based billing and names Dynamics 365 licensing requirements; no credit rate for this scenario is published.
impact: Low. Administrators configure it for chosen queues; representatives in the user groups and customers waiting in those queues notice the changed assignment order.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The creation route is Copilot Service admin center > Customer support > Conversation Orchestration > Prompt gallery > scenario category > Bullseye routing. | Found: On the Conversation Orchestration page, select Prompt gallery ... In the drop-down field, select a scenario category, and then select a playbook template ... Review your configuration for any validation warnings, and then select Publish to activate the playbook. | Fix: The printed route correctly reaches the playbook editor but stops before the row's publishing control. Append ' > Publish' to controls[0].ui.path and the corresponding rendered path; retain the note about setting levels and wait times first. | Source: https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The governance checklist directs readers to review diagnostics, but the controls table has no diagnostics entry. | Found: Review diagnostics with the custom query Learn references. / Controls table: creating and publishing a playbook; user groups; editing or deleting a playbook. | Fix: The After rollout diagnostics-review step has no corresponding controls row. Remove that checklist bullet, retaining the supported diagnostics statement in Risk assessment.
-->
