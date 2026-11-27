---
title: "Outlook: Copilot summaries at the top of search results, with a link into Copilot chat"
slug: "outlook-copilot-now-provides-concise-summaries-with-outlook-search-results"
roadmapId: 559989
topic: "m365-copilot"
products: ["Outlook","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a Copilot summary card above Outlook search results on web, Mac, iOS and Android, from which users can open Copilot chat. No switch for the card alone is documented; decide who should have Copilot in Outlook."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Mac","Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Microsoft's Copilot overview lists Outlook features by licence tier (Copilot Chat (Basic), Microsoft 365 Copilot (Basic) and (Premium)) but does not list search-result summaries in any of them."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","copilot-chat","m365-copilot","app-management","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 559989"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559989"
    kind: "roadmap"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["app-management","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","microsoft-teams-ask-copilot-from-search-on-mobile","outlook-copilot-chat-sheet-ux-update-for-mobile"]
controls:
  - governs: "Whether the Outlook search summary card is shown, as a setting of its own"
    scope: "tenant"
    ui: null
    api: null
    note: "No feature-specific setting is documented at the time of writing (November 2026)."
  - governs: "Whether anyone in the organisation can use the Copilot app, which provides Copilot Chat in Outlook"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator. Blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web, licensed users included. Not stated whether it removes the search summary card."
  - governs: "Which users or groups can install and use the Copilot app in Outlook"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator. Does not affect admin-deployed apps. Microsoft suggests a group of licensed users to keep the app from unlicensed users."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-08-04T22:45:42"
changes:
  - date: "2026-11-27"
    note: "New briefing: Copilot summary card planned for Outlook search results; target July CY2026 passed while still In development."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 46 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 42
  unconfirmed: 4
  contradicted: 0
  attempts: 1
  hash: "4b9a15bee362fd225cd2f73d0c8b1e82"
---

## What's changing

Microsoft plans to show a short Copilot summary at the top of Outlook search results, so that a user who searches their mail gets an AI-written answer to the query above the list of messages. The roadmap item states that users can then "dig deeper by opening Copilot chat directly from the Copilot summary card".

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Microsoft has not stated whether the card appears automatically, which licences include it, or which content the summary draws on beyond the search results it sits above.

The roadmap item is **In development**, with a target of **July CY2026** for General Availability. That target has passed (today is November 2026) without the status changing, so treat the date as slipped rather than as a sign the card is already in tenants. The record lists Outlook on Android, iOS, Mac and the web, in the Worldwide (Standard Multi-Tenant) cloud only. No Message center post has been supplied for this item.

## Why it matters

A card above the search results list is a visible change to a screen most mail users rely on daily. Users will read an AI summary of their mail before they read the mail itself, and some will treat it as the answer. Expect help desk questions about wrong or incomplete summaries and about why some colleagues see the card and others do not.

Microsoft has not stated what happens on arrival. No source says the card needs an admin to enable it, so plan as though it may reach users through normal Outlook updates. The documented lever today is the Copilot app in Integrated Apps, which Microsoft says provides Copilot Chat in Outlook; it governs Copilot in Outlook as a whole, not this card.

## Risk assessment

**Data exposure**
- The card summarises search results from the user's own mailbox. Microsoft has not documented which content the summary can draw on (only the matched messages, the wider mailbox, or other Microsoft 365 data), so confirm this before telling users what the card can see.
- Microsoft's licence comparison says Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) users don't have access to Microsoft Graph, while Microsoft 365 Copilot (Premium) grounds responses in organisational data automatically. Which tier the card belongs to will decide how far its summaries reach.

**Security & identity**
- No change documented: nothing in the roadmap item suggests a new sign-in, permission or identity.

**Autonomy & actions**
- The roadmap describes a read-only summary and a link into Copilot chat. It describes no action taken on mail.

**Change & support**
- No setting for the card alone is documented at the time of writing (November 2026). Blocking the Copilot app in Integrated Apps blocks Copilot in Outlook, Teams, the Microsoft Copilot app and Copilot Chat on the web, so it is a blunt instrument if the only aim is to remove this card.
- Users may rely on the summary in place of reading messages; plan communication on checking the cited mail.

## Cost and licensing

**Licence.** Not yet published for this feature. Microsoft's Copilot overview describes three tiers: Copilot Chat (Basic), "the standalone baseline experience included with eligible Microsoft 365 licenses", which is available through Copilot Chat in Outlook; Microsoft 365 Copilot (Basic), whose Outlook features are listed as drafting emails, summarising threads and coaching tips; and Microsoft 365 Copilot (Premium), the add-on licence. The page lists search-result summaries under none of them.

**Meter.** No meter is documented for this feature at the time of writing.

**Indirect costs.** Admin time to decide who keeps Copilot in Outlook, and communication and help desk time when the card appears.

## Scope

- **Clients:** Outlook on Android, iOS, Mac and the web, as the roadmap record lists them. Outlook for Windows is not listed on the record.
- **Cloud:** Worldwide (Standard Multi-Tenant) only on the record.
- **Users and licences:** Not yet published.
- **Roles:** The Integrated Apps controls that govern the Copilot app are, per Microsoft Learn, only available to Global Admins.
- **Rollout:** Microsoft has not described the rollout mechanics; the roadmap target is July CY2026 and the status is In development.

## Governance guidance

### Before rollout
- Decide whether every user who has Copilot Chat in Outlook should get the summary card, or only users with a Microsoft 365 Copilot licence.
- Set the Copilot app's availability in Integrated Apps to **Specific users/group in the organization can install** if only some groups should have Copilot in Outlook (Global Administrator).
- Prepare a short note for users explaining that the card is AI-generated and that the messages listed below it are the record.

### At rollout
- Test the card with one pilot user from each Copilot licence tier on Outlook on the web, Mac, iOS and Android to see who receives it.
- Check, with a test user, whether blocking the Copilot app in Integrated Apps removes the card before relying on that block to keep it away from a group.

### After rollout
- Watch Message center for a post on this roadmap item that states the default, the licence tier and any setting for the card.
- Track help desk tickets about summary accuracy and feed them into user guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Outlook search summary card is shown, as a setting of its own</strong><br><small>Tenant</small><br><small class="controls__note">No feature-specific setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether anyone in the organisation can use the Copilot app, which provides Copilot Chat in Outlook</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator. Blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web, licensed users included. Not stated whether it removes the search summary card.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can install and use the Copilot app in Outlook</strong><br><small>Group</small><br><small class="controls__note">Global Administrator. Does not affect admin-deployed apps. Microsoft suggests a group of licensed users to keep the app from unlicensed users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns the Outlook search summary card on or off by itself at the time of writing (November 2026). The two Integrated Apps controls below govern the Copilot app, which Microsoft says provides Copilot Chat in Outlook on web, desktop and mobile; the chat opened from the card is that experience. Whether they also remove the summary card is not stated.

Both Integrated Apps controls need a Global Administrator. Blocking overrides earlier deployments and user installs for everyone; availability settings affect only which users can install the app themselves and leave admin deployments in place. Microsoft notes that the Copilot app settings on the Integrated Apps page apply to both Microsoft Copilot and the Copilot Chat apps.

The Package Management API in Microsoft Graph (beta) includes `POST /beta/copilot/admin/catalog/packages/{id}/block`, which blocks a Copilot package and requires a Microsoft Agent 365 licence. Its reference does not say whether the Copilot app itself is one of those packages.

## Open questions

- Is the summary card on by default for users who have Copilot in Outlook, or does an admin or user turn it on? Watch Message center and the Microsoft 365 Copilot release notes.
- Which licence tier includes the card: Copilot Chat (Basic), Microsoft 365 Copilot (Basic) or Microsoft 365 Copilot (Premium)?
- Which content does the summary draw on: only the matched messages, the whole mailbox, or other Microsoft 365 data?
- Does blocking or limiting the Copilot app in Integrated Apps remove the card, or will a separate setting for it appear?
- Do Microsoft Purview DLP policies for Microsoft Copilot, which can stop labelled items being used in response summarisation, apply to the card's summaries?

<!-- rationale
risk: Medium. The card puts AI-generated summaries in front of anyone searching mail, and the only documented control is blocking or limiting the whole Copilot app in Integrated Apps; Microsoft has not said whether that removes the card.
cost: Low. Microsoft has not published which Copilot licence tier gets the summaries; the only cost the sources show is admin time and user communication.
impact: Medium. Anyone who searches mail in Outlook on the web, Mac, iOS or Android could see the card, but Microsoft has not said which Copilot licence tiers get it or whether it is on by default.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters / applicability: The Integrated Apps Copilot app control governs Copilot in Outlook as a whole. | Found: Searched: '"Integrated Apps" "Copilot" "in-app" "Outlook"'; '"Copilot" "Outlook" "Integrated" "drafting" block'. Read Manage Copilot Chat, Integrated Apps reference and Copilot overview; these do not establish control over all Outlook Copilot features. | Fix: Replace 'it governs Copilot in Outlook as a whole, not this card' with 'it governs availability of the Copilot app that provides Copilot Chat in Outlook; its effect on the search summary card is not stated', citing https://learn.microsoft.com/copilot/manage/manage-copilot-chat.
- [unsupported, major] Risk assessment: Data exposure; What's changing; Why it matters / behaviour: The card summarises search results from the user's own mailbox. | Found: Searched: '"Copilot" "search results" "Outlook" "mailbox"'; '"Outlook" "summary card" Copilot'. Read roadmap, Copilot overview and release-note excerpts; the roadmap locates the card above Outlook results but does not specify its grounding. | Fix: Replace the first Data exposure sentence with 'The roadmap places an AI summary above Outlook search results.' In What's changing and Why it matters, replace assertions that it summarises the user's mail with 'the planned summary above Outlook search results'. Keep the existing question about what content it draws on.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The licence tier assigned to the search summary card will determine how far its summaries reach. | Found: Searched: '"Outlook" "search" "summaries" "license" Copilot'; 'Outlook Copilot search results summaries licensing billing meter content mailbox rollout'. Read Copilot overview and license options; neither maps this card's data reach to a tier. | Fix: Remove 'Which tier the card belongs to will decide how far its summaries reach.' The existing questions about entitlement and grounding can remain separate.
- [unsupported, major] Risk assessment: Change & support / behaviour: The search summary supplies cited mail that users can check. | Found: Searched: '"Outlook" "summary card" Copilot'; '"Outlook" "search results" "summary" "content" "card"'. Read roadmap and Copilot overview; neither states that this Outlook card cites mail. References documented for Copilot Search are a different surface. | Fix: Replace 'plan communication on checking the cited mail' with 'plan communication on checking the original messages'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Risk assessment: Change & support; Governance controls table / applicability: Blocking Copilot through Integrated Apps blocks it in the Copilot app, Teams, Outlook and Copilot Chat on the web. | Found: This setting blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users. | Fix: Attribute this scope to Manage Copilot Chat and add: 'The general Integrated Apps reference says app blocking affects Outlook and the Microsoft Copilot application, while Teams continues to use Teams admin center settings.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365 alongside https://learn.microsoft.com/copilot/manage/manage-copilot-chat. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
- [supported, minor] Risk assessment: Data exposure / behaviour: Microsoft 365 Copilot (Premium) automatically grounds responses in organisational data. | Found: Microsoft 365 Copilot (Premium) uses both web and organizational data via Microsoft Graph and pulls information automatically. | Fix: Qualify the general Premium description with 'when Work IQ is on; the overview says responses are not grounded in Microsoft Graph and Work IQ when it is off', citing https://learn.microsoft.com/copilot/plan/copilot-overview. Do not apply this general description to the search card without feature-specific evidence. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; Scope; rationale: cost / licensing: The licensing model is unknown because no feature-specific licence tier is published. | Found: Copilot Chat (Basic) is the standalone baseline experience included with eligible Microsoft 365 licenses. ... Microsoft 365 Copilot (Premium) is the full add-on licensed experience | Fix: Set licensing.model to 'included' for a new option inside an already licensed product. Replace the notes with 'Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible subscription plans. The overview also documents Copilot Chat with eligible Microsoft 365 licences; the tier covering this search card is not yet published.' Cite https://learn.microsoft.com/copilot/plan/copilot-license-options and retain https://learn.microsoft.com/copilot/plan/copilot-overview. Keep the feature-specific entitlement question open. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
-->
