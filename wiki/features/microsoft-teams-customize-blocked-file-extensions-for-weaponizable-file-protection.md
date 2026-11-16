---
title: "Microsoft Teams: customise the file types blocked by Weaponizable File Protection"
slug: "microsoft-teams-customize-blocked-file-extensions-for-weaponizable-file-protection"
roadmapId: 571298
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams administrators will be able to replace Microsoft's fixed list of blocked file extensions with their own. Nothing changes unless you act, but a shorter custom list stops automatic list updates."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn page for Weaponizable File Protection names no licence, and neither the roadmap record nor Microsoft's notice MC1509801 mentions a charge."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","admin-controls","powershell","governance","weaponizable-file-protection"]
sources:
  - title: "MC1509801: (Updated) Microsoft Teams: Customize file extensions blocked by Weaponizable File Protection"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1509801"
    kind: "message-center"
  - title: "Weaponizable File Protection in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/weaponizable-file-protection-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    kind: "learn"
  - title: "Microsoft Teams: Customize blocked file extensions for Weaponizable File Protection"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571298"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Which file extensions are blocked (custom list)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingConfiguration -FileTypeCustomizationSetting CustomBlockList -FileTypeBlockList <string[]>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    note: "Documented on Learn while the roadmap item is In development. Not available in GCC, GCCH and DOD per the reference."
  - governs: "Return to the Microsoft-recommended list and its updates"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingConfiguration -FileTypeCustomizationSetting MicrosoftRecommendedBlockList"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    note: "Default value. Clears FileTypeBlockList. MC1509801 says admins can reset at any time to resume automatic updates."
  - governs: "Whether Weaponizable File Protection is on"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Messaging settings > Messaging safety > Scan messages for file types that are not allowed"
      docs: "https://learn.microsoft.com/microsoftteams/weaponizable-file-protection-teams"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingConfiguration -FileTypeCheck Enabled|Disabled -Identity Global"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    note: "Existing control. It switches the protection on or off; it does not change which extensions are blocked."
  - governs: "Different blocked lists for different users or groups"
    scope: "user"
    ui: null
    api: null
    note: "No per-user or per-group list is documented; the setting is a tenant messaging configuration."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item, covering the planned customisable block list and the PowerShell parameters already documented on Learn."
version: 1
verification:
  status: "verified"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
---

## What's changing

Microsoft plans to let Teams administrators choose which file extensions Weaponizable File Protection blocks, or keep using the Microsoft-recommended list. The roadmap item and Microsoft's notice MC1509801 describe a setting to add or remove extensions for the organisation.

Today the protection scans Teams messages for weaponizable file types. If a message contains one, Teams blocks both the attachment and the whole message, and the sender can edit the message and resend it. The Learn page lists the blocked extensions, from `ace` to `z`, and states that the list is not currently configurable by administrators.

MC1509801 says organisations with the protection enabled stay on the Microsoft-recommended list by default and keep receiving Microsoft's updates to it. An organisation that customises the list uses its own list and no longer receives those updates automatically. Administrators can reset to the recommended list at any time to resume updates. The notice says the user experience will not change and that files with blocked extensions stay blocked.

The roadmap item is In development, with a target of December CY2026, for Worldwide (Standard Multi-Tenant), General Availability and Targeted Release, on Android, Desktop, iOS, Mac and Web. MC1509801 (updated 2 November 2026) gives the General Availability rollout as beginning in early December 2026 (previously early November) and expected to complete by mid-December 2026 (previously mid-November). It sets no act-by date and says no action is required. Separately, the Set-CsTeamsMessagingConfiguration reference on Microsoft Learn already lists the `FileTypeCustomizationSetting` and `FileTypeBlockList` parameters at the time of writing (November 2026), even though the roadmap status is still In development.

## Why it matters

This is a security control that moves from Microsoft's decision to yours. Once the setting arrives, whoever owns Teams security also owns the blocked-extension list, including keeping it current. A custom list stops receiving Microsoft's updates, so an extension Microsoft adds later to the recommended list is not blocked in your tenant until you add it or reset.

If nobody acts, the tenant stays on the Microsoft-recommended list and behaviour is unchanged. Treat the change as a decision to make deliberately: customise only where a business need, such as a software team that exchanges a blocked extension, outweighs the cost of owning the list.

## Risk assessment

**Data exposure**

- Removing an extension from a custom list lets Teams chats and channels carry that file type, because the protection blocks only the extensions on the active list. Document who approved each removal.
- Messages containing blocked file types are blocked for everyone in a conversation when any participating organisation has the protection turned on. Microsoft Learn does not say which organisation's list applies in an external conversation (see Open questions).

**Security & identity**

- A custom list no longer receives Microsoft's future updates to the recommended list, so new malware-associated extensions need your own review. Reset to the recommended list to resume updates.
- Entering an empty list is not an option on the cmdlet reference: `FileTypeBlockList` must contain at least one string when `CustomBlockList` is used.

**Autonomy & actions**

- No change: the feature blocks messages on a list and takes no autonomous action beyond that.

**Change & support**

