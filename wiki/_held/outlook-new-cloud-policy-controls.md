---
title: "Outlook: Cloud Policy controls for Outlook on the web and new Outlook for Windows"
slug: "outlook-new-cloud-policy-controls"
roadmapId: 571199
topic: "modern-work"
products: ["Outlook"]
summary: "Cloud Policy is planned to cover Outlook on the web and new Outlook for Windows, letting admins set default values and decide whether users can change them. In development; review fit once the settings are documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps. Licensing specific to the Outlook on the web and new Outlook for Windows support is not yet published."
audiences: ["m365-admin","service-owner"]
tags: ["outlook","cloud-policy","admin-controls","policy","microsoft-365-apps"]
sources:
  - title: "Roadmap item 571199: Outlook: New Cloud Policy controls"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571199"
    kind: "roadmap"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Manage All Accounts view in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view"
    kind: "learn"
  - title: "Map classic Outlook policies to new Outlook"
    url: "https://learn.microsoft.com/troubleshoot/outlook/installation/map-classic-outlook-policies-to-new-outlook"
    kind: "learn"
  - title: "Create a mailbox policy in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/create-outlook-web-app-mailbox-policy"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Default values for Outlook settings and whether users can change them (Cloud Policy)"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Configure Settings"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Route into the policy wizard. The settings this roadmap item adds are not yet listed in Learn."
  - governs: "Existing Cloud Policy example: default view and user override for All Accounts in new Outlook for Windows"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Configure Settings > Show All Accounts view for users with multiple accounts in Outlook for Windows"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view"
    api: null
    note: "Existing setting shown for the default-plus-override pattern; set Configure the unified inbox view and Allow user to override this setting. Not confirmed to be part of this roadmap item."
  - governs: "Outlook on the web feature availability through mailbox policies (today's alternative)"
    scope: "user"
    ui:
      surface: "Exchange admin center"
      path: "Roles > Outlook web app policies > policy > Manage Features > User experience > Email signature"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    api:
      kind: "powershell"
      call: "Set-OwaMailboxPolicy -SignaturesEnabled $false"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    note: "Email signature is one example. Learn says these mailbox policies also affect new Outlook for Windows. This does not set Cloud Policy defaults."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-14T23:03:47"
changes:
  - date: "2026-11-21"
    note: "New briefing: Cloud Policy support planned for Outlook on the web and new Outlook for Windows; roadmap target October CY2026 has passed with status still In development."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 48
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "62b52f091d093f25bfeae67adab20f42"
---

## What's changing

The roadmap item states that Microsoft is introducing Cloud Policy service support for Outlook on the web and new Outlook for Windows. Admins will be able to set default values for supported Outlook settings and choose whether users can change them, which the item describes as consistent cloud-based control across an organisation.

Microsoft Learn does not yet describe this feature, so what follows about its behaviour is the roadmap's description. Learn does not list which Outlook settings will be supported, and it does not say how the settings reach Outlook on the web. The roadmap record lists the platform as Web only, although the description also names new Outlook for Windows.

The roadmap shows the item as In development with a target of October CY2026 and a General Availability release phase. That target month has passed as of 21 November 2026 and the status has not moved, so treat the date as a target that has slipped or is not yet confirmed. Only Worldwide (Standard Multi-Tenant) is listed for clouds.

Cloud Policy already exists as a service: Microsoft Learn describes it as a way to enforce policy settings for Microsoft 365 Apps for enterprise on a user's device, even if the device isn't domain joined or otherwise managed, and says some policy settings can be enforced for Office for the web. Today, Learn says most Cloud Policy settings apply only to classic Outlook, and that Outlook on the web and new Outlook for Windows are mostly managed with mailbox policies in Exchange Online.

## Why it matters

If this ships as described, Outlook on the web and new Outlook for Windows would gain a second place to set defaults, next to the Exchange Online mailbox policies that Learn says apply to both clients today. Service owners who manage Outlook through mailbox policies will need to decide which tool owns which setting before the two overlap.

Microsoft has not stated what happens on arrival, so no source says existing Outlook behaviour changes. The practical task is to prepare: know which Outlook settings you already control, and who in your organisation holds the Cloud Policy roles, so that a default-plus-user-override model can be tested on a pilot group once Microsoft documents the supported settings.

## Risk assessment

