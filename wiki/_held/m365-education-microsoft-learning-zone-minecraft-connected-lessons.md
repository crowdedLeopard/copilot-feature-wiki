---
title: "Microsoft Learning Zone: Minecraft Education connected lessons with Build Challenges and class reports"
slug: "m365-education-microsoft-learning-zone-minecraft-connected-lessons"
roadmapId: 577545
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Microsoft plans to let educators match curriculum goals to Minecraft Education Build Challenges and launch them from Learning Zone, with participation and completion reporting. Targeted for February CY2027; check licensing and data settings first."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learning Zone is available with Microsoft 365 Education A1, A3 or A5 at no additional cost. Minecraft Education needs a Minecraft Education, A1 for device or A3/A5 licence assigned per user. Licensing specific to connected lessons is not yet published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["education","ai","learning-zone","minecraft-education"]
sources:
  - title: "Deploy Microsoft Learning Zone"
    url: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/baseline-reference-deploy-learning-zone"
    kind: "learn"
  - title: "Get and deploy Minecraft Education"
    url: "https://learn.microsoft.com/education/windows/get-minecraft-for-education"
    kind: "learn"
  - title: "Set-MgUserLicense"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 577545"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577545"
    kind: "roadmap"
videos: []
related: ["m365-education-classroom-a-dedicated-platform-for-teaching-and-learning"]
controls:
  - governs: "Whether Learning Zone, and so any connected lesson in it, is available to the organisation"
    scope: "tenant"
    ui:
      surface: "Learning Zone admin page"
      path: "Access settings"
      docs: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/baseline-reference-deploy-learning-zone"
    api: null
    note: "Open at https://aka.ms/LearningZoneAdmin with an administrator account; under Access settings, turn off access to Learning Zone. Covers the whole app, not Minecraft lessons alone."
  - governs: "Which users can use Minecraft Education"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > user > product license > Minecraft Education"
      docs: "https://learn.microsoft.com/education/windows/get-minecraft-for-education"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId <user> -AddLicenses $addLicenses -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense"
    note: "Global, License or User admin. $addLicenses holds SkuId and DisabledPlans. Students keep access for up to 30 days after the toggle is turned off."
  - governs: "Separate switch for Minecraft connected lessons inside Learning Zone"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026); the Learning Zone access switch is the nearest control."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-27"
    note: "New briefing: Minecraft Education connected lessons planned for Learning Zone, targeted for February CY2027."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "d957865ef56bf8d4b7be6ad87e8869f5"
---

## What's changing

