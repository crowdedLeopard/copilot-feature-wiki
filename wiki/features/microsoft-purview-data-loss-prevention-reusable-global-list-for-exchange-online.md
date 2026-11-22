---
title: "Microsoft Purview DLP: reusable global lists for Exchange Online rules"
slug: "microsoft-purview-data-loss-prevention-reusable-global-list-for-exchange-online"
roadmapId: 561919
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans reusable lists of keywords, domains and email addresses for Purview DLP in Exchange Online, so rules share one list. Microsoft Learn does not describe it yet. Admins have no action now."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists the licences that give users the rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business. A licence or price specific to reusable lists is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["dlp","exchange","purview"]
sources:
  - title: "Microsoft 365 Roadmap item 561919"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561919"
    kind: "roadmap"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Help prevent sharing credit card numbers through email"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-count-of-labelled-documents-condition","microsoft-purview-data-loss-prevention-default-protection-controls-for-exchange-online-in","sensitive-information-types"]
controls:
  - governs: "Domains, addresses and keywords held in Exchange DLP rule conditions today"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Exchange email > Create rule > Conditions > Add condition"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule> -RecipientDomainIs <domains>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Today's alternative: values sit in each rule. Neither surface is documented as managing reusable lists. Cmdlet runs in Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-11T22:53:53"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap-described reusable lists for Exchange Online DLP; Microsoft Learn does not describe the feature yet."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 53 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 50
  unconfirmed: 2
  contradicted: 1
  attempts: 0
  hash: "221265a962f4eab7f27169487b9a5146"
---

## What's changing

The roadmap item states that Microsoft Purview Data Loss Prevention will get reusable lists for Exchange Online. Its description reads: "Reusable Lists centralize management of keywords, domains, and email addresses, eliminating duplication across rules and reducing the effort required to maintain large policies."

Microsoft Learn does not describe this feature at the time of writing (November 2026), so what follows about behaviour is the roadmap's description. Which rule conditions will accept a reusable list, where the lists are created, who can edit them and whether existing rules convert are not stated.

Today, an Exchange Online DLP rule holds such values inside each condition. Microsoft's DLP policy reference lists Exchange conditions including **Recipient domain is**, **Recipient is**, **Sender domain is** and **Subject or body contains words or phrases**, each with a per-rule limit on how many values it takes. Duplication across rules is therefore the situation the roadmap says the feature addresses.

The roadmap item is In development. Its target dates are December CY2026 for Preview and January CY2027 for General Availability, for Worldwide (Standard Multi-Tenant) on the Web. These are Microsoft's targets, not commitments.

## Why it matters

If you run large Exchange Online DLP policies, the same domain, address or keyword lists are probably repeated across rules, and every change means editing each copy. A shared list would turn that into one edit, which is the effort the roadmap says it removes. That also means one edit could change every rule that uses a list; whether Microsoft documents a way to see which rules use a list is not yet known.

Microsoft has not stated what happens on arrival, so no source says existing rules change. Treat it as something to evaluate when the preview documentation appears, not something to rush.

## Risk assessment

**Data exposure**
- No new data source is described. The roadmap describes managing keywords, domains and email addresses used by rules, not new content access.
- A shared list is a single point of change: an incorrect domain or address added to a list used by many rules could widen an allow-style exception in all of them at once. Which conditions and rule types can use a list is not yet documented, so confirm that before relying on one list for exceptions.

**Security & identity**
- Who can create or edit a reusable list is not yet documented. Today, creating and deploying DLP policies is limited to members of the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role groups, or the granular roles Microsoft lists on the same page. Confirm whether lists use the same roles.

**Autonomy & actions**
- No autonomous behaviour is described. Rules keep the actions they have; the roadmap says nothing about changes to actions.

**Change & support**
- Per-rule limits exist today, for example up to 5000 domains for **Recipient domain is** and up to 600 values for **Recipient is** and **Subject contains words or phrases**. Whether reusable lists raise, share or keep those limits is not stated.
- Roll out changes to lists through simulation mode first, as Microsoft's DLP deployment guidance recommends for rules generally, because a list edit changes rule matching without editing the rule.

## Cost and licensing

The Microsoft Purview service description lists the licences that give users the rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5/A5/G5/E3/A3/G3, and Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW. Reusable lists extend DLP for Exchange Online, so those are the licences to check first. A licence, meter or price specific to reusable lists is not yet published.

The indirect cost is admin time: gathering the duplicated values from existing rules into shared lists and testing the rules that use them.

## Scope

- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only. That is a record fact; it is not a statement that the feature is unavailable elsewhere.
- **Platforms:** Web.
- **Workload:** the title names Exchange Online. Whether the lists reach SharePoint, OneDrive, Teams or Endpoint DLP rules is not stated.
- **Roles:** not yet documented for lists. Creating and deploying DLP policies today needs one of the role groups named in the Microsoft DLP deployment guidance.
- **Rollout:** Preview is targeted for December CY2026 and General Availability for January CY2027. Prerequisites are not yet published.

## Governance guidance

### Before rollout
- Inventory the Exchange Online DLP rules that repeat the same domains, addresses or keywords, using **Get-DlpComplianceRule** output or the rule conditions in the Microsoft Purview portal (see the controls table).
- Note each rule's current value counts against the per-rule limits in the DLP policy reference, so you can compare once Microsoft documents list limits.
- Check that your users hold a licence from the DLP for Exchange Online list in the Microsoft Purview service description.

