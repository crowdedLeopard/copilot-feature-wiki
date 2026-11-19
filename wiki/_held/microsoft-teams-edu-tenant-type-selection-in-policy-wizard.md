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
  model: "unknown"
  notes: "Not yet published: the wizard's Learn page names no licence or role requirement, and the roadmap item does not name one."
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
version: 2
verification:
  status: "held"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 45
  unconfirmed: 0
  contradicted: 3
  attempts: 2
  hash: "da5746dbdd2297939e6d8fdf1aa6bb33"
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
- The wizard acts only when an admin selects Apply. Learn also says the wizard starts automatically if you are new to Teams; the page does not say that starting it applies anything.

**Change & support**
- Applying takes a few minutes for students. Educator and staff policy assignment can take a few hours, depending on group size, so expect inconsistent behaviour for educators during that window.
- Changing the type removes the custom policies created for the previous type from the educators and staff groups, so any edits made to those custom policies are not carried over by anything Learn describes.

## Cost and licensing

Microsoft Learn's page for the wizard names no licence and no meter, and the roadmap item names none either. Licensing for this wizard is not yet published, so this briefing does not state that it is free or included.

The cost the sources show is admin time: choosing the type and groups, and removing the existing assignments that Learn says stop the wizard's policies taking effect (for students, existing direct and group assignments; for educators and staff, conflicting direct assignments).

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant), General Availability, and Desktop, Mac and Web platforms. It does not list other clouds; that is a record fact about the item, not a statement that the wizard is unavailable elsewhere.

The wizard is run from the Microsoft Teams admin center. Students receive the Global (Org-wide default) policy definitions, and the educators and staff groups the admin selects receive custom policies. The Learn page names no admin role or licence for running the wizard.

## Governance guidance

### Before rollout
- Decide whether each institution counts as Primary or Secondary, or Higher education, and record the decision with the person who owns student safety.
- Create the groups of educators and staff first; the wizard takes up to three, and Learn says to create a group and rerun the wizard if none exist.
- Review the wizard documentation's after-run instructions for conflicting policy assignments.

### At rollout
- Run the wizard from Home > Easy policy setup for a safe learning environment > Quick setup and select the institution type.
- Review the summary page before selecting Apply.
- Remove existing assignments as Learn's after-wizard steps instruct: for students, existing direct and group assignments; for educators and staff, conflicting direct assignments.

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

- Which licence, if any, does the wizard require? Watch the Learn page for the wizard and the Microsoft 365 Education licensing guidance.
- Does the roadmap's tenant type mean the same thing as the wizard's institution type? Watch the Learn page for the wizard.
- Which admin role is needed to run the wizard and change the type? Watch the Learn page for the wizard.
- Is there a PowerShell or Graph way to set or read the institution type? Watch the Teams PowerShell reference.

<!-- rationale
risk: Low. Policies change only when an admin selects Apply in the wizard; the real exposure is choosing the wrong type, which rewrites the Global (Org-wide default) policies that students receive.
cost: Low. The only cost the sources show is admin time to run the wizard and clear conflicting policy assignments; the wizard page names no licence, and licensing for it is not yet published.
impact: Low. Admins see the new step; students and educators notice only if the chosen type changes their policy settings.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because Microsoft has not published which licence covers this wizard. | Found: Prerequisites for Microsoft Teams for Education - An Education license in your Microsoft 365 tenant - Enable Microsoft Teams in the Microsoft Admin Center | Fix: Set licensing.model to included and replace the blanket unpublished-licensing statements with: 'Teams for Education requires an Education license in the Microsoft 365 tenant. Microsoft lists Teams as part of the free Microsoft 365 A1 for Students SKU. The wizard page states no separate wizard-specific licence requirement.' Cite https://learn.microsoft.com/microsoft-365/education/guide/2-baseline/applications/baseline-apps-teams-what-is-teams and https://learn.microsoft.com/microsoftteams/teams-edu-licensing. In Open questions, remove the broad licence question or narrow it to a separate wizard-specific requirement. Retain the low cost rating for administration time. | Source: https://learn.microsoft.com/microsoft-365/education/guide/2-baseline/applications/baseline-apps-teams-what-is-teams
- [contradicted, blocker] Risk assessment: Autonomy & actions; rationale: risk / behaviour: The wizard acts, and policies change, only when an administrator selects Apply. | Found: Also, whenever a new feature is added to Teams, the appropriate EDU relevant default value of the policy for that feature will be automatically added to the Global (Org-wide default) without requiring any admin intervention. | Fix: Replace 'The wizard acts only when an admin selects Apply' with 'The initial policy application requires an admin to select Apply; after that, Microsoft says education defaults for new Teams features are added to Global policies automatically.' In the risk rationale replace 'Policies change only when an admin selects Apply in the wizard' with 'Initial policy application requires an admin to select Apply; later education defaults can be added automatically'. Keep the existing defaultState and low risk rating: the initial configuration remains opt-in. | Source: https://learn.microsoft.com/microsoftteams/easy-policy-setup-edu
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist instructs readers to remove policy assignments, but the controls table contains only institution-type selection rows. | Found: Remove existing assignments as Learn's after-wizard steps instruct: for students, existing direct and group assignments; for educators and staff, conflicting direct assignments. | Institution type chosen on the first run of the wizard | Institution type changed after the wizard has run | Fix: Remove the At rollout bullet beginning 'Remove existing assignments as Learn's after-wizard steps instruct'. Retain the Before rollout instruction to review the documentation's after-run instructions and the accurate explanation in Risk assessment; do not add control rows.
-->
