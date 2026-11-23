---
title: "Viva Engage: My Team audiences and flexible targeting for Storyline Announcements"
slug: "viva-engage-my-team-audiences-and-flexible-targeting-for-leader-communications"
roadmapId: 499895
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Leaders and delegates will be able to pick My Team, a saved audience or a custom one when they post a Storyline Announcement. Targeted for January CY2027; Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "MC1183013 says a premium licence available through Viva or Communications and Communities (C&C) is required; the Microsoft Support page says the Viva Suite licence. No separate price for flexible targeting is documented; the prerequisite premium plans have published per-user prices at https://www.microsoft.com/microsoft-viva/pricing. Confirm the applicable plan and agreement price."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["viva-engage","delegation","entra-id","governance","licensing","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 499895"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499895"
    kind: "roadmap"
  - title: "Microsoft Viva plans and pricing"
    url: "https://www.microsoft.com/microsoft-viva/pricing"
    kind: "docs"
  - title: "Storyline announcements in Viva Engage"
    url: "https://support.microsoft.com/topic/8db19630-ecd0-4d1e-b735-437aea62e248"
    kind: "docs"
  - title: "The role of leaders"
    url: "https://learn.microsoft.com/viva/engage/leadership-identification"
    kind: "learn"
  - title: "Manage and set up storyline in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-storyline"
    kind: "learn"
  - title: "MC1183013: (Updated) Microsoft Viva Engage: Flexible targeting of Storyline Announcements"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1183013"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Which leaders exist and which audiences each can reach"
    scope: "user"
    ui:
      surface: "Viva Engage admin center"
      path: "Feature management > Leadership identification and audiences > Manage leaders > leader (pencil icon) > Manage audiences > Add new audience"
      docs: "https://learn.microsoft.com/viva/engage/leadership-identification"
    api: null
    note: "Existing control for pre-configured audiences. Microsoft has not said it governs My Team or publish-time targeting. Only admin roles can enable Entire organization."
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
    note: "Limits who has a storyline and can create storyline posts. It controls who can create storyline posts, rather than providing a separate audience-targeting setting."
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
updated: "2026-11-23"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, using roadmap record 499895 and Message Center post MC1183013 (updated 2 November 2026)."
  - date: "2026-11-16"
    note: "Added Microsoft Support's Public Preview documentation of My Team and flexible targeting, reconciled the licence wording (Viva Suite versus Viva or C&C) and added the recipient notification licence requirement."
  - date: "2026-11-16"
    note: "Corrected the cost rating to medium and replaced the claim that no price is published with the published per-user Viva plan pricing page."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: Why it matters now points to the existing storyline creator restriction, the first control path ends at Add new audience, and the organisational-data checklist bullet is removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the claim about controls: the storyline creator setting does restrict who can post, and the gap is a separate control for My Team or publish-time targeting."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 77 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-23"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 77
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f5d14e4cec46c4ef0a1a17961e25eaff"
---

## What's changing

Microsoft plans to let leaders and their delegates choose who receives a Storyline Announcement at the time they post it, instead of relying only on the pre-configured Leader Audiences set up in the Viva Engage admin center. The roadmap item describes the choices as organisational attributes (department, job title, country), existing groups (Microsoft 365 groups, distribution lists, security groups) and individual users by name, and says audiences can be saved for reuse.

Microsoft's notice MC1183013 adds **My Team**, an audience kept up to date from the reporting structure that covers people who report up to the leader, directly or indirectly. Microsoft Support documents My Team and flexible targeting as Public Preview on its Storyline announcements page, so the behaviour may change before general availability. It says leaders and delegates can use My Team as it is, review its membership, or customise and save it as a reusable audience, and that attribute-based audiences are built with dynamic filters that show an audience size and a user preview before posting. Notification channels and settings stay consistent with existing Storyline Announcements. Microsoft Learn's pages on leaders and storyline do not yet describe My Team or publish-time targeting.

The roadmap shows status In development, target January CY2027, platforms Desktop and Web, Worldwide (Standard Multi-Tenant) only, with no preview date. The notice, updated 2 November 2026, gives General Availability as beginning mid-January 2027 (previously early November 2026) and completing by late February 2027 (previously late November 2026). It also describes a Public Preview that began mid-November 2025 and completes by mid-March 2026 (previously early February). The notice sets no act-by date and says no admin action is required for rollout.

## Why it matters

Today the audiences a leader can reach are shaped by the Manage audiences page in the Viva Engage admin center. Publish-time targeting moves part of that decision to the leader, so the quality of your people data and your leader and delegate assignments start to decide who gets an announcement. Microsoft Support says the availability and accuracy of organisational attributes depend on the data maintained in your network, and the notice asks administrators to check attributes in Microsoft Entra ID or Organizational Data in Microsoft.

If nobody acts, the feature still arrives as planned. The likely result is announcements that miss or reach the wrong group because a manager, department or country value is stale, and questions about why someone received, or did not receive, a leadership message. Microsoft documents no targeting-specific tenant switch; review leader and delegate assignments alongside the existing storyline creator restriction.

## Risk assessment

**Data exposure**

- A leader or delegate can address an announcement to people chosen by attribute, group or name. Recipients are only as correct as the underlying user-profile and reporting-structure data, so a wrong manager or department value can send a message to the wrong people. My Team depends on the reporting structure in the same way.
- Saved audiences are reusable, so a poorly built one can keep mis-targeting later announcements. Microsoft documents no administrator view of saved audiences at the time of writing (November 2026).

**Security & identity**

- For pre-configured audiences, Learn says only Engage admins, Viva Engage verified admins, Viva Engage network admins and corporate communicators can allow a leader to reach the **Entire organization**. Microsoft has not said whether publish-time targeting respects that limit, so broad attribute or group selections might approximate an organisation-wide post. This is an open question.
- Delegate managers can already configure a leader's audiences and assign further delegates, so who holds that role matters more once the same people can also target at publish time.

**Autonomy & actions**

- No change to autonomy: a person writes and sends each announcement. Neither the roadmap nor the notice describes automated sending.

**Change & support**

- Microsoft has moved the General Availability start from early November 2026 to mid-January 2027, so plan against the notice rather than the earlier date.
- Learn documents a 30-day activity log on the Manage leaders page for changes to leaders and their audiences. It does not say that audiences chosen at publish time appear there.

## Cost and licensing

The licence is described differently on different Microsoft pages. Notice MC1183013 says the feature "requires a premium license available through Viva or Communications and Communities (C&C)" and that availability may vary with your Microsoft 365 licensing agreement. The Microsoft Support page on Storyline announcements says "This capability requires the Viva Suite license." The Learn page on the role of leaders says identified leaders with a licence to the Viva Engage Communities and Communications service plan have access to storyline announcements, leadership corner, campaigns and AMAs (Asks Me Anything sessions). Confirm the applicable entitlement against your agreement.

On recipients, Microsoft Support says people need a licence to the Viva Engage Communities and Communications service plan to receive announcement notifications through Outlook and Microsoft Teams. That is a requirement for those notification channels, not a statement that viewing an announcement needs the premium licence.

No separate price, credit rate or meter for flexible targeting is documented at the time of writing (November 2026); the prerequisite premium plans have published per-user prices at https://www.microsoft.com/microsoft-viva/pricing. Confirm the applicable plan and agreement price. The indirect cost is admin and communications time: checking people data and briefing leaders and delegates.

## Scope

- **Who uses it:** leaders, their delegates, delegate managers and corporate communicators posting Storyline Announcements. Microsoft Support says users identified as leaders with a configured audience can post announcements.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant), Desktop and Web. Other clouds are not listed on the roadmap item.
- **Prerequisites:** leaders must already be identified in the Viva Engage admin center; Learn says leader identification and audience management are required for storyline announcements to work.
- **Existing limit:** Learn states that a leader can add up to 40 audiences. Whether that limit applies to saved audiences in the new experience is not yet documented.
- **Rollout:** the notice says no admin action is required and that leaders need no advance audience setup. Release dates are in What's changing.

