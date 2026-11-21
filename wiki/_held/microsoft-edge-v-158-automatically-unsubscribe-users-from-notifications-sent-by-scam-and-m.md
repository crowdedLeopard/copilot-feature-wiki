---
title: "Microsoft Edge: automatically unsubscribe users from notifications sent by scam and malicious sites"
slug: "microsoft-edge-v-158-automatically-unsubscribe-users-from-notifications-sent-by-scam-and-m"
roadmapId: 568366
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge 158 stops a notification source from sending further notifications when it leads users to a site Microsoft Defender SmartScreen blocks. No admin action is documented; users can restore sites in Edge settings."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Edge 158 release notes name no licence, meter or prerequisite for this feature, and the roadmap item names none."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["microsoft-edge","threat-detection","user-experience","policy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 568366"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568366"
    kind: "roadmap"
  - title: "Microsoft Edge release notes for Stable and Extended Stable Channels"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "DefaultNotificationsSetting"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting"
    kind: "learn"
  - title: "NotificationsBlockedForUrls"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls"
    kind: "learn"
videos: []
related: ["microsoft-edge-notifications-unsubscribe-user-action","microsoft-edge-enhanced-security-mode-plus"]
controls:
  - governs: "Switch to turn automatic unsubscribe from scam and malicious notification sources on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "No policy for this feature is listed in the Edge 158 release notes. Users can restore sites at edge://settings/privacy/sitePermissions/allPermissions/notifications."
  - governs: "Whether websites can display notifications by default"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Content settings > Default notification setting"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value DefaultNotificationsSetting (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting"
    note: "Existing control for all site notifications, not for this feature. Its page does not mention automatic unsubscribe."
  - governs: "Sites that are not allowed to display notifications"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Content settings > Block notifications on specific sites"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge\\NotificationsBlockedForUrls, values 1, 2, 3 (REG_SZ)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls"
    note: "Existing control for named sites, not for this feature. Its page does not mention automatic unsubscribe."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-21"
    note: "First briefing: Edge 158 automatically unsubscribes users from notification sources that lead to SmartScreen-blocked sites; no admin control is documented."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 42 statements contradicted, 5 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 37
  unconfirmed: 5
  contradicted: 0
  attempts: 1
  hash: "a32fb9d71eb85fd17e86d1cbe5b8bed3"
---

## What's changing

Microsoft Edge now removes a notification source's permission to keep sending notifications when a notification leads users to a site that Microsoft Defender SmartScreen blocks as a scam, phishing or malware page. The roadmap item says Edge also lets users know, and that users can review and restore these sites at any time under `edge://settings/privacy/sitePermissions/allPermissions/notifications`.

The Edge release notes for the Stable channel list this under Feature Updates for version 158.0.4370.33 (19 November 2026) and describe it in the same terms: Edge "automatically stops that source from sending further notifications. Edge also informs users." The same feature appears in the Edge 152 Stable release notes of 27 August 2026, where Microsoft marks it as a controlled feature rollout.

The roadmap item is marked Launched with a target of November CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) on the Web platform. The roadmap record and the release notes describe the behaviour only as above; they do not describe how Edge records the decision or what the notice to users looks like.

## Why it matters

This is a protection that arrives with the browser rather than through a tenant setting. Malicious notification permissions are a way for a scam site to reach a user after they have left the site, and the release notes describe Edge cutting that channel once SmartScreen has blocked the destination. For a security team, this narrows one phishing route without a policy to deploy.

The release notes describe the behaviour as automatic and name no administrator setting for it, so plan on it being present on Edge 158 and later. The practical work is communication: tell the helpdesk why a site may stop sending notifications, and where a user restores a site if the block was wrong.

## Risk assessment

**Data exposure**

- The release notes describe a change to which sources may send notifications. They do not describe what Edge sends to Microsoft or stores for this feature, so confirm that with Microsoft before assuming it differs from SmartScreen's existing behaviour.

