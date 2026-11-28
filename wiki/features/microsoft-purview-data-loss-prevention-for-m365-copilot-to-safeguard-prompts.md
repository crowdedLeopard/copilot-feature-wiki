---
title: "Microsoft Purview DLP: block Microsoft 365 Copilot responses to prompts containing sensitive data"
slug: "microsoft-purview-data-loss-prevention-for-m365-copilot-to-safeguard-prompts"
roadmapId: 515945
topic: "governance"
products: ["Microsoft Purview","Microsoft Copilot (Microsoft 365)"]
summary: "A Purview DLP rule can stop Microsoft 365 Copilot and Copilot Chat answering prompts that contain chosen sensitive information types. Launched on the roadmap; Microsoft's default policy only simulates, so blocking needs an administrator to enforce it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: "November CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Purview DLP to safeguard prompts as Included in every plan column of its Copilot DLP table and says it is available to all users of Microsoft Copilot and Copilot Chat. A separate price or meter for this action is not yet published."
audiences: ["security","compliance","m365-admin","service-owner"]
tags: ["purview","dlp","m365-copilot","copilot-chat","sensitive-information-types","oversharing","cowork","role-groups"]
sources:
  - title: "Microsoft Purview DLP for Microsoft 365 Copilot and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Learn about the default data loss prevention policy for Microsoft 365 Copilot location"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
  - title: "Microsoft Purview DSPM Sensitive Information Policy Deployment Guide for Education"
    url: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/purview-data-security-posture-management-education"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 515945"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=515945"
    kind: "roadmap"
  - title: "Whether a Copilot DLP policy, including the default one, blocks or only simulates (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    kind: "learn"
  - title: "Who can create or edit DLP policies for the Copilot location (Purview role-group membership) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who can create or edit DLP policies for the Copilot location (Purview role-group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-for-m365-copilot-to-safeguard-prompts-for-governmen","microsoft-purview-data-loss-prevention-data-loss-prevention-to-safeguard-sensitive-informa","microsoft-purview-data-loss-prevention-admin-units-support-for-copilot-and-cowork-dlp","microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi","role-groups"]
controls:
  - governs: "Whether Copilot answers prompts that contain chosen sensitive information types"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > rule > Prevent Copilot and Cowork from processing content > Processing prompts"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api: null
    note: "Rule uses the Content contains > Sensitive information types condition. Learn marks blocking SITs in prompts as preview and rolling out."
  - governs: "Whether a Copilot DLP policy, including the default one, blocks or only simulates"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss prevention > Policies > policy > Edit > Policy mode > Turn the policy on immediately"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy"
    api:
      kind: "powershell"
      call: "Set-DlpCompliancePolicy -Identity \"<policy>\" -Mode Enable"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    note: "Editing the default policy needs DLP Compliance Management permissions. -Mode TestWithNotifications or TestWithoutNotifications keeps it in simulation."
  - governs: "Who can create or edit DLP policies for the Copilot location (Purview role-group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Copilot DLP page lists Purview Data Security AI Admins among the role groups that can create or edit these policies. Needs the Role management role."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-14T23:15:59"
changes:
  - date: "2026-11-28"
    note: "New briefing: Purview DLP rule action that stops Microsoft 365 Copilot answering prompts containing sensitive information types, launched on the roadmap for the Worldwide cloud."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 76 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected after the independent check: the Autonomy bullet now states the documented outcome, pre-built agent coverage is cited to Microsoft's education guide, the Incident reports and compliance-URL checklist steps are removed, and the rule step is added to the Processing prompts path."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 82
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e2cd38e8addbf6450414a31b67745749"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) can stop Microsoft 365 Copilot from answering a prompt that contains sensitive data. The roadmap item describes a real-time control that prevents Microsoft 365 Copilot, including pre-built agents in Microsoft 365 Copilot, from returning a response when a prompt contains sensitive data, and from using that data for grounding in Microsoft 365 or the web.

Microsoft Learn describes the set-up: a DLP policy at the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** location with a rule that uses the **Content contains** > **Sensitive information types** condition and the **Prevent Copilot and Cowork from processing content** > **Processing prompts** action. When text typed into the prompt matches a chosen sensitive information type (SIT), the experience doesn't respond and the prompt isn't used for internal or web searches. Only out-of-the-box and custom SITs are currently supported, and DLP checks only the text typed into the prompt, not files uploaded into it. Learn lists Cowork and Copilot in Word, Excel and PowerPoint as supported alongside Microsoft 365 Copilot and Copilot Chat.

