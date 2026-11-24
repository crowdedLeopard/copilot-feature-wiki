---
title: "Microsoft 365 Copilot: submit an Agent Builder agent to the Agent Store for admin approval"
slug: "m365-copilot-submit-agent-to-agent-store-from-agent-builder"
roadmapId: 557173
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Copilot (Microsoft 365)"]
summary: "Makers can submit agents built in Agent Builder to the Agent Store's \"Built by your org\" section. Nothing is listed until an admin approves it in the Microsoft 365 admin center, so admins need a review routine."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says access to Agent Builder depends on the licences assigned in the tenant: a Microsoft 365 Copilot licence or usage-based billing (Copilot Credits). The submission page names no licence of its own."
audiences: ["m365-admin","service-owner","security","maker"]
tags: ["agent-builder","agents","agent-governance","approvals","declarative-agents","m365-admin-center","m365-copilot","app-management"]
sources:
  - title: "Microsoft 365 Roadmap 557173"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557173"
    kind: "roadmap"
  - title: "Submit agents from Agent Builder to your org catalog"
    url: "https://learn.microsoft.com/plugins/agent-builder-submit-to-org-catalog"
    kind: "learn"
  - title: "Agent Builder overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder"
    kind: "learn"
  - title: "Manage agent requests in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites"
    kind: "learn"
  - title: "Publishing an Agent Builder submission to the Agent Store (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagepublishresult-publish"
    kind: "learn"
  - title: "Rejecting an Agent Builder submission (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reject"
    kind: "learn"
  - title: "Blocking a published agent for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["agent-registry","declarative-agents","app-management"]
controls:
  - governs: "Publishing an Agent Builder submission to the Agent Store"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests > agent > Publish to store"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/publish"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagepublishresult-publish"
    note: "The wizard sets audience, policy template and permission consent. The API is beta, needs an Agent 365 licence and does not name Agent Builder."
  - governs: "Rejecting an Agent Builder submission"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests > agent > Reject submission"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{packageId}/reject"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reject"
    note: "The request body takes version and reviewerComment. Beta; needs an Agent 365 licence; does not name Agent Builder."
  - governs: "Blocking a published agent for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Applies to an agent after it exists. The API is beta, needs an Agent 365 licence and takes no request body."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-05-29T22:30:02"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 557173: the Agent Builder submission flow, the admin approval path and the controls that apply after publication."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 72
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "2d891cfaebda0ac3e9a9d2edeadf0000"
---

## What's changing

Makers can now submit an agent they built in Agent Builder to the organisation's catalog. An admin reviews the submission in the Microsoft 365 admin center and, if they approve, publishes the agent to the Agent Store under **Built by your org**. Microsoft Learn describes the result as a listing available to users across the tenant, based on the admin's availability settings.

The maker starts from the agent's **More** menu and selects **Submit to your org catalog**. That menu item is disabled until the agent has been published at least once. The submission dialog asks for a display name, short description, developer name, creator website, privacy statement and terms of use, all required. The maker can then track the state as **Waiting for approval**, **Approved** or **Rejected by your admin**; a rejection carries the reviewer's comment.

Submitting is separate from sharing. A shared agent is managed by its owner and changes apply immediately. The Agent Store version is a separate entry that changes only when the maker resubmits and an admin approves. An agent can have one active pending submission, and a resubmission replaces it.

The roadmap record gives the status as Launched with a target of May CY2026, for General Availability on desktop and web in the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

This gives makers a route to organisation-wide distribution that does not depend on IT building the agent, so the volume of review requests depends on how many makers use Agent Builder. Each approval puts an agent in front of users as a listing the organisation has vouched for, so review quality decides how much trust that label carries.

The sources do not say the feature changes anything until a maker submits. The practical decision is who reviews requests, against what criteria, and how quickly. Learn names no separate setting to turn off the Submit option, so the review gate is the lever to plan around.

## Risk assessment

