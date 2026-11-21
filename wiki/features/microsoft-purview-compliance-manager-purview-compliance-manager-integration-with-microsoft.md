---
title: "Microsoft Purview Compliance Manager: assess Microsoft Foundry agents against AI regulations"
slug: "microsoft-purview-compliance-manager-purview-compliance-manager-integration-with-microsoft"
roadmapId: 536576
topic: "governance"
products: ["Microsoft Purview"]
summary: "Compliance Manager is planned to map Microsoft Foundry agents to AI regulation assessments and show pass/fail status and improvement actions. Roadmap target is January CY2027; compliance admins choose whether to use it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2025"
risk: "low"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists the EU AI Act, ISO/IEC 23894, ISO/IEC 42001 and NIST AI RMF as premium templates that need a purchased licence, and says Foundry assessments are free for six months with Copilot or Agent licences."
audiences: ["compliance","security","service-owner"]
tags: ["purview","compliance-manager","microsoft-foundry","agents","agent-evaluation","agent-governance","licensing"]
sources:
  - title: "Microsoft 365 Roadmap item 536576"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=536576"
    kind: "roadmap"
  - title: "Build and manage assessments in Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-assessments"
    kind: "learn"
  - title: "Get started with Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-setup"
    kind: "learn"
  - title: "Learn about regulations in Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-regulations"
    kind: "learn"
  - title: "Role-based access control for Microsoft Foundry"
    url: "https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry"
    kind: "learn"
  - title: "Quickstart: Set up Microsoft Foundry resources"
    url: "https://learn.microsoft.com/azure/foundry/tutorials/quickstart-create-foundry-resources"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-inline-dlp-for-prompts-for-microsoft-foundry-apps-a","microsoft-purview-insider-risk-management-insider-risk-management-for-agents","microsoft-purview-purview-sdk-embedded-in-agent-framework-sdk","microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Creation of an assessment that includes Foundry agents"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Compliance Manager > Assessments > Add assessment"
      docs: "https://learn.microsoft.com/purview/compliance-manager-assessments"
    api: null
    note: "Learn lists Compliance Manager Administration, Compliance Manager Assessor or Global Administrator for creating assessments. Foundry agents are added during assessment creation."
  - governs: "Who holds the Foundry role needed to add agents to an assessment"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "Foundry resource > Access control (IAM)"
      docs: "https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry"
    api:
      kind: "azure-cli"
      call: "az role assignment create --role 53ca6127-db72-4b80-b1b0-d745d6d5456d --assignee <user> --scope <foundry-resource-id>"
      docs: "https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry"
    note: "The GUID is the Foundry User role (formerly Azure AI User). <foundry-resource-id> is the Azure resource ID of the relevant Foundry account. Learn's Compliance Manager page also accepts Azure AI Project Manager."
  - governs: "Whether improvement actions are tested automatically"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Compliance Manager > Testing source"
      docs: "https://learn.microsoft.com/purview/compliance-manager-setup"
    api: null
    note: "Needs the Compliance Manager Administrator or Global Administrator role. Testing source governs automatic testing for eligible improvement actions generally; Learn's Foundry passage does not identify a Foundry-specific conversion route."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-21"
    note: "New briefing: Compliance Manager assessments for Microsoft Foundry agents, with roles, licensing and settings from Learn."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 61 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: the assessment row now describes creation, the Foundry role command uses the Foundry resource scope, and unsupported no-action and no-change statements and the licence-counter steps are removed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 58
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "2df520e400fa1c44f9af297f680bdd5c"
---

## What's changing

Microsoft Purview Compliance Manager is planned to integrate with Microsoft Foundry so that agents built in Foundry can be mapped to AI regulations and assessments, with their compliance status and improvement actions shown in Compliance Manager. The roadmap item describes this as enabling customers to "automatically access the compliance posture of Agents created in AI Foundry".

Microsoft Learn already describes a Compliance Manager integration with Azure AI Foundry (the page uses the earlier product name). It says the integration syncs evaluation results into Compliance Manager for AI models and agents. Learn describes 75 actions from Foundry, 15 of which are automated evaluation actions for metrics such as reliability, BLEU score, coherence and fluency. Compliance Manager regularly syncs those 15 actions and shows pass/fail status and detailed metrics. Users can convert automated actions to manual actions through Compliance Manager settings, and can update actions manually if the organisation has no Foundry access.

The roadmap and Learn differ on timing: the roadmap item has status In development, a target of January CY2027 and a preview date of December CY2025, with release phases General Availability and Preview, while the Learn page describes the integration without a status label. Dates are Microsoft's targets. The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

