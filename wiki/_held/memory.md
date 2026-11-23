---
kind: "concept"
title: "Agent memory: what does Copilot remember about a user, and who can switch it off?"
slug: "memory"
summary: "Memory lets Microsoft 365 Copilot and Copilot Studio agents keep facts about a user between conversations. Administrators use it to decide whether it is on, what survives switching it off, and how a user's memories are found and deleted."
created: "2026-11-23"
updated: "2026-11-23"
version: 1
tags: ["memory","personalisation","m365-copilot","copilot-chat","copilot-studio","privacy","ediscovery"]
covers: []
sources:
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Enhanced personalization control overview"
    url: "https://learn.microsoft.com/graph/control-enhanced-personalization-privacy"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Get enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-get?view=graph-rest-beta"
    kind: "learn"
  - title: "enhancedPersonalizationSetting resource type"
    url: "https://learn.microsoft.com/graph/api/resources/enhancedpersonalizationsetting"
    kind: "learn"
  - title: "Search for and delete AI application data in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-copilot-data"
    kind: "learn"
  - title: "Memory management and privacy"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-manage-privacy"
    kind: "learn"
  - title: "How agents determine what to remember"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-what-agents-remember"
    kind: "learn"
related: ["work-iq","ediscovery","retention","copilot-credits","m365-copilot-enhanced-personalization-with-memory-in-copilot","microsoft-purview-data-lifecycle-management-retention-for-copilot-memory","work-iq-memory-capabilities-expand-to-agents"]
controls:
  - governs: "Whether Copilot memory (Enhanced personalization) is on for the tenant, with an optional Entra group it is disabled for"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/settings/people/enhancedpersonalization"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "Request body sets isEnabledInOrganization (required) and disabledForGroup (Entra group ID, optional). Least privileged role: People Administrator. Beta."
  - governs: "Whether a Copilot Studio agent uses Memory"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Build > components panel > Memory"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-manage-privacy"
    api: null
    note: "Maker-side. Turning Memory off stops the agent saving or using memories but does not delete stored memories right away."
  - governs: "Deleting a user's stored Copilot memory"
    scope: "user"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseID}/searches/{ediscoverySearchID}/purgeData"
      docs: "https://learn.microsoft.com/purview/edisc-search-copilot-data"
    note: "Needs the Search And Purge role. The search, built in eDiscovery, matches the IPM.Contact item class. Up to 10 items per mailbox at a time."
confidence: "medium"
dependents: 8
changes:
  - date: "2026-11-23"
    note: "New concept page covering Microsoft 365 Copilot memory (Enhanced personalization) and Copilot Studio agent memory."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 68 statements contradicted, 4 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 62
  unconfirmed: 4
  contradicted: 2
  attempts: 1
  hash: "98a6348af13d37ab3e79dd47d7e7c6ff"
---

## What it is

Memory is stored context about a person that an AI assistant carries from one conversation to the next, so that the user does not have to restate it. Microsoft documents two separate memory systems, and this page is mainly about the first.

### Microsoft 365 Copilot memory

Microsoft Copilot memory covers saved memories, details inferred from chat history, and custom instructions. These are stored in the user's Exchange mailbox in a hidden folder, so they follow the same security and compliance policies as other mailbox data. The page that documents it is marked as preview.

A tenant-level control called **Enhanced personalization** decides whether Copilot memory can be used. Microsoft's control overview says it also covers personalized recommendations, and that it draws on private communication data such as Teams chats, Outlook emails and transcripts. Users have their own switches for Custom instructions, Saved memories and Chat history under Settings > Personalization; if an administrator turns Enhanced personalization off, those user switches show as off and users cannot turn them on.

### Copilot Studio agent memory

Agents built on the Microsoft Copilot harness in Copilot Studio have their own Memory feature. An agent saves memories on request or automatically, and makers and users review them in a memory portal where each person sees only their own. Memories are kept per tenant, environment, agent and user, and one agent's memory is not available to another. Agents that have their own account use shared memory instead. Learn describes this feature as rolling out for general availability, and as possibly still in preview in some regions.

The two systems have separate controls. See [/concepts/work-iq/](/concepts/work-iq/) for how agents reach a user's Microsoft 365 data.

## Why it matters

Memory is on unless someone acts. Microsoft's page says Enhanced personalization is turned on by default and that no action is needed to turn Copilot memory on, only to turn it off for users or the tenant. A tenant that has not decided is therefore already storing inferred details about each user's work in their mailbox.

