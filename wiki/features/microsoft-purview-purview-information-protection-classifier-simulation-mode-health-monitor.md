---
title: "Microsoft Purview: Classifier Simulation Mode for custom classifiers"
slug: "microsoft-purview-purview-information-protection-classifier-simulation-mode-health-monitor"
roadmapId: 523201
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a Simulation Mode that tests custom classifiers on production data before publishing, plus health monitoring that can disable inefficient ones. Available to all tenants by default; Purview admins should review custom SITs."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor MC1185445 names a licence or meter, and the custom sensitive information types page refers readers to Microsoft 365 licensing guidance without naming one for this feature."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","information-protection","sensitive-information-types","classifiers"]
sources:
  - title: "Microsoft 365 Roadmap 523201"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=523201"
    kind: "roadmap"
  - title: "Create custom sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"
    kind: "learn"
  - title: "Manage custom sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-manage-custom-sits-compliance-center"
    kind: "learn"
  - title: "Learn about sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about"
    kind: "learn"
  - title: "Test sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-test-a-sit"
    kind: "learn"
  - title: "New-DlpSensitiveInformationTypeRulePackage"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpsensitiveinformationtyperulepackage"
    kind: "learn"
  - title: "Set-DlpSensitiveInformationTypeRulePackage"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpsensitiveinformationtyperulepackage"
    kind: "learn"
  - title: "MC1185445: Microsoft Purview compliance portal: Purview Information Protection | Classifier Simulation Mode (Health Monitoring)"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1185445"
    kind: "message-center"
videos: []
related: ["microsoft-purview-unified-classification-management-experience","microsoft-purview-recurring-classifier-refresh","microsoft-purview-information-protection-improved-sensitive-information-types","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements","sensitivity-labels"]
controls:
  - governs: "Whether Classifier Simulation Mode and health monitoring are available to the tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1185445 says the feature is available to all tenants by default and names no switch."
  - governs: "Which custom sensitive information types are created and published today"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > Sensitive info types > Create sensitive info type"
      docs: "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"
    api:
      kind: "powershell"
      call: "New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('<Path>\\<FileName>'))"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpsensitiveinformationtyperulepackage"
    note: "Existing route, not documented as covering simulation. The cmdlet runs in Security & Compliance PowerShell and needs assigned permissions."
  - governs: "The logic of an existing custom sensitive information type"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > Sensitive info types > sensitive information type > Edit"
      docs: "https://learn.microsoft.com/purview/sit-manage-custom-sits-compliance-center"
    api:
      kind: "powershell"
      call: "Set-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('<Path>\\<FileName>'))"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpsensitiveinformationtyperulepackage"
    note: "Existing route for fixing a flagged SIT. The cmdlet updates existing rule packages and runs in Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-07-14T22:41:38"
changes:
  - date: "2026-11-20"
    note: "New briefing on Classifier Simulation Mode and classifier health monitoring, from the roadmap item and MC1185445."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 75 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: qualified the uploaded-file SIT test with its Exchange Online licence prerequisite, softened the claim about disabled classifiers, and removed the Classifiers sublocation for the simulation option."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 83 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 86
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "46b0b4fbb7f71ca5cab02ebcbf35ae30"
---

## What's changing

Microsoft Purview is adding Classifier Simulation Mode, which the roadmap item calls the first phase of a broader Classifier Health Monitoring Platform. It lets admins test custom classifiers on production data before publishing them, so that inefficient regex patterns or overly broad logic that cause noisy matches, false positives and high scanning latency are found before the classifier goes live.

Microsoft's notice MC1185445 says admins will see a new option to simulate a custom classifier before publishing, and that simulation is optional: admins can simulate or publish directly. It adds that classifiers published without simulation will still be monitored for performance and flagged if unhealthy, that classifier health insights will appear in the Microsoft Purview compliance portal, and that inefficient classifiers may be automatically disabled to maintain system performance. The notice's compliance table says classifiers are simulated on production data but not published, so classification outcomes do not change.

