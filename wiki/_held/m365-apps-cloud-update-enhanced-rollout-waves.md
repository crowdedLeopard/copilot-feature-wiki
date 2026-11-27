---
title: "Microsoft 365 Apps cloud update: up to 10 rollout waves with custom delays for Monthly Enterprise"
slug: "m365-apps-cloud-update-enhanced-rollout-waves"
roadmapId: 558251
topic: "modern-work"
products: ["Microsoft 365","Microsoft 365 app"]
summary: "Cloud update now allows up to nine Entra group waves plus a final wave, with up to seven days' delay per wave, capped at 25 days with the update deadline. Waves are optional; check deadlines that were cut to fit."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Cloud update requires users to hold Microsoft 365 A3 or A5, Microsoft 365 Business Standard or Business Premium, or Office 365 E3/E5 or Microsoft 365 E3/E5. Microsoft publishes no separate licence or charge for enhanced rollout waves."
audiences: ["m365-admin","security"]
tags: ["cloud-update","microsoft-365-apps","release-channels","entra-id","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 558251"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558251"
    kind: "roadmap"
  - title: "New changes coming to cloud update"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-enhancements"
    kind: "learn"
  - title: "Configure rollout waves and update deadlines"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-waves-deadline"
    kind: "learn"
  - title: "Requirements for cloud update"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-requirements"
    kind: "learn"
  - title: "Update progress and health"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-progress-health"
    kind: "learn"
  - title: "Audit cloud update activity with Microsoft Purview"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-purview"
    kind: "learn"
  - title: "Overview of cloud update"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update"
    kind: "learn"
  - title: "Searching audit records of cloud update wave and deadline changes (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Searching audit records of cloud update wave and deadline changes (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    kind: "learn"
videos: []
related: ["m365-apps-cloud-update-export-improvements","m365-app-inventory-update-repair"]
controls:
  - governs: "Which Entra groups form each rollout wave and the delay before the next wave"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Cloud Update > Monthly Enterprise > Settings > Rollout configuration > Yes, create rollout waves > + Add waves"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-waves-deadline"
    api: null
    note: "Monthly Enterprise profile only. The delay is set in Delay before next wave, up to seven days per wave. Office Apps Administrator is the recommended role."
  - governs: "How many days users have before the update prompt on the Monthly Enterprise profile"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Cloud Update > Monthly Enterprise > Settings > Rollout configuration > Update deadline"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-waves-deadline"
    api: null
    note: "Default 3 days, range 0 to 14 days. Wave delays plus the deadline cannot exceed 25 days."
  - governs: "Wave start dates, device counts and status for each rollout wave"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Cloud Update > Monthly Enterprise > Overview > View waves overview"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-progress-health"
    api: null
    note: "Read-only view of the wave schedule and progress."
  - governs: "Searching audit records of cloud update wave and deadline changes"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <ExDateTime> -EndDate <ExDateTime> -Operations <String[]>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    note: "Requires the Audit Logs or View-Only Audit Logs role. In the portal, search for cloud update in the activity list."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-27"
    note: "New briefing: enhanced rollout waves for cloud update, with the 25-day limit, the one-time deadline reduction and the admin center paths."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 66
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "82c1fa7b12f75499b47040163b028de6"
---

## What's changing

Cloud update in the Microsoft 365 Apps admin center now lets administrators stage Monthly Enterprise Channel updates across more rollout waves, with a delay they choose between each wave. Microsoft's cloud update changes page lists the enhancements: up to nine custom waves built from Microsoft Entra groups, for a maximum of 10 waves; custom delays between waves of up to seven days per wave; a new **Rollout configuration** settings page that holds both rollout waves and the update deadline; an updated wave chart and waves overview flyout; and channel changes that now honour rollout waves, so devices scheduled to move channel follow their assigned wave. The roadmap item describes the previous limit as three waves.

The final wave is included by default and holds every remaining device in the Monthly Enterprise profile that is not assigned to an earlier wave. Rollout waves remain optional for the Monthly Enterprise profile and disabled by default; without them, devices in that profile receive updates over four to five days under the internal cloud update throttle. The Current profile does not support rollout waves.

The change also brings a hard limit. For the Monthly Enterprise profile, the combined total of rollout wave delays and the update deadline cannot exceed 25 days, which Microsoft says helps devices complete the update cycle within 28 days of release. Where a tenant's existing settings exceed 25 days, Microsoft applies a one-time reduction to the update deadline with this update; all other existing rollout wave settings are preserved.

The roadmap item is **Launched**, with a preview target of May CY2026 and general availability targeted for June CY2026. Microsoft Learn gives the rollout as June 2026 to July 2026 and notes that the enhanced experience is rolling out gradually and might not be in every tenant yet.

## Why it matters

Ten waves and per-wave delays let a service owner match update staging to real validation rings (IT, pilot, business-critical, everyone else) instead of squeezing them into fewer groups. The trade-off is security exposure: every day of delay is a day later devices get the month's security fixes, and the 25-day ceiling now constrains how long deadlines and delays can add up to.

Nothing about staging changes unless an administrator configures waves, because rollout waves are disabled by default. The one thing that happened without anyone acting is the one-time cut to the update deadline in tenants whose wave delays plus deadline exceeded 25 days, so check the Monthly Enterprise deadline now rather than assuming it is still what was set.

## Risk assessment

**Data exposure**
- No change: the feature controls update timing and reads no organisational content.

**Security & identity**
- Wave membership comes from Microsoft Entra groups, so anyone who can change membership of a wave group can move devices earlier or later in the schedule. Group assignment for waves is separate from profile assignment.
- Long delays defer security updates for late waves; the 25-day total for wave delays plus deadline is the documented upper bound.

**Autonomy & actions**
- The schedule runs on its own from each new release, typically Patch Tuesday, and continues while a profile is paused or an exclusion window is active: waves scheduled during a pause have already passed when it ends, and devices that still need the update can start receiving it when the profile resumes.
- Rollout waves do not apply to rollback.

**Change & support**
- Tenants whose settings exceeded 25 days had the update deadline reduced once, so users may see the update prompt sooner than the help desk expects.
- Devices assigned to the Monthly Enterprise profile late in the month are more likely to update outside the wave schedule, and a device in a later wave can show as completed before its wave starts (for example after an online repair).

## Cost and licensing

Cloud update's requirements page says users must be assigned one of these plans: Microsoft 365 A3 or A5; Microsoft 365 Business Standard or Business Premium; Office 365 E3 or E5; Microsoft 365 E3 or E5. Rollout waves are a feature of the cloud update Monthly Enterprise profile, so they come with that entitlement; Microsoft publishes no separate licence, meter or charge for enhanced rollout waves. User objects placed in wave groups must have a supported licence assigned.

The real cost is administrator time: designing up to nine wave groups, setting delays that fit inside the 25-day limit and keeping group membership current.

## Scope

- **Profiles:** Monthly Enterprise only; the Current profile does not support rollout waves.
- **Devices:** must be eligible for and assigned to the Monthly Enterprise profile before they can be in a wave. Device objects in wave groups must be Microsoft Entra joined or hybrid joined.
- **Groups:** user and device objects can share a group; a single group should contain no more than 20,000 objects; nested groups are supported up to three levels deep.
- **Roles:** Office Apps Administrator (recommended), Security Administrator or Global Administrator. Global Reader does not support cloud update.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant). Cloud update's requirements page lists Microsoft 365 GCC, GCC High and DoD, and Microsoft 365 operated by 21Vianet, as not supported.
- **Platforms:** Microsoft 365 Apps on supported versions of Windows 10/11 and supported Windows Server versions.
- **Rollout:** rolling out gradually, June 2026 to July 2026 per Microsoft Learn.

