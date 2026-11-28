---
title: "Dynamics 365 Contact Center: overflow actions for direct inward dialed calls"
slug: "dynamics-365-contact-center-unified-routing-use-overflow-actions-to-protect-customer-exper"
roadmapId: 576607
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Contact Center"]
summary: "Administrators can publish a conversation orchestration playbook that decides what happens when a representative's direct line call is rejected, unanswered or unavailable. It is optional, and publishing consumes Copilot credits."
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
  - title: "Microsoft 365 Roadmap 576607"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576607"
    kind: "roadmap"
  - title: "Manage overflow of work items in queues"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow"
    kind: "learn"
  - title: "Configure conversation orchestration by using natural language playbooks"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-conversation-orchestration"
    kind: "learn"
  - title: "Configure outbound and inbound profiles"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-outbound-inbound-profiles"
    kind: "learn"
  - title: "Configure voicemail to manage inbound calls"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/voice-channel-voicemail"
    kind: "learn"
  - title: "Manage consumption-based billing and capacity"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go"
    kind: "learn"
  - title: "Sample queries and dashboards for conversation diagnostics"
    url: "https://learn.microsoft.com/dynamics365/guidance/resources/conversation-diagnostics-sample-queries"
    kind: "learn"
  - title: "CC User Prompt (msdyn_ccuserprompt) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    kind: "learn"
videos: []
related: ["dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat","dynamics-365-contact-center-administrator-experiences-use-enhanced-customer-first-direct-c","copilot-credits"]
controls:
  - governs: "Overflow action for direct inward dialed calls, and which inbound profiles it covers"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Conversation Orchestration > Prompt gallery > Overflow handling > Handle overflow for direct inbound call"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow"
    api:
      kind: "rest"
      call: "PATCH /msdyn_ccuserprompts(msdyn_ccuserpromptid)"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt"
    note: "Needs System administrator or Omnichannel administrator. After opening the template, choose and save the inbound-profile scope; in Build playbook, select the overflow action for each condition."
  - governs: "Which representatives have a direct inward dialing inbound profile"
    scope: "user"
    ui:
      surface: "Copilot Service admin center"
      path: "Support experience > Productivity > Outbound and inbound profiles (Manage)"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-outbound-inbound-profiles"
    api: null
    note: "Prerequisite to the playbook; sets no overflow action. Needs a geographic personal number assigned to the representative. The route opens the profile list: select New profile and type Inbound, or select a profile and Edit."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-20"
    note: "New briefing: overflow actions for direct inward dialed calls, with the Learn setup path, the Copilot credit consumption at publish and the callback discrepancy between Learn pages."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: the playbook row now gives the Dataverse Update operation, the inbound profiles row no longer implies it assigns direct numbers, and checklist items without a control row were removed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 80 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 88 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 88
  confirmed: 86
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "ce3d03187982b02ac73cf141c9f80e37"
---

## What's changing

Dynamics 365 Contact Center can run an administrator-defined fallback action when a direct inward dialed call cannot be handled. A direct inward dialed call is a call to a representative's personal number, not to a main support line or queue. The roadmap item says the feature uses conversation orchestration (natural language playbooks that react to conversation events) to detect that the representative is busy, offline, rejecting the call or not answering.

Learn documents the setup on *Manage overflow of work items in queues*. The administrator opens the **Handle overflow for direct inbound call** template, chooses which inbound profiles the playbook covers (all, a list, or all except some), and picks an action for each of three conditions: the user rejects the notification, the user isn't available, or the notification times out. That page lists four actions: transfer to another queue, end the conversation, send to voicemail, and transfer to an external number. The conversation orchestration page also lists offering a callback and keeping the conversation unassigned for this scenario, and the roadmap item names a direct callback, so the Learn pages differ on whether callback is among the actions. The roadmap describes configuration at the global or inbound profile level; Learn describes the scope choices above.

Without a playbook, Learn states that by default a call to a representative who is busy or away usually goes to voicemail. The roadmap record shows the item as Launched, with a target of October CY2026 and a preview from June CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform, in the General Availability and Preview release phases.

## Why it matters

A direct line bypasses the queue, so a missed direct call has no fallback beyond voicemail, which Learn says is usually where such a call goes, unless someone configures one. This playbook lets a service owner decide whether those callers reach a backup queue, an after-hours external number or a recording, instead of being left to ring out. Because the actions run without a person in the loop, the configuration is a customer-experience decision as much as a technical one.

If nobody acts, the feature does nothing: a playbook is saved as a draft until it is published, and Learn says unanswered direct calls usually go to voicemail. The cost of acting is Copilot credits at publish time and the work of testing a playbook that a language model converts into its runtime form.

