---
title: "Copilot Studio: service principal as owner of workflows"
slug: "microsoft-copilot-studio-service-principal-owner-for-workflows"
roadmapId: 580863
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans to let Copilot Studio workflows be owned by a service principal (a Microsoft Entra app registration) instead of a named user. Learn does not describe it yet; no admin action is stated. Target: December CY2026."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "The workflows overview says workflows consume Copilot Studio capacity for each action they execute. A licence, rate or charge specific to service principal ownership is not yet published."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["copilot-studio","copilot-harness","automation","entra-id","service-principals","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 580863"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580863"
    kind: "roadmap"
  - title: "Workflows overview (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview"
    kind: "learn"
  - title: "FAQ for workflows (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/faq-workflows"
    kind: "learn"
  - title: "Manage application users in the Power Platform admin center"
    url: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    kind: "learn"
  - title: "Create a Dataverse application user (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser"
    kind: "learn"
  - title: "Support for service principal owned flows"
    url: "https://learn.microsoft.com/power-automate/service-principal-support"
    kind: "learn"
videos: []
related: ["agent-identity","microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node","copilot-credits","security-roles","microsoft-copilot-studio-persistent-identity-for-copilot-studio-agents"]
controls:
  - governs: "Whether a service principal can be set as a workflow owner"
    scope: "tenant"
    ui: null
    api: null
    note: "No tenant or environment switch is documented at the time of writing (November 2026)."
  - governs: "Which Entra app registrations exist as application users in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Application users"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-application-users"
    api:
      kind: "power-platform-api"
      call: "POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/scopes/admin/environments/{environmentIdGuid}/addAppUser?api-version=2020-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser"
    note: "Existing control; Learn does not state that workflows use it. API is preview; the request body sets servicePrincipalAppId and the user is added as System Administrator."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T21:30:10"
changes:
  - date: "2026-11-20"
    note: "New briefing: roadmap plan for service principal ownership of Copilot Studio workflows; Learn does not describe it yet."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 64
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "5e20d3392b471d1de38df3ead42a77c5"
---

## What's changing

The roadmap item states that Copilot Studio workflows can be owned under a service principal (a Microsoft Entra app registration) instead of a named user account. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description.

Workflows are the automation experience in Copilot Studio that runs on the Microsoft Copilot harness. A workflow has a trigger and at least one action, and is built in a visual designer. The roadmap record gives one sentence on the change: it does not say how a service principal is chosen as owner, which connections it uses, or what happens to workflows that a user already owns.

The roadmap status is In development, with a target of December CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platform Web. The description says workflows "can now be" owned this way while the status is still In development, so treat the target date as a plan.

## Why it matters

Ownership decides which identity a workflow is tied to. The roadmap describes a move from a named user account to an app registration, which would separate a workflow from one person's account. Whether that is what administrators get, and what changes for workflows they already have, is not stated, so plan on no source saying existing behaviour changes.

Power Automate already documents service principal application users owning and running flows, and that is the closest guide to the idea. It is a separate product page: Learn does not state that Copilot Studio workflows follow the same model, so use it to frame questions and not as a description of this feature.

## Risk assessment

**Data exposure**
- A workflow reaches data through its actions, and Learn lists connectors to Microsoft 365 services, third-party services and custom connectors among them. Which identity those connectors use under a service principal owner is something to confirm before moving a workflow that reads sensitive sites or mailboxes.

**Security & identity**
- An app registration would own the workflow in place of a person. Confirm who administers that registration's credentials and who is accountable for what the workflow does, because the owner is no longer a named person.
- In Power Platform, an application user is unlicensed and is given the security roles selected for it (Power Platform admin center > Manage > Environments > environment > Settings > Users + permissions > Application users). Whether workflows use application users is something to confirm, and the roles it would need are not stated.

**Autonomy & actions**
- An enabled workflow's trigger starts new runs when it fires: on schedule, on a connector event, or when an agent calls it. A workflow with a non-human owner therefore needs its own inventory entry, because no person's account is a natural prompt to review it.

**Change & support**
- Once an environment's prepaid Copilot Studio capacity is fully consumed, new workflow runs are blocked until capacity is available; running workflows complete normally. Pay-as-you-go billing is the route Learn suggests to avoid interruption.

## Cost and licensing

The licence a user needs for this feature is not yet published. Learn's workflows overview says workflows consume Copilot Studio capacity for each action they execute, and the workflows FAQ notes that the harness uses usage-based billing, so using, building, testing and evaluating agents might consume Copilot Credits. The meter is therefore Copilot Studio capacity, and the unit is the action a workflow executes.

Use the Power Platform admin center > Licensing > Copilot Studio page to review the Agent flow actions used by each workflow. Learn says that once an environment's prepaid capacity is fully consumed, new workflow runs are blocked until capacity is available, and suggests pay-as-you-go billing to avoid interruption.

A rate or licence rule specific to service principal ownership is not yet published, so budget on the existing workflow meter and re-check when Learn documents the feature. See [Copilot Credits](/concepts/copilot-credits/) for the shared meter.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud, Web as the platform and General Availability as the release phase. Other clouds are not listed on the record.

Who can assign a service principal as owner, which roles that needs, and any prerequisite such as a service principal being present in the environment are not stated. Power Platform's documented way to give an app registration an identity in an environment is an application user, which Learn describes as unlicensed; Learn does not state that workflows use it.