## Governance guidance

### Before rollout
- Check the **Update deadline** on the Monthly Enterprise profile's Rollout configuration page, since tenants over the 25-day limit had it reduced once.
- Map validation rings to Microsoft Entra groups of no more than 20,000 objects each, using joined or hybrid joined device objects or licensed user objects.
- Decide who may change membership of wave groups, because membership decides when a device is updated.
- Budget the 25 days: for example, a 3-day deadline leaves 22 days for wave delays, at no more than seven days per wave.

### At rollout
- Configure waves under Rollout configuration with **Yes, create rollout waves** and **+ Add waves**, using the Office Apps Administrator role.
- Use the **Total delay** counter on the Rollout configuration page to confirm the total before saving.
- Assign devices to the Monthly Enterprise profile early in a release month so their first update follows the wave schedule.

### After rollout
- Review wave start dates, device counts and status in **View waves overview** after each Patch Tuesday release.
- Search the audit log for cloud update profile changes to see who changed waves or deadlines.
- Warn the help desk that devices scheduled for a channel change now move with their wave.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Entra groups form each rollout wave and the delay before the next wave</strong><br><small>Tenant</small><br><small class="controls__note">Monthly Enterprise profile only. The delay is set in Delay before next wave, up to seven days per wave. Office Apps Administrator is the recommended role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Cloud Update › Monthly Enterprise › Settings › Rollout configuration › Yes, create rollout waves › + Add waves <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-waves-deadline" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>How many days users have before the update prompt on the Monthly Enterprise profile</strong><br><small>Tenant</small><br><small class="controls__note">Default 3 days, range 0 to 14 days. Wave delays plus the deadline cannot exceed 25 days.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Cloud Update › Monthly Enterprise › Settings › Rollout configuration › Update deadline <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-waves-deadline" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Wave start dates, device counts and status for each rollout wave</strong><br><small>Tenant</small><br><small class="controls__note">Read-only view of the wave schedule and progress.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Cloud Update › Monthly Enterprise › Overview › View waves overview <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-progress-health" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of cloud update wave and deadline changes</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Audit Logs or View-Only Audit Logs role. In the portal, search for cloud update in the activity list.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;ExDateTime&gt; -EndDate &lt;ExDateTime&gt; -Operations &lt;String[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Cloud update is managed with the Office Apps Administrator (recommended), Security Administrator or Global Administrator role; Global Reader does not support it. Rollout waves and the update deadline share one 25-day budget on the Monthly Enterprise profile, so lengthening a wave delay can require shortening the deadline. Microsoft Learn documents no Microsoft Graph, PowerShell or other API for cloud update profiles, waves or deadlines at the time of writing (November 2026); configuration is in the Microsoft 365 Apps admin center. Cloud update audit records cover profile configuration changes such as setting update deadlines or configuring rollout waves, and need the Audit Logs or View-Only Audit Logs role to search.

