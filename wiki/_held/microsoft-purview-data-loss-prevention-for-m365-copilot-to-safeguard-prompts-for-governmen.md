---
title: "Microsoft Purview DLP: block Copilot responses to prompts containing sensitive data (GCC, GCC High, DoD)"
slug: "microsoft-purview-data-loss-prevention-for-m365-copilot-to-safeguard-prompts-for-governmen"
roadmapId: 561892
topic: "governance"
products: ["Microsoft Purview"]
summary: "A Purview DLP rule can stop Microsoft 365 Copilot and Copilot Chat answering prompts that contain chosen sensitive information types. Launched for GCC, GCC High and DoD; administrators must create the rule."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Purview DLP to safeguard prompts as Included for every plan column it shows, and says it is available to all users of Microsoft Copilot and Copilot Chat. A price or meter specific to this action is not yet published."
audiences: ["security","compliance","m365-admin","service-owner"]
tags: ["purview","dlp","m365-copilot","copilot-chat","sensitive-information-types","oversharing","real-time","gcc","gcc-high","dod"]
sources:
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft Copilot service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule?view=exchange-ps"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 561892"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561892"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-loss-prevention-data-loss-prevention-to-safeguard-sensitive-informa","sensitive-information-types","microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi","microsoft-purview-data-loss-prevention-admin-units-support-for-copilot-and-cowork-dlp","microsoft-purview-data-loss-prevention-for-microsoft-cowork"]
controls:
  - governs: "Whether Copilot answers prompts that contain chosen sensitive information types"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > Prevent Copilot and Cowork from processing content > Processing prompts"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api: null
    note: "Rule uses the Content contains > Sensitive information types condition. Needs a role such as Purview Data Security AI Admin. Learn marks the prompt action as preview and rolling out."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-10T22:43:02"
changes:
  - date: "2026-11-23"
    note: "New briefing: Purview DLP rule action that stops Copilot answering prompts containing sensitive information types, launched on the roadmap for GCC, GCC High and DoD."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 58
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "befe14a6bed65123512358ec6716af57"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) can stop Microsoft 365 Copilot and Copilot Chat from answering a prompt that contains sensitive data. The roadmap item describes a real-time control that mitigates data leakage and oversharing risk by preventing a response when a prompt contains sensitive data, and by preventing that data being used for grounding in Microsoft 365 or the web. This item is the version for the US government clouds listed on the record: GCC, GCC High and DoD.

Microsoft Learn describes how an administrator sets it up: create a DLP policy at the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** location with a rule that uses the **Content contains** > **Sensitive information types** condition and the **Prevent Copilot and Cowork from processing content** > **Processing prompts** action. Learn says the experience then does not respond to the prompt and does not use it for internal or web searches. Only out-of-the-box and custom sensitive information types (SITs) are currently supported. DLP checks only text typed into the prompt: it cannot scan files uploaded into a prompt. The Learn page also lists Cowork alongside Microsoft 365 Copilot and Copilot Chat; the roadmap item names only the latter two.

The roadmap item lists status Launched, release phase General Availability, target June CY2026 and platform Web. Microsoft Learn's section on blocking SITs in prompts says the feature is in preview and rolling out to all tenants with access to Microsoft 365 Copilot and Copilot Chat. The two differ, and the Learn page does not describe availability by cloud. Treat Learn's preview note as the current statement of the feature's maturity until Microsoft aligns the pages.

## Why it matters

For a government-cloud tenant, this is the control that looks at what a user types into Copilot before Copilot answers. Without a rule, nothing in this control screens prompts, so national identifiers, card numbers or custom identifiers typed into Copilot are exposed to whatever Copilot would do with them, including grounding on Microsoft 365 data. No source says existing behaviour changes when the item arrives.

The practical decision is whether your tenant has SITs worth blocking in prompts and whether you accept that a blocked user gets no answer at all. That is a stronger outcome than the web-search rule, which only removes one grounding source. Decide which SITs, test in simulation mode, and agree a user message with your compliance team before you turn it on.

## Risk assessment

**Data exposure**

- A rule built from the steps above stops Copilot returning a response for a prompt that matches the chosen SITs. Coverage is only as wide as the SITs you choose, and Learn says only out-of-the-box and custom SITs are currently supported.
- Files uploaded into a prompt are not scanned: DLP checks only the text typed into the prompt. Treat file upload as a separate path to cover with other controls.
- Learn lists sensitivity labels as a different condition, with a different action that excludes labelled files and emails from processing. A single rule cannot use both the SIT and the label condition.

**Security & identity**

- Creating or editing the policy needs one of the roles Microsoft lists, including Purview Data Security AI Admin and Microsoft Entra Global Admin. Microsoft recommends the roles with the fewest permissions.
- Choosing the Copilot location disables every other location on that policy, so this policy cannot also carry Exchange or SharePoint rules.