What an administrator can then decide is narrow and documented: whether the control is on for the tenant or off for one Entra group, how a user's stored memories are found and deleted, and, in Copilot Studio, whether a maker lets an agent use Memory at all. What an administrator cannot see is also documented: Microsoft states that memory actions do not generate Purview audit entries.

## Cost and licensing

Microsoft states that Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence. The Manage Copilot personalization and memory page publishes no separate price or meter for memory, so it does not give a figure to budget for.

Copilot Studio agents built on the Microsoft Copilot harness use usage-based billing, and using, building, testing and evaluating them might consume Copilot Credits. Rates are held on [/concepts/copilot-credits/](/concepts/copilot-credits/); the memory pages publish no rate specific to Memory.

## Risks and limits

- **Switching the control off does not delete anything.** With Enhanced personalization off, Copilot stops applying custom instructions and saved memories but does not remove them. Details from chat history are deleted after 30 days. A tenant that switches memory off for compliance reasons still holds the stored items for a time.
- **Purview retention does not reach memory.** Learn says retention policies and labels do not apply to Copilot memory and that there are no admin controls to enforce retention rules specifically for it. The roadmap-based briefing at [/features/microsoft-purview-data-lifecycle-management-retention-for-copilot-memory/](/features/microsoft-purview-data-lifecycle-management-retention-for-copilot-memory/) records a different expectation; confirm before relying on retention.
- **You cannot restrict what goes into memory.** Learn says administrators cannot restrict what type of information is added, so sensitive details a user shares in chat can be remembered.
- **There is no audit trail.** Memory and personalization actions do not generate Purview audit log entries, so [/concepts/auditing/](/concepts/auditing/) cannot show who changed or read a memory.
- **Deleting a chat does not delete its memory.** Removing a conversation from Purview or eDiscovery does not delete the associated Copilot memory, and deleting a chat does not delete saved memories generated from it.
- **Deletion through eDiscovery is an event tool.** It removes up to 10 items per mailbox at a time, needs any hold or retention policy on the mailbox removed first, and custom instructions are not discoverable.
- **The Graph control is beta.** Microsoft states beta APIs are subject to change and not supported in production. The operation is documented as unavailable in US Government L4, L5 (DOD) and China operated by 21Vianet.
- **Copilot Studio memory expires on its own clock.** Memories are deleted after 28 days of inactivity, and admins can view users' memories only by submitting a support ticket.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot memory (Enhanced personalization) is on for the tenant, with an optional Entra group it is disabled for</strong><br><small>Tenant</small><br><small class="controls__note">Request body sets isEnabledInOrganization (required) and disabledForGroup (Entra group ID, optional). Least privileged role: People Administrator. Beta.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/settings/people/enhancedpersonalization</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a Copilot Studio agent uses Memory</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Turning Memory off stops the agent saving or using memories but does not delete stored memories right away.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Build › components panel › Memory <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-manage-privacy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Deleting a user's stored Copilot memory</strong><br><small>User</small><br><small class="controls__note">Needs the Search And Purge role. The search, built in eDiscovery, matches the IPM.Contact item class. Up to 10 items per mailbox at a time.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseID}/searches/{ediscoverySearchID}/purgeData</code> <a href="https://learn.microsoft.com/purview/edisc-search-copilot-data" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Enhanced personalization has no documented admin centre path at the time of writing (November 2026). Microsoft's own page points administrators to a Microsoft Graph script. The least privileged Entra role Microsoft lists for the update is People Administrator, with the PeopleSettings.ReadWrite.All permission. The `GET` on the same path reads the current state.

The Graph control and the Copilot Studio Memory toggle are independent. Microsoft's control overview ties Enhanced personalization to Copilot memory; whether it governs Copilot Studio agent memory is not stated. Retention policies cannot be used as a memory control, and the eDiscovery row is a clean-up route, not a switch.

## What to check

- Read the setting with a Graph GET and note whether isEnabledInOrganization is true and whether disabledForGroup is populated.
- Decide whether memory should be off tenant-wide or for a group, and set it with the PATCH row above.
- Tell users that switching the control off leaves stored memories in place and that chat-history details are deleted after 30 days.
- Confirm which role holds Search And Purge before you need to delete a user's memory.
- Review each Copilot Studio agent that uses the Microsoft Copilot harness and confirm whether its Memory toggle is on.
- Check with your compliance team that nothing relies on Purview retention or audit to cover memory.

