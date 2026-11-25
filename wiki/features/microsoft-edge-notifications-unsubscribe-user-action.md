---
title: "Microsoft Edge: Unsubscribe button on website notifications"
slug: "microsoft-edge-notifications-unsubscribe-user-action"
roadmapId: 577863
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge plans an Unsubscribe button on eligible website push notifications so users can stop a site's notifications without opening settings. Existing notification policies remain the admin control; no action is required yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and Microsoft Learn has no page for this feature at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["microsoft-edge","user-experience","policy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Edge: Notifications unsubscribe user action"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577863"
    kind: "roadmap"
  - title: "DefaultNotificationsSetting"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting"
    kind: "learn"
  - title: "NotificationsBlockedForUrls"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls"
    kind: "learn"
  - title: "NotificationsAllowedForUrls"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsallowedforurls"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether websites can display notifications by default"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Content settings > Default notification setting"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting"
    api:
      kind: "other"
      call: "Set registry value DefaultNotificationsSetting (REG_DWORD) = 2 under SOFTWARE\\Policies\\Microsoft\\Edge to block all site notifications"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting"
    note: "General control: Microsoft has not confirmed it applies to the Unsubscribe button. Page lists Windows, macOS and Android; Android needs 147 or later."
  - governs: "Sites that are not allowed to display notifications"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Content settings > Block notifications on specific sites"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls"
    api:
      kind: "other"
      call: "Set registry value 1 (REG_SZ) = https://www.contoso.com under SOFTWARE\\Policies\\Microsoft\\Edge\\NotificationsBlockedForUrls"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls"
    note: "General control: Microsoft has not confirmed it applies to the Unsubscribe button. Takes URL patterns, one value per site."
  - governs: "Sites that are allowed to display notifications"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Content settings > Allow notifications on specific sites"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsallowedforurls"
    api:
      kind: "other"
      call: "Set registry value 1 (REG_SZ) = https://www.contoso.com under SOFTWARE\\Policies\\Microsoft\\Edge\\NotificationsAllowedForUrls"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsallowedforurls"
    note: "General control: Microsoft has not confirmed it applies to the Unsubscribe button. Interaction with a user unsubscribing is not stated."
  - governs: "Tenant-wide switch for the Unsubscribe button itself"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such policy at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: planned Unsubscribe button on Edge website notifications, with the existing notification policies as the documented controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 49 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 49
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "250e1028bc912986f73f5572fae2c634"
---

## What's changing

Microsoft Edge plans to add an Unsubscribe button to eligible website push notifications. The roadmap item describes it as a way for users to stop receiving notifications from a website directly from the notification, without opening browser settings.

Microsoft Learn does not describe this feature yet (November 2026), so what this page says about its behaviour is the roadmap's description. Microsoft has not said which notifications are eligible, where the button appears, or what the button changes in the browser's stored site permission.

The roadmap item states that administrators can continue to manage website notification permissions through existing enterprise policies. The item is listed as In development, with a target date of January CY2027, release phase General Availability, platform Web and the Worldwide (Standard Multi-Tenant) cloud. The dates are Microsoft's targets, not commitments.

## Why it matters

For most tenants this is a small user-experience change, and the practical question is whether your notification policy and the new button agree. Microsoft has not stated what happens on arrival, so this page does not assume the button appears for every user or that an administrator can switch it off.

Users who currently have to open Edge settings to remove a noisy site may use the button instead. If your organisation allows specific sites to send notifications by policy, expect questions from users about why a site they unsubscribed from is listed as allowed, and confirm the behaviour in a pilot once the feature ships.

## Risk assessment

**Data exposure**

- No new data access is described. The roadmap item describes a button on notifications that sites already send; it does not describe the button reading or sending anything else.

**Security & identity**

- The existing notification policies (DefaultNotificationsSetting, NotificationsAllowedForUrls and NotificationsBlockedForUrls) are the controls the roadmap item points to. Microsoft has not said how they interact with the button, for example whether a user can unsubscribe from a site your policy allows.

**Autonomy & actions**

- The button is a user action. The roadmap item describes no automatic or agent-driven behaviour.

**Change & support**

- Expect questions about where the button appears and which notifications lack it, because Microsoft has described only "eligible" notifications. Brief the service desk once Microsoft publishes the eligibility rules.
- A site a user unsubscribes from may stop delivering notifications that your organisation depends on, such as a web-based service-status or intranet alert. Whether policy can keep an allowed site subscribed is not yet stated.

## Cost and licensing

Microsoft has not published a licence, meter or price for this feature. The roadmap item names none, and Microsoft Learn has no page for the feature at the time of writing (November 2026).

The indirect cost is admin and service desk time to brief users and test the interaction with your notification policies.

