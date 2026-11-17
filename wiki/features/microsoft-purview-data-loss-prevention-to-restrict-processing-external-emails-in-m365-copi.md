---
title: "Microsoft Purview DLP: stop Copilot grounding on external emails"
slug: "microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi"
roadmapId: 561552
topic: "governance"
products: ["Microsoft Purview"]
summary: "A Purview DLP control keeps Microsoft 365 Copilot and Copilot Chat from using emails sent by external senders. Off by default, so only security and compliance admins who want it need to act."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Per the Microsoft Purview service description, DLP that restricts Copilot from processing files and emails is included with Microsoft 365 E5/A5, Office 365 E5/A5 and the listed Purview suite plans, not with the listed Business or E3 plans. The external-email article names no separate SKU."
audiences: ["security","compliance","m365-admin","service-owner"]
tags: ["dlp","purview","m365-copilot","copilot-chat","exchange","outlook","data-governance","guardrails","real-time"]
sources:
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-data-loss-prevention-dlp-for-microsoft-copilot"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "MC1301714: Microsoft Purview | Data Loss Prevention- DLP to restrict processing external emails in M365 Copilot and Copilot Chat"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1301714"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap item 561552"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561552"
    kind: "roadmap"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search","microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Whether Copilot excludes external senders' emails from grounding"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api: null
    note: "Preview. After selecting the location, add a rule with Email is received from > External users and the action Prevent Copilot from processing content; these are rule settings, not navigation beneath the location."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-17"
    note: "First briefing: Learn documents the external email condition as a preview; Message Center moved general availability to June 2027."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: licensing now cites the Purview service description (per-user), the policy path stops at the Copilot location, the PowerShell side is marked not documented, and unsupported checklist steps were removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 69
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "48d2fbdd32e12d40257f8f2b069c8430"
---

## What's changing

Microsoft is adding a Microsoft Purview Data Loss Prevention (DLP) condition that stops Microsoft 365 Copilot and Copilot Chat from using emails sent by people outside your organisation. When an admin enables it, Copilot excludes those emails from being referenced, summarised or used as grounding data, and keeps using internal Microsoft 365 sources where permitted (Microsoft's notice MC1301714).

Microsoft Learn documents the control as a preview. You build a DLP policy for the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** location with the **Email is received from** > **External users** condition and the action **Prevent Copilot from processing content**. The policy compares the sender's domain with your tenant's accepted domains and does not inspect the email body. The user's own access to the email is not affected, and Learn says the user sees a message that some content was excluded by an organisational policy. Blocking external email is not yet supported for Cowork.

The roadmap item (561552) is "In development", with a preview date of June CY2026 and a general availability target of June CY2027. The Message Center post says public preview began rolling out in early June 2026 and was due to finish by late June 2026, and that general availability (Worldwide) now starts in early June 2027 (previously late January) and completes by late June 2027. The post was updated on 6 November 2026 and lists no act-by date. The roadmap still says "In development" while Learn already documents a preview, so treat the roadmap dates as targets and check your tenant for the preview.

## Why it matters

This gives security teams a tenant-level way to keep mail from outside the organisation out of Copilot's answers. Learn says the protection helps reduce the risk of prompt injection (instructions hidden in a message that try to steer the AI) and of untrusted data influencing responses, because responses are grounded only in content from trusted internal sources.

Microsoft's notice says the control is off by default and that there is no change unless an admin enables it in Microsoft Purview, so if nobody acts, Copilot's handling of external email stays as it is today. The trade-off is usefulness: once the policy is on, summaries of an inbox that is mostly customer or supplier mail will leave that mail out. Decide which groups of users that is acceptable for before enabling it.

## Risk assessment

**Data exposure**

- External emails remain available to Copilot until an admin enables the DLP rule. Learn describes the rule as excluding them from grounding, summarisation and citation; it does not change email storage, delivery, retention or eDiscovery (per MC1301714).
- The rule evaluates sender metadata only. Learn states the email body is not inspected, so the condition does not depend on what an email says.

**Security & identity**

- Learn presents the control as a way to reduce prompt-injection risk from external senders. It rests on comparing the sender's domain with your accepted domains, so confirm how mail from partner or sister domains you consider trusted is treated, as Microsoft's notice speaks of "external or untrusted domains" without defining untrusted.
- Creating or editing the policy needs one of the listed Purview or Entra roles (see Scope), so this is a role-gated change.

**Autonomy & actions**

- No new autonomous action: the control removes content from Copilot's inputs and does not make Copilot do anything.

**Change & support**

- Once enabled, users may see answers that omit external mail and a notice that content was excluded by an organisational policy. Brief the service desk first.
- Learn says updates to a DLP policy can take up to four hours to reflect in Copilot experiences, so allow for that when testing.

## Cost and licensing

Microsoft publishes licensing for DLP that restricts Copilot processing of files and emails: it is included with Microsoft 365 E5/A5, Office 365 E5/A5 and the Purview suite and Information Protection and Governance plans listed in the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-data-loss-prevention-dlp-for-microsoft-copilot), but not with the listed Business or E3 plans. The external-email preview article names no separate SKU. Microsoft's notice says organisations using Microsoft 365 Copilot (Premium) or Copilot Chat are affected, and that behaviour is subject to existing licensing and policy.

