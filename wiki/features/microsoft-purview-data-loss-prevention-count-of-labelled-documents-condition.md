---
title: "Microsoft Purview DLP: count of labelled attachments condition for Exchange Online"
slug: "microsoft-purview-data-loss-prevention-count-of-labelled-documents-condition"
roadmapId: 562342
topic: "governance"
products: ["Microsoft Purview"]
summary: "A new Exchange Online DLP rule condition triggers when an email carries more sensitivity-labelled attachments than a set threshold. Administrator-configured only; no action is required before rollout."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists the licences that give rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business, including Microsoft 365 E3 and E5. A licence or price specific to this condition is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["dlp","exchange","purview","sensitivity-labels","information-protection"]
sources:
  - title: "Microsoft 365 Roadmap 562342"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562342"
    kind: "roadmap"
  - title: "MC1508235: Microsoft Purview | Data Loss Prevention: Count of labeled documents condition for Exchange Online"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1508235"
    kind: "message-center"
  - title: "Help prevent sharing credit card numbers through email"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Set-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["sensitivity-labels","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Whether an Exchange DLP rule uses the labelled-attachment count condition"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Exchange email > Create or customize advanced DLP rules > Create rule > Conditions > Add condition"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    api: null
    note: "The Learn page does not list the new condition; the roadmap names it “Count of labeled documents is greater than”. A role listed under Scope is required."
  - governs: "Whether a policy that uses the condition runs in simulation mode or enforces its actions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Exchange email > Create or customize advanced DLP rules > Create rule > Run the policy in simulation mode"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    api:
      kind: "powershell"
      call: "Set-DlpCompliancePolicy -Identity <policy name> -Mode TestWithoutNotifications"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    note: "Mode also accepts Enable, Disable and TestWithNotifications. The portal option is chosen on the wizard page after the rule is saved."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-08-11T22:53:53"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: covers the notice's counting rules, rollout windows, the policy path and simulation-mode control, and the gaps Learn has not yet filled."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 52
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "af67f6fec8653dfad054c1363ae8a232"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) is getting a new Exchange Online condition, “Count of labeled documents is greater than”. It counts the attachments in one email message that carry a matching sensitivity label. When the count is above the threshold an administrator sets, the DLP rule is triggered and its configured actions are applied. The roadmap item describes the aim as catching high-volume exfiltration, where several files that are each low-risk add up to a significant risk together.

Microsoft's notice MC1508235 gives the detail. Each attachment with a matching label is counted individually, including duplicate copies of the same file. When a rule selects several labels, the condition evaluates the combined count of all matching attachments. The threshold is strict greater-than, so a threshold of 3 triggers at 4 or more matching attachments. For encrypted (rights-protected) attachments, the protection wrapper is excluded to prevent double-counting. The condition can be combined with existing DLP conditions and actions, and it applies to Exchange Online DLP policies only, not to SharePoint, OneDrive, Teams or Endpoint DLP.

The roadmap item is In development, with a preview target of November CY2026 and a general availability target of December CY2026, and lists both General Availability and Preview as release phases. MC1508235 (published 2026-10-14) gives the rollout window: Public Preview beginning in early November 2026 and expected to complete by early December 2026, then General Availability (Worldwide) beginning in mid-December 2026 and expected to complete by late December 2026. The notice sets no act-by date. At the time of writing (November 2026) the Exchange conditions list in the Microsoft Learn DLP policy reference does not yet include this condition, so the behaviour above comes from the notice and the roadmap description.

## Why it matters

The roadmap item says existing conditions evaluate file content but give no control based on the volume of labelled attachments. For organisations that already label documents, this adds a volume signal that can be combined with content-based conditions, which suits cases where one message carries many labelled files. It is the wiki's view that it is most useful for catching bulk sending of labelled files that individual rules would let through one at a time.

If nobody acts, nothing changes: MC1508235 says the feature is administrator configured and is not enabled automatically through existing policies, and no action is required before rollout. The decision for a service owner is whether a threshold on attachment count is worth adding to the Exchange DLP policies already in place.

## Risk assessment

**Data exposure**
- The condition only counts attachments that carry a matching sensitivity label, so it adds nothing for unlabelled files. Labelling coverage decides how much of a bulk send it can see; see [/concepts/sensitivity-labels/](/concepts/sensitivity-labels/).
- Because the threshold is strict greater-than, a message with exactly the threshold number of matching attachments does not trigger the rule. Set the threshold one below the number you want to catch.
- Duplicate copies of a file are each counted, and multiple selected labels are counted together. A rule with several labels therefore triggers sooner than one with a single label at the same threshold.

**Security & identity**
- No change to identity or authentication is described in the notice. The notice says the available information does not indicate that the condition itself can be controlled through Microsoft Entra ID group membership.
- Creating or changing the rule needs one of the DLP role groups listed under Scope.

**Autonomy & actions**
- When the count exceeds the threshold, the rule's configured actions apply. A rule set to a blocking action will stop messages that exceed the threshold, so test in simulation mode first: Learn says no policy actions are enforced in that mode and events are audited.

**Change & support**
- Legitimate mailings that attach many labelled files, such as board packs or audit evidence, can exceed a threshold; expect questions from senders if a rule blocks them. Pilot with audit-only actions before enforcement, as MC1508235 recommends testing in simulation or audit mode.

## Cost and licensing

The Microsoft Purview service description lists the licences that give a user rights to Data Loss Prevention for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2) and Exchange Online Plan 2; Office 365 E5/A5/G5/E3/A3/G3; and Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW. This is a new condition inside Exchange Online DLP, so that page is the licensing statement that covers it; whether Microsoft will attach a licence or price specific to the condition is not yet published.