Learn also describes a default policy, **Default DLP policy - Protect sensitive M365 Copilot interactions**, that detects SITs in prompts. It starts in simulation mode, which logs the event, raises an alert and emails the admin if configured, but does not block the prompt; blocking requires changing the policy to enforce mode.

The roadmap item lists status Launched, release phase General Availability, preview November CY2025, target March CY2026, platform Web and the Worldwide (Standard Multi-Tenant) cloud. Learn's section on blocking SITs in prompts still says the feature is in preview and rolling out to all tenants with access to Microsoft 365 Copilot and Copilot Chat. The two pages differ; check whether the action is available in your tenant.

## Why it matters

This is the control that inspects what a user types into Copilot before Copilot answers. If nobody acts, the default policy described on Learn records matching prompts in simulation mode and Copilot keeps answering them; nothing is blocked until an administrator enforces a rule. A blocked user gets no answer at all, which is a stronger outcome than the web-search action that removes only one grounding source, so the choice of SITs decides how many legitimate prompts fail.

The decision for a service owner is therefore which SITs must never reach Copilot, whether to tune and enforce Microsoft's default policy or build a narrower one, and what users are told when a prompt is refused. The default policy's broad SIT list (from bank account numbers to IP addresses) is a reason to review simulation results before enforcing it.

## Risk assessment

**Data exposure**

- An enforced rule stops Copilot responding to, or searching with, a prompt whose typed text matches the chosen SITs. Coverage is only as wide as the SITs chosen; sensitivity labels are a different condition with a different action and cannot share a rule with the SIT condition.
- Files uploaded into a prompt are not scanned: Learn says DLP only checks the text typed into the prompt itself.

**Security & identity**

- Creating or editing a policy at this location needs one of the roles Learn lists, such as Purview Data Security AI Admin or Microsoft Entra AI Admin; Microsoft recommends the roles with the fewest permissions. Membership is set through Purview role groups (see the controls table).
- Learn says Copilot prompts run in the security context of the user who submits them, and policy scoping follows that user.

**Autonomy & actions**

- The prompt-processing action prevents a response and internal or web searches.

**Change & support**

- Blocked users see a message that the request can't be completed because it contains sensitive information the organisation has blocked Copilot from using. During preview, the message in Word, Excel and PowerPoint might not clearly say an organisational policy caused the block, so expect help-desk questions from those apps.
- Policy updates can take up to four hours to reach the Copilot experiences.

## Cost and licensing

The Microsoft Purview service description, in its table for DLP for Microsoft Copilot, lists **Purview Data Loss Prevention (DLP) to safeguard prompts** as Included for Microsoft 365 Business Basic/Standard/Premium, Microsoft 365 E3/A3/A1/G3/F3/F1, Office 365 E3/E1/A3/A1/G3/G1/F3, Microsoft 365 E5/A5 (and the listed Purview suites) and Office 365 E5/A5, with a footnote that Purview DLP for prompts is available to all users of Microsoft Copilot and Copilot Chat.

The label-based row in the same table (restricting Copilot from processing files and emails) is Not included in the Business, E3 and E1 columns and Included only in the E5/A5 columns, so the two Copilot DLP actions are licensed differently.

A price or meter specific to the Processing prompts action is not yet published. The indirect cost is administrator time: reviewing simulation alerts, tuning the SIT list and handling user questions.

## Scope

**Users:** people who prompt Microsoft 365 Copilot and Copilot Chat; Learn also lists Cowork and Copilot in Word, Excel and PowerPoint. The roadmap names pre-built agents, and Microsoft's [education deployment guide](https://learn.microsoft.com/microsoft-365/education/guide/1-reference/purview-data-security-posture-management-education) documents Processing prompts protection for Microsoft Copilot and prebuilt agents, although the Copilot DLP feature page does not name them.

**Roles:** Learn lists Microsoft Entra AI Admin, Purview Data Security AI Admin, Purview Data Security AI Admins, Purview Compliance Administrator, Purview Compliance Data Administrator, Purview Information Protection, Purview Information Protection Admin, Purview Security Administrator and Microsoft Entra Global Admin. Editing the default policy needs **DLP Compliance Management** permissions.