Rollout mechanics for this feature are not stated: the roadmap gives a target month and no preview date.

## Governance guidance

### Before rollout
- Inventory the workflows on each Copilot Studio Workflows page, using the Enabled and Credit usage (last 30 days) columns to see which run and which consume capacity.
- List the Entra app registrations that already exist as application users in each environment (Power Platform admin center > Manage > Environments > environment > Settings > Users + permissions > Application users).
- Agree who will administer any app registration proposed as an owner, and which security roles it would need, before a maker asks for it.

### At rollout
- Watch Message center and the Workflows overview on Microsoft Learn for the first description of how a service principal is set as owner; the target is December CY2026 and is a plan.
- Try one low-risk workflow in a non-production environment, and confirm which identity its connections use before moving a workflow that touches sensitive data.
- Check that the capacity for each environment covers the new runs, because new workflow runs are blocked once prepaid capacity is consumed.

### After rollout
- Review application users and their security roles on the same Application users page, and deactivate those no workflow needs.
- Record the accountable person for each service-principal-owned workflow in your ownership register, since the owner is no longer a named user.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a service principal can be set as a workflow owner</strong><br><small>Tenant</small><br><small class="controls__note">No tenant or environment switch is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Entra app registrations exist as application users in an environment</strong><br><small>Environment</small><br><small class="controls__note">Existing control; Learn does not state that workflows use it. API is preview; the request body sets servicePrincipalAppId and the user is added as System Administrator.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Application users <a href="https://learn.microsoft.com/power-platform/admin/manage-application-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/scopes/admin/environments/{environmentIdGuid}/addAppUser?api-version=2020-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/create-dataverseapplicationuser" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No separate switch for service principal ownership of workflows is documented at the time of writing (November 2026), which is why the first row has no path or call. The second row is the existing Power Platform control for representing a service principal in an environment; Learn does not state that workflows use it, so it does not yet show that it governs this feature.

The application user page covers adding, editing roles for, deactivating and deleting application users in an environment. The create endpoint is documented in preview, and its page says callers must be Power Platform administrators or a Power Platform Service Principal application, and that it always adds the application user as a System Administrator, so review roles after creating one.

## Open questions

- Which identity does a workflow run under when a service principal owns it, and whose permissions do its connections use? Watch the Workflows overview on Microsoft Learn.
- Does a service principal need to exist as an application user in the environment, and with which security role? Watch Message center and the Power Platform admin center documentation.
- Is there an admin setting or API that limits who can assign a service principal as workflow owner? Watch the Workflows overview and the Power Platform admin documentation.
- Does the Copilot Studio capacity meter apply to service-principal-owned workflows unchanged, given that Power Automate documents licensing implications for service principal application users? Watch the Copilot Studio licensing pages.
- Is the option off until someone chooses it, and what happens to workflows that a user already owns? Watch Message center for a notice.

<!-- rationale
risk: Medium. Ownership would move from a named person to an Entra app registration, which changes whose identity a workflow is tied to; Microsoft Learn does not yet describe the controls or the default, so rated on today's behaviour continuing.
cost: Variable. Workflows consume Copilot Studio capacity for each action they execute, which is the meter; a rate or licence specific to service principal ownership is not yet published.
impact: Low. The people who notice are makers and administrators who own and maintain workflows; no source says end users see a change.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Change & support; Cost and licensing; Governance guidance: At rollout / cost: Exhausting an environment's prepaid Copilot Studio capacity blocks new workflow runs until capacity is available. | Found: This condition occurs when the allocation is used up and the experience can't continue through the tenant's available capacity or a pay-as-you-go billing plan. | Fix: Replace the blocking statement in Risk assessment and Cost and licensing with 'When the environment has no Copilot Credits available, new workflow runs are blocked until credits are available. Exhausting its prepaid allocation alone does not block runs if it can continue through tenant capacity or pay-as-you-go.' Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/enforcement-policy-credits. In At rollout, replace 'because new workflow runs are blocked once prepaid capacity is consumed' with 'because new workflow runs are blocked when the environment has no Copilot Credits available'. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/enforcement-policy-credits
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls; Security & identity; Governance guidance / admin-path: Manage > Environments > environment > Settings > Users + permissions > Application users reaches application-user management. | Found: Select Users + permissions, and then select Application users. Select + New app user to open the Create a new app user pane. Select + Add an app to choose the registered Microsoft Entra application | Fix: Set controls[1].ui.path and its rendered table path to 'Manage > Environments > environment > Settings > Users + permissions > Application users > + New app user > + Add an app', as documented at https://learn.microsoft.com/power-platform/admin/manage-application-users. Keep the shorter list route in inventory advice. | Source: https://learn.microsoft.com/power-platform/admin/manage-application-users
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist's workflow enablement and credit-usage inventory step is represented in the controls table. | Found: Checklist: 'Inventory the workflows ... using the Enabled and Credit usage (last 30 days) columns'. Controls table: only the undocumented ownership switch and application-user management. | Fix: Record a checklist/table coverage gap: the Before rollout workflow enablement and credit-usage inventory step has no controls-table row. Do not add a row as part of this correction.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's environment-capacity check is represented in the controls table. | Found: Checklist: 'Check that the capacity for each environment covers the new runs'. Controls table: only the undocumented ownership switch and application-user management. | Fix: Record a checklist/table coverage gap: the At rollout environment-capacity check has no controls-table row. Do not add a row as part of this correction.
-->
