---
title: "Dynamics 365 Customer Service: email resolution answers customer emails without creating a case"
slug: "dynamics-365-customer-service-copilot-and-ai-innovation-resolve-customer-emails-autonomous"
roadmapId: 578064
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "Case Management Agent can reply to incoming customer emails directly, creating a case only if it cannot resolve the issue. An admin turns it on per line of business; usage is billed in Copilot Credits."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "The Learn page lists a pay-as-you-go plan with an Azure subscription as a prerequisite, and Microsoft's Dynamics 365 billing page says these capabilities use Copilot Credits. A credit rate specific to email resolution is not yet published."
audiences: ["service-owner","power-platform-admin","finops"]
tags: ["customer-service","dynamics-365","autonomous-agents","human-in-the-loop","copilot-credits","pay-as-you-go","usage-based-billing","case-management-agent"]
sources:
  - title: "Microsoft 365 Roadmap 578064"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578064"
    kind: "roadmap"
  - title: "Configure email resolution to resolve customer issues (preview)"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-resolution"
    kind: "learn"
  - title: "Set up Case Management Agent to resolve cases"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/set-up-case-resolution-agent"
    kind: "learn"
  - title: "Configure Case Management Agent"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/case-management-global-settings"
    kind: "learn"
  - title: "Manage consumption-based billing and capacity"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go"
    kind: "learn"
  - title: "View usage and billing information"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-usage-costs"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Representative Copilot Setting (msdyn_agentcopilotsetting) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_agentcopilotsetting"
    kind: "learn"
videos: []
related: ["copilot-credits","dynamics-365-customer-service-manage-intraday-operations-with-ai-agent"]
controls:
  - governs: "Whether email resolution is turned on, and which application user replies"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Email settings > Email resolution (preview) > Turn on email resolution"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-resolution"
    api: null
    note: "Preview page. The application user is chosen in the same page, under Select the application user for email management."
  - governs: "Which lines of business email resolution is deployed for"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Email settings > Email resolution (preview) > LOB (lines of business) deployment settings"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-resolution"
    api: null
    note: "The pane edits LOB (lines of business) and Deployment status. Lines of business come from Customer Intent Agent."
  - governs: "Level of automation per line of business: autonomous reply, draft for review, shadow mode or disabled"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Case settings > Case Management Agent > Case resolution > Level of automation per line of business"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/set-up-case-resolution-agent"
    api: null
    note: "Documented on the case resolution page; the roadmap item describes this level for email resolution. Shadow mode is a preview feature."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-23T22:45:57"
changes:
  - date: "2026-11-19"
    note: "New briefing: Case Management Agent email resolution, with its Copilot Service admin center controls, Copilot Credits billing prerequisite and open preview-versus-launched status."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 78 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 74
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "b2f2ca27b8d2c0c7430f3fc07d76c538"
---

## What's changing

Email resolution lets Dynamics 365 Customer Service answer an incoming customer email directly from the email channel, without creating a case first. Microsoft Learn describes it as a feature that applies Case Management Agent capabilities: it identifies the customer's intent, generates an email asking for more information or drafting a resolution, and sends the response autonomously. If the issue cannot be resolved, it creates a case for a service representative and associates the email with that case.

An administrator turns it on in Copilot Service admin center, picks the application user that replies to emails and creates cases, and chooses which lines of business it covers. At run time it fires when an incoming email matches the email rules configured for a line of business in Customer Intent Agent, then uses Customer Intent Agent to identify intent and case resolution capabilities and available knowledge to build the reply. The roadmap item adds that the response can draw on enterprise knowledge, business instructions, connectors and custom agents, and that the administrator sets the automation level for each line of business, from fully autonomous to drafting a response for a representative to review and send.

The roadmap record gives status Launched, with release phases General Availability and Preview, a preview date of June CY2026 and a target date of September CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web. The Learn page for the feature is still headed "preview" and describes it as a production-ready preview, so treat its behaviour as the preview's until Microsoft updates the page.