## Risk assessment

**Data exposure**
- Transfer to external number hands a live caller to a number outside the organisation; check the number before publishing, as the playbook runs the transfer without a representative.
- Send to voicemail leaves a caller recording. Learn says the custom assignment rule assigns an individual voicemail to a representative by their direct inward call number, so confirm the right people are in the voicemail queue.

**Security & identity**
- Configuring conversation orchestration needs the System administrator or Omnichannel administrator role, so anyone with it can change where direct callers land. Limit who holds those roles.

**Autonomy & actions**
- The playbook ends, transfers or forwards calls on its own when a condition is met. Learn says the system uses a language model to convert the natural language playbook, the output might not fully capture the intended logic, and deviations show only at runtime.
- Editing an active playbook with **Save & publish** applies the change to live routing at once; the **Save** button is disabled for active playbooks.

**Change & support**
- Callers who previously reached voicemail may now reach a queue or an external number, and representatives may see fewer voicemails. Tell the team before publishing.
- Learn says diagnostics for overflow handling are read with a custom query, so support staff need access to that query tooling to explain why a call went where it did.

## Cost and licensing

Learn's prerequisites for conversation orchestration say specific licensing requirements apply to configure and use it in Dynamics 365 Contact Center and refer to the Dynamics 365 Licensing Guide. The page does not name the licence, so check the guide for your agreement.

The meter is Copilot credits. Learn says conversation orchestration consumes Copilot credits when you publish a playbook, and that a published playbook can then process any number of conversations without consuming extra credits; saving a draft does not consume credits. The prerequisites require consumption-based billing: Dynamics 365 supports prepaid capacity and a pay-as-you-go plan, both of which require the Dynamics 365 environment to be linked to a Power Platform environment, and pay-as-you-go needs an Azure subscription.

A credit rate for publishing a direct-call playbook is not yet published. Learn's credit exemption for in-queue playbooks is worded for a single branch with only the wait-time condition and no context variables; the direct-call playbook uses different conditions, and Learn states no exemption for it. Treat each publish, including each edit of an active playbook, as a billable event until a rate is published.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform; it lists no other cloud. Learn says conversation orchestration is available for voice and messaging channels. For this scenario the prerequisites are a configured voice channel, direct inward dial set up through inbound profiles for service representatives, conversation orchestration available, at least one queue to handle transfers, and external phone numbers if you want to transfer externally.

An inbound profile needs a geographic personal number assigned to the representative. Learn also says direct inward dialing doesn't use unified routing, so direct calls to representatives aren't tracked in unified routing historical analytics, even though the roadmap item sits under Unified routing. The playbook covers all inbound profiles, a list of them, or all except those you exclude. Configuring requires the System administrator or Omnichannel administrator role.

## Governance guidance

### Before rollout
- Confirm the Dynamics 365 licence entitlement for conversation orchestration against the Dynamics 365 Licensing Guide that Learn's prerequisites cite.
- List the representatives with inbound profiles and decide whether the playbook covers all of them, a list or all except some.

### At rollout
- Build the playbook from the **Handle overflow for direct inbound call** template and choose one action for each of the three conditions.
- Place a test call to a covered profile for each condition, because Learn says deviations from the intended logic show only at runtime.
- Publish with **Save and publish** and record the date, since publishing is the point at which Learn says credits are consumed.

### After rollout
- Run the overflow custom query that Learn points to and compare the actions taken with the playbook you wrote.
- Review voicemails and external-transfer outcomes with the team that owns the direct lines.
- Re-test after every edit of an active playbook, because **Save & publish** changes live routing immediately.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Overflow action for direct inward dialed calls, and which inbound profiles it covers</strong><br><small class="controls__note">Needs System administrator or Omnichannel administrator. After opening the template, choose and save the inbound-profile scope; in Build playbook, select the overflow action for each condition.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Conversation Orchestration › Prompt gallery › Overflow handling › Handle overflow for direct inbound call <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /msdyn_ccuserprompts(msdyn_ccuserpromptid)</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which representatives have a direct inward dialing inbound profile</strong><br><small>User</small><br><small class="controls__note">Prerequisite to the playbook; sets no overflow action. Needs a geographic personal number assigned to the representative. The route opens the profile list: select New profile and type Inbound, or select a profile and Edit.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Support experience › Productivity › Outbound and inbound profiles (Manage) <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-outbound-inbound-profiles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The playbook is the control: it decides the action for each of the three conditions and which inbound profiles it covers. The roles required are System administrator or Omnichannel administrator. Learn describes no separate tenant-wide switch for this scenario; without a playbook, Learn says unanswered direct calls usually go to voicemail.

