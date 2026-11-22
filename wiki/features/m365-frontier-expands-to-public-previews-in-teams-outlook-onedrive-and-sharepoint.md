---
title: "Microsoft 365: Frontier program expands to preview features in Teams, Outlook, OneDrive and SharePoint"
slug: "m365-frontier-expands-to-public-previews-in-teams-outlook-onedrive-and-sharepoint"
roadmapId: 578225
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Frontier now brings eligible public previews for Teams, Outlook, OneDrive, SharePoint and Copilot into one admin-controlled opt-in. Nothing changes until admins enrol users; existing Frontier users need not re-enrol."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Teams and Surface Devices","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Users do not need a Microsoft Copilot licence to be enrolled. Admins no longer need a licence that includes Copilot to enrol users through either experience once the unified release preferences experience is available in their tenant. Users need a licence that includes the product whose preview they use. Certain Frontier experiences may only be available on a paid basis."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["frontier-program","release-channels","m365-admin-center","admin-controls","teams","outlook","onedrive","sharepoint","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 578225"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578225"
    kind: "roadmap"
  - title: "Get started with the Microsoft Frontier Program"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    kind: "learn"
  - title: "Configure new Standard and Deferred release options for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options"
    kind: "learn"
  - title: "Application card: Autopilot (Frontier)"
    url: "https://learn.microsoft.com/copilot/autopilot/microsoft-autopilot-application-card"
    kind: "learn"
videos: []
related: ["frontier-program"]
controls:
  - governs: "Frontier enrolment for all users or specific users and groups (unified release preferences)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Organization profile > Release preferences > Turn on Frontier"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    api: null
    note: "Roles: AI Administrator, Security Administrator or Office Apps Administrator. Unified experience rolling out gradually from mid-November 2026."
  - governs: "Frontier enrolment through the existing Copilot Frontier setting"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Copilot Frontier > Turn on Frontier"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    api: null
    note: "Learn says this experience still exists after the unified release preferences experience becomes available."
  - governs: "Standard or Deferred release for GA features (existing control, separate from Frontier)"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Organization profile > Release preferences > Standard release or Deferred release"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options"
    api: null
    note: "Choose Standard release or Deferred release, with up to 10,000 user exceptions; each user in an assigned security group counts individually toward the limit. Same roles as Frontier enrolment."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-22"
    note: "First briefing: Frontier expands to eligible previews across Microsoft 365 workloads, with the unified release preferences admin screen rolling out from mid-November 2026."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: Frontier enrolment licensing now notes admins no longer need a Copilot-inclusive licence once the unified experience arrives, the 10,000 exception limit counts group members individually, and enrolled users receive eligible previews as released."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: replaced the claim that autonomous previews are not described with what Microsoft's Autopilot (Frontier) application card says, removed 'as Learn suggests' from the pilot-group step, and corrected the impact rationale on who sees Frontier agents."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 87
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5464b9c398b0338d6deab5eab5def741"
---

## What's changing

The Microsoft 365 Roadmap item (status Launched, target November CY2026, General Availability, Worldwide (Standard Multi-Tenant)) says Frontier is expanding to bring eligible public preview features across Microsoft 365 into one program. Users enrolled in Frontier can get eligible previews for new Outlook for Windows, OneDrive, SharePoint, Microsoft Teams and Copilot, managed through a single admin-controlled enrolment experience. Enrolment is optional and separate from Standard and Deferred release preferences for generally available features. Existing Frontier users do not need to re-enrol.

Microsoft Learn describes Frontier as an opt-in audience next to Standard release (the default for generally available features) and Deferred release (approximately 30 days after Standard rollout begins for deferred-eligible major updates; ineligible updates follow the Standard schedule). An admin can opt users in to Frontier and also assign them to Standard or Deferred release. For features that are not part of Frontier, the user's Standard or Deferred preference still decides when they arrive at general availability.

The admin screen is moving. Microsoft Learn says a unified release preferences experience in the Microsoft 365 admin center, covering Frontier, Standard release and Deferred release, is rolling out gradually from mid-November 2026, so it may not be in your tenant yet. The existing Copilot Frontier setting remains available after it arrives. Learn marks Frontier features as preview and subject to change, and says it can take up to three hours for features and agents to reach enrolled users.

## Why it matters

Frontier becomes a tenant-wide way to choose who sees pre-GA features in Teams, Outlook, OneDrive and SharePoint as well as Copilot, so the decision about who is enrolled now has a wider reach than a Copilot pilot. Treat the enrolment scope as a change-management decision: a named pilot group gives you preview exposure without putting every user on features that Microsoft says may be modified, suspended or discontinued.

The default state is admin opt-in: Learn describes Frontier as opt-in, and users who are not enrolled stay on their Standard or Deferred preference. If nobody acts, no one is enrolled by this change. Tenants that already enrol users should check the scope now: eligible enrolled users can access supported previews as they are released, and the roadmap says existing Frontier users do not need to re-enrol.

## Risk assessment

**Data exposure**
- Frontier experiences are preview features governed by your customer agreements, including the Data Protection Addendum, and allow personal data processing as that addendum describes. Microsoft says HIPAA Business Associate Agreement coverage is not included and that Frontier features do not comply with ISO 27001, ISO 27002 or ISO 27018 requirements. Ask compliance whether those terms block enrolment for regulated users.
- Some Frontier features need a large language model from an AI provider such as Anthropic. Microsoft says Frontier never enables an AI provider for you, so a feature that depends on one is not usable until you approve that provider in the Microsoft 365 admin center.

**Security & identity**
- The Learn page names AI Administrator, Security Administrator and Office Apps Administrator as the roles that can enrol users. Review who holds them, since one toggle decides preview access for All users or for Specific users and groups.
- Frontier does not override agent settings: Learn says an agent turned off in the Agent view is unavailable regardless of a user's Frontier enrolment.

**Autonomy & actions**
- Frontier previews include agents. Newly published Frontier agents have been available to Frontier-enrolled users only since March 29, 2026, and appear in the Agent store with (Frontier) in the name. Microsoft's [Autopilot (Frontier) application card](https://learn.microsoft.com/copilot/autopilot/microsoft-autopilot-application-card) says Autopilot uses authorised Teams, Outlook, OneDrive and SharePoint information through its available tools and can complete tasks without asking at each step.

**Change & support**
- Microsoft says Frontier experiences may not be covered by standard support commitments or service level agreements. Tell the helpdesk which users are enrolled so unfamiliar behaviour is routed correctly.
- Learn warns that moving users from Standard release to Deferred release can cost them features that are not yet available in Deferred release. Keep that in mind when changing GA preferences for Frontier pilot users.

## Cost and licensing

Licence: users do not need a Microsoft Copilot licence to be enrolled. Admins no longer need a licence that includes Copilot to enrol users through either experience once the unified release preferences experience is available in their tenant (Frontier page). To use Frontier features for Copilot, users need a Microsoft Copilot licence or one that includes access to Copilot, and to use Frontier features for Microsoft Teams they need a licence that includes Teams. Users enrolled without the matching licence are not shown those features. The page also says your own admin account should hold a corresponding licence so that all Frontier AI settings and agents appear.

Meter: the page states that certain Frontier experiences may only be available on a paid basis and points to the Microsoft Copilot Credits Guide for Copilot credit consumption requirements (see [Copilot Credits](/concepts/copilot-credits/)). No price or credit rate for a specific Frontier preview appears on that page.

Indirect cost is admin time, pilot-group communication and helpdesk readiness. No cap or budget control is described on the Frontier page.

## Scope

- **Who configures it:** a Microsoft 365 admin centre account with the AI Administrator, Security Administrator or Office Apps Administrator role.
- **Who is enrolled:** All users, or Specific users and groups, as the admin chooses. Frontier is managed at the tenant level.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). Microsoft's release options page says that currently Deferred release and Frontier are not available in GCC, GCC High and DoD environments.
- **Surfaces:** the roadmap record lists Android, Desktop, iOS, Mac, Teams and Surface Devices, and Web. Microsoft's release options page says the audience-based release model applies to new Outlook for Windows, Outlook on the web, OneDrive, SharePoint Online, Office for the web, Microsoft Teams and the Microsoft 365 admin center, and does not apply to Microsoft 365 Apps, which are managed through update channels.
- **Rollout:** the unified release preferences experience is rolling out gradually from mid-November 2026. Existing Frontier users stay enrolled when Targeted release is retired in January 2027; from November 2026 commercial clouds can no longer add, remove or modify Targeted release enrolment.