For a compliance or service owner, this moves evidence about Foundry agents into the tool that already holds the organisation's assessments, instead of collecting evaluation results by hand. It matters most if auditors expect AI-regulation evidence (EU AI Act, NIST AI RMF, ISO/IEC standards) for agents built in Foundry.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes. The practical decision is whether to build an assessment, who may add Foundry agents to it, and whether premium AI template licences are covered. Treat synced pass/fail status as one input to an audit, not a conclusion: the automated actions cover evaluation metrics, and the other Foundry actions are not described as automated.

## Risk assessment

**Data exposure**
- The integration syncs evaluation results from Foundry into Compliance Manager, where access follows Compliance Manager roles: users need at least the Compliance Manager Reader role or the Microsoft Entra Global reader role. Review who holds those roles before agent evaluation metrics land there; access can also be granted per assessment through Manage user access.

**Security & identity**
- Adding Foundry agents to an assessment needs the Azure AI Project Manager or Azure AI User role on the relevant Foundry accounts. Foundry's own page says these were renamed Foundry Project Manager and Foundry User, so check assignments under both names.
- Creating or modifying an assessment needs Compliance Manager Administration, Compliance Manager Assessor or Global Administrator, per Learn.

**Autonomy & actions**
- Learn describes syncing evaluation results and improvement actions. Users can convert automated actions to manual ones, which changes whether status is machine-synced or entered by a person.

**Change & support**
- Status shown depends on which of the 15 evaluation actions have synced. A passing control based on partial automation could be read as full compliance, so agree with auditors what the score covers.
- The roadmap shows the item as In development while Learn describes the integration; confirm behaviour in your tenant before telling auditors it is available.

## Cost and licensing

Compliance Manager is available to organisations with Office 365 and Microsoft 365 licences, but the assessments available depend on the licensing agreement (Learn: Get started with Compliance Manager).

The four AI templates (EU Artificial Intelligence Act, ISO/IEC 23894:2023, ISO/IEC 42001:2023 and NIST AI RMF 1.0) are premium templates. Learn says premium regulations require purchase of a licence, that using an AI regulation counts toward purchased premium licences, and that, depending on the agreement, up to three more premium templates may be usable for free. Licences for activated regulations are good for one year.

Separately, the Foundry assessments page says built-in assessments for key AI regulations are provided free for six months with Copilot or Agent licences. Learn does not say here which Copilot or Agent licences qualify or what happens after six months. The regulation licensing page publishes purchase routes but no per-licence price at the time of writing (November 2026). No Foundry-specific meter is described on the pages read.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. It does not list the US Government clouds; that is a record fact, not a statement that the feature is unavailable there.

Per Learn, prerequisites are the Azure AI Project Manager or Azure AI User role for the admin on the relevant Foundry accounts, and a Compliance Manager role that can create assessments. Users define the assessment scope directly in Compliance Manager. Learn's description of automatic assessments covers AI models and agents; the roadmap item covers agents created in Foundry.

## Governance guidance

### Before rollout
- List who holds Compliance Manager Administration, Compliance Manager Assessor or Global Administrator, the roles Learn names for creating assessments (see the assessment-creation row in the table).
- Check who holds Foundry User or Foundry Project Manager (formerly Azure AI User and Azure AI Project Manager) on the Foundry accounts you want assessed, using the Foundry role row.

### At rollout
- Create a trial assessment with the Add assessment wizard, choose an AI regulation, and see whether Foundry is offered on the Select services page.
- Decide whether automated actions may stay automatic or be converted to manual, and review the Testing source setting with that in mind.
- Agree with the compliance team which Foundry agents are in scope before adding them.

### After rollout
- Compare synced pass/fail results for the automated evaluation actions with the evaluation results shown in Foundry.
- Re-read the Learn page and Message center when the roadmap status changes from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creation of an assessment that includes Foundry agents</strong><br><small>Tenant</small><br><small class="controls__note">Learn lists Compliance Manager Administration, Compliance Manager Assessor or Global Administrator for creating assessments. Foundry agents are added during assessment creation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Compliance Manager › Assessments › Add assessment <a href="https://learn.microsoft.com/purview/compliance-manager-assessments" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Foundry role needed to add agents to an assessment</strong><br><small class="controls__note">The GUID is the Foundry User role (formerly Azure AI User). &lt;foundry-resource-id&gt; is the Azure resource ID of the relevant Foundry account. Learn's Compliance Manager page also accepts Azure AI Project Manager.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Foundry resource › Access control (IAM) <a href="https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az role assignment create --role 53ca6127-db72-4b80-b1b0-d745d6d5456d --assignee &lt;user&gt; --scope &lt;foundry-resource-id&gt;</code> <a href="https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether improvement actions are tested automatically</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Compliance Manager Administrator or Global Administrator role. Testing source governs automatic testing for eligible improvement actions generally; Learn's Foundry passage does not identify a Foundry-specific conversion route.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Compliance Manager › Testing source <a href="https://learn.microsoft.com/purview/compliance-manager-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says only users who hold a Compliance Manager role can access Compliance Manager, and that the Global Administrator or Compliance Manager Administrator role sets permissions. Compliance Manager settings are accessible to users with the Compliance Manager Administrator or Global Administrator role.

