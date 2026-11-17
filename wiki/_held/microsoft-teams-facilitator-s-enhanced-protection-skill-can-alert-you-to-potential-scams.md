---
title: "Microsoft Teams: Facilitator Protection skill warns of suspected social engineering"
slug: "microsoft-teams-facilitator-s-enhanced-protection-skill-can-alert-you-to-potential-scams"
roadmapId: 573450
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Facilitator's Protection skill will use AI on the meeting transcript to warn users of suspected social engineering by outsiders. Microsoft's notice says no action is required to enable it; plan user communication."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "November CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Learn says Facilitator is included with a Microsoft Copilot license and subject to available capacity. Licensing for the Protection skill itself is not yet published."
audiences: ["m365-admin","security","service-owner","change-adoption"]
tags: ["facilitator","teams","ai","threat-detection","meeting-transcripts"]
sources:
  - title: "Microsoft 365 Roadmap 573450"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573450"
    kind: "roadmap"
  - title: "MC1536056: Microsoft Teams: Facilitator Protection skill helps identify suspected social-engineering attempts"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1536056"
    kind: "message-center"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["microsoft-teams-report-a-security-concern-in-meetings","microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings"]
controls:
  - governs: "Whether the Facilitator app is available to users"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <FacilitatorAppId> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Governs Facilitator as an app. Microsoft has not confirmed it governs the Protection skill separately; no skill-specific setting is documented."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-17"
    note: "New briefing for the Facilitator Protection skill, using the roadmap record, MC1536056 and Learn's Facilitator page."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 45 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 40
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "d342849127fa815efb1aea1a63e17601"
---

## What's changing

Facilitator's Protection skill checks a Teams meeting transcript for signs that someone outside your organisation is trying to trick participants into sharing sensitive information. If it detects a suspected attempt, users see a warning in the meeting with options to end the meeting or temporarily restrict information sharing. This is the roadmap item's description.

Microsoft's notice MC1536056 says the Protection skill is invoked automatically when Facilitator is present in a meeting with participants outside your organisation, and that no action is required to enable it. Microsoft Learn does not describe the Protection skill yet, so the behaviour above rests on the roadmap item and that notice.

The roadmap record lists status Rolling out, a target date of November CY2027, General Availability and Targeted Release phases, the Worldwide (Standard Multi-Tenant) cloud, and Desktop and Mac platforms. The notice gives a later and more specific rollout window: General Availability (Worldwide) beginning in late January 2027 and expected to complete by mid-February 2027. The two dates disagree, so treat the notice's window as Microsoft's tenant-facing schedule and the roadmap date as a target. The notice sets no act-by date.

Learn's Facilitator page currently lists Facilitator as unsupported in external chats and meetings, which sits uneasily with a skill aimed at meetings with outside participants (see Open questions).

## Why it matters

This is a new AI check running over meeting transcripts, aimed at the meetings where outsiders are present. Microsoft's notice says it is invoked automatically and needs no action to enable, so the first sign in your tenant may be a user's question about a warning that appears mid-meeting.

The notice's compliance section says the change introduces an AI capability that interacts with customer data, because the skill checks the transcript. Plan on a short user message and a support answer ready before late January 2027, and settle with your security and privacy owners whether the Facilitator controls you have today are enough.

## Risk assessment

**Data exposure**

- The Protection skill reads the meeting transcript to look for signs of suspected social engineering (roadmap item; MC1536056). Microsoft has not said where that analysis runs or whether warnings are retained, so confirm both with your privacy owner.

**Security & identity**

- This is a detection aid for outsiders who try to extract sensitive information. The roadmap describes it as helping users spot suspected attempts, not as a block, so users still decide whether to end the meeting or restrict sharing.
- Warnings may be wrong in either direction. A missed attempt or a false alarm is possible with any AI detection, so tell users the warning is a prompt to pause, not a verdict.

**Autonomy & actions**

