---
title: "Microsoft Teams: custom backgrounds for town halls in Manage what attendees see"
slug: "microsoft-teams-upload-custom-backgrounds-for-teams-events"
roadmapId: 561493
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Organisers and presenters of Teams town halls can upload their own background image in Manage what attendees see. Microsoft's notice says it is on by default and needs no admin action; the licence needed is described two ways."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "add-on"
  notes: "The roadmap item says the feature is for Teams events organisers with a Teams Premium licence. Notice MC1307982 says Teams Enterprise in its introduction and Teams Premium under who is affected. A price for this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-events","teams-premium","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 561493"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561493"
    kind: "roadmap"
  - title: "MC1307982: (Updated) Microsoft Teams Town halls: Upload custom backgrounds in Manage what attendees see"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1307982"
    kind: "message-center"
  - title: "Manage who can schedule and attend events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-events"
    kind: "learn"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-specify-who-has-control-of-production-tools-in-teams-meetings-and-events","microsoft-teams-preloaded-video-for-teams-events-and-meetings","microsoft-teams-new-layout-when-sharing-content-for-teams-events","microsoft-teams-external-presenters-can-access-production-controls-for-teams-events","meeting-policy"]
controls:
  - governs: "Whether users can create town halls (events optimised for large audiences)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Events optimized for a large audience"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowTownhalls Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-events"
    note: "Blunt fallback: it stops all town hall creation for users with the policy, not only custom backgrounds. Learn marks the Teams events policy cmdlet as preview."
  - governs: "Whether organisers and presenters can upload custom backgrounds in Manage what attendees see"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn lists admin control for Manage what attendees see as No control. Organisers choose who can control production tools."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-09T20:46:16"
changes:
  - date: "2026-11-24"
    note: "New briefing: town hall presenters can upload custom backgrounds; on by default per Microsoft's notice, with the licence described as both Teams Premium and Teams Enterprise."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 56
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "42d00b8097e63cb835b79c51364102b4"
---

## What's changing

Organisers and presenters who have access to production tools can upload their own background images in the **Manage what attendees see** experience for Teams town halls. The uploaded image replaces the default background, so presenters and shared content appear on a branded backdrop such as a company logo or event artwork. The roadmap item says this is for Teams events organisers with a Teams Premium licence and covers Teams for Windows desktop and Mac desktop.

Microsoft's notice MC1307982 (last updated 17 November 2026) adds detail. JPEG and PNG formats are supported, and recommended resolution guidance is shown during upload. Custom backgrounds appear alongside the default options in the background picker. The notice says the feature is enabled by default for eligible users and applies only to town hall events where Manage what attendees see is enabled, with no change to standard Teams meetings or webinars. Its compliance table says uploaded images are stored as part of the town hall event configuration.

The roadmap record gives the status as Rolling out, with a target of June CY2026, release phases General Availability and Targeted Release, and clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The notice gives Targeted Release rollout beginning and completing in early June 2026. It gives General Availability (Worldwide) rollout beginning in early June 2026 and expected to complete by late November 2026 (previously early November). The notice sets no act-by date. Microsoft Learn has no page on this feature at the time of writing (November 2026), so the behaviour above comes from the roadmap item and the notice.

## Why it matters

This arrives without an administrator doing anything, and Microsoft's notice says no admin action is required. For most tenants the effect is a communications and branding question: town hall organisers can now put their own image behind presenters and shared content in front of the whole audience, and nobody reviews that image before attendees see it. Expect requests from event teams for approved brand images and questions from organisers who do not see the option.

The licence is the part to settle first. The roadmap item says Teams Premium, while the notice's introduction says Teams Enterprise. Until Microsoft resolves that, treat Teams Premium as the licence to budget against and confirm with your licensing owner before telling organisers that they have, or lack, the feature.

## Risk assessment

**Data exposure**

- Uploaded images are stored as part of the town hall event configuration, per the notice, and are shown behind presenters and shared content to everyone attending that event. Organisers choose the image, so anything in it (logos, internal artwork, text) is visible to the whole audience.

**Security & identity**

- Learn says organisers choose which organisers, co-organisers or presenters can control production tools, and the roadmap item gives upload to those with production tool access. Whoever the organiser picks can therefore change what attendees see behind presenters.
- No new permission or identity model is described for this feature.

**Autonomy & actions**

- No change: neither the roadmap item nor the notice describes an agent, automation or action taken without a person.

**Change & support**

- The option is on by default for eligible users, so organisers may start using it before any guidance exists. The only admin control documented that touches it is the tenant events policy toggle for town halls, which stops town hall creation altogether.
- Organisers without the right licence may report a missing option, and the notice and roadmap name the licence differently.

## Cost and licensing

**Licence.** The roadmap item says the feature is available for Teams events organisers with a Teams Premium licence. Notice MC1307982 says Teams Enterprise in its introduction and lists users assigned a Teams Premium licence under who is affected. Both are reported here because they disagree.

Learn describes Teams Premium as a Teams add-on licence, so users need both a Teams licence and a Teams Premium licence to use its features ([Microsoft Teams Premium licensing](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams)). Learn's April 2026 licensing update says Teams Premium continues to offer branding and personalisation, and that some features previously only in Teams Premium are now included with Teams Enterprise ([Teams events licensing overview](https://learn.microsoft.com/microsoftteams/events-licensing)). The same page lists Manage what attendees see among the advanced event features, and says users must have a licence from the Advanced event features category to access the full set of Teams events features.

**Meter and price.** The events licensing and Teams Premium licensing pages list no separate charge or meter for town hall custom backgrounds, and no price for this feature is published there.

