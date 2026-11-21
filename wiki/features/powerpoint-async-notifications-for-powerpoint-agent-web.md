---
title: "PowerPoint on the web: Copilot agent notifies you when work is complete or needs attention"
slug: "powerpoint-async-notifications-for-powerpoint-agent-web"
roadmapId: 570438
topic: "modern-work"
products: ["PowerPoint"]
summary: "Planned notifications for the PowerPoint agent on the web, so users can leave and return. The roadmap states no default, licence or admin setting, and no administrator action is documented yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's licence comparison says Microsoft 365 Copilot (Basic) users can use Copilot in PowerPoint and add-on licence holders get the full experience. Which tier covers this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","agents","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 570438"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570438"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Release Notes for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat"]
controls:
  - governs: "Notifications from the PowerPoint agent on the web"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting is documented at the time of writing (November 2026)."
  - governs: "Which users hold the Microsoft 365 Copilot add-on licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Existing licence control, not a switch for the notifications. Which tier covers this feature is not yet published. Needs at least License or User Administrator."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-15T23:00:36"
changes:
  - date: "2026-11-21"
    note: "New briefing: the roadmap describes asynchronous notifications for the PowerPoint agent on the web; Microsoft Learn documents no setting, default or licence tier for them yet."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the Scope section: the feature-specific rollout window is not stated, and Microsoft's release notes describe a gradual safe deployment model for Copilot features."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 49
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "43bf449da34c949707769cb7724a9e56"
---

## What's changing

Microsoft plans to add asynchronous notifications to the PowerPoint agent on the web. The roadmap item says the aim is to let users "leave PowerPoint, switch devices, go offline, or end their workday" while remaining confident that Copilot will notify them "when work is complete or requires attention".

The roadmap record gives no more than that. It does not say how a notification is delivered, where it appears, what it contains, or whether an administrator or user can turn it off. Microsoft Learn does not describe this feature at the time of writing (November 2026), so what follows is the roadmap's description, not documented behaviour.

The record lists the item as In development, with a target of October CY2026 and release phase General Availability. That target month has passed and the status has not moved. The platform is Web and the cloud is Worldwide (Standard Multi-Tenant). No Message Center post was supplied for the item.

## Why it matters

This is a convenience change for people who run longer PowerPoint agent tasks, and the exposure it adds is small. It matters to a service owner mainly because notifications can reach users outside the PowerPoint tab, and Microsoft has not yet said where or with what content. Microsoft has not stated what happens on arrival, so base planning on no source saying that existing behaviour changes.

The practical effect is on support and expectations: once users trust a notification, they will stop watching the deck, so a missed or delayed notification becomes a support ticket. Plan to learn how it behaves from a pilot rather than from documentation, because none exists yet.

## Risk assessment

**Data exposure**
- The roadmap does not say what a notification contains. If it names the deck or summarises the task, it could show organisational content outside PowerPoint; confirm the content and surfaces during a pilot.

**Security & identity**
- No change is described: the roadmap item mentions no new permissions, sign-in or data sources. Notifications are a new route to the user, so confirm which devices and surfaces they reach before relying on them.

**Autonomy & actions**
- The roadmap describes Copilot continuing work while the user is away and notifying them when it "requires attention". Microsoft has not said what the agent does while it waits or what it can do without the user present; confirm this before the feature reaches users.

**Change & support**
- Users who leave a task running and expect a notification will raise tickets if it does not arrive. Microsoft Learn documents no admin setting for these notifications at the time of writing, so tell users what to expect once behaviour is confirmed.

## Cost and licensing

Learn's licence comparison says users with Copilot Chat (Basic) don't have access to Copilot in Word, Excel, PowerPoint and OneNote, users with Microsoft 365 Copilot (Basic) can use it, and holders of the Microsoft 365 Copilot add-on licence have the full experience (page: Microsoft Copilot overview). Which of those tiers covers the notifications is not yet published.

No meter, credit rate or separate price for this feature is published at the time of writing. The only cost the sources show is admin and communication time.

