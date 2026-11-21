---
title: "PowerPoint on the web: reference an attached deck's style when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-an-attached-powerpoint-deck-s-style-when-creating-a-new-pres-555879"
roadmapId: 555879
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Agent Mode in PowerPoint on the web can apply the theme and styles of an attached deck to a new presentation. No admin setting is documented for it; the roadmap lists it as Launched."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn says the Microsoft 365 Copilot add-on licence gives the full experience of Copilot in PowerPoint, and users without it can use Copilot in PowerPoint with fair use limits. Which experience includes this capability is not yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["powerpoint","m365-copilot","microsoft-365-apps","licensing","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 555879"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555879"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555882","powerpoint-async-notifications-for-powerpoint-agent-web"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "General licence control, not specific to this capability. Whether this capability needs the add-on licence is not yet published."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-05T22:47:32"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: Web platform record for referencing an attached deck's style in Copilot Agent Mode; Mac and Desktop are separate roadmap items."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 44
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "ba44d9b837e6edd2bc22f8aeaad0cd72"
---

## What's changing

Copilot Agent Mode in PowerPoint on the web can reference an existing PowerPoint file when you create a new presentation, so that Copilot applies that file's theme and styles to the new deck. The roadmap item states that this keeps formatting consistent.

Microsoft's Copilot release notes carry an entry dated October 27, 2026 for roadmap ID 555879, tagged Windows and Web. It says that previously new presentations used default themes, and that Copilot now applies the attached file's theme and styles. Its steps are: open PowerPoint, create a new presentation with Copilot, use the 'Attach file' feature to select an existing PowerPoint deck, then ask Copilot to generate slides using the attached deck's style. The entry does not use the words Agent Mode, which the roadmap title does. What this page says about behaviour comes from that entry and the roadmap record.

The roadmap record lists the status as Launched, the target as June CY2026, the release phase as General Availability, the cloud as Worldwide (Standard Multi-Tenant) and the platform as Web. The record's description also carries an update of June 5, 2026 that calls the feature still in development and says it would begin rolling out in mid-June 2026; the status and the October release note entry are the later statements. Microsoft lists the same feature under two further roadmap items: 555878 for Mac and 555880 for Desktop.

## Why it matters

For most tenants this is a small convenience with little to configure: users who build decks with Copilot can start from an existing deck's look instead of the default theme. Its value to a service owner is mainly brand consistency, which depends on users choosing a suitable reference deck.

Microsoft has not stated what happens on arrival for administrators or whether any admin action is needed, and no source says existing behaviour changes. Plan on users finding the option without notice, and on questions from users who attach a deck and do not get the layout they expected.

## Risk assessment

**Data exposure**
- The user chooses the deck to attach, and Copilot applies its theme and styles. A related release note dated July 01, 2026 for roadmap IDs 555887, 555889 and 555892 (reusing content and style from existing presentations) states that this capability respects existing file permissions and access controls. Treat that as the closest Microsoft statement, and confirm whether it covers this item before relying on it.

**Security & identity**
- No change is described: the release note entry names no new sign-in, permission or connection. Which licence tier gates the capability is not yet published (see Cost and licensing).

**Autonomy & actions**
- The release note describes the user attaching a deck and asking Copilot to generate slides. It describes no action that runs without a prompt.

**Change & support**
- Expect questions about how closely a new deck follows the attached deck. The release note promises design consistency and states no limits, so test the result with your own brand decks before telling users what to expect.
- The three roadmap records (Web, Desktop, Mac) are separate items, so timing may differ by platform; check each record.

## Cost and licensing

Microsoft's Microsoft Copilot overview page says users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint, and OneNote. It says users without the add-on can use Copilot in those apps, with some features subject to fair use limits, and that Copilot Chat (Basic) users do not have access to Copilot in them. Both groups are subject to the page's fair use note.

