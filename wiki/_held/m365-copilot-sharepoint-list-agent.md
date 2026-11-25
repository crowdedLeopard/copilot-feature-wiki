---
title: "Microsoft 365 Copilot: SharePoint list agent creates Microsoft Lists from prompts"
slug: "m365-copilot-sharepoint-list-agent"
roadmapId: 534606
topic: "m365-copilot"
products: ["SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot users can describe a list in a prompt and the SharePoint list agent generates its structure for Microsoft Lists. Launched; Microsoft has not stated a default or licence, so review fit, no action is required."
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
  model: "unknown"
  notes: "Not yet published for this agent. The roadmap and release notes say \"Copilot users\" without naming a licence. Microsoft's licence options page lists eligible prerequisite licences for Microsoft Copilot in general."
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
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 36
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "3672ca4854c2c7db34325aaf0ccfe652"
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

No licence, meter or price specific to the SharePoint list agent is published on the roadmap record or in the release notes, which describe it as available to "Copilot users". Licensing for this agent is not yet published.

For Microsoft Copilot in general, Microsoft's licence options page states that Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans. That page does not say whether the SharePoint list agent needs one of these licences.

The indirect cost is time: reviewing generated schemas and handling list clean-up. If you script agent blocking through the Microsoft Graph package API, its reference page says access requires a Microsoft Agent 365 licence.

## Scope

Audience: Copilot users, as the roadmap description puts it. The roadmap lists Web as the platform and Worldwide (Standard Multi-Tenant) as the cloud. No other cloud is listed on the record, which is a record fact and not a statement that the agent is unavailable elsewhere.

Release phase is shown on the roadmap as General Availability and Preview, and the status is Launched. Microsoft has not stated the rollout mechanics, the default for users or any admin prerequisite.

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

- Which licence does the SharePoint list agent need, and does it consume any Copilot Credits or other meter?
- What is the default state for users, and is there an admin setting to turn the agent off or restrict it to a group?
- Where is the created list stored, and which identity and permissions does the agent use?
- Does the agent appear under Agents > All agents so it can be blocked, and does a Learn page for it exist yet?

<!-- rationale
risk: Low. The release notes show a user reviewing the generated structure before the list is created, and no new data access is documented; where the list is stored and who can see it is not stated.
cost: Low. The only cost the sources show is admin and user time; a licence or meter specific to this agent is not yet published.
impact: Medium. People who build lists notice it: Copilot users get a prompt-driven way to start a Microsoft List, and admins see nothing change in their consoles.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope / absence: Microsoft has not stated the rollout mechanics. | Found: Copilot features are introduced using a safe deployment model, gradually rolling out to a subset of users within a tenant before expanding across the organization. | Fix: Remove 'the rollout mechanics, ' from the final sentence of Scope. The release notes describe general Copilot deployment mechanics, although they give no feature-specific rollout window. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; summary; Cost and licensing; changes / licensing: No agent-specific licence is published, so the licensing model is unknown. | Found: Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government, and education subscription plans. | Fix: Set licensing.model to included. Replace 'Licensing for this agent is not yet published' and equivalent unqualified statements with 'Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans; no additional licence specific to the SharePoint list agent is published.' Keep the existing licence-options citation. This records the general product entitlement without claiming a separate agent licence. | Source: https://learn.microsoft.com/copilot/plan/copilot-license-options
- [unsupported, minor] rationale: impact / behaviour: Administrators see nothing change in their consoles. | Found: Searched: "SharePoint list agent" "admin center" changes console; "SharePoint list agent" admin switch enable disable block All agents. Opened release notes and agent-actions; neither says admin consoles remain unchanged. | Fix: Remove ', and admins see nothing change in their consoles' from the impact rationale.
-->