The roadmap item is In development, with a preview target of October CY2026 and a general availability target of November CY2026, for Worldwide (Standard Multi-Tenant) on the web. MC1185445 (updated 14 July 2026) gives the public preview rollout as beginning mid-October 2026 and completing by early November 2026, and general availability as beginning and completing in late November 2026. Microsoft Learn describes no Classifier Simulation Mode page at the time of writing (November 2026), so behaviour beyond the notice is not documented.

## Why it matters

Custom sensitive information types (SITs, the pattern-based classifiers Purview uses to find data such as account numbers) feed DLP policies, sensitivity labels, retention labels, Insider Risk Management, Communication Compliance and auto-labeling policies, according to Microsoft Learn. A badly written one affects every policy that uses it. Learn also says Endpoint DLP classifies files against all SITs in the tenant, custom ones included, whether or not a DLP policy uses them, and that poorly tuned SITs can cause excessive classification traffic.

Microsoft's notice says the feature is available to all tenants by default and that monitoring applies even to classifiers published without simulation. So the change reaches your custom SITs whether or not anyone opts in. The decision for a service owner is to review existing custom SITs now, before any are flagged, and to make simulation a step in how new ones are published. The notice does not say how admins are alerted before a classifier is disabled.

## Risk assessment

**Data exposure**

- MC1185445 says simulation runs on production data without publishing the classifier or altering classification outcomes. Where simulation results are stored and who can see matched content is not stated.

**Security & identity**

- Access to simulation and publishing is described by the notice as manageable through role-based permissions, with no role named. Learn's page on testing SITs lists role groups for the existing uploaded-file test, so confirm which apply here.
- Confirm how disabling a classifier affects matching and any DLP policies or label rules that depend on it. The notice does not describe what happens to policies that reference a disabled classifier.

**Autonomy & actions**

- The notice says inefficient classifiers may be automatically disabled. It does not say what counts as inefficient, how long before it happens, or whether an admin can prevent or reverse it.

**Change & support**

- Health insights will flag unhealthy SITs in the compliance portal, which may create review work for teams that own many custom SITs. Learn says Microsoft Customer Service & Support can't assist with creating custom classifications or regular expression patterns, so tuning stays with your team.

## Cost and licensing

No licence, meter or price for Classifier Simulation Mode is published at the time of writing. The roadmap item and MC1185445 name none, and Learn's page on creating custom sensitive information types only points readers to the Microsoft 365 Enterprise Plans and Microsoft 365 licensing guidance pages without naming a licence for this feature. Treat licensing as not yet published and confirm before budgeting.

The cost that is evident is admin time: simulating classifiers, reading health insights and rewriting patterns. Learn's page on testing SITs describes an uploaded-file test available today, which is a different, manual check covered in the controls notes. For that existing test, Learn says the tenant must have at least one Exchange Online licence added; otherwise the Test SIT option is greyed out ([Learn about sensitive information types](https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about)). That is Learn's prerequisite for the existing test and is not applied here to Classifier Simulation Mode.

## Scope

MC1185445 says admins managing Microsoft Purview Information Protection and custom sensitive information types are affected. The roadmap item lists Worldwide (Standard Multi-Tenant) as the only cloud and the web as the platform. It lists no GCC, GCC High or DoD availability, which is a record fact and not a statement that the feature is unavailable there.

The notice says the feature is available to all tenants by default and that no onboarding or training is required. It speaks of custom classifiers and custom SITs; whether trainable classifiers or exact data match based SITs are included is not stated. Microsoft has not stated which roles can run a simulation.

## Governance guidance

### Before rollout

- Inventory your custom sensitive information types in the Microsoft Purview portal under Information Protection > Classifiers > Sensitive info types, and list which DLP, labelling and retention policies use each.
- Review custom regex patterns for the problems Microsoft names: inefficient patterns, overly broad logic and high match counts. Learn's rules say not to use positional anchors such as ^ and $ and to use one primary capturing group.
- Agree who owns each custom SIT, so someone is responsible when a classifier is flagged.

