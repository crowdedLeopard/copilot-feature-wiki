---
title: "Outlook: folder sharing respects organisation restrictions on Default and Anonymous permissions"
slug: "outlook-keep-folder-sharing-within-your-organization-s-policies"
roadmapId: 579185
topic: "modern-work"
products: ["Outlook"]
summary: "From a January CY2027 target, Outlook folder sharing is to honour restrictions on Default and Anonymous permissions, so users cannot change them. Admins with such restrictions should tell users; Microsoft has not named the restrictions."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and the Learn page on restricting folder permissions lists no licence requirement for the existing controls."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","sharing","policy","cloud-policy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 579185"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579185"
    kind: "roadmap"
  - title: "Restrict users from changing folder permissions in Outlook"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions"
    kind: "learn"
  - title: "Understand calendar and delegate permissions in Exchange Online"
    url: "https://learn.microsoft.com/exchange/collaboration-exo/shared-calendars/understand-calendar-delegate-permissions"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can change permissions on folders (all Outlook clients)"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions"
    api: null
    note: "Enable Do not allow users to change permissions on folders in a policy configuration. General control: Microsoft has not confirmed it is what this feature reads."
  - governs: "Whether users can edit folder permissions and default-user permissions in classic Outlook"
    scope: "user"
    ui: null
    api:
      kind: "other"
      call: "Set registry DWORD DisableEditPermissions and DisableEditDefaultUserPermissions to 1 under HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Office\\16.0\\Outlook\\Options\\Folders"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions"
    note: "Classic Outlook only. General control: Microsoft has not confirmed it is what this feature reads."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item; the roadmap record is the only source on the feature itself."
version: 1
---

## What's changing

Outlook folder sharing is to respect your organisation's restrictions for Default and Anonymous permissions. The roadmap item states that when these restrictions are enabled, users will not be able to change either setting, and that permissions granted directly to individual users remain unaffected. The item is tagged #newoutlookforwindows and lists Desktop and Web as platforms.

In Exchange, Default is the entry for authenticated users in the organisation who have no explicit permission entry, and Anonymous is the entry for callers who are not authenticated. Microsoft's Learn page on calendar permissions gives their typical values as AvailabilityOnly and None. Those definitions come from the calendar page; the roadmap item does not say which folders the change covers.

Microsoft Learn does not describe this feature yet, so what is said above about its behaviour is the roadmap's description. In particular, Microsoft has not said which restriction the feature reads. Learn documents existing ways to stop users changing folder permissions (see the controls table), but no page confirms they are the restrictions this item refers to.

The roadmap lists the item as In development with a target of January CY2027, for General Availability in Worldwide (Standard Multi-Tenant). The date is a target, not a commitment.

## Why it matters

This closes a gap between policy and what users can do in the client. If you already restrict folder permission changes, the roadmap says Outlook folder sharing will start honouring that for the Default and Anonymous entries, so users will find those two entries locked. Which restriction triggers that lock is not yet documented.

If you have no such restriction, nothing in the roadmap text says behaviour changes. The practical work is to find out which restrictions you have, check they cover the Default and Anonymous entries as you intend, and tell users who share folders widely, such as team-mailbox owners and calendar owners, before the target month.

## Risk assessment

**Data exposure**

- The Default entry lets any authenticated user in the organisation reach a folder, and raising Anonymous above None can expose calendar information more broadly than intended (Learn, calendar permissions). Locking both entries is the exposure this change addresses; it applies only where a restriction is enabled.
- Permissions granted directly to individual users stay editable, so a user can still share a folder with named colleagues despite the restriction, according to the roadmap item.

**Security & identity**

- No new identity or access path is described. The change narrows what folder owners can edit rather than adding access.

**Autonomy & actions**

- No change: the roadmap item describes no agent or automated action.

**Change & support**

