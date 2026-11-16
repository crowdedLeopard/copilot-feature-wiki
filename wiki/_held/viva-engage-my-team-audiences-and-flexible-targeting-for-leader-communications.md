---
title: "Viva Engage: My Team audiences and flexible targeting for Storyline Announcements"
slug: "viva-engage-my-team-audiences-and-flexible-targeting-for-leader-communications"
roadmapId: 499895
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Leaders and delegates will be able to pick My Team, a saved audience or a custom one when they post a Storyline Announcement. Targeted for January 2027; Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1183013 says the feature requires a premium licence available through Viva or Communications and Communities (C&C), and that availability may vary by agreement. No price is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["viva-engage","delegation","entra-id","governance","licensing","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 499895"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499895"
    kind: "roadmap"
  - title: "MC1183013: (Updated) Microsoft Viva Engage: Flexible targeting of Storyline Announcements"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1183013"
    kind: "message-center"
  - title: "The role of leaders"
    url: "https://learn.microsoft.com/viva/engage/leadership-identification"
    kind: "learn"
  - title: "Manage and set up storyline in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-storyline"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which leaders exist and which audiences each can reach"
    scope: "user"
    ui:
      surface: "Viva Engage admin center"
      path: "Feature management > Leadership identification and audiences > Manage leaders > leader (pencil icon) > Manage audiences"
      docs: "https://learn.microsoft.com/viva/engage/leadership-identification"
    api: null
    note: "Existing control for pre-configured audiences. Microsoft has not said it governs My Team or publish-time targeting. Roles: Engage admin, verified admin, network admin, corporate communicator."
  - governs: "Who can act for a leader and configure the leader's audiences"
    scope: "user"
    ui:
      surface: "Viva Engage (leader)"
      path: "ellipsis (...) menu next to your profile picture > Delegate management"
      docs: "https://learn.microsoft.com/viva/engage/leadership-identification"
    api: null
    note: "Set by the leader in the Engage app in Teams. Delegate managers can configure the leader's audiences."
  - governs: "Who can post to a storyline"
    scope: "tenant"
    ui:
      surface: "Viva Engage admin center"
      path: "Feature management > Storyline > Advanced Settings > Edit > Specify storyline creators"
      docs: "https://learn.microsoft.com/viva/engage/eac-storyline"
    api: null
    note: "Limits who has a storyline and can post to it. Microsoft has not confirmed it restricts announcement targeting."
  - governs: "Review of changes to leaders and their audiences"
    scope: "tenant"
    ui:
      surface: "Viva Engage admin center"
      path: "Feature management > Leadership identification and audiences > Manage leaders > activity log"
      docs: "https://learn.microsoft.com/viva/engage/leadership-identification"
    api: null
    note: "Covers the past 30 days. Not documented to include audiences chosen at publish time."
  - governs: "Tenant-wide switch for My Team and publish-time targeting"
    scope: "tenant"
    ui: null
    api: null
    note: "No such control is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, using roadmap record 499895 and Message Center post MC1183013 (updated 2 November 2026)."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 69
  unconfirmed: 0
  contradicted: 1
  attempts: 1
---

## What's changing

Microsoft plans to let leaders and their delegates choose who receives a Storyline Announcement at the time they post it, instead of relying only on the pre-configured Leader Audiences an administrator or delegate manager sets up. The roadmap item describes the choices as organisational attributes (department, job title, country), existing groups (Microsoft 365 groups, distribution lists, security groups) and individual users by name, and says audiences can be saved for reuse.

Microsoft's notice MC1183013 adds **My Team**: a ready-made audience that is kept up to date from the organisational hierarchy and covers the people who report up to the leader, directly or indirectly. According to the notice, leaders and delegates can use My Team as it is, review its membership, or customise and save it as a reusable audience. The notice also says My Team is meant to feed Storyline Announcements, audience analytics, Leadership Corner and feed and digest distribution. Recipients keep the existing Teams, email and Viva Engage Inbox notifications.

Microsoft Learn does not yet describe My Team or the publish-time targeting, so the behaviour above is Microsoft's description in the roadmap item and the notice, not a documented design. The roadmap shows status In development, target January CY2027, platforms Desktop and Web, Worldwide (Standard Multi-Tenant) only, with no preview date. The notice, updated 2 November 2026, gives General Availability as beginning mid-January 2027 (previously early November 2026) and completing by late February 2027 (previously late November 2026). It also describes a Public Preview that began mid-November 2025 and completes by mid-March 2026, and says options may change before general availability. The notice sets no act-by date.

## Why it matters

Today the audiences a leader can reach are shaped by the admin-side Leader Audiences page. Publish-time targeting moves part of that decision to the leader, so the quality of your people data and your leader and delegate assignments start to decide who gets an announcement. The notice itself asks administrators to check organisational attributes in Microsoft Entra ID or Organizational Data in Microsoft, and to confirm leader and delegate assignments.

If nobody acts, the feature still arrives as planned. The likely result is announcements that reach the wrong group because a manager, department or country attribute is stale, and help-desk questions about why someone received, or missed, a leadership message. Because Learn documents no tenant switch for the new targeting, the controls you have are the ones that decide who is a leader and who is a delegate.

## Risk assessment

**Data exposure**

- A leader or delegate can address an announcement to people chosen by attribute, group or name. Recipients are only as correct as the underlying Entra ID or Organizational Data values, so a wrong manager or department attribute can send a message to the wrong people. My Team depends on the reporting hierarchy in the same way.
- Saved custom audiences are reusable, so a poorly built audience can keep mis-targeting later announcements. How saved audiences are listed or reviewed by administrators is not yet documented.

**Security & identity**

- Learn documents that, for pre-configured audiences, only Engage admins, verified admins, network admins and corporate communicators can enable **Entire organization**. Microsoft has not said whether publish-time targeting respects that limit, so broad attribute or group selections might approximate an organisation-wide post. Treat this as an open question until Microsoft documents it.
- Delegate managers can already configure a leader's audiences and assign further delegates, so the people who hold that role matter more once they can also target at publish time.

**Autonomy & actions**

- No change to autonomy: a person writes and sends each announcement. The roadmap and notice describe no automated sending.

**Change & support**

- Microsoft has moved the General Availability start from early November 2026 to mid-January 2027, so plan against the notice rather than the earlier date.
- Learn documents an activity log on the Manage leaders page for changes to leaders and their audiences. It does not say that audiences chosen at publish time appear there.

## Cost and licensing

Microsoft's notice MC1183013 says the feature "requires a premium license available through Viva or Communications and Communities (C&C)" and that availability may vary with your Microsoft 365 licensing agreement. This is consistent with the Learn page on the role of leaders, which says identified leaders with a licence to the Viva Engage Communities and Communications service plan have access to storyline announcements, leadership corner, campaigns and AMAs.

No price, credit rate or separate meter for flexible targeting is published at the time of writing (November 2026). The indirect cost is admin and communications time: checking Entra ID or Organizational Data attributes and briefing leaders and delegates. Whether recipients of an announcement need any particular licence is not yet published.

## Scope

- **Who uses it:** leaders and their delegates posting Storyline Announcements. The notice says it affects tenants enrolled in public preview during that phase.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant), Desktop and Web. Other clouds are not listed on the roadmap item.
- **Prerequisites:** leaders must already be identified in the Viva Engage admin center. Learn says leader identification and audience management are required for storyline announcements to work.
- **Existing limits:** Learn states a leader can add up to 40 audiences for pre-configured audiences. Whether that limit applies to saved audiences in the new experience is not yet documented.
- **Rollout:** the notice says no admin action is required for rollout and that leaders need no advance audience setup. Release dates are in What's changing.