## Governance guidance

### Before rollout

- Review the **Manage leaders** list in the Viva Engage admin center and remove leaders who no longer need storyline announcements.
- Review who holds delegate or delegate manager rights for each leader, because delegate managers can configure a leader's audiences.
- Tell leaders and delegates that recipients can be chosen at publish time and that notification channels do not change.

### At rollout

- Pilot with one leader whose reporting line you have checked and compare the My Team membership with the real team before wider use.
- Check that **Entire organization** is enabled only for the leaders who should have it, and test whether a broad attribute selection reaches more people than intended.

### After rollout

- Watch the activity log on the **Manage leaders** page for leader and audience changes; it covers the last 30 days.
- Trace help-desk reports of misdirected or missed announcements to attribute or delegate errors.
- Watch Message center and the Learn page on the role of leaders for documentation of My Team and any admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which leaders exist and which audiences each can reach</strong><br><small>User</small><br><small class="controls__note">Existing control for pre-configured audiences. Microsoft has not said it governs My Team or publish-time targeting. Only admin roles can enable Entire organization.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Feature management › Leadership identification and audiences › Manage leaders › leader (pencil icon) › Manage audiences › Add new audience <a href="https://learn.microsoft.com/viva/engage/leadership-identification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can act for a leader and configure the leader's audiences</strong><br><small>User</small><br><small class="controls__note">Set by the leader in the Engage app in Teams. Delegate managers can configure the leader's audiences.</small></td><td data-label="Admin UI"><strong>Viva Engage (leader)</strong><br>ellipsis (...) menu next to your profile picture › Delegate management <a href="https://learn.microsoft.com/viva/engage/leadership-identification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can post to a storyline</strong><br><small>Tenant</small><br><small class="controls__note">Limits who has a storyline and can create storyline posts. It controls who can create storyline posts, rather than providing a separate audience-targeting setting.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Feature management › Storyline › Advanced Settings › Edit › Specify storyline creators <a href="https://learn.microsoft.com/viva/engage/eac-storyline" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Review of changes to leaders and their audiences</strong><br><small>Tenant</small><br><small class="controls__note">Covers the past 30 days. Not documented to include audiences chosen at publish time.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Feature management › Leadership identification and audiences › Manage leaders › activity log <a href="https://learn.microsoft.com/viva/engage/leadership-identification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for My Team and publish-time targeting</strong><br><small>Tenant</small><br><small class="controls__note">No such control is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The controls that exist today govern leaders, delegates and storyline in general. Microsoft has not documented a separate control for My Team or publish-time audience selection, and the last row states that gap. A search of Microsoft Learn for a PowerShell, Graph or other API for leader audiences returned nothing at the time of writing (November 2026), so the API side of each row is not documented.

