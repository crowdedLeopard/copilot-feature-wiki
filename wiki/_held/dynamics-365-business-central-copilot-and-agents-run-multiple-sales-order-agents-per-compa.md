---
title: "Dynamics 365 Business Central: multiple Sales Order Agents per company, with relevance filtering and larger PDF limits"
slug: "dynamics-365-business-central-copilot-and-agents-run-multiple-sales-order-agents-per-compa"
roadmapId: 578065
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Business Central"]
summary: "Business Central's Sales Order Agent can now run as several instances per company, filters irrelevant mail and reads PDFs up to 50 pages. It uses Copilot Credits, so check mailbox, folder and billing settings."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Sales Order Agent uses Copilot Credits, billed through prepaid Copilot Credit packs or pay-as-you-go. Learn's billing page publishes per-step credit rates; no rate specific to this update is published."
audiences: ["service-owner","finops","change-adoption"]
tags: ["business-central","dynamics-365","agents","copilot-credits","human-in-the-loop"]
sources:
  - title: "Microsoft 365 Roadmap item 578065"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578065"
    kind: "roadmap"
  - title: "Set up Sales Order Agent"
    url: "https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup"
    kind: "learn"
  - title: "Sales Order Agent overview"
    url: "https://learn.microsoft.com/dynamics365/business-central/sales-order-agent"
    kind: "learn"
  - title: "Configure Copilot and agent capabilities"
    url: "https://learn.microsoft.com/dynamics365/business-central/enable-ai"
    kind: "learn"
  - title: "Manage consumption-based billing for agent capabilities"
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-consumption-billing"
    kind: "learn"
videos: []
related: ["copilot-credits","dynamics-365-business-central-copilot-and-agents-envision-and-design-ai-agents-in-business"]
controls:
  - governs: "Whether the Sales Order Agent capability is active in the environment"
    scope: "environment"
    ui:
      surface: "Business Central"
      path: "Search > Copilot & agent capabilities > Sales Order Agent > Deactivate"
      docs: "https://learn.microsoft.com/dynamics365/business-central/enable-ai"
    api: null
    note: "Learn says capabilities are active by default when generally available. Requires SUPER permission or a listed licence. Some changes need users to sign in again."
  - governs: "Who can work with each Sales Order Agent instance and who can configure it"
    scope: "agent"
    ui:
      surface: "Business Central"
      path: "Sales Order Agent > Configure Sales Order Agent > Manage user access"
      docs: "https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup"
    api: null
    note: "Turn off the Active toggle first. Can Configure also allows changing the agent's configuration and its access list."
  - governs: "Mailbox, folder, mark-as-read, attachment analysis and daily email limit for an instance"
    scope: "agent"
    ui:
      surface: "Business Central"
      path: "Sales Order Agent > Configure Sales Order Agent > Manage mailbox"
      docs: "https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup"
    api: null
    note: "The card holds Account, Folder, Mark email as read, Analyze attachments and Daily email limit. Needs Full Access on the mailbox to set the folder."
  - governs: "What review is required for messages from unregistered senders"
    scope: "agent"
    ui:
      surface: "Business Central"
      path: "Sales Order Agent > Configure Sales Order Agent > Respond to inquiries > Messages from unregistered senders"
      docs: "https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup"
    api: null
    note: "Learn lists the default as All."
  - governs: "Permission sets assigned to each Sales Order Agent account"
    scope: "agent"
    ui:
      surface: "Business Central"
      path: "Agents > Sales Order Agent account > Agent Permission Sets > Edit agent permissions"
      docs: "https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup"
    api: null
    note: "Set State to disabled before editing. SOA - EDIT is a system set; copy it to change it."
  - governs: "Inspecting an instance's tasks, steps and log entries"
    scope: "agent"
    ui:
      surface: "Business Central"
      path: "Agents > Sales Order Agent account > View tasks"
      docs: "https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup"
    api: null
    note: "Read-only inspection; it does not change agent behaviour."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-23T22:45:59"
changes:
  - date: "2026-11-19"
    note: "New briefing: multiple Sales Order Agent instances, relevance filtering, 50-page PDFs, Try it out, unknown-sender options, and the Copilot Credit rates that apply."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 111 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 111
  confirmed: 108
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "8e4ce38868eb0f12bd0f76fe2cd99a6a"
---

## What's changing

The Sales Order Agent in Dynamics 365 Business Central can now be set up as several instances in one company. Each instance has its own mailbox and folder, email signature, processing rules, display name and performance metrics. Microsoft Learn says archived configurations are read-only and do not count towards the number of active instances. The roadmap item says an upgrade path migrates existing single-instance setups.

