---
title: "Learning Activities: students rehearse presentations with Speaker Coach"
slug: "m365-education-practice-presentations-with-speaker-coach-in-learning-activities"
roadmapId: 578880
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Microsoft plans a Speaker Coach practice activity in Learning Activities so students can rehearse a presentation and get delivery feedback. Education admins should check the tenant-wide Learning Activities switch and student age settings."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft lists Learning Activities for Microsoft or Office 365 A1/A3/A5 for Faculty/Staff and for Students, among other suites. No licence, price or meter specific to Speaker Coach practice is published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["education","learning-activities","speaker-coach","m365-admin-center","admin-controls","microsoft-graph","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 578880"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578880"
    kind: "roadmap"
  - title: "Manage Microsoft 365 for Education AI Features"
    url: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features"
    kind: "learn"
  - title: "Update servicePrincipal"
    url: "https://learn.microsoft.com/graph/api/serviceprincipal-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Manage Speaker Coach for Microsoft Teams meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-speaker-coach"
    kind: "learn"
videos: []
related: ["m365-education-classroom-a-dedicated-platform-for-teaching-and-learning","meeting-policy"]
controls:
  - governs: "Whether Learning Activities, including Speaker Coach practice, is available in the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Learning Activities > Turn on Learning Activities"
      docs: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features"
    api:
      kind: "graph"
      call: "PATCH /v1.0/servicePrincipals/{id}"
      docs: "https://learn.microsoft.com/graph/api/serviceprincipal-update?view=graph-rest-1.0"
    note: "Global admin or Office Apps admin. Whole organisation only; up to 24 hours. The request body sets accountEnabled to false on the Learning Activities service principal."
  - governs: "Separate switch for Speaker Coach practice in Learning Activities"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for this activity alone at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-27"
    note: "New briefing: Speaker Coach practice planned for Learning Activities, with the tenant-wide Learning Activities switch and its Graph route."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 57 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 55
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "2473117d7d1e2d562d7e45fb7bec66e6"
---

## What's changing

Microsoft plans to add Speaker Coach to Learning Activities, so that students can rehearse a presentation, receive feedback on their delivery and practise again with targeted suggestions to improve clarity and confidence. Microsoft Learn does not describe this activity yet, so what follows about its behaviour is the roadmap's description.

Learning Activities is Microsoft's education experience for turning content into practice activities such as flashcards. Microsoft's admin page says Learning Activities are enabled by default and appear in the Learning Activities web app, Teach in the Microsoft Copilot app, Teams for Education Classwork and Assignments, Study Guide in Copilot Notebooks and the Study and Learn agent. Microsoft has not stated whether the Speaker Coach activity arrives switched on wherever Learning Activities is on, or in which of those places it will appear.

The roadmap item is **In development**, with a General Availability target of **December CY2026**, for the Worldwide (Standard Multi-Tenant) cloud on Android, Desktop, iOS, Mac and Web. No Message Center post has been supplied for this item.

## Why it matters

This adds students' spoken rehearsals to a service that many schools have left at its default. Speaker Coach in Teams meetings, for comparison, processes the presenter's audio, according to its Teams admin page; Microsoft has not described how the Learning Activities version captures, stores or keeps student speech. Schools with safeguarding or data-protection obligations for minors will want that answer before students use it.

Microsoft has not stated what happens on arrival. No source says existing Learning Activities behaviour changes, but because Learning Activities is on by default and shared activities are practised by students under 18 by default, plan the decision now rather than after December.

## Risk assessment

**Data exposure**
- Delivery feedback implies analysing a student's speech. Microsoft has not documented where Learning Activities processes or stores that audio, or for how long. The Learning Activities switch turns the whole service off; no narrower data control is documented.

**Security & identity**
- Learning Activities aren't available for consumer or personal Microsoft 365 accounts, per Microsoft's admin page, so use runs under school accounts. No new sign-in or permission model is described for this activity.

**Autonomy & actions**
- No change: the roadmap describes feedback and suggestions to the student, not actions taken on their behalf.

**Change & support**
- If an admin turns Learning Activities off, users see a sign-in error saying it is disabled, and changes may take up to 24 hours. Brief the helpdesk before changing the setting.
- Microsoft has not said whether rehearsal counts as activity generation, which is off by default for students aged 13 to 17 and unavailable under 13, or as practice, which is on by default for students under 18.

## Cost and licensing

