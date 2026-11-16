---
title: "Microsoft Teams: admin recommendations to enable agents and apps for applications already in use"
slug: "microsoft-teams-enable-agents-for-existing-applications-in-your-organization"
roadmapId: 569608
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams admin center will recommend Teams agents and apps that match applications your users already sign in to. Nothing is enabled automatically; administrators choose who gets each one. No action is required unless you want it."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published: no licence or meter for the recommendations feature is documented at the time of writing (November 2026), and MC1481316 names none."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","agents","admin-center","admin-controls","adoption","governance","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 569608"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569608"
    kind: "roadmap"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "MC1481316: Microsoft Teams: Enable Teams apps and agents for existing applications in your organization"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1481316"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Whether the app and agent recommendations feature is enabled"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1481316 says admins must enable the feature; no setting, path or command is documented at the time of writing (November 2026)."
  - governs: "Who can use a recommended agent or app (everyone, specific users and groups)"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Availability > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app ID> -AppAssignmentType Everyone; or -AppAssignmentType UsersAndGroups -OperationType Add -Users <users> -Groups <groups>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "General control: Microsoft has not confirmed the recommendations workflow uses it. Teams Administrator role. If not migrated to unified app management, also allow the app in Microsoft 365 admin center > Integrated apps."
  - governs: "Bulk availability of third-party agents and apps"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Existing control, not specific to this feature; Microsoft has not confirmed how it interacts with the recommendations."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-09-28T22:58:08"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: covers the roadmap item and MC1481316, and records that no Learn page or enablement setting is documented yet."
  - date: "2026-11-16"
    note: "Corrected after verification: PowerShell examples now match the cmdlet reference, the unified app management prerequisite is stated, and the recommendations page is no longer placed on Manage apps."
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
---

## What's changing

The Teams admin center will recommend Teams agents and apps that correspond to third-party applications your organisation already uses, such as ServiceNow, Workday and Jira. The roadmap item describes this as discovering and enabling the matching Teams agents, with recommendations for high-value agents and visibility of any configuration changes the enablement workflow requires.

Microsoft's notice MC1481316 adds detail. Recommendations are prioritised using usage signals. An administrator can make a recommended app or agent available to users already using the corresponding application, to specific users and groups, or to everyone in the organisation, and can choose to install it for applicable users. The notice states that no Teams apps or agents will be enabled automatically and that existing app availability and installation settings will not change unless an administrator acts. It also says that if the feature is enabled, Microsoft uses signals indicating that users have signed in to applications within your organisation to identify relevant Teams apps and agents.

The roadmap record lists the item as In development with a target of November CY2026, release phases General Availability and Targeted Release, Worldwide (Standard Multi-Tenant) and GCC, on the web. MC1481316 (published 2026-09-28) gives the rollout for both Targeted Release and General Availability (Worldwide, GCC) as beginning in early November 2026 and expected to complete by mid-November 2026. The notice sets no act-by date and says no action is required unless you want to use the feature.

Microsoft Learn has no page for this recommendations feature at the time of writing (November 2026), so what is said here about its behaviour is the roadmap's and the notice's description. Learn does document a separate, existing **Popular apps in your org** widget on the **Manage apps** page; the sources do not say how it relates to the new recommendations.

## Why it matters

This moves app and agent enablement from something users ask for towards something an administrator is prompted to do, using sign-in signals that the notice says Microsoft reads. The decision that matters is scope: availability set to Everyone covers guests as well as members, whereas specific users and groups keeps a new agent with the people who already use the underlying application.

If nobody acts, nothing changes: the notice says no apps or agents are enabled automatically. The cost of inaction is the missed adoption the feature is meant to produce; the cost of acting carelessly is exposing a third-party agent, which has its own publisher terms, to more users than intended.

## Risk assessment

**Data exposure**
- The notice says application sign-in signals are used to identify relevant Teams apps and agents once the feature is enabled. Treat this as a new use of usage data; the notice does not say where the signals come from beyond sign-ins to applications within your organisation.
- An enabled third-party agent runs under its publisher's terms, which this item does not describe. Review each agent before making it available.

**Security & identity**
- Per-app availability set to Everyone covers all org users, new users and guests, whereas Specific users or groups excludes guests even if they are assigned. Choose the narrower option unless guests should have the agent.
- Only an administrator turns a recommendation into availability, so the control is the existing per-app availability setting in the table below, which Microsoft has not confirmed the recommendations workflow uses.

**Autonomy & actions**
- The recommendation step takes no action: the notice says no Teams apps or agents are enabled automatically. What an enabled agent can do is defined by that agent and is not described for this item.

**Change & support**
- Availability changes take up to 24 hours to apply and, in rare cases, up to six days to reach the client, so expect lag between enabling an agent and users seeing it.
- In Microsoft 365 Government (GCC, GCC High and DoD), Learn states that all third-party agents and apps are blocked by default, and the roadmap lists GCC for this item. Microsoft has not said how recommendations behave there.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for the recommendations feature at the time of writing (November 2026), and MC1481316 mentions none. Treat licensing as Not yet published.

The cost visible in the sources is administrator time: reviewing recommendations, and communicating the change to the Teams administrators responsible for app governance and deployment, which the notice recommends. Whether a recommended third-party app needs its own subscription with the application's vendor is not stated for this item.

## Scope

