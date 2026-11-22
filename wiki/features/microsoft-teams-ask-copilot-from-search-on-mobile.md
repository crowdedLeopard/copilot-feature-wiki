---
title: "Microsoft Teams: Ask Copilot from search on mobile"
slug: "microsoft-teams-ask-copilot-from-search-on-mobile"
roadmapId: 571299
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams on iOS and Android adds an Ask Copilot suggestion and button to search, opening Copilot with the typed query. It turns on automatically from mid-November 2026; Microsoft says no admin action is required."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Microsoft's notice says the feature follows existing Copilot licensing. Learn says Microsoft Copilot needs a Copilot licence plus a qualifying licence, and Copilot Chat is available with an eligible Microsoft 365 subscription. Nothing specific to this feature is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","mobile","m365-copilot","copilot-chat"]
sources:
  - title: "Microsoft 365 Roadmap 571299"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571299"
    kind: "roadmap"
  - title: "MC1523087: Microsoft Teams Mobile: Ask Copilot from Search"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1523087"
    kind: "message-center"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","microsoft-teams-copilot-in-the-queues-app-on-mobile"]
controls:
  - governs: "Whether the Copilot app is available in Teams"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Teams Administrator role. Learn documents this for Copilot Chat in Teams; it does not say whether the Ask Copilot entry in mobile search follows it."
  - governs: "A dedicated switch for Ask Copilot in Teams mobile search"
    scope: "tenant"
    ui: null
    api: null
    note: "None documented at the time of writing (November 2026); the Copilot app setting above is the closest documented control."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-22"
    note: "New briefing: Ask Copilot suggestion and button in Teams mobile search, rolling out in November 2026 with no admin action required."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 41 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 41
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "854e3b01c54dd74a0c330d342184c7c7"
---

## What's changing

Teams on iOS and Android is adding two ways to start a Copilot conversation from search. According to Microsoft's notice MC1523087, once a user types two or more words in the search box, a suggestion to ask Copilot appears alongside the usual search suggestions. After the user presses Enter, an **Ask Copilot** button stays at the top of the search results page. Selecting either option opens Copilot with the user's query, so the user can get an answer and ask follow-up questions without leaving search.

The roadmap item (571299) gives the status as Rolling out, with a target of November CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platforms Android and iOS. MC1523087 says rollout begins in mid-November 2026 and is expected to finish by late November 2026. It sets no act-by date and says no admin action is required.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so what this page says about its behaviour is the roadmap's and the Message Center notice's description.

## Why it matters

The notice says the feature turns on automatically when rollout reaches your organisation, so the Copilot entry point will appear in Teams mobile search without anyone choosing it. It also says the feature follows existing Copilot licensing and admin controls, which means the decisions you have already made about Copilot are the ones that apply, but Microsoft has not said which of those controls hides this entry.

The wiki's view is that this is a communication and support task, not a configuration project: tell users and the service desk what the new suggestion is, and test on a device before rollout lands so you know what your own tenant's users will see. The notice itself suggests informing users and updating internal Teams mobile search guidance.

## Risk assessment

**Data exposure**
- Selecting the suggestion or the **Ask Copilot** button opens Copilot with the user's query (MC1523087), so text typed as a search becomes a Copilot prompt. Microsoft has not said whether anything beyond the query text is passed on; confirm during testing.

**Security & identity**
- The notice says the feature follows existing Copilot licensing and admin controls. Learn says blocking Copilot through Integrated Apps is a tenant-wide control that blocks Copilot in Teams, among other places, but it does not say whether this search entry follows that block or the Copilot app setting in the Teams admin center.

**Autonomy & actions**
- The roadmap description and the notice describe answering questions and follow-up questions; neither describes Copilot taking actions on the user's behalf.

**Change & support**
- A new suggestion and button appear in Teams search on iOS and Android during the mid-to-late November 2026 rollout window. Users who did not expect Copilot in search will ask the service desk where it came from and whether they have to use it.

## Cost and licensing

