---
title: "Microsoft Purview Information Barriers v2: 5,000 segments, multiple segments per user and people discoverability (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-information-barriers-v2-support-for-all-new-onboarding"
roadmapId: 402516
topic: "governance"
products: ["Microsoft Purview"]
summary: "Organisations newly onboarding Information Barriers get the v2 architecture: up to 5,000 segments, up to 10 segments per user and a switch for people discoverability. Nothing is restricted until an administrator defines and applies policies."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "The Microsoft Purview service description states that users in segments defined under Assigned Segments require licences. Microsoft's service plan reference lists an Information Barriers service plan in Microsoft 365 E5 Compliance. No separate licence for v2 is published."
audiences: ["compliance","m365-admin","security"]
tags: ["information-barriers","purview","teams","sharepoint","onedrive","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Get started with Information Barriers"
    url: "https://learn.microsoft.com/purview/information-barriers-policies"
    kind: "learn"
  - title: "Use multi-segment support in Information Barriers"
    url: "https://learn.microsoft.com/purview/information-barriers-multi-segment"
    kind: "learn"
  - title: "Manage Information Barriers policies"
    url: "https://learn.microsoft.com/purview/information-barriers-edit-segments-policies"
    kind: "learn"
  - title: "Information Barriers and moderated meetings"
    url: "https://learn.microsoft.com/purview/information-barriers-teams-moderated-meetings"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Product names and service plan identifiers for licensing"
    url: "https://learn.microsoft.com/entra/identity/users/licensing-service-plan-reference"
    kind: "learn"
  - title: "Set-PolicyConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "docs"
  - title: "Microsoft 365 Roadmap item 402516"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=402516"
    kind: "roadmap"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
videos: []
related: ["auditing"]
controls:
  - governs: "Whether users can be assigned to more than one segment (organisation IB mode)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -InformationBarrierMode 'MultiSegment'"
      docs: "https://learn.microsoft.com/purview/information-barriers-multi-segment"
    note: "Security & Compliance PowerShell. Only while no IB segments or policies are defined; Microsoft advises against reverting to single-segment support."
  - governs: "Whether IB-protected users can find each other in the people picker"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -InformationBarrierPeopleSearchRestriction 'Disabled'"
      docs: "https://learn.microsoft.com/purview/information-barriers-edit-segments-policies"
    note: "Restriction is enabled by default; 'Enabled' restores it. Not available in Legacy mode."
  - governs: "Which users belong to each segment"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Barriers > Segments > New segment > User group filter > Add"
      docs: "https://learn.microsoft.com/purview/information-barriers-policies"
    api:
      kind: "powershell"
      call: "New-OrganizationSegment -Name \"segmentname\" -UserGroupFilter \"attribute -eq 'attributevalue'\""
      docs: "https://learn.microsoft.com/purview/information-barriers-policies"
    note: "Membership is set on the User group filter page from directory attributes."
  - governs: "Which segments an assigned segment may communicate with (allow or block policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Barriers > Policies > Create policy > Communication and collaboration"
      docs: "https://learn.microsoft.com/purview/information-barriers-policies"
    api:
      kind: "powershell"
      call: "New-InformationBarrierPolicy -Name \"policyname\" -AssignedSegment \"segmentAname\" -SegmentsAllowed \"segmentBname\",\"segmentAname\""
      docs: "https://learn.microsoft.com/purview/information-barriers-policies"
    note: "Allowed or Blocked cannot be changed after creation. Use allow policies in multi-segment mode."
  - governs: "Applying active IB policies to users"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Barriers > Policy application > Apply all policies"
      docs: "https://learn.microsoft.com/purview/information-barriers-policies"
    api:
      kind: "powershell"
      call: "Start-InformationBarrierPoliciesApplication"
      docs: "https://learn.microsoft.com/purview/information-barriers-policies"
    note: "Starts about 30 minutes after it is run; about 5,000 user accounts per hour."
  - governs: "Whether the unified audit log records activity, needed to look up IB policy application status"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Exchange Online PowerShell. Audit logging is on by default for Microsoft 365 organisations, except SMB licences and unmanaged tenants using free enterprise trials; verify the tenant's auditing status."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-06-05T23:00:34"
changes:
  - date: "2026-11-25"
    note: "New briefing on Information Barriers v2 for newly onboarding organisations in GCC, GCC High and DoD."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected the rollout checklist to set each policy to active before applying; extended the segment path to the User group filter; qualified the audit default; removed two monitoring steps that had no table rows."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 72
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "61f54d1a12d71960999c789135a87e13"
---

## What's changing

Microsoft plans to give every organisation that newly onboards Microsoft Purview Information Barriers (IB, policies that stop chosen groups of users from communicating and collaborating) the v2 architecture. The roadmap item names three capabilities: up to 5,000 segments in an organisation, up to 10 segments per user, and a choice to let IB-protected users discover each other in the people picker while IB policies still govern communication.

Microsoft Learn already documents these as properties of the organisation's IB mode. An organisation is in *Legacy*, *SingleSegment* or *MultiSegment* mode, depending on when it enabled IB. Outside *Legacy* mode an organisation can have up to 5,000 segments (250 in *Legacy*), can switch the people picker restriction on or off, and IB no longer uses Exchange Online address book policies. Assigning a user to more than one segment additionally needs *MultiSegment* mode, which an administrator sets with `Set-PolicyConfig -InformationBarrierMode 'MultiSegment'` only while no segments or policies exist. In that mode, users are compatible when they share at least one segment, and Microsoft says to define all policies with an allow list.

Other behaviour differs outside *Legacy* mode too: users and groups outside IB segments stay visible to segmented users, and IB policies are enforced for hidden users. By default the people picker restriction is on, so IB policies that block two users from communicating can also stop them seeing each other in the people picker, until an administrator disables the restriction.

The roadmap item, for GCC, GCC High and DoD, has status In development with a target of March CY2026, a date that has passed, although its description says IB v2 "is now available". The Learn pages describe these modes without distinguishing between clouds, and they do not state which mode a newly onboarded organisation starts in.

## Why it matters

For a government tenant that has not yet set up Information Barriers, the mode decision comes first and is hard to undo. Multi-segment support can only be switched on before any segment or policy is defined, and Microsoft warns against reverting to single-segment support once IB is configured. A team that builds segments first and decides on multi-segment later faces deleting its configuration to change course.

If nobody acts, nothing is restricted: Microsoft's guidance states that defining or editing policies does not affect users until they are set to active and applied. The value of v2 is design freedom (overlapping memberships such as a teacher in two schools, and visibility of colleagues across a barrier), and with it more room for a policy set that blocks collaboration nobody intended.

## Risk assessment

**Data exposure**
- Disabling the people picker restriction lets IB-protected users find each other; the roadmap item describes this as discovery while IB communication and collaboration policies still apply. Leave it at its default (enabled) unless the regulatory basis for the barrier allows people to see each other.
- Outside *Legacy* mode, users and groups not in any segment are visible to segmented users, which differs from *Legacy* allow policies.

**Security & identity**
- Segments are built from directory attributes such as *Department* or *MemberOf*, so whoever can change those attributes in Microsoft Entra ID or Exchange Online can move a user across a barrier. Restrict who edits them.
- Managing IB policies needs the Microsoft 365 global administrator, Office 365 global administrator, Compliance administrator or IB Compliance Management role.

**Autonomy & actions**
- In *MultiSegment* mode, a multi-segment user's OneDrive is set automatically to *Owner Moderated* mode, a SharePoint site such a user creates uses *Owner Moderated* mode and a team they create uses *Implicit* mode. Owners then decide who joins within IB policy.

**Change & support**
- A guide on moderated meetings states that multi-segment does not work if any block policy is configured. Expect helpdesk calls if block policies from an earlier design are carried over.
- Policy application starts about 30 minutes after it is triggered and processes about 5,000 user accounts per hour, so large organisations should expect hours before a policy reaches everyone.

## Cost and licensing

**Licence.** The [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) states that, when defining a block or allow policy, users in the segments defined under "Assigned Segments" require licences. Microsoft's [service plan reference](https://learn.microsoft.com/entra/identity/users/licensing-service-plan-reference) lists an Information Barriers service plan in Microsoft 365 E5 Compliance. The *Get started with Information Barriers* page says the organisation must have supporting subscriptions or add-ons and links to Microsoft's subscription requirements.

**Meter.** No meter is documented for Information Barriers.

**Indirect costs.** Administrator time to clean directory attributes, design segments and test policies, and to set up IB for SharePoint and OneDrive.

**Not yet published.** A licence or price specific to the v2 architecture or to multi-segment mode; the service description's Information Barriers section names none.

## Scope

- **Who it is for:** organisations newly onboarding Information Barriers, per the roadmap item. Organisations already in *Legacy* mode keep the 250-segment, one-segment-per-user limits; Microsoft says they are eligible to upgrade in the future.
- **Services:** Microsoft Teams, SharePoint and OneDrive, with segments and policies managed in the Microsoft Purview portal or Security & Compliance PowerShell.
- **Roles:** Microsoft 365 global administrator, Office 365 global administrator, Compliance administrator or IB Compliance Management.
- **Prerequisites:** populated directory attributes; scoped directory search enabled in Microsoft Teams at least 24 hours before defining IB policies; audit logging on to look up policy application status.
- **Clouds:** GCC, GCC High and DoD, as the roadmap record lists them. Platform: web.
- **Status:** In development, target March CY2026.

## Governance guidance

### Before rollout
- Run `Get-PolicyConfig` in Security & Compliance PowerShell and read `InformationBarrierMode` to learn whether the organisation is in *Legacy*, *SingleSegment* or *MultiSegment* mode.
- Decide whether any user needs more than one segment, and if so set *MultiSegment* mode before defining the first segment or policy.
- Plan every policy as an allow policy if the organisation will use multi-segment mode, and drop block policies from the design.
- Confirm audit logging is on, so that policy application status can be looked up.

### At rollout
- Create segments in the Microsoft Purview portal or with `New-OrganizationSegment`, checking that each attribute value exists for the intended users.
- Create one policy per assigned segment, leave it inactive until the set is complete, then set each policy to active status and apply all policies.
- Decide, with the compliance owner, whether to disable the people picker search restriction, and record the reason.
- Schedule application for a quiet period, allowing about one hour per 5,000 user accounts.

### After rollout
- Leave the organisation in *MultiSegment* mode once IB is configured; Microsoft advises against reverting to single-segment support.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can be assigned to more than one segment (organisation IB mode)</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Only while no IB segments or policies are defined; Microsoft advises against reverting to single-segment support.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -InformationBarrierMode 'MultiSegment'</code> <a href="https://learn.microsoft.com/purview/information-barriers-multi-segment" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether IB-protected users can find each other in the people picker</strong><br><small>Tenant</small><br><small class="controls__note">Restriction is enabled by default; 'Enabled' restores it. Not available in Legacy mode.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -InformationBarrierPeopleSearchRestriction 'Disabled'</code> <a href="https://learn.microsoft.com/purview/information-barriers-edit-segments-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users belong to each segment</strong><br><small>Tenant</small><br><small class="controls__note">Membership is set on the User group filter page from directory attributes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Barriers › Segments › New segment › User group filter › Add <a href="https://learn.microsoft.com/purview/information-barriers-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-OrganizationSegment -Name &quot;segmentname&quot; -UserGroupFilter &quot;attribute -eq 'attributevalue'&quot;</code> <a href="https://learn.microsoft.com/purview/information-barriers-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which segments an assigned segment may communicate with (allow or block policy)</strong><br><small>Tenant</small><br><small class="controls__note">Allowed or Blocked cannot be changed after creation. Use allow policies in multi-segment mode.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Barriers › Policies › Create policy › Communication and collaboration <a href="https://learn.microsoft.com/purview/information-barriers-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-InformationBarrierPolicy -Name &quot;policyname&quot; -AssignedSegment &quot;segmentAname&quot; -SegmentsAllowed &quot;segmentBname&quot;,&quot;segmentAname&quot;</code> <a href="https://learn.microsoft.com/purview/information-barriers-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Applying active IB policies to users</strong><br><small>Tenant</small><br><small class="controls__note">Starts about 30 minutes after it is run; about 5,000 user accounts per hour.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Barriers › Policy application › Apply all policies <a href="https://learn.microsoft.com/purview/information-barriers-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-InformationBarrierPoliciesApplication</code> <a href="https://learn.microsoft.com/purview/information-barriers-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity, needed to look up IB policy application status</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell. Audit logging is on by default for Microsoft 365 organisations, except SMB licences and unmanaged tenants using free enterprise trials; verify the tenant's auditing status.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The organisation mode and the people picker restriction are set only through `Set-PolicyConfig` in Security & Compliance PowerShell; Microsoft Learn documents no Purview portal setting for either at the time of writing (November 2026). The multi-segment guide requires that no segments or policies are defined before the mode is changed to *MultiSegment*. Segments, policies and application have both a portal route and a cmdlet. IB also has to be enabled in SharePoint and OneDrive for it to apply to sites, including the site created with each team; see [Use Information Barriers with SharePoint](https://learn.microsoft.com/purview/information-barriers-sharepoint). For the audit log, see [/concepts/auditing/](/concepts/auditing/).

## Open questions

- Which IB mode, *SingleSegment* or *MultiSegment*, does a GCC, GCC High or DoD organisation start in when it onboards after this change? Watch the multi-segment Learn page.
- Has the v2 architecture reached each of GCC, GCC High and DoD, given the record still shows In development after its March CY2026 target? Watch the roadmap item and Message center.
- When and how will organisations in *Legacy* mode be upgraded, and will the upgrade require removing existing segments and policies? Watch the Information Barriers roadmap.
- Will Microsoft add a Purview portal setting for the IB mode and the people picker restriction? Watch the Get started with Information Barriers page.

<!-- rationale
risk: Low. Information Barriers policies do not affect users until an administrator sets them to active and applies them; the main exposure is a design mistake, such as choosing single-segment mode and finding it cannot be changed once segments exist.
cost: Low. The cost this change shows is administrator time to plan segments and policies. Information Barriers is licensed per user for users in assigned segments, and Microsoft publishes no separate licence for the v2 architecture.
impact: Low. Only compliance administrators setting up Information Barriers notice the new limits and modes; users notice only the policies those administrators choose to apply.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Exchange Online address book policies / behaviour: IB no longer uses Exchange Online address book policies outside Legacy mode. | Found: For organizations in SingleSegment or MultiSegment mode: Information Barriers no longer uses Exchange Online Address Book Policies (ABPs). Enabling Information Barriers doesn't affect existing ABPs. | Fix: Replace with: 'The Get started guide says IB no longer uses Exchange Online address book policies outside Legacy mode. The Learn about Information Barriers page qualifies this: IB no longer relies on ABPs, but can automatically create an ABP with empty address lists for users without one; keep ABPs consistent with IB segments to avoid losing address-list visibility.' Cite https://learn.microsoft.com/purview/information-barriers#information-barriers-and-exchange-online. | Source: https://learn.microsoft.com/purview/information-barriers-policies
- [supported, minor] controls[0].note; What's changing; Why it matters; Governance guidance; rationale: risk / behaviour: The multi-segment guide requires no existing segments or policies before enabling MultiSegment from SingleSegment. | Found: To enable multiple segment support for organizations in SingleSegment mode, make sure that you don't currently have any IB segments or policies defined for your organization. | Fix: Keep the precaution, but add: 'Microsoft's guides differ on configuration order: the multi-segment guide requires no existing segments or policies, while the moderated-meetings guide changes to MultiSegment after creating segments and policies.' Cite https://learn.microsoft.com/purview/information-barriers-teams-moderated-meetings. Replace 'faces deleting its configuration to change course' with 'cannot follow the multi-segment guide's enablement procedure without first removing its segments and policies'. | Source: https://learn.microsoft.com/purview/information-barriers-multi-segment
- [supported, minor] Scope: Prerequisites / behaviour: The Get started guide requires enabling Teams scoped directory search and waiting at least 24 hours before defining IB policies. | Found: Before you define your organization's first IB policy, you must enable scoped directory search in Microsoft Teams. Wait at least 24 hours after enabling scoped directory search before you set up or define IB policies. | Fix: Keep the conservative 24-hour requirement but attribute it: 'The Get started guide requires scoped directory search in Teams at least 24 hours before defining IB policies; the Teams IB guide instead says to wait at least a few hours.' Cite https://learn.microsoft.com/purview/information-barriers-teams#manage-segments-and-policies. | Source: https://learn.microsoft.com/purview/information-barriers-policies
- [supported, minor] controls[3].ui; Governance controls table / admin-path: The Purview policy route is Information Barriers > Policies > Create policy > Communication and collaboration. | Found: On Policies, select Create policy to create and configure a new IB policy. On Assigned segment, select Choose segment. On the Communication and collaboration page, select the policy type in the Communication and collaboration field. | Fix: Extend controls[3].ui.path and its rendered counterpart to 'Information Barriers > Policies > Create policy > Assigned segment > Choose segment > segment > Communication and collaboration > Allowed > Choose segment > segment'. The existing route stops on the correct control page and omits the assigned-segment selection; the cited guide gives the remaining choices. | Source: https://learn.microsoft.com/purview/information-barriers-policies
- [supported, minor] controls[4].ui; Governance controls table / admin-path: The Purview policy application route is Information Barriers > Policy application > Apply all policies. | Found: Select the Information Barriers solution card. Select Policy application. On the Policies application page, select Apply all policies to apply all IB policies in your organization. | Fix: Keep the route attributed to Get started, and add: 'The moderated-meetings guide instead gives Information Barriers > Policies > Policy applications > Apply all policies.' Cite https://learn.microsoft.com/purview/information-barriers-teams-moderated-meetings. Both Microsoft pages were read and disagree about this navigation. | Source: https://learn.microsoft.com/purview/information-barriers-policies
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist tells administrators to activate each policy, but the controls table has no policy-activation control. | Found: then set each policy to active status and apply all policies. Table rows cover organisation mode, people search, segment creation, policy creation, applying active policies and auditing; none controls an existing policy's active status. | Fix: The step 'set each policy to active status' has no corresponding table control. Do not add a row in this correction; remove that separate configuration instruction from the checklist and retain the verified prerequisite as 'Apply all policies only after each policy has active status'.
- [supported, minor] What's changing: definition; Scope: Services / applicability: IB restricts communication and collaboration between groups and users in Teams, SharePoint and OneDrive. | Found: Microsoft Purview Information Barriers (IB) is a compliance solution that restricts two-way communication and collaboration between groups and users in Microsoft Teams, SharePoint, and OneDrive. | Fix: Add https://learn.microsoft.com/purview/information-barriers, titled 'Learn about Information Barriers', to sources for the definition and service scope. | Source: https://learn.microsoft.com/purview/information-barriers
-->