- Users who relied on changing Default or Anonymous will find the setting locked and may raise tickets. Prepare a short explanation that the lock follows the organisation's restriction.
- Enforcement depends on a restriction being enabled. Because the roadmap does not name it, confirm after rollout that your configured restriction is the one Outlook honours, on both new Outlook for Windows and Outlook on the web.

## Cost and licensing

Microsoft has not published a licence requirement or meter for this item. The roadmap item names none, and the Learn page on restricting folder permissions lists no licence for the existing controls it describes. The cost the sources support is admin time to review restrictions and communicate with users.

No price, credit rate or cap is published. Watch the roadmap item and Message center for any licensing statement.

## Scope

The roadmap lists Outlook as the product, Desktop and Web as platforms, General Availability as the release phase and Worldwide (Standard Multi-Tenant) as the cloud. The hashtag #newoutlookforwindows suggests new Outlook for Windows; whether classic Outlook is included is not stated.

Microsoft has not said which users, licences or roles are affected beyond "your organization's restrictions". The Learn page on restricting folder permissions says policy changes made in the Microsoft 365 Apps admin center can take up to 90 minutes to reach Outlook clients, which is relevant if the restriction is set by Cloud Policy.

## Governance guidance

### Before rollout

- Identify which folder-permission restrictions your organisation has set, using the Microsoft 365 Apps admin center policy configurations and any Group Policy or registry values for classic Outlook (see the controls table).
- Decide whether the Default and Anonymous entries should be locked for each user group, and scope the Cloud Policy configuration accordingly.
- List users who legitimately change those entries, such as owners of shared calendars, and agree what route they use instead.

### At rollout

- Brief users that the Default and Anonymous settings may be unavailable while a restriction is enabled, and that sharing with named individuals is unaffected.
- Allow up to 90 minutes after changing a Cloud Policy configuration before testing on a client.

### After rollout

- Test in new Outlook for Windows and Outlook on the web that Default and Anonymous cannot be changed on a folder while the restriction is on.
- Review support tickets about locked folder permissions in the first weeks after the target month.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can change permissions on folders (all Outlook clients)</strong><br><small>User</small><br><small class="controls__note">Enable Do not allow users to change permissions on folders in a policy configuration. General control: Microsoft has not confirmed it is what this feature reads.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can edit folder permissions and default-user permissions in classic Outlook</strong><br><small>User</small><br><small class="controls__note">Classic Outlook only. General control: Microsoft has not confirmed it is what this feature reads.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry DWORD DisableEditPermissions and DisableEditDefaultUserPermissions to 1 under HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\16.0\Outlook\Options\Folders</code> <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents these existing controls for stopping users changing folder permissions. Microsoft has not confirmed they are the restrictions this roadmap item honours, so treat both rows as general controls until it does.

The Cloud Policy route applies to classic Outlook, new Outlook and Outlook on the web, and is scoped to a set of users through the policy configuration. The registry route applies to classic Outlook only, and the Permissions tab stays visible with its options greyed out. At the time of writing (November 2026), Learn documents no Default- or Anonymous-specific switch for this feature.

## Open questions

- Which existing restriction does Outlook read: the Cloud Policy settings, the classic Outlook registry values, or a new setting? Watch the roadmap item and the Learn page on restricting folder permissions.
- Does the lock apply to calendar folders as well as mail folders, and to shared mailboxes?
- Are classic Outlook and Outlook for Mac included, or only new Outlook for Windows and Outlook on the web?
- Is the default state on for tenants that already have a restriction, or must an admin opt in? Microsoft has not said, and Message center may carry the notice.

<!-- rationale
risk: Low. The change keeps sharing inside restrictions an organisation already sets and leaves permissions for individual users alone; the default state is not stated, so the exposure that remains is today's behaviour continuing.
cost: Low. The only cost the sources show is admin time to check restrictions and brief users; no licence or meter is published for this item at the time of writing (November 2026).
impact: Low. Only users who edit the Default or Anonymous entry on a folder, and only where a restriction is enabled, will notice the setting is locked; individual-user permissions are unaffected.
-->