**Autonomy & actions**

- No change: the rule stops a response; it adds no capability and takes no action on data.

**Change & support**

- Blocked users see a message that the request cannot be completed because it contains sensitive information the organisation has blocked Copilot from using. Learn notes that during preview the message in Word, Excel and PowerPoint might not clearly say the block is an organisational policy, so expect support questions from those apps.
- Policy updates can take up to four hours to reach the Copilot experiences, so a test straight after a change may not reflect it.

## Cost and licensing

The Microsoft Purview service description lists Purview DLP to safeguard prompts as Included in every plan column it shows, with a footnote that it is available to all users of Microsoft Copilot and Copilot Chat. The separate row for restricting Copilot from processing files and emails is Included only in the Microsoft 365 E5/A5 and Office 365 E5/A5 style columns and Not included in the E3 columns, so the label-based rule is licensed differently from this one.

The Microsoft 365 Copilot service description carries a footnote on Microsoft Purview controls that says they require a licence for Microsoft Purview, available as part of Microsoft 365 G3/G5 or as a standalone. The two pages are worded differently; check your plan against both before budgeting. The Learn page for the Copilot DLP location has a Licensing section that links to licensing guidance and names no entitlement itself.

A price or meter specific to the Processing prompts action is not yet published. The indirect cost is administrator time: choosing SITs, building and testing the rule, and answering user questions.

## Scope

**Users and licences:** prompts in Microsoft 365 Copilot and Copilot Chat; Learn also lists Cowork and Copilot in Word, Excel and PowerPoint for this feature.

**Roles:** Learn lists Microsoft Entra AI Admin, Purview Data Security AI Admin, Purview Data Security AI Admins, Purview Compliance Administrator, Purview Compliance Data Administrator, Purview Information Protection, Purview Information Protection Admin, Purview Security Administrator and Microsoft Entra Global Admin as roles that can create or edit a DLP policy for this location.

**Clouds and platform:** the roadmap item lists GCC, GCC High and DoD, platform Web. The Microsoft 365 Copilot service description lists Microsoft Purview controls for Microsoft Copilot and Copilot Chat as available in GCC, GCCH and DoD.

**Prerequisites and limits:** the location is available only in the Custom policy template. Policy simulation mode is available for Microsoft 365 Copilot and Cowork. Rollout of the prompt action to a given tenant is for you to check, as Learn says.

## Governance guidance

### Before rollout

- Choose, with your compliance team, the built-in or custom sensitive information types that must never reach Copilot in a prompt.
- Assign the policy author a role from the Learn list, such as Purview Data Security AI Admin, rather than Global Administrator.
- Check that the Copilot location and the Processing prompts action are available in your government-cloud tenant, because Learn says rollout is in progress and does not describe availability by cloud.

### At rollout

- Create a Custom DLP policy at the Microsoft Copilot, Copilot Chat, and Copilot Cowork location with a SIT rule and the Processing prompts action (the controls table row), and run it in simulation mode first.
- Keep any sensitivity-label rule in a separate rule from the SIT rule.
- Allow up to four hours after saving before judging whether the rule takes effect.

### After rollout

- Test with a prompt that contains a chosen SIT and confirm Copilot returns no response and shows the block message.
- Tell users that files uploaded into a prompt are not scanned, so the rule covers typed text only.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot answers prompts that contain chosen sensitive information types</strong><br><small>Tenant</small><br><small class="controls__note">Rule uses the Content contains &gt; Sensitive information types condition. Needs a role such as Purview Data Security AI Admin. Learn marks the prompt action as preview and rolling out.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork › Prevent Copilot and Cowork from processing content › Processing prompts <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

One control governs this feature: the DLP rule action. Learn describes no tenant-wide switch for it; the control is a rule inside a policy at the Copilot location, and the portal wording for the action varies on the page (Prevent Copilot and Cowork from processing content in the actions table, Restrict Copilot from processing content in the worked example).

Microsoft Learn documents no PowerShell call for the Processing prompts action at the time of writing (November 2026). The New-DlpComplianceRule reference documents -RestrictWebGrounding for blocking web grounding, which is a different action, and gives -RestrictAccess no description.

Rule changes can take up to four hours to reach Copilot. Learn also documents a compliance URL in the rule's policy tips for the Learn about access restrictions link, which changes only the link destination.

## Open questions

- Does Microsoft document the availability of the Processing prompts action in GCC, GCC High and DoD specifically, given that the roadmap says Launched and the Learn page says preview and rolling out? Watch the Learn page for the Copilot DLP location and the Microsoft Purview service description.
- Is there a PowerShell or API call for the Processing prompts action? Watch the New-DlpComplianceRule reference.
- Which licence entitles a tenant to this action: the Purview service description's Included row, or the Microsoft Purview licence footnote on the Microsoft 365 Copilot service description?
- Will DLP evaluate text extracted from uploaded files in prompts? Learn says it does not today.

