---
title: "Microsoft 365 Copilot: Copilot Tuning templates in Agent Builder for agents tuned on organisational data"
slug: "m365-copilot-customize-m365-copilot-for-your-organization-with-copilot-tuning"
roadmapId: 552589
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Tuning adds task templates to Agent Builder and lets licensed users tune an agent's context, tools and model on selected SharePoint content. Preview docs say it is on for all Copilot-licensed users in eligible tenants, so decide who may tune."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "June CY2026"
previewDate: "February CY2026"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The preview admin guide says all Microsoft Copilot-licensed users in an eligible tenant can tune agents, and that only tenants with at least 5,000 Microsoft Copilot licences are eligible during public preview. Licensing at general availability is not yet published."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["m365-copilot","copilot-tuning","agent-builder","agents","sharepoint","dlp","retention","data-residency","frontier-program","agent-governance"]
sources:
  - title: "Microsoft Copilot Tuning admin guide (early access preview)"
    url: "https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide"
    kind: "learn"
  - title: "Microsoft Copilot Tuning overview (early access preview)"
    url: "https://learn.microsoft.com/copilot/manage/copilot-tuning-overview"
    kind: "learn"
  - title: "Copilot Tuning Document Writing agent template (early access preview)"
    url: "https://learn.microsoft.com/copilot/manage/copilot-tuning-document-writing-template"
    kind: "learn"
  - title: "Microsoft Copilot Tuning FAQ"
    url: "https://learn.microsoft.com/copilot/manage/copilot-tuning-faq"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 552589"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=552589"
    kind: "roadmap"
  - title: "Blocking or unblocking an agent, including one built in Agent Builder, for the whole organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Blocking or unblocking an agent, including one built in Agent Builder, for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["agent-registry","frontier-program","app-management"]
controls:
  - governs: "Blocking or unblocking an agent, including one built in Agent Builder, for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocking an Agent Builder agent affects its availability in Microsoft Copilot and other host products. The Graph call blocks a Copilot package and requires a Microsoft Agent 365 licence."
  - governs: "DLP and retention policies over tuning snapshot data"
    scope: "tenant"
    ui: null
    api: null
    note: "The admin guide says DLP and retention policies on the source SharePoint content don't apply to snapshot data. Deleting the tuned agent deletes its snapshot."
confidence: "high"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-01-30T20:30:28"
changes:
  - date: "2026-11-26"
    note: "New briefing: Copilot Tuning templates and tuning in Agent Builder, its default-on preview setting, snapshot data handling and the block control for tuned agents."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 74
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "e73d6f545c2a2df944d2655e0097d9a1"
---

## What's changing

Microsoft 365 Copilot Tuning adds task templates to Agent Builder, and lets users who have tuning enabled refine agents built from them using their organisation's own content. Microsoft's preview documentation lists templates for document writing, document summary, expert answers, document validation, style editing and optimisation.

An agent built from a tunable template can be tuned in three ways. **Context tuning** sets the agent's goal, examples and evaluation rubrics. **Tool tuning** adds other agents or tools to its workflow. **Model tuning** applies supervised fine-tuning and reinforcement learning to the underlying model, using example output files from a SharePoint folder the user selects; the Document Writing template needs at least 20 example files, each at least one page long. For tuning, the system takes a snapshot copy of the selected SharePoint content. Tuned agents are then shared with chosen users or Microsoft Entra security groups and used in Microsoft Copilot experiences such as the Microsoft Copilot app and Copilot Chat in Microsoft Teams.

The Microsoft Learn pages are marked **early access preview**. They say tuning is currently available to a limited set of customers through early access programmes, with access through the Microsoft Frontier programme planned for April 2026, and that features and requirements are subject to change. Per the admin guide, in a tenant that meets the eligibility threshold Copilot Tuning appears in the admin centre and is enabled by default, with **Enable for all users** as the default setting.

The roadmap item is **In development**, with preview targeted for February CY2026 and general availability for June CY2026, Worldwide (Standard Multi-Tenant) only, on desktop and web. The June CY2026 target has passed while the status still reads In development.

## Why it matters

Copilot Tuning lets Copilot-licensed users turn a folder of SharePoint documents into training data for a model. The snapshot that tuning creates sits outside the policies that govern the source: the admin guide says DLP and retention policies on the original content do not apply to snapshot data, that permissions are captured at tuning time, and that the snapshot does not update when the source changes. A document deleted under a retention policy, or re-permissioned after an oversharing clean-up, can live on in a tuned agent until it is retrained or deleted.

Because the preview default for eligible tenants is **Enable for all users**, a large Copilot tenant that does nothing lets every Copilot-licensed user start tuning jobs as soon as the feature reaches it. Decide before then whether tuning should be open, limited to a pilot group, or off, and whether open-source base models are acceptable.

