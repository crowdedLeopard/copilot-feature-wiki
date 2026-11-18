---
title: "Work IQ: agents create and edit Office documents"
slug: "work-iq-updating-documents-in-office"
roadmapId: 570871
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Work IQ"]
summary: "The roadmap says Work IQ will let agents create and edit Office documents using organisational context. Microsoft Learn does not yet describe it; the Work IQ MCP write policy is the control to understand first."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says Work IQ API access is independent of Microsoft 365 Copilot licensing and is billed by usage. Microsoft 365 Copilot licensed users get Work IQ in Copilot experiences and agents, with usage billing for custom and third-party agents. Nothing is published for this feature."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["work-iq","agents","mcp","document-generation","microsoft-365-apps","write-actions","usage-based-billing","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 570871"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570871"
    kind: "roadmap"
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
    note: "General control: Microsoft has not confirmed it governs this feature. The Policy tab appears when it is available; changes can take up to 24 hours to apply."
  - governs: "Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool can use"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Build > Tools > Work IQ > Edit tool > Sources"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    api: null
    note: "Maker-side only. Whole workloads only, and it does not override organisational permissions or policies. Not confirmed as governing this feature."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing on Work IQ document creation and editing: the roadmap plan, the Work IQ MCP write policy that may govern it, and what Microsoft has not yet published."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 57
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "1269e3e90868efc1885c415ef86e28e9"
---

## What's changing

The roadmap item says Work IQ will let agents create and edit Microsoft Office documents using organisational context, so that users produce and update content more efficiently. It is listed under Microsoft Copilot (Microsoft 365) and Work IQ, for the Worldwide (Standard Multi-Tenant) cloud, on the Developer platform.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so the roadmap description is the only account of what it does. How an agent creates or edits a document, which file types are covered and where results are saved are not described.

The roadmap record gives the status as In development, with Preview targeted for November CY2026 and General Availability targeted for January CY2027. These are Microsoft's targets, not commitments.

What Learn does document is the surrounding Work IQ MCP server. Its tool reference lists create_entity and update_entity, which operate on relative resource paths that map to Microsoft Graph endpoints, and fetch_blob, which fetches binary content such as documents and Office files. Whether the roadmap feature uses these tools is not stated. Separately, Learn documents Word, Excel, and PowerPoint Agents in Microsoft Copilot, which create files for users with a paid Microsoft 365 Copilot licence; no page links them to this roadmap item.

## Why it matters

Creating and editing files is a write action, and Work IQ requests run as a signed-in user. The wiki's view is that the first question is whether your tenant already lets Work IQ agents write, because the sources point both ways: the Work IQ MCP pages say mutation operations are blocked by default, while the Copilot Studio page says write operations are on by default.

Microsoft has not stated what happens on arrival, so plan on no source saying existing behaviour changes. Use the preview to learn what documents an agent can touch, what it costs in Copilot Credits and whether your tenant policy already allows it, before General Availability.

## Risk assessment

**Data exposure**
- Learn says Work IQ actions are user scoped: every request runs in the context of a specific user and only accesses what that user is allowed to see or do. An agent drafting a document from organisational context can therefore draw on anything its user can reach, so oversharing already present in SharePoint or OneDrive carries into generated content.
- The Work IQ MCP tool reference says tool access to Microsoft Graph paths uses the signed-in user's Microsoft 365 permissions. Where generated content is stored is not documented for this feature.

**Security & identity**
- Learn says Work IQ MCP policy cannot grant access beyond what the signed-in user is already allowed to access, so the policy narrows the user's reach and never widens it.

**Autonomy & actions**
- The roadmap describes agents editing documents, which is a change to existing files. The policy page says mutation operations, including create, update, delete and action requests, are not allowed by default and can be enabled through tenant policy. The Copilot Studio page says write operations are on by default, subject to your permissions and policies. Confirm which applies to your tenant before trusting either.
- Whether a person approves an edit before it is saved is not described.

**Change & support**
- Preview behaviour, tool names and limits may change before General Availability. Expect support questions about who edited a document, and confirm with Microsoft what record an agent edit leaves.

## Cost and licensing

No licence or price is published for this feature. Learn's Work IQ overview says Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing, that Work IQ API usage consumes Copilot Credits shared with other eligible services, and that Work IQ cost is variable and can be managed in the Microsoft 365 admin center.

For Microsoft 365 Copilot licensed users, the same page says Work IQ is available in all Microsoft 365 Copilot experiences and agents, subject to usage-based billing for custom and third-party agents. Users without a Microsoft 365 Copilot licence are billed based on usage. The Copilot Studio page says Work IQ uses consumption billing and that a separate spending policy is not required for it. See [Copilot Credits](/concepts/copilot-credits/).

Not yet published: whether document creation or editing is billed at a rate of its own, and whether a Microsoft 365 Copilot licence is a prerequisite. Learn documents Word, Excel, and PowerPoint Agents as premium capabilities for paid Microsoft 365 Copilot licence holders; that is a different product, and Microsoft has not said it applies here.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Developer platform, and both General Availability and Preview release phases. Other clouds are not listed on the record; that is not a statement that the feature is unavailable there.

The Work IQ MCP pages say requests are checked against the signed-in user's Microsoft 365 permissions, and the policy page says tenant-level policy is the control surface in the initial release. Prerequisites, roles and file types for this feature are not stated. In Copilot Studio, Work IQ is added by default to every new agent that uses the Microsoft Copilot harness, with all available workloads selected.

