---
title: "Work IQ: agents upload files and content to Microsoft 365"
slug: "work-iq-upload"
roadmapId: 570850
topic: "copilot-studio"
products: ["Work IQ"]
summary: "Microsoft plans an upload capability in Work IQ so agents can put files and content into supported Microsoft 365 destinations. Learn does not yet describe it; administrators should review the Work IQ write controls."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's Work IQ overview says API access is independent of Microsoft 365 Copilot licensing, is available through usage-based billing and consumes Copilot Credits. No rate for upload is published."
audiences: ["m365-admin","security","service-owner","finops"]
tags: ["work-iq","agents","file-upload","microsoft-365-files","mcp","write-actions","copilot-credits","usage-based-billing"]
sources:
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "SharePoint Tools for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/sharepoint-iq"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Work IQ API permissions reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Work IQ in Microsoft Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Microsoft 365 Roadmap: Work IQ: Upload"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570850"
    kind: "roadmap"
videos: []
related: ["work-iq","work-iq-agent-policy-governance","work-iq-granular-mcp-policies","mcp","copilot-credits"]
controls:
  - governs: "Whether Work IQ MCP tool requests, including write requests, are governed by tenant policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "General control: Microsoft has not confirmed it covers upload. The Policy tab shows 'when it's available'; changes can take up to 24 hours."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap-only item, with background from the Work IQ overview, SharePoint Tools and MCP policy pages."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: aligned the user-scope, WorkIQ.Act and overwrite statements with Learn, added the Copilot Studio write-default note and the setup wording, and removed checklist items without control rows."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 69 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: the Governance controls notes no longer say the tenant MCP policy is the only control gating agent writes; the SharePoint Tools page also documents OAuth scopes gating write paths."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 72 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "faabe2e11666777a4ec6f69d05e8b546"
---

## What's changing

The roadmap item "Work IQ: Upload" (ID 570850) says it will "enable agents to upload files and content to supported Microsoft 365 destinations". It lists the product as Work IQ, the platform as Web and the cloud as Worldwide (Standard Multi-Tenant).

Microsoft Learn does not describe a feature of this name at the time of writing (November 2026), so what follows about behaviour is the roadmap's description. The record gives no destinations, no default state and no more-info link.

The nearest documented material is background, not a description of this item. Microsoft's SharePoint Tools for Work IQ page, marked public preview, lists a "Prepare file transfers" scenario: agents can obtain "download instructions and upload-session details, including resumable upload sessions", and "file-transfer preparation doesn't transfer the file bytes". Whether this roadmap item builds on that scenario is not stated.

The roadmap record shows status In development, with a target date and a preview date of October CY2026, and release phases General Availability and Preview. Both dates are targets, and the record does not say which phase applies to which part of the capability.

## Why it matters

Upload is a write action: an agent would put content into Microsoft 365 rather than read from it. That moves the question from what an agent can see to what it can leave behind, and where.

Microsoft has not stated what happens on arrival, so this page does not assume that existing behaviour changes. Microsoft's documented Work IQ MCP policy blocks mutation operations by default, but no page says whether uploads count as mutation operations, so confirm that before relying on the default. The Work IQ in Copilot Studio page separately says write operations are on by default, subject to organisational permissions and policies; Microsoft does not reconcile these descriptions.

## Risk assessment

**Data exposure**
- The roadmap says content goes to "supported Microsoft 365 destinations" and Learn names none. Until Microsoft lists them, you cannot tell which sites, libraries or OneDrive locations an agent could write to.
- Microsoft's Work IQ pages state that requests run in the context of the signed-in user and that OAuth scopes "don't grant access beyond the signed-in user's existing SharePoint permissions" for SharePoint Tools. The Work IQ overview states that every request runs in a user's context and only accesses what that user is allowed to see or do.

**Security & identity**
- For SharePoint Tools, Microsoft documents `WorkIQ.Act` for actions that change SharePoint content or configuration, and documents admin consent as required for it.
- Microsoft Learn does not say whether sensitivity labels or other protections are applied to files an agent uploads. Confirm this before piloting.

**Autonomy & actions**
- The roadmap says agents will upload files and content; it does not describe overwrite behaviour. Microsoft has not said whether upload needs user approval; the Work IQ human-in-the-loop item is a separate roadmap entry and is not confirmed to apply here.

