---
title: "Microsoft 365 Copilot: past Copilot chats appear in search results, with a Copilot Chats data source"
slug: "m365-copilot-copilot-chats-conversations"
roadmapId: 506751
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Users can find earlier Copilot conversations, including notebook and agent chats, in search results and filter to a new Copilot Chats source. Launched; no setting specific to it is documented, so communicate it and check Copilot retention."
status: "launched"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Web"]
targetDate: "December CY2025"
previewDate: "November CY2025"
risk: "low"
cost: "none"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Copilot Search is available to users with an eligible Microsoft Copilot licence at no extra cost (Microsoft Copilot Search page). Microsoft publishes nothing that licenses the Copilot Chats data source separately."
audiences: ["m365-admin","compliance","change-adoption","end-user"]
tags: ["copilot-search","copilot-chat","m365-copilot","copilot-notebooks","retention","ediscovery"]
sources:
  - title: "Microsoft Copilot Search"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-overview"
    kind: "learn"
  - title: "Microsoft Copilot Search frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-faq"
    kind: "learn"
  - title: "Microsoft Copilot Search admin experience"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-admin-experience"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Learn about retention for Copilot & AI apps"
    url: "https://learn.microsoft.com/purview/retention-policies-copilot"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 506751"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=506751"
    kind: "roadmap"
videos: []
related: ["ediscovery","copilot-notebooks","m365-copilot-app-navigation-pane-update","m365-admin-center-authoritative-content-management-for-m365-copilot-search"]
controls:
  - governs: "Whether the Copilot Chats data source and chat results appear in Copilot Search"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this data source is documented. Copilot Search configuration otherwise sits under Settings > Search & intelligence in the Microsoft 365 admin center."
  - governs: "Which retention policy covers Microsoft 365 Copilot interactions, and so how long past chats are kept"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Static > Choose locations to apply the policy > Microsoft Copilot experiences"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "Set-AppRetentionCompliancePolicy -Identity \"<policy name>\" -Applications \"User:M365Copilot\""
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    note: "The cmdlet adds Copilot interactions to an existing policy for newer locations. From 15 January 2027, 'Teams chats and Copilot interactions' policies stop covering Copilot interactions."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-04-27T23:15:13"
changes:
  - date: "2026-11-28"
    note: "New briefing: past Copilot chats in search results and the Copilot Chats data source, with the Copilot retention policy and its 15 January 2027 change."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 41 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 35
  unconfirmed: 4
  contradicted: 2
  attempts: 1
  hash: "faf3ea8285633e290b02aa319019c397"
---

## What's changing

Users can now find their earlier Copilot conversations through search. The roadmap item states that historical Copilot interactions, including chats from notebooks, agents and the main Copilot chat interface, appear directly in the search results page, and that a new entry labelled **Copilot Chats** appears in the right rail so users can scope a search to Copilot-generated content.

When **Copilot Chats** is the active data source, the roadmap says the search box offers query suggestions scoped to that source, intended to tell apart recalling an earlier session from running a new prompt. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The surface it describes matches Copilot Search: Microsoft's Copilot Search FAQ says the data source filter is in the right rail of Copilot Search, alongside sources such as SharePoint, Teams and Outlook emails.

The roadmap record shows the item as **Launched**, with a preview date of November CY2025 and a target date of December CY2025, across General Availability, Preview and Targeted Release phases. It lists Android, Desktop, iOS and Web, and the Worldwide (Standard Multi-Tenant) cloud only.

## Why it matters

Copilot conversations become a searchable body of content in their own right. Prompts and responses that users treated as disposable will turn up again in search, so anything sensitive typed into Copilot is now easier to find again. Microsoft states that Copilot interactions are stored in a hidden folder in the mailbox of the user who runs the app, and that this data is searchable with eDiscovery tools, so the compliance position does not change; what changes is how visible that history is to the user.

