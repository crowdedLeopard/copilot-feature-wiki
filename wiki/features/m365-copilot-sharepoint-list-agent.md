---
title: "Microsoft 365 Copilot: SharePoint list agent creates Microsoft Lists from prompts"
slug: "m365-copilot-sharepoint-list-agent"
roadmapId: 534606
topic: "m365-copilot"
products: ["SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot users can describe a list in a prompt and the SharePoint list agent generates its structure for Microsoft Lists. Launched; Microsoft has not stated a default and publishes no agent-specific licence. Review fit; no action is required."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: "December CY2025"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans; no additional licence specific to the SharePoint list agent is published."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["m365-copilot","sharepoint","sharepoint-lists","agents"]
sources:
  - title: "Microsoft 365 Roadmap 534606"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=534606"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","sharepoint-get-relevant-information-from-lists-in-knowledge-agent","m365-copilot-sharepoint-list-support-in-agent-builder","agent-registry","app-management"]
controls:
  - governs: "Blocking or unblocking an agent for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Existing agent control. Learn does not say the SharePoint list agent is listed under All agents. The Graph call is beta and needs a Microsoft Agent 365 licence."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-16T23:00:10"
changes:
  - date: "2026-11-25"
    note: "First briefing: roadmap item launched; default state and licence for the SharePoint list agent not yet stated by Microsoft."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 38 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Correction: removed the claim that rollout mechanics are not stated, recorded the general Microsoft Copilot licence statement, and trimmed the impact rationale."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 38 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 37
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "8204fdb46d2d37ddb8f286a7e137ab7c"
---

## What's changing

The SharePoint list agent lets Copilot users create a Microsoft List by describing it in a prompt. The roadmap item says the agent generates the list's schema (its columns and setup) and helps teams turn structured information and Copilot responses into Microsoft Lists.

The Microsoft 365 Copilot release notes describe the steps: open Copilot and describe the list, review the generated list structure and suggested fields, then create the Microsoft List and add or refine content as needed. The roadmap lists the web as the only platform.

The roadmap record shows status Launched, with a preview date of December CY2025 and a target date of February CY2026. Its release phase lists both General Availability and Preview, and its cloud list shows Worldwide (Standard Multi-Tenant) only. No Microsoft Message Center post was supplied for this item, and Microsoft Learn has no page dedicated to the agent at the time of writing (November 2026), so behaviour beyond the roadmap text and the release-note steps is not described here.

## Why it matters

This changes who creates lists and how. A user no longer designs columns by hand: the agent proposes the schema, and the user decides whether to accept it. In a tenant, that can mean more lists, started from Copilot answers, with column choices made by a model rather than a list owner.

Microsoft has not stated what the agent does on arrival, so this page does not assume it is on or off for your users. No source says existing behaviour changes, which makes this a feature to review for fit rather than one that needs a decision before it lands.

## Risk assessment

**Data exposure**
- The agent turns "structured information and Copilot responses" into a Microsoft List, so content from a Copilot answer can end up stored as list items. Microsoft has not described where the new list is created or who can see it. Confirm this in a pilot before telling users to put sensitive content through it.

**Security & identity**
- Which identity and permissions the agent uses to create the list is not described. Test with a standard user and check the list's site and permissions afterwards.

**Autonomy & actions**
- The release-note steps have the user review the generated list structure and suggested fields, then create the list. That points to a user-confirmed action, but the pages do not say whether the agent can change an existing list.

**Change & support**
- The schema is generated, so expect support questions about wrong column types or missing fields. Existing blocking controls for agents may not cover it: Learn does not say the agent is listed under Agents > All agents (see the controls table).

## Cost and licensing

No licence, meter or price specific to the SharePoint list agent is published on the roadmap record or in the release notes, which describe it as available to "Copilot users". Microsoft's licence options page states that Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans; no additional licence specific to the SharePoint list agent is published.

The indirect cost is time: reviewing generated schemas and handling list clean-up. If you script agent blocking through the Microsoft Graph package API, its reference page says access requires a Microsoft Agent 365 licence.

## Scope

Audience: Copilot users, as the roadmap description puts it. The roadmap lists Web as the platform and Worldwide (Standard Multi-Tenant) as the cloud. No other cloud is listed on the record, which is a record fact and not a statement that the agent is unavailable elsewhere.

Release phase is shown on the roadmap as General Availability and Preview, and the status is Launched. Microsoft has not stated the default for users or any admin prerequisite.

## Governance guidance

### Before rollout
- Ask a pilot group to create lists with the agent and record which site each list lands on and who can open it.
- Decide with SharePoint site owners whether prompt-generated lists need a naming or review convention before wider use.
- Check whether the agent appears under Microsoft 365 admin center > Agents > All agents, which decides whether the block control in the table applies.

### At rollout
- Tell Copilot users that the generated structure is a suggestion to review before they create the list.
- Point users at the existing Microsoft Lists sharing guidance for lists that hold personal or confidential data.

### After rollout
- Review the lists the pilot group created for column quality and permissions.
- Watch the Microsoft 365 Copilot release notes and Message center for a feature page, a licence statement or an admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Blocking or unblocking an agent for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Existing agent control. Learn does not say the SharePoint list agent is listed under All agents. The Graph call is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only control row here is an existing agent-blocking control, shown as today's alternative. Blocking an agent in the Microsoft 365 admin center applies to the selected agent, and the page cited gives the steps for any agent in the list. Whether the SharePoint list agent is a selectable agent there is not stated on that page, so treat the row as something to verify in your tenant.

The Graph package API is a beta API and the reference says access requires a Microsoft Agent 365 licence.

## Open questions

- Does the SharePoint list agent need any licence beyond Microsoft Copilot, and does it consume any Copilot Credits or other meter?
- What is the default state for users, and is there an admin setting to turn the agent off or restrict it to a group?
- Where is the created list stored, and which identity and permissions does the agent use?
- Does the agent appear under Agents > All agents so it can be blocked, and does a Learn page for it exist yet?

<!-- rationale
risk: Low. The release notes show a user reviewing the generated structure before the list is created, and no new data access is documented; where the list is stored and who can see it is not stated.
cost: Low. The only cost the sources show is admin and user time; a licence or meter specific to this agent is not yet published.
impact: Medium. People who build lists notice it: Copilot users get a prompt-driven way to start a Microsoft List.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance guidance: Before rollout; rendered controls table / admin-path: The documented blocking route is Microsoft 365 admin center > Agents > All agents > agent > Block. | Found: Select Agents > All agents. In the All agents page, select an agent from the list of agents. In the agent details pane that opens, immediately under the agent's name, select Block or Unblock. | Fix: The cited action page supports the printed route, but https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview explicitly includes Registry. Cite that page and use 'Agents > All agents > Registry > agent > Block'; include Registry in the Before rollout inventory-check route too. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist's checks of list access permissions have corresponding governance-control rows. | Found: Before rollout: "record which site each list lands on and who can open it." After rollout: "Review the lists the pilot group created for column quality and permissions." The sole control row covers blocking or unblocking an agent. | Fix: The Before rollout check of who can open each list and the After rollout review of list permissions have no corresponding controls-table row; identify these as the checklist-to-table coverage gap.
-->