## Governance guidance

### Before rollout
- Open the current Frontier setting and record whether enrolment is All users or Specific users and groups, so you know what the expansion could reach (Microsoft 365 admin center; role: AI Administrator, Security Administrator or Office Apps Administrator).
- Create or choose a Microsoft Entra ID security group for the pilot and keep it separate from your Standard or Deferred exception groups.
- Check that pilot users hold a licence that includes each product they will preview, since Frontier features for a product are not shown without it.
- Ask compliance to review Microsoft's Frontier preview terms (Data Protection Addendum, no HIPAA Business Associate Agreement coverage, no ISO 27001, 27002 or 27018 compliance) before enrolling regulated users.

### At rollout
- Turn on Frontier for Specific users and groups first, and allow up to three hours before checking that features appear.
- Leave each pilot user's Standard or Deferred release preference as it is; Frontier enrolment does not replace it for generally available features.
- Tell pilot users that Frontier features are preview, may change and may sit outside standard support commitments.

### After rollout
- Review who is enrolled at each month end and remove users who no longer need pre-GA access.
- Collect pilot feedback and Message center posts before widening enrolment to All users.
- Re-check the release preferences screen once the unified experience reaches your tenant, because the existing Standard and Deferred screen is retired for commercial clouds at that point.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Frontier enrolment for all users or specific users and groups (unified release preferences)</strong><br><small>Tenant</small><br><small class="controls__note">Roles: AI Administrator, Security Administrator or Office Apps Administrator. Unified experience rolling out gradually from mid-November 2026.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Organization profile › Release preferences › Turn on Frontier <a href="https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Frontier enrolment through the existing Copilot Frontier setting</strong><br><small>Tenant</small><br><small class="controls__note">Learn says this experience still exists after the unified release preferences experience becomes available.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Copilot Frontier › Turn on Frontier <a href="https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Standard or Deferred release for GA features (existing control, separate from Frontier)</strong><br><small>User</small><br><small class="controls__note">Choose Standard release or Deferred release, with up to 10,000 user exceptions; each user in an assigned security group counts individually toward the limit. Same roles as Frontier enrolment.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Organization profile › Release preferences › Standard release or Deferred release <a href="https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The row for the unified experience applies once it has reached your tenant; until then use the existing Copilot Frontier setting. Both rows offer All users or Specific users and groups, and changes can take up to three hours to reach users.

