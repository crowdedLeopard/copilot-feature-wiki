---
title: "Outlook: Copilot insights on selected email text in classic Outlook for Windows"
slug: "outlook-user-initiated-copilot-insights-in-classic-outlook"
roadmapId: 508524
topic: "modern-work"
products: ["Outlook"]
summary: "Users of classic Outlook for Windows with Copilot can highlight text in an email and select Explain This for Copilot insights. It is on by default; there is no switch for this feature alone, so plan communication and check who has Copilot."
status: "rolling-out"
releasePhase: ["Current Channel","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "October CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Microsoft's notice MC1311978 says the feature affects users with Microsoft 365 Copilot capabilities. Whether it needs the Microsoft 365 Copilot add-on licence or is part of Microsoft 365 Copilot (Basic) is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","copilot-chat","m365-copilot","m365-admin-center","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 508524"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=508524"
    kind: "roadmap"
  - title: "MC1311978: (Updated) Classic Outlook for Windows: User-initiated insights with Copilot"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1311978"
    kind: "message-center"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Which users hold a Microsoft 365 Copilot licence (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Microsoft 365 Copilot licence (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense"
    kind: "learn"
videos: []
related: ["outlook-new-copilot-entry-point-in-classic-outlook","outlook-agents-for-m365-copilot-available-in-copilot-chat-in-classic-outlook-for-windows","app-management"]
controls:
  - governs: "Whether users can use the Copilot app in Outlook and the Microsoft Copilot app at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator. Blocks Copilot in Outlook for all users, licensed users included; Microsoft's page does not name the Explain This button."
  - governs: "Which users hold a Microsoft 365 Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense"
    note: "At least License or User Administrator. The request body sets addLicenses and removeLicenses. Whether this feature needs the add-on licence is not yet published."
  - governs: "Tenant or policy switch for Explain This in classic Outlook alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-28"
    note: "New briefing: Explain This for selected email text in classic Outlook for Windows, on by default, with the broader Copilot controls that apply."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 57 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected unsupported statements about selected-text processing, data access, execution identity and permissions; added the Integrated Apps page's Teams scope note and extended the licence-check path to the product."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 53 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 50
  unconfirmed: 3
  contradicted: 0
  attempts: 2
  hash: "c552bd1f06a86a702c1d846b9dbdb5f8"
---

## What's changing

Users of classic Outlook for Windows can highlight text in an email and ask Copilot for insights about it. Microsoft's notice MC1311978 says that when text is highlighted, an **Explain This** button appears to give more context. The feature is built into Outlook and needs no separate add-in.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour comes from the roadmap item and the notice. MC1311978 says the feature is **on by default for eligible users**, that eligible users are those with Microsoft 365 Copilot capabilities, and that existing Microsoft 365 security, compliance and data protection policies continue to apply. Users decide when to use it by choosing what to select.

The roadmap item is **Rolling out**, with a preview date of May CY2026 and a target of October CY2026, for the Current Channel and Preview release phases, on desktop, in the Worldwide (Standard Multi-Tenant) cloud. MC1311978 (updated 1 September 2026) gives the public preview as early May to late May 2026, and general availability as starting in early October 2026 and expected to finish by the end of October 2026 (previously early to end of September). The notice sets no act-by date.

## Why it matters

This is a new way to invoke Copilot from selected email text. Users invoke this feature by selecting email text and asking Copilot for insights, and the notice says existing protections still apply. But the button appears as soon as a user highlights text, so it will be noticed in organisations that have kept Copilot use low-key or that have Microsoft 365 Copilot (Basic) users in classic Outlook.

If nobody acts, eligible users have the button from the general availability rollout onwards. Microsoft's advice for organisations that do not want this is to remove or restrict Copilot capabilities. Microsoft Learn documents no setting that turns off this one feature while leaving the rest of Copilot in Outlook on, so the decision is about Copilot as a whole.

## Risk assessment

**Data exposure**
- Selected email text is sent to Copilot to generate insights. The notice says existing Microsoft 365 security, compliance and data protection policies continue to apply. No new data source is described.

**Security & identity**
- No change described: the feature is built into the Outlook experience and does not require a separate add-in.

**Autonomy & actions**
- No change: Copilot answers only when the user selects text and asks. Nothing in the sources describes it acting on the mailbox.

**Change & support**
- The Explain This button appears on text selection by default. Expect questions from users who did not ask for it and from those who cannot see it because their Outlook is not up to date. Microsoft asks admins to check users run the latest classic Outlook for Windows and to brief helpdesk staff.
- Microsoft Learn documents no switch for this feature on its own. An organisation that wants it gone has to block or withhold Copilot more broadly (see the controls table).

## Cost and licensing

**Licence.** MC1311978 says the feature is for users with Microsoft 365 Copilot capabilities. Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) describes Microsoft 365 Copilot (Basic) as users without the Copilot add-on licence who have access to Copilot capabilities inside apps, and lists Outlook features for that tier (drafting emails, summarising threads, coaching tips). Explain This is not listed there, and whether it needs the Microsoft 365 Copilot add-on licence is not yet published.

**Meter.** No meter or usage charge is described for this feature in the notice or on Microsoft Learn.

**Indirect costs.** Helpdesk briefing and user communication, which Microsoft's notice asks admins to do.

## Scope

- **Users:** users with Microsoft 365 Copilot capabilities in organisations using classic Outlook for Windows (MC1311978).
- **Platform:** classic Outlook for Windows (desktop). The notice asks admins to check users run the latest version.
- **Release phases:** Current Channel and Preview, as the roadmap item lists them.
- **Clouds:** Worldwide (Standard Multi-Tenant) is the only cloud the roadmap item lists.
- **Roles:** blocking the Copilot app in Integrated Apps needs a Global Administrator; assigning or removing licences needs at least a License Administrator or User Administrator.

## Governance guidance

### Before rollout
- Confirm which classic Outlook for Windows users hold a Microsoft 365 Copilot licence (Microsoft 365 admin center > Billing > Licenses > product), because the notice ties the feature to Copilot capabilities.
- Decide whether any group should not have Copilot in Outlook at all; Microsoft's notice points to removing or restricting Copilot, not to a switch for this feature.
- Brief the helpdesk on the Explain This button that appears when users highlight email text.

### At rollout
- Check that users are on the latest classic Outlook for Windows build, as Microsoft's notice asks.
- Tell users how to highlight text and select Explain This, and remind them that Copilot output should be checked.
- Test on a pilot user whether blocking the Copilot app in Integrated Apps, or removing the Copilot licence, removes the Explain This button before relying on either.

### After rollout
- Watch Message center for an update to MC1311978 or a Learn page that names the licence tier and any per-feature control.
- Review helpdesk tickets about the button in the first weeks and update user guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use the Copilot app in Outlook and the Microsoft Copilot app at all</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator. Blocks Copilot in Outlook for all users, licensed users included; Microsoft's page does not name the Explain This button.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Microsoft 365 Copilot licence</strong><br><small>User</small><br><small class="controls__note">At least License or User Administrator. The request body sets addLicenses and removeLicenses. Whether this feature needs the add-on licence is not yet published.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or policy switch for Explain This in classic Outlook alone</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting, at the time of writing (November 2026), that turns off Explain This alone. The two controls in the table are broader. Microsoft's [Manage Copilot Chat](https://learn.microsoft.com/copilot/manage/manage-copilot-chat) page says blocking the Copilot app through Integrated Apps blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web, including for users assigned a Microsoft 365 Copilot licence; the page does not name the Explain This button. The [Integrated Apps management page](https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365) says its changes affect Outlook and the Microsoft Copilot application, while Teams continues to honour Teams admin center settings. Removing the Microsoft 365 Copilot licence affects only features that need that licence, and which tier this feature belongs to is not yet published. The Integrated Apps controls are only available to Global Administrators; licence assignment needs at least a License Administrator or User Administrator.

## Open questions

- Does Explain This need the Microsoft 365 Copilot add-on licence, or is it available to Microsoft 365 Copilot (Basic) users? Watch MC1311978 and the Microsoft 365 Copilot release notes.
- Does blocking the Copilot app in Integrated Apps remove the Explain This button in classic Outlook for Windows?
- Will Microsoft add an Outlook or Cloud Policy setting to turn off Explain This without removing Copilot from Outlook?
- Which minimum classic Outlook for Windows build carries the feature? The notice asks only for the latest version.

<!-- rationale
risk: Low. Copilot processes user-selected email content to generate insights, and Microsoft's notice says existing Microsoft 365 security, compliance and data protection policies continue to apply.
cost: Low. The only cost the sources show is helpdesk briefing and user communication; which Copilot licence tier includes this feature is not yet published.
impact: Medium. Every eligible classic Outlook for Windows user sees a new Explain This button when they highlight email text, and helpdesks will get questions about it.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters: first paragraph / availability: The Explain This button will be noticed in organisations that have Microsoft 365 Copilot (Basic) users in classic Outlook. | Found: Searched: classic Outlook 'Explain This' 'User Initiated Insights' license billing Copilot Basic; '"Explain This" "insights" "Outlook" "license"'. Opened Copilot overview and license options; MC1311978 names capabilities, not Basic eligibility. | Fix: Remove 'or that have Microsoft 365 Copilot (Basic) users in classic Outlook' from the first paragraph of Why it matters. Keep the existing statement that eligibility by licence tier is not yet published.
- [unsupported, major] Risk assessment: Change & support / behaviour: Users may be unable to see Explain This because their Outlook is not up to date. | Found: Searched: '"Explain This" "Outlook" "build"'; Outlook user initiated insights Explain This meter usage charge pricing latest version. Read MC1311978 and Copilot requirements excerpt; no source ties a missing Explain This button to an older build. | Fix: Replace 'Expect questions from users who did not ask for it and from those who cannot see it because their Outlook is not up to date' with 'Expect questions from users who did not ask for it and from those who cannot see it.'
- [unsupported, blocker] summary; Risk assessment: Change & support / absence: There is no switch for this feature alone, so an organisation that wants it gone has to block or withhold Copilot more broadly. | Found: Searched: classic Outlook Explain This user initiated insights disable policy Cloud Policy PowerShell Exchange; '"Explain This" "policy" Outlook'. Read MC1311978, Manage Copilot Chat and Integrated Apps; none states that a per-feature switch cannot exist. | Fix: Change the summary clause 'there is no switch for this feature alone' to 'Microsoft has not documented a switch for this feature alone'. Replace 'An organisation that wants it gone has to block or withhold Copilot more broadly (see the controls table)' with 'Microsoft advises organisations that do not want access to remove or restrict Copilot capabilities (see the controls table).'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; controls[1].note; rationale: cost / licensing: Licensing is unknown because Microsoft has not published whether Explain This requires the Copilot add-on or is available under Basic. | Found: Searched: classic Outlook 'Explain This' 'User Initiated Insights' license billing Copilot Basic. Opened Copilot overview and license options; product-level licensing is published, but neither names this feature or resolves its Basic/Premium tier. | Fix: Set licensing.model to 'included' for a new option within the existing licensed Copilot product, while retaining the narrower tier uncertainty. Use notes: 'Copilot capabilities are available through Microsoft 365 Copilot (Basic) without the Copilot add-on licence and Microsoft 365 Copilot (Premium) with the add-on licence. Microsoft has not published which tier includes Explain This.' Cite https://learn.microsoft.com/copilot/plan/copilot-overview. Do not claim that Basic includes Explain This.
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: Licence assignments can be checked at Microsoft 365 admin center > Billing > Licenses > product. | Found: If a license is assigned directly to a user, the user appears individually in the list of assignments for that product. Group-based assignments If a license is assigned to a group, the group name appears in the list instead of individual users. | Fix: Add to the first Before rollout bullet: 'Direct assignments list users; group-based assignments list groups instead. For group-based assignments, view the group's members at Microsoft 365 admin center > Teams & groups > Active teams & groups.' This qualification is documented at https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
-->