### At rollout
- Watch Message center and the Microsoft Purview DLP documentation for the Preview, targeted for December CY2026, before enabling anything in production.
- Test any list-based rule in a pilot policy set to **Run the policy in simulation mode** before you turn it on.
- Confirm which role groups can edit a list and restrict that to the DLP administrators who own the rules.

### After rollout
- Review DLP alerts and Activity explorer after a list edit to see whether matching changed.
- Re-check the list contents on a schedule your compliance team sets, because one list may feed several rules.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Domains, addresses and keywords held in Exchange DLP rule conditions today</strong><br><small>Tenant</small><br><small class="controls__note">Today's alternative: values sit in each rule. Neither surface is documented as managing reusable lists. Cmdlet runs in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise applications &amp; devices › Custom › Custom › Exchange email › Create rule › Conditions › Add condition <a href="https://learn.microsoft.com/purview/dlp-create-policy-cc-email" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -RecipientDomainIs &lt;domains&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The single row describes how Exchange rule conditions are set today. It is the control an administrator has now, and it is not a control over reusable lists: Microsoft Learn does not yet describe where reusable lists are created or how they are scripted, so the table has no row for them.

The account that creates and deploys policies must be in one of the role groups named on Microsoft's create-and-deploy page. The PowerShell cmdlets run in Security & Compliance PowerShell.

## Open questions

- Which Exchange DLP conditions (recipient domain, sender domain, recipient address, subject or body words) will accept a reusable list, and do the per-rule limits of 600 or 5000 values still apply? Watch the DLP policy reference.
- Will lists be tenant-wide, and which roles can create or edit them? Watch the Microsoft Purview DLP documentation and Message center.
- Will the feature arrive on by default, and are existing rules converted or left as they are? Microsoft has not stated this.
- Is a licence or meter specific to reusable lists planned? Watch the Microsoft Purview service description.

<!-- rationale
risk: Low. The roadmap describes a list-management feature for existing Exchange Online DLP rules; no source says it changes what a rule blocks. The default is not stated, so this rates today's behaviour continuing.
cost: Low. The only cost the sources show is admin time to move list values into the new lists. A licence or meter specific to reusable lists is not yet published; the DLP for Exchange Online licences apply to the surrounding product.
impact: Low. Compliance and DLP administrators who maintain Exchange Online rules would notice; the roadmap description mentions managing lists, not a change to what senders or recipients see.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Rules keep the actions they have when reusable lists arrive. | Found: Searched: Purview DLP reusable lists Exchange Online conditions list edit actions existing rule conversion dependency references. Read roadmap description, DLP policy reference and deployment guidance; none states action preservation for this feature. | Fix: Remove 'Rules keep the actions they have;' and retain 'The roadmap says nothing about changes to actions.'
- [unsupported, major] Risk assessment: Change & support / behaviour: Editing a reusable list changes rule matching without editing the rule. | Found: Searched: Purview DLP reusable lists Exchange Online conditions list edit actions existing rule conversion dependency references. Read roadmap description and DLP references; centralised management is stated, but edit propagation mechanics are not. | Fix: Remove the clause 'because a list edit changes rule matching without editing the rule'. Keep the recommendation to test changes through simulation mode as the wiki's advice.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; controls[0].note; Why it matters / behaviour: Existing Exchange DLP conditions hold the values specified for a rule. | Found: Most conditions have one property that supports one or more values. | Fix: Cite https://learn.microsoft.com/purview/dlp-exchange-conditions-and-actions for the description of values stored in conditions. | Source: https://learn.microsoft.com/purview/dlp-exchange-conditions-and-actions
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft Purview portal path reaches Add condition in an Exchange DLP rule creation wizard. | Found: On the Define policy settings page, the Create or customize advanced DLP rules option should already be selected. Select Next. Select Create rule. Name the rule and provide a description. Under Conditions, select Add condition > Content contains. | Fix: Include the omitted wizard page and preselected option: Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Exchange email > Define policy settings > Create or customize advanced DLP rules > Create rule > Conditions > Add condition. The cited procedure supports this route. | Source: https://learn.microsoft.com/purview/dlp-create-policy-cc-email
- [supported, minor] Governance guidance: Before rollout / command: Get-DlpComplianceRule can be used to inspect existing DLP rules. | Found: Use the Get-DlpComplianceRule to view data loss prevention (DLP) rules in the Microsoft Purview compliance portal. | Fix: Add https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpcompliancerule to sources for the inventory command. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpcompliancerule
- [contradicted, minor] Governance guidance; Governance controls / consistency: The checklist names controls not represented by the sole existing-rule-condition row. | Found: Checklist: Run the policy in simulation mode; Confirm which role groups can edit a list; Review DLP alerts and Activity explorer; Re-check the list contents. Table: Domains, addresses and keywords held in Exchange DLP rule conditions today. | Fix: The simulation-mode setting, list-edit permissions, alerts/Activity explorer and reusable-list contents have no control rows. Remove those checklist instructions rather than add unverified rows; retain watching the documentation and inventorying current conditions.
-->
