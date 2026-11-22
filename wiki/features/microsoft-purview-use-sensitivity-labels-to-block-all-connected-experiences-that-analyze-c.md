---
title: "Microsoft Purview: sensitivity label setting now blocks all connected experiences that analyse content in Word, Excel and PowerPoint"
slug: "microsoft-purview-use-sensitivity-labels-to-block-all-connected-experiences-that-analyze-c"
roadmapId: 561320
topic: "governance"
products: ["Excel","PowerPoint","Word","Microsoft Purview"]
summary: "Labels that already carry the BlockContentAnalysisServices setting now stop labelled files in Word, Excel and PowerPoint reaching all connected experiences that analyse content, on updated clients. Admins should check which labels use it."
status: "launched"
releasePhase: ["Current Channel","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "The setting belongs to sensitivity labels in Office apps, whose plan requirements the Microsoft Purview service description lists capability by capability. Nothing specific to this setting is published, and no separate meter is documented."
audiences: ["compliance","security","m365-admin","end-user"]
tags: ["purview","sensitivity-labels","information-protection","privacy","microsoft-365-apps","word","excel","powerpoint","m365-copilot","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 561320"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561320"
    kind: "roadmap"
  - title: "Manage sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Minimum versions for sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-versions"
    kind: "learn"
  - title: "Set-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["sensitivity-labels"]
controls:
  - governs: "Whether labelled files in Word, Excel and PowerPoint are blocked from connected experiences that analyse content"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label name or GUID> -AdvancedSettings @{BlockContentAnalysisServices=\"True\"}"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "Per label, in Security & Compliance PowerShell. Learn says it is not available in the Microsoft Purview portal. False is the default; remove the setting or set False to revert. Needs assigned permissions."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: the label setting now blocks all connected experiences that analyse content in Word, Excel and PowerPoint."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 46 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5e98cdb30ad40372670e3b08bd7355a4"
---

## What's changing

The sensitivity label setting named "Prevent some connected experiences that analyze content" now blocks files in Word, Excel and PowerPoint from being sent to all Microsoft connected experiences for analysis, rather than a subset of them. The roadmap item describes the change in those terms and lists it as Launched, with a target of June CY2026 and a preview in May CY2026.

The setting is not in the Microsoft Purview portal. An administrator sets it per label in Security & Compliance PowerShell with the advanced setting *BlockContentAnalysisServices*, and Microsoft Learn gives `False` as its default. Learn also says that when the setting is set, some services stop working as designed, such as data loss prevention policy tips for Outlook, automatic and recommended labelling, and Microsoft 365 Copilot.

Learn now describes two behaviours. On newer Windows clients and on all supported macOS and mobile client versions, the setting affects all connected experiences that analyse content in Word, Excel and PowerPoint. On older Windows versions listed in the "Prevent some connected experiences" row, it affects a fixed subset: automatic alt text, automatic labelling and label recommendations, Microsoft 365 Copilot, Purview DLP policy tips (Outlook), PowerPoint Designer, Similarity checker and Translator.

The record and Learn differ on status. The roadmap item says Launched, while the minimum-versions page marks the "all" row as rolling out: Current Channel and Monthly Enterprise Channel 2606+ on Windows, 16.110+ on Mac, 2.111+ on iOS and 16.0.20026+ on Android. That page lists the capability as not available on the web.

## Why it matters

This is a privacy control that is getting stricter for labels already using it, and the wider block reaches the files users work with every day. An administrator who set BlockContentAnalysisServices on a label to keep, say, Copilot away from sensitive files in the Office apps gets the stronger protection once clients update. The same change also removes the other analysis features for those files, so support questions are likely from users of those labels.

Microsoft has not stated that labels without the setting are affected, and the setting defaults to False, so nothing in Learn suggests existing unlabelled or differently labelled content changes. Plan on the change reaching labels that already carry the setting, as Office clients update.

## Risk assessment

**Data exposure**
- Labelled content in Word, Excel and PowerPoint on updated clients is kept from all connected experiences that analyse content, which narrows what is sent to Microsoft for analysis. Learn says content with the label is excluded from Microsoft 365 Copilot in the named Office apps but "remains available to Microsoft 365 Copilot for other scenarios", for example in Teams and in Microsoft 365 Copilot Chat, so the setting is not a full Copilot block.
- Older Windows versions keep the narrower subset behaviour, so protection differs by client version until clients update.

**Security & identity**
- The setting is applied through label advanced settings in Security & Compliance PowerShell; the Set-Label reference says you need assigned permissions to use the cmdlet. Review who holds those permissions, because one command changes the behaviour of every file carrying that label.

**Autonomy & actions**
- No change: Learn describes the setting as blocking analysis of content, and describes no new autonomous action.

**Change & support**
- Features Learn lists as affected, including automatic and recommended labelling, DLP policy tips for Outlook and Microsoft 365 Copilot, stop working as designed for labelled files. Expect questions from users who lose Copilot, Designer or Translator on those files.
- On Windows, the broader behaviour depends on the client version (Current Channel and Monthly Enterprise Channel 2606+ per Learn), and the page marks it as rolling out, so behaviour can differ between devices in the same tenant.

## Cost and licensing

Microsoft Learn describes no separate licence or meter for this setting. It is a label advanced setting, and the Purview service description lists the plan requirements for sensitivity labelling by capability (for example, manual labelling is listed as included for Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium), while stating that administrators and users need the appropriate licences for the subscription plans listed. The Office apps page adds that sensitivity labels need a subscription edition of Office and are not supported in standalone editions.

The indirect cost is admin time to find the labels that carry the setting and communication to the users of those labels, plus the loss of features such as Copilot and automatic labelling for those files, which Learn lists as affected. A plan entry specific to BlockContentAnalysisServices is not yet published.

## Scope

- **Apps and platforms:** Word, Excel and PowerPoint, as the roadmap item lists, on Desktop, Mac, iOS and Android. The minimum-versions page marks the capability as not available on the web, and says that opening a file side by side with Copilot in the Microsoft Copilot app uses the web version of the apps, so the setting does not apply in that scenario.
- **Clients:** Windows Current Channel and Monthly Enterprise Channel 2606+, Mac 16.110+, iOS 2.111+ and Android 16.0.20026+ per the minimum-versions page, which marks each as rolling out. Older Windows versions in the "some" row keep the subset behaviour.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Release phase:** Current Channel and Preview, per the roadmap record.
- **Who configures it:** an administrator with permissions in Security & Compliance PowerShell, per label.

## Governance guidance

### Before rollout
- Identify which labels carry BlockContentAnalysisServices, for example from the scripts or change records used to set it, because those are the labels this change reaches.
- Tell users of those labels that Copilot, automatic and recommended labelling and the other listed experiences stop for their files in Word, Excel and PowerPoint.
- Confirm which Office versions your users run against the minimum versions Learn lists for the "all" and "some" rows.

### At rollout
- Compare behaviour on a pilot device with an updated client against one on an older Windows version, using a file carrying a label with the setting.
- Keep the setting where the label's content must stay out of analysis, and set it to False or remove it where Copilot or automatic labelling is needed for that label's files.

### After rollout
- Monitor helpdesk reports from users of the affected labels and check that Copilot still works for labelled files only where you intended.
- Re-check the minimum-versions page for when the "all" row stops being marked as rolling out.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether labelled files in Word, Excel and PowerPoint are blocked from connected experiences that analyse content</strong><br><small class="controls__note">Per label, in Security &amp; Compliance PowerShell. Learn says it is not available in the Microsoft Purview portal. False is the default; remove the setting or set False to revert. Needs assigned permissions.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label name or GUID&gt; -AdvancedSettings @{BlockContentAnalysisServices=&quot;True&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The setting is per label, so it is set label by label and applies to files carrying that label. Learn says the configuration is not available in the Microsoft Purview portal, and the Set-Label reference says you need assigned permissions to use the cmdlet.

No tenant-wide switch is documented here: the control is the label setting itself, and removing it or setting it to False returns the label to sending content for analysis. The broader behaviour depends on client version, so the table row describes one setting with two behaviours.

## Open questions

- Which connected experiences does "all" cover on newer Windows clients, Mac and mobile? Learn lists only the subset table for older Windows versions. Watch the Manage sensitivity labels in Office apps page.
- Does the setting now also cover Outlook? The roadmap item names Word, Excel and PowerPoint, while the Learn text refers to Outlook in the same paragraph. Watch the same page.
- When does the "Prevent all connected experiences that analyse content" row stop being marked as rolling out, given the roadmap lists the item as Launched? Watch the minimum-versions page.
- Will a licence entry specific to this setting be published in the Microsoft Purview service description?

<!-- rationale
risk: Medium. For labels that already carry BlockContentAnalysisServices, the block widens from a subset of connected experiences to all of them on updated clients, so features Microsoft lists as affected, such as Copilot and automatic labelling, stop working for those files.
cost: Low. The only cost shown is admin time to review labels and tell users; Microsoft Learn publishes no meter for this setting, and the licence for sensitivity labelling is the one the Purview service description lists.
impact: Medium. Users notice only on files that carry a label with the setting, in updated Word, Excel and PowerPoint, where connected experiences such as Copilot in those apps no longer work on those files.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: manual labelling plan example / licensing: The service description's manual sensitivity labelling table lists Included for Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium. | Found: Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium ... | Manual Sensitivity Labeling | Included | Included | Included | Included | Included | | Fix: After the manual-labelling table example, add: 'The same service-description section also says sensitivity labelling requires Microsoft 365 E5 or Microsoft 365 Information Protection and Governance (IPG), so its prose and manual-labelling table differ.' Retain the existing service-description citation. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [supported, minor] Open questions: first bullet / behaviour: The Office apps page gives a subset table for older Windows versions rather than enumerating the broader behaviour's experiences there. | Found: On newer Windows clients and on all supported MacOS and mobile client versions, the setting affects all connected experiences that analyze content in Word, Excel, and PowerPoint. | Fix: Replace the first Open questions bullet with: 'Which experiences in Microsoft's linked Connected experiences in Office list are affected on each supported client? The Office apps page links to that list and separately enumerates the older Windows subset.' Link 'Connected experiences in Office' to https://learn.microsoft.com/microsoft-365-apps/privacy/connected-experiences and add that source. | Source: https://learn.microsoft.com/purview/sensitivity-labels-office-apps
-->