**Data exposure**
- No new data access is described in the roadmap item. The change is about settings, but Learn does not yet say which settings are in scope, so a setting that affects data handling cannot be ruled in or out.

**Security & identity**
- Cloud Policy applies only to user objects in Microsoft Entra ID that hold a supported licence, so a policy takes effect through group membership. A mis-scoped group changes settings for the wrong people.
- Learn lists Office Apps Administrator, Security Administrator and Global Administrator as the built-in roles for Cloud Policy, so whoever holds them can change Outlook defaults once the settings exist.

**Autonomy & actions**
- No autonomous behaviour is described. Policies are set by an admin, and Learn describes priority order deciding which policy wins when a user belongs to several groups with conflicting settings.

**Change & support**
- Where a setting can be set in both a Cloud Policy and an Exchange mailbox policy, Learn does not say which wins for Outlook on the web. Settle ownership before enabling both, or support teams will see users whose setting differs from either console.
- Letting users override a default means two users in the same group can see different settings. Locking a setting removes the user's ability to change it.

## Cost and licensing

Microsoft's Cloud Policy requirements page says Cloud Policy supports most Microsoft 365 subscription plans that include Microsoft 365 Apps, and tells admins to check their licensing documentation for specific requirements. It also says policies apply to user objects that have a supported licence assigned.

The page names no separate charge or meter for Cloud Policy. A licence or meter specific to Outlook on the web and new Outlook for Windows support is not yet published. The indirect cost is admin time to choose settings, target groups and test them.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and the General Availability phase. The description also names new Outlook for Windows. Absence from other clouds on the roadmap item is a record fact, not a statement that the feature is unavailable there.

Cloud Policy is configured in the Microsoft 365 Apps admin center and targets Microsoft Entra groups; Learn says nested groups are supported up to three levels deep. For new Outlook for Windows, Learn says app-wide settings such as Theme and Diagnostic Data and Connected Experiences are associated with the first account added, so those depend on the primary account. Which settings this item adds, and whether they behave the same way, is not yet documented.

## Governance guidance

### Before rollout
- Inventory the Outlook settings you already control through Exchange Online mailbox policies (Exchange admin center > Roles > Outlook web app policies) and through Cloud Policy, so you know where a default would come from.
- Identify who holds the Office Apps Administrator role, which Learn recommends for Cloud Policy, and avoid using Global Administrator for routine policy work.
- Decide which user groups are the pilot, and confirm their members are user objects in Microsoft Entra ID with a supported licence.

### At rollout
- Watch the Microsoft 365 roadmap item 571199 and Message center for the supported-settings list and a rollout date, then open the Cloud Policy settings list in the Microsoft 365 Apps admin center and search for the new Outlook settings.
- Create a policy configuration for the pilot group only, and set priority so a broad policy does not override it.
- Choose per setting whether users keep the ability to change the default, and record the choice.