**Change & support**
- Microsoft documents that an MCP request can fail on tenant policy even when the user and app are authorised. Expect support questions that look like permission errors but come from policy.
- Microsoft says the paths and parameters Work IQ exposes for SharePoint Tools "evolve over time", so scripts that assume a fixed upload call may break.

## Cost and licensing

Microsoft's Work IQ overview says API access "is independent of Microsoft 365 Copilot licensing and available through usage-based billing". For Microsoft 365 Copilot licensed users, Work IQ is available in Microsoft 365 Copilot experiences and agents, subject to usage-based billing for custom and third-party agents. Users without a Copilot licence are billed on usage. The same page says Work IQ API usage consumes Copilot Credits shared with other eligible services (see [Copilot Credits](/concepts/copilot-credits/)).

The enablement page lists a usage-based billing plan in Copilot Studio, with an Azure subscription and resource group, as a prerequisite for Work IQ.

Not yet published: a credit rate or limit for upload, and any storage charge for the destination. Microsoft Learn names no licence specific to this item.

## Scope

- **Product and platform:** Work IQ, platform Web, per the roadmap record.
- **Cloud:** Worldwide (Standard Multi-Tenant) only, as the record lists it. Other clouds are not listed on the item; that is a record fact, not a statement that the feature is unavailable elsewhere.
- **Rollout:** In development, with a target date and preview date of October CY2026 (targets only). Microsoft has not stated a rollout mechanism or default.
- **Prerequisites documented for Work IQ:** the enablement guide lists a Global Administrator for manual one-time setup; the MCP overview also says the service principal is created automatically on first use. A usage-based billing plan is required. Applications need `WorkIQ.Read` or `WorkIQ.Act` before SharePoint Tools paths are discoverable.
- **Destinations:** Not yet published.

## Governance guidance

### Before rollout
- Read the Work IQ MCP policy state now so you know whether write requests are blocked in your tenant (see the policy row below).

### At rollout
- Check the Message center and the roadmap item for a post that names the supported destinations and the default.
- Test an upload from a pilot agent with a test user, and confirm that the destination follows that user's permissions.
- Hold off allowing mutation scenarios in the Work IQ MCP policy until Microsoft confirms that uploads are covered by it.

### After rollout
- Review where agent-created files land, and who can open them, in the destinations Microsoft lists.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tool requests, including write requests, are governed by tenant policy</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it covers upload. The Policy tab shows 'when it's available'; changes can take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents the tenant-level Work IQ MCP policy as a control over MCP tool requests. The policy page says that in the initial release control is tenant-level, and that per-user, per-app, per-agent or scenario-specific templates are not part of it. It is a general control: no page confirms it covers this upload capability.

Microsoft Learn documents no API call for the Work IQ MCP policy toggle at the time of writing (November 2026), so that side of the row is empty.

Work IQ scopes `WorkIQ.Read` and `WorkIQ.Act` are consented by an administrator, per the permissions page. Tenant provisioning of the Work IQ service principal is documented on the enablement page, which uses Graph Explorer or the Azure CLI rather than an admin centre path. Microsoft's overview says Work IQ cost can be managed in the Microsoft 365 admin center; see that page for the controls, which are not listed as a row here.

## Open questions

- Which destinations count as "supported Microsoft 365 destinations" (for example SharePoint document libraries, OneDrive, Teams)? Watch the roadmap item and the SharePoint Tools for Work IQ page.
- Is this item the same as the documented SharePoint Tools "Prepare file transfers" scenario, which does not transfer file bytes, or a separate capability that does?
- Does the Work IQ MCP policy that blocks mutation operations by default also block uploads, and is there a finer control?
- Is upload on by default, or does an administrator or maker enable it? The roadmap and Learn do not say.
- What does an upload cost in Copilot Credits, and what limits apply to file size and volume?

<!-- rationale
risk: Medium. The roadmap says agents will write files and content into Microsoft 365, but Microsoft Learn does not yet describe which destinations are supported or which control covers uploads.
cost: Variable. Microsoft Learn says Work IQ is available through usage-based billing and consumes Copilot Credits; no upload-specific rate is published.
impact: Low. The roadmap item is for agents and the people building them; no source says end users see anything change, and the only platform listed is Web.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / record: Work IQ: Human in the loop is a separate roadmap entry. | Found: "id": 570672, "title": "Work IQ: Human in the loop", "description": "Allow agents and agent flows to pause for human input or approval before continuing." | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=570672 to sources for the statement about the separate Work IQ: Human in the loop entry.
-->