## Why it matters

This moves a customer-facing action, sending an email in your organisation's name, from a representative to an agent. The first-line reply, and for some emails the whole interaction, no longer passes through a case or a person, so response quality, tone and accuracy become a configuration and knowledge-quality question for the service owner.

It is an opt-in capability: the roadmap says an administrator enables the setting, and the Learn steps start with a toggle. If nobody acts, no source says existing email handling changes. The decisions that matter are which lines of business to include, how much autonomy each gets, and who budgets for the Copilot Credits consumed.

## Risk assessment

**Data exposure**

- Customer email content is analysed by Customer Intent Agent and Case Management Agent capabilities, and the reply is built from available knowledge (the roadmap adds connectors and custom agents). Review which knowledge sources and connectors the agent can reach before enabling a line of business.
- The Learn page lists "Data movement is set up for your environment" as a prerequisite. Confirm with your data protection team what that setting allows for your region before enabling.

**Security & identity**

- Email resolution replies through an application user you select. The related case resolution page says the application user needs the **Customer Service Representative** role and that a shared mailbox is used so outbound messages come from a centralised address. Review what that role can read and change, because the agent acts through that user.

**Autonomy & actions**

- In the fully autonomous configuration the agent sends responses to customers without a person reviewing them, and creates a case when it cannot resolve the issue. Start each line of business at a reviewed level, and widen autonomy only after reading the replies.
- Case resolution documents **Full**, **Require agent confirmation**, **Shadow mode** (preview) and **Disabled** per line of business, and a simulation (preview) that runs on sample cases. Both consume Copilot or AI credits in the same way as agent runs, according to that page.

**Change & support**

- The Email resolution page offers a single language for all emails, so a line of business that serves several languages gets replies in the one language chosen. Check this before enabling multilingual queues.
- Representatives receive cases that carry the email and, per the roadmap, the customer intent, actions taken and generated responses. Brief them on what the agent has already sent.

## Cost and licensing

The Learn page lists a Power Platform pay-as-you-go plan, which requires an Azure subscription, as a prerequisite: "for the system to charge when the agent runs". Microsoft's Dynamics 365 billing page says selected Copilot and agent capabilities use consumption-based billing in Copilot Credits, and that either prepaid capacity (Copilot Studio message packs) or pay-as-you-go can be used, with prepaid capacity consumed first. Both models need the Dynamics 365 environment linked to a Power Platform environment.

The billing page says that when the quota is depleted the AI capability is unavailable until more capacity is added, and that for pay-as-you-go you view usage and adjust spending limits (budgets) in Microsoft Cost Management in the Azure portal. The pay-as-you-go usage page adds that Azure Cost Management can set budgets per billing policy or per Power Platform meter, with alerts. Those are Azure-side controls, so they are not a row in the table below.

A credit rate specific to email resolution is not yet published. Copilot Studio's billing rates page lists generic agent rates, and the pages read do not say which of them an email resolution run uses. Simulations and shadow mode on the case resolution page also consume credits. Indirect costs are admin time to set up the application user, shared mailbox and Customer Intent Agent, and representative time on cases the agent hands over.

## Scope

- **Who it affects:** customers emailing the lines of business you enable, and the service representatives who receive the resulting cases. Learn marks the page as applying to Dynamics 365 Customer Service only.
- **Prerequisites on the Learn page:** data movement set up in Power Platform admin center; a pay-as-you-go plan with an Azure subscription (consumption-based billing); Customer Intent Agent configured; the guided setup for autonomous email resolution completed through Configure Case Management Agent; and, for the fully autonomous flow, an application user and shared mailbox.
- **Roles:** the Configure Case Management Agent page lists the CSR Manager or Customer Service Representative role, and an Application Developer role to create app registrations, as prerequisites for setup.
- **Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the web. No other clouds are listed on the record.
- **Status:** the roadmap says Launched (preview June CY2026, target September CY2026); the Learn page is headed preview.

## Governance guidance

### Before rollout

