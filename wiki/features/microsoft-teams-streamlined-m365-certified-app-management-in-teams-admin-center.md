---
title: "Microsoft Teams: manage Microsoft 365 certified apps through org-wide third-party app settings"
slug: "microsoft-teams-streamlined-m365-certified-app-management-in-teams-admin-center"
roadmapId: 485712
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Admins can allow third-party Teams apps through org-wide settings, with Microsoft 365 certified apps flagged in the Teams admin center. Microsoft's notice says no settings change without admin action; review fit."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn says each user needs a Teams licence to use Teams. The Manage apps page names the Teams Administrator role and no separate licence; no feature-specific licence or price is published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","app-management","admin-center","governance","third-party-apps","app-certification"]
sources:
  - title: "Microsoft 365 Roadmap 485712"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=485712"
    kind: "roadmap"
  - title: "MC796790: (Updated) Unified management of app and agent availability and installation in Teams, Outlook, and the Microsoft 365 app"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC796790"
    kind: "message-center"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Unified agent and app management"
    url: "https://learn.microsoft.com/microsoftteams/uam-tac-mac"
    kind: "learn"
  - title: "App compliance program for security, data handling, and privacy"
    url: "https://learn.microsoft.com/microsoftteams/overview-of-app-certification"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Purchase third-party Microsoft Teams apps and manage subscriptions and licenses"
    url: "https://learn.microsoft.com/microsoftteams/purchase-third-party-apps"
    kind: "learn"
  - title: "teamsAppSettings resource type"
    url: "https://learn.microsoft.com/graph/api/resources/teamsappsettings"
    kind: "learn"
  - title: "Grant and manage consent to Teams app permissions"
    url: "https://learn.microsoft.com/microsoftteams/manage-consent-app-permissions"
    kind: "learn"
  - title: "Understand the permissions and information accessed by Teams apps"
    url: "https://learn.microsoft.com/microsoftteams/app-permissions"
    kind: "learn"
videos: []
related: ["microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app"]
controls:
  - governs: "Bulk availability of all new and existing third-party apps in the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Learn calls it a single control for new and existing third-party apps. It does not override app-level settings. Needs the Teams Administrator role."
  - governs: "Whether a specific app is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Use for certified apps one at a time. The reference's example text describes -IsBlocked $true as unblocking, so test the value's effect on one app first."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-04-21T23:00:01"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: Microsoft's notice MC796790 says certified app management through org-wide third-party settings is fully rolled out, while the roadmap shows Rolling out."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: the Third-party apps control exempts individually saved and blocked apps; removed checklist steps with no controls row; added two consent and permissions sources."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "403f618f1260f15c59e897ff3d3413ee"
---

## What's changing

The roadmap item says Microsoft 365 administrators can enable Microsoft 365 certified SaaS applications in their tenant through the org-wide settings for third-party apps, and can choose to allow a subset of applications that have already been verified against industry security and compliance standards.

Microsoft's notice MC796790 places this in Phase 2 of its unified app and agent availability rollout: "we will also enable administrators to manage Microsoft 365 certified SaaS applications within their tenant through org-wide settings for third-party apps. This has been rolled out completely for all tenants." The roadmap item still shows the status Rolling out, with a target of April CY2026, so the two sources differ on how complete the rollout is.

Microsoft Learn describes the pieces around this. On the Manage apps page, **Org-wide app settings** has a **Third-party apps** control that Learn calls "a single control" for the bulk availability of new and existing third-party agents and apps. The page also has an **Apps to consider allowing** tile that counts Microsoft 365 certified and publisher-attested apps, and each app's details page has a **Security and Compliance** tab. Learn does not describe a certified-only option inside the Third-party apps control at the time of writing (November 2026), so how an admin allows "a subset" of certified apps is an open question below.

The roadmap record lists Worldwide (Standard Multi-Tenant), General Availability and the Web platform.

## Why it matters

This change is aimed at the approval workload: the roadmap says it reduces approval overhead while keeping governance. In practice an admin gets a way to see which apps carry Microsoft 365 certification and to allow them without reviewing every app from scratch.

If nobody acts, Microsoft's notice says no changes are applied to org-wide or app-level settings for this phase without administrator action. Your current third-party app posture therefore stays as it is. The risk is the opposite one: the Third-party apps control changes the default availability of new apps and existing apps whose availability you have not individually configured; it is not limited to certified apps. Individually saved availability settings and blocked apps are exempt. A certification-based policy therefore has to be applied app by app unless Microsoft documents a narrower option.

## Risk assessment

**Data exposure**
- The Third-party apps control changes the default availability of new apps and existing apps whose availability you have not individually configured; it is not limited to certified apps. Individually saved availability settings and blocked apps are exempt. Turning it on to reach certified apps can therefore also make uncertified apps available to users, who can then share data with them. Mitigate by managing apps individually in Manage apps.
- Certification is vendor-attested and audited against industry frameworks; it does not replace your own review of what data an app reads. Each app's Security and Compliance tab and privacy policy link are the places to check.

**Security & identity**
- Microsoft Learn says app consent to permissions is a separate step in the Teams admin center, so allowing an app does not remove the need to review its permissions.
- Only a Global admin can give the final consent to move a tenant to unified app management in the cases Learn describes; Teams or Global admins can prepare changes up to the review summary.