<!-- rationale
risk: Low. This is a new control that restricts nothing until an administrator creates a DLP rule for it; left at its default, prompts are not screened for sensitive data by this control.
cost: Low. The Microsoft Purview service description lists DLP to safeguard prompts as included, so the cost Microsoft's pages show is administrator time to build and test the rule.
impact: Low. Administrators set it up, and only users whose typed prompts match the chosen sensitive information types are told the request cannot be completed.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: No source says existing behaviour changes / absence: No source says existing behaviour changes when this capability arrives. | Found: Microsoft created a default DLP policy called Default DLP policy - Protect sensitive M365 Copilot interactions. ... The default policy detects sensitive information types (SIT) in user prompts. | Fix: Replace the sentence with 'Microsoft documents a default policy that detects sensitive prompts in simulation mode; check whether that policy is present in your tenant. Blocking requires changing the policy to enforce mode.' Cite https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy; do not claim a government-cloud rollout date for this default policy. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The rule adds no capability and takes no action on data. | Found: Searched: Microsoft Purview DLP Copilot processing prompts rule autonomous actions modify data. Read the Copilot DLP location page and search excerpts; they describe preventing processing, not the broader assertion that the rule takes no action on data. | Fix: Replace 'No change: the rule stops a response; it adds no capability and takes no action on data' with 'The rule prevents Copilot from returning a response to a prompt containing the chosen sensitive information types.'
- [contradicted, blocker] summary: administrators must create the rule / default: Administrators must create a rule to use this prompt-blocking control. | Found: Microsoft created a default DLP policy called Default DLP policy - Protect sensitive M365 Copilot interactions. ... If you want to block processing of the prompt, you must change the state of the policy to enforce mode. | Fix: Replace 'administrators must create the rule' in the summary with 'blocking requires administrator-enabled enforcement'. A new custom rule is a documented option, not a mandatory prerequisite where Microsoft's default policy is present. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy
- [contradicted, blocker] Why it matters: Without a rule; rationale: risk / default: Until an administrator creates a DLP rule, prompts are not screened for sensitive data by this control. | Found: The default policy detects sensitive information types (SIT) in user prompts. ... The policy is in simulation mode by default, which means it doesn't block the prompt but generates an alert and sends an email to the admin (if configured). | Fix: Replace the first Why it matters paragraph's unconfigured-state assertion with 'Microsoft documents a default policy that detects sensitive prompts in simulation mode but does not block them. Check whether it is present in your tenant before creating another policy.' Replace the risk rationale with 'Low. Blocking requires administrator-enabled enforcement; Microsoft's documented default policy detects sensitive prompts in simulation mode but does not block them.' Cite https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft Purview portal route leads from Data Loss Prevention and custom policy creation to the Processing prompts rule action. | Found: Go to Data Loss Prevention > Policies and select + Create policy. Select the Custom template, then Custom policy. On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. Add a rule | Fix: Include the rule-selection step: 'Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > rule > Prevent Copilot and Cowork from processing content > Processing prompts'. Retain the note specifying the Content contains > Sensitive information types condition. The cited page supplies both the policy route and the final action. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] front matter: defaultState; rationale: risk / default: Blocking prompt processing requires administrator-enabled enforcement, so the blocking control is admin-opt-in. | Found: If you want to block processing of the prompt, you must change the state of the policy to enforce mode. | Fix: Keep defaultState as admin-opt-in for blocking, and cite https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy. Describe the default as 'The default policy detects sensitive prompts in simulation mode; blocking requires changing the policy to enforce mode.' | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy
- [contradicted, minor] Governance controls: tenant-wide switch; controls / consistency: The page records every explicit control absence in the controls table. | Found: Learn describes no tenant-wide switch for it; controls contains only Whether Copilot answers prompts that contain chosen sensitive information types. | Fix: The sentence asserting no separate tenant-wide switch has no corresponding both-null control row. Remove 'Learn describes no tenant-wide switch for it' and keep the documented statement that the control is a rule inside a policy.
- [contradicted, minor] Governance guidance: Before rollout and At rollout; controls / consistency: Every checklist control has a corresponding controls-table row. | Found: Assign the policy author a role from the Learn list ... run it in simulation mode first ... Keep any sensitivity-label rule in a separate rule from the SIT rule. The table has only the prompt-blocking action. | Fix: The policy-author role assignment, simulation-mode selection and sensitivity-label-rule checklist steps have no corresponding control rows. This is a checklist/table coverage finding; do not add unverified paths or commands.
-->