### At rollout

- Check the Microsoft Purview compliance portal for the new simulation option and classifier health insights as the preview and general availability rollouts complete.
- Simulate each new or changed custom SIT before publishing it, rather than publishing directly.
- Confirm which role groups can simulate and publish, since MC1185445 names none.

### After rollout

- Monitor any SITs flagged as unhealthy and adjust their logic, as MC1185445 advises.
- Check whether any custom SIT referenced by a DLP or labelling policy has been disabled, and compare policy matches before and after.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Classifier Simulation Mode and health monitoring are available to the tenant</strong><br><small>Tenant</small><br><small class="controls__note">MC1185445 says the feature is available to all tenants by default and names no switch.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which custom sensitive information types are created and published today</strong><br><small>Tenant</small><br><small class="controls__note">Existing route, not documented as covering simulation. The cmdlet runs in Security &amp; Compliance PowerShell and needs assigned permissions.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › Sensitive info types › Create sensitive info type <a href="https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('&lt;Path&gt;\&lt;FileName&gt;'))</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpsensitiveinformationtyperulepackage" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The logic of an existing custom sensitive information type</strong><br><small>Tenant</small><br><small class="controls__note">Existing route for fixing a flagged SIT. The cmdlet updates existing rule packages and runs in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › Sensitive info types › sensitive information type › Edit <a href="https://learn.microsoft.com/purview/sit-manage-custom-sits-compliance-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('&lt;Path&gt;\&lt;FileName&gt;'))</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpsensitiveinformationtyperulepackage" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no setting that turns Classifier Simulation Mode or classifier health monitoring on or off, and no API for either, so the first row is empty on both sides. MC1185445 says the feature is available to all tenants by default.

The other two rows are how custom SITs are published and changed today. They are not controls over simulation, and Learn does not say that simulation is part of those procedures. Learn's page on testing SITs separately describes uploading one unencrypted file at a time to a SIT, which it says is different from auto-labeling policy simulation; Learn says the tenant must have at least one Exchange Online licence added for that test, or the Test SIT option is greyed out. That page also lists role groups, and has a section headed "Enable access to simulation mode" naming Communication Compliance Admins, Information Protection Admins, Information Protection Investigators and Organization Management. It does not say that section covers Classifier Simulation Mode, so confirm before relying on it.

## Open questions

- Which role groups can run a simulation and publish a classifier? MC1185445 says access can be managed through role-based permissions but names none; watch the notice and Learn's page on testing sensitive information types.
- What makes a classifier inefficient enough to be automatically disabled, how are admins notified first, and can the action be reversed or prevented?
- What happens to DLP policies, labels and auto-labeling policies that reference a classifier that is disabled?
- Which classifier types are covered: custom SITs only, or also trainable classifiers and exact data match based SITs?
- Which licence covers simulation and health insights, and is any meter involved? Watch the Microsoft Purview service description and the roadmap item.

<!-- rationale
risk: Medium. Microsoft's notice says inefficient classifiers may be automatically disabled, which could change what DLP policies and labels detect, and it does not say how admins are told first.
cost: Low. The roadmap item and Message center post MC1185445 name no licence, meter or price, so the only cost the sources show is admin time to test and tune classifiers; licensing is not yet published.
impact: Medium. The notice says admins managing Purview Information Protection and custom sensitive information types are affected; end users are not named, though classifier outcomes feed policies that reach them.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's simulation and health-insights controls are represented in the controls table. | Found: Checklist: "Check ... the new simulation option and classifier health insights"; "Simulate each new or changed custom SIT". Table notes: "They are not controls over simulation"; the remaining row concerns tenant availability. | Fix: The At rollout steps to check the simulation option and health insights and to simulate classifiers have no corresponding control row; the availability row does not describe those operations. This is a checklist/table coverage gap, not evidence that a path or API exists.
-->
