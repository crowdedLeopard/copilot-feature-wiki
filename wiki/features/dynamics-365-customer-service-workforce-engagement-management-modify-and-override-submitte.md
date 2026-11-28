---
title: "Dynamics 365 Customer Service: supervisors can edit and override submitted quality evaluations"
slug: "dynamics-365-customer-service-workforce-engagement-management-modify-and-override-submitte"
roadmapId: 578070
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "Quality Managers can reopen a completed quality evaluation, change the answers and resubmit it. Check who holds the roles that allow this and what edits cost in Copilot credits. The record says it is launched."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Quality evaluation lists setting up Microsoft Copilot credits as a prerequisite, and Dynamics 365 documents consumption-based billing for selected Copilot and agent capabilities. No rate for editing a submitted evaluation is published."
audiences: ["service-owner","power-platform-admin","compliance"]
tags: ["customer-service","dynamics-365","quality-assurance","human-in-the-loop","security-roles","auditing","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 578070"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578070"
    kind: "roadmap"
  - title: "Use evaluations"
    url: "https://learn.microsoft.com/dynamics365/contact-center/use/use-evaluations"
    kind: "learn"
  - title: "Manage quality evaluation"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/manage-quality-evaluation-agent"
    kind: "learn"
  - title: "Evaluation (msdyn_Evaluation) table/entity reference (Microsoft Dynamics 365)"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_evaluation"
    kind: "learn"
  - title: "Evaluation Global Config (msdyn_EvaluationGlobalConfig) table/entity reference (Microsoft Dynamics 365)"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_evaluationglobalconfig"
    kind: "learn"
  - title: "Manage consumption-based billing and capacity"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go"
    kind: "learn"
  - title: "Agent usage estimator"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-usage-estimator"
    kind: "learn"
  - title: "Assign a security role to a user"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Work with Microsoft Entra ID group teams"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
videos: []
related: ["security-roles","auditing","copilot-credits"]
controls:
  - governs: "Which users can edit and override submitted evaluations (security role assignment)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "rest"
      call: "POST /api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "Editing needs Quality Admin, Quality Manager, or the Override submitted evaluation privilege on another role. The API page documents this call for a Microsoft Entra ID group user; the body sets @odata.id to the role."
  - governs: "Whether evaluators can regenerate evaluation summaries after modifying responses"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer Support > Quality management > Quality evaluation > Manage > Evaluation summary > Regenerate evaluation summary"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/manage-quality-evaluation-agent"
    api:
      kind: "rest"
      call: "PATCH /msdyn_evaluationglobalconfigs(<msdyn_evaluationglobalconfigid>)"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_evaluationglobalconfig"
    note: "Learn describes the setting as showing or hiding the Generate Summary option; it does not say whether it stops the automatic regeneration after an edit. The request body sets msdyn_enablesummaryregeneration to true or false."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-10-23T22:46:06"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: documents the Edit action on submitted evaluations, who can use it, and the gaps in cost and audit documentation."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected: the Regenerate evaluation summary row now lists the documented API call; the impact rationale and the unsupported 'no separate switch' sentence were removed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 59
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "d3c51d9eeb2df70b01a6672edfc0afdd"
---

## What's changing

Quality evaluation in Dynamics 365 Customer Service lets a supervisor edit an evaluation after it has been submitted. The roadmap item says completed evaluations stay read-only by default to preserve integrity, and that a supervisor can start an **Edit** action when a result is wrong, such as an incorrect AI prediction or a manual error. It says the capability covers AI-assisted, AI agent-generated and manual evaluations.

Microsoft Learn documents the steps. In the site map of Copilot Service workspace, go to **Evaluations** in **Service**, open an evaluation with the status **Completed** (it opens read-only), select **Edit**, update the answers and select **Submit**. Learn says changes do not take effect until you submit, and that evaluations in **In progress** status cannot be edited. The roadmap describes editing evaluations that are completed or expired; Learn's prerequisite is that the evaluation "must be submitted (completed)", and its **Expired** state says the evaluator can no longer open the evaluation.

When an evaluator changes answers, Learn says the system regenerates the evaluation summary on submission and skips regeneration if nothing changed. The roadmap says changes are tracked through audit signals, including who edited and when, and that overridden evaluations are flagged. Learn's Evaluation table reference has a **Submission Overridden** column described as indicating whether the evaluation submission has been overridden. The record gives status Launched, target date July CY2026, General Availability, Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

Evaluation scores are the record a service owner uses to judge interaction quality, and the roadmap says overrides are meant to make the stored result the final, validated view for reporting and compliance reviews. That makes the override right a control over a business record: whoever holds it can change a score produced by an AI agent or by another evaluator.

Microsoft has not stated whether Edit is on by default, so no source says existing behaviour changes. Learn names the Quality Admin and Quality Manager roles as sufficient, so check who holds them before assuming nobody will use the action. The cost effect is small to judge until Microsoft publishes a rate for edits.

## Risk assessment

**Data exposure**
- The edit changes answers on evaluations that already exist; neither the roadmap nor Learn describes a new data source for it.
- Quality evaluation as a whole asks customers to consent to potential data movement across regions, because service calls may be routed outside the regional boundary when local capacity is unavailable. Confirm that consent is in place for the environment (Manage quality evaluation page).

**Security & identity**
- Learn lets users edit a submitted evaluation if they hold the Quality Admin or Quality Manager role, or the Override submitted evaluation privilege (prvOverrideSubmittedEval) on the Evaluation (msdyn_evaluation) table. A custom role given that privilege can override too. Control: the security role assignment row below.
- The roadmap says overrides are tracked by audit signals showing who edited and when. Learn's Evaluation table reference documents the Submission Overridden flag; Microsoft Learn documents no audit event names for overrides at the time of writing (November 2026; see Open questions).

**Autonomy & actions**
- A person's edit replaces an AI-assisted or AI agent result, and on submission the system regenerates the summary when answers changed. Control: the Regenerate evaluation summary setting, though Learn does not say whether it governs the automatic regeneration after an edit.

**Change & support**
- Learn states that quality evaluation is not intended to be used to make decisions that affect an employee's employment, including compensation, rewards, seniority or other rights. Edited scores are easier to treat as final, so brief supervisors on that limit.
- Learn and the roadmap differ on expired evaluations; expect support questions about why Edit is disabled on some records.

## Cost and licensing

Quality evaluation lists setting up Microsoft Copilot credits among its prerequisites (Manage quality evaluation). The Dynamics 365 billing page says selected Copilot and agent capabilities in Dynamics 365 use consumption-based billing, charging per use, with either prepaid capacity or pay-as-you-go. Microsoft's agent usage estimator lists the Quality Evaluation Agent among the Dynamics 365 Service agents it forecasts credit consumption for.

Learn says that when an evaluator changes answers the summary is regenerated, and that regeneration is skipped when nothing changed "to optimize performance and cost". It does not state a credit rate for editing a submitted evaluation or for regenerating a summary, and the Use evaluations page lists no licence beyond the prerequisites. Treat edit-driven regeneration as a possible source of extra consumption until Microsoft publishes a rate. Indirect cost is supervisor time to review and correct evaluations.

## Scope

The record lists Worldwide (Standard Multi-Tenant), the Web platform and General Availability for Dynamics 365 Customer Service; it names no other cloud. It describes the capability as enabled by admins, makers or marketers for end users.

Learn's prerequisites for editing are a submitted (completed) evaluation and the Quality Admin or Quality Manager role, or the Override submitted evaluation privilege added to a role. Quality evaluation itself needs the Quality Manager, Quality Evaluator and Quality Administrator roles assigned, Copilot credits set up, **Enable AI agents** turned on for the Dynamics 365 environment in Power Platform admin center, and consent for potential data movement across regions.

## Governance guidance

### Before rollout
- Review which users hold the Quality Admin and Quality Manager roles in each Dynamics 365 environment, and which custom roles carry the Override submitted evaluation privilege (see the security role rows).
- Decide who should be able to rewrite recorded scores, and remove the roles or privilege from users who only need to view or complete evaluations.
- Tell the budget owner that quality evaluation depends on Copilot credits and that Microsoft has not published a rate for edits.
- Brief supervisors on Learn's statement that quality evaluation is not meant to drive employment decisions.

### At rollout
- Test an edit on a completed AI-assisted, AI agent and manual evaluation and confirm that the summary regenerates after you submit.
- Decide whether to keep Regenerate evaluation summary turned on in the Quality evaluation settings (see the controls table).
- Explain to supervisors that Edit is disabled for In progress evaluations and that changes apply only after Submit.

### After rollout
- Review evaluations whose Submission Overridden value shows an override, and compare them with the reason the supervisor gave.
- Re-check role holders after team changes.
- Watch the Use evaluations page and Message center for audit event details and a credit rate for edits.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can edit and override submitted evaluations (security role assignment)</strong><br><small>Environment</small><br><small class="controls__note">Editing needs Quality Admin, Quality Manager, or the Override submitted evaluation privilege on another role. The API page documents this call for a Microsoft Entra ID group user; the body sets @odata.id to the role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether evaluators can regenerate evaluation summaries after modifying responses</strong><br><small class="controls__note">Learn describes the setting as showing or hiding the Generate Summary option; it does not say whether it stops the automatic regeneration after an edit. The request body sets msdyn_enablesummaryregeneration to true or false.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer Support › Quality management › Quality evaluation › Manage › Evaluation summary › Regenerate evaluation summary <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/manage-quality-evaluation-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /msdyn_evaluationglobalconfigs(&lt;msdyn_evaluationglobalconfigid&gt;)</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_evaluationglobalconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The role is the control that decides who can edit: Learn names the Quality Admin and Quality Manager roles, or the Override submitted evaluation privilege added to another role. Role assignment is made per environment in Power Platform admin center.

The Regenerate evaluation summary setting is documented as controlling whether evaluators see the **Generate Summary** option and can regenerate summaries for completed evaluations. Learn does not say whether turning it off also stops the automatic regeneration after an edit.

## Open questions

- Can expired evaluations be edited? The roadmap says completed or expired, while Learn's prerequisite is a submitted (completed) evaluation. Watch the Use evaluations page.
- Which audit events record an override, and where can an administrator see who edited and when? The roadmap describes audit signals; Microsoft Learn documents only the Submission Overridden flag at the time of writing (November 2026).
- Does the Regenerate evaluation summary setting also govern the automatic summary regeneration after an edit?
- How many Copilot credits does an edit, and the summary regeneration it triggers, consume?
- Is Edit available by default to Quality Manager role holders on arrival, or does an administrator step enable it? Watch Message center.

<!-- rationale
risk: Medium. Anyone with the Quality Admin or Quality Manager role, or the override privilege, can rewrite a recorded score, so role assignment is the control that matters.
cost: Variable. Quality evaluation needs Copilot credits set up and Dynamics 365 agents bill by consumption; Learn publishes no rate specific to editing a submitted evaluation.
impact: Low. Supervisors and quality administrators use the Edit action; edited scores can change what reports show.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls; Governance guidance: Before rollout / admin-path: Power Platform admin center > Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles reaches user role assignment. | Found: select Manage. ... select Environments, and then select an environment from the list. Select Settings. Select Users + permissions, and then select Users. On the Users page select a user, and then select Manage security roles. | Fix: Keep the path. Append to controls[0].note and the rendered note: 'This user screen manages only direct role assignments; roles inherited through group-team membership are managed separately.' The qualification is documented at https://learn.microsoft.com/power-platform/admin/assign-security-roles. | Source: https://learn.microsoft.com/power-platform/admin/assign-security-roles
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist instructs readers to monitor Submission Overridden evaluations, but the controls table has no corresponding row. | Found: Review evaluations whose Submission Overridden value shows an override ... Controls rows: Which users can edit and override submitted evaluations (security role assignment); Whether evaluators can regenerate evaluation summaries after modifying responses. | Fix: The 'Review evaluations whose Submission Overridden value shows an override' checklist step has no corresponding control row. Remove that checklist bullet; retain the verified description of the Submission Overridden column in What's changing and Risk assessment.
-->