Microsoft plans to connect Minecraft Education to Microsoft Learning Zone. The roadmap item states that AI-powered tools will match curriculum goals to Minecraft Build Challenges, blend lessons with project-based learning, launch Minecraft directly from Learning Zone and give educators visibility of participation, completion and student understanding.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn does describe the two products it joins. [Learning Zone](https://learn.microsoft.com/microsoft-365/education/guide/1-reference/baseline-reference-deploy-learning-zone) is a Windows app in which educators turn ideas, standards and teaching materials into interactive lessons, assign them, teach them live and see built-in reports. Learners complete lessons in a web browser on computers and tablets, through a link, a join code or a Microsoft Teams assignment; phones are not supported. Since 1 January 2026, Learning Zone has been available to everyone in eligible organisations by default unless an administrator turns it off. Minecraft Education is a separate, per-user licensed app.

The item is **In development**, targeted for **February CY2027**, release phase General Availability, on Desktop and Web, for the Worldwide (Standard Multi-Tenant) cloud. Microsoft has not stated whether connected lessons are on by default inside Learning Zone.

## Why it matters

This brings a game platform and its classroom activity into Learning Zone's reports. For a school or district that already runs Learning Zone, the question is not whether to switch on a new app but whether the Minecraft side is licensed and installed for the students educators will assign, and whether the extra student activity data in Learning Zone reports is covered by the organisation's privacy notices.

Microsoft has not stated what happens on arrival. No source says existing Learning Zone or Minecraft Education behaviour changes; expect educators to drive adoption, and expect support requests if lessons launch Minecraft for students who have no Minecraft Education licence or no installed client.

## Risk assessment

**Data exposure**
- Learning Zone stores user data in the European Union, the United States or Australia, and Microsoft says some AI processing for lesson generation might take place in a different geography from where the data is stored. Matching curriculum goals to Build Challenges is described as AI-powered, so treat it as lesson generation for data-residency purposes until Microsoft says otherwise.
- The roadmap promises visibility of participation, completion and student understanding. Which Minecraft activity data feeds those reports is not yet documented.

**Security & identity**
- Learning Zone uses the Microsoft 365 Education account and applies the institution's policies on sign-in. Assigning a faculty Minecraft Education licence gives the user the teacher role in Minecraft Education with elevated permissions, so licence type decides who can run in-game teacher controls.

**Autonomy & actions**
- No change described: the roadmap describes tools educators use to build and launch lessons, not actions taken without an educator.

**Change & support**
- The Minecraft Education trial gives student accounts in Microsoft-verified academic organisations 10 free logins before a paid licence is required to continue playing. Expect help-desk calls if connected lessons reach classes that were never licensed.
- Turning off the Minecraft Education toggle after students have used it leaves them up to 30 more days of access, so licence changes do not take effect at once.

## Cost and licensing

- **Learning Zone**: available to organisations with a Microsoft 365 Education A1, A3 or A5 licence, with no additional cost when used with an eligible education licence ([Deploy Microsoft Learning Zone](https://learn.microsoft.com/microsoft-365/education/guide/1-reference/baseline-reference-deploy-learning-zone)).
- **Minecraft Education**: users need a Minecraft Education, A1 for device or A3/A5 licence; with A3 or A5 the Minecraft Education toggle must be on. Organisations can buy subscriptions in the Microsoft 365 admin center, through volume licensing or partners ([Get and deploy Minecraft Education](https://learn.microsoft.com/education/windows/get-minecraft-for-education)). Faculty accounts get 25 free logins and student accounts 10 before a paid licence is required to continue playing.
- **Device limit for generation**: on Windows 11 PCs that are not Copilot+ PCs, each Learning Zone generation is limited to 10 slides, and generation on those devices is available until 1 August 2027. Whether this applies to Build Challenge matching is not yet published.
- **Not yet published**: whether connected lessons need any licence beyond the two above, and whether every student assigned a connected lesson needs a Minecraft Education licence.
- **Indirect costs**: admin time to align Minecraft Education licence assignment with the classes that will use connected lessons, and to deploy the Minecraft Education client.

## Scope

- **Users**: educators who create lessons in the Learning Zone Windows app, and learners who complete them in a browser or through Teams assignments. Minecraft Education is per-user licensed.
- **Licences**: Microsoft 365 Education A1, A3 or A5 for Learning Zone; a Minecraft Education, A1 for device or A3/A5 licence for Minecraft Education.
- **Roles**: assigning Minecraft Education licences needs the Global, License or User admin role. Turning off Learning Zone uses the Learning Zone admin page with an administrator account.
- **Clouds**: Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Platforms**: Desktop and Web, per the record.
- **Rollout**: In development, targeted for February CY2027. Rollout mechanics are not yet published.

## Governance guidance

### Before rollout
- Confirm, in the Learning Zone admin page, whether Learning Zone access is on for the organisation, since it has been on by default since 1 January 2026.
- Reconcile Minecraft Education licence assignment in the Microsoft 365 admin center with the classes likely to use connected lessons, including the Minecraft Education toggle for A3 and A5 users.
- Review the organisation's privacy notice against Learning Zone's storage geographies and its note on AI processing outside the storage geography.
- Decide with teaching leads whether faculty Minecraft Education licences, which carry the teacher role and elevated permissions, go only to staff who will run connected lessons.

### At rollout
- Check the Learning Zone Deploy page and Message center for the feature's default state and any new setting before educators start using it.
- Brief educators that unlicensed student accounts get only the Minecraft Education trial logins before a paid licence is required.

### After rollout
- Review licence assignment each term, remembering that students keep access for up to 30 days after the Minecraft Education toggle is turned off.
- Revisit this briefing when Microsoft documents which Minecraft data reaches Learning Zone reports.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Learning Zone, and so any connected lesson in it, is available to the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Open at https://aka.ms/LearningZoneAdmin with an administrator account; under Access settings, turn off access to Learning Zone. Covers the whole app, not Minecraft lessons alone.</small></td><td data-label="Admin UI"><strong>Learning Zone admin page</strong><br>Access settings <a href="https://learn.microsoft.com/microsoft-365/education/guide/1-reference/baseline-reference-deploy-learning-zone" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can use Minecraft Education</strong><br><small>User</small><br><small class="controls__note">Global, License or User admin. $addLicenses holds SkuId and DisabledPlans. Students keep access for up to 30 days after the toggle is turned off.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › user › product license › Minecraft Education <a href="https://learn.microsoft.com/education/windows/get-minecraft-for-education" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId &lt;user&gt; -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for Minecraft connected lessons inside Learning Zone</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026); the Learning Zone access switch is the nearest control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Learning Zone access switch turns off Learning Zone as a whole; Microsoft Learn documents no separate switch for Minecraft connected lessons at the time of writing (November 2026). Microsoft Learn also documents no PowerShell or Graph equivalent for the Learning Zone access switch. Minecraft Education access is governed per user by licence: assigning licences needs the Global, License or User admin role, and the Set-MgUserLicense cmdlet can assign a licence with chosen service plans disabled through DisabledPlans. Turning off Minecraft Education leaves students up to 30 more days of access.

## Open questions

- Will connected lessons be on by default for educators in tenants where Learning Zone is already on, or need an admin setting? Watch Message center and the Learning Zone Deploy page.
- Does every student assigned a connected lesson need a paid Minecraft Education licence, or do trial logins apply?
- Which Minecraft Education activity data is sent to Learning Zone reports, and where is it stored?
- Does matching curriculum goals to Build Challenges count as lesson generation for the Copilot+ PC and 10-slide limits?
- Will the Learning Zone admin page gain a separate setting for Minecraft integration?

<!-- rationale
risk: Medium. Student participation, completion and understanding data flows into Learning Zone reports, and Learning Zone is on by default in eligible organisations; Microsoft documents no switch for the Minecraft integration alone.
cost: Low. Learning Zone has no additional cost with an eligible Microsoft 365 Education licence; Minecraft Education needs a Minecraft Education, A1 for device or A3/A5 licence. A licence rule for connected lessons is not yet published.
impact: Medium. Educators who build Minecraft-based lessons and the students they assign them to notice; nothing reaches other staff.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Security & identity / role: Licence type decides who can run in-game teacher controls. | Found: Searched: 'Minecraft Education teacher role faculty license elevated permissions operator student teacher controls'; 'Minecraft Education teacher permissions students operator world host teacher license'; read Get and deploy Minecraft Education. No exclusive permission rule found. | Fix: Remove ', so licence type decides who can run in-game teacher controls'. Retain: 'Assigning a faculty Minecraft Education licence gives the user the teacher role in Minecraft Education with elevated permissions.' The cited deployment page supports that narrower statement.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Minecraft Education / licensing: Faculty accounts get 25 free logins before a paid licence is required. | Found: Users in a Microsoft-verified academic organization with Microsoft 365 accounts have access to a free trial for Minecraft Education. This grants faculty accounts 25 free logins, and student accounts 10 free logins before a paid license is required to continue playing. | Fix: Qualify the sentence for the briefing's academic audience: 'In Microsoft-verified academic organisations with Microsoft 365 accounts, faculty accounts get 25 free logins and student accounts 10 before a paid licence is required to continue playing.' | Source: https://learn.microsoft.com/education/windows/get-minecraft-for-education
-->
