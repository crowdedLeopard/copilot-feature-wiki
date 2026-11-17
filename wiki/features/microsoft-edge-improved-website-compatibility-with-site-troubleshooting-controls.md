---
title: "Microsoft Edge: in-context site troubleshooting controls for broken websites"
slug: "microsoft-edge-improved-website-compatibility-with-site-troubleshooting-controls"
roadmapId: 561486
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft Edge plans in-context prompts that guide users to troubleshooting options, such as tracking prevention settings, when a site misbehaves. Microsoft has not said whether admins must act or can control the prompt."
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
  notes: "Not yet published. The roadmap item names no licence or meter, and Microsoft Learn has no page for this feature at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["microsoft-edge","tracking-prevention","privacy","user-experience","policy"]
sources:
  - title: "Microsoft 365 Roadmap 561486"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561486"
    kind: "roadmap"
  - title: "Tracking prevention in Microsoft Edge"
    url: "https://learn.microsoft.com/microsoft-edge/web-platform/tracking-prevention"
    kind: "learn"
  - title: "TrackingPrevention"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/trackingprevention"
    kind: "learn"
  - title: "AllowTrackingForUrls"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/allowtrackingforurls"
    kind: "learn"
  - title: "Configure Microsoft Edge policy settings on Windows devices"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which tracking prevention level Edge uses"
    scope: "user"
    ui:
      surface: "Group Policy Editor"
      path: "Administrative Templates > Microsoft Edge > Block tracking of users' web-browsing activity"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/trackingprevention"
    api:
      kind: "other"
      call: "Set registry value TrackingPrevention (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge to 0 (Off), 1 (Basic), 2 (Balanced) or 3 (Strict)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/trackingprevention"
    note: "General control: Microsoft has not confirmed it applies to the new prompt. Windows and macOS 78 or later; not supported on Android or iOS. If unset, users choose."
  - governs: "Sites excluded from tracking prevention"
    scope: "user"
    ui:
      surface: "Group Policy Editor"
      path: "Administrative Templates > Microsoft Edge > Configure tracking prevention exceptions for specific sites"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/allowtrackingforurls"
    api:
      kind: "other"
      call: "Add URL patterns such as [*.]contoso.edu as values 1, 2, 3 (REG_SZ) under SOFTWARE\\Policies\\Microsoft\\Edge\\AllowTrackingForUrls"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/allowtrackingforurls"
    note: "General control: Microsoft has not confirmed it applies to the new prompt. Windows and macOS 78 or later; not supported on Android or iOS."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:34:37"
changes:
  - date: "2026-11-17"
    note: "First briefing for this roadmap item: planned in-context site troubleshooting prompts in Edge, with the existing tracking prevention controls they point to."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 59 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 57
  unconfirmed: 2
  contradicted: 0
  attempts: 0
  hash: "d379d721187b8589d04602b64c6c16dd"
---

## What's changing

Microsoft Edge plans to help users fix website problems without leaving the page. The roadmap item says that when a site is not working as expected, users may be guided to troubleshooting options, such as adjusting tracking prevention settings (for example, Strict mode) and reviewing site-specific configurations. The prompts are meant to surface in context, so users do not have to navigate deep into settings.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn does document the settings it points to. Edge offers three levels of tracking prevention, Basic, Balanced (the default) and Strict, and describes Strict as designed for users who are okay trading website compatibility for maximum privacy. Users can also disable tracking prevention enforcement for a specific site from the page info flyout or at `edge://settings/privacy/trackingPreventionExceptions`.

The roadmap lists the item as In development, with a target of January CY2027, for Worldwide (Standard Multi-Tenant) and the Web platform. The date is a target, not a commitment. The roadmap item gives no preview date and no more-info link.

## Why it matters

This change affects the support load and the privacy posture of your Edge fleet. Where users run Strict tracking prevention, broken sites are a known side effect, and an in-context prompt could change how often users relax protection and how many of them ask the help desk first. Microsoft has not stated what happens on arrival, so base planning on the roadmap description rather than on an assumed default.

The decision for administrators is whether your tracking prevention level is set by policy or left to users. The Edge policy reference documents `TrackingPrevention` and `AllowTrackingForUrls` for that purpose. Whether the new prompt respects those policies is something to confirm when Microsoft documents the feature.

## Risk assessment

**Data exposure**

- The roadmap describes prompts and in-context actions, not new data access. Relaxing tracking prevention for a site lets that site's trackers use storage again, which Learn describes as the purpose of the exception option. The `AllowTrackingForUrls` policy is the documented way to set such exceptions centrally.

**Security & identity**

- No change is described: the roadmap item mentions no identity, sign-in or permission change. Confirm whether the prompt can lower the tracking prevention level where an administrator has set `TrackingPrevention` by policy; Microsoft's policy documentation says mandatory policies override user preferences, but no page confirms how this prompt behaves.

**Autonomy & actions**

- The roadmap says users "may be guided" to options, which reads as a prompt the user acts on. Microsoft has not described any step the browser takes on its own.

**Change & support**

- Users may start changing tracking prevention or site exceptions themselves, so help-desk guidance that says "raise a ticket" for broken sites may need updating.
- Microsoft Learn documents no setting that turns this prompt off at the time of writing (November 2026), so the planned prompt is a change you can brief users on but not, on current documentation, switch off.

