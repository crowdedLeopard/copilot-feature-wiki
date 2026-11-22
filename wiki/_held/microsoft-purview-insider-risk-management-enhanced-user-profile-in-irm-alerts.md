---
title: "Microsoft Purview Insider Risk Management: expanded user profile in alerts"
slug: "microsoft-purview-insider-risk-management-enhanced-user-profile-in-irm-alerts"
roadmapId: 564619
topic: "governance"
products: ["Microsoft Purview"]
summary: "Analysts opening an Insider Risk Management alert in the unified alert experience can see more user attributes, but only when username anonymisation is off. No separate switch or licence is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions, and the Purview service description lists it as included in Microsoft 365 E5/A5/G5 and related plans. No licence or price specific to the expanded profile is published."
audiences: ["compliance","security","service-owner"]
tags: ["insider-risk-management","purview","privacy","user-profiles","administrative-units","hris-import","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 564619"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564619"
    kind: "roadmap"
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
  - title: "Manage the workflow with the Insider Risk Management users dashboard"
    url: "https://learn.microsoft.com/purview/insider-risk-management-users"
    kind: "learn"
  - title: "Manage username privacy in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-unified-alert-queue","microsoft-purview-insider-risk-management-expanding-note-capabilities-across-alerts-and-ca","microsoft-purview-introducing-irm-alert-classification","microsoft-purview-insider-risk-management-ds-triage-agent-for-irm-available-in-defender"]
controls:
  - governs: "Whether usernames are anonymised, which hides the expanded user profile"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Privacy"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    api: null
    note: "Applies to all policies and all users with current or past policy matches. Learn says expanded profile details are not visible when it is enabled."
  - governs: "Who can open and investigate Insider Risk Management alerts"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Path shown is for the Insider Risk Management role group; the Analysts and Investigators groups also access alerts. Needs a role that can assign role group members."
  - governs: "A separate switch for the expanded user profile in alerts"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents none at the time of writing (November 2026). The Privacy setting is the closest control."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: documents the expanded user profile in the unified alert experience, its dependence on the Privacy setting, and the gaps between the roadmap and Learn."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 71 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 66
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "e58a963321a53c7972f1ad608700eeab"
---

## What's changing

The User section of an Insider Risk Management alert now shows more profile and risk attributes, so analysts can understand the person behind an alert without leaving the alert. The roadmap item names employee type, office location, start date, policy inclusion, priority user group status and last working date, and says more attributes will be added over time. It places the feature in the new alert workflow, in the Alert Details panel.

Microsoft Learn describes this as **User profile details (preview)** in the unified alert experience. To open it, select **Alerts (preview)** in the left navigation, select an alert, scroll down to **User details** and select **View user details**. Learn lists these additional signals from the user's Microsoft Entra profile: Office location, Employee type, Department, Last working date and Entra account deletion date. It also lists these Insider Risk Management signals: Past alert and case history, Priority user group status, Policy inclusion and HR Connector last working date.

Two differences between the sources matter. The roadmap lists a start date, but the Learn list at the time of writing (November 2026) has no start date. The roadmap marks the item Launched with General Availability and Preview release phases, while Learn labels the profile details and the unified alert experience as preview.

The roadmap record gives a preview date of July CY2026 and a target date of October CY2026, with clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web. Learn also says that after August 31 only the unified alert experience will be supported.

## Why it matters

This puts more employee context in front of alert reviewers, which helps triage but widens what a reviewer can learn about a named person. Attributes such as employee type, office location, last working date and Entra account deletion date come from the user's Entra profile or from Insider Risk Management data, and they appear on every alert a reviewer opens in the unified experience. Expect privacy and HR stakeholders to ask who can see them.

The gate is the username privacy setting. Learn says the expanded profile is not visible when pseudo-anonymisation is enabled, and its general Insider Risk Management text says users are pseudonymised by default. Microsoft has not stated whether the expanded profile is visible in a tenant that has not changed the Privacy setting, so confirm what your analysts actually see before telling them what to expect.

## Risk assessment

**Data exposure**

- Reviewers who open an alert in the unified experience can see Entra profile attributes (Office location, Employee type, Department, Last working date, Entra account deletion date) and Insider Risk Management signals (Past alert and case history, Priority user group status, Policy inclusion, HR Connector last working date). Showing priority user group status and policy inclusion also tells the reviewer how the organisation is monitoring that person.
- Anonymisation hides the expanded profile. Learn says the details are not visible when pseudo-anonymization is enabled, and that user profile information in alert and case details is unavailable when **Show anonymized versions of usernames** is chosen.

**Security & identity**

- Access follows Insider Risk Management role groups. The permissions page shows *Access & investigate alerts* as Yes for the Insider Risk Management, Analysts and Investigators role groups and No for Admins, Auditors and Approvers.
- Where policies are scoped by administrative units, restricted administrators only see alerts for users in their scope; unrestricted administrators see all alerts for all users.

