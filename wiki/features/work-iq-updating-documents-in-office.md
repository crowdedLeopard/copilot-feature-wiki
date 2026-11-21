---
title: "Work IQ: agents create and edit Office documents"
slug: "work-iq-updating-documents-in-office"
roadmapId: 570871
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Work IQ"]
summary: "The roadmap says Work IQ will let agents create and edit Office documents using organisational context. Learn documents a preview; the Work IQ MCP tenant policy is the control to understand first."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Office Document Tools use the Work IQ MCP interface. Learn says Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing, consuming Copilot Credits. A document-specific rate is not yet published."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["work-iq","agents","mcp","document-generation","microsoft-365-apps","write-actions","usage-based-billing","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 570871"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570871"
    kind: "roadmap"
  - title: "Office Document Tools for Work IQ (preview)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ MCP tool reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Overview of the Tools page in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-tools-overview"
    kind: "learn"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
videos: []
related: ["work-iq","work-iq-agent-policy-governance","work-iq-granular-mcp-policies","mcp","copilot-credits"]
controls:
  - governs: "Whether Work IQ MCP tools may create, update or delete data (tenant policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "The documented Office Document Tools preview uses Work IQ MCP do_action requests, which fall within the Work IQ MCP tenant policy layer. Changes can take up to 24 hours to apply."
  - governs: "Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool can use"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Build > Tools > Work IQ > Edit tool > Sources"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    api: null
    note: "Maker-side only. Whole workloads only, and it does not override organisational permissions or policies. Not confirmed as governing this feature."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing on Work IQ document creation and editing: the roadmap plan, the Work IQ MCP write policy that may govern it, and what Microsoft has not yet published."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: reworded the data-exposure and oversharing statements to match the Learn pages, set the licensing model to not yet published, added the agent step to the Sources path and removed an unsupported credits-review checklist item."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 68 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: Learn now documents Office Document Tools in Work IQ (preview), so the page states its file types, do_action calls and prerequisites, sets licensing to consumption, and no longer says the tenant policy is unconfirmed for this feature."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: set the default to admin opt-in because Learn says Work IQ MCP blocks mutation operations by default, scoped the Copilot Studio write statement to that experience, and removed the unsupported Tools block sentence."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 71
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "61c6a5c6cd748461f90dfd11e64681fd"
---

## What's changing

The roadmap item says Work IQ will let agents create and edit Microsoft Office documents using organisational context, so that users produce and update content more efficiently. It is listed under Microsoft Copilot (Microsoft 365) and Work IQ, for the Worldwide (Standard Multi-Tenant) cloud, on the Developer platform.

At the time of writing (November 2026), Microsoft Learn documents [Office Document Tools in Work IQ](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq) in preview. The documented preview covers Word documents, Excel workbooks and PowerPoint presentations. In preview, agents invoke /office-agent-mcp/generate_artifact or /office-agent-mcp/edit_artifact through do_action, using a complete content or change outline and the discovered schema.

The roadmap record gives the status as In development, with Preview targeted for November CY2026 and General Availability targeted for January CY2027. These are Microsoft's targets, not commitments, and Learn already describes the preview.

The surrounding Work IQ MCP server has a tool reference that lists create_entity and update_entity, which operate on relative resource paths that map to Microsoft Graph endpoints, and fetch_blob, which fetches binary content such as documents and Office files. The documented Office Document Tools preview uses do_action rather than describing creation and editing through create_entity and update_entity. Separately, Learn documents Word, Excel, and PowerPoint Agents in Microsoft Copilot, which create files for users with a paid Microsoft 365 Copilot licence; no page links them to this roadmap item.

## Why it matters

Creating and editing files is a write action, and Work IQ requests run as a signed-in user. The wiki's view is that the first question is whether your tenant policy already lets Work IQ agents write. The Work IQ MCP pages say mutation operations are blocked by default. The Copilot Studio page separately says write operations are on by default in that experience, subject to your permissions and policies.

For the documented Work IQ MCP preview, document mutation requests are blocked by default; an administrator must enable supported write scenarios through tenant policy. Use the preview to learn what documents an agent can touch, what it costs in Copilot Credits and whether your tenant policy already allows it, before General Availability.

## Risk assessment

**Data exposure**
- Learn says Work IQ actions are user scoped: every request runs in the context of a specific user and only accesses what that user is allowed to see or do. Overshared content may therefore be a risk, within the workloads and paths permitted by the agent configuration and tenant policies.
- The Work IQ MCP tool reference says tool access to Microsoft Graph paths uses the signed-in user's Microsoft 365 permissions. Where generated content is stored is not documented for this feature.

**Security & identity**
- Learn says Work IQ MCP policy cannot grant access beyond what the signed-in user is already allowed to access, so the policy narrows the user's reach and never widens it.

**Autonomy & actions**
- The roadmap describes agents editing documents, which is a change to existing files. The policy page says mutation operations, including create, update, delete and action requests, are not allowed by default and can be enabled through tenant policy. The Copilot Studio page says write operations are on by default in that experience, subject to your permissions and policies.
- Whether a person approves an edit before it is saved is not described.

