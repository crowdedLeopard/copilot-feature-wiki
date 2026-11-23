---
title: "Microsoft 365 Copilot: communication memory and the Enhanced personalization control"
slug: "m365-copilot-enhanced-personalization-with-memory-in-copilot"
roadmapId: 499153
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot is building private memories from users' emails, chats and meeting transcripts, on by default for Copilot-licensed users. Administrators can switch it off tenant-wide or by group, through Microsoft Graph only."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Linux","Mac","Teams and Surface Devices","Web"]
targetDate: "September CY2025"
previewDate: null
risk: "high"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Message Center notice MC1127234 says the feature is available to Copilot-licensed enterprise users. The Learn page says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence. No separate price is published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["m365-copilot","copilot-chat","memory","personalisation","privacy","microsoft-graph","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 499153"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499153"
    kind: "roadmap"
  - title: "MC1127234"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1127234"
    kind: "message-center"
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Search for and delete AI application data in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-copilot-data"
    kind: "learn"
  - title: "Enhanced personalization control overview"
    url: "https://learn.microsoft.com/graph/control-enhanced-personalization-privacy"
    kind: "learn"
  - title: "enhancedPersonalizationSetting resource type"
    url: "https://learn.microsoft.com/graph/api/resources/enhancedpersonalizationsetting"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Get enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-get?view=graph-rest-beta"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-retention-for-copilot-memory","m365-copilot-copilot-response-personalization-memory-citations","ediscovery","auditing"]
controls:
  - governs: "Whether Enhanced personalization (and so Copilot memory) is on for the organisation or off for one Entra group"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "Beta API. Body: isEnabledInOrganization (required), disabledForGroup (optional Entra group ID). Needs PeopleSettings.ReadWrite.All; People Administrator is the least privileged delegated role."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-09T19:34:47"
changes:
  - date: "2026-11-23"
    note: "First briefing: communication memory in Copilot, its Enhanced personalization control (Graph beta API only) and the open licensing and cloud questions."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 58 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: custom instructions are not yet discoverable in eDiscovery, US Government clouds use PowerShell for deletion, and the Graph role and permission step is reworded."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 61 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "61b61bd536d1953ffc69cf57bd9b4b81"
---

## What's changing

Microsoft 365 Copilot is expanding Copilot memory so that it remembers key highlights from a user's person-to-person emails, chats and meetings. Microsoft's notice MC1127234 calls this communication memory and says it is an expanded capability of the existing memory in Copilot. Initially the memories improve Copilot's answers to people-related questions. The roadmap item says the memories are private to the user.

According to the notice, Copilot uses AI to analyse and summarise emails, chats and meeting transcripts into a live memory, stores the summaries in the user's mailbox for as long as the source item is available, and attaches source links to each memory so the user can check it. The summaries are generated by large language models and the notice says they may occasionally be inaccurate. The feature is on by default for Copilot-licensed users, and the Learn page for Copilot memory says Enhanced personalization is turned on by default.

The roadmap item is **Rolling out**, with a target of September CY2025, release phase General Availability, for Worldwide, GCC, GCC High and DoD, on Android, Desktop, iOS, Linux, Mac, Teams and Surface Devices and Web. The notice gives its own window: General Availability (Worldwide), with rollout beginning early September 2025 and expected to finish by the end of December 2026 (previously late January). It sets no act-by date.

The Learn page for Copilot memory carries a banner saying Copilot personalization and memory are in preview and subject to change, which differs from the roadmap's General Availability phase. It describes Copilot memory in general and does not name communication memory.

## Why it matters

This feature creates a new store of AI-written summaries of what people said to each other, and Microsoft's notice says it is on by default for Copilot-licensed users. If nobody acts, those users get memories built from their communications; the notice says disabling Enhanced personalization turns off all Copilot memory and personalisation features, so the decision is all or nothing for a given scope.

The control to decide on is a single tenant setting that is documented only as a Microsoft Graph beta API at the time of writing (November 2026). Rollout is expected to finish by the end of December 2026, so decide before then who should be excluded, and what you will tell users and your compliance team.

## Risk assessment

**Data exposure**