- Microsoft's notice says users see no change. Expect support tickets only after you add or remove extensions, when a sender sees a blocked message or a file that used to be blocked now goes through.
- The reference documents no per-user or per-group list: the setting is a tenant-wide messaging configuration, so one list serves all users.

## Cost and licensing

The Learn page for Weaponizable File Protection names no licence and no prerequisites, and neither the roadmap record nor MC1509801 mentions a charge. Licensing is not yet published, so do not state in a budget request that the feature is included or free.

The cost the sources do show is indirect: administrator time to decide the list, test it and maintain it, plus a short communication to Teams users if you change it. No meter, cap or budget control is documented for this feature at the time of writing (November 2026).

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the only cloud, and the platforms Android, Desktop, iOS, Mac and Web. The Set-CsTeamsMessagingConfiguration reference notes that `FileTypeCustomizationSetting` and `FileTypeBlockList` are not available in GCC, GCCH and DOD.

The setting applies to the tenant: the Learn page says that once file protection is enabled, all users in the tenant have it applied to their Teams messages. It affects chats and channels. The customisation applies only when file protection (`FileTypeCheck`) is Enabled, which is its documented default.

Microsoft's notice MC1509801 gives the rollout as early to mid-December 2026 for General Availability in Worldwide. The role needed to change the setting is not stated on the pages read.

## Governance guidance

### Before rollout

- Export the current extension list from the Learn page and decide whether any extension in it blocks legitimate work, using the tenant-wide protection switch as your baseline.
- Name an owner for the custom list, because a custom list stops receiving Microsoft's updates.
- Check whether external partners in shared chats run the protection, since a message with a blocked type is blocked for all participants when any organisation has it on.

### At rollout

- Confirm in the Teams admin center and in PowerShell that the protection is still on and the list is still Microsoft-recommended before changing anything.
- Change the list only with a written reason per extension, using `FileTypeCustomizationSetting` and `FileTypeBlockList`, and record the change.
- Tell Teams users which extensions you removed or added, so a blocked message is not logged as a fault.

### After rollout

- Reset to `MicrosoftRecommendedBlockList` if the custom list is no longer maintained; this clears `FileTypeBlockList` and resumes Microsoft's updates.
- Compare a custom list against the Learn page's published list each time Microsoft updates the page.
- Re-check the Learn page and Message center for the admin centre path that customises the list.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which file extensions are blocked (custom list)</strong><br><small>Tenant</small><br><small class="controls__note">Documented on Learn while the roadmap item is In development. Not available in GCC, GCCH and DOD per the reference.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingConfiguration -FileTypeCustomizationSetting CustomBlockList -FileTypeBlockList &lt;string[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Return to the Microsoft-recommended list and its updates</strong><br><small>Tenant</small><br><small class="controls__note">Default value. Clears FileTypeBlockList. MC1509801 says admins can reset at any time to resume automatic updates.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingConfiguration -FileTypeCustomizationSetting MicrosoftRecommendedBlockList</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Weaponizable File Protection is on</strong><br><small>Tenant</small><br><small class="controls__note">Existing control. It switches the protection on or off; it does not change which extensions are blocked.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging settings › Messaging safety › Scan messages for file types that are not allowed <a href="https://learn.microsoft.com/microsoftteams/weaponizable-file-protection-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingConfiguration -FileTypeCheck Enabled|Disabled -Identity Global</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Different blocked lists for different users or groups</strong><br><small>User</small><br><small class="controls__note">No per-user or per-group list is documented; the setting is a tenant messaging configuration.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented way to customise the list is PowerShell on the tenant's messaging configuration; no Teams admin center path for customising the list is documented at the time of writing (November 2026). Microsoft's notice mentions screenshots of a customise view, which are not reproduced here. `FileTypeBlockList` takes effect only when `FileTypeCheck` is Enabled and `FileTypeCustomizationSetting` is `CustomBlockList`. Setting `MicrosoftRecommendedBlockList` clears the custom list.

The cmdlet reference lists these parameters as not available in GCC, GCCH and DOD. The pages read do not name the role required to run the cmdlet or change the setting, so check Teams role documentation before delegating.

## Open questions

- Which admin role is required to customise the list, and will the Teams admin center expose it under Messaging settings > Messaging safety? Watch the Learn page and MC1509801.
- In an external chat where the other organisation uses the default list and yours uses a custom one, which list decides whether a message is blocked? Watch the Learn page's external collaboration section.
- Is any licence required for Weaponizable File Protection or for customising it? Watch the Learn page.
- Are blocked messages, or changes to the custom list, recorded in an audit log or report that an administrator can search? Watch the Learn page and Message center.

<!-- rationale
risk: Low. Tenants stay on the Microsoft-recommended list by default, so nothing weakens until an administrator edits the list; the exposure comes from a custom list that blocks fewer types.
cost: Low. The only cost the sources show is administrator time to decide and maintain a list; no licence or meter is mentioned, and licensing is not yet published.
impact: Low. Microsoft's notice says the user experience does not change; administrators who choose to customise the list are the people who notice.
-->