The Foundry role and the Compliance Manager role are separate: an administrator needs both to add Foundry agents to an assessment. Learn names Azure AI User and Azure AI Project Manager; Foundry's own page gives the current names.

Microsoft Learn documents no API for creating assessments or for the testing source setting at the time of writing (November 2026), so both rows are portal-only. Whether the Testing source setting is the setting Learn means by converting automated actions to manual is not stated.

## Open questions

- What happens on arrival: is the Foundry integration on for tenants, or does an administrator have to create an assessment first? Watch the Learn page for assessments and Message center.
- Which Copilot or Agent licences qualify for the six free months of Foundry assessments, and what is charged afterwards?
- Does the Foundry integration cover agents in every Foundry project, or only agents an administrator adds when creating an assessment?
- Is converting automated actions to manual done through the Testing source setting, or another Compliance Manager setting?
- When will Learn show the integration as generally available, given the roadmap target of January CY2027?

<!-- rationale
risk: Low. The feature syncs evaluation results into Compliance Manager; the roadmap does not state a default, so this rates today's behaviour continuing.
cost: Medium. Learn says premium AI regulation templates need a purchased licence, with the Foundry assessments free for six months with Copilot or Agent licences; a price is not stated on the pages read.
impact: Low. Compliance Manager administrators and the Foundry account owners who hold the required roles notice it.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Risk assessment; Governance guidance / role: Learn lists Compliance Manager Administration, Compliance Manager Assessor or Global Administrator for creating and modifying assessments. | Found: To create and modify an assessment, a user must hold a role of Compliance Manager Administration, Compliance Manager Assessor, or Global Administrator. | Fix: Add after this role list: 'Microsoft's setup page disagrees: it says Compliance Manager Assessor can edit data but cannot create assessments, while Compliance Manager Contribution can create them.' Cite https://learn.microsoft.com/purview/compliance-manager-setup#role-types. | Source: https://learn.microsoft.com/purview/compliance-manager-assessments
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft Purview portal > Compliance Manager > Assessments > Add assessment reaches the assessment creation wizard. | Found: From your Assessments page, select Add assessment to begin the assessment creation wizard. | Fix: The path starts creation but stops before completing it. Extend it to 'Compliance Manager > Assessments > Add assessment > Base your assessment on a regulation > Select regulation > regulation > Add name and group > Select services > Select services > service > Review and finish > Create assessment', using the wizard labels at https://learn.microsoft.com/purview/compliance-manager-assessments#create-assessments. Keep the note that Foundry agents are added during creation; do not invent a Foundry-specific agent-picker label. | Source: https://learn.microsoft.com/purview/compliance-manager-assessments
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Azure portal > Foundry resource > Access control (IAM) reaches Foundry role assignment management. | Found: In the Azure portal, open your Foundry resource and go to Access control (IAM). Create a role assignment for Foundry User, set Members to User, group, or service principal, select your user principal | Fix: Complete the path as 'Foundry resource > Access control (IAM) > Role assignments > Add > Add role assignment > Role > Job function roles > Foundry User > Members > User, group, or service principal > Select members > user'. Cite https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal for the intermediate IAM steps; the Foundry role is documented at the existing docs URL. | Source: https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry
- [supported, minor] controls[2].ui; Governance guidance; Governance controls table / admin-path: Microsoft Purview portal > Settings > Compliance Manager > Testing source reaches automated testing settings. | Found: select the Settings icon at the top of the page, then select Compliance Manager. [...] Select Testing source from the left navigation. [...] Turn off automatic testing for all actions. | Fix: Extend the path to 'Settings > Compliance Manager > Testing source > Turn off automatic testing for all actions'. The same page also documents the alternative options 'Turn on automatic testing for all actions' and 'Turn on automatic testing per action'; name these in the note if retaining the row's general on/off wording. | Source: https://learn.microsoft.com/purview/compliance-manager-setup
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency: The checklist tells readers to take stock of Compliance Manager role holders, but the table has no control for assigning those permissions. | Found: List who holds Compliance Manager Administration, Compliance Manager Assessor or Global Administrator [...] Creation of an assessment that includes Foundry agents | Fix: Remove the first Before rollout bullet beginning 'List who holds Compliance Manager Administration': the assessment-creation row documents the creation wizard, not the control for assigning Compliance Manager permissions. Do not add a new row in this correction.
-->