- Memories are summaries of private communications. Microsoft's data processing description for the control lists Teams chats, Outlook emails, meeting transcripts, Microsoft 365 usage data, profile information and connector data as inputs, and says the data is not shared with other users.
- Memories are stored in a hidden folder in the user's Exchange mailbox and follow the same security and compliance policies as other mailbox data. Retention policies and labels set in Purview do not apply to Copilot memory, and the page says there are no admin controls to enforce retention rules specifically for it.
- The Learn page says admins cannot restrict what type of information is added to Copilot memory. The control decides whether memory is used for a user, not what it holds.

**Security & identity**

- Administrators can search users' memory with Microsoft Purview eDiscovery or Content Search, so memories are reachable by people who hold those roles. The page locates them in the CopilotMemory folder under item class IPM.Contact. Custom instructions are not yet discoverable in eDiscovery or Content Search; users can manually export them through Settings > Personalization.
- Changing the control needs the Graph permission PeopleSettings.ReadWrite.All, and for delegated access the People Administrator role is the least privileged supported role. Restrict who holds it.

**Autonomy & actions**

- The notice describes memory as improving the quality of Copilot responses, initially to people-related questions. Because the summaries are LLM-generated and may be inaccurate, an inaccurate memory can shape answers; each memory carries source links for the user to review.

**Change & support**

- Per the notice, a user can delete a communication memory only by deleting the source email or message. Expect support questions when users cannot remove a memory directly.
- Memory and personalisation actions do not generate audit log entries in Purview, according to the Learn page, so you cannot rely on the audit log to show who changed or used memory.
- When Enhanced personalization is turned off, users cannot turn on the Custom instructions, Saved memories and Chat history controls in Settings > Personalization. The notice's completion date has already moved once, from late January to the end of December 2026.

## Cost and licensing

**Licence.** Notice MC1127234 says the feature is available to Copilot-licensed enterprise users. The Learn page 'Manage Copilot personalization and memory' says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence. The two statements are worded differently, and the Learn page does not name communication memory.

**Meter.** No price, credit rate or separate meter for this feature is published on the pages read at the time of writing (November 2026).

**Indirect cost.** Admin time to set the control through Microsoft Graph, user communication about what memory stores, and eDiscovery work if you answer data subject requests that involve memory. The Learn page documents eDiscovery and Microsoft Graph Explorer as the route to search, export and delete users' memory data. For US Government clouds, the deletion guide says to use PowerShell because Microsoft Graph Explorer is unavailable.

## Scope

**Users and licences.** The notice says the feature is on by default for Copilot-licensed users and available to Copilot-licensed enterprise users. The control can be scoped to the whole organisation or can exclude one Microsoft Entra group.

**Clouds and platforms.** The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the platforms Android, Desktop, iOS, Linux, Mac, Teams and Surface Devices and Web. The notice gives its rollout window for Worldwide only. The Graph update API page, however, lists US Government L4 and L5 (DOD) as not available for that API. Where these differ, the sources have not been reconciled; see Open questions.

**Rollout.** Rollout began in early September 2025 and, per the notice, is expected to finish by the end of December 2026. **Roles.** Changing the control through Graph needs PeopleSettings.ReadWrite.All; People Administrator is the least privileged Microsoft Entra role the API page lists for delegated access.

## Governance guidance

### Before rollout

- Decide with your privacy and compliance leads whether Enhanced personalization stays on for the whole tenant, for some users, or for none. Disabling it turns off all Copilot memory and personalisation features, not communication memory alone.
- Create or choose a Microsoft Entra group for users to exclude, and note its object ID for the disabledForGroup property.
- For delegated access, assign the caller a supported Microsoft Entra role (People Administrator is the least privileged) and ensure the application has the PeopleSettings.ReadWrite.All permission.
- Brief your records and eDiscovery owners that Purview retention policies and labels do not apply to Copilot memory and that memory actions are not written to the Purview audit log.

### At rollout

- Send the PATCH call in the controls table with isEnabledInOrganization and, if needed, disabledForGroup, then read the setting back with the Get method on the same resource.
- Tell users that each communication memory has source links, that it is deleted by deleting the source email or message, and that their complete memory can be downloaded through the profile card export.
- Tell users that if the administrator control is off, their Settings > Personalization controls for Custom instructions, Saved memories and Chat history show as off and cannot be turned on.

