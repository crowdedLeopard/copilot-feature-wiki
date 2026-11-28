---
title: "Microsoft Teams: recently used emojis and reactions sync across devices"
slug: "microsoft-teams-recently-used-emojis-sync-across-devices"
roadmapId: 554927
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams shows the same recently used emojis and reactions on every client a user signs in to. Microsoft says it is on by default and needs no configuration; helpdesk communication is the only task."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap record and MC1256307 name no licence or meter for this feature, and no Microsoft Learn page was found that describes it."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","user-experience","emoji","adoption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 554927"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=554927"
    kind: "roadmap"
  - title: "MC1256307: (Updated) Microsoft Teams: Recently used emojis sync across devices"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1256307"
    kind: "message-center"
  - title: "Custom emojis in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-custom-emojis"
    kind: "learn"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Tenant or policy switch for recently used emoji sync"
    scope: "tenant"
    ui: null
    api: null
    note: "Existing custom emoji settings do not document control of the recent list; see the notes below the table."
confidence: "low"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-19T21:32:07"
changes:
  - date: "2026-11-21"
    note: "First briefing: recently used emojis and reactions sync across Teams clients, on by default per MC1256307; no admin control for it is documented."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "98855e2405bacf2f4ac66ca5eaa484d1"
---

## What's changing

Teams syncs each user's recently used emojis and reactions across their devices. Microsoft's notice MC1256307 says users will see the same "recently used" list on Teams for Android, iOS, Mac, Windows desktop and the web, so an emoji used on a phone appears as recent on the desktop client.

Microsoft's notice says the feature will be enabled by default and that no configuration is required for rollout. It adds that existing Teams admin settings and messaging policies continue to apply, and that there is no impact on message flow, data storage, compliance boundaries or customer data pathways. These are Microsoft's statements, reported as the notice gives them.

Microsoft Learn has no page describing this feature at the time of writing (November 2026), so everything above comes from the roadmap record and MC1256307.

The roadmap record lists the item as Launched, with a target of July CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, in General Availability and Targeted Release. MC1256307 was last updated on 22 September 2026 with a new timeline: Targeted Release complete by mid-July 2026; Worldwide General Availability from mid-July and complete in late July 2026; GCC and GCC High from mid-July and complete by end of October 2026; DoD from mid-August and complete by end of October 2026. The notice lists no act-by date and gives 30 November 2026 as Microsoft's end date.

## Why it matters

This is a small change in what users see, and it arrives without anyone choosing it: Microsoft says it is on by default. The practical effect for a service owner is support load and documentation, not risk. Users who move between a laptop and a phone will see a consistent recent list, and anyone who has written internal guidance describing the emoji picker may need to correct it.

If nobody acts, the feature still rolls out. Microsoft's notice says no action is required, so the work is limited to the optional steps it suggests: telling the helpdesk, updating documentation and reviewing messaging settings if you manage custom emoji usage.

## Risk assessment

**Data exposure**

- Microsoft's notice MC1256307 states that the feature introduces no new data storage, processing changes, communication pathways or changes to Purview-governed workflows. Microsoft Learn does not describe how the recent list is held, so this rests on that notice.

**Security & identity**

- No change is documented: the notice mentions no new permissions, sign-in requirements or external sharing.

**Autonomy & actions**

- No change: the feature only changes which emojis and reactions appear as recent. The notice describes no automated actions.

**Change & support**

- Users may ask why the recent list now matches across devices. The notice suggests briefing helpdesk and support teams.
- The rollout windows differ by cloud, so users in GCC, GCC High and DoD tenants can see the change later than Worldwide users (see Scope).

## Cost and licensing

Microsoft has not published a licence requirement or meter for this feature. Neither the roadmap record nor MC1256307 names a licence, price or meter, and Microsoft Learn has no page for the feature at the time of writing (November 2026), so no entitlement is stated.

The only cost the sources point to is admin time: telling helpdesk teams and updating internal documentation, as the notice suggests.

## Scope