**Security & identity**

- The trigger Microsoft describes is a notification that leads to a site SmartScreen blocks as a scam, phishing or malware page. Notifications from malicious sites that SmartScreen has not blocked are outside what the release notes describe, so this does not replace user training or the notification policies listed in the controls table.
- Users can restore a site that Edge has unsubscribed. A user who restores a site SmartScreen blocked can receive its notifications again; the release notes do not say whether restoring is allowed for managed profiles.

**Autonomy & actions**

- Edge makes the unsubscribe decision itself; the release notes say it acts "automatically" and informs the user afterwards, and describe no approval step for users or administrators.

**Change & support**

- A site that a user relied on for notifications may stop sending them if SmartScreen blocks it, which can generate helpdesk calls about missing alerts. The documented route back is the notifications page under `edge://settings/privacy/sitePermissions/allPermissions/notifications`.

## Cost and licensing

The Edge 158 release notes name no licence, meter or prerequisite for this feature, and the roadmap item names none, so a licence statement for it is not yet published.

The cost the sources show is indirect: helpdesk and communication time for users who ask why a site stopped sending notifications.

## Scope

The roadmap record lists the Web platform and Worldwide (Standard Multi-Tenant), with release phase General Availability and status Launched. It does not list US Government clouds.

The feature is documented in the Edge release notes for version 158.0.4370.33 (Stable, 19 November 2026) and in the earlier Edge 152 Stable entry (27 August 2026), which carries a controlled-rollout note. The release notes name no role, licence or prerequisite for it. Where a user sees it depends on SmartScreen's decision about the destination site, as the release notes describe.

## Governance guidance

### Before rollout

- Brief the helpdesk that Edge 158 can unsubscribe a user from a notification source after SmartScreen blocks the site it leads to, and give them the `edge://settings/privacy/sitePermissions/allPermissions/notifications` path for restoring a site.
- Review the existing notification policies in the controls table (Default notification setting and Block notifications on specific sites) to see whether your tenant already blocks site notifications, since those policies decide whether sites can display notifications at all.
- Add a line to user guidance saying that a notification-led visit to a blocked scam page can end that site's notifications and that Edge tells the user when it happens.

### At rollout

- Ask pilot users on Edge 158 whether they see the notice and whether any legitimate site loses its notifications.
- Record any site that users report as wrongly unsubscribed, so the list is ready if Microsoft documents a way to report or exempt sites.

### After rollout

- Check the Edge release notes for a policy that controls this feature, because none is listed in the Edge 158 policy updates.
- Re-read the notification policies after any change to your notification stance, because they govern which sites may notify at all.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch to turn automatic unsubscribe from scam and malicious notification sources on or off</strong><br><small>Tenant</small><br><small class="controls__note">No policy for this feature is listed in the Edge 158 release notes. Users can restore sites at edge://settings/privacy/sitePermissions/allPermissions/notifications.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether websites can display notifications by default</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for all site notifications, not for this feature. Its page does not mention automatic unsubscribe.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Content settings › Default notification setting <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value DefaultNotificationsSetting (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sites that are not allowed to display notifications</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for named sites, not for this feature. Its page does not mention automatic unsubscribe.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Content settings › Block notifications on specific sites <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge\NotificationsBlockedForUrls, values 1, 2, 3 (REG_SZ)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No administrator control specific to this feature is documented. The two notification policies in the table are existing controls that decide whether sites may display notifications; the release notes do not say they interact with the automatic unsubscribe, and neither restores or removes a site that Edge has unsubscribed. The user-facing review page is `edge://settings/privacy/sitePermissions/allPermissions/notifications`, as the roadmap item gives it.

Both policies are Group Policy and registry settings for Windows, with preference keys for macOS, and Android from version 147, as their pages list. The release notes do not say whether the automatic unsubscribe applies on every platform those policies cover.

## Open questions