No separate licence is stated for this feature. MC1523087 says it follows existing Copilot licensing. The [Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements) page says users of Microsoft Copilot need a Microsoft Copilot licence and a qualifying prerequisite licence, and that Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription. Which of the two opens from Teams search for a given user is not stated.

No meter is stated in the roadmap record or the notice. A licence, meter or charge specific to this feature is not yet published. The cost the sources show is indirect: admin time to communicate the change and update guidance.

## Scope

The roadmap item lists Android and iOS as platforms and Worldwide (Standard Multi-Tenant) as the cloud. The notice gives the rollout window as mid-November 2026 to late November 2026 and describes it as General Availability.

The Copilot requirements page says Copilot in Teams is available on supported Windows, Mac, web, Android and iOS clients, and that users need a work or school account in Microsoft Entra ID. Which users see the suggestion, and whether that depends on holding a Copilot licence, is not stated. Managing the Copilot app in the Teams admin center needs a Teams Administrator role, which the Teams admin center page states for using that centre.

## Governance guidance

### Before rollout
- Tell the service desk and Teams champions that a Copilot suggestion will appear in Teams mobile search on iOS and Android from mid-November 2026 (MC1523087).
- Check the status of the Copilot app in the Teams admin center (Teams apps > Manage apps) so that availability matches what you intend for users.
- Update internal Teams mobile search guidance, as the notice suggests, to say what the suggestion and the **Ask Copilot** button do.

### At rollout
- Test on one iOS and one Android device: type two or more words in Teams search, check for the suggestion, press Enter and check for the **Ask Copilot** button.
- Repeat the test with a user who holds a Copilot licence and one who does not, and record which Copilot experience opens in each case, because Microsoft has not said.
- If you block the Copilot app in the Teams admin center, test again to see whether the entry disappears from search; Microsoft has not said it will.

### After rollout
- Confirm the entry has reached your tenant by the end of the window the notice gives (late November 2026).
- Collect service desk questions about the entry and feed them into your Teams mobile guidance.
- Watch the roadmap item and MC1523087 for any change to the status or to the controls that apply.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app is available in Teams</strong><br><small>Tenant</small><br><small class="controls__note">Teams Administrator role. Learn documents this for Copilot Chat in Teams; it does not say whether the Ask Copilot entry in mobile search follows it.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A dedicated switch for Ask Copilot in Teams mobile search</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026); the Copilot app setting above is the closest documented control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Teams admin center row is the control Learn documents for Copilot Chat in Teams: Learn says Copilot Chat in Teams is managed through the Copilot app in the Teams admin center and that a single Copilot app is managed for all users, regardless of licence. Learn does not say that this setting governs the Ask Copilot suggestion in search, so test it on a device.

Learn also says blocking Copilot through Integrated Apps in the Microsoft 365 admin center is a tenant-wide control, scoped to specific users or groups if you choose, that blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web. Its steps are on the [Manage Copilot Chat](https://learn.microsoft.com/copilot/manage/manage-copilot-chat) page. It is a blunt control and blocks far more than this feature. Microsoft Learn documents no switch for the search entry alone at the time of writing (November 2026).

## Open questions

- Does blocking or restricting the Copilot app in the Teams admin center, or blocking Copilot through Integrated Apps, remove the Ask Copilot suggestion and button from Teams mobile search? Watch MC1523087 and the Learn pages on managing Copilot Chat in Teams.
- Which Copilot experience opens from Teams search for licensed and unlicensed users, and does the suggestion appear for users who cannot use Copilot?
- Will Microsoft add a setting that turns off only the Ask Copilot entry in Teams search? Watch the roadmap item and the Teams admin center documentation.
- Is anything beyond the typed query passed to Copilot when the user selects the suggestion or the button?

<!-- rationale
risk: Low. Microsoft's notice describes a shortcut that opens Copilot with the user's query and says it follows existing Copilot licensing and admin controls; no new data store or action is described.
cost: Low. The notice says the feature follows existing Copilot licensing, so the only cost the sources show is admin time to inform users; a licence or charge specific to this feature is not yet published.
impact: Medium. Teams users on iOS and Android see a new Copilot suggestion in search as rollout reaches the tenant; Microsoft has not said which users it appears for.
-->
