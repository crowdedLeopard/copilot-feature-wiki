---
title: "Microsoft Purview Endpoint DLP: expanded controls for local AI agents"
slug: "microsoft-purview-endpoint-data-loss-prevention-protect-sensitive-data-across-agent-to-hum"
roadmapId: 577862
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to extend Endpoint DLP to supported local AI agents, covering prompts, files and tool interactions. Preview is targeted for January CY2027. Learn does not yet document the controls, so there is nothing to configure today."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint DLP as included in Microsoft 365 E5/A5/G5 and Microsoft Purview Suite plans. A licence statement specific to the local-agent controls is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","agents","agent-governance","device-onboarding","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap: item 577862"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577862"
    kind: "roadmap"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Create a DLP policy that uses device scoping"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Local AI agent discovery with Microsoft Defender for Endpoint"
    url: "https://learn.microsoft.com/defender-endpoint/local-agent-discovery-overview"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with","microsoft-purview-data-loss-prevention-for-microsoft-cowork","purview-dlp-block-sensitive-data-in-copilot-web-search","microsoft-purview-purview-sdk-embedded-in-agent-framework-sdk"]
controls:
  - governs: "Where an Endpoint DLP policy applies (the Devices location)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > Devices"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <String> -EndpointDlpLocation <MultiValuedProperty>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Today's route for Endpoint DLP policies. Learn does not yet say agent protection is set here. Creating a policy needs a role group such as Compliance administrator."
  - governs: "Per-device Endpoint DLP policy sync status"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices > device"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Read-only. The API side is an Advanced hunting query in the Microsoft Defender portal, not a call that changes policy."
  - governs: "Which local AI agents and interaction points an Endpoint DLP policy covers"
    scope: "agent"
    ui: null
    api: null
    note: "No agent-specific Endpoint DLP setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T19:05:12"
changes:
  - date: "2026-11-20"
    note: "New briefing: roadmap item 577862, Endpoint DLP controls for local AI agents, targeted for Preview in January CY2027."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 43 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: replaced the claim that devices not showing Updated receive no policies, with what Learn says about onboarding and sync status; added the device path step and a source for local agents."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 47 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 47
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "2c59180d1fe061fc23d9476dac3eacf8"
---

## What's changing

Microsoft plans to extend Microsoft Purview Data Loss Prevention (DLP) inline protection to supported local AI agents. The roadmap item describes protection across human-to-agent and agent-to-tool interactions, and says organisations can apply DLP policies to prompts, files and tool interactions to block policy-violating data movement at supported interaction points.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap does not say which local agents are supported, which interaction points count as supported, or how policies select them. The default state on arrival is not stated.

The roadmap item lists the status as In development, with a Preview target of January CY2027 and a target date of March CY2027, both Microsoft targets. It lists release phases General Availability and Preview, the Worldwide (Standard Multi-Tenant) cloud, and the platform "Web". Learn describes Endpoint DLP as covering Windows 10/11, macOS and certain Windows server versions, so which operating systems the agent controls cover is an open question.

## Why it matters

Local AI agents run on the user's device, and the roadmap says DLP protection will extend to them. For service owners that could make Endpoint DLP the place where policy applies to agent prompts, files and tool calls, alongside the device policies already in place. Plan for that, but note that the interaction points covered are Microsoft's to define and are not yet published.

Microsoft has not stated what happens on arrival, so no source says existing DLP behaviour changes for current policies. The sensible position for now is to confirm that Endpoint DLP is onboarded and healthy on the devices where agents run, and to wait for the Learn page before writing policy.

## Risk assessment

**Data exposure**
- The roadmap item says policies would apply to prompts, files and tool interactions, but only "at supported interaction points". Agent activity outside those points is not covered, and Microsoft has not published the list.
- Devices must be onboarded to use Endpoint DLP. A policy sync status of Updated confirms receipt of the latest policy version; other statuses require investigation and do not by themselves establish that no policy is enforced.

**Security & identity**
- Microsoft has not stated which account or component evaluates agent interactions, so confirm this with Microsoft before designing exceptions or monitoring around it.

**Autonomy & actions**
- The roadmap item describes blocking policy-violating data movement. How a block shows to a person or to an agent, and whether override is offered for agent actions, is not yet documented.

