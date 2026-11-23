---
title: "Microsoft Purview DLP: block Copilot web search when prompts contain sensitive data (GCC, GCC High, DoD)"
slug: "microsoft-purview-data-loss-prevention-data-loss-prevention-to-safeguard-sensitive-informa"
roadmapId: 565870
topic: "governance"
products: ["Microsoft Purview"]
summary: "A Purview DLP rule can stop Microsoft 365 Copilot and Copilot Chat sending prompts that contain chosen sensitive information types to external web search. Launched for GCC, GCC High and DoD; admins must create the rule."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists DLP to safeguard prompts as included and available to all users of Microsoft Copilot and Copilot Chat, including the Microsoft 365 G3 and Office 365 G3 plan columns. A separate price or meter for Performing Web Searches is not yet published."
audiences: ["security","compliance","m365-admin","service-owner"]
tags: ["purview","dlp","m365-copilot","copilot-chat","web-search","web-grounding","sensitive-information-types","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565870"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565870"
    kind: "roadmap"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps"
    kind: "learn"
  - title: "Microsoft Copilot service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search","sensitive-information-types","microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi","microsoft-purview-data-loss-prevention-admin-units-support-for-copilot-and-cowork-dlp"]
controls:
  - governs: "Whether Copilot may use external web search when a prompt contains chosen sensitive information types"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > Prevent Copilot from processing content > Performing Web Searches"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name \"<rule name>\" -Policy \"<policy name>\" -ContentContainsSensitiveInformation @{Name=\"<SIT name>\"} -RestrictWebGrounding $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps"
    note: "Needs a role such as Purview Data Security AI Admin. Security & Compliance PowerShell only. Policy changes can take up to four hours to reach Copilot."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-20T22:38:45"
changes:
  - date: "2026-11-23"
    note: "New briefing: Purview DLP rule action that blocks Copilot external web search for prompts containing sensitive information types, launched for GCC, GCC High and DoD."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected licensing to included per the Purview service description, narrowed the SIT coverage statement, and removed the licence-row question and three checklist steps with no controls-table row."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 53 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a443db4ced4f7472b844910a5aa770e3"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) can now stop Microsoft 365 Copilot and Copilot Chat from using external web search when a user's prompt contains sensitive data. The roadmap item describes this as a real-time control that prevents Copilot from using sensitive data for external web search. It is aimed at data leakage and oversharing risk.

Microsoft Learn describes how it works: an administrator creates a DLP rule at the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** location with the **Content contains** > **Sensitive information types** condition and the **Prevent Copilot from processing content** > **Performing Web Searches** action. When a prompt contains the chosen sensitive information types (SITs), the experience blocks external web search as a grounding source for that prompt and continues with permitted internal Microsoft 365 data sources. Both built-in and custom SITs are named on the page. The Learn page also lists Cowork next to Microsoft 365 Copilot and Copilot Chat; the roadmap item names only Microsoft 365 Copilot and Copilot Chat.

DLP checks only the text typed into the prompt. Microsoft states that it cannot scan the contents of files uploaded directly into prompts.

The roadmap item lists status Launched, release phase General Availability, target July CY2026, platform Web, and the clouds GCC, GCC High and DoD. The Learn page for the Copilot DLP location does not describe availability by cloud.

## Why it matters

For a government-cloud tenant that allows Copilot to ground on the web, this is the control that looks at what the user typed before that text can leave for an external search provider. Until a rule exists, this control screens nothing; the exposure is whatever your users type into prompts, such as national identifiers or card numbers.

Microsoft's Copilot service description says web grounding isn't enabled by default for government clouds, so the control matters most where your organisation has chosen to turn web search on. If nobody acts, no rule exists and no source says existing behaviour changes. Decide whether web search is in use in your tenant, and if it is, whether a SIT-based rule belongs alongside it.

## Risk assessment

**Data exposure**

- A rule built from the steps above prevents prompt text that matches the chosen SITs from being sent to external search providers for that request. Coverage is only as wide as the SITs you choose, so data outside the configured SITs is not covered by this rule.
- Files uploaded into a prompt are not scanned: DLP checks only the text typed into the prompt. Treat file upload as a separate path to cover with other controls.
- The Learn page lists the web-search action only with the **Content contains** > **Sensitive information types** condition. Sensitivity labels are listed with a different action, which prevents Copilot processing labelled files and emails.

**Security & identity**

- Creating or editing the policy needs one of the roles Microsoft lists, including Purview Data Security AI Admin and Microsoft Entra Global Admin. Prefer the narrowest role, as Microsoft recommends.
- Selecting the Copilot location disables all other locations for that policy, so web-search protection cannot share a policy with, for example, Exchange or SharePoint rules.

**Autonomy & actions**