The release note entry for this item names no licence and no meter. A rate or licence rule specific to this capability is not yet published, so which of those experiences includes referencing an attached deck is unconfirmed. Indirect costs are admin time to check licence assignments and the communication to users.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, with the General Availability release phase. The record lists no US Government cloud. The release note entry tags the feature Windows and Web; Mac and Desktop have their own roadmap items (555878 and 555880).

Users who build presentations with Copilot in PowerPoint are in scope. Which Copilot licence tier those users need for this capability is not yet published. Licences are assigned by at least a License Administrator or User Administrator.

## Governance guidance

### Before rollout
- Check which users hold the Microsoft 365 Copilot add-on licence in the Microsoft 365 admin center (a License Administrator or User Administrator does this), because the full Copilot in PowerPoint experience is tied to it.
- Choose the brand or template decks you want users to attach, and test how Copilot on PowerPoint for the web renders new decks from them.

### At rollout
- Tell users that the 'Attach file' option in a new Copilot presentation can bring in an existing deck's theme and styles, and which decks to use.
- Pilot with a small group on the web before giving guidance to Desktop and Mac users, whose features are tracked as separate roadmap items.

### After rollout
- Collect user feedback on how faithfully new decks follow the attached deck, and pass layout problems to Microsoft.
- Recheck the Copilot release notes and Message center for an admin setting or a licence statement for this capability, and update your guidance if one is published.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that gives access to Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">General licence control, not specific to this capability. Whether this capability needs the add-on licence is not yet published.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No admin setting specific to this capability is documented at the time of writing (November 2026), so the table lists the licence control that decides who holds the Microsoft 365 Copilot add-on licence. It does not establish that this capability is gated by that licence.

Assigning licences needs at least the License Administrator or User Administrator role in the Microsoft 365 admin center. The Graph PowerShell route needs the User.ReadWrite.All permission scope, or another permission listed on the 'Assign license' Microsoft Graph API reference page.

## Open questions

- Which Copilot licence tier includes referencing an attached deck's style: the add-on licence, the Basic experience, or both? Watch the Microsoft Copilot overview page on Learn.
- Is there an admin setting to turn this capability off, and is it on for every user by default? Watch the Copilot release notes and Message center.
- Does Copilot read anything from the attached deck beyond its theme and styles, and do existing file permissions apply as the related July 2026 release note states?
- Why does the roadmap record still carry a June 2026 'in development' update while its status is Launched? Watch the roadmap item for a corrected description.

<!-- rationale
risk: Low. A user attaches a deck and Copilot applies its theme and styles to a new deck; Microsoft's release note describes no new data source, connection or action beyond that.
cost: Low. No licence or meter specific to this capability is published, so the known cost is admin time. Learn says the full Copilot in PowerPoint experience needs the Microsoft 365 Copilot add-on licence.
impact: Low. Only people building decks with Copilot in PowerPoint on the web notice it, as an extra way to start a new deck; administrators have no documented setting to change.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions / default: The capability's default state is unknown. | Found: Use the 'Attach file' feature to select an existing PowerPoint deck. Request Copilot to generate slides using the attached deck’s style. | Fix: Set defaultState to 'user-opt-in': the standard includes a capability that each user chooses to use. Replace the default-state uncertainty in Why it matters with 'The release note describes users choosing an attached reference deck and requesting slides in its style.' Keep any question about tenant-wide rollout availability separate from this usage default. The targeted admin-switch searches found no setting specific to this capability. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [contradicted, blocker] Why it matters / behaviour: No source says existing behaviour changes. | Found: Copilot in PowerPoint now supports attaching an existing presentation when creating and editing a new one. Previously, new presentations used default themes. Now, Copilot applies the attached file’s theme and styles to the new deck, ensuring design consistency. | Fix: Remove 'and no source says existing behaviour changes'. The release note explicitly describes changed presentation-creation behaviour; its user steps, rather than a claim that nothing changes, establish that using the attached style is a user choice. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
-->