- Complete the Customer Intent Agent setup and the guided setup for Case Management Agent, then confirm the line of business and email rules you want covered; email resolution runs only for emails that match those rules.
- Create the application user with the **Customer Service Representative** role and the shared mailbox, then review what that role can access.
- Set up pay-as-you-go billing against an Azure subscription, and agree an Azure Cost Management budget and alert owner with finance.
- Decide the single reply language and whether to use the Copilot-recommended email template, which needs email template recommendations enabled.

### At rollout

- Turn on email resolution in Copilot Service admin center and select the application user (see the first control row).
- Enable one line of business first through its deployment status (second row) and set its level of automation to a reviewed level (third row).
- Tell service representatives that cases can arrive with an email the agent has already answered.

### After rollout

- Read a sample of sent replies and the cases handed over for each line of business, and move to fuller autonomy only where they are accurate.
- Check usage in the Power Platform admin center billing plan report and charges in Azure Cost Management each month.
- Watch the Learn page and Message center for the move from preview to general availability, and for a credit rate.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether email resolution is turned on, and which application user replies</strong><br><small class="controls__note">Preview page. The application user is chosen in the same page, under Select the application user for email management.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Email settings › Email resolution (preview) › Turn on email resolution <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-resolution" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which lines of business email resolution is deployed for</strong><br><small class="controls__note">The pane edits LOB (lines of business) and Deployment status. Lines of business come from Customer Intent Agent.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Email settings › Email resolution (preview) › LOB (lines of business) deployment settings <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-resolution" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Level of automation per line of business: autonomous reply, draft for review, shadow mode or disabled</strong><br><small class="controls__note">Documented on the case resolution page; the roadmap item describes this level for email resolution. Shadow mode is a preview feature.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Case settings › Case Management Agent › Case resolution › Level of automation per line of business <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/set-up-case-resolution-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first two rows are on the Email resolution page; the third is the case resolution page's per-line-of-business automation setting. The roadmap item describes an automation level for each line of business, but the Email resolution page itself lists only the **Deployment status** per line of business, so confirm how the two interact before relying on the third row for email resolution.

At the time of writing (November 2026) Microsoft Learn documents no API operation for these three settings. The Representative Copilot Setting table reference lists a column msdyn_emailresolutionagentenabled (display name "Is Email Management Agent Enabled"), but no page says it backs the **Turn on email resolution** toggle, so confirm that before scripting against it. Azure budgets for the pay-as-you-go plan are the spend control and sit outside this table.

## Open questions

- What Copilot Credit rate does an email resolution run consume, and is an email that ends in a case billed differently? Watch the Copilot Studio billing rates page and the Dynamics 365 billing page.
- Which parts are generally available? The roadmap says Launched with General Availability and Preview phases, while the Learn page is headed preview.
- Does the **Level of automation per line of business** setting on the case resolution page govern email resolution, or only the **Deployment status** on the Email resolution page?
- Is there a supported API for the **Turn on email resolution** toggle, and does the msdyn_emailresolutionagentenabled column back it?
- Where are autonomously sent replies recorded for audit, and where does the data movement prerequisite send email content? Watch the Learn page and Message center.