**Indirect cost.** Admin and communications time, plus design time to prepare branded images, which the notice suggests doing.

## Scope

- **Who:** organisers and presenters who have access to production tools in Teams town halls. The notice says the feature applies only to town hall events where Manage what attendees see is enabled, and does not change standard Teams meetings or webinars.
- **Licence:** Teams Premium per the roadmap item; the notice's introduction says Teams Enterprise.
- **Platforms:** Teams for Windows desktop and Mac desktop, per the roadmap item and the notice.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The notice gives its rollout window for Worldwide only.
- **Rollout:** status Rolling out, target June CY2026. The notice gives General Availability (Worldwide) as beginning in early June 2026 and expected to complete by late November 2026.
- **Prerequisite:** town halls must be allowed for the organiser by the Teams events policy; Learn describes these as events optimised for large audiences, such as town halls.

## Governance guidance

### Before rollout

- Confirm with your licensing owner which town hall organisers and presenters hold Teams Premium, and which licence Microsoft expects, because the roadmap item and the notice introduction disagree.
- Prepare approved JPEG or PNG background images that follow your brand guidelines, as the notice suggests.
- Decide who in your organisation approves a background before it goes in front of an audience, since no admin review step is documented.

### At rollout

- Tell town hall organisers and presenters about the new upload option and the approved images, as the notice recommends.
- Run a test town hall on Teams for Windows desktop and Mac desktop to see the upload flow and the attendee view.
- Leave the **Events optimized for a large audience** toggle on unless you need to stop town halls altogether; it is the only documented admin switch in the area.

### After rollout

- Update event playbooks and internal guidance for hosting town halls to cover backgrounds.
- Watch Message center notice MC1307982 and the Teams events licensing overview for a licence clarification or an admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create town halls (events optimised for large audiences)</strong><br><small>User</small><br><small class="controls__note">Blunt fallback: it stops all town hall creation for users with the policy, not only custom backgrounds. Learn marks the Teams events policy cmdlet as preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Events optimized for a large audience <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowTownhalls Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/set-up-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organisers and presenters can upload custom backgrounds in Manage what attendees see</strong><br><small>Tenant</small><br><small class="controls__note">Learn lists admin control for Manage what attendees see as No control. Organisers choose who can control production tools.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented controls are blunt. The events policy toggle decides whether users can create town halls at all; it does not separate town halls with custom backgrounds from those without. Learn says that if the value is changed to Off after a user schedules an event, they cannot run or start the event, so apply the change with care.

Learn's events reference lists admin control for **Manage what attendees see** as "No control", and the Set-CsTeamsEventsPolicy reference lists no background parameter at the time of writing (November 2026). Organisers choose who can control production tools, so access to the upload option is decided per event by the organiser, not by policy.

## Open questions

- Which licence does the upload need: Teams Premium (roadmap item, and who is affected in the notice) or Teams Enterprise (notice introduction)? Watch MC1307982 and the Teams events licensing overview.
- Will Microsoft add an admin setting or Teams PowerShell parameter to switch the upload off or limit it to approved images?
- How long are uploaded images kept with the town hall event configuration, and what happens to them when the event is deleted?
- When will the feature reach GCC, GCC High and DoD, which the roadmap record lists but the notice's rollout window does not mention?

<!-- rationale
risk: Low. The change is cosmetic: organisers and presenters add a background image to town halls they already run, and the image is stored with the event configuration. Learn documents no admin setting for it.
cost: Medium. The roadmap item says a Teams Premium licence is required, an add-on for a subset of users; the Message Center notice also names Teams Enterprise. A separate price or meter for this feature is not published.
impact: Low. Only town hall organisers and presenters with access to production tools on Teams for Windows desktop and Mac desktop see the new option; attendees see the result.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Nobody reviews an uploaded image before attendees see it. | Found: Searched: Manage what attendees see approval background; town hall Manage what attendees see upload custom backgrounds admin approval policy. Read MC1307982, plan-events and custom-meetings-overview excerpts; none establishes that nobody reviews images. | Fix: Remove ", and nobody reviews that image before attendees see it". The absence of a documented admin review step does not establish that no person reviews the image.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / record: The notice gives Targeted Release rollout completing in early June 2026. | Found: is expected to complete by early June 2026 (previously late May). | Fix: Replace the Targeted Release sentence with: "The notice gives Targeted Release rollout beginning in early June 2026 and expected to complete by early June 2026."
- [supported, minor] Risk assessment: Change & support; Governance guidance: At rollout / absence: For this background upload, the briefing identifies no documented admin switch other than the town hall creation fallback. | Found: Searched: Teams town hall Manage what attendees see upload custom backgrounds admin approval policy PowerShell Graph background parameter. Read plan-events and set-up-events; no dedicated upload switch found, but these pages document other event policies. | Fix: Replace "The only admin control documented that touches it is the tenant events policy toggle for town halls, which stops town hall creation altogether" with "No dedicated admin switch for this upload is documented; the events policy toggle stops town hall creation altogether for users with the policy." Remove "; it is the only documented admin switch in the area" from Governance guidance.
- [contradicted, minor] front matter: action / consistency: The prepare action rating is not reconcilable with the stated medium cost, automatic rollout and immediate licensing decision. | Found: cost: "medium"; defaultState: "on"; action: "prepare"; "The licence is the part to settle first." | Fix: Set action to "act-now": the feature is rolling out automatically, the briefing rates cost medium, and it identifies a licensing decision to take before the expected rollout completion in late November 2026.
-->