### After rollout

- Re-read notice MC1127234 and the Learn page for Copilot memory each month until the end-of-December 2026 completion date has passed, because the date has already been revised once.
- Check what changed for users when the control was turned off: saved memories and custom instructions are kept but not applied, and chat history details are deleted after 30 days.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Enhanced personalization (and so Copilot memory) is on for the organisation or off for one Entra group</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. Body: isEnabledInOrganization (required), disabledForGroup (optional Entra group ID). Needs PeopleSettings.ReadWrite.All; People Administrator is the least privileged delegated role.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

There is one control for this feature at the time of writing (November 2026): the Enhanced personalization setting, documented as a Microsoft Graph beta API. The Learn page for Copilot memory says that if the control is turned off, Copilot stops applying saved memories and custom instructions but does not remove them, and that chat history details are deleted after 30 days.

Microsoft Learn documents no admin centre setting for it, so the ui side is shown as not yet documented. Graph beta APIs are subject to change and Microsoft says they are not supported in production applications. Group exclusion is the disabledForGroup property of the same call, which takes the ID of one Microsoft Entra group.

Purview retention policies and labels do not apply to Copilot memory, and eDiscovery is the documented route to search, export and delete memory data. Custom instructions are not yet discoverable in eDiscovery or Content Search; users can manually export them through Settings > Personalization. Memory actions do not generate Purview audit log entries.

## Open questions

- Which Microsoft 365 licence does communication memory need: the notice says Copilot-licensed users, while the Learn page says Copilot memory is available to Copilot Chat users with and without a Copilot licence? Watch the Learn page for Copilot memory and Message center.
- Will communication memory be covered on the Learn memory retention page, so that administrators know what happens to existing communication memories when Enhanced personalization is turned off? The page currently describes custom instructions, saved memories and chat history.
- Does the GCC, GCC High and DoD cloud listing on the roadmap item mean communication memory and the Graph control reach those clouds, given the notice's Worldwide rollout window and the API page's availability table?
- Will the Learn preview banner on the Copilot memory page be removed now that the roadmap shows General Availability?
- Will Microsoft add an admin centre setting for Enhanced personalization alongside the Graph beta API?

<!-- rationale
risk: High. Microsoft's notice says the feature is on by default and processes users' emails, chats and meeting transcripts, while the Learn page says retention policies do not apply to memories and admins cannot restrict what is stored.
cost: Low. Indirect cost only: admin time to decide the setting and brief users. The notice limits the feature to Copilot-licensed users, and no separate price or meter is published.
impact: High. The notice says the feature is on by default for Copilot-licensed users, so most Copilot users in a tenant will have memories built from their communications unless an administrator acts.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Indirect cost / availability: The deletion guide says US Government clouds must use PowerShell because Graph Explorer is unavailable. | Found: Step 5: "isn't available in some US Government clouds (GCC High and DOD)". PowerShell section: "isn't available in the US Government cloud (GCC, GCC High, and DOD), you must use PowerShell". | Fix: Replace the US Government sentence with: 'The deletion guide gives inconsistent cloud guidance: Step 5 names GCC High and DOD as requiring PowerShell because Graph Explorer is unavailable, while its PowerShell section also lists GCC.' Keep the citation to https://learn.microsoft.com/purview/edisc-search-copilot-data. | Source: https://learn.microsoft.com/purview/edisc-search-copilot-data
- [supported, minor] Governance controls / behaviour: There is one control for this feature: the Enhanced personalization administrator setting. | Found: Enhanced personalization is the control that allows Copilot memory to be used by end-users. ... user-level controls for Custom instructions, Saved memories, and Chat history in Settings > Personalization | Fix: Replace 'There is one control for this feature at the time of writing (November 2026)' with 'The documented administrator control for this feature at the time of writing (November 2026) is the Enhanced personalization setting'. Remove the repeated setting name immediately after that replacement, retaining 'documented as a Microsoft Graph beta API'. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
-->