<!-- rationale
risk: Medium. Once enabled, the agent can send replies to customers without a representative reviewing them, but an administrator has to turn it on and the roadmap describes a draft-for-review level per line of business.
cost: Variable. The Learn page lists a Power Platform pay-as-you-go plan with an Azure subscription as a prerequisite, billed in Copilot Credits; a rate specific to email resolution is not yet published.
impact: Medium. Customers who email an enabled line of business get automated replies, and service representatives receive a case, with the email attached, when the agent cannot resolve the issue.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls: no API operation; Open questions / absence: Microsoft documents no API operation for enabling email resolution. | Found: Update: PATCH /msdyn_agentcopilotsettings(msdyn_agentcopilotsettingid) Writable columns/attributes: msdyn_emailresolutionagentenabled DisplayName: Is Email Management Agent Enabled Type: Boolean | Fix: Replace the blanket API absence with: 'Dataverse documents PATCH /msdyn_agentcopilotsettings(msdyn_agentcopilotsettingid), with the writable Boolean msdyn_emailresolutionagentenabled (Is Email Management Agent Enabled). The reference does not explicitly map it to the UI toggle or document application-user selection.' Use that call and reference for controls[0].api, name the Boolean in its note, and retain only the narrower UI-mapping question. | Source: https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_agentcopilotsetting
- [contradicted, blocker] controls[2].api; Governance controls: no API operation / absence: Microsoft documents no API operation for the case-resolution automation level per line of business. | Found: Update: PATCH /msdyn_intentfamilies(msdyn_intentfamilyid) msdyn_CPAAutomationLevel: CPA Automation Level for the Line of Business 0 Disabled; 1 Require agent confirmation; 2 Full automation; 3 Shadow | Fix: Set controls[2].api to kind 'rest', call 'PATCH /msdyn_intentfamilies(msdyn_intentfamilyid)', docs 'https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_intentfamily'. State in the note: 'The request body sets msdyn_CPAAutomationLevel: 0 Disabled, 1 Require agent confirmation, 2 Full automation, 3 Shadow.' Add that reference to sources. Remove this setting from the blanket API-absence sentence; do not claim that this proves applicability to email resolution. | Source: https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_intentfamily
- [unsupported, blocker] Governance guidance: At rollout, second bullet / applicability: Setting the third row's case-resolution automation level to a reviewed level controls autonomous email resolution. | Found: Searched: 'Case Management Agent email resolution Level of automation per line'. Read configure-email-resolution, set-up-case-resolution-agent and case-management-global-settings: no passage explicitly connects this case-resolution setting to the new email-resolution workflow. | Fix: Replace the rollout bullet with 'Enable one line of business first through its deployment status (second row).' Remove the instruction to set email resolution through the third row. Retain the roadmap's statement that automation levels are planned and the existing question about how the two settings interact.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; controls[1].note; Governance controls table / admin-path: The LOB deployment settings are on Copilot Service admin center > Email settings > Email resolution (preview) > LOB (lines of business) deployment settings. | Found: In the LOB (lines of business) deployment settings section, select the checkbox next to a category for which you want to edit the deployment settings. The Configure LOB (lines of business) deployment settings pane appears | Fix: The pre-check's missing words are present; the path is real but stops at the section. Extend it to 'Email settings > Email resolution (preview) > LOB (lines of business) deployment settings > category > Configure LOB (lines of business) deployment settings > Deployment status'. The cited page documents LOB (lines of business) and Deployment status in that pane. | Source: https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-resolution
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Customer support > Case settings > Case Management Agent > Case resolution > Level of automation per line of business reaches the case-resolution automation settings. | Found: Select Manage for Case Management Agent in Case settings. Select Manage for Case resolution. In Level of automation per line of business, the lines of business you configured for Customer Intent Agent appear. Select the required line of business and then select Edit. | Fix: Customer support is confirmed by the already-cited https://learn.microsoft.com/dynamics365/customer-service/administer/case-management-global-settings ('Select Case settings in Customer support'). Complete the existing route as 'Customer support > Case settings > Case Management Agent > Case resolution > Level of automation per line of business > line of business > Edit > Settings > Level of automation'. Keep its description limited to case resolution. | Source: https://learn.microsoft.com/dynamics365/customer-service/administer/set-up-case-resolution-agent
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The governance checklist names controls that are not represented in the controls table. | Found: Checklist: 'Decide the single reply language and whether to use the Copilot-recommended email template'; 'agree an Azure Cost Management budget and alert owner'. Table: email enablement/application user, LOB deployment, case-resolution automation. | Fix: The checklist's language setting, Copilot-recommended-template setting and Azure budget/alert controls have no table rows. Remove those configuration instructions from the checklist, leaving their existing explanatory coverage in Risk assessment and Cost and licensing; no additional rows are requested.
-->
