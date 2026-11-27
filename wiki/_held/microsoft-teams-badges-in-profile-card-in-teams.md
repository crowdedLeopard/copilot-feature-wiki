---
title: "Microsoft Teams: Awards and Certifications badges on profile cards"
slug: "microsoft-teams-badges-in-profile-card-in-teams"
roadmapId: 568078
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams profile cards now show the Awards and Certifications held in users' Microsoft 365 profiles, as Outlook already does. No admin action is required, but check what those fields hold, as no documented setting hides the section."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Each user in the organisation must have a Teams licence before using Teams, except for joining meetings anonymously. Microsoft has not published a licence requirement specific to Awards and Certifications display."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","user-profiles","outlook","copilot-connectors","microsoft-graph","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 568078"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568078"
    kind: "roadmap"
  - title: "MC1462467: Badges on profile cards in Teams"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1462467"
    kind: "message-center"
  - title: "Enriching and customizing your organization's profile cards"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/customize-profile-cards"
    kind: "learn"
  - title: "Manage people data and related experiences from the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/people-settings-in-microsoft-365-admin-center"
    kind: "learn"
  - title: "profileCardProperty resource type"
    url: "https://learn.microsoft.com/graph/api/resources/profilecardproperty?view=graph-rest-1.0"
    kind: "learn"
  - title: "Credly connector overview (preview)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/credly-overview"
    kind: "learn"
  - title: "personCertification resource type"
    url: "https://learn.microsoft.com/graph/api/resources/personcertification?view=graph-rest-beta"
    kind: "learn"
  - title: "personAward resource type"
    url: "https://learn.microsoft.com/graph/api/resources/personaward?view=graph-rest-beta"
    kind: "learn"
  - title: "Create personCertification"
    url: "https://learn.microsoft.com/graph/api/profile-post-certifications?view=graph-rest-beta"
    kind: "learn"
  - title: "Removal of an individual certification from a user's Microsoft 365 profile (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/personcertification-delete?view=graph-rest-beta"
    kind: "learn"
  - title: "Removal of an individual award from a user's Microsoft 365 profile (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/personaward-delete?view=graph-rest-beta"
    kind: "learn"
  - title: "Remove-MgBetaUserProfileCertification (Microsoft.Graph.Beta.People)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.beta.people/remove-mgbetauserprofilecertification?view=graph-powershell-beta"
    kind: "learn"
  - title: "Remove-MgBetaUserProfileAward (Microsoft.Graph.Beta.People)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.beta.people/remove-mgbetauserprofileaward?view=graph-powershell-beta"
    kind: "learn"
  - title: "Manage user access to Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
videos: []
related: ["copilot-connectors"]
controls:
  - governs: "Tenant-wide switch to hide the Awards and Certifications section on profile cards"
    scope: "tenant"
    ui: null
    api: null
    note: "People settings > Profile card shows or hides a fixed list of optional properties that does not include Awards or Certifications."
  - governs: "Removal of an individual certification from a user's Microsoft 365 profile"
    scope: "user"
    ui: null
    api:
      kind: "graph"
      call: "DELETE /beta/users/{userId}/profile/certifications/{id}"
      docs: "https://learn.microsoft.com/graph/api/personcertification-delete?view=graph-rest-beta"
    note: "Beta. REST reference: User.ReadWrite least privileged delegated; application not supported. PowerShell reference lists application User.ReadWrite.All, AgentIdUser.ReadWrite.All, AgentIdUser.ReadWrite.IdentityParentedBy."
  - governs: "Removal of an individual award from a user's Microsoft 365 profile"
    scope: "user"
    ui: null
    api:
      kind: "graph"
      call: "DELETE /beta/users/{userId}/profile/awards/{personAwardId}"
      docs: "https://learn.microsoft.com/graph/api/personaward-delete?view=graph-rest-beta"
    note: "Beta. REST reference: User.ReadWrite least privileged delegated; application not supported. PowerShell reference lists application User.ReadWrite.All, AgentIdUser.ReadWrite.All, AgentIdUser.ReadWrite.IdentityParentedBy."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-27"
    note: "New briefing: Teams profile cards show Awards and Certifications badges; no documented switch hides the section, and single entries can be deleted through Microsoft Graph beta."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 74 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: removed unsupported statements on data storage, sign-in and permissions; licensing set to included (Teams licence); impact raised to high; delete permission notes now give the REST and PowerShell references' differing lists."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 80 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 79
  unconfirmed: 1
  contradicted: 0
  attempts: 2
  hash: "0dcbf5c1a70464a6654f2778a415f5ac"
---

## What's changing

Profile cards in Microsoft Teams now show a user's awards and certifications as badges, taken from the existing Awards and Certifications properties of the Microsoft 365 profile. Microsoft's notice MC1462467 says the feature previously rolled out to Outlook and the Microsoft 365 Copilot app in April 2026 and is now coming to Teams profile cards. The roadmap item describes this as a more consistent experience across Teams and Outlook.