**Autonomy & actions**

- No change documented: the feature adds read-only context to an alert, and Learn describes no automated action tied to the profile.

**Change & support**

- Analysts may report that fields are missing. Learn gives anonymisation as the documented reason the expanded profile is hidden, and notes that last working date is shown "if available".
- The Triage Agent dashboard is a separate view: Learn says user names in prioritised alerts are not anonymised there when anonymisation is enabled. Check which view analysts use.

## Cost and licensing

Learn's planning page says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions, and the Purview service description lists it as included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. The Learn sections on this feature name no licence or meter of their own, and Microsoft has not published a price or meter specific to the expanded user profile.

Learn also says some Insider Risk Management indicators need pay-as-you-go billing. The expanded profile is not listed among them. The indirect cost is admin time to review the Privacy setting and role group membership, and to brief analysts on the new fields.

## Scope

**Who sees it:** members of the Insider Risk Management, Insider Risk Management Analysts and Insider Risk Management Investigators role groups, who are the groups that can access and investigate alerts. Roles that manage settings, such as the Insider Risk Management Admins group, are not given alert access in the permissions table.

**Where:** the web, in the Microsoft Purview portal, in the unified alert experience (Learn labels this preview) through the Alert Details panel.

**Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.

**Prerequisites:** the Learn page ties the expanded profile to the unified alert experience and to anonymisation being off. It does not document further prerequisites for this feature.

## Governance guidance

### Before rollout

- Decide with your privacy and HR contacts whether alert reviewers may see Entra profile attributes and Insider Risk Management history, and record the decision against the **Privacy** setting for Insider Risk Management.
- Check the current value of the Privacy setting (Show anonymized versions of usernames or not) and what an analyst sees in the Alert Details panel, because Learn says the expanded profile is hidden when anonymisation is on.
- Review membership of the Insider Risk Management, Analysts and Investigators role groups so that only intended reviewers can open alerts.
- Confirm Entra profile fields such as employee type, office location and department are accurate for users in policy scope, since reviewers will rely on them.

### At rollout

- Tell analysts where to find the profile: Alerts (preview), select an alert, scroll to User details, then View user details.
- Explain to analysts that missing fields can mean anonymisation is on, or that a value such as last working date is not available.
- Where policies are scoped by administrative units, confirm restricted administrators still see only the alerts for users in their scope.

### After rollout

- Revisit the Privacy setting if reviewers report that profile details are missing or that more detail is visible than your decision allowed.
- Check the Learn page on investigating activities for new user attributes, which the roadmap says will continue to be added.
- Review role group membership again when analysts or investigators change team.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether usernames are anonymised, which hides the expanded user profile</strong><br><small>Tenant</small><br><small class="controls__note">Applies to all policies and all users with current or past policy matches. Learn says expanded profile details are not visible when it is enabled.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Privacy <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-privacy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can open and investigate Insider Risk Management alerts</strong><br><small>Group</small><br><small class="controls__note">Path shown is for the Insider Risk Management role group; the Analysts and Investigators groups also access alerts. Needs a role that can assign role group members.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A separate switch for the expanded user profile in alerts</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents none at the time of writing (November 2026). The Privacy setting is the closest control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Privacy setting is the control Learn ties to this feature: it hides the expanded profile when anonymisation is on. It applies to all users with current and past policy matches and to all policies, so it cannot be used to hide only some of the new fields. Learn documents no separate switch for the expanded profile itself.

Changing the setting needs an admin account in the Microsoft 365 organisation, per the Privacy page. Role group changes need membership of a role or role group that can assign users to Insider Risk Management role groups, such as Microsoft Entra Global Administrator or Compliance Administrator, per the permissions page. Role group permissions can take up to 30 minutes to apply.

Administrative units scope which alerts restricted administrators see, but Learn describes this for alerts and users, not for the expanded profile fields, and the permissions page gives no admin unit path for this feature. Exported alerts show usernames through the export API and eDiscovery export even when anonymisation is on, while CSV exports keep anonymisation.

## Open questions

- Is the expanded user profile visible in a tenant that has not changed the Privacy setting, given Learn's general statement that users are pseudonymised by default? Watch the Learn page for username privacy and the unified alert experience.
- Will Microsoft add a way to show the expanded profile while keeping usernames anonymised, or to hide individual attributes? Learn documents neither at the time of writing (November 2026).
- Why does the roadmap list start date when Learn's list of expanded profile signals does not? Watch the Learn page on investigating Insider Risk Management activities.
- When does the unified alert experience leave preview, and does the roadmap's General Availability phase mean the profile details are now generally available? The Learn text still labels them preview.
- What does HR Connector last working date show when it differs from the Entra last working date? Learn lists both without describing how they relate.