## Open questions

- Does Enhanced personalization also switch off Copilot Studio agent memory? The pages read tie it only to Copilot memory.
- Will an admin centre setting for Enhanced personalization be published? Learn documents no admin centre path at the time of writing.
- Does Purview retention apply to memory? Learn says not, while the roadmap lists retention for Copilot memory as launched.
- Which controls will cover memory used through the Work IQ MCP path for agents? See [/features/work-iq-memory-capabilities-expand-to-agents/](/features/work-iq-memory-capabilities-expand-to-agents/).

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters / default: A tenant that has not decided is already storing inferred work details about each user in their mailbox. | Found: Searched: "Copilot memory" "each user" "default". Opened Manage Copilot personalization and memory and Enhanced personalization control overview. They establish the enabled control and mailbox storage, not that every user already has inferred memories. | Fix: Replace the sentence with: 'A tenant that has not changed the default allows Copilot memory to be used.' The documented default does not establish that inferred details have already been stored for every user.
- [contradicted, blocker] Risks and limits > Switching the control off does not delete anything / behaviour: Switching Enhanced personalization off does not delete anything. | Found: If the Enhanced personalization control is turned off at the admin-level, or if the Chat history control is turned off at the end-user level, then all details from chat history are deleted after 30 days. | Fix: Replace the bullet's bold lead with 'Switching the control off does not delete custom instructions or saved memories.' Keep the following sentence explaining that chat-history details are deleted after 30 days; it is an exception to the current absolute lead. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
- [unsupported, blocker] Open questions > Does Purview retention apply to memory? / availability: The roadmap lists retention for Copilot memory as launched. | Found: Searched: "Copilot memory" "retention" "launched"; "Copilot memory" "retention for Copilot memory". Opened https://www.microsoft.com/microsoft-365/roadmap?id=569612; its returned page did not expose the item's status. The linked wiki briefing is not evidence. | Fix: Remove 'while the roadmap lists retention for Copilot memory as launched' from this open question. Keep the link to the roadmap-based briefing in Risks and limits, without asserting a launch status that was not verifiable on a Microsoft page.
- [unsupported, blocker] Risks and limits > Copilot Studio memory expires on its own clock / admin-path: Administrators can view users' Copilot Studio memories only by submitting a support ticket. | Found: Searched: "Copilot Studio" "memories" "admin" "support ticket". Opened Memory management and privacy, whose note says admins 'can submit a support ticket'; it does not state that this is the only possible route. | Fix: Replace 'admins can view users' memories only by submitting a support ticket' with 'Microsoft says admins can submit a support ticket to view users' memories', matching https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-manage-privacy.
- [unsupported, blocker] What it is > Copilot Studio agent memory; Governance controls / applicability: The tenant Enhanced personalization control and the Copilot Studio Memory toggle are independent. | Found: Searched: "Enhanced personalization" "Copilot Studio" memory independent. Read Enhanced personalization control overview and Memory management and privacy. They document two controls, but do not establish that their effects are independent. | Fix: Replace 'The two systems have separate controls' and 'The Graph control and the Copilot Studio Memory toggle are independent' with 'Microsoft documents an Enhanced personalization control for Copilot memory and an agent-level Memory toggle in Copilot Studio.' Keep the existing caveat that their interaction is not stated.
- [contradicted, blocker] Risks and limits > Deleting a chat does not delete its memory / behaviour: Deleting a chat does not delete its memory, without distinguishing saved memories from inferred chat-history details. | Found: If a user deletes all chats where a piece information was originally shared or referenced, then all traces of that information are deleted from the Chat History details within seven days. | Fix: Replace the bullet's bold lead with 'Deleting a chat does not delete its saved memories.' Keep the following statements about saved memories and Purview deletion; do not extend the saved-memory rule to inferred chat-history details. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is; sources / behaviour: Memory carries learned information about a person into later conversations so the person need not repeat it. | Found: Memory lets an agent carry what it learns into later conversations, such as a person's role, preferences, and corrections. People don't need to repeat themselves, and the agent builds on what it already knows instead of starting over. | Fix: Add the Microsoft pages supporting the definition and harness applicability to sources: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview and https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview
-->