No meter is documented for the condition at the time of writing (November 2026). The indirect cost is admin time to choose thresholds, test them in simulation mode and handle any blocked mail.

## Scope

The condition is for Exchange Online DLP policies. MC1508235 says it does not apply to SharePoint, OneDrive, Teams or Endpoint DLP. The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform.

The account that creates and deploys DLP policies must be a member of one of these role groups, as the Learn DLP deployment page lists them: Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator. The roadmap item is In development and the rollout windows above are Microsoft's targets, with preview first and general availability after it.

## Governance guidance

### Before rollout
- List the Exchange Online DLP policies you already run and decide which, if any, would gain from a limit on labelled attachments per message.
- Check which sensitivity labels are published and in use, because only attachments with a matching label are counted; see [/concepts/sensitivity-labels/](/concepts/sensitivity-labels/).
- Confirm which of the role groups listed under Scope your DLP administrators belong to.
- Pick a first threshold with the strict greater-than rule in mind: a threshold of 3 triggers at 4 or more matching attachments.

### At rollout
- Add the condition to a test rule on the Exchange email location when it appears in your tenant, using the policy path in the controls table.
- Set the policy to Run the policy in simulation mode so no actions are enforced while you watch matches.
- Combine the condition with an existing content-based condition if you want a narrower rule, as MC1508235 describes.

### After rollout
- Review matches in the DLP simulation mode overview and Activity explorer, then adjust the threshold and labels.
- Move the policy from simulation to enforcement only when the matches reflect real bulk sends, using the policy state control in the table.
- Update your internal DLP administration documentation if it lists the supported Exchange Online conditions, as MC1508235 recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an Exchange DLP rule uses the labelled-attachment count condition</strong><br><small>Tenant</small><br><small class="controls__note">The Learn page does not list the new condition; the roadmap names it “Count of labeled documents is greater than”. A role listed under Scope is required.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise applications &amp; devices › Custom › Custom › Exchange email › Create or customize advanced DLP rules › Create rule › Conditions › Add condition <a href="https://learn.microsoft.com/purview/dlp-create-policy-cc-email" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a policy that uses the condition runs in simulation mode or enforces its actions</strong><br><small>Tenant</small><br><small class="controls__note">Mode also accepts Enable, Disable and TestWithNotifications. The portal option is chosen on the wizard page after the rule is saved.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise applications &amp; devices › Custom › Custom › Exchange email › Create or customize advanced DLP rules › Create rule › Run the policy in simulation mode <a href="https://learn.microsoft.com/purview/dlp-create-policy-cc-email" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpCompliancePolicy -Identity &lt;policy name&gt; -Mode TestWithoutNotifications</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls table covers where a rule is built and how it is staged. The new condition is not yet listed in the Learn Exchange conditions reference, and the Security & Compliance PowerShell rule cmdlets list no parameter for it at the time of writing (November 2026), so the first row has no scripting side.

The notice says the condition is administrator configured and is not enabled automatically through existing policies. Policy state controls the whole policy, not this condition alone: a rule that uses it runs in simulation or enforcement mode with the rest of the policy.

## Open questions

- What range of threshold values will the condition accept? The notice gives the strict greater-than rule but no maximum or minimum; watch the Microsoft Learn DLP policy reference.
- Which PowerShell parameter, if any, will set this condition in New-DlpComplianceRule and Set-DlpComplianceRule? None is documented yet.
- Will Microsoft publish a licence or price specific to this condition? Watch the Microsoft Purview service description and Message center.
- Where will the Learn reference list the condition and its admin path, and will the preview change before general availability in December CY2026? Watch Message center and the DLP policy reference.

<!-- rationale
risk: Low. Microsoft's notice MC1508235 says the condition is administrator configured and not enabled automatically through existing policies, so nothing changes until a DLP rule uses it.
cost: Low. The only cost the sources show is admin time to design and test rules; licensing specific to this condition is not yet published, and the DLP for Exchange Online licences are listed in the Microsoft Purview service description.
impact: Low. Administrators who manage Exchange Online DLP policies are the audience in MC1508235; senders notice only if a rule they write blocks or flags messages above a threshold.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls / admin-path: The printed Microsoft Purview portal path reaches Conditions > Add condition in the Exchange policy wizard. | Found: On the Define policy settings page, the Create or customize advanced DLP rules option should already be selected. | Fix: In controls[0].ui.path and the rendered table, use 'Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > Conditions > Add condition'. Retain the note that this page does not document the new condition. | Source: https://learn.microsoft.com/purview/dlp-create-policy-cc-email
- [supported, minor] controls[1].ui; Governance controls / admin-path: The printed Microsoft Purview portal path reaches Run the policy in simulation mode after the rule is saved. | Found: On the Define policy settings page, the Create or customize advanced DLP rules option should already be selected. | Fix: In controls[1].ui.path and the rendered table, use 'Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > Run the policy in simulation mode'. Retain the note that the rule is saved before choosing simulation mode. | Source: https://learn.microsoft.com/purview/dlp-create-policy-cc-email
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks readers to check label publication and administrator role-group membership, but neither control has a table row. | Found: Check which sensitivity labels are published and in use; Confirm which of the role groups listed under Scope your DLP administrators belong to. The controls table covers only the attachment-count condition and policy state. | Fix: Remove the Before rollout bullets beginning 'Check which sensitivity labels are published and in use' and 'Confirm which of the role groups listed under Scope'. Retain the factual labelling and permissions discussion elsewhere; do not add control rows.
-->