If nobody acts, the roadmap describes the Copilot Chats entry as simply appearing, and Microsoft says neither admins nor users need to do anything to set up Copilot Search. The decision that matters is retention: how long Copilot interactions are kept now also decides how far back users can search their own chats, and Microsoft is changing which retention policies cover Copilot interactions from 15 January 2027.

## Risk assessment

**Data exposure**
- Past prompts and responses, including chats inside notebooks and with agents, become retrievable from the search results page. Microsoft says Copilot Search follows the same data protection, privacy standards and security configurations as Microsoft Copilot. The roadmap does not say whether a user sees only their own conversations, or chats from notebooks shared with them.

**Security & identity**
- No change documented: no new identity, permission or sign-in is described for this feature.

**Autonomy & actions**
- The scoped suggestions can lead a user to run a prompt from the search box. The roadmap describes them as suggestions; it does not describe any action taken without the user choosing it.

**Change & support**
- Users who delete a chat in Copilot Chat, or whose chats age out under a retention policy, may still see it in search for a while: Microsoft says the deletion is relayed from the Copilot backend to the app and that delays or caching can leave messages visible for a short period. Expect questions from users who believed a chat was gone.
- Microsoft Learn documents no setting specific to the Copilot Chats data source at the time of writing (November 2026), so the response to a complaint is communication and retention, not a switch.

## Cost and licensing

- **Licence:** the Microsoft Copilot Search page states that Copilot Search is available to users with an eligible Microsoft Copilot licence at no extra cost. Users without one get the Microsoft Search experience when they select the **Search** module in the Microsoft 365 app (Copilot Search admin experience page). Microsoft publishes nothing that licenses the Copilot Chats data source separately.
- **Meter:** Microsoft documents no meter for this feature.
- **Indirect costs:** user communication, and compliance time to review the Copilot retention policy before the 15 January 2027 change described under Governance guidance.

## Scope

- **Users:** the roadmap describes Copilot chats from notebooks, agents and the main chat interface. Copilot Search itself reaches users with an eligible Microsoft Copilot licence.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Platforms:** Android, Desktop, iOS and Web.
- **Rollout:** status Launched; preview November CY2025, target December CY2025; release phases General Availability, Preview and Targeted Release.
- **Prerequisites:** Microsoft says admins and users don't need to take any action to set up Copilot Search.

## Governance guidance

### Before rollout
- Tell Copilot-licensed users that past Copilot chats, including notebook and agent chats, now show up in search and under the **Copilot Chats** data source.
- Check whether a retention policy with the **Microsoft Copilot experiences** location exists in the Microsoft Purview portal, since it decides how long these chats are kept and therefore findable.
- Identify any retention policy that still relies on the older **Teams chats and Copilot interactions** location; Microsoft states that from 15 January 2027 such policies cover Teams content only.

### At rollout
- Create a retention policy for **Microsoft Copilot experiences**, or add `User:M365Copilot` to an existing policy for newer locations, before 15 January 2027 if Copilot interactions must be retained or deleted.
- Brief the service desk that deleted or expired chats can stay visible for a short time while the deletion reaches the app.

### After rollout
- Use eDiscovery, not what users see in search, to confirm whether Copilot interactions are retained or deleted; Microsoft states that messages visible in AI apps are not an accurate reflection of either.
- Watch Message center and the Copilot Search documentation for an admin setting for the **Copilot Chats** data source.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot Chats data source and chat results appear in Copilot Search</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this data source is documented. Copilot Search configuration otherwise sits under Settings &gt; Search &amp; intelligence in the Microsoft 365 admin center.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which retention policy covers Microsoft 365 Copilot interactions, and so how long past chats are kept</strong><br><small>Tenant</small><br><small class="controls__note">The cmdlet adds Copilot interactions to an existing policy for newer locations. From 15 January 2027, 'Teams chats and Copilot interactions' policies stop covering Copilot interactions.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy › Static › Choose locations to apply the policy › Microsoft Copilot experiences <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AppRetentionCompliancePolicy -Identity &quot;&lt;policy name&gt;&quot; -Applications &quot;User:M365Copilot&quot;</code> <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting that hides or disables the **Copilot Chats** data source at the time of writing (November 2026). The Copilot settings page sends Search configuration to **Settings > Search & intelligence** in the Microsoft 365 admin center, and the Copilot Search admin experience covers bookmarks, acronyms, connectors, results and filters and usage metrics, without naming this data source.

