---
title: "Microsoft 365 Copilot: federated connectors can create, update and delete in third-party systems"
slug: "m365-copilot-federated-connectors-write-update-delete"
roadmapId: 570964
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Federated connectors can now run create, update and delete tools from Copilot Chat as the user, with approval asked first. They need a Microsoft 365 Copilot add-on licence or E7; the admin centre tool view is labelled Coming soon."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "high"
cost: "none"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Federated connectors require a Microsoft 365 Copilot add-on licence for every user, or Microsoft 365 E7. Copilot Chat access alone and Copilot pay-as-you-go do not qualify. Connector grounding is included for qualifying users."
audiences: ["m365-admin","security","compliance","service-owner","end-user"]
tags: ["m365-copilot","copilot-chat","copilot-connectors","federated-connectors","mcp","write-actions","user-confirmation","agent-and-plugin-access"]
sources:
  - title: "Microsoft 365 Roadmap 570964"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570964"
    kind: "roadmap"
  - title: "Federated connectors overview: write, update, and delete actions"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Copilot connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/overview"
    kind: "learn"
  - title: "Admin-published federated connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/admin-published-federated-connectors"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors: Terms of use"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/terms-of-use"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Which users may use connectors (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Staged rollout for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout#modify-staged-rollout"
    kind: "learn"
  - title: "Set up custom federated connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Allowing or blocking connectors by publisher type (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Enabling, disabling or staging a federated connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connector > Enable / Disable / Staged rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
  - governs: "Allowing or blocking connectors by publisher type"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Applies to future connectors of that publisher type. Preview, global service only. Set mode applyOnce, status active; resourceType microsoft.agent.allowedagenttypes, resourceVersion 1, valueObject.areISVAppsAllowed."
  - governs: "Which users may use connectors"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview, global service only. Set mode applyOnce, status active; resourceType microsoft.agent.useraccess, resourceVersion 1, valueObject.userAssignmentCategory everyone or noOne. No specific-user or group assignment is documented."
  - governs: "Blocking an individual tool on a supported MCP server"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Tools > tool toggle > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Rolling out; supports only specific MCP server types registered on Agent 365. Not confirmed for every federated connector."
  - governs: "Who is in a staged rollout"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connector > Staged Rollout > Edit"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout#modify-staged-rollout"
    api: null
confidence: "high"
created: "2026-11-13"
updated: "2026-11-24"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Correction: licensing now names the Copilot add-on or E7 requirement; individual tool blocking and staged rollout paths corrected; admin tool view qualified as Coming soon; first-time claim removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: admin-published connectors now described as supporting create, update and delete where the connector provides those tools; removed two Purview audit checklist bullets that had no controls-table row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 68 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 68 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: publisher-type access and user access now list their preview Microsoft Graph applyOnce equivalents; removed the claim that the confirmation card explains Cancel; noted the connectors overview still says read-only."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 78
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "5549ed891f90ec53c58c8148251fdfe2"
---

## What's changing

**Federated Copilot connectors** use the Model Context Protocol to query third-party services in real time without indexing their data into Microsoft 365. Until October 2026 they were read-only. With this change, when a connector publisher exposes tools that create, update or delete content, those tools are unblocked in Copilot Chat. A user can turn an escalation email into a ticket, update a CRM record or add a comment on an issue without leaving Copilot.

The general [Copilot connectors overview](https://learn.microsoft.com/microsoft-365/copilot/connectors/overview) still describes federated connectors as read-only, alongside a note that write actions start in early October 2026; this briefing follows the launched roadmap item and the feature-specific federated connectors overview.

The model is the same as for read tools: Copilot acts with the **user's own account and permissions** at the third-party service, and no data is indexed. The roadmap item says every create, update or delete action requires the user's explicit confirmation before it runs. Microsoft Learn gives the detail: write, update and delete tools default to **Needs approval**, Copilot shows a confirmation card with the parameters it will send, and nothing is transmitted until the user responds. Users can choose **Allow once**, **Allow for conversation**, **Always allow** (per tool, revocable in Settings > Sources) or **Cancel**, so reusable choices mean later calls to the same tool need not ask again. If a publisher adds or changes a write tool, it reverts to Needs approval.

The roadmap item says administrators can view each connector's read and write/delete tools in the Microsoft 365 admin center and disable connectors that do not meet policy. Learn labels that tool list **Coming soon** and says it is not available for all connectors. For supported connectors, the admin signs in to the third-party service in the connector's **Tools** section and selects **All tools**; the list reflects the permissions of the account used to sign in. Where it is unavailable, Learn points to Copilot **Settings** > **Sources** > connector > **Write/Delete tools**. Write actions are supported in Copilot Chat, agents, Cowork and Copilot in Word, Excel, PowerPoint and Outlook; the Researcher agent remains read-only. Microsoft-published default connectors appear as Ready in the admin center. Admin-published federated connectors can also create, update or delete data where the connector provides those tools, with user approval and subject to source-system permissions; supported actions vary by connector.

## Why it matters

Federated connectors now let Microsoft 365 Copilot change data in connected third-party systems. The safety model is sound (user identity, explicit confirmation, Purview audit), but it relies on users reading confirmation cards and on administrators having reviewed which connectors are enabled. Microsoft-published connectors that were enabled for read may now carry write tools without any new admin action.

Compliance teams should note Microsoft's own wording: these actions "export Customer Data to the connected system". If your data handling agreements or DLP posture assumed Copilot only read from third parties, that assumption no longer holds.

## Risk assessment

**Data exposure**
- Content from a Copilot conversation (which may include Microsoft 365 data the user has access to) is sent to the third-party system as the payload of a write action. The confirmation card shows it, but the user decides.
- Nothing is indexed and the source system enforces permissions; a user cannot write what they could not write directly.

**Security & identity**
- Actions run under the user's OAuth connection to the service. Review which connectors are allowed by publisher type (Microsoft, your organisation, external publishers) and use staged rollout to limit users.
- MCP servers that restrict inbound traffic need Microsoft's static egress IP ranges allowed.

**Autonomy & actions**
- Copilot selects tools dynamically. "Always allow" removes the confirmation for that tool for that user indefinitely. No administrator override for forcing Needs approval tenant-wide is documented as of November 2026.
- Researcher is read-only; other agents are not.

**Change & support**
- Connectors already enabled for read gain write tools when the publisher adds them. Monitor the Tools section per connector where the admin centre offers it.
- Users may not understand that cancelling leaves the third-party system unchanged; training helps.

## Cost and licensing

- Federated connectors require a Microsoft 365 Copilot add-on licence for every user, or Microsoft 365 E7. Copilot Chat access alone and Copilot pay-as-you-go do not qualify. Connector grounding is included for qualifying users, with no extra charge (Learn, Prerequisites for deploying connectors).
- Third-party services may impose their own licensing obligations: Learn's terms of use make you responsible for using the connector in compliance with third-party rights, licences and obligations. Any API or service charges are provider-specific costs to check, not a universal connector charge.
- Indirect: connector review, user communication, and possibly updates to data processing agreements.

## Scope

- Microsoft 365 Copilot Chat, agents, Cowork and Copilot in Word, Excel, PowerPoint and Outlook. Researcher excluded.
- All users who can connect federated connectors and who hold the third-party account; staged rollout per connector limits the population.
- Worldwide (standard multi-tenant). Government cloud availability not stated.
- Admin-published federated connectors can also create, update or delete data where the connector provides those tools, with user approval and subject to source-system permissions; supported actions vary by connector.

## Governance guidance

### Before rollout
- Inventory enabled federated connectors in the Microsoft 365 admin center and record which now expose Write/Delete tools, using the connector's Tools section where it is available.
- Decide, per connector, whether write actions are acceptable; disable connectors where they are not. Learn says write, update and delete tools are part of the connector and are not enabled separately. Tool-level blocking is documented only for supported MCP servers registered on Agent 365, so do not assume it covers a given federated connector.
- Check data processing agreements with the third parties concerned.

### At rollout
- Use **Agent and plugin access** to block external publishers by default and allow specific connectors through staged rollout to pilot groups.
- Brief users: read the card, prefer Allow once, know that Cancel changes nothing.

### After rollout
- Review connector tool lists monthly for newly added write tools.
- Watch for admin controls over approval defaults.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enabling, disabling or staging a federated connector</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Enable / Disable / Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowing or blocking connectors by publisher type</strong><br><small>Tenant</small><br><small class="controls__note">Applies to future connectors of that publisher type. Preview, global service only. Set mode applyOnce, status active; resourceType microsoft.agent.allowedagenttypes, resourceVersion 1, valueObject.areISVAppsAllowed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users may use connectors</strong><br><small>User</small><br><small class="controls__note">Preview, global service only. Set mode applyOnce, status active; resourceType microsoft.agent.useraccess, resourceVersion 1, valueObject.userAssignmentCategory everyone or noOne. No specific-user or group assignment is documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking an individual tool on a supported MCP server</strong><br><small>Tenant</small><br><small class="controls__note">Rolling out; supports only specific MCP server types registered on Agent 365. Not confirmed for every federated connector.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Tools › tool toggle › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who is in a staged rollout</strong><br><small>Group</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connector › Staged Rollout › Edit <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout#modify-staged-rollout" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Publisher-type access and all-user/no-user access have preview Microsoft Graph Tenant Configuration Management applyOnce equivalents; the other listed settings have no documented equivalent. For publisher-type access the baseline sets properties.valueObject.areISVAppsAllowed, areMicrosoftAppsAllowed or areTenantScopedAppsAllowed. Write, update and delete tools are not enabled separately from the connector. Microsoft documents individual tool toggles only for supported MCP servers registered on Agent 365, where the feature is still rolling out, so the tool row does not apply to every federated connector. Where the connector's Tools section is available, it lists Read tools and Write/Delete tools, which is where an admin sees what a write-capable connector can do before enabling it; where it is not, Learn points to the user-side Settings > Sources view. Users manage individual tool approvals under Settings > Sources > connector > Tools > Write/Delete tools; reusable approvals apply to a tool, not the whole connector. That user-side approval is not an admin control. Purview audit records connector actions.

## Open questions

- Whether administrators will get a tenant-wide "always require approval" setting for write tools.
- Whether individual tool blocking on Agent 365 will cover federated connectors, and when the admin centre tool list leaves Coming soon.
- Government cloud timelines and whether DLP policies at the Copilot location will be able to inspect write payloads.

<!-- rationale
risk: High. Copilot now exports conversation content to third-party systems on user confirmation; connectors enabled for read gain write tools without new admin action; no administrator override of "Always allow" is documented as of November 2026.
cost: None. Connector grounding adds no extra Microsoft charge for users who already hold the Microsoft 365 Copilot add-on licence (or Microsoft 365 E7) that federated connectors require; third-party API costs are provider-specific.
impact: High. Changes what every Copilot Chat user can do with enabled connectors.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / availability: Copilot in Word supports federated connector actions. | Found: Copilot in Word, Excel, PowerPoint, and Outlook | Fix: Add: 'The federated connectors overview lists Word as supported, but the submission guide still says Word is coming soon.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/submit-federated-connector, which states 'with Word and PowerPoint coming soon'. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] What's changing; Scope / availability: Copilot in PowerPoint supports federated connector actions. | Found: Copilot in Word, Excel, PowerPoint, and Outlook | Fix: Combine with the Word qualification: 'The federated connectors overview lists Word and PowerPoint as supported, but the submission guide still says they are coming soon.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/submit-federated-connector. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Risk assessment / behaviour: Always allow removes repeated confirmation for a user's tool indefinitely. | Found: Always allow | Runs the action and doesn't ask again for this tool until the user changes the setting or the publisher changes the tool. | Fix: Replace the sentence with: '"Always allow" removes repeated confirmation for that tool until the user changes the setting or the publisher changes the tool.' The earlier paragraph already documents publisher-triggered resets; repeat that qualification here instead of 'indefinitely'. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, minor] Governance guidance: Before rollout; After rollout / consistency: The governance checklist asks readers to inventory and review connector tool lists, but the controls table has no tool-inventory row. | Found: Inventory enabled federated connectors ... record which now expose Write/Delete tools ... Review connector tool lists monthly for newly added write tools. The table covers connector availability, publisher access, user access, MCP tool blocking and staged rollout, not tool inventory. | Fix: Remove 'and record which now expose Write/Delete tools, using the connector's Tools section where it is available' from the Before rollout inventory bullet, and remove the After rollout bullet 'Review connector tool lists monthly for newly added write tools.' Do not add an unverified controls row.
-->
