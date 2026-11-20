---
title: "Microsoft Edge: apply pending updates when the browser is idle"
slug: "microsoft-edge-smarter-and-faster-update-application"
roadmapId: 581801
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge plans to apply pending updates when the browser is idle, with the Relaunch Notification policy extended to manage idle restarts. Administrators should plan communication; the setting is not yet documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and the RelaunchNotification policy page lists no licence requirement at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["microsoft-edge","policy","admin-controls","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Edge: Smarter and faster update application"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581801"
    kind: "roadmap"
  - title: "RelaunchNotification"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotification"
    kind: "learn"
  - title: "RelaunchNotificationPeriod"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotificationperiod"
    kind: "learn"
  - title: "RelaunchWindow"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchwindow"
    kind: "learn"
  - title: "Configure Microsoft Edge policy settings on Windows devices"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "How users are notified, or forced, to restart Edge for a pending update"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "(Computer Configuration or User Configuration) > Policies > Administrative Templates > Microsoft Edge > Relaunch > Notify a user that a browser restart is recommended or required for pending updates"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotification"
    api:
      kind: "other"
      call: "Set registry value RelaunchNotification (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge; 1 = Recommended, 2 = Required"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotification"
    note: "Existing policy that the roadmap says is updated for idle restarts; the Learn page documents no idle option yet. Windows and macOS only. Applies to the users or computers targeted by the deployed policy."
  - governs: "Length of the period over which users are notified to restart Edge"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "(Computer Configuration or User Configuration) > Policies > Administrative Templates > Microsoft Edge > Relaunch > Set the time period for update notifications"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotificationperiod"
    api:
      kind: "other"
      call: "Set registry value RelaunchNotificationPeriod (REG_DWORD, milliseconds) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotificationperiod"
    note: "Existing policy; default is one week when not set. Not confirmed to govern idle restarts. Applies to the users or computers targeted by the deployed policy."
  - governs: "Time window in which the end of the relaunch notification period falls"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "(Computer Configuration or User Configuration) > Policies > Administrative Templates > Microsoft Edge > Relaunch > Set the time interval for relaunch"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchwindow"
    api:
      kind: "other"
      call: "Set registry value RelaunchWindow (REG_SZ) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchwindow"
    note: "Existing policy; its page warns that setting it can delay application of software updates. Not confirmed to govern idle restarts. Applies to the users or computers targeted by the deployed policy."
  - governs: "The idle-restart extension to RelaunchNotification described in this roadmap item"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented on the RelaunchNotification page at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T23:37:54"
changes:
  - date: "2026-11-20"
    note: "New briefing: Edge idle restarts for pending updates, built from the roadmap item and the existing Relaunch policy pages."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: the three relaunch policies are now scoped to the users or computers targeted, with their full Group Policy routes; the idle-restart gap is narrowed to the RelaunchNotification reference; action set to review."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a153b49dd5b7a08a4f9c91d8fbcfff79"
---

## What's changing

The roadmap item states that Microsoft Edge can apply pending updates when the browser is idle, and that the Relaunch Notification policy has been updated so that administrators can manage idle restarts for their organisation. It is listed as In development with a target date of January CY2027, for the Worldwide (Standard Multi-Tenant) cloud on the Web platform, release phase General Availability. The date is a target, not a commitment.

Microsoft Learn's page for the RelaunchNotification policy, which the roadmap item links to, describes the policy as it stands today and does not yet mention idle restarts. Today the policy notifies users that they need to restart Edge to apply a pending update. If the policy is not configured, Edge adds a recycle icon at the far right of the top menu bar to prompt users to restart. Set to 'Recommended', a recurring warning prompts users that a restart is recommended, and users can dismiss it and defer the restart. Set to 'Required', a recurring warning tells users the browser will restart automatically as soon as a notification period passes; the default period is seven days and the RelaunchNotificationPeriod policy configures it. The page says the user's session is restored when the browser restarts.

Because the Learn page does not describe the idle behaviour, what an idle restart is, how idleness is measured, and which policy value or option controls it are not yet documented. Everything above about idle restarts is the roadmap's description only.

## Why it matters

If Edge restarts itself while idle, updates should reach devices sooner for people who rarely close the browser, and users may notice a restart they did not trigger. Microsoft has not stated whether idle restarts are on by default, so no source says existing behaviour changes on arrival; the safe reading is to expect the roadmap's change and check the policy before January CY2027.

Service owners should decide now how their organisation wants relaunches handled: left to users, recommended, or required after a notification period. Those choices already exist in the Relaunch policy group and are likely to interact with the new idle behaviour, which is a point to confirm once Microsoft documents it.

## Risk assessment

**Data exposure**
- No change documented: the roadmap item describes restarting the browser to apply updates and names no new data access. The RelaunchNotification page states that the user's session is restored when the browser restarts.

**Security & identity**
- Applying updates sooner is the intent of the change; delayed relaunches leave a pending update unapplied. The RelaunchWindow page warns that setting that policy can delay application of software updates, so a restrictive window may postpone idle restarts too, which Microsoft has not confirmed.

**Autonomy & actions**
- Edge would restart itself when idle rather than only when the user chooses. Today the Required value of RelaunchNotification already restarts the browser automatically after the notification period. The way the new idle option behaves alongside it is not yet documented.

**Change & support**
- Expect help-desk questions about unexpected browser restarts, and confirm what the page's statement that the session is restored covers.
- The Relaunch policies apply to Windows and macOS; the RelaunchNotification page lists Android and iOS as not supported.

## Cost and licensing

No licence requirement or meter for this feature is published at the time of writing (November 2026). The roadmap item names none, and the RelaunchNotification policy page lists supported versions and policy settings but no licence.

The cost the sources show is indirect: admin time to review the Relaunch policies and to brief users. No storage or consumption cost is documented.

## Scope

The roadmap item lists Microsoft Edge, the Worldwide (Standard Multi-Tenant) cloud, the Web platform and release phase General Availability. It lists no US Government clouds.

The RelaunchNotification policy page lists support for Windows and macOS (version 77 and later) and not for Android or iOS. The Edge version in which idle restarts arrive is not yet published. Rollout mechanics and any prerequisite are not yet documented.

## Governance guidance

### Before rollout
- Inventory where RelaunchNotification, RelaunchNotificationPeriod and RelaunchWindow are already set in Group Policy or the registry, and record the values.
- Decide whether the organisation wants relaunches left to users, recommended or required, and how long the notification period should be.
- Tell users and the help desk that Edge may restart itself when it is idle, and that the session is restored on restart according to the policy page.

### At rollout
- Watch Message center and the RelaunchNotification page for the Edge version and policy values that govern idle restarts, and read them before changing the policy.
- Test the current Relaunch settings on a pilot group of Windows and macOS devices and note any restart that users did not expect.

### After rollout
- Ask the pilot group and the help desk about unexpected restarts and lost work, and adjust the notification period or relaunch window if needed.
- Check devices that stay on a pending update after the notification period, since RelaunchWindow is documented as able to delay application of updates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>How users are notified, or forced, to restart Edge for a pending update</strong><br><small class="controls__note">Existing policy that the roadmap says is updated for idle restarts; the Learn page documents no idle option yet. Windows and macOS only. Applies to the users or computers targeted by the deployed policy.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>(Computer Configuration or User Configuration) › Policies › Administrative Templates › Microsoft Edge › Relaunch › Notify a user that a browser restart is recommended or required for pending updates <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry value RelaunchNotification (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge; 1 = Recommended, 2 = Required</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotification" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Length of the period over which users are notified to restart Edge</strong><br><small class="controls__note">Existing policy; default is one week when not set. Not confirmed to govern idle restarts. Applies to the users or computers targeted by the deployed policy.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>(Computer Configuration or User Configuration) › Policies › Administrative Templates › Microsoft Edge › Relaunch › Set the time period for update notifications <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotificationperiod" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry value RelaunchNotificationPeriod (REG_DWORD, milliseconds) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotificationperiod" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Time window in which the end of the relaunch notification period falls</strong><br><small class="controls__note">Existing policy; its page warns that setting it can delay application of software updates. Not confirmed to govern idle restarts. Applies to the users or computers targeted by the deployed policy.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>(Computer Configuration or User Configuration) › Policies › Administrative Templates › Microsoft Edge › Relaunch › Set the time interval for relaunch <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchwindow" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry value RelaunchWindow (REG_SZ) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchwindow" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The idle-restart extension to RelaunchNotification described in this roadmap item</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented on the RelaunchNotification page at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The controls below are today's relaunch policies. The RelaunchNotification reference does not yet document the idle-restart extension described in this roadmap item, so none of these is confirmed to govern idle restarts; they are the existing controls an administrator uses for relaunching after an update.

RelaunchNotification, RelaunchNotificationPeriod and RelaunchWindow can each be mandatory and cannot be recommended, according to their Learn pages. On Windows, these policies can be configured through Group Policy or the registry, so their enforcement depends on how the organisation deploys Edge policy. How the roadmap's updated Relaunch Notification policy will expose idle restarts is not yet documented.

## Open questions

- What option or value of the Relaunch Notification policy controls idle restarts, and how does Edge decide the browser is idle? Watch the RelaunchNotification page on Microsoft Learn.
- Are idle restarts on by default when the feature ships, and does an unset policy behave differently? Watch Message center.
- Which Edge version and platforms get idle restarts, and does the Windows and macOS support listed for RelaunchNotification apply?
- How do RelaunchNotificationPeriod and RelaunchWindow interact with idle restarts, given that RelaunchWindow can delay application of updates?

<!-- rationale
risk: Low. The roadmap item describes a browser restart for updates, which stays inside existing data and security boundaries; the new idle-restart setting is not yet documented, so exposure is rated on today's relaunch policies.
cost: Low. The only cost the sources show is admin time to review relaunch policies and tell users; no licence or meter for this feature is published.
impact: Medium. Users of Edge on managed devices may notice the browser restarting while idle, and Microsoft has not stated whether this is on by default.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table / command: The registry control is RelaunchNotification, REG_DWORD, under SOFTWARE\Policies\Microsoft\Edge, with 1 Recommended and 2 Required. | Found: Recommended (1) = Recommended Required (2) = Required Path (Mandatory): SOFTWARE\Policies\Microsoft\Edge Value name: RelaunchNotification Value type: REG_DWORD | Fix: Keep the mapping from the cited RelaunchNotification reference. Add: 'Microsoft's RelaunchFastIfOutdated reference inconsistently calls value 1 Required, whereas the RelaunchNotification reference maps 1 to Recommended and 2 to Required.' Cite https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchfastifoutdated. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/relaunchnotification
-->