**Autonomy & actions**
- No change documented: the feature governs availability of apps and agents, and the sources describe no autonomous behaviour.

**Change & support**
- Settings saved in Org-wide app settings take effect after a few hours, so users may see apps appear or vanish with a delay.
- After migration to app-centric management the org-wide third-party toggle does not override app-level settings, so an app you set individually keeps its setting when you flip the bulk control.
- In unified tenants, changes in the Teams admin center and Microsoft 365 admin center synchronise, so a change in one portal reaches the other.

## Cost and licensing

Microsoft Learn says each user must have a Teams licence before using Teams (Manage Teams licenses). The Manage apps page names the Teams Administrator role as the requirement for the Teams admin center and names no separate licence for org-wide app settings or the certified-app views. No licence, meter or price specific to this feature is published, and the roadmap record names none.

Indirect costs are admin time to review the Apps to consider allowing tile and each app's compliance information, and the apps themselves: Learn says some third-party Teams apps need a paid SaaS subscription, bought from AppSource or the Manage apps page.

## Scope

- **Clouds**: the roadmap record lists Worldwide (Standard Multi-Tenant) only. Learn separately says that in GCC, GCC High and DoD deployments all third-party agents and apps are blocked by default.
- **Platform**: Web (the Teams admin center), per the roadmap record.
- **Roles**: Learn says you need a Teams Administrator role to use the Teams admin center. Higher-privilege roles can also do these tasks, but Learn recommends the lower-privilege role.
- **Rollout**: Microsoft's notice MC796790 says this part of Phase 2 is fully rolled out to all tenants; the roadmap shows Rolling out. Learn notes that you can only view and manage apps deployed in the same release channel as your tenant.
- **Prerequisite**: the Third-party apps control in the form Learn describes belongs to tenants migrated to app-centric management; Learn says tenants were automatically migrated from April 2025.

## Governance guidance

### Before rollout
- Record the current state of the Third-party apps control in Org-wide app settings so you can restore it.

### At rollout
- Allow certified apps one by one on the Manage apps page rather than flipping the bulk Third-party apps control, unless you intend to enable third-party apps governed by the org-wide default.
- Allow a few hours for saved org-wide settings to take effect before testing as a user.

### After rollout
- Compare the Manage apps list against your approved set and block anything unapproved.
- Re-read MC796790 and the Learn page for the unified management phases, which Microsoft says will bring further changes with at least 60 days' notice.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Bulk availability of all new and existing third-party apps in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Learn calls it a single control for new and existing third-party apps. It does not override app-level settings. Needs the Teams Administrator role.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Third-party apps <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a specific app is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Use for certified apps one at a time. The reference's example text describes -IsBlocked $true as unblocking, so test the value's effect on one app first.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Manage apps page says both org-wide and user-level availability settings must allow an app. The app-centric management page qualifies this: org-wide defaults do not apply to individually saved app availability or blocked apps.

The **Third-party apps** control does not override app-level configurations, per the app-centric management page. The Teams app permission policies are described by Learn as deprecated for tenants on app-centric management, so do not rely on them. Microsoft Learn documents no PowerShell or Microsoft Graph setting for the org-wide Third-party apps control at the time of writing (November 2026); the Graph teamsAppSettings resource lists two other properties. The per-app row does have a cmdlet.

## Open questions

- How does an administrator allow only Microsoft 365 certified apps, as the roadmap description says? Learn describes the Third-party apps control as a single control and documents no certified-only option. Watch the Manage apps page on Learn and MC796790.
- Is the item fully rolled out, as MC796790 states, or still Rolling out, as the roadmap shows? Watch the roadmap item for a status change.
- Is there an API or PowerShell setting for the org-wide Third-party apps control? Watch the teamsAppSettings Graph reference.
- Does the certification-based view reach GCC, GCC High and DoD tenants? The roadmap lists Worldwide only; watch the roadmap item.

<!-- rationale
risk: Low. Microsoft's notice MC796790 says no org-wide or app-level settings are changed without administrator action; exposure grows only if an admin allows more third-party apps.
cost: Low. The only cost the sources show is admin time to review apps; a Teams licence is needed to use Teams, and some third-party apps sell their own subscriptions. No feature-specific charge is published.
impact: Low. Teams administrators notice first; users see a change only when an admin alters which third-party apps are available.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Each user needs a Teams licence before using Teams. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Qualify the licensing sentence and repeated notes as: 'Except for joining Teams meetings anonymously, each user in your organization needs a Teams licence before using Teams.' The exception does not change the licence needed to use the apps discussed here. Source: https://learn.microsoft.com/microsoftteams/user-access. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [supported, minor] Governance guidance: After rollout / record: Microsoft promises at least 60 days' notice for further unified-management changes. | Found: 3. Phase 3 – Automatic Unification (Future) ... We will inform customers of the timeline and additional details at least 60 days in advance before this phase begins. | Fix: Replace the last After rollout bullet with: 'Re-read MC796790 and the Learn page for the unified management phases; Microsoft says it will announce the timeline and additional details for Phase 3 automatic availability unification at least 60 days before that phase begins.'
-->
