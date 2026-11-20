---
title: "Microsoft Teams: admin recommendations to enable agents for applications already in use"
slug: "microsoft-teams-enable-agents-for-existing-applications-in-your-organization"
roadmapId: 569608
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams admin center can recommend Teams agents for applications your users already sign in to. Learn says recommendations are off until an administrator consents to sharing sign-in activity data; no action is needed unless you want it."
status: "rolling-out"
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
  notes: "Not yet published: the feature's Learn page and MC1481316 name no licence, prerequisite licence or meter for agent recommendations at the time of writing (November 2026). Any price for a recommended third-party app is not stated for this feature."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["teams","agents","admin-center","admin-controls","app-management","adoption","privacy","purview","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 569608"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569608"
    kind: "roadmap"
  - title: "Discover agents for apps used in your organization"
    url: "https://learn.microsoft.com/microsoftteams/agents-existing-applications"
    kind: "learn"
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
related: ["microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","auditing"]
controls:
  - governs: "Whether agent recommendations are enabled (consent to share sign-in activity data)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Privacy and data usage"
      docs: "https://learn.microsoft.com/microsoftteams/agents-existing-applications"
    api: null
    note: "Path is the documented way to opt out. Opt in from the Get relevant agent recommendations card on Manage apps (Agree and unlock insights). Teams Administrator role for the admin center."
  - governs: "Who a recommended agent is made available to or installed for"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Filter by action > Agents from applications used in your org > Review > agent > Add users"
      docs: "https://learn.microsoft.com/microsoftteams/agents-existing-applications"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app ID> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Teams Administrators need a Global Administrator to grant consent at the Permissions step. The cmdlet is the general per-app availability command; Learn describes the workflow only in the admin center."
  - governs: "Automatic addition of new users who sign in to the application to the agent's group"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and Groups"
      docs: "https://learn.microsoft.com/microsoftteams/agents-existing-applications"
    api: null
    note: "Turn off automatic addition on the Users and Groups tab. It is first set with the option Add new users to this group when they sign in to the application on the Review and finish step."
  - governs: "Whether a recommended agent or app is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Existing control. The recommended list shows whether each agent is unblocked or blocked in your organisation."
  - governs: "Bulk availability of third-party agents and apps"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Existing control, not specific to this feature. Under app-centric management it does not override app-level configurations."
confidence: "high"
created: "2026-11-16"
updated: "2026-11-20"
roadmapModified: "2026-11-19T21:32:07"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: covers the roadmap item and MC1481316, and records that no Learn page or enablement setting is documented yet."
  - date: "2026-11-16"
    note: "Corrected after verification: PowerShell examples now match the cmdlet reference, the unified app management prerequisite is stated, and the recommendations page is no longer placed on Manage apps."
  - date: "2026-11-16"
    note: "Corrected after verification: the PowerShell control line now shows one complete command, with the selected-users alternative given separately, and the Third-party apps toggle note states that it does not override app-level settings."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed"
  - date: "2026-11-20"
    note: "Status is now Rolling out. A Learn page now documents the feature: recommendations are off by default and need consent to share sign-in activity data; added the opt-out path, the enablement workflow and automatic group addition."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9f373eaf5603875b78ec015ce154070f"
---

## What's changing

The Teams admin center can now recommend Teams agents and apps that match applications your users already sign in to, such as ServiceNow, Workday and Jira. Microsoft's Learn page, "Discover agents for apps used in your organization", describes how an administrator makes a recommended app available, or deploys it, to users who accessed or signed in to those applications with their work accounts outside Teams.

Learn states that agent recommendations are turned off by default and that the organisation must consent to sharing sign-in activity data before any are generated. Once enabled, the list on the **Manage apps** page shows agents for applications users actively sign in to but do not yet have in Teams, with the number of users in each case. An administrator can then make an agent available to everyone, to specific users or groups, or to users who recently accessed the related application. When a selection is based on users of an application, the Teams admin center creates a security group for them, and an option lets future users who sign in to that application be added to the group automatically.

Microsoft's notice MC1481316 (published 2026-09-28) says the same in outline: no Teams apps or agents are enabled automatically, existing availability and installation settings do not change unless an administrator acts, and no action is required unless you want to use the feature. It gives the rollout, for both Targeted Release and General Availability (Worldwide, GCC), as beginning in early November 2026 and expected to complete by mid-November 2026. The roadmap record lists the item as Rolling out with a target of November CY2026, for Worldwide (Standard Multi-Tenant) and GCC, on the web. The notice sets no act-by date.

## Why it matters

This turns app and agent enablement from something users request into something an administrator is prompted to do, and it rests on one decision that is easy to miss: consenting to the use of sign-in activity data. Learn says that data comes from Microsoft Purview Audit and is used only to recommend Teams agents. Learn says recommendations are not generated until the organisation consents, and the notice says no apps or agents are enabled automatically, so a tenant that does nothing sees no recommendations and no change to availability.

The second decision is scope. Availability set to Everyone covers guests, whereas specific users and groups does not. The option to add future users automatically turns a single review into an ongoing rule, so decide it deliberately on the **Review and finish** step rather than leaving it to whoever happens to be working through the list.

## Risk assessment

**Data exposure**
- Once consent is given, the Teams admin center uses sign-in activity data from Microsoft Purview Audit to identify the applications users access with work accounts. Learn says the data is used only to recommend Teams agents. Treat the consent as a data-use decision for your privacy and compliance owners; the opt-out is in the controls table.
- The recommended list shows users who sign in to an application but lack the agent, and Learn says the list of users can be exported. Handle an export as personal data.
- A recommended third-party agent runs under its developer's terms. Learn says developers disclose what data the agent uses in its terms of use and privacy policy, reachable from the app details page; read them before making the agent available.

**Security & identity**
- The **Permissions** step requires consent to the agent's permissions. Learn says a Teams Administrator must ask a Global Administrator to grant it, so the step is a point at which a second person can check what the agent asks for.
- Availability set to Everyone covers all org users, new users and guests; specific users or groups excludes guests even if they are assigned. Choose the narrower option unless guests should have the agent.

**Autonomy & actions**
- The recommendation itself changes nothing; selections take effect only when an administrator selects **Apply**. The security group and the option to add users automatically when they sign in to the application are the one part that keeps acting afterwards, until it is turned off in the controls table.
- What an enabled agent can do is defined by that agent and is not described for this feature.

**Change & support**
- Learn says the changes from the enablement workflow might take a few hours to take effect, and the app-centric management page says availability changes take up to 24 hours and, in rare cases, up to six days to reach the client. Expect lag when users ask why an agent has not appeared.
- In Microsoft 365 Government (GCC, GCCH and DoD), Learn says all third-party agents and apps are blocked by default, and this item lists GCC. How recommendations behave there is not stated on the feature's page.

## Cost and licensing

**Licence.** The feature's Learn page and MC1481316 name no licence or meter for agent recommendations (Not yet published). The Teams admin center itself requires a Teams Administrator role, which is a role, not a licence.

**Meter.** No meter is documented for this feature at the time of writing (November 2026).

**Indirect costs.** Administrator time to review recommendations, brief the Teams administrators who own app governance and deployment (which the notice recommends), and handle the consent and permissions steps. Learn says app developers can share pricing details for paid apps through the app details page, so check whether a recommended agent needs a subscription with its vendor before making it available; whether it does is not stated for this feature.

## Scope

The feature is aimed at Teams administrators who manage agent and app deployment, in organisations that use third-party applications with corresponding Teams apps or agents (MC1481316). It recommends agents for applications that users sign in to with work accounts but for which the agent is not yet available to them in Teams.

The roadmap lists Worldwide (Standard Multi-Tenant) and GCC, the web platform, and the General Availability and Targeted Release phases; rollout is described as early to mid-November 2026. Using the Teams admin center requires a Teams Administrator role, and a Teams Administrator who reaches the **Permissions** step must ask a Global Administrator to grant consent. Users gain access only where an administrator makes an agent available or installs it.

## Governance guidance

### Before rollout
- Agree with your privacy and compliance owners whether to consent to sharing sign-in activity data from Microsoft Purview Audit, and name who will select **Agree and unlock insights**.
- Identify the Global Administrator who will grant consent at the **Permissions** step, because a Teams Administrator cannot grant it alone.
- Decide whether recommended agents go to specific users and groups, to users who recently accessed the application, or to Everyone, remembering that Everyone includes guests.
- Check the **Third-party apps** toggle and each candidate agent's blocked or allowed status, which the recommended list shows.

### At rollout
- Open Teams apps > Manage apps and filter by **Agents from applications used in your org** to see whether the card has reached your tenant.
- Opt in only after the data-use decision is made; opt-out is available later under **Privacy and data usage**.
- Read each agent's terms of use and privacy policy on its app details page before selecting **Add users**.
- Decide on the **Review and finish** step whether to add new users to the group automatically when they sign in to the application.

### After rollout
- Compare, on the agent's **Users and groups** tab, the users it is available to with the users the group contains, and narrow or widen availability.
- Allow for the lag Learn describes before concluding an agent has not been applied.
- Turn off automatic addition, or opt out of recommendations, if the group grows beyond what you intended.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether agent recommendations are enabled (consent to share sign-in activity data)</strong><br><small>Tenant</small><br><small class="controls__note">Path is the documented way to opt out. Opt in from the Get relevant agent recommendations card on Manage apps (Agree and unlock insights). Teams Administrator role for the admin center.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Privacy and data usage <a href="https://learn.microsoft.com/microsoftteams/agents-existing-applications" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who a recommended agent is made available to or installed for</strong><br><small>App</small><br><small class="controls__note">Teams Administrators need a Global Administrator to grant consent at the Permissions step. The cmdlet is the general per-app availability command; Learn describes the workflow only in the admin center.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Filter by action › Agents from applications used in your org › Review › agent › Add users <a href="https://learn.microsoft.com/microsoftteams/agents-existing-applications" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app ID&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Automatic addition of new users who sign in to the application to the agent's group</strong><br><small>App</small><br><small class="controls__note">Turn off automatic addition on the Users and Groups tab. It is first set with the option Add new users to this group when they sign in to the application on the Review and finish step.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and Groups <a href="https://learn.microsoft.com/microsoftteams/agents-existing-applications" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a recommended agent or app is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Existing control. The recommended list shows whether each agent is unblocked or blocked in your organisation.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Bulk availability of third-party agents and apps</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not specific to this feature. Under app-centric management it does not override app-level configurations.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Third-party apps <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents the opt-in and opt-out of recommendations only in the Teams admin center; no PowerShell or Graph call for them is documented at the time of writing (November 2026). Opting in is done from the **Get relevant agent recommendations** card on **Manage apps** (**Agree and unlock insights**), and the table gives the path Learn documents for opting out.

Selections made in the workflow are added to the agent's existing availability and installation settings, and existing assignments are not affected. The org-wide **Third-party apps** toggle does not override app-level configuration, and Learn says org-wide settings do not apply to apps you have set individually or to blocked apps, so use the per-agent settings for individual decisions.

Using the Teams admin center requires a Teams Administrator role. If your organisation has not migrated to unified app management, Learn says to allow an app or agent in both the Teams admin center and the **Integrated apps** page in the Microsoft 365 admin center; after migration, either is enough.

## Open questions

- Does the feature need a licence, or depend on auditing being turned on or on a particular Microsoft Purview Audit licence, given that it reads sign-in activity data from Purview Audit? The Learn page names none; watch that page and Message center.
- How do recommendations behave in GCC, where Learn says third-party agents and apps are blocked by default and the roadmap lists GCC? The feature's page does not say.
- Which administrator roles may consent to sharing sign-in activity data, beyond the Teams Administrator role needed for the Teams admin center? Watch the Learn page.
- Will Microsoft document a PowerShell or Graph call for opting in or out of recommendations and for the automatic-addition option?

<!-- rationale
risk: Low. Learn says agent recommendations are turned off by default and need the organisation's consent to share sign-in activity data; the notice says no apps or agents are enabled automatically. The exposure is what an administrator then chooses.
cost: Low. The only cost the sources show is administrator time to review recommendations and set availability; no licence or meter for the feature is published, and any price for a third-party app is the app developer's to state.
impact: Low. Teams administrators see the recommendations; other users notice only if an administrator makes a recommended agent available or installs it for them.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance guidance: At rollout / admin-path: The recommended-agent workflow is reached through Teams apps > Manage apps > Filter by action > Agents from applications used in your org > Review > agent > Add users. | Found: In the recommended agents list, select the agent, and then select Add users to proceed to the Users step. | Fix: Complete controls[1].ui.path as 'Teams apps > Manage apps > Filter by action > Agents from applications used in your org > Review > agent > Add users > Users'. The Users step is where the cited page says to select users to install the agent for or make it available to. | Source: https://learn.microsoft.com/microsoftteams/agents-existing-applications
- [supported, minor] controls[4].ui / admin-path: The bulk third-party-app availability control is under Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps. | Found: On Manage apps page, under the Actions menu, select Org-wide app settings. Under Third-party apps, a single control manages the bulk availability of both the new and existing third-party agents and apps. | Fix: Complete controls[4].ui.path as 'Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps > Let users install and use available apps by default'. The setting label is documented at the already cited https://learn.microsoft.com/microsoftteams/app-centric-management. | Source: https://learn.microsoft.com/microsoftteams/manage-apps
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because no feature-specific licence is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included'. Replace licensing.notes with 'Teams users need a Teams licence, except when joining meetings anonymously (https://learn.microsoft.com/microsoftteams/user-access). Microsoft has not published a licence or meter specific to agent recommendations as of November 2026.' Add that source and state the general Teams requirement in Cost and licensing while retaining the narrower feature-specific gap. | Source: https://learn.microsoft.com/microsoftteams/user-access
-->