<!-- rationale
risk: Medium. Analysts and investigators see more attributes about the user behind an alert, such as employee type, office location and last working date. Learn says the details are hidden when pseudo-anonymisation is enabled, and role groups already control access.
cost: Low. Learn describes Insider Risk Management as included in a wide selection of Microsoft 365 subscriptions, and no separate charge for the expanded profile is published. The cost is admin time to check privacy and role settings.
impact: Medium. Insider Risk Management analysts and investigators notice it in the alert details; other users do not see it. The users named in alerts are affected indirectly, because more of their profile is shown to reviewers.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions: first question / default: Microsoft has not stated whether the expanded profile is visible when the Privacy setting has not been changed. | Found: Built with privacy by design, users are pseudonymized by default ... When pseudo-anonymization is enabled, the expanded user profile details aren't visible. | Fix: Set defaultState to 'admin-opt-in'. Replace the uncertainty sentence with 'Users are pseudonymised by default, which hides the expanded profile; an administrator must turn off username anonymisation to expose it.' Remove the first Open questions bullet. The activities page states both the default and its effect; the cited Privacy page documents the administrator's setting. | Source: https://learn.microsoft.com/purview/insider-risk-management-activities
- [contradicted, blocker] Why it matters: first paragraph / behaviour: The additional attributes appear on every alert a reviewer opens in the unified experience. | Found: When pseudo-anonymization is enabled, the expanded user profile details aren't visible. | Fix: Delete 'and they appear on every alert a reviewer opens in the unified experience'. This unconditional assertion also conflicts with the page's own summary and privacy explanation. | Source: https://learn.microsoft.com/purview/insider-risk-management-activities
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The expanded profile is read-only. | Found: Searched: 'Insider Risk Management user profile automated read-only HR Connector last working date'; read activities User profile details and users View user details. They describe viewing aggregated signals, but do not state a read-only restriction. | Fix: Replace 'the feature adds read-only context to an alert' with 'the feature displays additional context in an alert'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance: At rollout / admin-path: In Purview, the profile is reached through Alerts (preview), an alert, User details and View user details. | Found: Select Alerts (preview) in the left navigation. Select an alert. Scroll down to User details. Select View user details. | Fix: Prefix the prose route with the solution: 'In the Microsoft Purview portal, open Insider Risk Management > Alerts (preview) > alert > User details > View user details.' The cited activities page locates Alerts (preview) in the Insider Risk Management solution. | Source: https://learn.microsoft.com/purview/insider-risk-management-activities
- [supported, minor] controls[0].ui / admin-path: The Privacy control is at Microsoft Purview portal > Settings > Insider Risk Management > Privacy. | Found: Select Settings in the upper-right corner of the page. Select Insider Risk Management to go to the Insider Risk Management settings. Select Privacy. Select the option you want, to show anonymized names or not. | Fix: Complete the path to the deciding option: 'Settings > Insider Risk Management > Privacy > Show anonymized versions of usernames'. The printed path is correct but stops on the setting's page. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-privacy
- [supported, minor] Risk assessment: Change & support / behaviour: The Triage Agent dashboard is a separate view. | Found: user names in prioritized alerts aren't anonymized in the Triage Agent dashboard if Show anonymized versions of usernames is enabled. | Fix: Replace 'The Triage Agent dashboard is a separate view' with 'The Privacy page still describes a Triage Agent dashboard, while the activities page says the unified experience combines classic and agent-triaged alerts and removes dashboard toggling.' Cite https://learn.microsoft.com/purview/insider-risk-management-activities for the conflicting description. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-privacy
- [supported, minor] Cost and licensing / absence: The expanded profile is not listed among pay-as-you-go indicators. | Found: Searched: profile, expanded and pay-as-you-go in the policy indicators reference; read its billing and built-in indicator sections and configure Pay-as-you-go billing. No expanded-profile indicator is listed. | Fix: Cite https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators after 'The expanded profile is not listed among them.' This is the reference that enumerates the indicators.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist asks readers to check administrative-unit scoping, but the controls table has no administrative-unit row. | Found: Where policies are scoped by administrative units, confirm restricted administrators still see only the alerts for users in their scope. ... Table rows: username anonymisation; role group membership; separate profile switch. | Fix: Remove the administrative-unit check from the At rollout checklist; that control has no table row. Keep the verified explanation of administrative-unit scoping in the body.
- [contradicted, minor] front matter: action / consistency: The review action rating presents an already launched change to existing alert context as optional. | Found: action: review ... status: launched ... The User section of an Insider Risk Management alert now shows more profile and risk attributes ... risk: medium | Fix: Set action to 'act-now': the change is launched, adds context to existing alerts when anonymisation is off, and the medium-risk privacy decision and reviewer-access checks remain actionable. The standard's review rating is for capabilities that change nothing until someone chooses them.
-->
