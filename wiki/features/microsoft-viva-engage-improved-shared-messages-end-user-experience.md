---
title: "Viva Engage: richer shared message previews and a full conversation dialog"
slug: "microsoft-viva-engage-improved-shared-messages-end-user-experience"
roadmapId: 578870
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Microsoft is rolling out richer previews of shared messages in Viva Engage, with a dialog on web surfaces to open the full conversation. Users get it automatically; Microsoft's notice asks admins only to tell users."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn's Viva Engage service description lists Viva Engage feeds as available in Small Business, Enterprise and Education plans. A licence or charge specific to this change is not yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["viva-engage","user-experience","adoption"]
sources:
  - title: "MC1539003: Microsoft Viva Engage: Improved shared message experience"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1539003"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap: Microsoft Viva: Engage - Improved shared messages end-user experience"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578870"
    kind: "roadmap"
  - title: "Viva Engage service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/viva-engage-service-description/viva-engage-service-description"
    kind: "learn"
  - title: "Configure conversation settings for the Viva Engage network"
    url: "https://learn.microsoft.com/viva/engage/configure-your-viva-engage-network/engage-conversation-settings"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Legacy Viva Engage (Yammer) Core APIs"
    url: "https://learn.microsoft.com/rest/api/yammer/yammer-core-apis"
    kind: "learn"
videos: []
related: ["microsoft-viva-engage-community-feed-improvements","microsoft-viva-viva-engage-new-left-navigation-controls-collapse-resize-increased-favorite"]
controls:
  - governs: "Switch for the improved shared message experience"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice names no admin control. Existing Engage conversation settings are not described as covering shared message previews."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-21"
    note: "First briefing: Microsoft is rolling out richer shared message previews and a conversation dialog in Viva Engage; no admin control is documented."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "69c948624ffcbc2eaf49ee9adcc50942"
---

## What's changing

Microsoft is changing how a shared message looks to the person who receives it in Viva Engage. According to Microsoft's notice MC1539003, shared messages will show richer previews of the original post, including formatted text, images, videos and attachments, and the preview will reflect later changes to the original post, including edits.

On Viva Engage web surfaces, a user can select a shared message or **View full conversation** to open the original conversation in a dialog, including replies and reactions. From that dialog the user can react, reply and share without losing their place in the feed. The notice says users continue to discover and share messages as they do today.

The roadmap item (status Rolling out, target November CY2026, General Availability, Worldwide (Standard Multi-Tenant), Desktop and Web) describes the aim as making shared conversations easier to discover, read and participate in. MC1539003, published 2026-11-05, gives a rollout window beginning mid-November 2026 and expected to complete by late November 2026, with an end date of 2027-01-01 and no act-by date. Microsoft Learn has no page on this feature at the time of writing (November 2026), so the behaviour above is as the notice and roadmap describe it.

## Why it matters

Nothing needs configuring: the notice says no changes to existing sharing workflows are required and recommends informing users and updating training or support material that shows how shared messages appear. Where those materials include screenshots of the old shared message card, they will go out of date as the rollout reaches your users.

The visible change is that more of the original post appears inside the shared message, and it follows edits to the original. Service owners who moderate or retain Engage content should expect users to see edited text in previews, and should expect questions about why a shared message no longer matches what was first shared.

## Risk assessment

**Data exposure**

- Previews show more of the original post (formatted text, images, videos and attachments) inside the shared message, and follow edits to the original. Microsoft's notice does not say how a preview behaves for a recipient who cannot view the original post; confirm this with a test account before relying on a community's visibility settings.

**Security & identity**

- No change identified in the notice: it describes display and navigation changes, and no new sign-in, role or permission.

**Autonomy & actions**

- No change: the notice describes the user reacting, replying and sharing from the dialog, which users already do in the feed; nothing runs on a user's behalf.

**Change & support**

- Users may notice previews changing after an edit, and a dialog opening instead of leaving the feed. Update help-desk guidance and training material, as the notice recommends.
- Viva Engage users are subject to A/B feature testing or flighting, so two users in the same network may see the change at different times.

## Cost and licensing

Microsoft's notice and the roadmap item name no licence, meter or charge for this change. The Viva Engage service description on Microsoft Learn lists Viva Engage feeds as available in Small Business, Enterprise and Education plans, and this change alters how shared messages appear in the feed experience. A price or licence specific to the shared message experience is not yet published.