The feature is aimed at Teams administrators who manage agent and app deployment, in organisations that use third-party applications with corresponding Teams apps or agents (MC1481316). The roadmap lists Worldwide (Standard Multi-Tenant) and GCC, the web platform, and the General Availability and Targeted Release phases. Rollout is described as beginning in early November 2026 and expected to complete by mid-November 2026, while the roadmap record still shows In development.

Learn says that using the Teams admin center requires a Teams Administrator role. Whether the recommendations feature needs a particular role or prerequisite is not stated. Users gain access only where an administrator makes an app or agent available.

## Governance guidance

### Before rollout
- Ask the Teams administrators who own app governance to decide who may enable the recommendations feature, and agree whether recommended agents default to specific users and groups rather than Everyone.
- Review the **Third-party apps** toggle under Org-wide app settings, which governs bulk availability of third-party agents and apps and is a separate control from the recommendations.
- Identify which groups map to each application's users, so that availability can be targeted at them.
- Update internal Teams app-management documentation, as MC1481316 recommends.

### At rollout
- Check the Teams admin center for the recommendations once the notice's rollout window (early to mid-November 2026) has passed for your tenant; Microsoft has not yet documented the page or the enablement path.
- Decide whether to enable the feature; the notice says administrators must enable it and that no agents or apps are enabled automatically.
- Review each agent's details in Manage apps before making it available.

### After rollout
- Compare the number of users for whom an app is available with its actual users on the **Users and groups** tab, and widen or narrow availability accordingly.
- Allow for the delay Learn describes when checking results: up to 24 hours, and in rare cases up to six days.
- Revisit this page when Microsoft publishes a Learn page for the feature, to confirm the enablement path and any licensing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the app and agent recommendations feature is enabled</strong><br><small>Tenant</small><br><small class="controls__note">MC1481316 says admins must enable the feature; no setting, path or command is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can use a recommended agent or app (everyone, specific users and groups)</strong><br><small>App</small><br><small class="controls__note">General control: Microsoft has not confirmed the recommendations workflow uses it. Teams Administrator role. If not migrated to unified app management, also allow the app in Microsoft 365 admin center &gt; Integrated apps.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Availability › Edit availability <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app ID&gt; -AppAssignmentType Everyone; or -AppAssignmentType UsersAndGroups -OperationType Add -Users &lt;users&gt; -Groups &lt;groups&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Bulk availability of third-party agents and apps</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not specific to this feature; Microsoft has not confirmed how it interacts with the recommendations.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Third-party apps <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for the recommendations feature itself is documented, and the notice says administrators must enable it, so that row shows the gap. Once a recommendation is acted on, the controls are the existing app-availability settings: per-app availability and the org-wide Third-party apps toggle.

Learn states that a Teams Administrator role is needed to use the Teams admin center. If your organisation has not migrated to unified app management, allow the app or agent in both the Teams admin center and the Integrated apps page in the Microsoft 365 admin center; after migration, either centre is enough. At the time of writing (November 2026), Learn documents no PowerShell cmdlet for the org-wide Third-party apps toggle.

## Open questions

- Where in the Teams admin center is the recommendations feature enabled, and is there an off setting or a PowerShell or Graph equivalent? Watch MC1481316 and the Learn Manage apps pages.
- Which licence, if any, does the feature need, and is anything metered? Not yet published; watch Message center.
- Which sign-in signals are read, from which sources, and where are they processed or stored? The notice states only that signals indicating users have signed in to applications within the organisation are used.
- How do the recommendations behave in GCC, where Learn says third-party agents and apps are blocked by default, and how do they relate to the existing Popular apps in your org widget?
- What does the enablement workflow show about required configuration changes for an agent, and does it change anything itself?

<!-- rationale
risk: Low. Microsoft's notice MC1481316 says no Teams apps or agents are enabled automatically and existing availability settings do not change unless an administrator acts; the exposure is the choices an administrator makes.
cost: Low. The only cost the sources show is administrator time to review recommendations and brief app-governance administrators; Microsoft has not published a licence or meter for the feature.
impact: Low. Teams administrators see the recommendations; users notice only if an administrator makes a recommended agent or app available or installs it for them.
-->

<!-- verifier-findings (2026-11-16, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[1].api; Governance controls table / command: Update-M365TeamsApp -Id <app ID> -AppAssignmentType Everyone sets per-app availability to Everyone. | Found: Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -AppAssignmentType Everyone | Fix: Show the two alternatives as separate complete calls rather than joining them with '; or'. Use 'Update-M365TeamsApp -Id <app ID> -AppAssignmentType Everyone' and 'Update-M365TeamsApp -Id <app ID> -AppAssignmentType UsersAndGroups -OperationType Add -Users <users> -Groups <groups>', matching the reference examples. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp
- [supported, minor] controls[2].governs and note; Governance guidance; Governance controls / behaviour: The existing Third-party apps toggle manages bulk availability of third-party agents and apps. | Found: This control doesn't override app-level configurations. The Org-wide app settings don't apply to: All apps that have user assignment set to Specific users and groups and saved by you. | Fix: Add to controls[2].note and the surrounding explanation: 'Under app-centric management, this default applies to new and unmanaged apps; it does not override saved per-app assignments or blocked apps.' The qualification is documented at https://learn.microsoft.com/microsoftteams/app-centric-management#default-settings-for-app-availability. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
-->