## Risk assessment

**Data exposure**
- Model tuning copies the SharePoint folder a user selects into a snapshot stored in a tenant-isolated Microsoft 365 environment. DLP and retention policies on the source do not apply to it, and it is kept for as long as the tuned agent is active, up to a two-year maximum for tuning data in public preview.
- Snapshot permissions reflect the access control lists at tuning time. Fixing oversharing on the source sites later does not change what a tuned agent learned; the agent must be retrained or deleted.
- The agent owner decides who the tuned agent is shared with and can change that at any time.

**Security & identity**
- In the Document Writing template, model tuning asks the creator to choose Microsoft Entra security groups or restrict access to themselves. Who may tune at all is the tenant availability setting (all users, specific users or groups, or disabled).
- Microsoft says it has no default access to tuning data at rest; access requires approval through Customer Lockbox.

**Autonomy & actions**
- Tool tuning lets an agent call other agents or tools in its workflow under custom orchestration instructions. The documented templates draft, summarise, validate and edit content; the Document Writing agent delivers drafts to the user's inbox.

**Change & support**
- Tuning data follows macro-region residency in preview: Multi-Geo commitments do not apply, and Advanced Data Residency tenants do not get tuning by default and must waive ADR through their Microsoft account team.
- Restricting or disabling tuning is forward-looking: existing tuned agents stay usable and are not rolled back, so pulling back after rollout means blocking or deleting agents one by one.

## Cost and licensing

**Licence.** The admin guide says that with **Enable for all users**, all Microsoft Copilot-licensed users in the tenant can tune agents, and the overview says tunable templates are available to Copilot-licensed users in eligible tenants. During public preview only tenants with at least 5,000 Microsoft Copilot licences are eligible; below that threshold the Copilot Tuning settings are not available.

**Meter.** The Copilot Credits usage-based billing page lists the services managed by usage-based billing and does not name Copilot Tuning. It does list **Copilot Agents with Work IQ**; Microsoft has not said whether tuned agents fall under it. No price, meter or compute charge for tuning jobs is published at the time of writing (November 2026).

**Indirect costs.** Preparing tuning data (at least 20 one-page example outputs per Document Writing model tuning run), reviewing access, and assessing whether a data protection impact assessment is needed; the admin guide leaves that decision to the customer.

**Not yet published.** Licensing and eligibility at general availability; the preview pages say requirements are subject to change.

## Scope

- **Users:** Microsoft Copilot-licensed users in eligible tenants, per the preview admin guide; eligibility in public preview requires at least 5,000 Microsoft Copilot licences.
- **Admins:** the admin guide says AI admins manage Copilot Tuning through Copilot controls in the Microsoft 365 admin center.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap record. Tenants with Advanced Data Residency commitments are not enabled by default in public preview.
- **Platforms:** Desktop and Web, per the record.
- **Rollout:** early access programmes now; Frontier access planned for April 2026 per the Learn pages; roadmap GA target June CY2026.
- **Data:** model tuning uses SharePoint content the user selects as a folder.

## Governance guidance

### Before rollout
- Decide, with data protection and records owners, whether tuning should run as **Enable for all users**, **Enable for specific users or groups** or **Disable tuning**, and set that in the Copilot Tuning controls in the Microsoft 365 admin center before users find the tune option (see the [admin guide](https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide)).
- Decide whether to allow open-source or external base models, using the open-source model option in the same controls.
- Brief records and DLP owners that tuning snapshots fall outside DLP and retention policies on the source content, and agree which SharePoint libraries may be used as training data.
- Confirm with your Microsoft account team how your tenant's residency commitments apply if you rely on Multi-Geo or Advanced Data Residency.

### At rollout
- Create a Microsoft Entra security group for the pilot tuners if you choose **Enable for specific users or groups**, and agree who reviews the access requests that arrive in the Microsoft 365 admin center.
- Require creators to choose a security group, not the whole organisation, when they share a model-tuned agent.

### After rollout
- Review tuned agents in the Agent 365 inventory, and block any trained on content that should not have been used (Microsoft 365 admin center > Agents > All agents > agent > Block).
- Retrain or delete a tuned agent after a GDPR deletion request touches its training data; the overview says a valid deletion request requires retraining.
- Retrain or delete tuned agents after permission clean-ups on their source sites, since snapshots keep tuning-time permissions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Blocking or unblocking an agent, including one built in Agent Builder, for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Blocking an Agent Builder agent affects its availability in Microsoft Copilot and other host products. The Graph call blocks a Copilot package and requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>DLP and retention policies over tuning snapshot data</strong><br><small>Tenant</small><br><small class="controls__note">The admin guide says DLP and retention policies on the source SharePoint content don't apply to snapshot data. Deleting the tuned agent deletes its snapshot.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Tenant tuning availability.** The [Copilot Tuning admin guide](https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide) documents three options (Enable for all users, which is the default for eligible tenants; Enable for specific users or groups; Disable tuning), an in-product access request flow with approval in the Microsoft 365 admin center, and an open-source model option. It says AI admins manage these through Copilot controls in the Microsoft 365 admin center but gives no navigation path, and the Copilot settings page does not list it. The Microsoft Graph Copilot policy settings resource supports five setting identifiers, none of them for tuning (November 2026).

