---
title: "Dynamics 365 Customer Service: AI email classification by category and subcategory"
slug: "dynamics-365-customer-service-copilot-and-ai-innovation-classify-emails-by-category-and-su"
roadmapId: 576775
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "Customer Service admins can define a category taxonomy and have AI label inbound emails, so routing and case creation can act on the label. Opt-in; pay-as-you-go billing is a prerequisite."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn lists pay-as-you-go billing for the environment as a prerequisite. A rate or meter specific to email classification is not yet published."
audiences: ["service-owner","finops","change-adoption"]
tags: ["email-classification","customer-service","case-management-agent","dynamics-365","pay-as-you-go","ai"]
sources:
  - title: "Configure email classification in Customer Service"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification"
    kind: "learn"
  - title: "Use the email classification custom action"
    url: "https://learn.microsoft.com/dynamics365/customer-service/develop/use-email-classification-custom-action"
    kind: "learn"
  - title: "emailclassificationcategory (msdyn_emailclassificationcategory) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_emailclassificationcategory"
    kind: "docs"
  - title: "Microsoft Copilot pay-as-you-go service overview"
    url: "https://learn.microsoft.com/copilot/plan/pay-as-you-go-overview"
    kind: "learn"
  - title: "Meters for Microsoft Copilot pay-as-you-go services"
    url: "https://learn.microsoft.com/copilot/plan/pay-as-you-go-meters"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576775"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576775"
    kind: "roadmap"
videos: []
related: ["dynamics-365-customer-service-copilot-and-ai-innovation-resolve-customer-emails-autonomous"]
controls:
  - governs: "Whether email classification is turned on"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Email settings > Email classification > Manage > Enable feature > Turn on email classification"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification"
    api: null
    note: "Requires the System Administrator or CSR Manager security role. Pay-as-you-go billing must be enabled."
  - governs: "The category and subcategory taxonomy AI assigns"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Email settings > Email classification > Manage > Define taxonomy"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification"
    api:
      kind: "rest"
      call: "POST /msdyn_emailclassificationcategories"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_emailclassificationcategory"
    note: "The API creates a category record in the Dataverse table; the table reference lists a parent category lookup."
  - governs: "Which inbound emails are evaluated"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Email settings > Email classification > Manage > Choose which emails to categorize > Manage rule"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification"
    api: null
    note: "One condition with several clauses; an email must meet all clauses to be classified."
  - governs: "Whether your own automation, not arrival, triggers classification"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Email settings > Email classification > Manage > Choose when to categorize emails > In your own customization using API"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification"
    api: null
    note: "Select this option in the admin app before configuring custom automation; the msdyn_EmailClassificationCustomAction action classifies an existing email record."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-16T19:08:55"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: admin-opt-in email classification in Customer Service, with pay-as-you-go billing as a prerequisite."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 87 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected: the custom-action control row no longer lists the action as an API for the timing option; governance checklist limited to controls in the table, with simulation and downstream-rule testing moved to Risk assessment."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 91 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 91
  confirmed: 91
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9dcb3643e3f7b17ade0bda80abfbe085"
---

## What's changing

Dynamics 365 Customer Service gains email classification: administrators define categories and subcategories, and AI assigns each qualifying inbound email to one of them. The roadmap item says the AI reads the email subject and body and stores the result on the email activity record; Learn says it analyses the content of the email. Case Management Agent, automatic record creation rules, Power Automate flows and reports can then use the value.

Learn's configuration page describes the setup in five steps: define the taxonomy, set scope conditions, choose when emails are classified and turn the feature on, run a simulation, and use the category downstream. It is configured in the Copilot Service admin center app under **Email settings**. The taxonomy needs at least two categories, up to 20 top-level categories, up to 10 subcategories at each level and up to four levels.

The roadmap item describes scope conditions such as mailboxes, sender domains and languages, and says classification runs through the Case Management Agent flow. The Learn configuration page gives mailboxes and departments as examples and does not mention Case Management Agent. The roadmap item also says an administrator can disable classification to stop processing new emails; the Learn page documents the **Turn on email classification** option.

The roadmap record lists the item as Launched, General Availability, with a target of August CY2026, for Worldwide (Standard Multi-Tenant) on the web.

## Why it matters

Email classification lets a service team decide what happens to an email before a case exists. Learn gives the example of excluding emails classified as **Marketing** from automatic case creation, and of using categories in routing rules. That can cut unwanted cases and manual triage, but it also means the quality of your taxonomy decides which emails become work.

Nothing in the sources says classification starts by itself: Learn presents turning it on as an administrator step, so if nobody acts, no source says existing email handling changes. The decision for a service owner is whether to turn it on, who approves the taxonomy, and how the extra AI usage is billed.

## Risk assessment

**Data exposure**
- Email subject and body are analysed by AI, according to the roadmap item. The custom action page lists "the required Copilot, AI agent, and cross-geography permissions" as a prerequisite, so confirm which of these your environment has enabled.
- The assigned category is stored on the email record, and simulation results download as an Excel workbook that includes predicted categories and reasons.

**Security & identity**
- Configuration needs the **System Administrator** or **CSR Manager** security role. The custom action requires a user who can read and update the email record and read the classification configuration.