No meter or price is documented for this control at the time of writing (November 2026). Check whether existing licences cover the published DLP entitlement; policy creation, testing and communication also take admin time.

## Scope

**Who and what:** the control applies to Microsoft 365 Copilot and Copilot Chat, including email summarisation and reasoning experiences that use email data. Microsoft's notice lists Microsoft 365 Copilot and Copilot Chat users and admins managing AI governance, security and data protection in Microsoft Purview. Cowork is not yet supported.

**Roles:** Learn lists these roles and role groups as able to create or edit a DLP policy for the Copilot location: Microsoft Entra AI Admin, Purview Data Security AI Admin, Purview Data Security AI Admins, Purview Compliance Administrator, Purview Compliance Data Administrator, Purview Information Protection, Purview Information Protection Admin, Purview Security Administrator and Microsoft Entra Global Admin.

**Policy limits:** the Copilot location is available only in the Custom policy template, and selecting it disables all other locations for that policy. Policy simulation mode is available for Microsoft 365 Copilot, and administrative units for the location are in preview and rolling out.

**Availability:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phases General Availability and Preview.

## Governance guidance

### Before rollout

- Identify which user groups depend on external email in Copilot (sales, procurement, support) and agree which of them the rule should cover.
- Review your tenant's accepted domains, because the rule compares each sender's domain with them.
- Assign the policy author one of the roles listed under Scope, preferably the narrowest.
- Tell the service desk what users will see: external emails left out of summaries and a message that content was excluded by an organisational policy.

### At rollout

- Create the DLP policy with the Copilot location in the Custom template, as in the controls table, using the **Email is received from** > **External users** condition.
- Allow up to four hours after a change for it to reach Copilot before judging the result.

### After rollout

- Watch Message Center post MC1301714 and the Learn page for the move from preview to general availability, which Microsoft currently gives as June 2027.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot excludes external senders' emails from grounding</strong><br><small>Tenant</small><br><small class="controls__note">Preview. After selecting the location, add a rule with Email is received from &gt; External users and the action Prevent Copilot from processing content; these are rule settings, not navigation beneath the location.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The control is a condition inside a DLP policy rather than a standalone switch. Microsoft Learn documents no separate tenant-wide toggle for it at the time of writing (November 2026); Microsoft's notice says it is off by default and changes nothing until an admin configures it in Microsoft Purview.

The policy-creation cmdlet is documented, but the external-email rule's PowerShell syntax is not documented in the references checked in November 2026.

## Open questions

- Does the published DLP entitlement for restricting Copilot from processing files and emails also cover the external-email condition, or will Microsoft name a separate licence? Watch the Microsoft Purview service description and the Learn page.
- Which general availability date applies: the roadmap's June CY2027 target, or something earlier for tenants already in preview? Watch Message Center post MC1301714.
- How does the rule treat mail from partner, subsidiary or other domains an organisation considers trusted, given that the notice speaks of "untrusted" domains while Learn describes a comparison with accepted domains?
- What PowerShell syntax creates the external-sender condition and its action in a DLP rule? Watch the New-DlpComplianceRule reference.
- When will the control support Cowork?

<!-- rationale
risk: Low. Microsoft's notice says the control is off by default and changes nothing until an admin enables it, so today's Copilot behaviour continues if it is left alone; the control narrows what Copilot reads.
cost: Low. The Purview service description lists DLP that restricts Copilot processing of files and emails as included with Microsoft 365 E5/A5 and Office 365 E5/A5, not with the listed Business or E3 plans; the other cost is admin time.
impact: Low. Admins configure it, and users notice only if an admin enables it, when Copilot answers without external emails and shows a message that content was excluded by an organisational policy.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist tells administrators to review accepted domains, but the controls table has no accepted-domains row. | Found: Review your tenant's accepted domains, because the rule compares each sender's domain with them. / The table's only row is Whether Copilot excludes external senders' emails from grounding. | Fix: Remove the checklist bullet 'Review your tenant's accepted domains, because the rule compares each sender's domain with them.' It names a separate control without a table row; retain the documented comparison mechanism in What's changing.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist tells administrators to assign a policy-author role, but the controls table has no role-assignment row. | Found: Assign the policy author one of the roles listed under Scope, preferably the narrowest. / The table's only row is Whether Copilot excludes external senders' emails from grounding. | Fix: Remove the checklist bullet 'Assign the policy author one of the roles listed under Scope, preferably the narrowest.' It names role assignment without a table row; retain the verified role prerequisites in Scope.
-->