**Licence.** Microsoft's [Manage Microsoft 365 for Education AI Features](https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features) page lists Learning Activities for Microsoft or Office 365 A1/A3/A5 for Faculty/Staff and for Students, Microsoft 365 Business Basic/Business Standard/Business Premium, Microsoft 365 E3/E5 and F1/F3, Office 365 E1/E1 Plus/E3/E5 and Office 365 F3. A Speaker Coach activity inside Learning Activities falls under that list.

**Meter.** None is documented for Learning Activities on that page. A licence, price or meter specific to Speaker Coach practice is not yet published.

**Indirect costs.** Admin time to review data handling for student audio, and communication to educators and students.

## Scope

- **Users:** students and educators with one of the SKUs listed for Learning Activities. Microsoft's page limits student availability to students aged 13 and over and says generation for students aged 13 to 17 needs their Microsoft Entra ageGroup property set to NotAdult.
- **Roles:** Global admin or Office Apps admin manage the Learning Activities org setting.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item.
- **Platforms:** Android, Desktop, iOS, Mac and Web on the roadmap item.
- **Rollout:** General Availability targeted for December CY2026; rollout mechanics are not yet published.

## Governance guidance

### Before rollout
- Decide with the school's data-protection or safeguarding lead whether students should rehearse spoken presentations in Learning Activities, given that the documented switch is tenant-wide.
- Check who holds Global admin or Office Apps admin, the roles that can change the Learning Activities org setting.
- Review how students' Microsoft Entra ageGroup property is set, since Learning Activities uses it to decide generation for students aged 13 to 17.

### At rollout
- Watch Message center for a post on roadmap item 578880 giving the default and rollout window.
- Tell educators where the Speaker Coach activity appears and that student feedback depends on speech.
- Allow up to 24 hours if you turn Learning Activities off, and warn the helpdesk about the sign-in error users then see.

### After rollout
- Re-check the Education AI features page for a Speaker Coach-specific setting or data-handling note.
- Confirm in a test student account whether the activity is available to students under 18.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Learning Activities, including Speaker Coach practice, is available in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Global admin or Office Apps admin. Whole organisation only; up to 24 hours. The request body sets accountEnabled to false on the Learning Activities service principal.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Learning Activities › Turn on Learning Activities <a href="https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/servicePrincipals/{id}</code> <a href="https://learn.microsoft.com/graph/api/serviceprincipal-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for Speaker Coach practice in Learning Activities</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for this activity alone at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- The Learning Activities setting applies to the entire organisation; Microsoft's page says it can't be enabled or disabled for specific users or groups. Turning it off removes Speaker Coach practice along with every other Learning Activity.
- The Graph route disables the Learning Activities service principal (AppId 22d27567-b3f0-4dc2-9ec2-46ed368ba538); Microsoft's script connects with the Application.ReadWrite.All scope.
- The Teams meeting policy setting `-AllowMeetingCoach` governs Speaker Coach in Teams meetings and events, by its own page. Microsoft has not said it reaches Speaker Coach in Learning Activities, so do not rely on it here.

## Open questions

- Is the Speaker Coach activity on by default wherever Learning Activities is on, or does an educator or admin enable it? Watch Message center and the Education AI features page.
- Where is students' rehearsal audio processed and stored, and is it kept after feedback is given?
- Does rehearsing count as activity generation (off by default for students aged 13 to 17) or as practice (on by default for students under 18)?
- Will Microsoft add a setting to turn off Speaker Coach practice without turning off all of Learning Activities?

<!-- rationale
risk: Medium. Students' spoken rehearsals become part of Learning Activities, which Microsoft enables by default and lets under-18s practise in; the documented control is one tenant-wide switch, with no Speaker Coach-specific setting.
cost: Low. Learning Activities is listed for Microsoft 365 and Office 365 A1/A3/A5 and other suites; no licence or meter for Speaker Coach practice is published, so the known cost is admin time and communication.
impact: Medium. Students and educators in education tenants who use Learning Activities notice it; administrators and other staff see no change.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: first sentence / behaviour: Many schools have left Learning Activities at its default. | Found: Searched: '"Learning Activities" schools adoption default enabled usage'; opened Education AI features and reviewed search results. The documented enabled default does not establish how many schools have retained it. | Fix: Replace the first sentence with: 'This adds students’ spoken rehearsals to Learning Activities.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks administrators to review the student ageGroup setting, but that control has no row in the controls table. | Found: Review how students' Microsoft Entra ageGroup property is set, since Learning Activities uses it to decide generation for students aged 13 to 17. | The table contains only the Learning Activities switch and the separate Speaker Coach switch gap. | Fix: Remove the Before rollout checklist bullet beginning 'Review how students' Microsoft Entra ageGroup property is set'. The factual ageGroup requirement can remain in Scope.
-->