**Autonomy & actions**
- Learn states that classification always assigns one of the configured categories, even if the email does not clearly match; with only two categories, every email is one of them. If a category is used to exclude emails from automatic case creation, a genuine request placed in an excluded category creates no case. Add a catch-all category and test with a simulation first.
- Routing rules, automatic record creation and update rules, and case creation logic can reference the category, so check each of them before changing the taxonomy, and sample the emails a category excludes from case creation for misclassification.
- Test with a simulation before turning classification on, and rerun it after any change to categories or descriptions. Learn describes a simulation that uses up to 50 historical emails in an Excel file, or organisation records, and shows the predicted category and reason for each.

**Change & support**
- Learn warns that calling the custom action on an email that built-in classification has already processed can increase AI consumption, overwrite results and make downstream processes run more than once.
- Service representatives may be able to change an assigned category, depending on configuration; Learn describes a form component that lets them do so and give feedback.

## Cost and licensing

Learn's configuration page lists **pay-as-you-go billing is enabled for your environment** as a prerequisite, and the custom action page lists the same prerequisite. The Microsoft Copilot pay-as-you-go overview says pay-as-you-go billing is disabled by default and that a Global Administrator or subscription owner can enable or disable features in the Microsoft 365 admin center.

The configuration page says email classification "uses AI resources" and uses that as the reason to scope which emails are evaluated, so scope conditions are the lever that limits usage. A rate or meter specific to email classification is not yet published. The pay-as-you-go overview and meters pages describe Microsoft Copilot Chat and SharePoint agents, and do not mention email classification, so do not apply their $0.01-per-message meter to this feature without confirmation.

Other costs are administrator time for taxonomy design and simulation, and the Power Apps form change needed to show the category to service representatives.

## Scope

- **Who configures it:** users with the **System Administrator** or **CSR Manager** security role, in the Copilot Service admin center app.
- **Who is affected:** the roadmap item says it is enabled by admins, makers or marketers for end users; service representatives see the category on the email form once the component is added.
- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web.
- **Prerequisites:** pay-as-you-go billing enabled for the environment, and at least two active categories.
- **Rollout:** the roadmap record lists Launched with an August CY2026 target. No Message Center post was supplied for this item.

## Governance guidance

### Before rollout
- Draft the taxonomy with a catch-all category such as "Uncategorized", and write distinct names and descriptions for each branch, as the Learn page advises.
- Decide which emails to classify (specific mailboxes or departments) so AI is not run on every inbound message.

### At rollout
- Set the scope condition, choose **As soon as they arrive** or the custom API option, then turn on email classification.
- Add the **Email category (AI)** field and the **EmailClassificationControl** component to the email form if representatives should see or change categories.

### After rollout
- Rescope the condition under **Choose which emails to categorize** if AI usage is higher than planned.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether email classification is turned on</strong><br><small>Environment</small><br><small class="controls__note">Requires the System Administrator or CSR Manager security role. Pay-as-you-go billing must be enabled.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Email settings › Email classification › Manage › Enable feature › Turn on email classification <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>The category and subcategory taxonomy AI assigns</strong><br><small>Environment</small><br><small class="controls__note">The API creates a category record in the Dataverse table; the table reference lists a parent category lookup.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Email settings › Email classification › Manage › Define taxonomy <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /msdyn_emailclassificationcategories</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_emailclassificationcategory" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which inbound emails are evaluated</strong><br><small>Environment</small><br><small class="controls__note">One condition with several clauses; an email must meet all clauses to be classified.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Email settings › Email classification › Manage › Choose which emails to categorize › Manage rule <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether your own automation, not arrival, triggers classification</strong><br><small>Environment</small><br><small class="controls__note">Select this option in the admin app before configuring custom automation; the msdyn_EmailClassificationCustomAction action classifies an existing email record.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Email settings › Email classification › Manage › Choose when to categorize emails › In your own customization using API <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Configuration needs the **System Administrator** or **CSR Manager** security role. The enable option and the scope rule are set in the admin app; Microsoft Learn documents no API for those two settings at the time of writing (November 2026). The taxonomy rows are Dataverse records, so the table reference documents create and update operations for them.

The custom action is for organisations that choose **In your own customization using API**; Learn tells you not to call it for emails the built-in classification has already processed. The Power Apps form change is a maker-side step and is not a control over whether classification runs.

## Open questions

- What meter and rate apply to email classification under pay-as-you-go billing? Watch the Customer Service billing pages and Message center.
- Is there an API for the **Turn on email classification** option and the scope rule, so enablement can be scripted? Watch the Dataverse table reference.
- Where is email content processed, and what do the "required Copilot, AI agent, and cross-geography permissions" cover for this feature? Watch the configure email classification page.
- How does the roadmap's Case Management Agent flow relate to the built-in classification that Learn describes? Watch the Case Management Agent setup pages.

<!-- rationale
risk: Medium. Learn says classification always assigns one of the configured categories, even to an unrelated email, and categories can drive case creation and routing, so a weak taxonomy can misroute or suppress cases.
cost: Variable. Learn lists pay-as-you-go billing as a prerequisite and warns that repeat classification can increase AI consumption; a rate or meter specific to email classification is not yet published.
impact: Medium. Customer Service administrators set it up, and service representatives and the routing and case-creation rules that use the category are the people who notice its results.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The taxonomy is at Copilot Service admin center > Email settings > Email classification > Manage > Define taxonomy. | Found: In Copilot Service admin center, go to Email settings > Email classification, and then select Manage. In Define taxonomy, select + Add. | Fix: Extend controls[1].ui.path and its rendered table path to 'Email settings > Email classification > Manage > Define taxonomy > + Add', as documented at https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification. | Source: https://learn.microsoft.com/dynamics365/customer-service/administer/configure-email-classification
-->
