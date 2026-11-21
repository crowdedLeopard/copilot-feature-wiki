---
title: "SharePoint News: cross-post published news posts to Viva Engage communities and storylines"
slug: "sharepoint-cross-post-sharepoint-news-to-engage"
roadmapId: 568074
topic: "modern-work"
products: ["SharePoint","Microsoft Viva"]
summary: "Publishers can distribute a published SharePoint news post to a Viva Engage community or storyline, with comments shared across both. Launched; Learn documents no tenant on/off switch."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The cross-post page says the feature is available to all users with a Microsoft 365 license. The Engage setup page lists delegation and storyline announcements among Viva Engage premium experiences, and says that if Viva Engage licensing is enforced, each user needs a Microsoft 365 license and a Viva Engage Core Service Plan."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","sharepoint-news","viva-engage","teams","outlook"]
sources:
  - title: "Cross-post SharePoint News to Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/cross-post-sharepoint-news-viva-engage"
    kind: "learn"
  - title: "Manage and set up storyline in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-storyline"
    kind: "learn"
  - title: "Manage administrator roles in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions"
    kind: "learn"
  - title: "Viva Engage setup requirements"
    url: "https://learn.microsoft.com/viva/engage/setup"
    kind: "learn"
  - title: "MC1466762: (Updated) Cross-post SharePoint News to Engage"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1466762"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap 568074"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568074"
    kind: "roadmap"
videos: []
related: ["viva-engage-my-team-audiences-and-flexible-targeting-for-leader-communications","microsoft-viva-engage-community-feed-improvements"]
controls:
  - governs: "Who can create storyline posts in Viva Engage"
    scope: "tenant"
    ui:
      surface: "Engage admin center"
      path: "Feature management > Storyline > Advanced Settings > Edit > Specify storyline creators"
      docs: "https://learn.microsoft.com/viva/engage/eac-storyline"
    api: null
    note: "This setting controls who has a storyline feed on their user profile and who can create new storyline posts; it does not restrict viewing, reacting or replying. Network administrators manage storylines for the tenant."
  - governs: "Tenant-wide switch for SharePoint News to Engage cross-posting"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-19T21:32:07"
changes:
  - date: "2026-11-21"
    note: "First briefing: launched feature, Microsoft's notice MC1466762 rollout window of late September to late October 2026, and the Learn page on cross-posting."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the Specify storyline creators path to include Edit, replaced the storyline-creator caveat with the page's description, added the Engage Core Service Plan licensing qualification, and trimmed checklist steps that have no controls-table row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 75 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 75
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "261c625533a14497c6ac3fd0e0c28099"
---

## What's changing

SharePoint News publishers can distribute a published news post to a Viva Engage community or storyline. Microsoft Learn describes the steps: the publisher opens the published news post, selects **Amplify** or **Promote** on the command bar, selects the **Engage** card, confirms **Post as** and **Post to**, and selects **Distribute**. Which label appears depends on the publisher's assigned licence.

The post then appears in Engage feeds as a SharePoint news post with the SharePoint layout, and readers can select **View full news** to open the whole post without leaving Engage. Learn says comments and reactions are synchronised across SharePoint and Engage, so a person can join the same discussion from either product. The roadmap description adds that the SharePoint News comments module is replaced by the Engage conversation module, and that the post appears across Engage feeds, digests, Outlook, Teams, and desktop, web and mobile apps.

The roadmap record gives the status as Launched, with a target of September CY2026, General Availability, Worldwide (Standard Multi-Tenant) as the only cloud listed, and Android, Desktop, iOS, Mac and Web as platforms. Microsoft's notice MC1466762 (published 3 September 2026, updated 8 September 2026) said rollout would begin in late September 2026 and finish by late October 2026. It sets no act-by date and says admins may want to tell users about the change or refresh training on distributing content from SharePoint to Engage.

## Why it matters

This gives communicators a second distribution route for news, and it moves part of the conversation out of SharePoint. A cross-posted news post is reachable from wherever the chosen community or storyline appears, and discussion on it is shared with Engage. Nothing is distributed until a publisher chooses Engage after publishing a news post, so the change is one of reach and ownership rather than something that arrives on every post.

The wiki's view is that the main questions for a service owner are who may publish into which Engage destinations and who may later change a cross-post. Learn ties destination access to the publisher's Engage permissions and ties site access to create or edit rights, and it documents no tenant-wide switch for the feature. Plan communication and permissions rather than a block.

## Risk assessment

**Data exposure**
- A cross-post carries a SharePoint news post and its discussion into Engage feeds and the Engage integrations in Teams and Outlook, where Learn says users can see the content and receive notifications. The audience is set by the community or storyline chosen as the destination.
- Storyline content is visible to any internal user who has access to Viva Engage, according to the storyline page, so choose storyline destinations with that audience in mind. Guests cannot see storyline content.

**Security & identity**
- A publisher can post as themselves or on behalf of a person for whom they are an Engage delegate, so a cross-post can carry another person's name. Review who holds delegate rights before publishers start using the feature.
- Learn limits cross-posting to destinations where the publisher has permission to publish, and requires create or edit permissions on the SharePoint site.