A separate Learn page for Word, Excel and PowerPoint Agents in the Microsoft Copilot app says access requires a paid Microsoft 365 Copilot licence. Whether the roadmap's PowerPoint agent on the web is the same agent is not stated, so that page is not treated as this feature's licence rule.

## Scope

The roadmap record lists the PowerPoint agent notifications for the Web platform only, in the Worldwide (Standard Multi-Tenant) cloud, with release phase General Availability. It does not list GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there.

Which users get it, which roles configure it and the feature-specific rollout window are not stated. Microsoft 365 Copilot release notes describe a safe deployment model for Copilot features, gradually rolling out to a subset of users within a tenant before expanding across the organization. Users need a Copilot experience that includes Copilot in PowerPoint, per the licence comparison in Microsoft Copilot overview; the tier this feature needs is not yet published.

## Governance guidance

### Before rollout
- Check which users hold the Microsoft 365 Copilot add-on licence (Microsoft 365 admin center > Users > Active users > user > Licenses and Apps > Licenses) so you know who can use the full Copilot in PowerPoint experience.
- Watch the Message center and roadmap item 570438 for a rollout window, because the October CY2026 target has passed and the status is still In development.
- Agree with your service desk who will answer questions about notifications that do not arrive.

### At rollout
- Run a pilot: start a long PowerPoint agent task on the web with a pilot user, close the tab, and record where the notification appears and what it shows.
- Ask the pilot user to switch device and go offline, and record whether the notification still arrives.
- Brief users on what the pilot showed before telling them they can leave a task running.

### After rollout
- Re-check Copilot > Settings in the Microsoft 365 admin center for any notification setting, as none is documented at the time of writing.
- Review tickets about missed or unexpected notifications and feed the examples back through your Microsoft account team.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Notifications from the PowerPoint agent on the web</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence</strong><br><small>User</small><br><small class="controls__note">Existing licence control, not a switch for the notifications. Which tier covers this feature is not yet published. Needs at least License or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting for these notifications is documented at the time of writing (November 2026): the Copilot settings page in the Microsoft 365 admin center lists settings under User access, Data access, Copilot actions and Other settings, and none of them concerns notifications. The first row records that gap.

The licence row is an existing control that decides who has a Copilot licence; it does not switch the notifications on or off. Assigning licences needs at least a License Administrator or User Administrator role.

## Open questions

- Is the notification on by default, and can an administrator or a user turn it off? Watch the Message center and the roadmap item.
- What does a notification contain, and on which devices and surfaces does it appear? This decides whether it can expose deck content outside PowerPoint.
- Which Copilot licence tier covers the feature, and is any meter or price published? Watch the Microsoft Copilot overview page.
- Is the PowerPoint agent in this item the same agent as the Word, Excel and PowerPoint Agents in the Microsoft Copilot app, and do the Anthropic model controls for those agents apply?
- What does the agent do while it waits for the user, and can it take actions with no one present?

<!-- rationale
risk: Low. The roadmap item describes notifications only and states no new data access or actions. What a notification shows, and where, is not yet published, so that is the exposure to check.
cost: Low. The only cost the sources show is admin and communication time; no meter or price for this feature is published, and which Copilot licence tier covers it is not yet published.
impact: Medium. Users of the PowerPoint agent on the web would notice it; the roadmap gives no sign that other apps or users are affected.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: These notifications can reach users outside the PowerPoint tab. | Found: Searched: 'PowerPoint Copilot agent notifications content delivery complete requires attention waiting user away'; 'PowerPoint notifications completion Copilot'. Read roadmap, release notes and agent documentation; leaving PowerPoint is planned, but no delivery surface is specified. | Fix: Replace 'It matters to a service owner mainly because notifications can reach users outside the PowerPoint tab, and Microsoft has not yet said where or with what content.' with 'It matters to a service owner mainly because the roadmap aims to let users leave PowerPoint while awaiting a notification, and Microsoft has not yet said where that notification appears or what it contains.'
-->
