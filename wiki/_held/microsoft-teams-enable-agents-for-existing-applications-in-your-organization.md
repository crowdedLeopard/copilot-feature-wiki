---
title: "Microsoft Teams: admin recommendations to enable agents and apps for applications already in use"
slug: "microsoft-teams-enable-agents-for-existing-applications-in-your-organization"
roadmapId: 569608
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams admin center will recommend Teams agents and apps matching applications your users already sign in to. Nothing is enabled automatically; administrators choose who gets each one. No action is required unless you want it."
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
  notes: "Not yet published: no licence or meter for the recommendations feature is documented at the time of writing (November 2026). Learn notes that some Teams apps require a separate service subscription."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","agents","admin-center","admin-controls","adoption","governance","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 569608"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569608"
    kind: "roadmap"
  - title: "MC1481316: Microsoft Teams: Enable Teams apps and agents for existing applications in your organization"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1481316"
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
  - title: "Purchase third-party Microsoft Teams apps and manage subscriptions and licenses"
    url: "https://learn.microsoft.com/microsoftteams/purchase-third-party-apps"
    kind: "learn"
  - title: "Who can use a recommended agent or app (everyone, specific users and groups, or no one) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["agent-365-control-plane-for-agents"]
controls:
  - governs: "Whether the app and agent recommendations feature is enabled"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1481316 says admins must enable the feature; no setting, path or command is documented at the time of writing (November 2026)."
  - governs: "Who can use a recommended agent or app (everyone, specific users and groups, or no one)"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Availability > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app ID> -AppAssignmentType Everyone | UsersAndGroups [-Groups <groups>] [-Users <users>]"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "General control for any Teams app or agent: Microsoft has not confirmed the recommendations workflow uses it. Teams Administrator role. Changes take up to 24 hours to apply."
  - governs: "Bulk availability of third-party agents and apps"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Existing control, not specific to this feature. It does not override apps whose availability you set individually."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-09-28T22:58:08"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: covers the roadmap item and MC1481316, and records that no Learn page or enablement setting is documented yet."
version: 1
---

## What's changing

The Teams admin center will recommend Teams agents and apps that correspond to third-party applications your organisation already uses, such as ServiceNow, Workday and Jira. The roadmap item describes this as discovering and enabling the matching Teams agents, with recommendations for high-value agents and visibility of any configuration changes the enablement workflow requires.

Microsoft's notice MC1481316 adds detail. Recommendations are prioritised using usage signals. An administrator can make a recommended app or agent available to users already using the corresponding application, to specific users and groups, or to everyone in the organisation, and can choose to install it for applicable users. The notice states that no Teams apps or agents will be enabled automatically and that existing app availability and installation settings will not change unless an administrator acts. It also states that administrators must enable the feature, and that Microsoft then uses signals indicating that users have signed in to applications within your organisation to identify relevant Teams apps and agents.

The roadmap record lists the item as In development with a target of November CY2026, release phases General Availability and Targeted Release, Worldwide (Standard Multi-Tenant) and GCC, on the web. MC1481316 (published 2026-09-28) gives the rollout for both Targeted Release and General Availability (Worldwide, GCC) as beginning in early November 2026 and expected to complete by mid-November 2026. The notice sets no act-by date and says no action is required unless you want to use the feature.

Microsoft Learn has no page for this recommendations feature at the time of writing (November 2026), so its behaviour here is taken from the roadmap item and the notice. The existing **Popular apps in your org** widget on the **Manage apps** page is a separate, documented feature that shows the most-used third-party apps not yet installed for everyone; the sources do not say how it relates to the new recommendations.

## Why it matters

This turns app and agent enablement from something users ask for into something an administrator is prompted to do, using sign-in signals the notice says Microsoft collects. The decision that matters is scope: a recommended agent can be made available to everyone, and the app-availability setting for Everyone covers guests as well as members. Choosing the narrower option, specific users and groups, keeps new agents with the people who already use the underlying application.

If nobody acts, nothing changes: the notice says no apps or agents are enabled automatically. The cost of inaction is the missed adoption the feature is meant to produce. The cost of acting carelessly is exposing a third-party agent, which has its own data handling terms, to more users than intended.

## Risk assessment

**Data exposure**
- Microsoft's notice says application sign-in signals are used to identify relevant Teams apps and agents. Administrators should read this as a new use of usage data for recommendations; the notice does not say where the signals come from beyond sign-ins to applications within your organisation.
- An enabled third-party agent works under its developer's terms. The Manage apps page shows the developer's terms of use and privacy policy for each agent or app, so check them before making a recommended agent available.

**Security & identity**
- Availability set to Everyone covers org users, new users and guests, whereas Specific users or groups excludes guests even if they are assigned. Pick the narrower option unless guests should have the agent.
- Only an administrator turns a recommendation into availability, so the control is the existing per-app availability setting in the table below.

**Autonomy & actions**
- The recommendation step itself takes no action: the notice says no Teams apps or agents are enabled automatically. What an enabled agent can do is defined by that agent, which the sources for this item do not describe.

