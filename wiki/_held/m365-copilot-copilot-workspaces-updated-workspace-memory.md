---
title: "Microsoft 365 Copilot: updated workspace memory in Copilot Workspaces"
slug: "m365-copilot-copilot-workspaces-updated-workspace-memory"
roadmapId: 580869
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans for Copilot to keep context from your work in a workspace, using Work IQ, across sessions. Microsoft Learn does not yet describe the feature, its default, its licence or an admin control, so admins should prepare questions now."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for workspace memory. Microsoft's service description says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites, but no page says which licence Copilot Workspaces needs."
audiences: ["m365-admin","service-owner","security","compliance"]
tags: ["m365-copilot","work-iq","memory","privacy"]
sources:
  - title: "Microsoft 365 Roadmap: Copilot Workspaces - Updated workspace memory"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580869"
    kind: "roadmap"
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Enhanced personalization control overview"
    url: "https://learn.microsoft.com/graph/control-enhanced-personalization-privacy"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft 365 Copilot service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-retention-for-copilot-memory","work-iq"]
controls:
  - governs: "Whether workspace memory is available to users"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin switch for workspace memory is documented. The enhanced personalization setting is documented for Copilot memory only."
confidence: "low"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-22"
    note: "First briefing on this roadmap item: documents the plan, the lack of Learn coverage and the questions to put to Microsoft."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 59
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "9865b6dfc166031a5f26ecc0a06212e9"
---

## What's changing

The roadmap item describes an update to workspace memory in Copilot Workspaces. With Work IQ, Copilot can retain useful context from how a person works in a workspace, so later responses are more relevant, consistent and personalised. The roadmap gives examples of what Copilot can use as saved memory: workspace details, working preferences and recurring instructions. The stated aim is to reduce repeated setup and help people continue work across workspace sessions.

The roadmap item lists the Desktop and Web platforms, and the Worldwide (Standard Multi-Tenant) cloud. Its release phases are General Availability and Preview. The status is In development, with a preview date of November CY2026 and a target date of December CY2026. These are Microsoft's targets, not commitments. The record has no more info link, and no Message Center post for this item was supplied.

Microsoft Learn does not describe Copilot Workspaces or workspace memory at the time of writing (November 2026), so everything above about behaviour is the roadmap's description. Microsoft has not stated whether the memory is on by default, where it is stored or who can see it.

Microsoft does document a separate feature, Copilot memory, which keeps saved memories, details inferred from chat history and custom instructions. That page says Copilot personalization and memory are in preview. It is background only: nothing on the roadmap item or on that page says workspace memory works the same way.

## Why it matters

Memory turns a Copilot session into something that keeps what it learned about how someone works. For a service owner, that is a new store of content derived from people's work, and Microsoft has not yet said who controls it, how long it lasts or whether it appears in audit and discovery tooling.

If nobody acts, Microsoft has not stated what happens on arrival. No source says existing behaviour changes, and none says it stays the same. The sensible view is to treat this as arriving in December CY2026 and to ask the control questions before the preview reaches users, rather than after.

## Risk assessment

**Data exposure**
- Copilot is planned to save workspace details, working preferences and recurring instructions. Microsoft has not said where this memory is stored, which workspace members can see it or whether it is derived from files, chats or both.
- For the separate Copilot memory feature, Microsoft documents that memories are stored in the user's Exchange mailbox in a hidden folder and are discoverable through eDiscovery. Whether workspace memory is stored or discoverable the same way is not documented.

**Security & identity**
- The roadmap says the update uses Work IQ. Microsoft has not said whose permissions apply when workspace memory is saved or reused. Confirm that before telling users it is safe to put sensitive material in a workspace.

**Autonomy & actions**
- The roadmap describes memory that improves responses, with no mention of Copilot acting on its own. Recurring instructions saved in a workspace can still change what Copilot produces for later sessions, so wrong or stale memory would carry forward.

**Change & support**
- Expect questions from users about why Copilot remembers something and how to remove it. Microsoft Learn documents no end-user or admin way to view or delete workspace memory at the time of writing (November 2026).
- For the separate Copilot memory feature, Microsoft documents that admins cannot restrict what type of information is added to memory, that Purview retention policies and labels do not apply to it, and that memory and personalization actions produce no Purview audit entries. Do not assume the same or different for workspace memory until Microsoft says.

## Cost and licensing

No licence, meter or credit rate for workspace memory is published at the time of writing (November 2026), and the roadmap item names none. Microsoft's service description says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites, but it does not say which licence Copilot Workspaces needs, so the licensing model stays "Not yet published".

For the separate Copilot memory feature, Microsoft's page says it is available to Copilot Chat users with and without a Microsoft Copilot licence. That page does not mention workspaces, so it should not be read as the licence rule for this item.

The cost known today is indirect: admin time to confirm the controls and to brief users.

## Scope

The roadmap item covers the Desktop and Web platforms and lists only the Worldwide (Standard Multi-Tenant) cloud. It does not list GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there.

Who in a tenant gets workspace memory, which licences are needed, which admin roles configure it and whether preview is opt-in are not stated. The roadmap lists General Availability and Preview as release phases, with preview targeted for November CY2026 and general availability for December CY2026.