**Autonomy & actions**
- Learn describes cross-posting as an action that starts in SharePoint after the news post is published, when the publisher chooses Engage. It describes the publisher confirming the identity and destination before distributing.

**Change & support**
- Learn says cross-posting fails if **Require Check Out** is turned on for the site; the error message links to the library's **Versioning settings**, where a site owner can turn it off.
- A news post cross-posted to a community can be edited, republished and deleted by other site members. For a storyline, only the storyline owner, their delegates and Engage network admins can republish or delete it, while other site members can still edit it and save it as a draft.
- Expect support questions about the **Amplify** or **Promote** label, which Learn says varies by assigned licence, and about where comments now live.

## Cost and licensing

The cross-post page states that the feature is available to all users with a Microsoft 365 license. Its Licensing and access section names no other licence and no meter for cross-posting itself. The Engage setup page also says that, if Viva Engage licensing is enforced, each user needs a Microsoft 365 license and a Viva Engage Core Service Plan.

Three options in the flow depend on Engage permissions. Posting as another person requires the publisher to be an Engage delegate for that person, and sending an announcement requires the applicable Engage role. The Engage setup page lists delegation and storyline announcements among the premium Viva Engage experiences, which come with Microsoft Viva Suite or Microsoft Viva Employee Communications and Communities. The cross-post page does not say whether those two options need a premium licence when used from SharePoint.

The other cost shown is people's time: Microsoft's notice MC1466762 suggests telling users about the change and refreshing training on distributing content from SharePoint to Engage.

## Scope

**Who can use it.** Learn says the feature is available to all users with a Microsoft 365 license. A publisher needs create or edit permissions on the SharePoint site and permission to publish in the Engage community or storyline they choose.

**Rollout.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the platforms Android, Desktop, iOS, Mac and Web. Microsoft's notice MC1466762 gave a rollout window of late September to late October 2026.

**Prerequisites and limits.** Cross-posting fails if **Require Check Out** is on for the site. Storylines are supported only in Viva Engage networks that enforce Microsoft 365 identity; the storyline page says storyline is not available to a Viva Engage Basic network or one that does not enforce that identity. Engage roles that manage storylines are listed on the Engage roles page.

## Governance guidance

### Before rollout
- Check whether your Engage administrators restrict who can create storyline posts (Engage admin center, row 1 of the controls table). Learn describes that setting as controlling who has a storyline feed on their user profile and who can create new storyline posts.

### At rollout
- Send publishers the documented steps: publish the news post, select **Amplify** or **Promote**, select the **Engage** card, set **Post as** and **Post to**, select **Distribute**, and keep the window open until the success screen appears.
- Tell community admins that other site members can edit, republish and delete a post cross-posted to their community.
- Brief the help desk on the **Amplify** or **Promote** label difference and on the shared comment thread.

### After rollout
- Recheck the selected group if you use **Specify storyline creators**; the storyline page says Engage checks group membership daily and changes can take up to 24 hours to apply.
- Watch Message center and the Learn page for a tenant-level switch or a licence statement for delegation and announcements.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can create storyline posts in Viva Engage</strong><br><small>Tenant</small><br><small class="controls__note">This setting controls who has a storyline feed on their user profile and who can create new storyline posts; it does not restrict viewing, reacting or replying. Network administrators manage storylines for the tenant.</small></td><td data-label="Admin UI"><strong>Engage admin center</strong><br>Feature management › Storyline › Advanced Settings › Edit › Specify storyline creators <a href="https://learn.microsoft.com/viva/engage/eac-storyline" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for SharePoint News to Engage cross-posting</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row is an existing Engage setting that limits who can create storyline posts, which Learn describes separately from cross-posting. The Engage roles page lists the Network Administrator role as able to manage storylines for the tenant. The second row states a gap: Learn documents no tenant-wide on/off setting for this feature, so access follows the publisher's SharePoint site permissions and Engage permissions as the cross-post page describes them.

## Open questions

- Is a tenant-level switch for SharePoint News to Engage cross-posting planned? Watch Message center and the cross-post page.
- Do posting as a delegate and sending an announcement from SharePoint need a Viva Engage premium licence? Watch the cross-post and Engage setup pages.
- Do people who can read a cross-post in Engage but lack access to the SharePoint site get the full news post? Watch the cross-post page.
- What happens to comments already on a news post when it is cross-posted? Watch the cross-post page.

<!-- rationale
risk: Medium. A cross-post puts SharePoint news and its discussion into Engage feeds, Teams and Outlook, and Learn documents no tenant switch; Engage and site permissions decide who can distribute.
cost: Low. Learn says the feature is available to all users with a Microsoft 365 license; the cost shown is communication and training time. Delegation and announcements are Engage options whose licence the cross-post page does not state.
impact: Medium. News publishers and Engage community or storyline owners see the new workflow, and readers in Engage, Teams and Outlook see cross-posted news; the roadmap says SharePoint's comments module is replaced by Engage's.
-->
