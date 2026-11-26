---
title: "Microsoft Teams: choose the institution type in the Teams for Education Policy Wizard"
slug: "microsoft-teams-edu-tenant-type-selection-in-policy-wizard"
roadmapId: 402185
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Admins of education tenants can pick the institution type (Primary or Secondary, or Higher education) in the Teams for Education Policy Wizard and change it later. Nothing applies until an admin selects Apply."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2024"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Teams for Education requires an Education license in the Microsoft 365 tenant. Microsoft lists Teams as part of the free Microsoft 365 A1 for Students SKU. The wizard page states no separate wizard-specific licence requirement."
audiences: ["m365-admin","service-owner"]
tags: ["teams","policy","admin-center","education"]
sources:
  - title: "Microsoft 365 Roadmap 402185"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=402185"
    kind: "roadmap"
  - title: "Use the Teams for Education Policy Wizard to easily apply policies for a safe learning environment"
    url: "https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu"
    kind: "learn"
  - title: "Set-CsTeamsEducationConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseducationconfiguration?view=teams-ps"
    kind: "learn"
  - title: "Microsoft Teams for Education"
    url: "https://learn.microsoft.com/microsoft-365/education/guide/2-baseline/applications/baseline-apps-teams-what-is-teams"
    kind: "learn"
  - title: "Assign Microsoft Teams licenses for education"
    url: "https://learn.microsoft.com/microsoftteams/teams-edu-licensing"
    kind: "learn"
videos: []
related: ["meeting-policy"]
controls:
  - governs: "Institution type chosen on the first run of the wizard"
    scope: "tenant"
    ui:
      surface: "Microsoft Teams admin center"
      path: "Home > Easy policy setup for a safe learning environment > Quick setup"
      docs: "https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu"
    api: null
    note: "The type is chosen on a wizard page after Quick setup. The Learn page names no required role."
  - governs: "Institution type changed after the wizard has run"
    scope: "tenant"
    ui:
      surface: "Microsoft Teams admin center"
      path: "Home > Easy policy setup for a safe learning environment > Change"
      docs: "https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu"
    api: null
    note: "Changing only the type replaces the educators and staff custom policies and reapplies the student defaults."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-19T01:58:21"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 402185: institution type selection in the Teams for Education Policy Wizard."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 40 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected how existing policy assignments affect the wizard: students need direct and group assignments removed; for educators and staff, the wizard's group policy takes ranking 1 and conflicting direct assignments are removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected licensing (Teams for Education needs an Education license; Teams is in the free Microsoft 365 A1 for Students SKU), the Apply statement now notes later automatic education defaults, and removed the assignment-removal bullet from At rollout."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 50
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "77362a674162a8d3ac9e931354ef31d3"
---

## What's changing

The Microsoft Teams admin center lets an administrator of an education tenant choose the institution type in the Teams for Education Policy Wizard and change it later. The roadmap item calls this the tenant type; Microsoft Learn calls it the educational institution type, with two options: **Primary or Secondary** and **Higher education**.

The wizard uses the choice to set policies. For students, it adjusts the Global (Org-wide default) policy definition of each policy area it covers. For educators and staff, it creates custom policy definitions and assigns them to the groups the admin selects, up to three groups. Learn lists seven policy areas for students (Teams, Meeting, Live events, App setup, App permission, Messaging and Calling) and five custom policies for educators and staff (Teams, Meeting, Live events, Messaging and Calling).

The type can be changed by rerunning the wizard. Changing only the type applies the Global (Org-wide default) definitions for the new type to students, and creates custom definitions for the new type for the educators and staff groups, replacing those made for the previous type.

The roadmap item is Launched, General Availability, with a target of November CY2024, for Worldwide (Standard Multi-Tenant) on Desktop, Mac and Web. Microsoft Learn does not say when the type selection was added, so nothing here is stated about how the wizard behaved before.

## Why it matters

The type you pick decides which student-safety defaults land in the Global (Org-wide default) policies for every student in the tenant. Choosing the wrong type, or changing it later, rewrites those student policies and replaces the educator and staff custom policies, so a service owner should decide the type deliberately and tell the people who support students.

Microsoft's page says the wizard also adds the education default for any new Teams feature to the Global (Org-wide default) policies without admin intervention, so the type you choose keeps shaping new settings after the run. If nobody runs the wizard, no source says existing policies change.

## Risk assessment

**Data exposure**
- No new data access is described. The wizard sets Teams policies; Learn lists, among the areas it covers, App permission and Messaging policies, so the type chosen affects what students may use or share.

**Security & identity**
- The wrong type applies the wrong student settings to the Global (Org-wide default) policies. Learn says student policies are the more restrictive set; check the policy tables on the wizard page before choosing.
- Learn states that the wizard's policies won't take effect for a student who has existing direct or group assignments, so an old assignment can leave a student on a looser policy than the type implies. For educators and staff, Learn says the wizard assigns its group policies at ranking 1, the highest ranking, and moves an existing policy of the same policy area on the selected group to a lower ranking; conflicting direct assignments still override them.

**Autonomy & actions**
- The initial policy application requires an admin to select Apply; after that, Microsoft says education defaults for new Teams features are added to Global policies automatically. Learn also says the wizard starts automatically if you are new to Teams; the page does not say that starting it applies anything.

**Change & support**
- Applying takes a few minutes for students. Educator and staff policy assignment can take a few hours, depending on group size, so expect inconsistent behaviour for educators during that window.
- Changing the type removes the custom policies created for the previous type from the educators and staff groups, so any edits made to those custom policies are not carried over by anything Learn describes.

## Cost and licensing