The same roadmap item bundles several behaviour changes. Item matching now works in three layers: exact identifier (item number, vendor item number, GTIN or cross-reference), AI-ranked attribute matching (colour, material, size), then a broader search across all items. The agent checks incoming messages and attachments against a relevance model before processing, so offers to sell, discount requests and attempts to reach internal data are filtered out, and non-sales attachments such as terms and conditions are ignored. PDFs can now run to 50 pages, with a cumulative content limit of approximately 150,000 characters across all attachments in one email, and the **Attachments** page records why a file was skipped.

There are also new controls and test paths. A **Try it out** section lets an administrator create a task from a sender, message text and attachments without sending an email, with two sample messages. For an unregistered sender, the reviewer can create a contact, use another contact for that one task, or update an existing contact's email address. The roadmap item also describes a **Mark email as read** option and a required mailbox folder, and says the agent's prompts now ship as embedded resource files.

The roadmap record gives the status as Launched, with a target of July CY2026 and release phase General Availability, for the Worldwide (Standard Multi-Tenant) cloud on the web. Two details differ between sources: the roadmap item says folder selection is mandatory before activation, while the Learn setup page says that without a selected folder the agent monitors the Inbox; and the roadmap item calls **Mark email as read** new, while Learn lists it as on by default.

## Why it matters

This changes what an existing Sales Order Agent does with customer email and how much it can consume. The roadmap item says the change is enabled for end users automatically, and Learn says Copilot and agent capabilities are active by default when they are generally available. A Sales Order Agent still has to be configured and activated before it processes email, so tenants that have not set one up are not affected until they do.

For tenants already running the agent, plan for a larger intake: longer PDFs are now read, and each attachment is billed in Copilot Credits. Several instances also multiply the mailboxes, folders and reviewer lists you have to keep consistent. The relevance filter should reduce wasted processing, but how it behaves is something to test with your own mail using **Try it out**, not assume.

## Risk assessment

**Data exposure**

- Each instance reads the mailbox and folder it is pointed at, including every email arriving there. Learn says the agent processes all emails in the monitored folder, so point each instance at a dedicated subfolder rather than a whole inbox where possible.
- Attachments are now read up to 50 pages each; check that purchase-order mail does not share a folder with unrelated confidential documents. The **Analyze attachments** option controls whether attachments are analysed at all.

**Security & identity**

- Learn says the agent identifies contacts only by matching the sender's address to the **E-Mail** field on contact cards. The new **Use another contact once** option links a contact to a single task without changing master data, so reviewers decide who counts as the customer for forwarded mail.
- The agent has its own account with the **SOA - EDIT** permission set by default. Each extra instance gets its own agent account, so permission sets need checking per instance.

**Autonomy & actions**

- Depending on the settings, the agent can send quotes for customer confirmation and convert quotes into orders. Learn says Business Central users review outgoing messages before they are sent, and the review options for quotes and orders are off by default.
- When credits run out, Learn says the agent stops processing new emails but stays active, then resumes and picks up the accumulated backlog when credits return.

**Change & support**

- Moving from one instance to several, and any difference between the roadmap's mandatory folder and Learn's Inbox default, may change which mail an existing agent sees. Check each migrated instance's folder after the update.
- Skipped attachments now carry a stated reason on the **Attachments** page, which helps support staff diagnose them.

## Cost and licensing

Sales Order Agent uses Copilot Credits for AI interactions, which Learn says incur charges based on interaction complexity. The published rates on the [billing page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-consumption-billing) are 2 credits to analyse an incoming email, 2 per attachment with no sales data detected, 5 per attachment with sales data detected, 5 each to check item availability, to create or update a quote and to create or update an order, and 2 to generate the response email. Learn's own example, 100 requests a month with half including a usable attachment, comes to 1,650 Copilot Credits a month.

Business Central supports prepaid capacity (Copilot Credit packs) and pay-as-you-go, and prepaid capacity is consumed first when available. Credit capacity on the tenant is shared with other Microsoft services. The **Daily email limit** setting, default 100, sets how many incoming emails the agent handles per day; emails over the limit are processed the next day.

Learn's billing page prices attachments per attachment and mentions no per-page rate, so whether the move from 10 to 50 pages changes the charge is not stated there. Indirect costs are the reviewers' time and the effort of maintaining several instances.

## Scope

