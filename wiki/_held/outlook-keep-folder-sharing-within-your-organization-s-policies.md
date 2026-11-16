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
  notes: "Not yet published. The roadmap item names no licence, and the Learn page on restricting folder permissions lists no licence requirement for the existing controls it describes."
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
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can change permissions on folders (classic Outlook, new Outlook and Outlook on the web)"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions"
    api: null
    note: "Create a policy configuration, then enable Turn off sharing recommendation, Do not allow users to change permissions on folders and Control Calendar Sharing; select Update. Not confirmed as what this feature reads."
  - governs: "Whether users can edit folder permissions and default-user permissions in classic Outlook"
    scope: "user"
    ui: null
    api:
      kind: "other"
      call: "Set registry DWORD DisableEditPermissions and DisableEditDefaultUserPermissions to 1 under HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Office\\16.0\\Outlook\\Options\\Folders"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions"
    note: "Classic Outlook only; can be set directly or through Group Policy. Not confirmed as what this feature reads."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item; the roadmap record is the only source on the feature itself."
  - date: "2026-11-16"
    note: "Corrected the Default definition, the full Cloud Policy procedure and client coverage; added Cloud Policy timing and roles."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 51
  unconfirmed: 1
  contradicted: 1
  attempts: 2
---

## What's changing

Outlook folder sharing is to respect your organisation's restrictions for Default and Anonymous permissions. The roadmap item states that when these restrictions are enabled, users will not be able to change either setting, and that permissions granted directly to individual users remain unaffected. The item is tagged #newoutlookforwindows and lists Desktop and Web as platforms.

In Exchange Online calendars, Default applies to authenticated users in the organisation who have no explicit permission entry, and Anonymous applies to callers who are not authenticated and do not have access through a calendar-sharing relationship. Microsoft's Learn page on calendar permissions gives their typical values as AvailabilityOnly and None. That page describes calendars; the roadmap item does not say which folders the change covers.

Microsoft Learn does not describe this feature yet, so what is said above about its behaviour is the roadmap's description. In particular, Microsoft has not said which restriction the feature reads. Learn documents existing ways to stop users changing folder permissions (see the controls table), but no page confirms they are the restrictions this item refers to.

The roadmap lists the item as In development with a target of January CY2027, for General Availability in Worldwide (Standard Multi-Tenant). The date is a target, not a commitment.

## Why it matters

This closes a possible gap between policy and what users can do in the client. If you already restrict folder permission changes, the roadmap says Outlook folder sharing will honour that for the Default and Anonymous entries, so users will find those two entries locked. Which restriction triggers that lock is not yet documented.

If you have no such restriction, nothing in the roadmap text says behaviour changes. The practical work is to find out which restrictions you have, check they cover the Default and Anonymous entries as you intend, and tell users who share folders widely, such as calendar owners, before the target month.

## Risk assessment

**Data exposure**

- Default sets the baseline for authenticated users in the organisation who have no explicit entry, and Microsoft's calendar page says raising Anonymous above None can expose calendar information more broadly than intended. Locking both entries addresses that, but only where a restriction is enabled.
- Permissions granted directly to individual users stay editable, according to the roadmap item, so a user can still share a folder with named colleagues despite the restriction.

**Security & identity**

- No new identity or access path is described. The change narrows what folder owners can edit rather than adding access.

**Autonomy & actions**

- No change: the roadmap item describes no agent or automated action.

**Change & support**

- Users who relied on changing Default or Anonymous will find the setting locked and may raise tickets. Prepare a short explanation that the lock follows the organisation's restriction.
- Enforcement depends on a restriction being enabled. Because the roadmap does not name it, confirm after rollout that your configured restriction is the one Outlook honours, on both new Outlook for Windows and Outlook on the web.

## Cost and licensing

Microsoft has not published a licence requirement or meter for this item. The roadmap item names none, and the Learn page on restricting folder permissions names no licence for the existing controls it describes. For the Cloud Policy route, the Cloud Policy overview says it supports most Microsoft 365 subscription plans that include Microsoft 365 Apps.

The cost the sources support is admin time to review restrictions and communicate with users. No price, credit rate or cap is published. Watch the roadmap item and Message center for any licensing statement.

## Scope

The roadmap lists Outlook as the product, Desktop and Web as platforms, General Availability as the release phase and Worldwide (Standard Multi-Tenant) as the cloud. The hashtag #newoutlookforwindows suggests new Outlook for Windows; whether classic Outlook is included is not stated.

Microsoft has not said which users, licences or roles are affected beyond "your organization's restrictions". For the existing Cloud Policy route, the Cloud Policy overview lists Office Apps Administrator (recommended), Security Administrator and Global Administrator as roles that can manage it. The folder-permission page says a change can take up to 90 minutes to reach Outlook clients.