## Cost and licensing

Microsoft has not published a licence or meter for this feature. The roadmap item names none, and Microsoft Learn has no page for it at the time of writing (November 2026), so the licensing model is recorded as not yet published.

The cost the sources show is indirect: admin time to review your tracking prevention policy, and help-desk time while users learn the new prompts. The tracking prevention page and the `TrackingPrevention` and `AllowTrackingForUrls` policy pages list no licence for those settings.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the Web platform, and the release phase General Availability. The status is In development with a target of January CY2027. It lists no US Government clouds; that is a record fact, not a statement that the feature is unavailable there.

Microsoft has not stated which users, Edge versions or release channels will see the prompt, or whether it reaches managed and unmanaged browsers alike. The settings it points to have documented limits: the `TrackingPrevention` and `AllowTrackingForUrls` policies list Windows and macOS version 78 or later and mark Android and iOS as not supported.

## Governance guidance

### Before rollout

- Record which tracking prevention level your organisation's Edge browsers use today, and whether the `TrackingPrevention` policy sets it or users choose (Windows and macOS only, per the policy page).
- Review existing `AllowTrackingForUrls` exceptions so you know which sites are already excluded from tracking prevention.
- List the business sites your users report as broken under Strict mode, so you can judge whether a policy exception is better than a user-level change.

### At rollout

- Brief the help desk and champions that Edge may guide users to tracking prevention and site settings, once Microsoft confirms the prompt has reached your tenant.
- Ask users who raise broken-site tickets to say whether a prompt appeared, so you can learn what it offers.

### After rollout

- Check whether users have created tracking prevention exceptions at `edge://settings/privacy/trackingPreventionExceptions` that your policy would not have allowed.
- Add recurring broken sites to the `AllowTrackingForUrls` list instead of relying on each user to relax protection.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which tracking prevention level Edge uses</strong><br><small>User</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the new prompt. Windows and macOS 78 or later; not supported on Android or iOS. If unset, users choose.</small></td><td data-label="Admin UI"><strong>Group Policy Editor</strong><br>Administrative Templates › Microsoft Edge › Block tracking of users' web-browsing activity <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/trackingprevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry value TrackingPrevention (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge to 0 (Off), 1 (Basic), 2 (Balanced) or 3 (Strict)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/trackingprevention" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sites excluded from tracking prevention</strong><br><small>User</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the new prompt. Windows and macOS 78 or later; not supported on Android or iOS.</small></td><td data-label="Admin UI"><strong>Group Policy Editor</strong><br>Administrative Templates › Microsoft Edge › Configure tracking prevention exceptions for specific sites <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/allowtrackingforurls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Add URL patterns such as [*.]contoso.edu as values 1, 2, 3 (REG_SZ) under SOFTWARE\Policies\Microsoft\Edge\AllowTrackingForUrls</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/allowtrackingforurls" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roadmap item mentions no admin control for the prompt itself, and Microsoft Learn documents none at the time of writing (November 2026). The rows above are the existing tracking prevention controls the prompt points to, not controls over the prompt. Microsoft has not confirmed that the prompt honours them.

Both policies are documented as mandatory-capable and not recommended-capable, and apply per profile. Microsoft's Windows policy guide says mandatory policies override user preferences and prevent users changing the setting.

Users can set per-site exceptions themselves at `edge://settings/privacy/trackingPreventionExceptions` and allow or block cookie access for specific domains at `edge://settings/content/cookies`; those are user-side settings, not admin controls.

## Open questions

- Is the prompt on by default, and does it reach managed browsers? Watch the Microsoft 365 Roadmap item and Message center for a post.
- Does the prompt respect a mandatory `TrackingPrevention` policy, and does it honour `AllowTrackingForUrls`? Watch the Edge policy reference and release notes.
- Will Microsoft add a policy that turns the prompt off? Watch the Edge policies list and the release notes.
- What does the prompt offer beyond tracking prevention, and does any of it send site or page information to Microsoft? Watch for the feature's own Learn page.

<!-- rationale
risk: Low. The roadmap describes prompts that point users to existing site settings, and no source says it reaches new data. The exposure is users loosening tracking prevention, which the existing Edge policies can already govern.
cost: Low. The only cost the sources show is admin time to brief the help desk and review tracking prevention policy; licensing for this feature is not yet published.
impact: Low. Users notice it only when a site is not working as expected, and the roadmap item does not say how many users will see the prompt.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing: first sentence / behaviour: The planned experience lets users fix website problems without leaving the page. | Found: Searched: Microsoft Edge site troubleshooting prompts "without leaving" website. Read the roadmap description and Tracking prevention in Microsoft Edge; neither promises that completing troubleshooting keeps the user on the current page. | Fix: Replace the first sentence with: "Microsoft Edge plans to help users resolve website issues directly from the browser."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: Users notice the new experience only when a site is not working as expected. | Found: Searched: Microsoft Edge site troubleshooting prompts only broken website automatic actions site information sent Microsoft. Read roadmap and tracking prevention overview; the roadmap describes a broken-site scenario, not an exclusive condition for noticing the experience. | Fix: Replace the impact rationale with: "Low. The roadmap describes in-context troubleshooting actions when a site is not functioning as expected, but does not state how many users will see them."
-->