**Change & support**
- Availability changes take up to 24 hours to apply, and in rare cases up to six days to reach the client, so expect lag between enabling an agent and users seeing it.
- In GCC, Learn states that all third-party agents and apps are blocked by default, and the roadmap lists GCC for this item. Microsoft has not said how recommendations behave there.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for the recommendations feature at the time of writing (November 2026), and MC1481316 mentions none. Treat licensing as Not yet published.

The cost that is visible is administrator time to review recommendations and to brief the administrators who manage app governance and deployment, which the notice recommends. Separately, the Learn page on purchasing third-party apps states that "Some Teams apps require purchasing a service subscription to use app functionality." Making a recommended agent available does not remove any subscription the underlying third-party service requires.

## Scope

The feature is aimed at Teams administrators who manage agent and app deployment, in organisations that use third-party applications with corresponding Teams apps or agents (MC1481316). The roadmap lists Worldwide (Standard Multi-Tenant) and GCC, the web platform, and the General Availability and Targeted Release phases. Rollout is described as beginning in early November 2026 and expected to complete by mid-November 2026, while the roadmap record still shows In development.

Learn says that using the Teams admin center requires a Teams Administrator role, and that a higher-privilege role can also do the governance tasks. Whether the recommendations feature needs a particular role or prerequisite is not stated. Users gain access only where an administrator makes an app or agent available.

## Governance guidance

### Before rollout
- Ask Teams administrators who own app governance to decide who may enable the recommendations feature, and agree whether recommended agents default to specific users and groups rather than Everyone.
- Review the **Third-party apps** toggle under Org-wide app settings, because it governs bulk availability of third-party agents and apps and is not changed by the recommendations.
- Identify which Microsoft Entra ID or Microsoft 365 groups map to each application's users so that availability can be targeted at them.
- Update internal Teams app-management documentation, as MC1481316 recommends.

### At rollout
- Check the **Manage apps** page for the recommendations once the notice's rollout window (early to mid-November 2026) has passed for your tenant.
- Decide whether to enable the feature; the notice says administrators must enable it and that no agents or apps are enabled automatically.
- Read each agent's app details page, including the developer's terms of use and privacy policy, before making it available.

### After rollout
- Compare the number of users for whom an agent is available with its users on the **Users and groups** tab, and widen or narrow availability accordingly.
- Review availability changes after the delay Learn describes: up to 24 hours, and in rare cases up to six days.
- Revisit recommendations when Microsoft publishes the feature's Learn page, to confirm the enablement path and any licensing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the app and agent recommendations feature is enabled</strong><br><small>Tenant</small><br><small class="controls__note">MC1481316 says admins must enable the feature; no setting, path or command is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can use a recommended agent or app (everyone, specific users and groups, or no one)</strong><br><small>App</small><br><small class="controls__note">General control for any Teams app or agent: Microsoft has not confirmed the recommendations workflow uses it. Teams Administrator role. Changes take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Availability › Edit availability <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app ID&gt; -AppAssignmentType Everyone | UsersAndGroups [-Groups &lt;groups&gt;] [-Users &lt;users&gt;]</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Bulk availability of third-party agents and apps</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not specific to this feature. It does not override apps whose availability you set individually.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Third-party apps <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for the recommendations feature itself is documented, and the notice says administrators must enable it, so that row of the table shows the gap. Once a recommendation is acted on, the controls are the existing app-availability settings: per-app availability (Everyone, specific users and groups, or no one) and the org-wide Third-party apps toggle. The org-wide toggle is a bulk setting that does not override apps whose availability you set individually.

To apply the existing controls, Learn states that a Teams Administrator role is needed for the Teams admin center. If your organisation has moved to unified app management, Learn says apps and Copilot agents can be allowed in the Teams admin center or on the Integrated apps page in the Microsoft 365 admin center, and changes sync between them. No PowerShell cmdlet for the org-wide Third-party apps toggle was found in Learn at the time of writing (November 2026).

## Open questions

- Where in the Teams admin center is the recommendations feature enabled, and is there an Off setting or a PowerShell or Graph equivalent? Watch MC1481316 and the Manage apps Learn page.
- Which licence, if any, does the feature need, and is anything metered? Not yet published; watch Message center.
- Which sign-in signals are read, from which sources, and where are they processed or stored? The notice states only that signals indicating users have signed in to applications within the organisation are used.
- How do the recommendations behave in GCC, where Learn says third-party agents and apps are blocked by default, and how do they relate to the existing Popular apps in your org widget?
- What does the enablement workflow show about required configuration changes for an agent, and does it change anything itself?

<!-- rationale
risk: Low. Microsoft's notice MC1481316 says no Teams apps or agents are enabled automatically and existing availability settings do not change unless an administrator acts; the exposure is the choices an administrator makes.
cost: Low. The only cost the sources show is administrator time to review recommendations; Microsoft has not published a licence or meter for the feature, and a third-party app may need its own paid subscription.
impact: Low. Administrators see the recommendations; users notice only if an administrator makes a recommended agent or app available or installs it for them.
-->