The API row is the Dataverse Web API Update operation on the CC User Prompt table, which Learn's migration steps name as the playbook component. The request body can update msdyn_prompt, the stored playbook prompt. This reference does not document executing publication or the format of inbound-profile scope lists.

Inbound profiles configure call behaviour for representatives whose personal numbers have already been assigned; they do not assign representatives their direct numbers. That row sets no overflow action. Voicemail routing, queues and credit capacity are configured on other Learn pages linked in the sources; spend is controlled through the billing plan, not through the playbook.

## Open questions

- Is offering a direct callback available as an action for direct inward dialed calls? The overflow page lists four actions without it, while the conversation orchestration page and the roadmap item include it. Watch both Learn pages.
- How many Copilot credits does publishing a direct-call playbook consume, and does any exemption apply? Watch the conversation orchestration page.
- Does the playbook's transfer to external number action depend on the inbound profile's **Call transfer to external phone number** setting, which Learn says must be on to use call forwarding for inbound profiles?
- Which Dynamics 365 licence does conversation orchestration require? Learn refers readers to the Licensing Guide without naming it.
- Will Microsoft document an operation to publish a direct-call playbook through an API? Watch the CC User Prompt table reference and the conversation orchestration page.

<!-- rationale
risk: Medium. A published playbook can transfer a caller to another queue or an external number, or end the call, and Learn says the language-model conversion of a playbook might not capture the intended logic.
cost: Variable. Learn says conversation orchestration consumes Copilot credits when a playbook is published, billed through prepaid capacity or pay-as-you-go; a rate for this playbook is not yet published.
impact: Low. Administrators who build the playbook, representatives with a direct number and their callers notice it; a draft playbook is not active, so nothing changes until one is published.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: first paragraph / behaviour: A missed direct call has no fallback beyond voicemail unless someone configures one. | Found: Searched: direct inward call tenant switch default fallback voicemail forwarding unanswered. Read Manage overflow, Configure outbound and inbound profiles and Configure voicemail. They describe voicemail as usual, not the only possible unconfigured fallback. | Fix: Replace the first sentence with: 'A direct line bypasses the queue; Learn says that by default an unanswered call usually goes to voicemail when the representative is busy or away.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Copilot Service admin center path reaches the Handle overflow for direct inbound call template. | Found: In the site map of Copilot Service admin center, in Customer support, select Conversation Orchestration. Select Prompt gallery, and select Overflow handling > Handle overflow for direct inbound call. | Fix: Extend both printed paths to 'Customer support > Conversation Orchestration > Prompt gallery > Overflow handling > Handle overflow for direct inbound call > Build playbook > overflow action'. Retain the note to choose and save the inbound-profile scope first. | Source: https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow
- [supported, minor] controls[0].api; Governance controls table and API explanation / command: PATCH /msdyn_ccuserprompts(msdyn_ccuserpromptid) updates the stored CC User Prompt playbook record. | Found: | `Update`Event: True | `PATCH` /msdyn\_ccuserprompts(*msdyn\_ccuserpromptid*)See Update | Writable columns/attributes: msdyn_prompt | Fix: Add to controls[0].note and the rendered note: 'The request body sets msdyn_prompt to update the stored playbook prompt; this reference does not document publication or inbound-profile scope-list formats.' Keep the call unchanged. | Source: https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_ccuserprompt
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Support experience > Productivity > Outbound and inbound profiles (Manage) opens the profile list in Copilot Service admin center. | Found: In the Copilot Service admin center site map, select Productivity in Support experience. On the Productivity page, select Manage for Outbound and inbound profiles. Select New profile. | Fix: Extend both paths to 'Support experience > Productivity > Outbound and inbound profiles (Manage) > New profile > Inbound > Phone number > Inbound info > Inbound behaviors'. Keep the note that an existing profile can instead be selected and edited. | Source: https://learn.microsoft.com/dynamics365/customer-service/administer/configure-outbound-inbound-profiles
- [contradicted, minor] Governance guidance: After rollout / consistency: Every monitoring control the checklist tells the reader to use is represented in the controls table. | Found: After rollout: 'Run the overflow custom query that Learn points to and compare the actions taken with the playbook you wrote.' The table contains only the playbook and inbound-profile controls, not the diagnostics query. | Fix: The 'Run the overflow custom query' checklist step has no controls-table row. Remove that checklist bullet; retain the supported diagnostics explanation in Risk assessment. Do not add a control row.
-->