Roles that can edit leader audiences are listed on the Learn page: Engage admin, verified admin, network admin, corporate communicator, and the leader or the leader's delegate managers. Only the first four can enable **Entire organization**. Storyline settings are managed by Engage administrators.

## Open questions

- Does publish-time targeting respect the **Entire organization** limit that only admins can enable for pre-configured audiences? Watch the Learn page on the role of leaders.
- Is there an admin setting to turn off My Team or custom audiences, or to limit them to chosen leaders? None is documented at the time of writing (November 2026); watch Message center.
- Which licence does the feature need: the Viva Suite licence named on the Support page, or the Viva or Communications and Communities (C&C) licence named in MC1183013? Watch the Viva Engage licensing pages.
- Will audiences chosen at publish time, and saved custom audiences, appear in the Manage leaders activity log or any audit record?
- Does the 40-audience limit apply to saved audiences, and can administrators list or remove them?

<!-- rationale
risk: Medium. Leaders and delegates choose recipients at the moment of posting, using people data you maintain, and Microsoft documents no tenant switch for the new targeting at the time of writing (November 2026).
cost: Medium. Leaders need premium Viva licensing, and recipients need the Communities and Communications service plan for Outlook and Teams notifications; confirm existing entitlements before rollout.
impact: Medium. Leaders, their delegates and the people they message notice it; other users see no change to how announcements are delivered.
-->
