---
title: "Microsoft 365 Copilot: federated connectors can create, update and delete in third-party systems"
slug: "m365-copilot-federated-connectors-write-update-delete"
roadmapId: 570964
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "MCP-based federated connectors can now run write tools from Copilot Chat. Actions run as the user with explicit confirmation, nothing is indexed, and admins see read and write tools per connector in the Microsoft 365 admin center."
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
  notes: "Included with Microsoft 365 Copilot and Copilot Chat where federated connectors are available. Third-party systems may have their own licensing for API access."
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
  - title: "Allowing or blocking connectors by publisher type (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls"
    kind: "learn"
  - title: "Which users may use connectors (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Blocking an individual tool (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Who is in a staged rollout (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout#modify-staged-rollout"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","copilot-studio-require-human-approval-for-tool-calls","m365-copilot-agent-lifecycle-management-rules","m365-copilot-domain-exclusion-web-grounding"]
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
    api: null
    note: "Applies to future connectors of that publisher type as well."
  - governs: "Which users may use connectors"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
  - governs: "Blocking an individual tool"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > tool > Block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers"
    api: null
  - governs: "Who is in a staged rollout"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connector > Staged rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout#modify-staged-rollout"
    api: null
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

**Federated Copilot connectors** use the Model Context Protocol to query third-party services in real time without indexing their data into Microsoft 365. Until October 2026 they were read-only. With this change, when a connector publisher exposes tools that create, update or delete content, those tools are unblocked in Copilot Chat. A user can turn an escalation email into a ticket, update a CRM record or add a comment on an issue without leaving Copilot.

The model is the same as for read tools: Copilot acts with the **user's own account and permissions** at the third-party service, and no data is indexed. Every write, update or delete tool defaults to **Needs approval**: Copilot shows a confirmation card with the parameters it will send, and nothing is transmitted until the user responds. Users can choose **Allow once**, **Allow for conversation**, **Always allow** (per tool, revocable in Settings > Sources) or **Cancel**. If a publisher adds or changes a write tool, it reverts to Needs approval.

Administrators see each connector's **Read tools** and **Write/Delete tools** in the Microsoft 365 admin center and can disable connectors that do not meet policy. Write actions are supported in Copilot Chat, agents, Cowork and Copilot in Word, Excel, PowerPoint and Outlook; the Researcher agent remains read-only. Microsoft-published default connectors appear as Ready in the admin center; admin-published connector templates currently support read-only tools.

## Why it matters

This is the first time Microsoft 365 Copilot itself, not a custom agent, can change data in systems outside Microsoft 365 on a user's say-so. The safety model is sound (user identity, explicit confirmation, Purview audit), but it relies on users reading confirmation cards and on administrators having reviewed which connectors are enabled. Microsoft-published connectors that were enabled for read may now carry write tools without any new admin action.

Compliance teams should note Microsoft's own wording: these actions "export Customer Data to the connected system". If your data handling agreements or DLP posture assumed Copilot only read from third parties, that assumption no longer holds.

## Risk assessment

**Data exposure**
- Content from a Copilot conversation (which may include Microsoft 365 data the user has access to) is sent to the third-party system as the payload of a write action. The confirmation card shows it, but the user decides.
- Nothing is indexed and the source system enforces permissions; a user cannot write what they could not write directly.

**Security & identity**
- Actions run under the user's OAuth connection to the service. Review which connectors are allowed by publisher type (Microsoft, your organisation, external publishers) and use staged rollout to limit users.
- MCP servers that restrict inbound traffic need Microsoft's static egress IP ranges allowed.

**Autonomy & actions**
- Copilot selects tools dynamically. "Always allow" removes the confirmation for that tool for that user indefinitely. There is no admin control described for forcing Needs approval tenant-wide.
- Researcher is read-only; other agents are not.

**Change & support**
- Connectors already enabled for read gain write tools when the publisher adds them. Monitor the Tools section per connector.
- Users may not understand that cancelling leaves the third-party system unchanged; the card explains this but training helps.

## Cost and licensing

- No Microsoft licence or metered charge beyond Copilot or Copilot Chat entitlements.
- The third-party service may charge for API calls or require a licence for the user's account.
- Indirect: connector review, user communication, and possibly updates to data processing agreements.

## Scope

- Microsoft 365 Copilot Chat, agents, Cowork and Copilot in Word, Excel, PowerPoint and Outlook. Researcher excluded.
- All users who can connect federated connectors and who hold the third-party account; staged rollout per connector limits the population.
- Worldwide (standard multi-tenant). Government cloud availability not stated.
- Admin-published connector templates: read-only tools only at present.

## Governance guidance

**Before rollout**
- Inventory enabled federated connectors in the Microsoft 365 admin center and record which now expose Write/Delete tools.
- Decide, per connector, whether write actions are acceptable; disable connectors where they are not, since there is no per-tool admin switch.
- Check data processing agreements with the third parties concerned.

**At rollout**
- Use **Agent and plugin access** to block external publishers by default and allow specific connectors through staged rollout to pilot groups.
- Brief users: read the card, prefer Allow once, know that Cancel changes nothing.
- Confirm Purview audit is capturing connector actions for the pilot.

**After rollout**
- Review connector tool lists monthly for newly added write tools.
- Sample audit logs for write actions; look for "Always allow" patterns on high-impact tools.
- Watch for admin controls over approval defaults and for admin-published connectors gaining write support.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enabling, disabling or staging a federated connector</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Enable / Disable / Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowing or blocking connectors by publisher type</strong><br><small>Tenant</small><br><small class="controls__note">Applies to future connectors of that publisher type as well.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview#admin-experience-and-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use connectors</strong><br><small>User</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Blocking an individual tool</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › tool › Block <a href="https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who is in a staged rollout</strong><br><small>Group</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/staged-rollout#modify-staged-rollout" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

None of these settings has a documented Graph or PowerShell equivalent, so change control is portal and audit log. The connector details pane lists Read tools and Write/Delete tools separately, which is where an admin sees what a write-capable connector can do before enabling it. Users approve write actions per connector in Copilot Chat settings; that user-side approval is not an admin control. Purview audit records connector actions.

## Open questions

- Whether administrators will get a tenant-wide "always require approval" setting for write tools.
- When admin-published federated connectors will support write tools.
- Government cloud timelines and whether DLP policies at the Copilot location will be able to inspect write payloads.

<!-- rationale
risk: High. Copilot now exports conversation content to third-party systems on user confirmation; connectors enabled for read gain write tools without new admin action; no admin override of "Always allow".
cost: None. Included; third-party API costs possible.
impact: High. Changes what every Copilot Chat user can do with enabled connectors.
-->
