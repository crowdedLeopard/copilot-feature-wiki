---
title: "Dynamics 365 Customer Service: governance policies check outgoing emails before they are sent"
slug: "dynamics-365-customer-service-workforce-engagement-management-enforce-governance-policy"
roadmapId: 578067
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "Customer Service governance policies check emails written by representatives or autonomous AI and can flag, warn or block them. An administrator turns governance on and sets up Copilot credits; no action is forced."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn lists Microsoft Copilot credits setup as a prerequisite and says prompt generation consumes Copilot credits. The governance pages name no separate licence, and no credit rate for email checks is yet published."
audiences: ["service-owner","compliance","finops","power-platform-admin"]
tags: ["customer-service","dynamics-365","governance","guardrails","policy","autonomous-agents","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 578067"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578067"
    kind: "roadmap"
  - title: "Configure governance policies"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-governance-policies"
    kind: "learn"
  - title: "Use governance policies"
    url: "https://learn.microsoft.com/dynamics365/customer-service/use/use-governance-policies"
    kind: "learn"
  - title: "Add governance validation to a custom email Send command"
    url: "https://learn.microsoft.com/dynamics365/customer-service/develop/configure-governance-email-send"
    kind: "learn"
  - title: "Overview of Quality Management"
    url: "https://learn.microsoft.com/dynamics365/contact-center/use/overview-quality-management"
    kind: "learn"
  - title: "Manage consumption-based billing and capacity"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go"
    kind: "learn"
  - title: "Whether governance is turned on for the environment (REST API)"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_governanceagent_status"
    kind: "learn"
  - title: "msdyn_guardrail_rule table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_guardrail_rule"
    kind: "learn"
  - title: "msdyn_guardrail_rule_version table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_guardrail_rule_version"
    kind: "learn"
videos: []
related: ["copilot-credits","security-roles","dynamics-365-customer-service-manage-intraday-operations-with-ai-agent"]
controls:
  - governs: "Whether governance is turned on for the environment"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer Support > Quality management > Governance > Manage > Governance"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-governance-policies"
    api:
      kind: "rest"
      call: "PATCH /msdyn_governanceagent_statuses(msdyn_governanceagent_statusid)"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_governanceagent_status"
    note: "Needs the CSR Manager role. The request body would set msdyn_isenabled, which the reference describes as whether the governance agent is enabled; Learn does not tie the toggle to it."
  - governs: "Creation of governance policy records"
    scope: "environment"
    ui:
      surface: "Copilot Service workspace"
      path: "Service > Governance > New policy > Add a policy > Content to check > How strictly to enforce"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/use/use-governance-policies"
    api:
      kind: "rest"
      call: "POST /msdyn_guardrail_rules"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_guardrail_rule"
    note: "The request body sets msdyn_name to name the new policy record. This Create operation does not document configuring content checks or enforcement strictness; use the documented UI for those settings."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-23T22:46:02"
changes:
  - date: "2026-11-19"
    note: "New briefing: governance policies for outgoing Customer Service email, with the toggle, policy settings, Copilot credits prerequisite and a Block-versus-override discrepancy."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: the policy-creation API row now covers only creating the policy record, the policy path includes the Add a policy dialog, and the notification checklist item follows Microsoft's wording."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 79
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "632a56e4f6d121ed7140ab4cf8b84c77"
---

## What's changing

Governance policies in Dynamics 365 Customer Service check each outgoing email against policies an administrator defines. Microsoft Learn says the system checks "each email drafted by a service representative or an AI agent against active policies", and a policy can flag, warn about or block a violating email. Governance sits under Quality management and is powered by the Quality Evaluation Agent.

A policy is set up in Copilot Service workspace under **Service** > **Governance**. Its settings include who wrote the email (**Customer service representatives** or **Autonomous AI**), how strictly to enforce (**Flag noncompliant content**, **Warn noncompliant content** or **Block noncompliant content**), whether to evaluate attached files (.docx, .pdf and .txt, text only), and a **Policy strictness** of Low, Medium (the default), High or Very High. Default system policies include **Email Template Adherence**, **Groundedness** and **Profanity**. Administrators can run a simulation on up to 30 email records or an Excel upload, and review violations on the **Policy flags/blocks log** tab.

The roadmap item is Launched, with a preview date of May CY2026, a target of June CY2026, and release phases General Availability and Preview. It lists Worldwide (Standard Multi-Tenant) and the Web platform. The roadmap describes enforcement across "email engagement channels"; the Learn page says governance policies support the email channel. Learn's overview page says governance applies only to Dynamics 365 Customer Service.

## Why it matters

This gives a Customer Service owner a pre-send control over what AI agents and representatives email to customers. Where compliance rules cover prohibited content or sensitive topics, a **Block** policy turns those rules into a check that runs on every matching email, and the detection log gives supervisors a record to review.

Learn has an administrator turn governance on and meet the prerequisites first, so nothing here changes for a tenant that does nothing. The decisions that remain are how strict to be, which policies to publish, and who carries the Copilot credits cost. Microsoft's own page warns that the feature must not be used to make employment decisions about representatives and that customers must notify and, where the law requires, obtain consent from the people whose communications are monitored.

## Risk assessment

**Data exposure**
- Emails written by representatives or by autonomous AI, and optionally their attachments, are evaluated against policy prompts. Learn lists consent for "potential data movement across regions" as a prerequisite; decide whether your tenant can give it before enabling.
- Violation reasoning and logs appear in English, even where a policy name is configured in other languages. Treat the detection log as a store of email-derived content and restrict who reads it.

**Security & identity**
- Administrators need the **CSR Manager** role. Custom administrator roles need Read, Create, Write, Delete, Append, Appendto and Assign at Global access level on six governance tables, so grant them narrowly.
- Custom representative roles need Read at Global access level on the `msdyn_governanceagent_status` table, or the representative's send path may not work as configured.

**Autonomy & actions**
- A **Block** policy stops the outgoing email and a **Warn** policy lets the sender proceed after a warning. Policy checks run on AI-drafted email, so a badly written policy can stop an autonomous agent's replies. Start with **Flag** or **Warn** and use the simulation before publishing **Block**.
- Policy strictness is an AI judgement, not a rule match. Learn says Very High flags minor deviations, so expect false positives and plan a review process.

**Change & support**
- If you replace the default **Send** button with a custom command, Learn says the built-in governance validation does not run automatically, so emails sent through that command can skip policies until the code calls `validateForSend`.
- Customised Customer Service workspace apps may not show **Governance** in the site map; the Learn page gives manual steps in Power Apps.

## Cost and licensing

Learn's governance prerequisites include "Set up Microsoft Copilot credits", and the use page says "Each prompt generation consumes Microsoft Copilot credits." Prompt generation is where you review and refine a policy's instructions.

The Dynamics 365 billing page says that selected Copilot and agent capabilities use consumption-based billing, with Copilot Credits as the meter, and that both prepaid capacity and pay-as-you-go can be used on a Dynamics 365 environment, with prepaid capacity consumed first. The governance pages read name no licence for governance and give no credit rate for evaluating an email at send time. Budget for the rate once Microsoft publishes it, and see [Copilot Credits](/concepts/copilot-credits/) for the meter.

Indirect costs are supervisor time for reviewing the detection log, testing with simulations and tuning policies.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform, and says the feature is enabled by admins, makers or marketers for end users. Learn says governance applies only to Dynamics 365 Customer Service and supports the email channel.

Prerequisites on the Learn page: the **CSR Manager** role for administrators, the **Customer Service Representative** role for representatives, Copilot credits set up, consent for potential cross-region data movement, and AI agents enabled for the Dynamics 365 environment in Power Platform admin center. Policies can target emails written by representatives or by autonomous AI, and conditions can narrow a policy to a subset of emails; with no conditions, the system evaluates all emails in the check.

## Governance guidance

### Before rollout
- Note the **CSR Manager** role holders and the table privileges for custom administrator and representative roles that the Learn page lists as prerequisites.
- Note that Microsoft Copilot credits must be set up for the environment (prepaid capacity or pay-as-you-go), and agree who owns the spend.
- Decide whether the organisation can provide consent for potential cross-region data movement, and confirm AI agents are enabled for the Dynamics 365 environment in Power Platform admin center.
- Agree with legal and HR how users are notified that communications may be monitored, as Microsoft requires; Microsoft also encourages informing service representatives.

### At rollout
- Turn on the governance toggle in Copilot Service admin center, then start with the default system policies on **Flag** or **Warn**.
- Run a simulation on sample emails before publishing any **Block** policy.
- Ask developers to confirm that every custom **Send** command calls `validateForSend` where needed.

### After rollout
- Review the **Policy flags/blocks log** regularly for repeated patterns and adjust policy descriptions to refine the prompts.
- Watch Copilot credits consumption after each round of prompt generation.
- Re-test policies when you change strictness, and move to **Block** only when false positives are acceptable.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether governance is turned on for the environment</strong><br><small>Environment</small><br><small class="controls__note">Needs the CSR Manager role. The request body would set msdyn_isenabled, which the reference describes as whether the governance agent is enabled; Learn does not tie the toggle to it.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer Support › Quality management › Governance › Manage › Governance <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/configure-governance-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /msdyn_governanceagent_statuses(msdyn_governanceagent_statusid)</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_governanceagent_status" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Creation of governance policy records</strong><br><small>Environment</small><br><small class="controls__note">The request body sets msdyn_name to name the new policy record. This Create operation does not document configuring content checks or enforcement strictness; use the documented UI for those settings.</small></td><td data-label="Admin UI"><strong>Copilot Service workspace</strong><br>Service › Governance › New policy › Add a policy › Content to check › How strictly to enforce <a href="https://learn.microsoft.com/dynamics365/customer-service/use/use-governance-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /msdyn_guardrail_rules</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_guardrail_rule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Enabling governance requires the **CSR Manager** role on the Learn page, and the toggle is on the **Governance** page in Copilot Service admin center. Policies are authored in Copilot Service workspace, a different app, so plan both sets of access.

The table rows list the Dataverse tables that Learn names in its prerequisites. Learn does not say which column holds a policy's enforcement level or strictness, and does not say that the toggle writes `msdyn_isenabled`; the reference describes that column as indicating whether the governance agent is enabled. Credits setup, cross-region consent and the Power Platform admin center AI agents setting are prerequisites with their own pages, linked from the Learn prerequisites.

A custom **Send** command bypasses built-in validation until it calls `validateForSend`; that is a developer task, not a toggle.

## Open questions

- Does a **Block** policy stop an email outright, or can the sender override it? The use page says Block "prevents the email from being sent until the policy violations are resolved", while the custom Send command page says the user can override a block and the override is recorded. Watch the Learn pages for a reconciled statement.
- What credit rate applies to evaluating an email at send time, as distinct from prompt generation? Watch the Dynamics 365 pay-as-you-go page and the Power Platform Licensing Guide.
- Which Customer Service licence, if any, is required beyond Copilot credits setup? Watch the configure governance policies page.
- Does the roadmap's mention of "email engagement channels" mean channels beyond email? Learn says the email channel is supported; watch the Learn page.
- What data crosses regions, and for which processing steps? Watch the Copilot cross-region data movement page referenced in the prerequisites.

<!-- rationale
risk: Medium. The checks read outgoing email content and can block or warn on it, but Learn has an administrator turn governance on, and cross-region data movement needs consent.
cost: Variable. Learn lists Microsoft Copilot credits setup as a prerequisite and says each prompt generation consumes Copilot credits; a rate for checking emails at send time is not yet published.
impact: Medium. Service representatives and supervisors who send email, and anyone running autonomous email agents, notice warnings or blocks once policies are published; other users do not.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance / controls-table consistency / consistency: The checklist directs readers to manage several controls that have no corresponding controls-table row. | Found: Checklist: role privileges, credits setup, cross-region consent, AI agents, simulation, custom Send validation, logs and consumption. Table: Whether governance is turned on for the environment; Creation of governance policy records. | Fix: Remove checklist instructions to take stock of role privileges, check credits setup, provide cross-region consent, enable AI agents, run simulations, check custom Send integration, review logs and monitor credits where no corresponding row exists. Retain their sourced explanatory prose; do not add control rows.
-->