- Which Edge platforms and channels get the automatic unsubscribe? The roadmap lists Web and the release notes do not break it down. Watch the Edge Stable release notes.
- Does the feature depend on Microsoft Defender SmartScreen being turned on in Edge, and does an administrator's SmartScreen setting change it?
- Will Microsoft add a policy or Edge management service setting to turn the feature off, or to stop users restoring unsubscribed sites?
- Does a notification that the notification policies already allow, such as a site on the allowed-sites list, still get unsubscribed once SmartScreen blocks it?
- What data, if any, does Edge send or store when it unsubscribes a source?

<!-- rationale
risk: Low. The change removes a notification source after SmartScreen blocks the site it leads to; it adds no data access, and the only side effect is a user losing a source's notifications.
cost: Low. The release notes name no licence or meter, so the only cost the sources show is admin and helpdesk time; a licence statement for this feature is not yet published.
impact: Low. Only users who receive a notification that leads to a site SmartScreen blocks as a scam, phishing or malware page see the behaviour.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Microsoft says Edge informs the user afterwards. | Found: Searched: Edge automatic unsubscribe notification informs user before after permission revoked. Read Stable and archived feature entries; 'Edge also informs users' and 'Edge lets users know when this happens' do not specify a before/after sequence. | Fix: Replace 'informs the user afterwards' with 'also informs the user', matching https://learn.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel.
- [unsupported, major] What's changing: first sentence / behaviour: Edge implements automatic unsubscribe by removing the notification source's permission. | Found: Searched: Edge automatic unsubscribe notification informs user before after permission revoked; automatic unsubscribe notifications no data access side effects permission revoked. Read Stable and archived entries; they say the source stops sending, not how its permission is changed. | Fix: Replace the first sentence with 'Microsoft Edge now automatically stops a notification source from sending further notifications when a notification leads users to a site that Microsoft Defender SmartScreen blocks as a scam, phishing or malware page.'
- [unsupported, blocker] Governance controls: first paragraph / applicability: Neither notification policy restores or removes a site that Edge has unsubscribed. | Found: Searched: DefaultNotificationsSetting NotificationsBlockedForUrls unsubscribe restore permissions. Read both policy references and Stable feature notes; these document notification defaults and blocked sites, but not effects on an automatically unsubscribed site's state. | Fix: Remove ', and neither restores or removes a site that Edge has unsubscribed'. Retain the narrower statement that the release notes do not describe how these policies interact with automatic unsubscribe.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: first paragraph / behaviour: Website notifications can reach users after they have left the site. | Found: When using the app in either Google Chrome or Microsoft Edge, the notification appears even if the user isn't actively using the Blazing Pizza app. | Fix: Add https://learn.microsoft.com/aspnet/core/blazor/progressive-web-app/push-notifications?view=aspnetcore-11.0#display-notifications to sources for the background statement about notifications reaching users after they leave a site. | Source: https://learn.microsoft.com/aspnet/core/blazor/progressive-web-app/push-notifications?view=aspnetcore-11.0#display-notifications
- [unsupported, minor] rationale: risk / behaviour: The feature adds no data access. | Found: Searched: Edge automatic unsubscribe notifications no data access side effects. Read Stable and archived feature entries and SmartScreen privacy excerpts; none states that automatic unsubscribe adds no data access. | Fix: Remove 'it adds no data access' from the risk rationale. Use 'Low. The change stops a notification source after SmartScreen blocks the destination; the feature-specific data handling is not described in the release notes.'
- [unsupported, minor] rationale: risk / behaviour: The only side effect is a user losing a source's notifications. | Found: Searched: Edge automatic unsubscribe notifications no data access side effects. Read Stable and archived feature entries; neither gives an exhaustive account of side effects. | Fix: Remove the clause saying that losing notifications is the only side effect. The replacement rationale supplied for the data-access claim makes no exhaustive side-effect assertion.
-->