The roadmap record lists Dynamics 365 Business Central, the Worldwide (Standard Multi-Tenant) cloud and the web platform, and says the change is enabled for end users automatically. Creating an instance needs the **Configure All Agents** system permission (ID 9665); working with an agent's tasks needs **Manage Agent Tasks** (ID 9670) and a place on that agent's user access list. Learn says Essential and Premium licence entitlements include **Manage Agent Tasks**.

Learn lists the prerequisites as Microsoft 365 mailbox access if mail is monitored, billing for agent capabilities configured for the environment, and, in sandboxes only, the **Allow HttpClient Requests** toggle on the Sales Order Agent extension. Configuring email monitoring needs **Read and manage (Full Access)** and **Send as** permission on the mailbox unless it is the user's personal mailbox. Learn lists supported languages including Danish, English variants, French, German, Italian, Portuguese (Brazil) and Spanish.

## Governance guidance

### Before rollout

- Inventory existing Sales Order Agent instances and the mailbox and folder each one monitors, and confirm each has a folder you intend (the roadmap says selection is mandatory; Learn says the Inbox is used if none is chosen).
- Confirm billing for agent capabilities is set up for the environment and review the credit rates, then estimate attachment volume now that PDFs up to 50 pages are read.
- Decide which sales teams or customer groups get their own instance, and who holds **Configure All Agents** and **Can Configure** on each.
- Agree who reviews messages from unregistered senders, and when to use **Use another contact once** instead of creating or updating a contact.

### At rollout

- Check the **Copilot & agent capabilities** page shows Sales Order Agent as active or inactive as intended.
- Run both sample messages from **Try it out** on each instance, and add test messages of your own that should be filtered as irrelevant, to see how the relevance check treats them.
- Set **Mark email as read** and **Daily email limit** on each instance's **Manage mailbox** card to match your intake and credit budget.
- Review the permission sets on each agent account and keep **SOA - EDIT** unless an extension error requires more.

### After rollout

- Monitor credit capacity and usage in the Power Platform admin center, as Learn advises.
- Read the **Attachments** page for skipped files and the stated reasons, and adjust limits, formats or the **Analyze attachments** setting accordingly.
- Use the **Agents** page, **View tasks** to inspect tasks and steps when a result looks wrong.
- Deactivate instances you do not need, since Learn says a stalled agent resumes and processes the accumulated backlog when credits return.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Sales Order Agent capability is active in the environment</strong><br><small>Environment</small><br><small class="controls__note">Learn says capabilities are active by default when generally available. Requires SUPER permission or a listed licence. Some changes need users to sign in again.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Search › Copilot &amp; agent capabilities › Sales Order Agent › Deactivate <a href="https://learn.microsoft.com/dynamics365/business-central/enable-ai" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can work with each Sales Order Agent instance and who can configure it</strong><br><small>Agent</small><br><small class="controls__note">Turn off the Active toggle first. Can Configure also allows changing the agent's configuration and its access list.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Sales Order Agent › Configure Sales Order Agent › Manage user access <a href="https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Mailbox, folder, mark-as-read, attachment analysis and daily email limit for an instance</strong><br><small>Agent</small><br><small class="controls__note">The card holds Account, Folder, Mark email as read, Analyze attachments and Daily email limit. Needs Full Access on the mailbox to set the folder.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Sales Order Agent › Configure Sales Order Agent › Manage mailbox <a href="https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>What review is required for messages from unregistered senders</strong><br><small>Agent</small><br><small class="controls__note">Learn lists the default as All.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Sales Order Agent › Configure Sales Order Agent › Respond to inquiries › Messages from unregistered senders <a href="https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Permission sets assigned to each Sales Order Agent account</strong><br><small>Agent</small><br><small class="controls__note">Set State to disabled before editing. SOA - EDIT is a system set; copy it to change it.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Agents › Sales Order Agent account › Agent Permission Sets › Edit agent permissions <a href="https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Inspecting an instance's tasks, steps and log entries</strong><br><small>Agent</small><br><small class="controls__note">Read-only inspection; it does not change agent behaviour.</small></td><td data-label="Admin UI"><strong>Business Central</strong><br>Agents › Sales Order Agent account › View tasks <a href="https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

All six settings are Business Central pages; Microsoft Learn documents no API for them at the time of writing (November 2026). Changing the Copilot & agent capabilities page needs an administrator with **SUPER** permission or one of the licences Learn lists. Configuring an instance needs **Configure All Agents** or **Can Configure** on that agent. Turn off the **Active** toggle before changing user access or permission sets.

The Copilot & agent capabilities toggle governs the Sales Order Agent as a whole; the other rows apply per instance. No setting is documented that limits the new multi-instance count, and no setting is documented for the relevance filter or the 50-page limit, which Learn describes as fixed behaviour.