Retention is the control that bears on what users can find: a policy for the **Microsoft Copilot experiences** location retains or deletes the stored Copilot interactions, and when messages expire Microsoft says the deletion is relayed to the user's Copilot app. Permanent deletion is suspended while another retention policy, Litigation Hold, delay hold or an eDiscovery hold applies to the mailbox. See [eDiscovery](/concepts/ediscovery/) and [Copilot Notebooks](/concepts/copilot-notebooks/) for the neighbouring mechanisms.

## Open questions

- Does the **Copilot Chats** data source show only the signed-in user's own conversations, or also chats in notebooks other people have shared with them? Watch the Copilot Search FAQ.
- Will an admin setting arrive to remove **Copilot Chats** from the right rail or from search results? Watch Message center and the Copilot Search admin experience page.
- Do users without an eligible Microsoft Copilot licence, who get Microsoft Search in the **Search** module, see their Copilot Chat conversations in search too?
- How quickly do chats a user deletes, or that a retention policy expires, disappear from **Copilot Chats** results?

<!-- rationale
risk: Low. The feature makes earlier Copilot conversations easier to find rather than reaching new data, and Microsoft says Copilot Search follows the same data protection, privacy and security configurations as Microsoft Copilot.
cost: None. Microsoft states that Copilot Search is available to users with an eligible Microsoft Copilot licence at no extra cost, and the roadmap places this feature in the search results and their right rail.
impact: Medium. Copilot-licensed users who use Copilot Search see a new Copilot Chats entry and their past chats among results; unlicensed users and admins see no change documented.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; Why it matters / default: The Copilot Chats search feature is on without administrator action. | Found: Searched: '"Copilot Chats" "on by default"' and '"Copilot Chats" "Search" default enable disable admin settings Graph API'; opened Search overview, FAQ and admin experience. No-action setup describes Copilot Search generally, not this feature's default. | Fix: Set defaultState to "unknown". Replace the 'If nobody acts' sentence with: 'The roadmap describes a new Copilot Chats entry, but does not state the feature's default. Microsoft says no action is needed to set up Copilot Search generally.'
- [unsupported, blocker] Why it matters; controls[1].governs; Governance guidance; Governance controls / applicability: How long compliance retention keeps interactions determines how far back users can search Copilot Chats. | Found: Searched: '"Copilot Chats" "search" "retention"' and '"Copilot Chats" conversations search licensing meter retention deleted results'; opened retention-policies-copilot, create-retention-policies and Search FAQ. None specifies the Copilot Chats search-history boundary. | Fix: Replace 'how long Copilot interactions are kept now also decides how far back users can search their own chats' with 'Retention policies govern compliance retention and deletion of Copilot interactions.' Remove 'and therefore findable' and 'and so how long past chats are kept' where they imply a search limit. Replace 'Retention is the control that bears on what users can find' with 'Retention governs stored Copilot interactions; Microsoft has not documented how it affects Copilot Chats search results.'
- [contradicted, blocker] Governance controls; Risk assessment: Change & support; Governance guidance / behaviour: When messages expire under a retention policy, deletion is relayed to the Copilot app. | Found: Content paths for retain-only retention policy ... If messages remain in your AI app after the retention period expires, nothing happens before and after the retention period; the message remains in its original location. | Fix: Qualify expiry-driven deletion throughout: 'For retain-and-delete or delete-only policies, expiry triggers backend deletion processes and a delete operation is relayed to the Copilot app; communication delays or caching can leave messages visible briefly. For retain-only policies, messages still in the app remain in their original location after expiry.' Do not describe every expired chat as deleted. | Source: https://learn.microsoft.com/purview/retention-policies-copilot
- [unsupported, major] Risk assessment: Change & support; Governance guidance: At rollout / behaviour: User-deleted or retention-expired chats may remain in Copilot Chats search results temporarily because of caching or deletion propagation. | Found: Searched: '"Copilot Chats" "search" "retention"' and '"Copilot Chats" conversations search licensing meter retention deleted results'; opened retention-policies-copilot and Search FAQ. Documented delays concern messages visible in the Copilot app, not search results. | Fix: Replace the search-results assertion with 'Microsoft documents that retention-triggered deletion can leave messages visible briefly in the Copilot app because of communication delays or caching. It does not state how quickly deleted chats disappear from Copilot Chats search results.' Remove the claim that this documented mechanism also covers user-deleted search results.
- [contradicted, blocker] Governance controls / applicability: Any other retention policy affecting the mailbox suspends permanent deletion, alongside Litigation Hold, delay hold or eDiscovery hold. | Found: permanent deletion from the SubstrateHolds folder is always suspended if the mailbox is affected by another retention policy for the same location, Litigation Hold, delay hold, or if an eDiscovery hold is applied to the mailbox | Fix: Replace 'another retention policy' with 'another retention policy for the same location' in the permanent-deletion sentence. | Source: https://learn.microsoft.com/purview/retention-policies-copilot
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The scoped suggestions let a user run a prompt from the search box. | Found: Searched: 'Copilot Chats search box scoped suggestions prompt execution search results'; opened Search overview and FAQ and read the roadmap. The record distinguishes recall and execution but does not document executing a prompt from the search box. | Fix: Replace the first Autonomy & actions sentence with 'The roadmap says scoped suggestions distinguish session recall from prompt execution; it does not describe the execution flow.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The printed Purview route reaches the Static policy wizard's Microsoft Copilot experiences location. | Found: For the Choose the type of retention policy to create page, select Adaptive or Static ... If you chose Static: On the Choose locations to apply the policy page, select one or more locations ... Microsoft Copilot experiences | Fix: Use the fuller route: 'Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Assign admin units > Full directory > Choose the type of retention policy to create > Static > Choose locations to apply the policy > Microsoft Copilot experiences'. The omitted admin-unit scope/default and wizard heading are not invented steps or a different route. | Source: https://learn.microsoft.com/purview/create-retention-policies
- [supported, minor] controls[1].api and note; Governance guidance; Governance controls table / command: Set-AppRetentionCompliancePolicy -Identity "<policy name>" -Applications "User:M365Copilot" adds Copilot interactions to an existing newer-location retention policy. | Found: To add Microsoft 365 Copilot interactions to an existing retention policy for newer locations, such as Teams private channel messages and Viva Engage: Set-AppRetentionCompliancePolicy -Identity “<policy name>” -Applications "User:M365Copilot" | Fix: Keep the cited example but add this qualification to the note and cite https://learn.microsoft.com/powershell/module/exchangepowershell/set-appretentioncompliancepolicy: 'The Purview procedure gives this single-app example, but the cmdlet reference marks Microsoft Copilot experiences as preview and says all these values must be supplied together: User:M365Copilot,CopilotForSecurity,CopilotinFabricPowerBI,CopilotStudio,CopilotinBusinessApplicationplatformsSales,SQLCopilot. Microsoft documentation therefore disagrees on the required Applications value.' | Source: https://learn.microsoft.com/purview/create-retention-policies
- [supported, minor] controls[0].note; Governance controls / admin-path: Search configuration sits under Settings > Search & intelligence in the Microsoft 365 admin center. | Found: Search | Configure Microsoft Search under Settings > Search & intelligence in the Microsoft 365 admin center. | Fix: Replace the broad Copilot Search route statement with 'The Copilot settings page directs Microsoft Search configuration to Settings > Search & intelligence; the Copilot Search admin experience page gives Microsoft 365 admin center > Copilot > Search for Copilot Search administration.' Both pages are already cited. | Source: https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center
-->