- Microsoft's notice says the skill is invoked automatically in meetings with outside participants. Learn's Facilitator page says Facilitator is allowed by default, so the starting point is that eligible meetings get it.
- The options offered to users are to end the meeting or temporarily restrict information sharing. Microsoft has not described what 'restrict information sharing' changes in the meeting.

**Change & support**

- Users in external meetings may see a warning they have not met before. Microsoft's notice recommends informing users and helping them understand the options if a warning appears.
- Microsoft documents no setting for the Protection skill itself in the roadmap item or the notice, so the available switch is the Facilitator app Allow or Block control, and the effect of that switch on this skill is not stated.

## Cost and licensing

Learn's Facilitator page says Facilitator is included with a Microsoft Copilot license and subject to available capacity. It lists an eligible Microsoft 365 base licence, an eligible Microsoft Teams licence and a Microsoft Copilot licence as user requirements (https://learn.microsoft.com/microsoftteams/facilitator-teams).

Neither the roadmap item nor MC1536056 names a licence or meter for the Protection skill, so whether it follows the Facilitator rule is not yet published. No price or credit rate is published for it at the time of writing (November 2026).

The indirect cost is admin time to brief users, update support scripts and decide on the Facilitator Allow or Block setting.

## Scope

- **Users:** the notice says users who use Facilitator in meetings with participants outside their organisation are affected. Learn says only licensed users can initiate Facilitator.
- **Cloud and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) only, and Desktop and Mac platforms.
- **Rollout:** MC1536056 gives General Availability (Worldwide) from late January 2027 to mid-February 2027. The roadmap record shows status Rolling out, Targeted Release and General Availability phases, and a target date of November CY2027.
- **Prerequisites:** the Protection skill's own prerequisites are not stated. Learn lists Loop experiences in Teams being turned on as a user requirement for Facilitator in meetings.
- **Limitation to confirm:** Learn says Facilitator isn't supported in external chats and meetings, while this skill targets meetings with outside participants.

## Governance guidance

### Before rollout

- Tell Teams, security and service-desk owners what the warning is and what its two options do, using the wording in MC1536056.
- Check the Facilitator app's current state in the Teams admin center (Teams apps > Manage apps), because Learn says Facilitator is allowed by default.
- Decide, with your security owner, whether to keep Facilitator available to everyone or to a group; blocking Facilitator is the documented switch, and Microsoft has not said whether it also stops the Protection skill, so confirm that in a pilot once the skill arrives.

### At rollout

- Watch Message center for MC1536056 updates, because the rollout window (late January to mid-February 2027) differs from the roadmap's November CY2027 target.
- Test a meeting with an external participant in a pilot group and record what users see, so your guidance matches the real warning.

### After rollout

- Collect user reports of warnings and note whether they were useful or false alarms, then share them with your security team.
- Re-read Learn's Facilitator page for new Protection skill documentation and update this briefing's open questions when Microsoft answers them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Facilitator app is available to users</strong><br><small>Tenant</small><br><small class="controls__note">Governs Facilitator as an app. Microsoft has not confirmed it governs the Protection skill separately; no skill-specific setting is documented.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;FacilitatorAppId&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only documented control is the Facilitator app's Allow or Block action, which governs Facilitator as a whole. Learn does not say that it governs the Protection skill separately, so treat its effect on this skill as something to confirm.

Learn also describes app permission policies and app-centric management for allowing Facilitator to a group of users. Changing the Facilitator app setting needs Teams admin credentials per the Learn steps. Neither the roadmap item nor MC1536056 names a setting for the Protection skill itself.

## Open questions

