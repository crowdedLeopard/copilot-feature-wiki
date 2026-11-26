---
title: "SharePoint: campaigns in SharePoint sites for organising, distributing and measuring news"
slug: "microsoft-viva-campaigns-in-sharepoint"
roadmapId: 568073
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "SharePoint sites gain lightweight campaigns that group news posts, publish them to SharePoint, Viva Engage, Teams and Outlook email, and show campaign analytics. The Viva Amplify campaign-creation setting does not govern them."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "MC1568699 states the feature is available to both seeded SharePoint users and premium users licensed for Viva Amplify, and that Viva Amplify's licence model does not change. The roadmap item says it applies only to Amplify users as of now."
audiences: ["service-owner","m365-admin","change-adoption"]
tags: ["sharepoint","sharepoint-news","viva-amplify","viva-engage","analytics","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 568073"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568073"
    kind: "roadmap"
  - title: "MC1568699: Campaigns in SharePoint"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1568699"
    kind: "message-center"
  - title: "Set up Microsoft Viva Amplify"
    url: "https://learn.microsoft.com/viva/amplify/set-up-viva-amplify"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
videos: []
related: ["sharepoint-cross-post-sharepoint-news-to-engage","viva-feature-access-management"]
controls:
  - governs: "Whether site campaigns are available in the tenant, and who can create them"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1568699 says the Viva Amplify Create campaign setting does not govern site campaigns."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-26"
    note: "New briefing: site campaigns in SharePoint, with Microsoft's rollout window and licensing statement from MC1568699."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 47 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 46
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "26e925b08fe20615b6769b6451b89236"
---

## What's changing

SharePoint sites get **campaigns in SharePoint** (site campaigns), which bring Viva Amplify's campaign management into a SharePoint site in a lighter-weight form. According to the roadmap item and Microsoft's notice MC1568699, users can group related SharePoint news posts into a campaign, publish those posts across SharePoint, Viva Engage, Teams and Outlook email, and view campaign analytics from within SharePoint.

Microsoft Learn does not describe site campaigns at the time of writing (November 2026), so what follows about their behaviour comes from the roadmap item and MC1568699. The notice describes site campaigns as complementary to Viva Amplify: Amplify users can carry on creating campaigns in the Amplify app, and the existing Amplify campaign experience does not change. It also states that the Amplify **Create campaign** admin setting applies only to campaigns created in the Amplify app and does not govern site campaigns.

The roadmap item is **Launched**, with a target of August CY2026, for General Availability and Targeted Release on the web, in the Worldwide (Standard Multi-Tenant) cloud. MC1568699 (published 25 November 2026) gives Targeted Release as late July to August 2026, Standard Release as August to September 2026, and general availability rolling out from mid August 2026 with completion expected by the end of November 2026. The notice sets no act-by date.

## Why it matters

An organisation that limits Viva Amplify campaign creation to a communications team should not assume that restriction reaches site campaigns: Microsoft says the Amplify setting does not govern them, and has not stated who can create a site campaign. Plan on news publishers being able to organise posts into campaigns and send them to Engage, Teams and Outlook email once the experience reaches them.

The feature does not act on its own: a person has to create a campaign and publish. MC1568699 asks admins only to review internal guidance and tell communicators about the feature. The practical work is deciding which sites are expected to run campaigns, and making sure news owners know the difference between an Amplify app campaign and a site campaign.

## Risk assessment

**Data exposure**
- Site campaigns publish SharePoint news posts to Viva Engage, Teams and Outlook email (MC1568699). Microsoft has not documented how site campaigns apply audience targeting or site permissions in those channels.
- Campaign analytics appear inside SharePoint. Microsoft has not described what the analytics show or at what level of detail.

**Security & identity**
- The notice describes no new identity, sign-in or permission model. Which site permission is needed to create a site campaign is not stated.

**Autonomy & actions**
- No autonomous behaviour is described: campaigns are created and published by people.

**Change & support**
- Two campaign types now exist. The Viva Amplify **Create campaign** setting governs only Amplify app campaigns (MC1568699), so restrictions set there do not carry over, and help desk staff need to know which is which.
- The roadmap item says the feature applies only to Amplify users, while MC1568699 says it is also available to seeded SharePoint users. Expect questions from users who see the experience without an Amplify licence.

## Cost and licensing

- **Licence.** MC1568699 states that the feature is available to both seeded SharePoint users and premium users licensed for Viva Amplify, and that there are no changes to Viva Amplify's licence model. The roadmap item says the feature applies only to Amplify users as of now. The two Microsoft statements differ; the notice is the later one.
- **Viva Amplify licence, for reference.** The [Viva Amplify set-up page](https://learn.microsoft.com/viva/amplify/set-up-viva-amplify) lists the products whose licensed users get the Viva Amplify service plans, including Microsoft Viva and Microsoft Viva Employee Communities & Communications. It does not mention site campaigns.
- **Meter.** Neither the roadmap item nor the notice describes a meter or usage charge for site campaigns.
- **Indirect cost.** Admin and communications time to update internal guidance and brief news publishers, as the notice recommends.
- **Not yet published.** Which SharePoint licences count as "seeded SharePoint users" for this feature.

## Scope

- **Users:** SharePoint and Viva Amplify users, corporate communications teams and anyone who publishes and manages SharePoint news (MC1568699). See Cost and licensing for the difference between the roadmap item and the notice on who is entitled.
- **Services:** SharePoint Online and Viva Amplify; publishing reaches Viva Engage, Teams and Outlook email.
- **Cloud:** Worldwide (Standard Multi-Tenant), as listed on the roadmap item.
- **Platform:** Web.
- **Rollout:** Targeted Release then General Availability, completing by the end of November 2026 according to MC1568699.
- **Roles:** Microsoft has not stated which site role or permission is needed to create a site campaign.

## Governance guidance

### Before rollout
- Identify which SharePoint sites (organisation news sites, home sites, departmental communication sites) are expected to run campaigns, and who owns news on each.
- Tell corporate communications that the Viva Amplify **Create campaign** setting does not apply to site campaigns, so any restriction it enforces today does not cover them.
- Update internal publishing guidance to explain when to use an Amplify app campaign and when to use a site campaign.

### At rollout
- Communicate the availability of site campaigns to SharePoint news publishers, Viva Amplify users and corporate communications teams, as MC1568699 recommends.
- Brief the help desk that users without a Viva Amplify licence may see site campaigns, because the notice says seeded SharePoint users have the feature.

### After rollout
- Review with site owners which sites have created campaigns and whether publishing to Viva Engage, Teams and Outlook email matches your communications policy.
- Watch Message center and the Viva Amplify documentation for an admin setting or documentation page for site campaigns.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether site campaigns are available in the tenant, and who can create them</strong><br><small>Tenant</small><br><small class="controls__note">MC1568699 says the Viva Amplify Create campaign setting does not govern site campaigns.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting, feature access policy or PowerShell parameter that turns site campaigns on or off, or limits who can create them, at the time of writing (November 2026). Viva Feature Access Management, which switches individual Viva features through `Add-VivaModuleFeaturePolicy`, lists module IDs for Engage, Glint, Insights, Pulse and People Skills, and none for Viva Amplify.

The Viva Amplify **Manage campaign settings** control in the Microsoft 365 admin center restricts who can create campaigns with Amplify. MC1568699 states that this setting applies only to campaigns created in the Amplify app and does not govern SharePoint site campaigns, so it is not listed as a control for this feature.

## Open questions

- Which site permission or role does a user need to create a site campaign, and can a site owner or SharePoint admin restrict it? Watch the Viva Amplify and SharePoint documentation on Microsoft Learn.
- Does the feature apply only to Viva Amplify licensees, as the roadmap item says, or also to seeded SharePoint users, as MC1568699 says, and which SharePoint licences count as seeded?
- Will Microsoft add a tenant-level or Viva Feature Access Management control for site campaigns? Watch Message center.
- What do site campaign analytics show, and are they at individual or aggregate level?
- Are site campaign creation and publishing recorded in the unified audit log, and under which activities?

<!-- rationale
risk: Medium. Site campaigns publish news across SharePoint, Viva Engage, Teams and Outlook email, and Microsoft says the Viva Amplify campaign-creation setting does not apply to them; Microsoft Learn documents no separate control.
cost: Low. Microsoft's notice MC1568699 says the feature is available to seeded SharePoint users as well as Viva Amplify licensees, with no change to Amplify's licence model; the known cost is updating guidance and communicating the change.
impact: Medium. Corporate communications teams and people who publish SharePoint news get a new way to organise and distribute posts; other users see the resulting news in channels they already use.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: The feature does not act on its own: a person has to create a campaign and publish. | Found: Searched: '"site campaigns" "SharePoint"'; '"campaigns in SharePoint" permissions analytics audience targeting licensing seeded'. Read MC1568699 and Amplify setup; they describe user capabilities but do not state that every action requires a person or exclude autonomous behaviour categorically. | Fix: Replace 'The feature does not act on its own: a person has to create a campaign and publish.' with 'MC1568699 describes users creating site campaigns and publishing news posts; it describes no autonomous behaviour.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope: Rollout / record: Rollout completion is expected by the end of November 2026, shortened to 'completing' in Scope. | Found: expect to complete by end of November 2026. | Fix: In Scope, replace 'completing by the end of November 2026 according to MC1568699' with 'with completion expected by the end of November 2026 according to MC1568699'.
-->