Teams for Education requires an Education license in the Microsoft 365 tenant. Microsoft lists Teams as part of the free Microsoft 365 A1 for Students SKU. The wizard page states no separate wizard-specific licence requirement, and no meter.

The cost the sources show is admin time: choosing the type and groups, and removing the existing assignments that Learn says stop the wizard's policies taking effect (for students, existing direct and group assignments; for educators and staff, conflicting direct assignments).

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant), General Availability, and Desktop, Mac and Web platforms. It does not list other clouds; that is a record fact about the item, not a statement that the wizard is unavailable elsewhere.

The wizard is run from the Microsoft Teams admin center. Students receive the Global (Org-wide default) policy definitions, and the educators and staff groups the admin selects receive custom policies. The Learn page names no admin role or separate wizard-specific licence for running the wizard.

## Governance guidance

### Before rollout
- Decide whether each institution counts as Primary or Secondary, or Higher education, and record the decision with the person who owns student safety.
- Create the groups of educators and staff first; the wizard takes up to three, and Learn says to create a group and rerun the wizard if none exist.
- Review the wizard documentation's after-run instructions for conflicting policy assignments.

### At rollout
- Run the wizard from Home > Easy policy setup for a safe learning environment > Quick setup and select the institution type.
- Review the summary page before selecting Apply.

### After rollout
- Check the educators and staff policies a few hours after applying, as Learn says assignment can take that long.
- Watch Message center for new Teams policies, as Learn recommends.
- Rerun the wizard with Change if the type is wrong, and tell support staff that the previous custom policies are removed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Institution type chosen on the first run of the wizard</strong><br><small>Tenant</small><br><small class="controls__note">The type is chosen on a wizard page after Quick setup. The Learn page names no required role.</small></td><td data-label="Admin UI"><strong>Microsoft Teams admin center</strong><br>Home › Easy policy setup for a safe learning environment › Quick setup <a href="https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Institution type changed after the wizard has run</strong><br><small>Tenant</small><br><small class="controls__note">Changing only the type replaces the educators and staff custom policies and reapplies the student defaults.</small></td><td data-label="Admin UI"><strong>Microsoft Teams admin center</strong><br>Home › Easy policy setup for a safe learning environment › Change <a href="https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The two rows hold the same choice at different moments: Quick setup for the first run and Change afterwards. Microsoft Learn documents no PowerShell or API control for the wizard's institution type at the time of writing (November 2026), so the choice is made in the admin centre. Learn's education configuration cmdlet, Set-CsTeamsEducationConfiguration, lists other parameters and none for institution type.

The wizard changes the Global (Org-wide default) policies for students, so run it only from an account permitted to change them; the Learn page names no required role.

## Open questions

- Does the wizard have a licence requirement separate from the Education license that Teams for Education requires? Watch the Learn page for the wizard.
- Does the roadmap's tenant type mean the same thing as the wizard's institution type? Watch the Learn page for the wizard.
- Which admin role is needed to run the wizard and change the type? Watch the Learn page for the wizard.
- Is there a PowerShell or Graph way to set or read the institution type? Watch the Teams PowerShell reference.

<!-- rationale
risk: Low. Initial policy application requires an admin to select Apply; later education defaults can be added automatically. The real exposure is choosing the wrong type, which rewrites the Global (Org-wide default) policies that students receive.
cost: Low. The only cost the sources show is admin time to run the wizard and clear conflicting policy assignments; Teams for Education requires an Education license in the tenant, and the wizard page states no separate licence.
impact: Low. Admins see the new step; students and educators notice only if the chosen type changes their policy settings.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance guidance: At rollout; Governance controls / admin-path: First-run institution type selection is reached in Microsoft Teams admin center through Home > Easy policy setup for a safe learning environment > Quick setup. | Found: go to Home, and then in the Easy policy setup for a safe learning environment tile, select Quick setup. | Fix: Complete controls[0].ui.path and its rendered path as 'Home > Easy policy setup for a safe learning environment > Quick setup > educational institution type'. The cited page next says to select the educational institution type. | Source: https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu
- [supported, minor] controls[1].ui; Governance guidance: After rollout; Governance controls / admin-path: Later institution type changes are reached in Microsoft Teams admin center through Home > Easy policy setup for a safe learning environment > Change. | Found: go to Home, and then in the Easy policy setup for a safe learning environment tile, select Change. ... You can change your institution type | Fix: Complete controls[1].ui.path and its rendered path as 'Home > Easy policy setup for a safe learning environment > Change > educational institution type', using the institution-type page documented in the same article. | Source: https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu
- [supported, minor] Why it matters; Risk assessment: Autonomy; rationale: risk / behaviour: Microsoft's wizard page says education defaults for new Teams features are added to Global policies automatically without administrator intervention. | Found: whenever a new feature is added to Teams, the appropriate EDU relevant default value of the policy for that feature will be automatically added to the Global (Org-wide default) without requiring any admin intervention. | Fix: After the automatic-defaults sentence in Why it matters, add: 'Microsoft's academic-year guidance also warns that webinars and town halls are controlled by a separate policy and need to be disabled for students.' Cite https://learn.microsoft.com/microsoft-365/education/guide/1-reference/teams-microsoft-365-groups#recent-changes-to-teams, which says 'as events (webinars and town halls) are now controlled by a separate policy, they need to be disabled for students as well'. | Source: https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: Every control the governance checklist tells administrators to check is represented in the controls table. | Found: Check the educators and staff policies a few hours after applying ... Controls: Institution type chosen on the first run of the wizard; Institution type changed after the wizard has run. | Fix: Remove the After rollout bullet 'Check the educators and staff policies a few hours after applying, as Learn says assignment can take that long.' It asks for a policy check not represented by either institution-type control row.
-->
