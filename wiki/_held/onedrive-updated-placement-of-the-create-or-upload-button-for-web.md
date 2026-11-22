---
title: "OneDrive: Create or upload button moves to the right side of the page on the web"
slug: "onedrive-updated-placement-of-the-create-or-upload-button-for-web"
roadmapId: 572683
topic: "modern-work"
products: ["OneDrive"]
summary: "OneDrive for the web moves the Create or upload button from the left navigation pane to the right side of the page. No admin action is required; update training and help desk guidance."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can also be purchased as a standalone plan. No separate licence or price for this change is stated in the roadmap record or in Microsoft's notice MC1521617."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["onedrive","sharepoint","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 572683"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=572683"
    kind: "roadmap"
  - title: "MC1521617: Microsoft OneDrive: Updated placement of the Create or upload button in OneDrive for the web"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1521617"
    kind: "message-center"
  - title: "OneDrive service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description"
    kind: "learn"
  - title: "Overview of OneDrive in Microsoft 365"
    url: "https://learn.microsoft.com/sharepoint/onedrive-overview"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether the Create or upload button stays in the left navigation pane of OneDrive for the web"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1521617 says no administrative configuration or action is required."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: the Create or upload button moves to the right side of the page in OneDrive for the web; no admin action required."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 47 statements contradicted, 5 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 42
  unconfirmed: 5
  contradicted: 0
  attempts: 1
  hash: "bf35abf115703e5d77762aaa6b2f14b6"
---

## What's changing

OneDrive for the web moves the **Create or upload** button from the left navigation pane to the right side of the page. Microsoft says the aim is a more consistent file experience across OneDrive and SharePoint, bringing the placement familiar from SharePoint document libraries to OneDrive.

Microsoft's notice MC1521617 adds that the button will no longer appear in **Libraries**, **Recycle Bin**, **Meetings** or **Media**. The options for creating files and folders or uploading content are unchanged. The notice also says some users may receive the update sooner than others in the same organisation.

The roadmap record shows the item as Rolling out, with a target of October CY2026, release phases General Availability and Targeted Release, platform Web and cloud Worldwide (Standard Multi-Tenant). MC1521617 (published 2026-10-22) gives the General Availability (Worldwide) rollout as beginning in late October 2026 and expected to complete by early December 2026. The notice gives no act-by date. Microsoft Learn has no page about this change at the time of writing (November 2026), so the behaviour described here is the roadmap's and the notice's.

## Why it matters

Nothing breaks and no data or permissions change, but a button that people use daily moves, and it can disappear from pages where they expect it. Expect help desk questions from users who look for it in the left pane or in Libraries, Recycle Bin, Meetings or Media, and expect existing screenshots, guides and training material to be out of date.

The notice says no administrative configuration or action is required and recommends updating internal training materials and informing help desk, support teams and users who regularly use OneDrive for the web. Because the rollout is due to finish by early December 2026, the communication is worth sending now rather than after the first tickets arrive.

## Risk assessment

**Data exposure**

- No change to what data OneDrive holds or who can reach it: the notice states that the options for creating files and folders or uploading content are unaffected.

**Security & identity**

- No change to sign-in, sharing or permissions is described in the roadmap record or in MC1521617, which states that no compliance considerations were identified.

**Autonomy & actions**

- No change: the button is operated by the user, and nothing new acts on its own.

**Change & support**

- Users who look for **Create or upload** in the left navigation pane, or on the Libraries, Recycle Bin, Meetings or Media pages, will not find it there once the update reaches them. Plan for support questions and out-of-date guides.
- Rollout is gradual, so colleagues in the same organisation may see different layouts at the same time. MC1521617 says some users may receive the update sooner than others.

## Cost and licensing

No separate cost for this change is stated. The OneDrive service description (https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description) says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can also be purchased as a standalone plan. The roadmap record and MC1521617 name no additional licence, meter or charge for the new button placement.

The indirect cost is admin and support time: updating internal training material and briefing the help desk, as MC1521617 recommends.

## Scope

**Users:** users of OneDrive for the web, per MC1521617. The roadmap record lists the platform as Web only.

**Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant).

**Rollout:** the roadmap record shows status Rolling out, target October CY2026, with General Availability and Targeted Release phases. MC1521617 gives a General Availability (Worldwide) rollout from late October 2026 to early December 2026.

**Prerequisites:** none are stated in the roadmap record or MC1521617, which says no administrative configuration or action is required.

## Governance guidance

### Before rollout

- Identify which internal guides, intranet pages and training decks show the **Create or upload** button in the left navigation pane, and mark them for update.
- Brief the help desk on the new position on the right side of the page, and on the pages where the button no longer appears: Libraries, Recycle Bin, Meetings and Media.

### At rollout

- Tell users who regularly use OneDrive for the web that the button is moving, and that the create and upload options themselves are unchanged.
- Expect mixed experiences across the tenant until early December 2026, because MC1521617 says some users get the update before others.

### After rollout