According to MC1462467, a new Awards and Certifications section appears on the Overview and Contact tabs of the card, below the Skills section. Each entry shows its title and issuer by default, and selecting a badge shows the description and award date. The card is read-only: users cannot create, edit or manage awards and certifications from it. Where an organisation does not populate these properties, nothing changes and the section does not appear.

The roadmap item is Launched, with a target of October CY2026, for General Availability and Targeted Release in the Worldwide (Standard Multi-Tenant) cloud on Desktop and Mac. MC1462467 gives the Targeted Release rollout as beginning in early October 2026 and expected to complete by early October 2026, and General Availability as beginning in early October 2026 and expected to complete by mid-October 2026. The post sets no act-by date.

## Why it matters

This change makes existing data more visible. Whatever sits in a user's Awards and Certifications properties is shown to colleagues who open that user's card in Teams. MC1462467 says these values will be visible on profile cards in Teams, Outlook and the Microsoft 365 Copilot app. So the decision is about the data: where it comes from, whether it is accurate, and whether it is fit to show to the whole organisation.

If nobody acts, Teams shows the section for every user whose properties are populated. The post says tenants that already use these fields need take no action. Tenants that fill the fields from a connector such as the Credly connector (preview) should expect badges to appear in Teams without anyone entering them by hand. Expect requests to correct or remove entries. The card cannot edit them, so corrections are made in the source system.

## Risk assessment

**Data exposure**
- Values stored in the Awards and Certifications properties appear on Teams profile cards for colleagues to see. Microsoft Learn documents no admin setting to hide this section (see the controls table), so the control is the data itself.
- Where badges come from the Credly connector (preview), its Learn page says all imported badge data is visible to everyone in the organisation by default, and that granular per-user or group filtering isn't available in this release. The connector indexes only badges that users publicly accept or share on their Credly profiles.

**Security & identity**
- The Microsoft Graph beta reference lists `POST /me/profile/certifications` with User.ReadWrite as the least privileged delegated permission, so users can add their own entries through the API. Microsoft does not say whether such entries appear on the Teams card.

**Autonomy & actions**
- No change: the section displays profile data, and MC1462467 says the card is read-only.

**Change & support**
- Expect users to ask how to correct or remove a badge. The profile card customisation page says users can find the source of each property by exporting their profile card data, and that admins then update the information in the source system.

## Cost and licensing