**Change & support**
- Blocks on agent activity could generate support calls from people who use local agents for work. Existing DLP guidance recommends starting from simulation mode and a pilot group before full enforcement; whether that applies to the agent controls is not yet documented.

## Cost and licensing

The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. That page covers Endpoint DLP in general; a licence statement for the local-agent controls specifically is not yet published.

No price or meter for this feature is published at the time of writing (November 2026). The indirect costs are admin time to scope policies and tune them, and any work needed to onboard devices.

## Scope

Users and devices: Endpoint DLP applies to onboarded Windows 10/11 and macOS devices and certain Windows server versions, according to Learn. Which of them the local-agent controls cover is not yet published.

Roles: Learn says the account that creates and deploys DLP policies must be a member of one of the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role groups. Roles for the agent controls are not yet published.

Rollout: the roadmap item gives a Preview target of January CY2027 and a target date of March CY2027, for the Worldwide (Standard Multi-Tenant) cloud. The record lists no US Government clouds.

## Governance guidance

### Before rollout
- Check which devices are onboarded and whether their policy sync status reads Updated, in Microsoft Purview portal > Settings > Device onboarding > Devices > device.
- Identify which people run local AI agents on those devices, so that a pilot group can be chosen when the feature appears.
- Confirm who in your organisation belongs to the role groups that can create and deploy DLP policies.

### At rollout
- Read the Learn page for this feature when Microsoft publishes it, and confirm which agents, operating systems and interaction points are supported.
- Create any new policy scoped to the Devices location for a pilot group first, using the route in the controls table.

### After rollout
- Review the device sync status after each policy change, because a device must receive the policy to apply it.
- Watch Message center and the Microsoft 365 Roadmap item for changes to the target dates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Where an Endpoint DLP policy applies (the Devices location)</strong><br><small>Tenant</small><br><small class="controls__note">Today's route for Endpoint DLP policies. Learn does not yet say agent protection is set here. Creating a policy needs a role group such as Compliance administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › Devices <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;String&gt; -EndpointDlpLocation &lt;MultiValuedProperty&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Per-device Endpoint DLP policy sync status</strong><br><small class="controls__note">Read-only. The API side is an Advanced hunting query in the Microsoft Defender portal, not a call that changes policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices › device <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which local AI agents and interaction points an Endpoint DLP policy covers</strong><br><small>Agent</small><br><small class="controls__note">No agent-specific Endpoint DLP setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only controls Learn documents are the existing Endpoint DLP ones. The Devices location is where Endpoint DLP policies are created today, but Learn does not say that local-agent protection is configured there. Treat the first row as today's route, not a confirmed control over this feature.

The device sync row shows whether a device has the latest policy version; it is a monitoring control and does not change what a policy covers. The last row records that no agent-specific Endpoint DLP setting is documented at the time of writing (November 2026).

## Open questions

- Which local AI agents and which interaction points will be supported for the Preview targeted for January CY2027? Watch the Learn Endpoint DLP pages and Message center.
- Is the feature on or off by default, and does it need any new setting beyond existing Endpoint DLP policies and device onboarding?
- Will the agent controls need a licence beyond the plans the Purview service description lists for Endpoint DLP?
- Which operating systems does the feature cover, given the roadmap lists the platform as Web and Learn describes Endpoint DLP for Windows and macOS?
- Will activity from agent interactions appear in the same DLP alerts and audit records as other Endpoint DLP activity?

<!-- rationale
risk: Medium. This is a new control, and Microsoft has not stated its default. Local agents act on the user's device, so any gap in which agents and interaction points are covered is the exposure left if it stays unconfigured.
cost: Low. Learn lists Endpoint DLP as included in Microsoft 365 E5 and other named plans, and no separate price or meter is published for this feature. The known cost is admin time to scope and tune policies.
impact: Medium. People who run supported local AI agents on Endpoint DLP devices would notice blocked prompts, files or tool calls. Admins who manage DLP policies configure it.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The printed Purview policy-creation route reaches the Devices location. | Found: Select the Custom from the Categories then Custom policy template from Regulations. Select Next. 5. Give your new policy a Name and Description. 6. Accept the default Full directory under Admin units. 7. Scope the location to only the Devices location. | Fix: Add the omitted category and regulation headings to controls[0].ui.path and its rendered table path: 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom policy > Devices'. | Source: https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping
-->