**Data exposure**
- An approved agent is available to users across the tenant, and Learn tells makers to prefer SharePoint sites and other shared sources the intended audience can access and to mention personal Work IQ knowledge sources in the description. Check each request's knowledge sources and sensitivity label, both of which the review shows.
- Sharing limits apply only to the shared version and do not restrict who can add the Agent Store version, so a sharing limit you have set does not restrict the listed copy. Learn says admin availability settings in the Microsoft 365 admin center control who sees it.

**Security & identity**
- The publishing wizard includes a **Review permissions** step where the admin views the permissions the agent requests and grants admin consent if appropriate. Read it for each request, because consent is part of the approval.
- Learn lists the reviewer's inputs as display name, description, capabilities, knowledge sources, sensitivity label, developer information and metadata about the underlying declarative agent. Developer links come from the maker, so check that the privacy and terms URLs are the organisation's.

**Autonomy & actions**
- Agent Builder does not support actions that integrate external services, so submitted agents carry instructions and knowledge rather than connectors.

**Change & support**
- Updates reach the Agent Store only through a resubmission that an admin approves. Requests appear as **Pending review**, **Pending update** or **Pending activate**; an unattended queue leaves makers waiting and the agent unlisted.
- After publication the admin can block the agent for the whole organisation, which Learn says affects its availability in Copilot and in other host products such as Outlook and Teams.

## Cost and licensing

Learn's Agent Builder page says access to Agent Builder, and the capabilities you can add to an agent, depend on the licences assigned in the tenant. The prerequisites page describes a Microsoft 365 Copilot add-on licence (including Microsoft 365 Copilot Business and Microsoft 365 E7) and usage-based billing consumed as Copilot Credits as the models for agent access. Agents that use only instructions and public web knowledge are available to users without either; grounding on SharePoint data needs a Copilot licence or usage-based billing.

The submission page lists three prerequisites: the agent has been published, it is production-ready, and users have access to its knowledge sources. It names no licence, and at the time of writing (November 2026) Learn publishes no meter or charge specific to submitting. Learn says agents built in Agent Builder do not consume the tenant's Dataverse storage entitlement.

The Microsoft Graph Package Management API for publishing and rejecting requests needs a Microsoft Agent 365 licence, per its reference pages. The admin centre steps do not state that requirement. The indirect cost is reviewer time.

## Scope

The maker needs access to Agent Builder, which Learn says is available from microsoft365.com/chat, office.com/chat and the Microsoft Teams desktop and web client, and not on mobile. The roadmap lists Desktop and Web platforms and the Worldwide (Standard Multi-Tenant) cloud only; that is a record fact, not a statement that other clouds are excluded.

The admin reviews and publishes in the Microsoft 365 admin center under Agents > All agents > Requests. Learn's pages on requests do not name the admin role needed for this step. Users who add the agent need access to the knowledge sources it uses, according to the submission page.

## Governance guidance

### Before rollout
- Name who reviews requests under Agents > All agents > Requests and agree what they check: the knowledge sources, sensitivity label, description and developer links that Learn says the review shows.
- Decide the audience and policy template you will choose in the publishing wizard, using the controls table, so reviewers do not decide case by case.
- Tell makers that the **Submit to your org catalog** item is disabled until the agent is published once, and that resubmission is needed for every update to the listing.

### At rollout
- Review each pending request's details, then publish it to the store or reject it with a comment the maker can act on, as the controls table sets out.
- Check the **Review permissions** step in the publishing wizard before granting admin consent for the agent.
- Confirm the **Built by your org** category appears for a test user once an agent is approved.

### After rollout
- Watch the Requests queue for **Pending update** items, since each resubmission needs approval before users see changes.
- Block an agent for the whole organisation from the All agents page if a listing proves unsuitable, using the block row in the controls table.
- Revisit this page when Microsoft documents the admin role for approvals or an audit event for approvals.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Publishing an Agent Builder submission to the Agent Store</strong><br><small>Tenant</small><br><small class="controls__note">The wizard sets audience, policy template and permission consent. The API is beta, needs an Agent 365 licence and does not name Agent Builder.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests › agent › Publish to store <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/publish</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagepublishresult-publish" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Rejecting an Agent Builder submission</strong><br><small>Tenant</small><br><small class="controls__note">The request body takes version and reviewerComment. Beta; needs an Agent 365 licence; does not name Agent Builder.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests › agent › Reject submission <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{packageId}/reject</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-reject" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking a published agent for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Applies to an agent after it exists. The API is beta, needs an Agent 365 licence and takes no request body.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Approval is the control Learn describes for this feature: its Agent Builder overview says administrators can control agent access, org-wide sharing and approval for catalog publishing, and cannot disable agent creation in Agent Builder separately while keeping agents enabled. In the admin centre, **Agents > Settings > User access** (All users, No users or Specific users or groups) controls who can access and install agents and plugins, and **Agents > Settings > Agent and plugin access** includes an option for agents and plugins built by your organisation; Learn says a disabled type does not appear to users in the Agent Store.