**How the controls interact.** Disabling or limiting tuning blocks new and in-flight tuning but leaves existing tuned agents usable for inference. To stop a tuned agent being used, block it. The admin guide says deleting a tuned agent also deletes its fine-tuned model and snapshot data; the Microsoft 365 admin center's delete action is a soft delete with a 30-day recovery window.

**Role.** The Copilot settings page names AI Administrator as an appropriate role for Copilot settings. The Graph block call requires the CopilotPackages.ReadWrite.All delegated permission and a Microsoft Agent 365 licence.

## Open questions

- Will tuning still default to **Enable for all users**, and keep the 5,000-licence threshold, at general availability? Watch Message center and the [admin guide](https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide).
- Where exactly in the Microsoft 365 admin center is the Copilot Tuning setting, and will a Graph setting identifier be added for it?
- Do tuning jobs or use of tuned agents consume Copilot Credits, for example under **Copilot Agents with Work IQ**, and will spending policies cover them?
- Which Microsoft Purview audit events record tuning jobs, snapshot creation and tuned-agent publication?
- When an admin soft-deletes a tuned agent in the Microsoft 365 admin center, is the snapshot data deleted at once or after the 30-day recovery window?

<!-- rationale
risk: High. Model tuning copies the SharePoint content a user selects into a snapshot that DLP and retention policies on the source do not cover, and the preview admin guide makes tuning available to all Copilot-licensed users by default in eligible tenants.
cost: Low. The preview pages tie tuning to existing Microsoft Copilot licences (and a 5,000-licence eligibility threshold); no separate price or meter for tuning is published, so the known cost is admin and data-owner time.
impact: Medium. Agent creators in Agent Builder see the new templates and the tune option; colleagues notice only when a tuned agent is shared with them.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: How the controls interact / behaviour: Disabling or limiting tuning blocks new and in-flight tuning. | Found: Tuning enabled for specific users or groups [...] Allowed only for authorized users [...] Only for authorized users [...] Transition: enabled → limited [...] Blocked for non-authorized users | Fix: Replace the first sentence of How the controls interact with: 'Disabling tuning blocks new and in-flight tuning; limiting tuning blocks it for users who lose access, while authorised users can continue tuning.' The transition table at https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide gives these distinctions. | Source: https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; summary; What's changing; Why it matters; rationale: risk / default: The preview default is on with Enable for all users in eligible tenants. | Found: This setting is the default setting for eligible tenants. [...] Copilot Tuning isn't enabled by default for tenants with Advanced Data Residency (ADR) commitments during public preview. | Fix: Keep defaultState as on, but add 'except tenants with Advanced Data Residency commitments' to the default-on sentence in the summary and What's changing, as documented at https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide. The body already gives this exception. | Source: https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide
- [supported, minor] Risk assessment: Change & support; Governance controls: How the controls interact / behaviour: Restricting or disabling tuning leaves existing tuned agents usable for inference. | Found: Inference is unaffected. Users can continue to use existing agents for inference, subject to the agent's sharing and permission settings. [...] This setting blocks new tuning activity and prevents the use of tuned agents until tuning is reenabled. | Fix: Add after the inference statement: 'The same admin guide contradicts its transition table and lifecycle section: its Disable tuning option says it prevents use of tuned agents until tuning is reenabled. Confirm the actual behaviour before relying on this setting.' Cite https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide. | Source: https://learn.microsoft.com/copilot/manage/copilot-tuning-admin-guide
- [supported, minor] controls[0].api / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage. [...] POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block [...] Use of these APIs in production applications is not supported. | Fix: Keep the call unchanged and append to controls[0].note: 'The Graph API is beta, subject to change, and not supported for production applications.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, minor] Governance guidance; controls / consistency: The checklist tells readers to configure tuning availability and open-source models, but neither control appears in the table. | Found: Before rollout: 'set that in the Copilot Tuning controls'; 'using the open-source model option'. The controls table contains only agent blocking and DLP/retention snapshot-policy absence. | Fix: The first two Before rollout steps name controls with no table row: tenant tuning availability and open-source model tuning. Do not add rows during correction; replace those steps with 'Decide whether broad tuning and open-source base models fit the organisation, using the admin guide linked below.'
-->