## Governance guidance

### Before rollout
- Review who can reach sensitive SharePoint and OneDrive content, because Work IQ requests run as the signed-in user and generated content can draw on whatever that user can read.
- Check the Work IQ MCP tenant policy state in the Microsoft 365 admin center and record whether mutation operations are currently allowed (first row of the table).
- Ask your Microsoft account team or watch Message center for the preview scope, since no Learn page describes this feature yet.

### At rollout
- Keep mutation operations disallowed in the Work IQ MCP policy until a pilot group has a documented need; allowing them is what the policy page describes as enabling create, update, delete and action requests.
- Limit the workloads in pilot Copilot Studio agents to the ones they need, using the agent's Work IQ **Sources** (second row of the table).
- Test edits on non-production documents and compare the result with the source file.

### After rollout
- Review Copilot Credits consumption for the pilot agents in the Microsoft 365 admin center before widening use.
- Re-read the Learn pages for Work IQ MCP policy once Microsoft publishes a page for this feature, and update the checklist.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tools may create, update or delete data (tenant policy)</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it governs this feature. The Policy tab appears when it is available; changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool can use</strong><br><small>Agent</small><br><small class="controls__note">Maker-side only. Whole workloads only, and it does not override organisational permissions or policies. Not confirmed as governing this feature.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Build › Tools › Work IQ › Edit tool › Sources <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn describes the Work IQ MCP policy as tenant-wide in the initial release: per-user, per-app, per-agent or scenario-specific templates are not part of the initial policy control surface. A policy change can take up to 24 hours to apply. Microsoft Learn documents no API for this policy at the time of writing (November 2026); the policy page refers to policy settings that clients can read and update but names no endpoint.

The workload Sources setting in Copilot Studio is limited to whole workloads: you cannot select individual sites or mailboxes, and selecting a workload does not override your organisation's permissions or policies. Microsoft Learn documents no API for it at the time of writing.

The Tools page in the Microsoft 365 admin center also lists a Block action that prevents the selected tool from being used by agents or workflows. Microsoft has not said whether blocking Work IQ MCP there stops the document operations in this feature. None of these controls is confirmed by Microsoft as applying to this feature specifically.

## Open questions

- Does this feature use the Work IQ MCP create_entity and update_entity tools, and therefore the tenant mutation policy? Watch the Work IQ MCP tool reference and Message center.
- Is the default for document edits blocked, as the Work IQ MCP policy page says, or on, as the Copilot Studio page says?
- Is document creation or editing billed at its own Copilot Credits rate, and is a Microsoft 365 Copilot licence required? Watch the Work IQ overview and the Copilot Credits billing pages.
- Does a person approve an edit before it is saved, and which audit records and version history show that an agent changed a file?
- Is this feature related to Word, Excel, and PowerPoint Agents in Microsoft Copilot, which depend on Anthropic models being enabled?

<!-- rationale
risk: Medium. The roadmap says agents will edit documents, which is a write action; Learn says Work IQ MCP blocks mutation operations by default but also says Copilot Studio write operations are on by default, and neither page covers this feature.
cost: Variable. Learn says Work IQ usage is billed through usage-based billing and consumes Copilot Credits; no rate for document creation or editing is yet published.
impact: Low. The roadmap lists the Developer platform, so builders of agents and the admins who govern Work IQ notice first; no user-facing rollout is stated.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance: Before rollout / behaviour: Generated content can draw on anything or whatever its user can read. | Found: The agent no longer uses the workloads you remove through Work IQ. | Fix: Replace the Data exposure inference with 'Overshared content may therefore be a risk, within the workloads and paths permitted by the agent configuration and tenant policies.' In Before rollout, replace 'generated content can draw on whatever that user can read' with 'the user permission boundary does not by itself correct oversharing'. The cited page documents workload exclusions, and https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp documents policy restrictions even when user access exists. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq
- [contradicted, blocker] front matter: licensing.model / consistency: The feature's licensing model is mixed. | Found: model: "mixed" notes: "... Nothing is published for this feature." Cost and licensing: "No licence or price is published for this feature." | Fix: Set licensing.model to 'unknown'. Keep the supported Work IQ platform billing information in licensing.notes and Cost and licensing, but do not classify this undocumented feature's licence model from surrounding experiences whose relationship to it the briefing explicitly leaves unconfirmed.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Workload selection is reached in Copilot Studio through Build > Tools > Work IQ > Edit tool > Sources. | Found: Sign in to Copilot Studio and open your agent. On the Build tab, under Tools, select Work IQ. In the Edit tool dialog, review the Connection. Under Sources, select the workloads to use | Fix: Include the initial agent selection in controls[1].ui.path and the rendered table: 'agent > Build > Tools > Work IQ > Edit tool > Sources'. The cited instructions begin by opening the agent; the remaining navigation labels are supported. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist's instruction to review pilot-agent Copilot Credits consumption has a corresponding controls-table row. | Found: Checklist: 'Review Copilot Credits consumption for the pilot agents in the Microsoft 365 admin center before widening use.' The table contains only the MCP mutation policy and Copilot Studio workload Sources controls. | Fix: Remove the checklist bullet 'Review Copilot Credits consumption for the pilot agents in the Microsoft 365 admin center before widening use.' It names a monitoring control with no corresponding table row; do not add a new row as part of this correction.
-->
