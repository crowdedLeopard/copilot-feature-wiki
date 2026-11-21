---
title: "Microsoft Purview: auto-labeling ceiling for SharePoint and OneDrive rises to 500,000 files a day (GCC, GCC High, DoD)"
slug: "microsoft-purview-information-protection-auto-labeling-scale-increase-for-sh-us-government"
roadmapId: 571309
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft raises the daily auto-labeling ceiling for SharePoint and OneDrive from 100,000 to up to 500,000 files per tenant in GCC, GCC High and DoD. Existing policies may label more files, faster; plan for the effect."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn lists service-side auto-labeling for SharePoint, OneDrive and Exchange as included with Microsoft 365 E5, E5 Compliance, E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). A price specific to the higher ceiling is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","auto-labeling","information-protection","sensitivity-labels","sharepoint","onedrive","m365-copilot","gcc","gcc-high","dod"]
sources:
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Set-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 571309"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571309"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-information-protection-auto-labeling-scale-increase-for-sharepoint-and-o","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements","sensitivity-labels"]
controls:
  - governs: "Which SharePoint and OneDrive locations an auto-labeling policy covers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Edit policy > Choose locations where you want to apply the label"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <policy name> -AddSharePointLocation <site URLs>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy"
    note: "OneDrive uses -AddOneDriveLocation; both add included sites when the location is not All. Edit policy is documented for policies in Off or Simulation. Narrowing locations does not change the tenant ceiling."
  - governs: "Whether an auto-labeling policy runs in simulation or enforces labels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Turn on policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <policy name> -Mode Enable"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy"
    note: "TestWithoutNotifications is the simulation (test) value. Turning a policy on requires Compliance Administrator or Compliance Data Administrator."
  - governs: "A tenant setting for the daily auto-labeling ceiling"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn describes 500,000 files a day as a ceiling and documents no setting for it at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-20"
    note: "New briefing for the GCC, GCC High and DoD roadmap item; the Worldwide item 567890 has its own page."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: removed the claim that policies receive the higher ceiling without action, removed visual markings (Learn says auto-labeling does not apply them) and trimmed the checklist."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 62 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a4b1f35c02e3f551030604cac6932664"
---

## What's changing

Microsoft is raising the maximum auto-labeling capacity for SharePoint and OneDrive from 100,000 to up to 500,000 files per tenant per day. This briefing covers roadmap item 571309: status Launched, target date November CY2026, General Availability, Web, listed for GCC, GCC High and DoD.

Microsoft Learn documents the 500,000 figure as the "absolute maximum throughput" of automatically labelled SharePoint and OneDrive files per tenant per day, counted in aggregate across auto-labeling policies. The same page says the ceiling is not a guaranteed or consistently expected daily rate and that actual throughput can be lower. The page states the figure without naming a cloud.

Microsoft lists the feature under a second roadmap item, 567890, which covers Worldwide (Standard Multi-Tenant): Launched, target October CY2026, with a September CY2026 preview. See [the Worldwide briefing](/features/microsoft-purview-information-protection-auto-labeling-scale-increase-for-sharepoint-and-o/).

The roadmap description adds no new setting. Microsoft has not stated whether the higher ceiling needs any administrator action. Auto-labeling policies run continuously until they are deleted, so new and modified files are covered by the current policy settings.

## Why it matters

For tenants with auto-labeling policies already turned on, the higher ceiling could allow more files to be labelled each day; Microsoft has not stated whether the increase requires administrator action. The roadmap says the aim is to label and protect more existing content sooner and so help prepare data for Microsoft 365 Copilot. In the wiki's view, any encryption in the labels those policies apply can reach files faster than before.

Because Microsoft has not stated what happens on arrival, treat the change as arriving: review which policies are enforcing and which labels they apply before assuming the old pace limits the effect.

## Risk assessment

**Data exposure**

- Policies that are on can label more files a day, and where a label applies encryption, its protection can reach more content sooner. Check the labels and locations of each policy (controls table, rows 1 and 2).

**Security & identity**

- Where a label applies encryption, Learn says the Rights Management issuer and owner is the account that last modified the file. Faster labelling creates more files with that ownership, so confirm recovery and access arrangements for encrypted labels.

**Autonomy & actions**

- Auto-labeling policies label without a user taking part and do not support recommended labelling. Learn advises running a policy in simulation before turning it on. A policy already enforcing does not wait for review, so a wrong rule now has more files to affect each day.