## Governance guidance

### Before rollout
- Ask your Microsoft account team or watch Message center for a post on this roadmap item (580869) that gives the default, the rollout window and any act-by date.
- Check whether Copilot Workspaces is already in use in your tenant, and list the teams who would see workspace memory first.
- Decide, with your compliance and security leads, what you need from workspace memory before allowing it: deletion, audit, retention and eDiscovery coverage.
- Note that the enhanced personalization setting in Microsoft Graph governs Copilot memory; confirm with Microsoft whether it also covers workspace memory before relying on it.

### At rollout
- Test with a small pilot group once preview is available, and record what Copilot saves, where users can see it and how they remove it.
- Brief pilot users not to put regulated or confidential content into recurring instructions until you know how memory is stored and reviewed.
- Compare the pilot's behaviour with the Copilot memory documentation to see whether the same controls apply, and write down any difference you find.

### After rollout
- Review support tickets for memory complaints, such as outdated instructions or unexpected context.
- Re-check Microsoft Learn for a Copilot Workspaces page and update your control inventory when one appears.
- Re-test eDiscovery and audit for workspace memory data once Microsoft documents where it is kept.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether workspace memory is available to users</strong><br><small>Tenant</small><br><small class="controls__note">No admin switch for workspace memory is documented. The enhanced personalization setting is documented for Copilot memory only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin control specific to workspace memory at the time of writing (November 2026), so the table shows that gap as a row with both sides marked as not yet documented.

The nearest documented control belongs to a different feature. The enhanced personalization setting, which a Global Administrator or the People Administrator role manages, is described as the control that allows Copilot memory to be used by end users, and it can be disabled for the tenant or for a Microsoft Entra group. Microsoft's Graph reference documents an update call as `PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization`, a beta API. Microsoft states it as the control for Copilot memory and personalised recommendations; it does not say it governs workspace memory, so confirm before relying on it.

## Open questions

- Is workspace memory on by default for Copilot Workspaces, or does a user or admin have to turn it on? Watch Message center and the roadmap item for the answer.
- Which licence does Copilot Workspaces, and so its memory, require, and does it consume any meter?
- Where is workspace memory stored, who in a workspace can see or edit it, and can users and admins delete it?
- Does the enhanced personalization setting, or any other admin switch, turn workspace memory off for a tenant or group?
- Are workspace memory contents covered by Purview retention, audit and eDiscovery?

<!-- rationale
risk: Medium. The roadmap says Copilot will save workspace details, working preferences and recurring instructions, and Microsoft Learn documents no admin control, default or retention rule for workspace memory at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin time; no licence, meter or credit rate for workspace memory is published, and the roadmap item names none.
impact: Medium. People who use Copilot Workspaces on desktop or the web would see Copilot reuse saved context; the roadmap does not say how many users have workspaces or whether the memory is on by default.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / applicability: Copilot memories are discoverable through eDiscovery, without distinguishing custom instructions from saved and inferred memories. | Found: Saved memories and inferred memories from your chat history are discoverable using eDiscovery and Microsoft Graph Explorer. Custom instructions aren't yet discoverable in these solutions. | Fix: Replace the background sentence with: 'For the separate Copilot memory feature, Microsoft documents that memories are stored in the user's Exchange mailbox in a hidden folder. Saved memories and inferred memories from chat history are discoverable through eDiscovery, but custom instructions are not yet discoverable.' Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
- [contradicted, blocker] controls[0].note; rendered Governance controls table / applicability: The enhanced personalization setting is documented for Copilot memory only. | Found: Copilot memory - Memory and personalization make Copilot personalized to you and your work. Personalized recommendations - Microsoft Copilot users who have Copilot memory enabled can discover capabilities through personalized recommendations tailored to their role | Fix: Replace controls[0].note and the matching rendered note with: 'No admin switch specific to workspace memory is documented. Enhanced personalization is documented for Copilot memory and personalized recommendations; Microsoft does not identify workspace memory as a linked feature.' Source: https://learn.microsoft.com/graph/control-enhanced-personalization-privacy | Source: https://learn.microsoft.com/graph/control-enhanced-personalization-privacy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and licensing.notes; Cost and licensing / licensing: The licensing model is unknown because no workspace-memory-specific licence is published. | Found: Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. | Fix: Set licensing.model to included. Replace the notes with: 'This is a new option inside Microsoft 365 Copilot, which the service description identifies as an add-on plan with specific licensing prerequisites. Workspace-memory-specific licensing terms are not yet published.' Keep the cited service-description URL. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Microsoft's service description says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. | Found: Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. | Fix: After this attributed sentence, add: 'Microsoft's License options for Microsoft Copilot page also says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible subscription plans.' Add https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-licensing to sources. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [supported, minor] Why it matters / date: Administrators should treat this as arriving in December CY2026. | Found: "status": "In development", "targetDate": "December CY2026" | Fix: Replace 'The sensible view is to treat this as arriving in December CY2026' with 'The sensible view is to plan against the roadmap target of December CY2026, not a confirmed arrival date'.
-->