MC1256307 says all Microsoft Teams users across supported clients are affected: Android, iOS, Mac, Windows desktop and Teams for the web. The roadmap record lists the platforms as Android, Desktop, iOS, Mac and Web.

The roadmap record lists the clouds as Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with release phases General Availability and Targeted Release. The notice gives later completion dates for GCC, GCC High and DoD (end of October 2026) than for Worldwide (late July 2026).

No prerequisite, role or admin action is named in the notice for rollout.

## Governance guidance

### Before rollout

- Tell helpdesk and support teams that users will see the same recently used emojis and reactions on every Teams client, as MC1256307 suggests.
- Update internal Teams guidance that describes the emoji or reaction picker.
- Check the notice for your cloud (Worldwide, GCC, GCC High or DoD) so support staff know when users there see the change.

### At rollout

- Point users who ask about the shared recent list to Microsoft's support article on sending an emoji, GIF or sticker in Teams, which the notice links.
- Record any user reports that the recent list differs between clients, so you can raise them with Microsoft if rollout is incomplete in your cloud.

### After rollout

- Confirm with a pilot user that a reaction used on one client appears as recent on another.
- Watch Message center for further updates to MC1256307 and for any admin control Microsoft later documents.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or policy switch for recently used emoji sync</strong><br><small>Tenant</small><br><small class="controls__note">Existing custom emoji settings do not document control of the recent list; see the notes below the table.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting for recently used emoji sync at the time of writing (November 2026): the messaging policy settings page lists settings such as **Upload custom emojis** and **Delete custom emojis**, and none for the recent list. MC1256307 says existing Teams admin settings and messaging policies continue to apply, without naming one that governs this feature.

Two existing controls concern custom emojis, not this feature: the **use custom emojis** option in Messaging Settings and the **Upload custom emojis** and **Delete custom emojis** settings in messaging policies, documented at [Custom emojis in Microsoft Teams](https://learn.microsoft.com/microsoftteams/teams-custom-emojis). The notice suggests reviewing messaging settings and policies if you manage custom emoji usage, but Microsoft has not said whether those settings change what appears in the synced list.

## Open questions

- Is there any admin setting, in Teams admin center or PowerShell, that turns recently used emoji sync off for a tenant or a messaging policy? Watch the Teams messaging policy settings page and MC1256307.
- Do custom emojis appear in the synced recent list, and do the custom emoji settings affect it? The custom emojis page does not say.
- Where is the recent list stored, and is it covered by retention, eDiscovery or audit? The notice says only that no new data storage or compliance impact is introduced.
- Which licence, if any, does the feature depend on? Neither the roadmap nor the notice states one.

<!-- rationale
risk: Low. Microsoft's notice MC1256307 says the change adds no data storage, compliance or communication pathways, and it only alters which emojis a user sees as recent.
cost: Low. The only cost the sources show is admin time for helpdesk notes; neither the roadmap record nor MC1256307 names a licence or meter, and none is published for this feature.
impact: Medium. Every Teams user on a supported client sees the change, but it is limited to the recently used emoji and reaction list.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions / licensing: Feature-specific licensing is not published, so the briefing reports the licensing model as unknown and states no entitlement. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included'. Replace licensing.notes with 'Teams users need a Teams license. Microsoft has not published a licence requirement specific to recently used emoji sync.' Replace 'so no entitlement is stated' in Cost and licensing with 'Teams users need a Teams license; no feature-specific requirement is published.' Cite https://learn.microsoft.com/microsoftteams/user-access in sources and Cost and licensing. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [contradicted, minor] front matter: impact; rationale: impact / consistency: Impact is medium even though the briefing describes a default change affecting every Teams user on supported clients. | Found: impact: "medium"; impact: Medium. Every Teams user on a supported client sees the change, but it is limited to the recently used emoji and reaction list. | Fix: Set impact to 'high' and replace its rationale with 'High. Every Teams user on a supported client sees a change to the default recently used emoji and reaction list.' The assessment scale defines high impact as most users or a change to default behaviour.
-->