## Governance guidance

### Before rollout

- Check department, job title, country and manager values for leaders' organisations in Microsoft Entra ID or Organizational Data in Microsoft, as the notice advises; My Team and attribute targeting depend on them.
- Review the **Manage leaders** list in the Viva Engage admin center and remove leaders who no longer need storyline announcements. The Engage admin, verified admin, network admin and corporate communicators can edit it.
- Review who holds delegate or delegate manager rights for each leader, because delegate managers can configure a leader's audiences.
- Tell leaders and delegates that recipients are chosen at publish time and that delivery channels do not change.

### At rollout

- Pilot with one leader whose reporting line you have checked and compare My Team membership with the real team before wider use.
- Check that **Entire organization** is still enabled only for the leaders who should have it, and test whether a broad attribute selection reaches more people than intended.

### After rollout

- Watch the activity log on the **Manage leaders** page for leader and audience changes; it covers the last 30 days.
- Collect help-desk reports of misdirected or missed announcements and trace them to attribute or delegate errors.
- Watch Message center and the Learn page on the role of leaders for documentation of My Team and any admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which leaders exist and which audiences each can reach</strong><br><small>User</small><br><small class="controls__note">Existing control for pre-configured audiences. Microsoft has not said it governs My Team or publish-time targeting. Roles: Engage admin, verified admin, network admin, corporate communicator.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Feature management › Leadership identification and audiences › Manage leaders › leader (pencil icon) › Manage audiences <a href="https://learn.microsoft.com/viva/engage/leadership-identification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can act for a leader and configure the leader's audiences</strong><br><small>User</small><br><small class="controls__note">Set by the leader in the Engage app in Teams. Delegate managers can configure the leader's audiences.</small></td><td data-label="Admin UI"><strong>Viva Engage (leader)</strong><br>ellipsis (...) menu next to your profile picture › Delegate management <a href="https://learn.microsoft.com/viva/engage/leadership-identification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can post to a storyline</strong><br><small>Tenant</small><br><small class="controls__note">Limits who has a storyline and can post to it. Microsoft has not confirmed it restricts announcement targeting.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Feature management › Storyline › Advanced Settings › Edit › Specify storyline creators <a href="https://learn.microsoft.com/viva/engage/eac-storyline" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Review of changes to leaders and their audiences</strong><br><small>Tenant</small><br><small class="controls__note">Covers the past 30 days. Not documented to include audiences chosen at publish time.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Feature management › Leadership identification and audiences › Manage leaders › activity log <a href="https://learn.microsoft.com/viva/engage/leadership-identification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for My Team and publish-time targeting</strong><br><small>Tenant</small><br><small class="controls__note">No such control is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The controls that exist today govern leaders, delegates and storyline in general. Microsoft has not documented a control that switches off or restricts My Team or publish-time targeting, so the last row states that gap. Roles that can edit leader audiences are listed on the Learn page: Engage admin, verified admin, network admin, corporate communicator, and the leader's delegate managers. Storyline settings are managed by Engage administrators.