- No change: the rule removes web search as a grounding source for a prompt; it adds no capability and takes no action on data.

**Change & support**

- Users whose prompts match get an answer grounded only in internal Microsoft 365 data, which may read as thinner than a web-grounded answer. Expect questions from people who paste identifiers into prompts.
- Policy updates can take up to four hours to reach the Copilot experiences, so test results straight after a change may not reflect it.
- A single rule cannot combine the sensitive information types condition with the sensitivity labels condition; use separate rules in the same policy.

## Cost and licensing

The Microsoft 365 Copilot service description states for Microsoft Purview controls: "Requires license for Microsoft Purview, available as part of Microsoft 365 G3/G5 or as a standalone." The more specific [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists DLP to safeguard prompts as included and available to all users of Microsoft Copilot and Copilot Chat. The Learn page for the Copilot DLP location has a Licensing section that links to Microsoft 365 Enterprise Plans and Microsoft 365 Service Descriptions and names no entitlement itself.

A separate price or meter for the Performing Web Searches action is not yet published.

The indirect cost is administrator time: building and testing the rule, choosing SITs, and answering user questions.

## Scope

**Users and licences:** the rule applies to prompts in Microsoft 365 Copilot and Copilot Chat, with the Copilot location. Microsoft Purview controls for Copilot need a Purview licence, as above.

**Roles:** the Learn page lists Microsoft Entra AI Admin, Purview Data Security AI Admin, Purview Compliance Administrator, Purview Compliance Data Administrator, Purview Information Protection, Purview Information Protection Admin, Purview Security Administrator and Microsoft Entra Global Admin as roles that can create or edit a DLP policy for this location.

**Clouds and platform:** the roadmap item lists GCC, GCC High and DoD, platform Web, status Launched. The Microsoft 365 Copilot service description lists Microsoft Purview controls for Microsoft Copilot and Copilot Chat as available in GCC, GCCH and DoD, and says web grounding isn't enabled by default for government clouds.

**Prerequisites and limits:** the location is available only in the Custom policy template, and only typed prompt text is evaluated.

## Governance guidance

### Before rollout

- Choose the built-in or custom sensitive information types that represent data that must never reach external web search, with your compliance team.
- Assign the policy author a role from the list on the Learn page, such as Purview Data Security AI Admin, rather than Global Administrator.

### At rollout

- Create a Custom DLP policy at the Microsoft Copilot, Copilot Chat, and Copilot Cowork location, with a rule that uses the sensitive information types condition and the Performing Web Searches action (first row of the controls table).
- Keep sensitivity-label rules in a separate rule from the SIT rule, because one rule cannot use both conditions.
- Allow up to four hours after saving before judging whether the rule takes effect.

### After rollout

- Test with a sample prompt that contains a chosen SIT and confirm Copilot answers from internal sources only.
- Tell users that uploaded files are not scanned, so file-based prompts need separate handling.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot may use external web search when a prompt contains chosen sensitive information types</strong><br><small>Tenant</small><br><small class="controls__note">Needs a role such as Purview Data Security AI Admin. Security &amp; Compliance PowerShell only. Policy changes can take up to four hours to reach Copilot.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork › Prevent Copilot from processing content › Performing Web Searches <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &quot;&lt;rule name&gt;&quot; -Policy &quot;&lt;policy name&gt;&quot; -ContentContainsSensitiveInformation @{Name=&quot;&lt;SIT name&gt;&quot;} -RestrictWebGrounding $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

One control governs this feature: the DLP rule action. There is no separate tenant switch described for it on the Learn page. Policy author roles are listed under Scope. The rule is attached to a policy at the Copilot location, which excludes every other location for that policy.

Rule changes can take up to four hours to reach Copilot. The PowerShell call adds the rule to an existing policy named by `-Policy`; the Learn page's portal steps create the policy first. The `-RestrictWebGrounding` reference text describes blocking web grounding in general, and does not mention the Copilot location or SITs, so test the rule's effect after creating it.

## Open questions

- Does Microsoft document GCC, GCC High and DoD availability of the Performing Web Searches action specifically? The Learn page for the Copilot DLP location is silent on clouds; watch that page and the Microsoft Purview government service descriptions.
- Is the user told when web search is skipped for a prompt? The Learn page says Copilot continues with internal sources but does not describe a user message for this action.

<!-- rationale
risk: Low. This is a new control that restricts nothing until an administrator creates and turns on a DLP rule, and Microsoft documents web grounding as not enabled by default in government clouds.
cost: Low. The only cost the sources show is admin time to build the rule; Microsoft Purview controls for Copilot need a Purview licence, and a price or meter for this action is not yet published.
impact: Low. Administrators configure it, and only users whose typed prompts match the chosen sensitive information types lose web search for that request.
-->
