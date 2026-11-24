---
title: "Microsoft Teams: Conditional Access policies for selected meetings"
slug: "microsoft-teams-granular-conditional-access-for-teams-meetings"
roadmapId: 571879
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams meeting organisers will be able to require a Conditional Access authentication context for selected meetings. Administrators set up the contexts, publish them to Teams and control who can use them."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Microsoft Learn says using Conditional Access requires Microsoft Entra ID P1 licenses; whether that is the only requirement for Teams meetings is not stated."
audiences: ["m365-admin","security","service-owner"]
tags: ["teams","meeting-policy","entra-id","conditional-access","authentication","powershell","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap item 571879"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571879"
    kind: "roadmap"
  - title: "MC1532256: Microsoft Teams: Granular Conditional Access for Teams meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1532256"
    kind: "message-center"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Set-CsTeamsMeetingConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration"
    kind: "learn"
  - title: "Conditional Access: Target resources"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"
    kind: "learn"
  - title: "Require device compliance with Conditional Access"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-all-users-device-compliance"
    kind: "learn"
  - title: "Create authenticationContextClassReference"
    url: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-authenticationcontextclassreferences"
    kind: "learn"
  - title: "Create conditionalAccessPolicy (beta)"
    url: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta"
    kind: "learn"
  - title: "conditionalAccessApplications resource type (beta)"
    url: "https://learn.microsoft.com/graph/api/resources/conditionalaccessapplications?view=graph-rest-beta"
    kind: "learn"
  - title: "Developer guide to Conditional Access authentication context"
    url: "https://learn.microsoft.com/entra/identity-platform/developer-guide-conditional-access-authentication-context"
    kind: "learn"
  - title: "What is Conditional Access?"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/overview"
    kind: "learn"
videos: []
related: ["microsoft-teams-report-a-security-concern-in-meetings"]
controls:
  - governs: "Authentication contexts that can be offered for Teams meetings"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Authentication context"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"
    api:
      kind: "graph"
      call: "POST /beta/identity/conditionalAccess/authenticationContextClassReferences with a body of id, displayName, description and isAvailable set to true"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-authenticationcontextclassreferences"
    note: "Publish to apps makes a context available to apps. Graph page is beta; roles listed: Security Administrator, Conditional Access Administrator."
  - governs: "Conditional Access policy that applies to a published authentication context"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > policy > Assignments > Target resources > Select what this policy applies to > Authentication context"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"
    api:
      kind: "graph"
      call: "POST /beta/identity/conditionalAccess/policies with body <conditionalAccessPolicy JSON including conditions.applications.includeAuthenticationContextClassReferences: [<context id>], user assignments and grant controls>"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta"
    note: "General Conditional Access control; the Entra page confirms policies can target authentication contexts. The Graph call is beta, subject to change and not supported for production applications."
  - governs: "Which authentication contexts are published to Teams meetings"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -Identity Global -PublishedEntraAuthenticationContexts <contexts>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration"
    note: "Each entry needs an Id; PublishedName and PublishedDescription are optional. The reference says the feature is not fully released and the setting has no effect."
  - governs: "Whether authentication contexts are enforced for meetings organised by users under a meeting policy"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ConditionalAccessAttendeeVerification $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Reference default is True; $false disables enforcement for meetings organised by the user. The reference says the feature is not fully released and the setting has no effect."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-17"
    note: "New briefing: Teams meeting authentication contexts, with the roadmap and MC1532256 schedules and the Entra and PowerShell controls."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 63 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: removed unsupported claims about a single Teams-wide decision, guest lock-out and False hiding the selection, and the sign-in logs step; fixed the policy-targeting path and beta Graph call."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 59
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ef9c5dec649074a187fe30fd15993dd2"
---

## What's changing

Teams is adding granular Conditional Access for meetings: an administrator can make specific Conditional Access requirements available for selected meetings. The roadmap item describes it as a way to apply Conditional Access policies to selected meetings so that participants meet organisational security requirements before joining.

Microsoft's notice MC1532256 says administrators make approved authentication requirements available for specific meetings, and organisers can then require extra verification such as multifactor authentication, device compliance or location-based controls. Participants must satisfy the applicable Conditional Access policy before joining the protected meeting. Microsoft Learn's Teams PowerShell reference describes the mechanism in the same terms: the organiser selects from the Microsoft Entra authentication contexts published in the Teams meeting configuration, and the meeting options dropdown defaults to None. A participant without the required claims is prompted to retry getting the token or, if the lobby is enabled, to join the lobby.

The roadmap record lists the item as Rolling out, with a target of November CY2026, release phases General Availability and Targeted Release, and platforms Android, Desktop, iOS, Mac and Web, for Worldwide (Standard Multi-Tenant). MC1532256, published 2026-10-30, gives a different schedule: Public Preview from late November 2026, and General Availability beginning early January 2027 and completing by late January 2027. The post sets no act-by date. At the time of writing (November 2026), the cmdlet reference for both settings notes that the feature has not been fully released and the setting has no effect.

The roadmap item has no more-info link, and Microsoft Learn has no page for the meeting experience itself, so the organiser-side steps and the Teams admin center settings are not yet documented.

## Why it matters

This gives a security team a way to hold a small number of sensitive meetings to a stricter standard than the rest, without applying that standard to every Teams sign-in. The decision about which requirement applies is made in Microsoft Entra, so it sits with the team that already owns Conditional Access.

No existing meeting carries a requirement until an administrator publishes a context and an organiser selects it, because the organiser's dropdown defaults to None. The risk to manage is the reverse: participants who lack the required claims are prompted to retry obtaining a token or join the lobby if enabled, and the support desk will see it first.

## Risk assessment

**Data exposure**

- Protected meetings are only as good as the contexts organisers can pick. Meetings where the organiser leaves the dropdown at its default of None carry no extra requirement, so sensitive meetings need an owner who chooses a context.

**Security & identity**

- Enforcement comes from Conditional Access policies that target a published authentication context in Microsoft Entra. A context that is published to Teams but has no policy assigned in Entra gives organisers a choice that enforces nothing: check each published context has a policy.
- The meeting policy setting ConditionalAccessAttendeeVerification defaults to True. Once contexts are published, organisers assigned that policy can select them; set it to False on policies where authentication-context enforcement should be disabled.

**Autonomy & actions**

- No autonomous or agent behaviour is described for this feature.

**Change & support**

- Participants who cannot satisfy the requirement (for example guests on unmanaged devices where compliance is required) are prompted to retry or join the lobby if it is enabled. Brief help desk staff before the first context is offered.
- Microsoft's roadmap and notice give different timing and the cmdlet pages say the setting has no effect yet, so do not test enforcement until the feature reaches your tenant.

## Cost and licensing

Microsoft has not published a licence or meter specific to this Teams feature. The Microsoft Learn Conditional Access overview says using Conditional Access requires Microsoft Entra ID P1 licenses, and that customers with Microsoft 365 Business Premium licenses can also use Conditional Access features. Because the requirement is enforced by Conditional Access policies, treat Entra ID P1 as the licence to check for the users the policies target.

No meter, credit rate or storage charge is documented for this feature at the time of writing (November 2026). The other cost is administrator time: defining authentication contexts and policies in Microsoft Entra, publishing the contexts to Teams, and briefing organisers and the help desk. Whether any further Teams licence applies is Not yet published.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Android, Desktop, iOS, Mac and Web as platforms. It does not list GCC, GCC High or DoD, and Microsoft Learn does not say whether those clouds will get it.

Two configuration steps sit with different administrators. Authentication contexts and Conditional Access policies are created in the Microsoft Entra admin center; the Graph reference for creating a context names the Security Administrator and Conditional Access Administrator roles. Publishing contexts to Teams is done in the Teams meeting configuration, which is tenant-wide, and the meeting policy setting is per policy and so can differ between users. MC1532256 tells administrators to configure the contexts and policies in Microsoft Entra, publish the contexts to Microsoft Teams and enable the meeting authentication requirements through Teams meeting policies.

Microsoft Learn has not described which Teams meeting types, participant types or Teams Rooms devices the requirement applies to.

## Governance guidance

### Before rollout

- Decide with your Entra owners which meetings need a stronger standard, and define one authentication context for each requirement (for example managed device or multifactor authentication) in the Microsoft Entra admin center.
- Create a Conditional Access policy for each context that targets that authentication context, and test it with a pilot group before publishing the context to Teams.
- Inventory the Teams meeting policies assigned to your organisers and decide who should be offered contexts, since ConditionalAccessAttendeeVerification defaults to True.

### At rollout

- Publish only the contexts you have tested to the Teams meeting configuration with PublishedEntraAuthenticationContexts, giving each a clear published name and description for organisers.
- Set ConditionalAccessAttendeeVerification to False on policies where authentication-context enforcement should be disabled, or confirm it stays True where you want organisers to be offered contexts.
- Tell organisers of sensitive meetings which context to choose and that guests may be asked to retry or wait in the lobby.

### After rollout

- Review help desk cases from participants who could not join, and adjust the policy conditions rather than loosening the meeting policy.
- Re-read the Teams PowerShell reference and MC1532256 when the feature reaches your tenant, because the cmdlet pages currently say the setting has no effect.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Authentication contexts that can be offered for Teams meetings</strong><br><small>Tenant</small><br><small class="controls__note">Publish to apps makes a context available to apps. Graph page is beta; roles listed: Security Administrator, Conditional Access Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Authentication context <a href="https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/identity/conditionalAccess/authenticationContextClassReferences with a body of id, displayName, description and isAvailable set to true</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccessroot-post-authenticationcontextclassreferences" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Conditional Access policy that applies to a published authentication context</strong><br><small>Tenant</small><br><small class="controls__note">General Conditional Access control; the Entra page confirms policies can target authentication contexts. The Graph call is beta, subject to change and not supported for production applications.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › policy › Assignments › Target resources › Select what this policy applies to › Authentication context <a href="https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/identity/conditionalAccess/policies with body &lt;conditionalAccessPolicy JSON including conditions.applications.includeAuthenticationContextClassReferences: [&lt;context id&gt;], user assignments and grant controls&gt;</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which authentication contexts are published to Teams meetings</strong><br><small>Tenant</small><br><small class="controls__note">Each entry needs an Id; PublishedName and PublishedDescription are optional. The reference says the feature is not fully released and the setting has no effect.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -Identity Global -PublishedEntraAuthenticationContexts &lt;contexts&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether authentication contexts are enforced for meetings organised by users under a meeting policy</strong><br><small>User</small><br><small class="controls__note">Reference default is True; $false disables enforcement for meetings organised by the user. The reference says the feature is not fully released and the setting has no effect.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ConditionalAccessAttendeeVerification $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents the Teams-side settings only as PowerShell parameters at the time of writing (November 2026); a Teams admin center path is Not yet documented, so the two Teams rows show no admin-centre side. Use the Microsoft Entra rows for the policy decisions and the Teams rows for what organisers are offered.

The rows work in sequence: a context must exist and be published in Entra, a Conditional Access policy must target it, the context must be published to the Teams meeting configuration, and the meeting policy must enable authentication-context enforcement. The Microsoft Entra page gives up to 99 contexts (c1 to c99) and the cmdlet page gives Id values of c1-c99, whereas the Graph beta create page lists c1 through c25 and notes beta APIs are subject to change, so confirm the range before scripting. A context with no policy assigned may still be issued in the token claims, because there is no policy requirement left to satisfy: see the developer guide linked in the sources.

## Open questions

- Which Teams admin center page, if any, will expose the published authentication contexts and the meeting policy setting? Watch the Teams meeting policy reference and Message center.
- What does a participant on a platform that cannot satisfy the requirement see on each client (Android, iOS, Mac, Desktop, Web, Teams Rooms)? Microsoft Learn describes only the retry or lobby prompt.
- Is Microsoft Entra ID P1 the only licence needed, or does Teams Premium or another Teams licence apply? Watch the Teams licensing pages.
- Does the requirement apply to guests, external participants and anonymous attendees, and how does it interact with lobby settings?
- Will the Public Preview in late November 2026 and General Availability in January 2027 described in MC1532256 replace the roadmap's November CY2026 General Availability target?

<!-- rationale
risk: Low. The change adds a control: nothing is enforced on a meeting until an administrator publishes an authentication context and an organiser picks it, so the main exposure is a misconfigured policy locking out participants.
cost: Low. The only cost the sources show is admin time; Conditional Access itself needs Microsoft Entra ID P1, and Microsoft has not published a separate licence or meter for this Teams feature.
impact: Low. Administrators and the organisers who choose to protect a meeting notice it first; participants only see it when they join a meeting that carries a Conditional Access requirement.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Authentication contexts are managed at Microsoft Entra admin center > Entra ID > Conditional Access > Authentication context. | Found: Manage authentication contexts by going to Entra ID > Conditional Access > Authentication context. Select New authentication context to create an authentication context definition. | Fix: Complete controls[0].ui.path and its table rendering as 'Entra ID > Conditional Access > Authentication context > New authentication context > Publish to apps'. The current route stops on the correct management page; the cited page documents the remaining creation and publication steps. | Source: https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps
- [supported, minor] controls[0].api; Governance controls table / command: POST /beta/identity/conditionalAccess/authenticationContextClassReferences creates a context with id, displayName, description and isAvailable set to true. | Found: POST https://graph.microsoft.com/beta/identity/conditionalAccess/authenticationContextClassReferences {"id": "c1", "displayName": "Contoso medium", "description": "Medium protection level defined for Contoso policy", "isAvailable": true} | Fix: Set controls[0].api.call and its table rendering to 'POST /beta/identity/conditionalAccess/authenticationContextClassReferences'. Add to the row note: 'The request body supplies id, displayName and description, and sets isAvailable to true to publish the context to apps.' | Source: https://learn.microsoft.com/graph/api/conditionalaccessroot-post-authenticationcontextclassreferences
- [supported, minor] controls[1].api; Governance controls table / command: POST /beta/identity/conditionalAccess/policies can create a policy targeting conditions.applications.includeAuthenticationContextClassReferences with user assignments and grant controls. | Found: includeAuthenticationContextClassReferences | String collection | Authentication context class references include. Supported values are c1 through c25. | Fix: Set controls[1].api.call and its table rendering to 'POST /beta/identity/conditionalAccess/policies'. Add to its note: 'The request body targets the context through conditions.applications.includeAuthenticationContextClassReferences and supplies user assignments and grant controls.' The cited create-policy reference confirms the POST operation and body structure. | Source: https://learn.microsoft.com/graph/api/resources/conditionalaccessapplications?view=graph-rest-beta
- [supported, minor] front matter: licensing.model / licensing: The feature's licensing model is unknown, with a known Conditional Access prerequisite but no published additional Teams-specific entitlement. | Found: Using this feature requires Microsoft Entra ID P1 licenses. ... Customers with Microsoft 365 Business Premium licenses can also use Conditional Access features. | Fix: Set licensing.model to 'included' under the standard for a new option within a licensed product. Set licensing.notes to 'Conditional Access requires Microsoft Entra ID P1 licenses; customers with Microsoft 365 Business Premium licenses can also use Conditional Access features. An additional Teams licence specific to this feature is not yet published.' | Source: https://learn.microsoft.com/entra/identity/conditional-access/overview
- [supported, minor] Risk assessment: Change & support / applicability: Guests using unmanaged devices are an example of participants who may fail a device-compliance requirement. | Found: Such policies can block external user access, because an external user can't register their unmanaged device with the resource organization. Devices can only be managed by a user's home tenant. | Fix: Add https://learn.microsoft.com/entra/external-id/authentication-conditional-access to sources for the unmanaged-guest-device example. Keep the existing Open questions caveat about participant-type support for this new meeting feature. | Source: https://learn.microsoft.com/entra/external-id/authentication-conditional-access#conditional-access-for-external-users
-->
