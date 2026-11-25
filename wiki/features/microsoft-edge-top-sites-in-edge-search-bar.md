---
title: "Microsoft Edge: top sites in the Edge search bar"
slug: "microsoft-edge-top-sites-in-edge-search-bar"
roadmapId: 579193
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft plans to show top sites in the Edge desktop search bar. Two existing Edge policies control it. Review them before the January CY2027 target; no administrator action is required by Microsoft's record."
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
  notes: "Not yet published. The roadmap item and the two policy pages name no licence for this feature, and the Microsoft Edge for Business page opened for this briefing states none."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["microsoft-edge","policy","user-experience","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 579193"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579193"
    kind: "roadmap"
  - title: "NewTabPageQuickLinksEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagequicklinksenabled"
    kind: "learn"
  - title: "NewTabPageManagedQuickLinks"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagemanagedquicklinks"
    kind: "learn"
  - title: "Microsoft Edge for Business"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-for-business"
    kind: "learn"
  - title: "Microsoft Edge - Policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether quick links and Top Sites in the search bar are shown"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Startup, home page and new tab page > Allow quick links on the new tab page"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagequicklinksenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value NewTabPageQuickLinksEnabled (REG_DWORD); macOS preference key NewTabPageQuickLinksEnabled"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagequicklinksenabled"
    note: "Disabling it hides quick links and Top Sites in the search bar. The policy description lists Microsoft account profiles, but the same page marks Microsoft-account applicability as No; applicability to those profiles is unclear."
  - governs: "Which managed tiles appear in quick links and Top Sites in the search bar"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Startup, home page and new tab page > Set new tab page quick links"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagemanagedquicklinks"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value NewTabPageManagedQuickLinks (REG_SZ); macOS preference key NewTabPageManagedQuickLinks"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagemanagedquicklinks"
    note: "Up to three tiles. Mandatory pins all tiles and users cannot delete them; recommended lets users edit and delete. Requires a browser restart."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-18"
    note: "First briefing for roadmap item 579193; controls are the two Edge quick links policies that Learn ties to Top Sites in the search bar."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the Microsoft account applicability of NewTabPageQuickLinksEnabled: its description lists those profiles but the page marks Microsoft-account applicability as No, so it is now stated as unclear."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 72 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 66 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "070d24940ae15527bfb3fccd9369e384"
---

## What's changing

The roadmap item says Microsoft is adding easy access to top sites in the Microsoft Edge search bar on desktop. According to the item, users can add, edit, remove or hide top sites, and administrators can control availability with the NewTabPageManagedQuickLinks and NewTabPageQuickLinksEnabled policies.

Microsoft Learn has no page for the feature itself at the time of writing (November 2026), so what follows about behaviour is the roadmap's description plus what the two policy pages state. Both pages link their policy to this feature: the NewTabPageManagedQuickLinks page says "Quick links configured by this policy are also included in Top Sites in the Microsoft Edge search bar", and the NewTabPageQuickLinksEnabled page says "Disabling this policy also hides Top Sites in the Microsoft Edge search bar."

The roadmap status is In development, with a target date of January CY2027 and a release phase of General Availability. The cloud listed is Worldwide (Standard Multi-Tenant) and the platform listed is Web. These dates are Microsoft's targets, not commitments.

## Why it matters

This is a small interface change, but it adds a visible list of sites to a surface users open all day. Microsoft has not stated whether it appears by default or has to be switched on, so plan on the assumption that some desktop users may see it from the target date.

The useful part for a service owner is that the controls exist already. If your organisation fixes new tab page quick links or hides them, those same settings are documented to carry over to the search bar, so the work is a check of current policy, not a new rollout.

## Risk assessment

**Data exposure**

- Top sites are a list of sites shown in the browser. The NewTabPageManagedQuickLinks page says Edge builds new tab page quick links from "user-added shortcuts and top sites based on browsing history". Whether search bar top sites use the same source is not documented, so treat it as a possible place where frequently visited site names are visible on screen, for example during screen sharing.

**Security & identity**

- No change documented: the roadmap item describes no new data access, sign-in or permission.

**Autonomy & actions**

- No change documented: the feature is a list users act on themselves; the roadmap describes no action taken on a user's behalf.

**Change & support**

- Administrators who pin tiles through NewTabPageManagedQuickLinks will also see them in the search bar. Set as mandatory, the policy page says the tiles "can't be deleted by the user", which may prompt support questions if users expect to remove them.
- The NewTabPageQuickLinksEnabled page says it applies to local user profiles and Active Directory profiles. The policy description lists Microsoft account profiles, but the same page marks Microsoft-account applicability as No; applicability to those profiles is unclear. The page also points to the M365 admin portal for the Enterprise new tab page on profiles signed in with Microsoft Entra ID (the page still calls it Azure Active Directory). Confirm which route governs your users' profiles before relying on the policy.

## Cost and licensing

No licence, meter or price for this feature is published at the time of writing (November 2026). The roadmap item names none, the two policy pages name none, and the Microsoft Edge for Business page lists no licence for the browser features it covers.

The cost the sources show is admin time: reviewing two Group Policy settings and telling users what to expect. Nothing in the sources describes a cap, a budget control or storage cost.

## Scope

The roadmap item describes the feature as being for the Edge search bar on desktop. It lists the cloud as Worldwide (Standard Multi-Tenant), the platform as Web and the release phase as General Availability.

Both policy pages list Windows and macOS as supported (NewTabPageManagedQuickLinks from version 79, NewTabPageQuickLinksEnabled from version 91) and Android and iOS as not supported. The pages do not state which Edge version first shows top sites in the search bar, or how the rollout is staged. NewTabPageQuickLinksEnabled applies to local user profiles and Active Directory profiles; its description lists Microsoft account profiles, but the same page marks Microsoft-account applicability as No, so applicability to those profiles is unclear. For profiles signed in with Microsoft Entra ID it points to the M365 admin portal.

## Governance guidance

### Before rollout

- Check whether NewTabPageQuickLinksEnabled or NewTabPageManagedQuickLinks is already set in your Group Policy or registry baseline, because both are documented to affect Top Sites in the search bar.
- Decide whether users should see top sites in the search bar at all, and if not, plan to disable NewTabPageQuickLinksEnabled.
- Identify which of your users sign in with Microsoft Entra ID profiles, because the NewTabPageQuickLinksEnabled page sends those to the M365 admin portal.

### At rollout

- Test the policies on a pilot group on desktop Edge once the feature reaches your channel, and confirm that disabling NewTabPageQuickLinksEnabled hides the search bar list as the policy page says.
- Brief the help desk that mandatory NewTabPageManagedQuickLinks tiles cannot be deleted by users.
- Tell users, if the list is left on, that the roadmap says they can add, edit, remove or hide top sites.

### After rollout

- Recheck the Microsoft Learn policy pages and Message center for a page that describes the feature itself.
- Review support tickets for questions about missing or unremovable tiles and adjust the policy or the guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether quick links and Top Sites in the search bar are shown</strong><br><small>User</small><br><small class="controls__note">Disabling it hides quick links and Top Sites in the search bar. The policy description lists Microsoft account profiles, but the same page marks Microsoft-account applicability as No; applicability to those profiles is unclear.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Startup, home page and new tab page › Allow quick links on the new tab page <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagequicklinksenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value NewTabPageQuickLinksEnabled (REG_DWORD); macOS preference key NewTabPageQuickLinksEnabled</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagequicklinksenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which managed tiles appear in quick links and Top Sites in the search bar</strong><br><small>User</small><br><small class="controls__note">Up to three tiles. Mandatory pins all tiles and users cannot delete them; recommended lets users edit and delete. Requires a browser restart.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Startup, home page and new tab page › Set new tab page quick links <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagemanagedquicklinks" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value NewTabPageManagedQuickLinks (REG_SZ); macOS preference key NewTabPageManagedQuickLinks</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/newtabpagemanagedquicklinks" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are Edge policies that the roadmap item names and that Microsoft's own policy pages tie to Top Sites in the search bar. NewTabPageQuickLinksEnabled hides the list; NewTabPageManagedQuickLinks sets up to three tiles that also appear in it. Neither page describes a setting that governs only the search bar list, and the pages document no setting that stops individual users from hiding sites, which the roadmap says they can do.

NewTabPageQuickLinksEnabled can be mandatory but not recommended. NewTabPageManagedQuickLinks can be either; as recommended, users can edit and delete the pinned tiles. NewTabPageManagedQuickLinks needs a browser restart to take effect, while NewTabPageQuickLinksEnabled supports dynamic refresh.

## Open questions

- Does top sites in the search bar appear by default on arrival, or must a user or administrator turn it on? Watch the Microsoft 365 roadmap item and Message center.
- Which Edge version and release channel first shows it, and is the rollout staged by tenant or by profile type?
- Does NewTabPageQuickLinksEnabled govern the search bar list for profiles signed in with Microsoft Entra ID, given that its page points those profiles to the M365 admin portal?
- Is any licence or plan required? None is published at the time of writing.

<!-- rationale
risk: Low. It is a browser interface change on desktop, and two documented Edge policies already hide or fix the top sites, so little exposure is left if nobody configures them.
cost: Low. The only cost the sources show is admin time to review two Group Policy settings; a licence for this feature is not yet published.
impact: Medium. Desktop Edge users would see a new list in the search bar and can add, edit, remove or hide sites, according to the roadmap; the rollout scope is not stated.
-->