## Governance guidance

### Before rollout

- Identify which folder-permission restrictions your organisation has set: Cloud Policy configurations in the Microsoft 365 Apps admin center and, for classic Outlook, any Group Policy or registry values (see the controls table).
- Decide whether the Default and Anonymous entries should be locked for each user group, and scope the policy configuration to those groups.
- List users who legitimately change those entries, such as owners of shared calendars, and agree what route they use instead.

### At rollout

- Brief users that the Default and Anonymous settings may be unavailable while a restriction is enabled, and that sharing with named individuals is unaffected.
- Allow for the Cloud Policy timing before testing a client: up to 90 minutes after a configuration changes, policies apply when the Office app is restarted, and a user with no assigned configuration checks back every 24 hours.

### After rollout

- Test in new Outlook for Windows and Outlook on the web that Default and Anonymous cannot be changed on a folder while the restriction is on.
- Review support tickets about locked folder permissions in the first weeks after the target month.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can change permissions on folders (classic Outlook, new Outlook and Outlook on the web)</strong><br><small>User</small><br><small class="controls__note">Create a policy configuration, then enable Turn off sharing recommendation, Do not allow users to change permissions on folders and Control Calendar Sharing; select Update. Not confirmed as what this feature reads.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can edit folder permissions and default-user permissions in classic Outlook</strong><br><small>User</small><br><small class="controls__note">Classic Outlook only; can be set directly or through Group Policy. Not confirmed as what this feature reads.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>Set registry DWORD DisableEditPermissions and DisableEditDefaultUserPermissions to 1 under HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\16.0\Outlook\Options\Folders</code> <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents these existing controls for stopping users changing folder permissions. Microsoft has not confirmed they are the restrictions this roadmap item honours, so treat both rows as general controls until it does. At the time of writing (November 2026), Learn documents no Default- or Anonymous-specific switch for this feature.

The Cloud Policy route is scoped to a set of users through the policy configuration; the Cloud Policy overview lists Office Apps Administrator, Security Administrator and Global Administrator as roles that can manage it. The registry route applies to classic Outlook only, and the Permissions tab stays visible with its options greyed out.

## Open questions

- Which existing restriction does Outlook read: the Cloud Policy settings, the classic Outlook registry values, or a new setting? Watch the roadmap item and the Learn page on restricting folder permissions.
- Does the lock apply to calendar folders as well as mail folders, and to shared mailboxes?
- Are classic Outlook and Outlook for Mac included, or only new Outlook for Windows and Outlook on the web?
- Is the lock on by default for tenants that already have a restriction, or must an admin opt in? Microsoft has not said; watch Message center for a notice.

<!-- rationale
risk: Low. The change keeps folder sharing inside restrictions an organisation already sets and leaves permissions for individual users alone; the default state is not stated, so the exposure that remains is today's behaviour continuing.
cost: Low. The only cost the sources show is admin time to check restrictions and brief users; no licence or meter is published for this item at the time of writing (November 2026).
impact: Low. Only users who edit the Default or Anonymous entry on a folder, and only where a restriction is enabled, will notice the setting is locked; individual-user permissions are unaffected.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] Cost and licensing: Cloud Policy subscription support / licensing: For the folder-permission Cloud Policy route, the briefing gives support for most Microsoft 365 plans including Microsoft 365 Apps without the Apps for business policy restriction. | Found: You can create a policy configuration for Microsoft 365 Apps for business, but only policy settings related to privacy controls are supported. | Fix: After the Cloud Policy subscription sentence, add: 'For Microsoft 365 Apps for business, Cloud Policy supports only privacy-control policy settings; do not assume that subscription supports these folder-permission policies. Cloud Policy configurations also cannot be applied to volume-licensed Click-to-Run Office.' Cite the existing Cloud Policy overview. Keep this general-control qualification separate from the still-unpublished licensing for the roadmap feature. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [unsupported, major] Risk assessment: Data exposure, second bullet / behaviour: Named-user permissions stay editable, so users can still share a folder with named colleagues despite the restriction. | Found: Searched: Outlook Default Anonymous restrictions permissions. Read roadmap: existing grants remain unaffected; opened Restrict users from changing folder permissions: its general controls disable permission editing. No promise of continued named-user editing found. | Fix: Replace the bullet with 'Permissions granted directly to individual users remain unaffected, according to the roadmap item.' Remove 'stay editable' and the promise of continuing to create named-user shares: neither the record nor the cited documentation establishes that distinction for the new feature.
-->