**Change & support**

- Learn says labelling progress information updates every 48 hours, so the service desk should not promise a daily rate of 500,000, which Learn describes as a ceiling and not a guaranteed rate.
- Existing modified, modified by and date values on a file are not changed by auto-labeling policies, which limits one common cause of confusion over labelled files.

## Cost and licensing

**Licence.** Learn's licensing table lists service-side auto-labeling (SharePoint, OneDrive, Exchange) as included with Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). The page says auto-labeling is not included with E3 or Business Premium and requires an E5 or P2-tier add-on there. For per-SKU entitlements in Government clouds, the page points to Microsoft's security and compliance licensing guidance.

**Meter.** The Learn page lists no meter or separate price for the ceiling at the time of writing (November 2026), and a price specific to the increase is not yet published.

**Indirect cost.** Admin time to review policies and locations, communications to site owners and the service desk, and any support load from files that newly carry encryption.

## Scope

**Clouds and platform.** The roadmap record lists GCC, GCC High and DoD, platform Web, release phase General Availability. The Worldwide equivalent is a separate roadmap item (567890).

**Who is affected.** Tenants with auto-labeling policies for SharePoint or OneDrive. Learn says the policies support Word, PowerPoint and Excel files and PDF documents, and that PDF labelling must be enabled for the tenant before a policy can process PDFs.

**Roles.** Learn says turning a policy from Ready to turn on to On requires Compliance Administrator or Compliance Data Administrator.

**Other limits on the same page.** A maximum of 100 auto-labeling policies per tenant and, in simulation mode, up to 20,000,000 matched files. Learn also says auto-labeling is not currently available in all regions because of a backend Azure dependency.

## Governance guidance

### Before rollout

- List the auto-labeling policies that are turned on and the SharePoint and OneDrive locations each covers (controls table, row 1).

### At rollout

- Run any new or edited policy in simulation mode before turning it on, as Learn advises (controls table, row 2).
- Add locations to a policy in stages and not in one step, so the effect of a wrong rule is limited (controls table, row 1).
- Tell the service desk that 500,000 files a day is a ceiling and that actual throughput can be lower.

### After rollout

- Allow for the 48-hour refresh of labelling progress before concluding that a policy has stalled.
- Watch Message center and the Learn page for any Government-cloud statement on the ceiling.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which SharePoint and OneDrive locations an auto-labeling policy covers</strong><br><small>Tenant</small><br><small class="controls__note">OneDrive uses -AddOneDriveLocation; both add included sites when the location is not All. Edit policy is documented for policies in Off or Simulation. Narrowing locations does not change the tenant ceiling.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Edit policy › Choose locations where you want to apply the label <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;policy name&gt; -AddSharePointLocation &lt;site URLs&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an auto-labeling policy runs in simulation or enforces labels</strong><br><small>Tenant</small><br><small class="controls__note">TestWithoutNotifications is the simulation (test) value. Turning a policy on requires Compliance Administrator or Compliance Data Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Turn on policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;policy name&gt; -Mode Enable</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A tenant setting for the daily auto-labeling ceiling</strong><br><small>Tenant</small><br><small class="controls__note">Learn describes 500,000 files a day as a ceiling and documents no setting for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for the ceiling itself is documented at the time of writing (November 2026), so the controls that matter are the existing policy controls in rows 1 and 2.

The increase applies to the aggregate across policies, so narrowing one policy's locations does not change the tenant ceiling. Learn names Compliance Administrator or Compliance Data Administrator for turning a policy on.

## Open questions

- Does the higher ceiling apply on the same schedule in GCC, GCC High and DoD as the Worldwide item 567890? Watch the auto-labeling Learn page and Message center.
- Does the increase need any administrator action, or does it apply to existing policies on arrival? Microsoft has not stated this.
- Will a price or meter ever apply to throughput above the earlier 100,000 files a day? None is published.
- How should administrators measure daily throughput against the ceiling, given progress information refreshes every 48 hours?

<!-- rationale
risk: Medium. Auto-labeling policies already turned on can label, and where the label encrypts, protect, up to five times as many files a day, so access and support effects arrive faster than before.
cost: Low. The Learn page ties service-side auto-labeling to E5-tier licences and lists no meter for the ceiling; the cost is admin time to review policies. A price for the increase is not yet published.
impact: Low. Administrators and compliance teams running auto-labeling policies notice it first; users notice only where newly labelled files carry encryption.
-->