- Replace screenshots and step-by-step guides that show the old button position once the update has reached your users.
- Review help desk tickets about missing upload or create options and point users to the right side of the page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Create or upload button stays in the left navigation pane of OneDrive for the web</strong><br><small>Tenant</small><br><small class="controls__note">MC1521617 says no administrative configuration or action is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant setting or API to keep the previous button placement at the time of writing (November 2026), and MC1521617 says no administrative configuration is required. The row above records that gap. The SharePoint admin center settings the OneDrive overview lists (Sharing, Sync, Storage limit, Retention, Access control, Notifications) govern other behaviour and are not controls over this change.

## Open questions

- Will Microsoft provide a way for administrators to keep the previous button placement, or is the new placement fixed? Watch Message center and the roadmap item.
- Does the roadmap's Targeted Release phase mean some tenants have already received the change? Watch Message center for an updated MC1521617.
- Will Microsoft publish a Learn page that describes the new placement and the pages where the button is removed?

<!-- rationale
risk: Low. The change is a button position in OneDrive for the web, and Microsoft's notice MC1521617 says the available create and upload options are unchanged and no compliance considerations were identified.
cost: Low. The only cost the sources show is admin and support time to update training material; Microsoft's notice MC1521617 names no licence or charge for the change.
impact: High. It changes the default OneDrive for the web layout, so users of the web app are likely to notice the button has moved, and it also disappears from some pages.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Nothing breaks as a result of the update. | Found: Searched: 'OneDrive updated placement Create or upload button no changes permissions data sign-in autonomous actions breaks'. Read roadmap, MC1521617 and OneDrive overview; they preserve available options but do not guarantee nothing breaks. | Fix: Remove 'Nothing breaks and' from the first sentence of Why it matters; unchanged create and upload options are already documented elsewhere.
- [unsupported, major] Why it matters; Risk assessment: Data exposure / behaviour: The update makes no change to data or to what data OneDrive holds. | Found: Searched: 'OneDrive updated placement Create or upload button no changes permissions data sign-in autonomous actions breaks'. Read roadmap, MC1521617, OneDrive overview and service description; no passage states that data or stored content cannot change. | Fix: Replace 'no data or permissions change' in Why it matters with 'Microsoft says the available create and upload options are unchanged'. Replace the Data exposure bullet with 'The notice states that the available options for creating files and folders or uploading content are unchanged.'
- [unsupported, blocker] Why it matters; Risk assessment: Data exposure / applicability: The update makes no change to permissions or to who can reach OneDrive data. | Found: Searched: '"OneDrive" "Create or upload" permissions data unchanged user button'; 'OneDrive updated placement Create or upload button no changes permissions data sign-in autonomous actions breaks'. Read roadmap, MC1521617 and OneDrive overview; no access-preservation guarantee. | Fix: Remove the assertions 'no data or permissions change' and 'or who can reach it'. Use 'Microsoft says the available create and upload options are unchanged' in Why it matters and 'The notice states that the available options for creating files and folders or uploading content are unchanged' for Data exposure. The existing narrower statement that no permission change is described may remain.
- [unsupported, major] Why it matters / behaviour: People use the Create or upload button daily. | Found: Searched: '"OneDrive" "Create or upload" "Select" upload files folders'. Read OneDrive overview, MC1521617 and Microsoft Support upload instructions; they document use and regular users, not daily use. | Fix: Replace 'a button that people use daily moves' with 'the Create or upload button moves'.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Nothing new acts on its own as a result of this update. | Found: Searched: 'OneDrive updated placement Create or upload button no changes permissions data sign-in autonomous actions breaks'. Read roadmap, MC1521617, OneDrive overview and Support upload instructions; no passage states this update adds no autonomous behaviour. | Fix: Remove 'No change:' and 'and nothing new acts on its own' from the Autonomy & actions bullet, leaving the supported user-operated button statement.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Scope; Governance guidance: At rollout / record: The rollout is expected to complete by early December 2026, also described as running to or until then. | Found: General Availability (Worldwide): Rollout will begin in late October 2026 and is expected to complete by early December 2026. | Fix: Keep 'expected to complete by early December 2026' wherever the end date appears. Replace the Why it matters clause with 'Because rollout is expected to complete by early December 2026'; in Scope use 'beginning in late October 2026 and expected to complete by early December 2026'; replace the At rollout bullet with 'Expect mixed experiences while rollout continues; MC1521617 says some users get the update before others and expects completion by early December 2026.'
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: The upload button is operated by the user. | Found: 2. Select Upload. ... 3. Select the files you want to upload, and then select Open. | Fix: Cite 'Upload photos and files to OneDrive' at https://support.microsoft.com/en-us/office/upload-files-and-folders-to-onedrive-a1397e56-61ec-4ed2-9dac-727bf8ac3357 for the user-operated upload behaviour. | Source: https://support.microsoft.com/en-us/office/upload-files-and-folders-to-onedrive-a1397e56-61ec-4ed2-9dac-727bf8ac3357
-->
