---
title: "Microsoft Forms: Copilot Chat pane and Surveys Agent for form authors"
slug: "m365-copilot-surveys-agent-and-copilot-chat-in-microsoft-forms"
roadmapId: 553136
topic: "m365-copilot"
products: ["Forms","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft 365 Copilot Chat is built into Forms on the web, with the Surveys Agent for improving forms, sending invitations and analysing results. Licensed users get it; no admin switch for it is documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft's release notes say the pane is available to Microsoft 365 Copilot licensed business users. Learn's overview describes Microsoft 365 Copilot (Premium) as the full add-on licensed experience. A price or meter specific to Forms is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-copilot","copilot-chat","microsoft-forms","agents","licensing","surveys-agent"]
sources:
  - title: "Microsoft 365 Roadmap 553136"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=553136"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Administrator settings for Microsoft Forms"
    url: "https://learn.microsoft.com/microsoft-forms/administrator-settings-microsoft-forms"
    kind: "learn"
  - title: "Turn off or turn on Microsoft Forms"
    url: "https://learn.microsoft.com/microsoft-forms/turn-off-turn-on-microsoft-forms"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that gives access to the Forms pane (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that gives access to the Forms pane (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-forms-us-government-clouds","m365-copilot-structured-document-generation-with-forms"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence that gives access to the Forms pane"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Role: at least License Administrator or User Administrator. The licence gates the pane per the release notes; the pages describe licence assignment in general."
  - governs: "Whether a user can use Microsoft Forms at all (existing alternative, not specific to Copilot)"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Manage product licenses > Licenses and Apps > Apps > Microsoft Forms"
      docs: "https://learn.microsoft.com/microsoft-forms/turn-off-turn-on-microsoft-forms"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Removes Forms for the user, not only Copilot in Forms. In the PowerShell example, $addLicenses carries DisabledPlans with the Forms service plan (FORMS_PLAN_E5 for an E5 licence)."
  - governs: "Tenant-wide admin switch for the Copilot pane or Surveys Agent in Forms"
    scope: "tenant"
    ui: null
    api: null
    note: "Not listed in the Forms administrator settings or the Copilot settings page at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-23"
    note: "First briefing for the Copilot Chat pane and Surveys Agent in Microsoft Forms, with the licence and the Forms-off controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 40
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "2d6282791f9740b24470329ac2dac8e6"
---

## What's changing

Microsoft 365 Copilot Chat is now built into Microsoft Forms on the web. Users open it from the "Copilot" icon in Forms, and from there they can enable the Surveys Agent, which the roadmap item describes as helping with a form by recommending and applying improvements to a form or quiz, drafting and sending invitations, and analysing results.

The roadmap item says the Surveys Agent is available to users with a Microsoft 365 Copilot licence. Microsoft's Copilot release notes repeat this: the pane is "available to Microsoft 365 Copilot licensed business users through the Copilot icon in Forms". The roadmap record lists the platform as Web and the cloud as Worldwide (Standard Multi-Tenant).

The roadmap record gives the status as Launched, with a target of May CY2026 and the release phase General Availability. The Microsoft 365 Copilot release notes list the pane under September 23, 2026. Microsoft Learn has no dedicated admin page for the Forms pane or the Surveys Agent at the time of writing (November 2026), so behaviour beyond these two sources is not described here.

## Why it matters

This puts an AI assistant inside a tool that many organisations use for surveys, quizzes and feedback, where forms can collect responses from colleagues. For service owners the change is that Copilot can now act on a form's content and on its responses, from the same screen where the form is built.

The roadmap describes access as clicking the "Copilot" icon, so each licensed user chooses whether to open it. Nothing in the roadmap item or the release notes says it changes anything for users who do not click it. Plan for licensed form authors to start using it, and decide whether that fits how your organisation handles survey responses.

## Risk assessment

**Data exposure**

- The pane is described as helping users "analyze responses". Responses to internal surveys can include names and free-text comments, so check what your forms collect before licensed users point Copilot at them. The Forms setting **Record names by default** decides whether names are captured with responses.
- Learn's overview separately lists "Forms: Draft questions to create surveys, polls and other forms" under Microsoft 365 Copilot (Basic). The release notes for this pane name licensed users only, so confirm which experience your users see.

**Security & identity**

- Access follows the Microsoft 365 Copilot licence, which an administrator assigns per user. Removing the licence is the documented control.

**Autonomy & actions**

- The release notes say the pane helps users "draft and send invitations" and make changes to a form. Confirm how a user approves a change or a send before relying on it for forms that go to external recipients.

**Change & support**

- Expect questions from form authors about a new Copilot icon in Forms. Microsoft Learn documents no setting in the Forms administrator settings to hide it, so the answer for unlicensed users is the licence and for everyone else is user guidance.

## Cost and licensing

The pane and the Surveys Agent are described as available to users with a Microsoft 365 Copilot licence. Learn's Copilot overview describes Microsoft 365 Copilot (Premium) as the full add-on licensed experience, so the licence is an add-on that you assign per user.

Microsoft Learn's Copilot overview lists no meter or credit rate for Copilot in Forms, and a charge specific to the Surveys Agent is not yet published. Indirect costs are admin time to assign licences and to brief form authors.

To assign the licence, use the Microsoft 365 admin center or Microsoft Graph PowerShell (see the controls table). Learn says you must be at least a License or User Administrator to assign licences.

## Scope

**Users and licences:** users with a Microsoft 365 Copilot licence, described in the release notes as business users.

**Platform and cloud:** Web, in Worldwide (Standard Multi-Tenant), as the roadmap record lists them. The roadmap record does not list the US Government clouds for this item; see [Microsoft Forms: Copilot in Forms for US Government clouds](/features/m365-copilot-copilot-in-forms-us-government-clouds/) for that separate item.

**Rollout:** the roadmap status is Launched, with a target of May CY2026. Microsoft's release notes list the pane under September 23, 2026.

**Prerequisites:** the Copilot icon in Forms, as the roadmap describes it. Microsoft Learn names no further prerequisite for the pane.

## Governance guidance

### Before rollout

- Check which users hold a Microsoft 365 Copilot licence in the Microsoft 365 admin center, because they are the people who can use the pane.
- Review which forms collect names or sensitive free text, and the **Record names by default** setting in the Microsoft Forms org settings.
- Brief form authors that the pane can analyse responses and draft and send invitations, and that they should check each result before it leaves their hands.

### At rollout

- Test the pane with a licensed account on a non-sensitive form to see how Copilot proposes changes, invitations and analysis, and what the user must approve.
- Decide who should hold the licence; remove it from users who should not have the pane.

### After rollout

- Ask licensed form authors what they used the pane for, and whether they sent invitations to external recipients.
- Watch Message center and the Microsoft 365 Copilot release notes for an admin setting for Copilot in Forms.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that gives access to the Forms pane</strong><br><small>User</small><br><small class="controls__note">Role: at least License Administrator or User Administrator. The licence gates the pane per the release notes; the pages describe licence assignment in general.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a user can use Microsoft Forms at all (existing alternative, not specific to Copilot)</strong><br><small>User</small><br><small class="controls__note">Removes Forms for the user, not only Copilot in Forms. In the PowerShell example, $addLicenses carries DisabledPlans with the Forms service plan (FORMS_PLAN_E5 for an E5 licence).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Manage product licenses › Licenses and Apps › Apps › Microsoft Forms <a href="https://learn.microsoft.com/microsoft-forms/turn-off-turn-on-microsoft-forms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide admin switch for the Copilot pane or Surveys Agent in Forms</strong><br><small>Tenant</small><br><small class="controls__note">Not listed in the Forms administrator settings or the Copilot settings page at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The licence is the documented control for who sees the pane. The Forms administrator settings page lists External sharing, Record names of people in your org, Phishing protection, Allow YouTube and Bing and user licence assignment, and none is a Copilot or Surveys Agent setting.

Turning Forms off for a user removes Forms for that person altogether; it is an existing control, not one specific to Copilot. The Copilot settings page in the Microsoft 365 admin center has an **Agents** setting for access to agents, but Microsoft Learn does not say that it governs the Surveys Agent, so it is not listed as a row.

## Open questions

- Will Microsoft add an admin setting, in the Forms org settings or under Copilot > Settings, that turns the Copilot pane or the Surveys Agent off for a tenant or group? Watch the Forms administrator settings page and Message center.
- Does the Surveys Agent appear in the agent inventory of the Microsoft 365 admin center, where an administrator can block an agent? Watch the agent management pages.
- What does a user have to confirm before the pane applies a change to a form or sends an invitation, and can invitations go to external recipients?
- Is there a price or meter for the Surveys Agent beyond the Microsoft 365 Copilot licence? Watch the Microsoft 365 Copilot release notes and licensing pages.

<!-- rationale
risk: Medium. The pane analyses form responses and helps send invitations, and Microsoft Learn documents no switch for it in Forms, so the licence and turning Forms off are the controls.
cost: Low. The only cost shown is the Microsoft 365 Copilot add-on licence users must hold; no separate meter for the Forms pane is documented, so budget mainly for licences and admin time.
impact: Medium. People who hold a Microsoft 365 Copilot licence and build or run forms notice it as a Copilot icon in Forms; users without the licence are not named as recipients.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2]; summary; rationale: risk / absence: No tenant-wide admin control is documented for either the Forms Copilot pane or the Surveys Agent. | Found: Agents > Settings > User access ... No users - This option means that no users in the organization can access agents and plugins. | Fix: Narrow controls[2].governs to 'Tenant-wide switch specific to the Copilot pane in Forms', retaining its null sides. Replace the summary's last clause with 'no separate switch for the Forms pane is documented'. Do not extend this absence to agent governance: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings documents tenant agent access controls. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings
- [contradicted, blocker] Governance controls; Risk assessment: Security & identity; rationale: risk / applicability: Microsoft does not document agent governance covering the Surveys Agent, leaving licence assignment and disabling Forms as the controls. | Found: You can enable, disable, assign, block, or remove agents for your organization ... Microsoft agents: Developed by Microsoft and integrated with Microsoft 365 services. | Fix: Replace the final governance sentence with: 'Microsoft documents governance for Microsoft agents developed by Microsoft and integrated with Microsoft 365 services, including enabling, disabling, assigning, blocking and removing agents. This does not establish a separate switch for the Forms pane.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps. Replace the risk rationale's final clause with 'licence assignment and disabling Forms are documented controls, alongside general Microsoft-agent governance'. Keep the inventory question as a question rather than asserting an inventory entry. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: Cost low is consistent with a rationale identifying a required Copilot add-on licence as a direct cost. | Found: cost: "low"; licensing.model: "add-on"; 'Low. The only cost shown is the Microsoft 365 Copilot add-on licence users must hold'. The scale defines low as indirect cost only and medium as add-on licences for a subset of users. | Fix: Set cost to 'medium'. Replace the cost rationale with: 'Medium. The release notes require a Microsoft 365 Copilot licence for business users of the pane, and the Copilot overview describes an add-on licensed experience. No separate Forms-pane meter is documented; admin time is an additional indirect cost.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: Microsoft 365 Copilot (Premium) is an add-on licensed experience. | Found: Microsoft 365 Copilot (Premium) is the full add-on licensed experience | Fix: Keep the cited overview's add-on description, but add: 'The license-options page also says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible subscription plans.' Cite https://learn.microsoft.com/copilot/plan/copilot-license-options so the alternative entitlement is not silently omitted. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [supported, minor] Why it matters / behaviour: Forms is used for surveys, quizzes and feedback and collects responses from other people. | Found: Microsoft Forms is a simple, lightweight app that lets you easily create surveys, quizzes, and polls. ... In business organizations, it can be used to collect customer feedback, measure employee satisfaction | Fix: Add https://learn.microsoft.com/microsoft-forms/set-up-microsoft-forms to sources for the Forms background facts. | Source: https://learn.microsoft.com/microsoft-forms/set-up-microsoft-forms
- [supported, minor] Risk assessment: Data exposure / behaviour: Forms responses can include free-text answers. | Found: Choose what kind of question you want to add, such as Choice, Text, Rating, Date, Ranking, Likert, File upload, or Net Promoter Score | Fix: Cite https://support.microsoft.com/forms/create-a-quiz-with-microsoft-forms for Forms text questions, or narrow the sentence to 'Responses to internal surveys can include names', which the existing Forms administrator source supports. | Source: https://support.microsoft.com/forms/create-a-quiz-with-microsoft-forms
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: Every control that the governance checklist asks readers to review appears in the controls table. | Found: 'Review ... the Record names by default setting in the Microsoft Forms org settings.' The controls rows cover Copilot licence assignment, disabling Forms, and the missing pane/agent switch, not name recording. | Fix: Remove 'and the Record names by default setting in the Microsoft Forms org settings' from the Before rollout bullet. Keep the instruction to review which forms collect names or sensitive free text; do not add a control row.
- [supported, minor] Open questions / behaviour: An administrator can block an agent listed in the Microsoft 365 admin center agent inventory. | Found: Select Agents > All agents. ... select an agent from the list of agents. ... immediately under the agent's name, select Block or Unblock. | Fix: Add https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions to sources for the inventory-blocking premise. Keep whether Surveys Agent appears there as an open question. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
-->