## Open questions

- Will Microsoft publish a Graph or PowerShell interface for cloud update rollout waves and deadlines, so wave design can be scripted and kept in source control? Watch the cloud update changes page on Microsoft Learn.
- How was the one-time deadline reduction calculated for tenants over 25 days, and was any notice sent to administrators whose deadline changed? Watch Message center.
- Will rollout waves come to the Current profile, or stay Monthly Enterprise only?

<!-- rationale
risk: Low. Rollout waves are optional and disabled by default; the main exposure is an admin-chosen delay that leaves late waves unpatched for longer, bounded by the 25-day limit on wave delays plus deadline.
cost: Low. Cloud update is used under the Microsoft 365 and Office 365 plans its requirements page lists; the cost is admin time to design wave groups and review deadlines.
impact: Low. Cloud update administrators see the new Rollout configuration page; users notice only when their device's wave and deadline change when updates arrive.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: the one thing that happened without anyone acting / behaviour: The one-time deadline cut is the only change that happens without administrator action. | Found: Channel change now honors rollout waves, so that devices scheduled for channel change follow their assigned wave. All other existing rollout wave settings are preserved. | Fix: Replace 'The one thing that happened without anyone acting is' with 'Another change applied by this update is'. Existing wave settings are preserved, while the update also changes channel moves to follow their assigned wave; do not describe the deadline cut as the only automatic change. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-enhancements
- [unsupported, major] Risk assessment: Data exposure / behaviour: The feature reads no organisational content. | Found: Searched: 'cloud update organizational content data privacy rollout waves' and 'Microsoft 365 Apps cloud update rollout waves organizational content data collection'; opened cloud-update, cloud-update-enhancements and cloud-update-waves-deadline. None states this content-access exclusion. | Fix: Replace the bullet with 'The documented change controls update timing.' Remove the unsupported assertion that no organisational content is read.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: nothing about staging changes / default: Nothing about staging changes unless an administrator configures waves, because waves are disabled by default. | Found: Rollout waves are optional for the Monthly Enterprise profile and disabled by default. | Fix: Replace this sentence with 'Rollout waves are optional and disabled by default; existing rollout wave settings are preserved apart from the documented deadline reduction.' This avoids suggesting that existing wave users must configure them again. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-waves-deadline
- [supported, minor] Risk assessment: Security & identity; Governance guidance: group membership / behaviour: Changing wave group membership can change when a device receives updates. | Found: After you assign devices to the destination profile, Cloud update changes the channel when each device becomes eligible, based on the destination profile's rollout configuration. Rollout waves: consider assigning devices to the first rollout wave. | Fix: Add https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-profiles-channels to sources. Narrow the risk sentence to 'Wave group membership affects update timing, so review who can maintain those groups.' | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-profiles-channels#move-devices-to-another-update-channel
- [supported, minor] controls[0].ui; Governance guidance: At rollout / admin-path: Wave configuration is at Microsoft 365 Apps admin center > Cloud Update > Monthly Enterprise > Settings > Rollout configuration > Yes, create rollout waves > + Add waves. | Found: expand Cloud Update, and then select Monthly Enterprise. ... Settings ... Rollout configuration ... Yes, create rollout waves ... Select + Add waves, add your Microsoft Entra groups, set the Delay before next wave value | Fix: For a row governing delays as well as wave creation, extend the path to 'Cloud Update > Monthly Enterprise > Settings > Rollout configuration > Yes, create rollout waves > + Add waves > Delay before next wave'. The current path correctly reaches the configuration pane but stops before the delay control. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-waves-deadline
- [supported, minor] controls[2].ui; Governance guidance: After rollout / admin-path: Wave progress is at Microsoft 365 Apps admin center > Cloud Update > Monthly Enterprise > Overview > View waves overview. | Found: From the Overview tab, select View waves overview to open the flyout. The flyout shows wave details, including the wave name, start date, device count, and rollout status for each wave. | Fix: Use 'Cloud Update > Monthly Enterprise > Overview > wave chart > View waves overview'. The also-cited waves-deadline page documents reaching the Monthly Enterprise profile and says 'Under the wave chart, select View waves overview'; the missing heading is not a wrong navigation step. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-progress-health
- [supported, minor] controls[3].note; Governance controls / role: Searching the audit log requires the Audit Logs or View-Only Audit Logs role. | Found: You must be assigned the Audit Logs or View-Only Audit Logs roles in the Microsoft Purview portal to search the audit log. ... To access audit cmdlets, you must be assigned the Audit Logs or View-Only Audit Logs roles in the Exchange admin center. | Fix: Replace the role sentence in controls[3].note and Governance controls with 'Portal searches require Audit Logs or View-Only Audit Logs in Microsoft Purview; PowerShell searches require those roles in the Exchange admin center and run in Exchange Online PowerShell.' | Source: https://learn.microsoft.com/purview/audit-search
- [supported, minor] Governance controls; controls[3].governs; Governance guidance: audit log / applicability: Cloud update audit records cover wave and deadline configuration changes and identify the administrator responsible. | Found: Audit records help you identify which admin action was performed, who performed it, when it occurred, and which cloud update object was affected. ... Profile configuration changes, such as setting update deadlines or configuring rollout waves. | Fix: Qualify the Governance controls audit sentence with 'When auditing is enabled for Microsoft 365,'. The cited cloud-update-purview page states that condition for record generation. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-purview
- [contradicted, minor] front matter: action / consistency: The action rating is review because this change is wholly optional. | Found: action: review; Where a tenant's existing settings exceed 25 days, Microsoft applies a one-time reduction to the update deadline with this update | Fix: Set action to 'prepare': this update arrives for existing customers and includes a deadline adjustment to check, rather than only a control that changes nothing until newly chosen. Risk and cost are low, so an act-now rating is not required by the scale.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: Every control the governance checklist tells administrators to configure or take stock of has a controls-table row. | Found: Assign devices to the Monthly Enterprise profile early in a release month so their first update follows the wave schedule. ... Controls cover waves, deadlines, waves overview and audit search. | Fix: Remove the At rollout bullet that tells administrators to assign devices to the Monthly Enterprise profile; profile assignment has no controls-table row. Keep the existing factual explanation of early assignment in Risk assessment.
-->