### After rollout
- Compare what pilot users see in Outlook on the web and new Outlook for Windows with what the policy sets, and with any mailbox policy that touches the same setting.
- Search the Microsoft Purview audit log for changes to policy configurations, settings and priority order, which Learn says Cloud Policy records when auditing is enabled.
- Brief the service desk on which settings are locked and which users can still change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default values for Outlook settings and whether users can change them (Cloud Policy)</strong><br><small>Group</small><br><small class="controls__note">Route into the policy wizard. The settings this roadmap item adds are not yet listed in Learn.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Configure Settings <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Existing Cloud Policy example: default view and user override for All Accounts in new Outlook for Windows</strong><br><small>Group</small><br><small class="controls__note">Existing setting shown for the default-plus-override pattern; set Configure the unified inbox view and Allow user to override this setting. Not confirmed to be part of this roadmap item.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Configure Settings › Show All Accounts view for users with multiple accounts in Outlook for Windows <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Outlook on the web feature availability through mailbox policies (today's alternative)</strong><br><small>User</small><br><small class="controls__note">Email signature is one example. Learn says these mailbox policies also affect new Outlook for Windows. This does not set Cloud Policy defaults.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Roles › Outlook web app policies › policy › Manage Features › User experience › Email signature <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OwaMailboxPolicy -SignaturesEnabled $false</code> <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Cloud Policy settings are created by an administrator with one of the Microsoft Entra roles Learn lists for Cloud Policy: Office Apps Administrator (recommended), Security Administrator or Global Administrator. Priority order decides which setting applies where a user is in several targeted groups.

The second row shows how an existing new Outlook for Windows setting already pairs a default with a user-override choice; Learn does not say the roadmap item covers that setting. The Exchange mailbox policy row is today's alternative for Outlook on the web and new Outlook for Windows. It does not set the Cloud Policy defaults this item describes. Learn says most mailbox policies apply to both clients, so you cannot enable them on one client but not the other.

## Open questions

- Which Outlook settings will Cloud Policy cover for Outlook on the web and new Outlook for Windows, and where will Learn list them? Watch the roadmap item and the Cloud Policy and Outlook policy management pages.
- What happens on arrival: are the new policies unconfigured until an admin sets them, or does any setting start enforcing? Microsoft has not stated a default.
- When a Cloud Policy and an Exchange mailbox policy set the same Outlook on the web setting, which applies, and how quickly do Cloud Policy changes reach the web client?
- Does Cloud Policy support for Outlook on the web need a licence beyond the plans that include Microsoft 365 Apps, and is it available in clouds other than Worldwide?
- Is there a PowerShell or Graph operation to manage Cloud Policy configurations for these settings?

<!-- rationale
risk: Low. The roadmap describes a new admin control that sets defaults; Microsoft has not stated a default state, so this rates today's Outlook behaviour continuing until an admin configures a policy.
cost: Low. Admin time to design and test policies is the only cost the sources show; Learn names no separate meter for Cloud Policy, and licensing specific to this feature is not yet published.
impact: Low. Admins configure it; users notice only the Outlook settings an admin chooses to set or lock for their group, and Microsoft has not yet said which settings are covered.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Governance controls table / behaviour: The All Accounts example tells administrators to set Configure the unified inbox view and Allow user to override this setting without stating that the policy must first be Enabled. | Found: Open the policy and set Configuration setting to Enabled. This activates the policy; the additional settings below determine the view and whether users can change it. | Fix: Replace the note's instruction with 'Set Configuration setting to Enabled first, then set Configure the unified inbox view and Allow user to override this setting.' Keep the existing caveat that the setting is not confirmed as part of this roadmap item. Apply the same replacement in the rendered table. See https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Microsoft 365 Apps admin center > Customization > Policy Management > Policy configurations > Create > Configure Settings reaches the Cloud Policy settings wizard. | Found: Under Customization, select Policy Management. ... On the Choose the scope page, determine whether the policy configuration applies to all users, specific groups ... On the Configure Settings page, select the policies | Fix: Complete the wizard route as 'Customization > Policy Management > Policy configurations > Create > Choose the scope > specific groups > Configure Settings', retaining the note that this roadmap item's settings are not yet listed. The omitted scope selection is documented at https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] controls[1].ui / admin-path: The All Accounts path reaches its named Cloud Policy on Configure Settings. | Found: Under Customization, select Policy Management. ... On Configure Settings, search for Show All Accounts view for users with multiple accounts in Outlook for Windows. Open the policy and set Configuration setting to Enabled. | Fix: Extend the path to 'Customization > Policy Management > policy configuration > Configure Settings > Show All Accounts view for users with multiple accounts in Outlook for Windows > Configuration setting'. The current route stops on the right policy but before its activation control. See https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view
- [supported, minor] controls[2].ui; Governance guidance: Before rollout / admin-path: Exchange admin center > Roles > Outlook web app policies > policy > Manage Features > User experience > Email signature reaches the signature control. | Found: click on the name of the policy > select Manage Features in the Features section > expand the User experience section > uncheck Email signature | Fix: Use 'Roles > Outlook web app policies > policy > Features > Manage Features > User experience > Email signature' in the row and table. The missing Features heading is on the cited page; the Roles entry is independently supported by the already-cited https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/create-outlook-web-app-mailbox-policy, so the pre-check's missing word is not a blocker. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist asks readers to search the Microsoft Purview audit log, but the controls table has no audit row. | Found: Search the Microsoft Purview audit log for changes to policy configurations, settings and priority order ... The table contains only Cloud Policy defaults, All Accounts view and Exchange mailbox feature controls. | Fix: Remove the audit-log search bullet from 'After rollout' so the checklist agrees with the existing controls table; do not add a control row as part of this correction.
-->
