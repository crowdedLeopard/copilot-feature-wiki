---
title: "Microsoft Teams: organisation evaluation score for third-party apps and agents"
slug: "microsoft-teams-organization-evaluation-score-for-apps-and-agents"
roadmapId: 532720
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams admin center can score eligible third-party apps and agents against requirements you choose. Admins who review apps there can use it; Microsoft has not stated what happens on arrival if nobody configures it."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Teams generally requires a Teams license for each user, except for anonymous meeting attendance. No licence specific to evaluation scores is published."
audiences: ["m365-admin","security","compliance"]
tags: ["teams","app-management","third-party-apps","agent-governance","governance","admin-controls","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 532720"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=532720"
    kind: "roadmap"
  - title: "Organization Evaluation Score for Apps and Agents"
    url: "https://learn.microsoft.com/microsoftteams/org-trust-standard"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Release notes for Microsoft Teams admin features"
    url: "https://learn.microsoft.com/officeupdates/teams-admin"
    kind: "docs"
  - title: "Release notes for Government Channel releases"
    url: "https://learn.microsoft.com/officeupdates/governmentchannel"
    kind: "docs"
videos: []
related: ["app-management","microsoft-teams-streamlined-m365-certified-app-management-in-teams-admin-center","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","microsoft-teams-enable-agents-for-existing-applications-in-your-organization"]
controls:
  - governs: "Which requirements the organisation scores apps and agents against"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Evaluation score settings"
      docs: "https://learn.microsoft.com/microsoftteams/org-trust-standard"
    api: null
    note: "Admins add, edit, remove and download requirements as CSV. The Teams Administrator role can manage everything in the Teams admin center, including these settings."
  - governs: "Whether an individual app or agent is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Used after reviewing a score; does not change it. Allowing also needs org-wide app settings and app-centric user access to permit it. Until unified app management migration, sync with Microsoft 365 admin center > Integrated apps."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-23"
roadmapModified: "2026-10-14T23:01:02"
changes:
  - date: "2026-11-22"
    note: "New briefing: Teams admin center scores eligible third-party apps and agents against admin-chosen requirements; default state and licensing are not stated."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the No data wording, stated the Teams Administrator role, qualified allow or block with org-wide settings, app-centric access and unified app management, and set licensing to included under the Teams licence."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 60 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 58
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "a53dd9367a96709f65b25c6a806675b6"
---

## What's changing

Teams admin center now lets admins define the security, compliance and permission requirements their organisation expects of third-party apps and agents, and shows how each eligible app or agent measures up. Microsoft Learn describes this as the organisation's app approval criteria, set on a new **Evaluation score settings** page under **Teams apps**.

Once requirements are chosen, the **Manage apps** page gets an **Evaluation score** column that shows the percentage of the selected requirements that an app or agent meets. Admins can sort by that column, filter on **Evaluation requirements met** (greater than, or equal to, a percentage), and open an app's details page to read an **Evaluation score report** tab. The report lists each requirement with its value and a status of **Met**, **Not met** or **No data**.

Scores are shown only for apps and agents that are third-party, have security and compliance data available, and are not already available in the organisation for installation or use by anyone. Learn says scores reflect the metadata currently available and may change if that data changes.

The roadmap record shows the item as Launched, with a target of February CY2026, for Worldwide (Standard Multi-Tenant) and GCC on the web, in General Availability and Targeted Release. Microsoft's Teams admin release notes list it under March 25, 2026 and the Government Channel release notes list it under a Teams admin April 08 entry for GCC customers; both call it a Trust Score, while the roadmap and the Learn page call it an evaluation score.

## Why it matters

This replaces manual comparison of each app's trust data with one score against your own criteria, so a review queue of requested third-party apps and agents can be sorted and filtered rather than read one by one. The roadmap description presents it as faster, more consistent decision-making.

The score is only as good as the requirements you select and the data behind them: a configured requirement whose parameter is unavailable for the selected app or agent shows as **No data**, not as **Not met**, and an app that is already available in the organisation is not scored. Microsoft has not stated what happens on arrival if nobody configures the settings, so treat it as an optional review aid until you have looked at the Evaluation score settings page in your tenant.

## Risk assessment

**Data exposure**

- The Learn page describes evaluation of an app's existing security, compliance and permission metadata. It does not describe the feature reading organisational content.
- Changing requirements changes how scores are calculated; the Learn page states it does not change the app's own security, compliance or permission data.

**Security & identity**

- A high percentage is not an approval. Requirements with **No data** are counted separately from **Met**, so open the **Evaluation score report** before treating a high score as a pass.
- Apps that are already available in the organisation are outside the scoring conditions, so the score does not review apps you have already allowed.

**Autonomy & actions**

- The score is shown in a column, a filter and a report. Learn describes the report as helping admins decide whether to make an app or agent available; allowing or blocking is done separately on **Manage apps**.

**Change & support**

- Scores may change when the underlying data changes, so an app's percentage can differ between reviews. Record the date of any score you rely on.
- The roadmap and Learn page say "evaluation score" while Microsoft's release notes say "Trust Score"; expect both names in support and training material.

## Cost and licensing

Teams generally requires a Teams license for each user, except for anonymous meeting attendance, as the [Manage Teams licenses](https://learn.microsoft.com/microsoftteams/user-access) page states. No licence specific to evaluation scores is published: the Learn page for the feature gives no licence requirement and no price, and the Manage apps overview states the Teams Administrator role as what is needed to use the Teams admin center.

The cost the sources do show is admin time: choosing requirements on **Evaluation score settings**, reviewing scores and reports, and keeping the criteria current as apps change.

## Scope

**Who and where.** The feature is in the Teams admin center on the web. The roadmap lists Worldwide (Standard Multi-Tenant) and GCC, with General Availability and Targeted Release as release phases.

**What is scored.** Only third-party apps and agents with security and compliance data available that are not already available in the organisation for installation or use by anyone. The Manage apps overview also states that in Microsoft 365 Government (GCC, GCC High and DoD) deployments of Teams all third-party agents and apps are blocked by default, which bears on how many apps there are to review in a GCC tenant.

**Roles.** The Manage apps overview says you must have a Teams Administrator role to use the Teams admin center and that some higher-privilege roles can also do the governance tasks. The Teams Administrator role can manage everything in the Teams admin center, including these settings.

## Governance guidance

### Before rollout

- Ask the Teams administrators who approve apps which security, compliance and permission requirements the organisation expects, so the list you select on **Evaluation score settings** reflects policy and not whichever options appear first.
- Open **Teams apps** > **Evaluation score settings** and read the predefined requirement list before choosing; download it as CSV to record the baseline.
- Check that the people who review app requests hold a Teams Administrator role or a higher-privilege role the Manage apps overview allows.

### At rollout

- Add the requirements you want on **Evaluation score settings** and save; the score column on **Manage apps** is based on the requirements configured there.
- Filter **Manage apps** by **Evaluation requirements met** to build a shortlist, then open each app's **Evaluation score report** before deciding.
- Use **Manage apps** for allow or block decisions, checking org-wide app settings and app-centric user access as well; until unified app management migration, synchronise the decision with Microsoft 365 admin center > Integrated apps.

### After rollout

- Review the requirement list when policy changes, because editing or removing a requirement recalculates every score.
- Re-check shortlisted apps before allowing them, since scores may change when the underlying data changes.
- Treat **No data** results as questions to put to the app publisher, using the contact details on the app details page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which requirements the organisation scores apps and agents against</strong><br><small>Tenant</small><br><small class="controls__note">Admins add, edit, remove and download requirements as CSV. The Teams Administrator role can manage everything in the Teams admin center, including these settings.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Evaluation score settings <a href="https://learn.microsoft.com/microsoftteams/org-trust-standard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual app or agent is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Used after reviewing a score; does not change it. Allowing also needs org-wide app settings and app-centric user access to permit it. Until unified app management migration, sync with Microsoft 365 admin center &gt; Integrated apps.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The evaluation criteria are held on the **Evaluation score settings** page; Microsoft Learn documents no PowerShell, Graph or other API for them at the time of writing (November 2026), so changes are made in the admin centre. The score informs, and does not enforce: the existing allow or block control on **Manage apps** is one of the settings that changes availability, and its PowerShell equivalent is shown in the second row. Allowing an app also requires org-wide app settings and app-centric user access to permit it. Until unified app management migration, synchronise allow or block settings in Teams admin center and Microsoft 365 admin center > Integrated apps; after migration, either centre can manage them. That row governs availability of the app, not the evaluation score itself. Per-user availability for an app is set separately through app-centric management.

## Open questions

- What happens on arrival if no admin configures **Evaluation score settings**: is any score shown, and is the feature on or off by default? Watch the Learn page and the Teams admin release notes.
- Is any licence or add-on specific to evaluation scores required? Learn names none and none is yet published; watch the feature's Learn page.
- Can changing Evaluation score settings be delegated below Teams Administrator?
- Will a PowerShell or Graph interface for the evaluation criteria be documented, so that criteria can be backed up and applied consistently?
- How is the score handled for GCC tenants, where the Manage apps overview states third-party apps are blocked by default?

<!-- rationale
risk: Low. The score is a column and report on Manage apps that informs the admin's decision; allowing or blocking an app stays a separate admin action, and the default state is not stated.
cost: Low. The only cost the sources show is admin time to choose requirements and review scores; no licence or meter specific to evaluation scores is published.
impact: Low. The score appears in the Teams admin center for admins who review apps and agents; the Learn page describes no change for end users.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Governance guidance: After rollout / behaviour: Editing or removing a requirement recalculates every score. | Found: Searched: Evaluation score Teams recalculate. Read org-trust-standard and returned excerpts. Microsoft states that changes alter how scores are calculated, but does not state that every score is recalculated. | Fix: Replace the bullet with 'Review the requirement list when policy changes, because editing or removing a requirement changes how evaluation scores are calculated.' https://learn.microsoft.com/microsoftteams/org-trust-standard
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist tells admins to check org-wide app settings and app-centric user access, but those distinct controls have no table rows. | Found: Use Manage apps for allow or block decisions, checking org-wide app settings and app-centric user access as well; ... The table has only evaluation requirements and individual app Allow or Block rows. | Fix: Remove 'checking org-wide app settings and app-centric user access as well' from the At rollout checklist bullet. Keep these verified prerequisites in the existing allow or block row's note and Governance controls prose; do not add rows.
-->