- Is there a tenant, policy or user-level setting for the Protection skill, and does blocking the Facilitator app stop it? Watch MC1536056 and Learn's Facilitator page.
- Learn says Facilitator isn't supported in external chats and meetings. Which external participants (guests, federated users, anonymous) trigger the skill? Watch Learn's Facilitator limitations.
- Does the Protection skill need a Microsoft Copilot licence for each user, the organiser, or neither? Watch Learn's Facilitator licensing section.
- Why does the roadmap show a target of November CY2027 while Microsoft's notice gives late January to mid-February 2027? Watch the roadmap item and MC1536056.
- Where is the transcript analysed, and are warnings or detections stored or audited? Watch Learn's Facilitator and Microsoft Purview pages.

<!-- rationale
risk: Medium. An AI skill reads meeting transcripts and is invoked automatically in meetings with external participants, and Microsoft's notice names no admin setting for the skill itself.
cost: Low. The only cost the sources show is admin time and user communication; Facilitator is included with a Microsoft Copilot licence, and no separate charge for the Protection skill is published.
impact: Medium. Users in Facilitator meetings that include outside participants will see warnings and must choose to end the meeting or restrict information sharing.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table / command: Update-M365TeamsApp -Id <FacilitatorAppId> -IsBlocked $true is the automation equivalent of blocking Facilitator. | Found: Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -IsBlocked $true Unblocks Bookings app (App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b). | Fix: Remove the runnable blocking call and set controls[0].api to null. Add to its note: 'The Update-M365TeamsApp reference describes its -IsBlocked $true example as unblocking an app; a reliable blocking call is not established by that reference.' Keep the verified admin UI path. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: The licensing model is unknown because Microsoft has not said whether the Facilitator licensing rule covers this skill. | Found: Facilitator is included with a Microsoft Copilot license and subject to available capacity. The following list contains the prerequisites for users to be able to access Facilitator features in Teams meetings. | Fix: Set licensing.model to 'included'. Replace statements that the general Facilitator rule is unconfirmed with: 'Microsoft documents Facilitator features in Teams meetings as included with a Microsoft Copilot license, subject to available capacity. Protection-specific additional charges and which participants need licences to receive its warnings are not yet published.' Retain the published base, Teams and Copilot licence requirements. | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
- [contradicted, blocker] Governance controls / applicability: The only documented Facilitator control is the app's Allow or Block action. | Found: You can also use app centric management to allow and block, create policies, and assign users. You can manage this control using the IsCollabMeetingNotesFluidEnabled setting in PowerShell. | Fix: Replace 'The only documented control is the Facilitator app’s Allow or Block action, which governs Facilitator as a whole' with 'The table lists the Facilitator app’s Allow or Block action, which governs Facilitator as a whole.' Do not imply that other Facilitator controls are undocumented. | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Prerequisites / absence: The Protection skill's prerequisites are not stated. | Found: Searched: "Facilitator" "Protection" skill settings license pricing. Opened learn.microsoft.com/microsoftteams/facilitator-teams; general Facilitator prerequisites are stated, but no additional Protection-specific prerequisite is described. | Fix: Narrow the sentence to: 'Additional prerequisites specific to the Protection skill are not yet published.' Keep the existing sentence about the published Loop requirement.
- [contradicted, minor] rationale: impact / record: Users in Facilitator meetings with outsiders will see warnings and must choose to end the meeting or restrict information sharing. | Found: If a suspected attempt is detected, users will receive a warning.- Users will have options to end the meeting or temporarily restrict information sharing. | Fix: Replace the impact rationale with: 'Medium. Users in Facilitator meetings with outside participants may see a warning if a suspected attempt is detected, with options to end the meeting or temporarily restrict information sharing.'
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist's instruction to decide whether Facilitator is available to everyone or a group is represented in the controls table. | Found: Decide, with your security owner, whether to keep Facilitator available to everyone or to a group; blocking Facilitator is the documented switch Teams apps > Manage apps > Facilitator > Allow or Block | Fix: The everyone-versus-group availability decision has no corresponding control row. Narrow that checklist bullet to: 'Decide, with your security owner, whether to allow or block Facilitator; Microsoft has not said whether blocking it also stops the Protection skill, so confirm that in a pilot once the skill arrives.'
-->