The indirect cost is admin and adoption time: informing users and refreshing training or support material that shows shared messages.

## Scope

The notice says users who view and interact with shared messages in Viva Engage are affected, and that the conversation dialog is available on web surfaces. The roadmap item lists Desktop and Web platforms and the Worldwide (Standard Multi-Tenant) cloud only.

The notice gives General Availability rollout in Worldwide from mid-November 2026, expected to complete by late November 2026. Microsoft's Viva Engage service description says Viva Engage users are subject to A/B testing or flighting, that users in the same network may have varying experiences because of it, and that customers cannot opt out of that testing. No prerequisites or admin roles are named in the notice.

## Governance guidance

### Before rollout

- Read MC1539003 in the Microsoft 365 admin center Message center and share its summary with Viva Engage community owners and your help desk.
- Identify training, intranet and support pages that show how a shared message looks in Viva Engage, and mark them for update.
- Prepare a short note telling users that shared messages will show more of the original post and that **View full conversation** opens a dialog on the web.

### At rollout

- Send the user note during the rollout window the notice gives (mid-November to late November 2026).
- Share a message from a test account and view it from a second account in Viva Engage on the web, to see the preview and the conversation dialog.
- Test a share of a post from a community the second account cannot access, and record what the preview shows, because the notice does not say.

### After rollout

- Collect help-desk questions about previews and the dialog, and add answers to your support material.
- Check Message center and the roadmap item again for later changes to this item.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch for the improved shared message experience</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice names no admin control. Existing Engage conversation settings are not described as covering shared message previews.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant-level or per-user switch for the improved shared message experience at the time of writing (November 2026). The conversation settings page lists network settings such as File uploads, GIFs, URL metadata and Private messages, and none of them is described as governing shared message previews or the conversation dialog.

The Viva features list in feature access management names AI Summarization as the Viva Engage feature it manages, not this change. The legacy Viva Engage (Yammer) Core API page lists message operations and no operation for these display settings. The table therefore records the gap, and the practical controls are communication and testing.

## Open questions

- Does a shared message preview show content from the original post to a recipient who cannot open the original, for example one in a private community? Watch MC1539003 and the Viva Engage Learn pages.
- Will Microsoft document an admin or user setting for the shared message preview or the conversation dialog? None is documented at the time of writing.
- Does the dialog or the richer preview apply on mobile apps and in Viva Engage in Teams? The notice names web surfaces for the dialog and the roadmap lists Desktop and Web.
- Will edits and deletions to an original post update existing shared message previews, as the notice states for edits, and how do retention or eDiscovery holds treat the changed text?

<!-- rationale
risk: Low. Microsoft's notice describes a display change to messages users already share, with no new data source or action; it does not say how previews treat recipients who cannot view the original post.
cost: Low. The only cost the sources show is admin time to inform users and update training; no licence or meter specific to this change is published.
impact: Medium. Anyone who views shared messages in Viva Engage sees different previews and a new dialog, though the notice says sharing workflows stay as they are.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Nothing runs on a user's behalf in the improved shared message experience. | Found: Searched: Viva Engage shared messages conversation dialog automatic autonomous actions acting on behalf of users. Read MC1539003 and Learn search excerpts for Engage integrations and Cowork; none states this assurance for shared message previews. | Fix: Remove '; nothing runs on a user's behalf' from the Autonomy & actions bullet. The notice documents users reacting, replying and sharing, but does not establish the broader negative assurance.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; Why it matters; Risk assessment: Change & support / record: Microsoft recommends informing users, summarised as asking administrators only to tell users. | Found: We recommend informing users about the improved shared message experience and updating any existing training or support materials that demonstrate how shared messages appear in Viva Engage. | Fix: Replace the summary's final sentence with 'Users get it automatically; Microsoft recommends informing users and updating training or support materials.' The notice recommends both actions rather than asking administrators only to tell users.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Reacting and replying to posts are capabilities users already have in Viva Engage feeds. | Found: This setting controls who has a storyline feed on their user profile and who can create new storyline posts. It doesn't restrict who can view, react, or reply to storyline posts made by others. | Fix: Add https://learn.microsoft.com/viva/engage/eac-storyline to sources for the existing feed reaction and reply capabilities. | Source: https://learn.microsoft.com/viva/engage/eac-storyline#advanced-settings
-->
