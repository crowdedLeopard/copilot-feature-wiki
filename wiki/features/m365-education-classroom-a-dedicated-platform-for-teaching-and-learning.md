---
title: "Microsoft Classroom: a standalone Microsoft 365 Education app for teaching and learning"
slug: "m365-education-classroom-a-dedicated-platform-for-teaching-and-learning"
roadmapId: 580883
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Microsoft plans Microsoft Classroom, a separate front door to Assignments, Grades, Class Notebook and AI study tools for educators and students. Preview targets February 2027; no admin action is required yet."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "June CY2027"
previewDate: "February CY2027"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn says Microsoft Classroom is included in Microsoft 365 Education A2 through A7. Microsoft's announcement blog says it will be available in current A1/A3/A5/A7 at no additional cost from 2027, and in A2 and above for the new SKUs from January 2028."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["education","microsoft-classroom","learning-activities","copilot-chat","onenote","teams","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 580883"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580883"
    kind: "roadmap"
  - title: "Introducing Microsoft Classroom: A new experience built for teaching and learning"
    url: "https://techcommunity.microsoft.com/blog/educationblog/introducing-microsoft-classroom-a-new-experience-built-for-teaching-and-learning/4571185"
    kind: "blog"
  - title: "Microsoft 365 Education portfolio evolution"
    url: "https://learn.microsoft.com/training/educator-center/instructor-materials/microsoft-365-education-portfolio"
    kind: "learn"
  - title: "Microsoft 365 Education frequently asked questions"
    url: "https://learn.microsoft.com/training/educator-center/instructor-materials/microsoft-365-education-frequently-asked-questions"
    kind: "learn"
  - title: "Manage Microsoft 365 for Education AI Features"
    url: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Microsoft Classroom is available in the tenant, or to specific users or groups"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's blog says Classroom will use Microsoft 365 Education administration experiences for availability and policy controls; none is documented on Learn yet."
  - governs: "Whether Learning Activities is available to users across the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Learning Activities > Turn on Learning Activities"
      docs: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features"
    api:
      kind: "graph"
      call: "PATCH /v1.0/servicePrincipals/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features"
    note: "Request body sets accountEnabled to false on the Learning Activities service principal (AppId 22d27567-b3f0-4dc2-9ec2-46ed368ba538). Learn does not yet list Classroom among the places Learning Activities appears."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-26"
    note: "New briefing: Microsoft Classroom, preview targeted for February CY2027, with licensing from Microsoft Learn and the announcement blog."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected What's changing: Microsoft Learn does describe Classroom's capabilities and licensing; only Classroom-specific availability controls are not yet documented."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 68 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 68
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fe59319360bbebecb6608a5a16455efc"
---

## What's changing

Microsoft plans **Microsoft Classroom**, a new standalone Microsoft 365 experience for teaching and learning in primary, secondary and higher education. The roadmap item describes it as a front door to Assignments, Classwork, Grades, OneNote Class Notebook, Learning Accelerators and Insights, offered as another option alongside Teams for Education and Microsoft 365 LTI. A personal **Home** shows each educator or student what needs attention across their classes, and a shared **Class Home**, set up by the educator, gives each class a common starting point.