**Change & support**
- Preview behaviour, tool names and limits may change before General Availability. Expect support questions about who edited a document, and confirm with Microsoft what record an agent edit leaves.

## Cost and licensing

No document-specific rate is published. Office Document Tools use the Work IQ MCP interface; Work IQ API access uses consumption billing in Copilot Credits, independently of Microsoft 365 Copilot licensing, per Learn's [Work IQ overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/) and the [Office Document Tools page](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq). The overview says Work IQ API usage consumes Copilot Credits shared with other eligible services, and that Work IQ cost is variable and can be managed in the Microsoft 365 admin center.

For Microsoft 365 Copilot licensed users, the same page says Work IQ is available in all Microsoft 365 Copilot experiences and agents, subject to usage-based billing for custom and third-party agents. Users without a Microsoft 365 Copilot licence are billed based on usage. The Copilot Studio page says Work IQ uses consumption billing and that a separate spending policy is not required for it. See [Copilot Credits](/concepts/copilot-credits/).

Not yet published: whether document creation or editing is billed at a rate of its own. Learn documents Word, Excel, and PowerPoint Agents as premium capabilities for paid Microsoft 365 Copilot licence holders; that is a different product, and Microsoft has not said it applies here.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Developer platform, and both General Availability and Preview release phases. Other clouds are not listed on the record; that is not a statement that the feature is unavailable there.

The Work IQ MCP pages say requests are checked against the signed-in user's Microsoft 365 permissions, and the policy page says tenant-level policy is the control surface in the initial release. The preview requires Work IQ to be enabled in the organisation, and the linked [Work IQ enablement guide](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq) requires a Global Administrator for the one-time Work IQ setup. The documented preview covers Word documents, Excel workbooks and PowerPoint presentations. In Copilot Studio, Work IQ is added by default to every new agent that uses the Microsoft Copilot harness, with all available workloads selected.

## Governance guidance

### Before rollout
- Review who can reach sensitive SharePoint and OneDrive content, because Work IQ requests run as the signed-in user and the user permission boundary does not by itself correct oversharing.
- Check the Work IQ MCP tenant policy state in the Microsoft 365 admin center and record whether mutation operations are currently allowed (first row of the table).
- Read the Office Document Tools preview page and watch Message center for changes to the preview scope.

### At rollout
- Keep mutation operations disallowed in the Work IQ MCP policy until a pilot group has a documented need; allowing them is what the policy page describes as enabling create, update, delete and action requests.
- Limit the workloads in pilot Copilot Studio agents to the ones they need, using the agent's Work IQ **Sources** (second row of the table).
- Test edits on non-production documents and compare the result with the source file.

### After rollout
- Re-read the Office Document Tools and Work IQ MCP policy pages as the preview moves towards General Availability, and update the checklist.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tools may create, update or delete data (tenant policy)</strong><br><small>Tenant</small><br><small class="controls__note">The documented Office Document Tools preview uses Work IQ MCP do_action requests, which fall within the Work IQ MCP tenant policy layer. Changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool can use</strong><br><small>Agent</small><br><small class="controls__note">Maker-side only. Whole workloads only, and it does not override organisational permissions or policies. Not confirmed as governing this feature.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Build › Tools › Work IQ › Edit tool › Sources <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn describes the Work IQ MCP policy as tenant-wide in the initial release: per-user, per-app, per-agent or scenario-specific templates are not part of the initial policy control surface. A policy change can take up to 24 hours to apply. Microsoft Learn documents no API for this policy at the time of writing (November 2026); the policy page refers to policy settings that clients can read and update but names no endpoint.

The workload Sources setting in Copilot Studio is limited to whole workloads: you cannot select individual sites or mailboxes, and selecting a workload does not override your organisation's permissions or policies. Microsoft Learn documents no API for it at the time of writing.

The Tools page in the Microsoft 365 admin center also lists a Block action that prevents the selected tool from being used by agents or workflows.

## Open questions

- Does our tenant policy currently allow the preview document mutation requests?
- Is document creation or editing billed at its own Copilot Credits rate? Watch the Work IQ overview and the Copilot Credits billing pages.
- Does a person approve an edit before it is saved, and which audit records and version history show that an agent changed a file?
- Is this feature related to Word, Excel, and PowerPoint Agents in Microsoft Copilot, which depend on Anthropic models being enabled?

<!-- rationale
risk: Medium. The roadmap says agents will edit documents, which is a write action; Learn says Work IQ MCP blocks mutation operations by default, and the documented preview uses Work IQ MCP do_action requests.
cost: Variable. Learn says Work IQ usage is billed through usage-based billing and consumes Copilot Credits; no rate for document creation or editing is yet published.
impact: Low. The roadmap lists the Developer platform, so builders of agents and the admins who govern Work IQ notice first; no user-facing rollout is stated.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency / consistency: Every control the governance checklist tells administrators to review has a corresponding controls-table row. | Found: Review who can reach sensitive SharePoint and OneDrive content; table controls: Whether Work IQ MCP tools may create, update or delete data; Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool can use. | Fix: Remove the first Before rollout checklist bullet beginning 'Review who can reach sensitive SharePoint and OneDrive content'. It asks for a permissions review without a corresponding controls-table row.
-->