**Agents > Settings > Sharing** controls who can share agents built in Agent Builder with the organisation. It governs sharing, which Learn treats as a separate path from catalog submission.

The Graph publish operation's reference calls itself a proposed beta contract and says matching schema and backend release are required before its values are available, so test it before scripting. The references describe packages and do not name Agent Builder submissions; confirm that a submission appears as a package before relying on them.

## Open questions

- Which Microsoft 365 admin role can publish or reject Agent Builder submissions? The requests page does not name one; watch the Learn page on agent requests.
- Is a submission or approval recorded as an audit event, and where would an admin see it? Learn pages read for this item do not say.
- Do the beta Graph publish and reject operations handle Agent Builder submissions today? The references describe packages without naming Agent Builder.
- Is there a tenant setting that turns off the Submit to your org catalog menu item, short of blocking all agents? Watch the Agent Builder governance page and Message center.

<!-- rationale
risk: Medium. A published agent becomes an organisation-approved listing, and the admin review gate is the main control; Learn names no separate setting for the Submit option.
cost: Low. The only cost the sources show is admin review time; Learn publishes no licence or meter specific to submitting, and Agent Builder access depends on the tenant's Copilot licences.
impact: Medium. Makers who build agents and the admins who review requests notice it; users see approved agents under Built by your org.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: maker starts from More / admin-path: The maker starts submission from the agent's More menu by selecting Submit to your org catalog. | Found: In Microsoft 365 Copilot, go to All agents, select the agent you want to submit, and then select Edit. ... In the agent authoring header, select the More ellipses (...), and then select Submit to your org catalog. | Fix: Replace the route sentence with: 'In Microsoft 365 Copilot, go to All agents, select the agent, select Edit, then use More > Submit to your org catalog in the agent authoring header.' The Edit step is required to reach that menu, per https://learn.microsoft.com/plugins/agent-builder-submit-to-org-catalog. | Source: https://learn.microsoft.com/plugins/agent-builder-submit-to-org-catalog
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: Submitted agents carry instructions and knowledge rather than connectors. | Found: You can specify dedicated knowledge sources, including content on SharePoint and information provided by Copilot connectors. | Fix: Delete 'so submitted agents carry instructions and knowledge rather than connectors'. Retain the preceding statement about authoring external-service actions; knowledge can include Copilot connector information, per https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder
- [contradicted, blocker] Risk assessment: Change & support / availability: An unattended Requests queue leaves the agent unlisted. | Found: Until you approve the update, users can access the previous version of the agent. | Fix: Replace 'an unattended queue leaves makers waiting and the agent unlisted' with 'an unattended queue leaves first-time submissions unlisted; pending updates leave the last approved version available', per https://learn.microsoft.com/plugins/agent-builder-submit-to-org-catalog and https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests
- [contradicted, blocker] Cost and licensing: SharePoint grounding / licensing: SharePoint grounding needs a Copilot licence or usage-based billing, without further billing qualifications. | Found: For agents that use SharePoint files as knowledge sources, the billing policy must be connected to the SharePoint agents service and users must be in the security group assigned to the billing policy. | Fix: Append to the SharePoint grounding sentence: 'For usage-based access to agents using SharePoint files, an Azure subscription and billing policy are required; the billing policy must be connected to the SharePoint agents service and users must belong to its assigned security group.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites
- [contradicted, blocker] Governance guidance: After rollout; Open questions: admin role / absence: Which admin role can approve submissions remains undocumented by Microsoft. | Found: Install, modify, approve, and manage agent configurations ... Global Administrator | ✔ | ✔ | ✔ ... AI Administrator | ✔ | ✔ | ✔ | Fix: Replace the role open question with 'AI Administrator and Global Administrator can approve and manage agent configurations; prefer AI Administrator for least privilege.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms. Remove 'the admin role for approvals or' from the After rollout revisit bullet. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms
- [contradicted, blocker] rationale: cost / consistency: The only cost the sources show is admin review time. | Found: The only cost the sources show is admin review time; ... The Microsoft Graph Package Management API for publishing and rejecting requests needs a Microsoft Agent 365 licence | Fix: Replace the cost rationale with 'Low. The submission workflow adds reviewer time; no submission-specific licence or meter is published. Agent Builder access depends on tenant licensing, and the optional Graph automation requires a Microsoft Agent 365 licence.' Keep cost low for the submission change rather than claiming the documented API licence does not exist.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; controls[0..2].note; rendered table / licensing: The Package Management API requires a Microsoft Agent 365 licence. | Found: Access to the Package Management API requires a Microsoft Agent 365 license. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview to sources; the operation references already substantiate the licence requirement, and this overview also establishes the API's Agent Builder scope. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
- [supported, minor] controls[0].api / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/publish publishes a pending package submission. | Found: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/publish ... publishScope ... Required. Availability audience ... policyTemplateId ... Required. | Fix: Keep the call; add 'The request body sets publishScope and policyTemplateId' to controls[0].note and its rendered counterpart, per https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagepublishresult-publish. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagepublishresult-publish
- [supported, minor] controls[1].ui / admin-path: Microsoft 365 admin center > Agents > All agents > Requests > agent > Reject submission declines a request. | Found: After reviewing a requested agent's details, select this action if you don't want to make the agent available to your organization. ... within the Requests list ... select the ellipses to the right of the agent name, and then select Reject submission | Fix: Use 'Agents > All agents > Requests > agent ellipses > Reject submission' in controls[1].ui.path and the rendered row to make the documented row action explicit, per https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests
- [supported, minor] controls[0..1].note; Governance controls; Open questions: Graph applicability / applicability: The individual operation references do not name Agent Builder, leaving application to Agent Builder submissions unconfirmed. | Found: A package represents an agent or a tool ... Platform (Copilot Studio, Microsoft 365 Copilot Agent Builder) ... Reject a pending package title submission ... publish a regular package | Fix: Replace the row notes' 'does not name Agent Builder' caveats with 'The API overview includes Microsoft 365 Copilot Agent Builder in its platform scope.' Replace the final paragraph's applicability caveat with that same sentence and remove the Graph applicability open question. Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview. Retain the publish contract's deployment warning. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
- [supported, minor] Governance controls: Agent and plugin access / admin-path: Agent and plugin access is under Agents > Settings in Microsoft 365 admin center. | Found: In the Microsoft 365 admin center, go to Agents > Settings > Agent and plugin access. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors to sources for the full Agent and plugin access navigation path; the cited agent-settings page describes the setting but does not spell out this route. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [supported, minor] Governance controls: disabled type visibility / behaviour: A disabled publisher type does not appear to users in Agent Store. | Found: If you disable an option, agents and plugins of that type don't appear for users in the Agent store. ... Users see agents and plugins built by Microsoft even if you disable the setting, but they can't install those agents and plugins. | Fix: Narrow 'a disabled type does not appear to users in the Agent Store' to 'disabling the organisation-built option hides agents and plugins of that type from users in the Agent Store'. This preserves the relevant case without implying Microsoft-built agents are hidden. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings
- [supported, minor] Governance controls: Sharing path / admin-path: Agents > Settings > Sharing controls org-wide sharing by Agent Builder makers. | Found: Org-wide sharing: In Agents > Settings > Sharing, control who can share agents built in Agent Builder with the organization. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-share-manage-agents to sources for the Sharing navigation path and its distinction from catalog publishing. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-share-manage-agents
-->