Microsoft Learn describes Classroom's capabilities and licensing, but does not yet document Classroom-specific availability controls; the roadmap item and Microsoft's [announcement blog](https://techcommunity.microsoft.com/blog/educationblog/introducing-microsoft-classroom-a-new-experience-built-for-teaching-and-learning/4571185) give further details of the planned experience. The blog adds Reflect, Teach in Copilot and Learning Activities to the list of tools, says educators can use the Study and Learn Agent in Assignments, and says Classroom will be available on the web and with dedicated mobile and desktop apps. It states that Classroom does not replace Teams for Education or Microsoft 365 LTI, and that it builds on Microsoft 365 Education foundations for identity, class membership, storage and administration, including class and roster provisioning through School Data Sync. The [Microsoft 365 Education portfolio page](https://learn.microsoft.com/training/educator-center/instructor-materials/microsoft-365-education-portfolio) on Learn says customers can continue using Teams Assignments and other education experiences as they do today.

The roadmap item is **In development**, with a preview targeted for February CY2027 and general availability targeted for June CY2027, on Android, Desktop, iOS, Mac and Web, in the Worldwide (Standard Multi-Tenant) cloud. The blog says administrators can register now at https://aka.ms/classroompreview for the preview, planned for early 2027.

## Why it matters

Classroom gives an institution a third way to deliver the same Microsoft education tools, next to Teams for Education and an LMS (learning management system) through Microsoft 365 LTI. The decision for a service owner is which of these is the front door for which year groups, and how to explain the overlap to educators who already use Assignments in Teams. Because Classroom gathers AI tools (Teach, Learning Activities, the Study and Learn Agent) into the place students do their work, expect questions from safeguarding and data-protection staff about who can use them at which age.

Microsoft has not stated whether Classroom appears for licensed users automatically or only once an institution turns it on. The blog says Classroom will use familiar Microsoft 365 Education administration experiences for availability and policy controls, but Microsoft Learn documents no such control at the time of writing (November 2026). No source says existing Teams for Education behaviour changes.

## Risk assessment

**Data exposure**
- Microsoft plans to build Classroom on the existing Microsoft 365 Education foundations for class membership and storage, with classes and rosters provisioned through School Data Sync. Microsoft has not described where Classroom-specific content such as Class Home layouts is stored; confirm this in the preview before pupils use it.

**Security & identity**
- Classroom builds on the institution's Microsoft 365 Education identity foundations, according to the blog. Microsoft's Education FAQ says students aged 13 and older can access Copilot Chat subject to institution-managed controls, and that institutions must enable Copilot Chat for students before they can use experiences such as the Study and Learn Agent.

**Autonomy & actions**
- Learning Activities, which the blog says Classroom will include, is enabled by default. Activity generation is not available by default for students aged 13 to 17 and is not available for students under 13; practising activities an educator shares is available by default to eligible students under 18. Its tenant-wide setting is in the controls table.
- Teach is enabled by default for faculty with Copilot Chat enabled; Microsoft documents removing Copilot Chat access as the way to disable it.

**Change & support**
- Educators may meet the same assignments in Teams and in Classroom. Expect support questions on which to use until the institution decides.
- With no Classroom-specific availability control documented at the time of writing (November 2026), early testing runs through the preview programme.

## Cost and licensing

**Licence.** The [Microsoft 365 Education portfolio page](https://learn.microsoft.com/training/educator-center/instructor-materials/microsoft-365-education-portfolio) says Microsoft Classroom is included in Microsoft 365 Education A2 through A7, and its table lists it for MA2, MA3, MA5 and MA7 but not MA0. The [Education FAQ](https://learn.microsoft.com/training/educator-center/instructor-materials/microsoft-365-education-frequently-asked-questions) says the same. Microsoft's announcement blog says Classroom will be available in current A1/A3/A5/A7 at no additional cost starting in 2027, and included in A2 and above for future SKUs starting in January 2028. The two sources describe different licence generations; confirm which applies to your agreement with your account team or partner.

**Meter.** The portfolio page publishes no separate price or meter for Classroom.

**Indirect costs.** Educator training, guidance on Classroom versus Teams for Education, and admin time during the preview.

**Related timing.** The portfolio page says the new lineup takes effect at an institution's first renewal or extension on or after 1 January 2028, and that Office 365 A1 retires on 1 January 2028.

## Scope

- **Users:** educators and students in primary, secondary and higher education, according to the roadmap item.
- **Licences:** Microsoft 365 Education A2 to A7 (Learn); current A1/A3/A5/A7 at no additional cost (blog). Not listed for MA0.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item.
- **Platforms:** Android, Desktop, iOS, Mac and Web.
- **Rollout:** preview targeted for February CY2027, general availability for June CY2027; preview sign-up at https://aka.ms/classroompreview.
- **Prerequisites:** the blog names School Data Sync for class and roster provisioning. Admin roles for Classroom are not yet documented.

## Governance guidance

### Before rollout
- Decide whether to register the tenant for the preview at https://aka.ms/classroompreview, and which school or year group would pilot it.
- Confirm with your Microsoft account team or partner which of your current Education licences entitle users to Classroom, given the different statements on Learn and in the blog.
- Check that the **Turn on Learning Activities** setting in Org settings matches your policy, since Classroom will surface Learning Activities to educators and students.
- Agree with safeguarding staff which age groups should reach the AI tools Classroom brings together.

### At rollout
- Tell educators that Classroom does not replace Teams for Education or Microsoft 365 LTI, and state which one the institution expects them to use for each year group.
- Test in the preview how classes provisioned through School Data Sync appear in Classroom.

### After rollout
- Watch Message center and the [Microsoft 365 Education AI features page](https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features) for Classroom availability and policy controls.
- Re-check whether the Learning Activities setting covers Learning Activities inside Classroom once Microsoft documents it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Microsoft Classroom is available in the tenant, or to specific users or groups</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's blog says Classroom will use Microsoft 365 Education administration experiences for availability and policy controls; none is documented on Learn yet.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Learning Activities is available to users across the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Request body sets accountEnabled to false on the Learning Activities service principal (AppId 22d27567-b3f0-4dc2-9ec2-46ed368ba538). Learn does not yet list Classroom among the places Learning Activities appears.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Learning Activities › Turn on Learning Activities <a href="https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/servicePrincipals/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns Microsoft Classroom on or off, or limits it to some users, at the time of writing (November 2026); the blog says Classroom will use Microsoft 365 Education administration experiences for availability and policy controls.

The Learning Activities setting applies to the whole organisation and cannot be enabled or disabled for specific users or groups; changes may take up to 24 hours. The admin centre steps need the Global admin or Office Apps admin role.

Teach and the Study and Learn Agent depend on Copilot Chat. Microsoft's [Manage Copilot Chat](https://learn.microsoft.com/copilot/manage) page describes blocking Copilot through Integrated Apps as a tenant-wide control that can be scoped to specific users or groups; the Education AI features page names removing Copilot Chat access as the way to disable Teach.

## Open questions

- Will Classroom appear automatically for licensed educators and students, or only after an admin turns it on? Watch Message center before the February CY2027 preview.
- Which admin centre and which setting will control Classroom availability per user or group, and will there be a PowerShell or Graph equivalent?
- Does the **Turn on Learning Activities** setting, and blocking Copilot through Integrated Apps, also govern those tools inside Classroom?
- Which licence entitles users today: current A1/A3/A5/A7, as the blog says, or A2 to A7, as Learn says?
- Where is Classroom-specific content such as Class Home stored, and is its use recorded in the audit log?

<!-- rationale
risk: Medium. Classroom puts AI tools such as Teach and Learning Activities in front of educators and students, and Microsoft Learn documents no switch for Classroom itself yet; the controls that exist govern its parts.
cost: Low. Microsoft says Classroom comes at no additional cost in current A1/A3/A5/A7 and is included in Microsoft 365 Education A2 to A7; the cost is admin, training and communication time.
impact: Medium. Educators and students in institutions that adopt Classroom notice it; Microsoft has not stated whether it appears for them without an admin choosing it.
-->
