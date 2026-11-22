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
  - title: "Upload photos and files to OneDrive"
    url: "https://support.microsoft.com/en-us/office/upload-files-and-folders-to-onedrive-a1397e56-61ec-4ed2-9dac-727bf8ac3357"
    kind: "docs"
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
  - date: "2026-11-22"
    note: "Corrected after the independent check: removed unsupported claims that nothing breaks, that data and permissions are unchanged, that the button is used daily and that nothing new acts on its own."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 44 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 44
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e184fc3df849667c13d09a53cdd89271"
---

## What's changing

OneDrive for the web moves the **Create or upload** button from the left navigation pane to the right side of the page. Microsoft says the aim is a more consistent file experience across OneDrive and SharePoint, bringing the placement familiar from SharePoint document libraries to OneDrive.

Microsoft's notice MC1521617 adds that the button will no longer appear in **Libraries**, **Recycle Bin**, **Meetings** or **Media**. The options for creating files and folders or uploading content are unchanged. The notice also says some users may receive the update sooner than others in the same organisation.

The roadmap record shows the item as Rolling out, with a target of October CY2026, release phases General Availability and Targeted Release, platform Web and cloud Worldwide (Standard Multi-Tenant). MC1521617 (published 2026-10-22) gives the General Availability (Worldwide) rollout as beginning in late October 2026 and expected to complete by early December 2026. The notice gives no act-by date. Microsoft Learn has no page about this change at the time of writing (November 2026), so the behaviour described here is the roadmap's and the notice's.

## Why it matters

Microsoft says the available create and upload options are unchanged, but the **Create or upload** button moves, and it can disappear from pages where users expect it. Expect help desk questions from users who look for it in the left pane or in Libraries, Recycle Bin, Meetings or Media, and expect existing screenshots, guides and training material to be out of date.

The notice says no administrative configuration or action is required and recommends updating internal training materials and informing help desk, support teams and users who regularly use OneDrive for the web. Because rollout is expected to complete by early December 2026, the communication is worth sending now rather than after the first tickets arrive.

## Risk assessment

**Data exposure**

- The notice states that the available options for creating files and folders or uploading content are unchanged.

**Security & identity**

- No change to sign-in, sharing or permissions is described in the roadmap record or in MC1521617, which states that no compliance considerations were identified.

**Autonomy & actions**

- The button is operated by the user: uploading files from the OneDrive website starts when the user selects **Upload** and chooses the files.

**Change & support**

- Users who look for **Create or upload** in the left navigation pane, or on the Libraries, Recycle Bin, Meetings or Media pages, will not find it there once the update reaches them. Plan for support questions and out-of-date guides.
- Rollout is gradual, so colleagues in the same organisation may see different layouts at the same time. MC1521617 says some users may receive the update sooner than others.

## Cost and licensing

No separate cost for this change is stated. The OneDrive service description (https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description) says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can also be purchased as a standalone plan. The roadmap record and MC1521617 name no additional licence, meter or charge for the new button placement.

The indirect cost is admin and support time: updating internal training material and briefing the help desk, as MC1521617 recommends.

## Scope

**Users:** users of OneDrive for the web, per MC1521617. The roadmap record lists the platform as Web only.

**Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant).

**Rollout:** the roadmap record shows status Rolling out, target October CY2026, with General Availability and Targeted Release phases. MC1521617 gives a General Availability (Worldwide) rollout beginning in late October 2026 and expected to complete by early December 2026.

**Prerequisites:** none are stated in the roadmap record or MC1521617, which says no administrative configuration or action is required.

## Governance guidance

### Before rollout

- Identify which internal guides, intranet pages and training decks show the **Create or upload** button in the left navigation pane, and mark them for update.
- Brief the help desk on the new position on the right side of the page, and on the pages where the button no longer appears: Libraries, Recycle Bin, Meetings and Media.

### At rollout

- Tell users who regularly use OneDrive for the web that the button is moving, and that the create and upload options themselves are unchanged.
- Expect mixed experiences while rollout continues; MC1521617 says some users get the update before others and expects completion by early December 2026.

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