## Scope

The roadmap item lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, and no other clouds. That is the record, not a statement that other clouds are excluded.

The roadmap item gives no release channel, Edge version, prerequisite or user group, and names no role needed to configure anything. The existing notification policies are documented as supported on Windows, macOS and Android (version 147 or later on Android), and iOS is listed as not supported; whether the new button follows the same platform list is not stated.

## Governance guidance

### Before rollout

- Record which of DefaultNotificationsSetting, NotificationsAllowedForUrls and NotificationsBlockedForUrls are set in your Edge policy baseline, so you know which sites users can currently receive notifications from.
- Identify any business-critical web notifications, such as service-status or intranet alerts, that users must keep receiving.
- Draft a short note for users explaining that the button may appear on some website notifications and what it is for.

### At rollout

- Test the button in a pilot group that has your notification policies applied, and note whether it appears on notifications from sites on the allowed list.
- Brief the service desk on what the button does, using the behaviour you saw in the pilot rather than assumptions.

### After rollout

- Check with pilot users whether any critical site notifications stopped after someone used the button.
- Re-read the Microsoft Edge policy reference for any new policy that covers the button, and add it to your baseline if one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether websites can display notifications by default</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the Unsubscribe button. Page lists Windows, macOS and Android; Android needs 147 or later.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Content settings › Default notification setting <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry value DefaultNotificationsSetting (REG_DWORD) = 2 under SOFTWARE\Policies\Microsoft\Edge to block all site notifications</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultnotificationssetting" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sites that are not allowed to display notifications</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the Unsubscribe button. Takes URL patterns, one value per site.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Content settings › Block notifications on specific sites <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry value 1 (REG_SZ) = https://www.contoso.com under SOFTWARE\Policies\Microsoft\Edge\NotificationsBlockedForUrls</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sites that are allowed to display notifications</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the Unsubscribe button. Interaction with a user unsubscribing is not stated.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Content settings › Allow notifications on specific sites <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsallowedforurls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry value 1 (REG_SZ) = https://www.contoso.com under SOFTWARE\Policies\Microsoft\Edge\NotificationsAllowedForUrls</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsallowedforurls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Unsubscribe button itself</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such policy at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The roadmap item says administrators can continue to manage website notification permissions through existing enterprise policies. Microsoft has not confirmed that these policies govern the Unsubscribe button itself, and Microsoft Learn documents no policy named for the button at the time of writing (November 2026).

The three policies are documented as mandatory-only (they cannot be set as recommended). Each page says that when NotificationsAllowedForUrls or NotificationsBlockedForUrls is not set, the global default applies, taken from DefaultNotificationsSetting if it is set or from the user's personal configuration. The rows below are general controls for website notifications, not controls for the new button.

## Open questions

- Which website notifications are eligible for the Unsubscribe button, and on which operating systems and Edge versions? Watch the Microsoft 365 roadmap item and the Edge release notes.
- Is the button on or off by default, and is there a policy to hide or disable it? Watch Message center and the Microsoft Edge policies reference.
- What does the button change: the user's stored site permission, or only the current subscription? Watch the Edge documentation once it publishes.
- If a site is in NotificationsAllowedForUrls, can a user still unsubscribe from it, and what then happens to notifications from that site?

<!-- rationale
risk: Low. The change is a user-facing button on notifications Edge already shows, and the roadmap item says existing enterprise policies still manage website notification permissions.
cost: Low. The only cost the roadmap record shows is admin and helpdesk time to brief users; Microsoft has not published a licence or meter for this feature.
impact: Low. Users who receive website push notifications in Edge would see a new button; Microsoft has not said which notifications are eligible, so how many people notice is not yet known.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] rationale: cost / cost: The roadmap record shows admin and helpdesk time to brief users as the only cost. | Found: Searched: the complete supplied roadmap record for cost, admin time, helpdesk and briefing requirements; Microsoft Edge notifications unsubscribe button licensing license price meter. The record describes the button and enterprise policies, not support effort or costs. | Fix: Replace the cost rationale with 'Low. Expect admin and helpdesk time to brief users; Microsoft has not published a licence or meter for this feature.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: sentence beginning 'Each page says' / behaviour: When NotificationsBlockedForUrls is unset, the global default comes from DefaultNotificationsSetting if set, otherwise personal configuration; the briefing attributes this to each policy page. | Found: If you don't set this policy, the global default value is used for all sites. This default value is from the DefaultNotificationsSetting policy if it's set, or from the user's personal configuration. | Fix: Replace 'Each page says that when' with 'The NotificationsAllowedForUrls and NotificationsBlockedForUrls reference pages say that when'. The DefaultNotificationsSetting reference does not contain this fallback statement. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/notificationsblockedforurls
-->
