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
  model: "unknown"
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
      path: "agent > Build > Tools > Work IQ > Edit tool > Sources"
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
  - date: "2026-11-18"
    note: "Correction: reworded the data-exposure and oversharing statements to match the Learn pages, set the licensing model to not yet published, added the agent step to the Sources path and removed an unsupported credits-review checklist item."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 68 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 54
  unconfirmed: 0
  contradicted: 8
  attempts: 1
  hash: "03c01fd48d76fc1a707ffc545ce21f09"
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
- Learn says Work IQ actions are user scoped: every request runs in the context of a specific user and only accesses what that user is allowed to see or do. Overshared content may therefore be a risk, within the workloads and paths permitted by the agent configuration and tenant policies.
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
- Review who can reach sensitive SharePoint and OneDrive content, because Work IQ requests run as the signed-in user and the user permission boundary does not by itself correct oversharing.
- Check the Work IQ MCP tenant policy state in the Microsoft 365 admin center and record whether mutation operations are currently allowed (first row of the table).
- Ask your Microsoft account team or watch Message center for the preview scope, since no Learn page describes this feature yet.

### At rollout
- Keep mutation operations disallowed in the Work IQ MCP policy until a pilot group has a documented need; allowing them is what the policy page describes as enabling create, update, delete and action requests.
- Limit the workloads in pilot Copilot Studio agents to the ones they need, using the agent's Work IQ **Sources** (second row of the table).
- Test edits on non-production documents and compare the result with the source file.

### After rollout
- Re-read the Learn pages for Work IQ MCP policy once Microsoft publishes a page for this feature, and update the checklist.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tools may create, update or delete data (tenant policy)</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it governs this feature. The Policy tab appears when it is available; changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool can use</strong><br><small>Agent</small><br><small class="controls__note">Maker-side only. Whole workloads only, and it does not override organisational permissions or policies. Not confirmed as governing this feature.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Build › Tools › Work IQ › Edit tool › Sources <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
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

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; What's changing; Governance guidance; rationale: risk / absence: Microsoft Learn has no page describing this feature, leaving the roadmap as its only account. | Found: By using Office Document Tools in Work IQ, agents can create and edit Word documents, Excel workbooks, and PowerPoint presentations. | Fix: Replace the claims that Learn does not describe the feature with: 'Microsoft Learn now documents Office Document Tools in Work IQ in preview.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq. Retain the roadmap status and dates as roadmap targets, and explicitly report that Learn already describes the preview. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq
- [contradicted, blocker] What's changing / absence: How an agent creates or edits a document is not described. | Found: Both actions accept an optional `userRequest`. Invoke an available action through `do_action`, following its discovered schema. | Fix: Replace with: 'In preview, agents invoke /office-agent-mcp/generate_artifact or /office-agent-mcp/edit_artifact through do_action, using a complete content or change outline and the discovered schema.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq
- [contradicted, blocker] What's changing; Scope / absence: The covered file types are not described. | Found: By using Office Document Tools in Work IQ, agents can create and edit Word documents, Excel workbooks, and PowerPoint presentations. | Fix: Replace with: 'The documented preview covers Word documents, Excel workbooks and PowerPoint presentations.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing / licensing: The licensing model is unknown because nothing has been published for this feature. | Found: Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing. | Fix: Set licensing.model to 'consumption'. Replace 'Nothing is published for this feature' and the blanket unpublished-licence statement with: 'Office Document Tools use the Work IQ MCP interface; Work IQ API access uses consumption billing in Copilot Credits, independently of Microsoft 365 Copilot licensing. A document-specific rate is not yet published.' Cite the Work IQ overview and https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/
- [contradicted, blocker] Cost and licensing; Open questions / absence: Whether a Microsoft 365 Copilot licence is a prerequisite remains unpublished. | Found: Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing. | Fix: Replace with: 'Office Document Tools use Work IQ MCP, whose API access is independent of Microsoft 365 Copilot licensing and uses consumption billing.' Remove the corresponding licence-prerequisite open question; retain the narrower question about a document-specific rate. Cite the Work IQ overview and https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/
- [contradicted, blocker] Scope / absence: Prerequisites for this feature are not stated. | Found: Before using Office Document Tools, enable Work IQ in your organization. | Fix: Replace with: 'The preview requires Work IQ to be enabled in the organisation.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq
- [contradicted, blocker] Scope / absence: No prerequisite setup role is stated for this feature. | Found: A user with Global Administrator role for the one-time Work IQ setup | Fix: Replace the broad roles-unstated claim with: 'The linked Work IQ enablement guide requires a Global Administrator for the one-time Work IQ setup.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq. Do not infer a feature-specific day-to-day administrator role. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq
- [contradicted, blocker] controls[0].note; Governance controls; Open questions / applicability: Microsoft has not confirmed that Work IQ MCP mutation policy covers this feature. | Found: It adds a request-time governance layer that can allow or deny specific MCP tool requests based on tenant policy. | Fix: Replace this control's applicability disclaimer with: 'The documented Office Document Tools preview uses Work IQ MCP do_action requests, which fall within the Work IQ MCP tenant policy layer.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq and the policy page. Remove the blanket sentence that none of the controls is confirmed for this feature; retain any narrower uncertainty about the maker workload selector. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Open questions / absence: Microsoft has not stated that the document feature uses create_entity and update_entity. | Found: Searched: Work IQ updating documents Office create edit documents licensing November 2026. Opened Office Document Tools and MCP tool reference. Neither assigns create_entity or update_entity to this feature; Office Document Tools instead explicitly documents do_action. | Fix: Replace 'Whether the roadmap feature uses these tools is not stated' with 'The documented Office Document Tools preview uses do_action rather than describing creation and editing through create_entity and update_entity.' Remove the open question asking which of those tools it uses. Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/office-agent-iq.
-->
