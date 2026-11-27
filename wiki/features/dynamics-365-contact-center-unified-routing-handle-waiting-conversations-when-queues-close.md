---
title: "Dynamics 365 Contact Center: handle waiting conversations when a queue closes or has no representatives signed in"
slug: "dynamics-365-contact-center-unified-routing-handle-waiting-conversations-when-queues-close"
roadmapId: 576759
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Contact Center"]
summary: "Playbooks in conversation orchestration can move waiting conversations to voicemail, callback or another queue when a queue goes out of operating hours or all its representatives sign out. Optional; publishing uses Copilot credits."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says specific licensing requirements apply to conversation orchestration in Dynamics 365 Contact Center and points to the Dynamics 365 Licensing Guide; it also requires consumption-based billing. No rate for this playbook is published."
audiences: ["service-owner","power-platform-admin","finops"]
tags: ["contact-center","unified-routing","conversation-orchestration","dynamics-365","copilot-credits","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap 576759"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576759"
    kind: "roadmap"
  - title: "Configure conversation orchestration by using natural language playbooks"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    kind: "learn"
  - title: "Manage overflow of work items in queues"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow"
    kind: "learn"
  - title: "CC User Prompt (msdyn_ccuserprompt) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    kind: "learn"
  - title: "Configure voicemail to manage inbound calls in Dynamics 365 Contact Center"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/voice-channel-voicemail"
    kind: "learn"
  - title: "Configure customer-first direct callback in Dynamics 365 Contact Center"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-customer-first-callback"
    kind: "learn"
videos: []
related: ["dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat","dynamics-365-contact-center-administrator-experiences-use-enhanced-customer-first-direct-c","copilot-credits"]
controls:
  - governs: "Overflow actions for a queue that is closed or has no representatives signed in, and the queues covered"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Conversation Orchestration > Prompt gallery > Overflow handling > Manage overflow of incoming conversations using advanced conditions"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    api:
      kind: "rest"
      call: "PATCH /msdyn_ccuserprompts(msdyn_ccuserpromptid)"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    note: "Needs System administrator or Omnichannel administrator. Dataverse Web API call on the CC User Prompt table, which Learn names for exporting playbooks; the table page does not say it publishes a playbook."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-20"
    note: "New briefing: playbook overflow when a queue goes out of operating hours or all representatives sign out, with the Learn setup path, Copilot credit consumption at publish and the open licence and rate questions."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the comparison with the queue's overflow rules to the out-of-operating-hours condition Learn describes, and narrowed the voicemail and callback data statements to what Learn says."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 74 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 76 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 74
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "9f420bb37f2931b3e6339431b1d363ee"
---

## What's changing

Dynamics 365 Contact Center can now run an administrator-defined fallback action for conversations that are already waiting when a queue goes out of operating hours, or when every representative assigned to the queue is signed out. An administrator sets this up as a natural language playbook in conversation orchestration, instead of relying only on the queue's own overflow rules.

Learn describes two conditions in the playbook: **Queue is out of operating hours**, which also covers a queue that transitions out of operating hours while conversations are waiting, and **All representatives are signed out**, which also covers that state arising while conversations are already waiting. Learn adds that the signed-out condition triggers when representatives sign out, close their browser session, or there's a network outage. The action can be transferring to another queue or to an external number, offering callback or voicemail, keeping the conversation unassigned, or ending the conversation. Learn marks callback and voicemail as voice channel only, and says conversation orchestration is available for voice and messaging channels only.

Learn says the queue's out-of-operating-hours overflow condition is evaluated once before queue entry, whereas the playbook condition is evaluated continuously, including after transfers. For representative availability, Learn says the playbook triggers immediately instead of waiting for time or volume-based conditions. The roadmap item shows the status as Launched, with a target of October CY2026 and a preview from June CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform.

## Why it matters

Without a playbook, Learn says a work item that is not handled by overflow handling is added to the queue and the customer waits to be connected to a representative. This feature gives a service owner a way to decide, ahead of time, what a customer gets at closing time or during an unplanned staffing gap, such as a mass sign-out, rather than leaving conversations waiting.

If nobody acts, the roadmap description and Learn show no change to existing queues: a playbook has no effect until it is published. The decision for a service owner is which queues and channels to cover, which fallback each should use, and whether the credit cost of publishing is acceptable.

## Risk assessment

**Data exposure**
- Transfer to an external number hands a live customer to a number outside the organisation; check each number before publishing, because the playbook runs the transfer without a representative.
- Voicemail captures customer messages; callback can collect an alternative phone number when the customer chooses to provide one. Learn documents these actions as voice channel only.

**Security & identity**
- Learn lists the System administrator or Omnichannel administrator role as a prerequisite to configure conversation orchestration, so anyone holding it can change where waiting customers go. Keep those assignments to the people who own routing.

**Autonomy & actions**
- The playbook ends conversations, transfers them or offers voicemail on its own once a condition is met. Learn says a language model converts the natural language playbook into a structured runtime format, the result might not fully capture the intended logic, and deviations show only at runtime.
- Learn says the all-representatives-signed-out condition triggers when representatives close their browser session or there's a network outage, so a brief outage can send waiting customers to the fallback.

**Change & support**
- **Save & publish** on an active playbook applies the change to live routing at once, and deleting an active playbook stops conversation orchestration for the corresponding queue immediately.
- Learn says you can't have multiple active playbooks for the same scenario and the same queue, so a new overflow playbook that overlaps an existing one will not publish.
- Learn points to a custom query for diagnostics, so support staff need access to that tooling to explain why a conversation went to a fallback.

## Cost and licensing

Learn's prerequisites for conversation orchestration say specific licensing requirements apply to configure and use it in Dynamics 365 Contact Center and refer to the Dynamics 365 Licensing Guide. The page does not name the licence, so confirm it against your agreement.

The meter is Copilot credits. Learn says conversation orchestration consumes Copilot credits only when you publish a playbook; after that the playbook can process any number of conversations without consuming extra credits, and saving a draft or enabling conversation orchestration does not consume credits. The prerequisites require consumption-based billing, and say the Power Platform pay-as-you-go plan needs an Azure subscription.

Learn's credit exemption is worded for upgraded and newly created playbooks with one branch that contains only the wait time in queue exceeds condition and no context variables. It also says playbooks use credits if they include other conditions, multiple branches or any context variables. A playbook using the out-of-operating-hours or signed-out conditions includes other conditions, so plan for publishing it to consume credits. A credit rate for publishing this playbook is not yet published; treat each publish, including each **Save & publish** of an active playbook, as a billable event until one is.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, and lists no other cloud. Learn says conversation orchestration is available for voice and messaging channels only. Callback and voicemail actions are voice only.

Learn's prerequisites are the System administrator or Omnichannel administrator role, unified routing enabled for the environment, at least one queue and workstream configured for voice or messaging channels, a voice or messaging channel configured, consumption-based billing, and the licensing the Licensing Guide describes. A playbook can apply to all queues for the selected channel, a list of queues, or all queues except those you exclude.

The roadmap description says the feature is enabled by admins, makers or marketers for end users. Learn documents the playbook as a draft until it is published as an active playbook.

## Governance guidance

### Before rollout
- Confirm with the owner of the Dynamics 365 agreement which licence conversation orchestration needs, using the Licensing Guide that Learn cites.
- Confirm consumption-based billing is set up for the environment, and an Azure subscription if you use pay-as-you-go, because publishing consumes Copilot credits.
- Decide which queues and channels the playbook covers, and which fallback each uses; callback and voicemail apply to voice only.
- Check that any queue named as a transfer target exists and has representatives, and that external numbers are valid before any external transfer.

### At rollout
- Build the playbook from the **Overflow handling** scenario in the prompt gallery, save it as a draft and review any validation warnings before publishing.
- Test with a conversation for each condition, because Learn says deviations from the intended logic show only at runtime.
- Publish the playbook and record the date, since publishing is when Learn says credits are consumed.

### After rollout
- Review the diagnostics custom query that Learn points to and compare the fallback actions taken with the playbook you wrote.
- Check how often the signed-out condition fires, bearing in mind Learn says closing a browser session or a network outage counts as a sign-out.
- Re-test after every edit of an active playbook, and keep the number of people who can **Save & publish** small.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Overflow actions for a queue that is closed or has no representatives signed in, and the queues covered</strong><br><small class="controls__note">Needs System administrator or Omnichannel administrator. Dataverse Web API call on the CC User Prompt table, which Learn names for exporting playbooks; the table page does not say it publishes a playbook.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Conversation Orchestration › Prompt gallery › Overflow handling › Manage overflow of incoming conversations using advanced conditions <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /msdyn_ccuserprompts(msdyn_ccuserpromptid)</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The playbook is the control. It sets the fallback action for each condition and which queues it covers. Learn lists System administrator or Omnichannel administrator as the role required.

The playbook table is the same one Learn tells you to add to a solution to move a playbook between environments, so a script that writes it changes the playbook record. Learn does not say that such a write publishes the playbook or converts it into the runtime format, so confirm that before relying on it.

The queue's own overflow rules on the **Queue** page remain an alternative for work items arriving out of operating hours. The queue's out-of-operating-hours condition is evaluated once before queue entry, so it does not respond when the queue closes while conversations are already waiting.

## Open questions

- How many Copilot credits does publishing an overflow playbook with the out-of-operating-hours or signed-out conditions consume? Watch the conversation orchestration page on Learn.
- Which Dynamics 365 licence does conversation orchestration require? Learn refers to the Licensing Guide without naming it.
- Does the roadmap's wording on callback, voicemail and another queue match the full list Learn gives, which also includes external numbers, keeping the conversation unassigned and ending the conversation? Watch both Learn pages.
- Does writing to the playbook table through the Dataverse Web API publish or change a live playbook? Watch the Learn table reference and the conversation orchestration page.

<!-- rationale
risk: Medium. A published playbook can transfer, end or redirect live customer conversations on its own, and Learn says the language-model conversion of a playbook might not capture the intended logic.
cost: Variable. Learn says conversation orchestration consumes Copilot credits when a playbook is published, billed through consumption-based billing; a rate for this playbook is not yet published.
impact: Low. Contact centre administrators build the playbook and only customers in the queues it covers see a different outcome; a draft playbook is not active, so nothing changes until one is published.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: The printed Copilot Service admin center path reaches the advanced-conditions overflow playbook editor. | Found: In Copilot Service admin center, go to Customer support > Conversation Orchestration. ... select Prompt gallery. ... Overflow handling ... Manage overflow of incoming conversations using advanced conditions | Fix: Keep the path and add to the row note: 'The path opens the playbook editor. Select Queues > Edit, choose Channel and Apply to, and save the queue selection; configure conditions and actions in the editor.' These steps are documented at https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration. | Source: https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration
- [supported, minor] controls[0].api; Governance controls table and prose / command: PATCH /msdyn_ccuserprompts(msdyn_ccuserpromptid) updates the playbook's CC User Prompt record. | Found: Update ... PATCH /msdyn_ccuserprompts(msdyn_ccuserpromptid) ... Writable columns/attributes ... msdyn_channel ... msdyn_exclusionlist ... msdyn_inclusionlist ... msdyn_prompt | Fix: Keep the call and add to the row note: 'The request body sets msdyn_prompt for the prompt, msdyn_channel for the channel, and msdyn_inclusionlist or msdyn_exclusionlist for queue selection. This updates the record; publishing through this call is not documented.' Reference: https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt. | Source: https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt
- [contradicted, minor] front matter: risk; rationale: risk / consistency: The medium risk rationale rates a published playbook rather than the opt-in control left at its default. | Found: defaultState: admin-opt-in. Rationale: Medium. A published playbook can transfer, end or redirect live customer conversations on its own. Standard: low includes 'nothing happens until an admin opts in'; a new control is rated at its default. | Fix: Set risk to 'low' and replace the risk rationale with 'Low. No new fallback action runs until an administrator configures and publishes a playbook.' Retain the supported warnings about actions after publication.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks administrators to check consumption-based billing, but the controls table has no corresponding row. | Found: Before rollout: 'Confirm consumption-based billing is set up for the environment, and an Azure subscription if you use pay-as-you-go'. The sole table row governs overflow actions and covered queues. | Fix: The Before rollout instruction to confirm consumption-based billing and the pay-as-you-go subscription has no corresponding controls-table row. Remove this checklist bullet in a correction that must not add rows; retain the documented billing prerequisites in Cost and licensing.
-->