## Open questions

- Does publish-time targeting respect the **Entire organization** limit that only admins can enable for pre-configured audiences? Watch the Learn page on the role of leaders.
- Is there an admin setting to turn off My Team or custom audiences, or to limit them to chosen leaders? None is documented at the time of writing (November 2026).
- Which exact licence or service plan does the feature need, and does it differ from the Communications and Communities service plan already needed for storyline announcements? Watch Message center and Viva Engage licensing pages.
- Will audiences chosen at publish time, and saved custom audiences, appear in the Manage leaders activity log or any audit record?
- Does the 40-audience limit apply to saved audiences, and can administrators list or remove them?

<!-- rationale
risk: Medium. Leaders and delegates choose recipients at the moment of posting, without an administrator pre-configuring the audience, and Microsoft Learn documents no switch for the new targeting.
cost: Low. Microsoft's notice says a premium Viva or Communications and Communities (C&C) licence is required, and no separate meter or price is published; the visible cost is admin time to check people data.
impact: Medium. Leaders, their delegates and the people they message notice it; other users see no change to how announcements are delivered.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What's changing: documentation caveat / absence: Microsoft Learn does not yet describe My Team or publish-time targeting, so the briefing treats their behaviour as roadmap and notice descriptions rather than a documented design. | Found: Searched: Viva Engage My Team audiences; Viva Engage flexible targeting licensing. Opened leadership-identification and eac-storyline; no Learn feature guide found. Opened Microsoft Support's Storyline announcements in Viva Engage, which does document My Team and targeting as Public Preview. | Fix: Keep the narrow Learn gap if desired, but replace the implication that no feature guide exists with: 'Microsoft Support documents My Team and flexible targeting as Public Preview; behaviour may change before general availability.' Add https://support.microsoft.com/topic/8db19630-ecd0-4d1e-b735-437aea62e248 to sources. Searches for Viva Engage My Team audiences and flexible targeting returned surrounding Learn documentation, while this opened Support page describes the feature directly.
- [supported, minor] Cost and licensing: first paragraph / licensing: Learn says identified leaders licensed for the Viva Engage Communities and Communications service plan can use storyline announcements, leadership corner, campaigns and AMAs. | Found: Identified leaders with a license to the Viva Engage Communities and Communications service plan have access to storyline announcements, leadership corner, campaigns, and AMAs. | Fix: Retain the cited Learn statement, but acknowledge that https://support.microsoft.com/topic/8db19630-ecd0-4d1e-b735-437aea62e248 instead says 'This capability requires the Viva Suite license.' Cite that guide and explain that MC1183013 and Learn describe Viva/C&C eligibility while Support uses narrower Viva Suite wording; confirm the applicable entitlement against the tenant agreement. | Source: https://learn.microsoft.com/viva/engage/leadership-identification
- [contradicted, blocker] Cost and licensing: final sentence / absence: Whether announcement recipients need any particular licence is not yet published. | Found: To receive announcement notifications through Outlook and Microsoft Teams, you’ll need a license to the Viva Engage Communities and Communications service plan. | Fix: Replace the sentence with: 'Microsoft Support says recipients need the Viva Engage Communities and Communications service plan to receive announcement notifications through Outlook and Microsoft Teams. This is a notification-channel requirement, not a statement that all viewing requires that premium licence.' Cite https://support.microsoft.com/topic/8db19630-ecd0-4d1e-b735-437aea62e248. | Source: https://support.microsoft.com/topic/8db19630-ecd0-4d1e-b735-437aea62e248
-->