The Standard and Deferred row is a separate control. Learn says it governs when generally available features arrive for users, and the Frontier toggle is a separate choice on the same Release preferences panel. That path applies after the unified experience reaches your tenant; until then Learn gives Copilot > Settings > View all > Copilot Release Preferences: General Availability > Standard release or Deferred release.

Agent settings sit outside Frontier. The Frontier page asks admins to confirm that Allow agents and plugins built by Microsoft is checked under Agent > Settings > Agent and plugin access before users can reach Frontier agents. The page also says the Frontier admin control does not override the Agent section.

Microsoft Learn's Frontier and release options pages document admin centre steps only, and no PowerShell or Microsoft Graph call for these settings is documented there at the time of writing (November 2026).

## Open questions

- Which public previews in new Outlook for Windows, OneDrive, SharePoint and Teams will be eligible for Frontier, and where will Microsoft list them? Watch the Frontier Learn page and Message center.
- The Learn page says IT admins control which users have access to which Frontier features. Is that done only through the All users and Specific users and groups choice, or is there a per-feature or per-workload control?
- What do the experiences that may be paid cost, and which Frontier previews are metered in Copilot Credits? Watch the Microsoft Copilot Credits Guide and Message center.

<!-- rationale
risk: Medium. Nothing reaches users until an admin opts in, but enrolling users, or the whole tenant, gives them eligible pre-GA features that Microsoft says may be changed or suspended and may sit outside standard support commitments.
cost: Low. Users do not need a Microsoft Copilot licence to be enrolled, but need the licence for the product they preview; Microsoft says certain Frontier experiences may be paid, and the Frontier page gives no price or credit rate.
impact: Medium. Enrolled users receive eligible expanded previews; Frontier agents published before March 29, 2026 remain accessible to all users with a Microsoft Copilot licence. Enrolling all users exposes the whole tenant to preview behaviour in Teams, Outlook, OneDrive, SharePoint and Copilot, which helpdesks will not recognise from documentation.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Autopilot can complete tasks without asking at each step. | Found: Autopilot can complete tasks without asking at each step. ... Actions that match the owner's request run; others show an approval card. Payments and sensitive browser steps always need approval. | Fix: Append: 'An automated review system reviews actions that send, share, delete or change content, or create or change an automation; actions matching the owner's request run, others show an approval card, and payments and sensitive browser steps always need approval.' Keep the existing application-card citation. | Source: https://learn.microsoft.com/copilot/autopilot/microsoft-autopilot-application-card
-->