Each user in the organisation must have a Teams licence before using Teams, except for joining meetings anonymously ([Manage user access to Microsoft Teams](https://learn.microsoft.com/microsoftteams/user-access)). Microsoft has not published a licence requirement specific to Awards and Certifications display. MC1462467 and the roadmap item name none, and the Microsoft 365 page on enriching and customising profile cards gives the Global Administrator or People Administrator role as its prerequisite and names no licence. Microsoft documents no meter for this feature at the time of writing (November 2026).

The cost the sources show is admin time: reviewing what the Awards and Certifications properties hold, and handling corrections in the source system. Filling these properties from a connector such as Credly is a separate project, and this change does not need one.

## Scope

- **Users:** MC1462467 says the change affects all users in organisations that populate the Awards and Certifications properties in Microsoft 365 profiles.
- **Where it shows:** the Overview and Contact tabs of Teams profile cards. The post also lists Outlook, the Microsoft 365 Copilot app and Microsoft 365 profile cards under platforms and services.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists it.
- **Platforms:** Desktop and Mac, as the roadmap item lists them.
- **Rollout:** Targeted Release, then General Availability, both in October 2026 according to MC1462467.
- **Roles:** profile card settings under People settings need the Global Administrator or People Administrator role. Global Readers can view those settings read-only.
- **Prerequisite:** populated properties. The profile card page says profile properties can be populated from Microsoft Entra ID, organisational data in Microsoft 365, Microsoft 365 Copilot connectors for people data, and user-provided details.

## Governance guidance

### Before rollout
- Confirm whether your tenant populates the Awards and Certifications properties, and from which source: an organisational data import, a Copilot connector such as Credly, or user edits.
- Decide whether badge data imported by a connector is fit to show to the whole organisation, given that the Credly connector page says imported badge data is visible to everyone by default.
- Agree who owns corrections in each source system before users start asking.

### At rollout
- Tell users that Teams profile cards now show an Awards and Certifications section below Skills, that the card is read-only, and how to ask for an entry to be corrected.
- Brief the service desk that users can export their profile card data to find the source ID of a property, and that the fix is made in that source system.

### After rollout
- Correct or remove inaccurate entries at their source. For a single entry, use the Microsoft Graph beta delete operations in the controls table.
- Watch Message center and the profile card customisation page for an admin setting that hides the section.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch to hide the Awards and Certifications section on profile cards</strong><br><small>Tenant</small><br><small class="controls__note">People settings &gt; Profile card shows or hides a fixed list of optional properties that does not include Awards or Certifications.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removal of an individual certification from a user's Microsoft 365 profile</strong><br><small>User</small><br><small class="controls__note">Beta. REST reference: User.ReadWrite least privileged delegated; application not supported. PowerShell reference lists application User.ReadWrite.All, AgentIdUser.ReadWrite.All, AgentIdUser.ReadWrite.IdentityParentedBy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE /beta/users/{userId}/profile/certifications/{id}</code> <a href="https://learn.microsoft.com/graph/api/personcertification-delete?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Removal of an individual award from a user's Microsoft 365 profile</strong><br><small>User</small><br><small class="controls__note">Beta. REST reference: User.ReadWrite least privileged delegated; application not supported. PowerShell reference lists application User.ReadWrite.All, AgentIdUser.ReadWrite.All, AgentIdUser.ReadWrite.IdentityParentedBy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE /beta/users/{userId}/profile/awards/{personAwardId}</code> <a href="https://learn.microsoft.com/graph/api/personaward-delete?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting to hide the Awards and Certifications section at the time of writing (November 2026). In the Microsoft 365 admin center, Settings > Org settings > People settings > Profile card > Contact info lets Global Administrators and People Administrators show or hide a fixed list of optional properties, such as Division, Role and Employee number. Awards and Certifications are not on that list. The profile card API (profileCardProperty) accepts as directoryPropertyName only the Microsoft Entra ID properties and custom attributes it lists, and Awards and Certifications are not among them.

So the controls act on the data. Correct an entry at its source, or delete a single entry with Microsoft Graph beta. The REST references for the delete operations list User.ReadWrite as the least privileged delegated permission (User.ReadWrite.All is among the higher privileged permissions) and say application permissions are not supported; the PowerShell references for [Remove-MgBetaUserProfileCertification](https://learn.microsoft.com/powershell/module/microsoft.graph.beta.people/remove-mgbetauserprofilecertification?view=graph-powershell-beta) and [Remove-MgBetaUserProfileAward](https://learn.microsoft.com/powershell/module/microsoft.graph.beta.people/remove-mgbetauserprofileaward?view=graph-powershell-beta) instead list application User.ReadWrite.All, AgentIdUser.ReadWrite.All and AgentIdUser.ReadWrite.IdentityParentedBy. The profile card page notes that hiding a property does not delete the underlying data, and that to delete data permanently, admins remove it from the source system.

## Open questions

- Will Microsoft add a People settings option to hide the Awards and Certifications section on Teams, Outlook and Microsoft 365 Copilot app cards? Watch Message center and the profile card customisation page.
- Does the Teams card honour the allowedAudiences value that Microsoft Graph stores on each award and certification entry?
- Do entries that users add to their own profile through Microsoft Graph appear on the Teams card alongside entries from organisational sources?
- If an entry imported by the Credly connector is deleted through Microsoft Graph, does the connector's next crawl restore it?

<!-- rationale
risk: Low. The section shows profile data that MC1462467 says is already shown in Outlook and the Microsoft 365 Copilot app; the card is read-only and nothing appears where the fields are empty.
cost: Low. The only cost the sources show is admin time to review the Awards and Certifications data; Microsoft has not published a licence requirement or meter for this feature.
impact: High. In organisations that populate Awards and Certifications, the section appears automatically for all users; organisations with empty properties see no visible change.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Scope: Rollout / date: According to MC1462467, Targeted Release happens first and General Availability follows it. | Found: Searched: 568078 Targeted rollout October. Read MC1462467 and roadmap record: both rollout starts are early October 2026; different expected completion windows do not establish sequential rollout. Learn search found no feature-specific ordering statement. | Fix: Replace 'Targeted Release, then General Availability, both in October 2026 according to MC1462467' with 'Targeted Release and General Availability both begin in early October 2026, with expected completion by early October and mid-October respectively, according to MC1462467.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: Microsoft 365 admin center path / admin-path: Settings > Org settings > People settings > Profile card > Contact info reaches optional profile property visibility. | Found: admins can configure their visibility by navigating to Settings > Org settings > People settings > Profile card > Contact info in the Microsoft 365 admin center. | Fix: The cited People settings page additionally says to find the Services tab on Org settings before selecting People settings. Replace the prose path with 'Settings > Org settings > Services > People settings > Profile card > Contact info', combining the steps at https://learn.microsoft.com/microsoft-365/admin/manage/people-settings-in-microsoft-365-admin-center and https://learn.microsoft.com/microsoft-365/admin/manage/customize-profile-cards. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/customize-profile-cards
-->