## Open questions

- Is the mailbox folder mandatory before activation, as the roadmap item says, or does the agent use the Inbox when none is chosen, as the Learn setup page says? Watch the Learn page for **Folder**.
- Does the increase from 10 to 50 pages per PDF change the Copilot Credits charged per attachment? The billing page prices per attachment and states no per-page rate.
- What happens to existing single-instance setups on migration, including their folder, signature and user access list? The roadmap states an upgrade path exists; Learn's setup page does not describe it.
- Which identity does the agent use for the mailbox? Learn says it runs in the context of the activating user when processing email, and also that it runs under its own account without inheriting the reviewer's permissions.

<!-- rationale
risk: Medium. The agent reads customer email and attachments and drafts quotes and orders; Learn says Business Central users review outgoing messages, but mailbox, folder and credit settings need checking.
cost: Variable. Sales Order Agent is billed in Copilot Credits per email, attachment and agent action; Learn's billing page publishes the credit rates for each step.
impact: Medium. Business Central administrators and the sales teams who review agent tasks notice it; the roadmap item says it is enabled for end users automatically.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[4].api; Governance controls table; Governance controls: blanket API absence / absence: Microsoft documents no API to assign permission sets to the Sales Order Agent's Business Central user account. | Found: Creates an user permission in Dynamics 365 Business Central. POST /microsoft/automation/v2.0/companies({companyId})/users({userSecurityId})/userPermissions | Fix: Replace controls[4].api null with kind 'rest', call 'POST /microsoft/automation/v2.0/companies({companyId})/users({userSecurityId})/userPermissions', and docs 'https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/api/dynamics_userpermission_create'. Add to its note: 'The request body uses roleId to select the permission set; company, scope and appId identify the assignment where needed.' The setup page identifies the agent as a Business Central user account; the automation userPermission resource documents permission-set assignment to users, with no agent exclusion. Add the reference to sources and remove the blanket sentence 'Microsoft Learn documents no API for them'. Preserve the existing requirement to disable the agent before changing its assignments. | Source: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/api/dynamics_userpermission_create
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: comparison of sources / default: Learn lists Mark email as read as on by default. | Found: | Mark email as read | Specifies whether the agent marks processed emails as read in the mailbox. When enabled, team members can quickly identify the messages the agent handled. | On | | Fix: A new setting can also default to On, so do not present these as conflicting facts. Replace the last sentence of What's changing with: 'The roadmap item says folder selection is mandatory before activation, while the Learn setup page says that without a selected folder the agent monitors the Inbox. Learn also lists Mark email as read as on by default.' | Source: https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup
- [supported, minor] Why it matters; rationale: cost / cost: Each attachment is billed in Copilot Credits. | Found: Process email attachment, no sales data detected (per attachment*) | Generative answer | 2 Process email attachment, sales data detected (per attachment*) | Agent action | 5 * Only attachments in supported formats are processed (for example, PDF, PNG, JPG). | Fix: Narrow 'each attachment is billed in Copilot Credits' to 'each processed attachment is billed in Copilot Credits'; the published attachment rates apply to processed supported formats, not every file attached to an email. | Source: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-consumption-billing
- [supported, minor] controls[5].ui; Governance controls table; Governance guidance: View tasks / admin-path: Agents > Sales Order Agent account > View tasks provides access to task, step and log inspection. | Found: Select the Sales Order Agent account you want to inspect, and then choose View tasks ... Drill into Steps Done to inspect the execution steps ... Choose View log entries to open the Agent Task Log page. | Fix: Keep the existing route to View tasks, which reaches the correct page. Add to controls[5].note: 'On Agent Tasks, open Task ID for an active task, drill into Steps Done for execution steps, or choose View log entries > entry > View details for log details.' | Source: https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist's controls are represented in the six-row controls table. | Found: Confirm billing for agent capabilities is set up for the environment ... Monitor credit capacity and usage in the Power Platform admin center ... Deactivate instances you do not need. | Fix: The checklist's billing setup, Power Platform credit monitoring and per-instance deactivation steps have no matching controls rows; row 0 instead deactivates the environment capability. To retain the current six-row table, remove those three checklist bullets. This finding does not request additional rows.
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits the verified rollout and cost facts. | Found: status: "launched"; defaultState: "on"; risk: "medium"; cost: "variable"; action: "prepare". The roadmap item says the change is enabled for end users automatically. | Fix: Set action to 'act-now': the update is launched, reaches existing agent users automatically, has medium risk and metered cost, and has mailbox, review and permission decisions to take. This meets the schema's act-now definition.
-->