**Cloud and platform:** Worldwide (Standard Multi-Tenant), Web, as the roadmap record lists them. The US government clouds are covered by a separate roadmap item: [/features/microsoft-purview-data-loss-prevention-for-m365-copilot-to-safeguard-prompts-for-governmen/](/features/microsoft-purview-data-loss-prevention-for-m365-copilot-to-safeguard-prompts-for-governmen/).

**Limits:** the location is available only in the **Custom** policy template, and selecting it disables every other location on that policy. Policy simulation mode is available for Microsoft 365 Copilot and Cowork. Administrative unit scoping for this location is in preview and rolling out.

## Governance guidance

### Before rollout

- Check under Data Loss prevention > Policies whether the default Copilot policy is present and still in simulation mode.
- Agree with the compliance team which built-in or custom SITs must never reach Copilot in a prompt, and remove irrelevant SITs from the default policy to cut false positives.
- Assign policy authors a listed role such as Purview Data Security AI Admin through a Purview role group rather than Global Administrator.

### At rollout

- Review simulation alerts, then switch the policy mode to enforce (Turn the policy on immediately, or Set-DlpCompliancePolicy -Mode Enable).
- Allow up to four hours after a change before testing it.

### After rollout

- Test with a prompt containing a chosen SIT and confirm Copilot returns no response and shows the block message.
- Tell users that uploaded files are not scanned and that Word, Excel and PowerPoint may show a less clear message during preview.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot answers prompts that contain chosen sensitive information types</strong><br><small>Tenant</small><br><small class="controls__note">Rule uses the Content contains &gt; Sensitive information types condition. Learn marks blocking SITs in prompts as preview and rolling out.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork › rule › Prevent Copilot and Cowork from processing content › Processing prompts <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a Copilot DLP policy, including the default one, blocks or only simulates</strong><br><small>Tenant</small><br><small class="controls__note">Editing the default policy needs DLP Compliance Management permissions. -Mode TestWithNotifications or TestWithoutNotifications keeps it in simulation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss prevention › Policies › policy › Edit › Policy mode › Turn the policy on immediately <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-default-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpCompliancePolicy -Identity &quot;&lt;policy&gt;&quot; -Mode Enable</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can create or edit DLP policies for the Copilot location (Purview role-group membership)</strong><br><small>Tenant</small><br><small class="controls__note">The Copilot DLP page lists Purview Data Security AI Admins among the role groups that can create or edit these policies. Needs the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The prompt-blocking action is a rule inside a Custom DLP policy at the Copilot location; the Learn page names the action **Prevent Copilot and Cowork from processing content** in its table and **Restrict Copilot from processing content** in its worked example.

Microsoft Learn documents no PowerShell value for the Processing prompts action at the time of writing (November 2026). The New-DlpComplianceRule reference lists -RestrictAccess without a description and documents -RestrictWebGrounding, which blocks web grounding and is a different action. Policy mode can be scripted with Set-DlpCompliancePolicy, where TestWithNotifications and TestWithoutNotifications are simulation modes.

The Learn page for this location says DLP alerts and DLP notifications are supported, and the default policy raises an alert and a low-severity email to the admin when it matches.

## Open questions

- When will Learn drop the preview label for blocking SITs in prompts, given the roadmap item says Launched and General Availability?
- Which -RestrictAccess setting value, if any, scripts the Processing prompts action? Watch the New-DlpComplianceRule reference.
- Will DLP evaluate files uploaded into prompts? Learn says it does not today.

<!-- rationale
risk: Low. This is a new control: Microsoft's default Copilot DLP policy runs in simulation mode and logs sensitive prompts without blocking them, so Copilot keeps answering as it does today until an administrator enforces a rule.
cost: Low. The Microsoft Purview service description lists DLP to safeguard prompts as Included in every plan it shows for Copilot DLP, so the cost Microsoft's pages show is administrator time to choose sensitive information types and test the rule.
impact: Low. Administrators configure it; users notice only when an enforced rule matches their typed prompt and Copilot replies that the request can't be completed.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Limits / availability: Administrative-unit scoping at the Copilot location is in preview and rolling out. | Found: Administrative unit support for this location, including Cowork, is in preview and is rolling out. The option might not yet be available in your tenant. | Fix: Append to the administrative-unit sentence: 'The cited education deployment guide still says this location does not support administrative units, whereas the Copilot DLP feature page documents preview support.' The conflicting guide is https://learn.microsoft.com/microsoft-365/education/guide/1-reference/purview-data-security-posture-management-education and says 'The policy location doesn't support Administrative Units.' | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
-->
