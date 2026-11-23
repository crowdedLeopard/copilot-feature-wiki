---
title: "SharePoint: eSignature recipient groups let any one of up to 10 people sign for a slot"
slug: "sharepoint-esignature-for-m365-recipient-groups"
roadmapId: 560822
topic: "modern-work"
products: ["Microsoft 365","SharePoint"]
summary: "eSignature requests in Word will let one recipient slot be shared by several people, and the first to sign completes it. Microsoft says it is on by default and needs no admin action; the eSignature meter still applies."
status: "in-development"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "consumption"
  notes: "eSignature needs an Azure subscription linked to pay-as-you-go billing, and the eSignature meter is $2.00 per request, with up to 10 recipients in each request. No separate licence or rate for recipient groups is published."
audiences: ["m365-admin","finops","change-adoption"]
tags: ["esignature","sharepoint","word","pay-as-you-go","auditing","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 560822"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560822"
    kind: "roadmap"
  - title: "Set up eSignature"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-setup"
    kind: "learn"
  - title: "Overview of eSignature"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-overview"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "Create a signature request from Word"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-create-request-word"
    kind: "learn"
  - title: "Create a signature request from a PDF in eSignature"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-send-requests"
    kind: "learn"
  - title: "Troubleshoot a signature request in eSignature"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-troubleshoot"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    kind: "learn"
  - title: "MC1290821: (Updated) eSignature for Microsoft 365 - Recipient groups"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1290821"
    kind: "message-center"
videos: []
related: ["auditing","cloud-policy"]
controls:
  - governs: "Whether people in the organisation can use eSignature at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > eSignature > Let people in your organization use eSignature"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-setup"
    api: null
    note: "SharePoint Administrator or Global Administrator role. Clearing the check box turns eSignature off; it is not a recipient-groups switch."
  - governs: "Which SharePoint sites can use eSignature"
    scope: "site"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > eSignature > Where can eSignature be used? > All sites or Selected sites (up to 100)"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-setup"
    api: null
    note: "Choose All sites or Selected sites (up to 100)."
  - governs: "Whether Word on Desktop can start eSignature requests"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Pay-as-you-go services > Settings > Document & image services > eSignature > Which apps can use eSignature? > Word (Desktop)"
      docs: "https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-setup"
    api: null
    note: "Also needs the Allow the use of eSignature for Microsoft Word Office group policy (Cloud Policy service, Intune or Group Policy) or the registry alternative Learn gives. Learn lists Beta, Current and Monthly Enterprise Channels."
  - governs: "Audit records of eSignature activity, including signing"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -Operations <operation names>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    note: "Audit Logs or View-Only Audit Logs role; run the cmdlet in Exchange Online PowerShell. Results include a User field for the account that performed the activity; group-specific audit details are not yet documented."
  - governs: "A separate switch for recipient groups"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented on either surface; the notice says the feature is enabled by default and respects existing tenant policies."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-23"
    note: "First briefing: recipient groups for eSignature, with December 2026 General Availability rollout per MC1290821 and the existing eSignature controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: reworded the external-guest question, aligned the Scope rollout wording, removed a misleading row reference and set action to act-now."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: audit search results include a User field for the account that performed the activity, and only group-specific audit details remain undocumented; the site-scope path now ends at the All sites or Selected sites choice."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 79 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 79
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9ba3899fae86ffa655e064197e2ade92"
---

## What's changing

Microsoft is adding recipient groups to eSignature for Microsoft 365. A recipient group lets a single recipient slot in a signature request be assigned to several people, and the first person in the group to sign fulfils the signing requirement for the whole group. The roadmap item describes it as any one of those people signing on behalf of the group.

Microsoft's notice MC1290821 says users can assign up to 10 people to a single recipient slot, that the feature is enabled by default and that it respects existing tenant policies. The audience it names is users who create eSignature requests in Microsoft Word, in Microsoft 365 tenants that use eSignature. The notice says no action is required from admins and suggests telling users who rely on eSignature workflows. Its compliance answer is that existing customer data is processed differently in one respect: signature completion logic is updated so that one signer in a recipient group can fulfil the signing requirement for the group.

The roadmap item is "In development", with a target of December CY2026, for Current Channel and General Availability on Desktop, in the Worldwide (Standard Multi-Tenant) cloud. MC1290821, updated on 21 September 2026, gives a public preview that was expected to complete by late September 2026, and General Availability in Worldwide beginning in early December 2026 (previously early September) and expected to complete by mid-December 2026 (previously late October). Microsoft Learn's eSignature pages do not describe recipient groups at the time of writing (November 2026), so what is stated above about behaviour comes from the roadmap record and the notice.

## Why it matters

Recipient groups change who can complete a signature step. Until a request is built with a group, one named person has to sign; with a group, any one member can, and Microsoft's notice presents this as a way to stop workflows stalling when a signer is unavailable. For a service owner the point to settle is accountability: an eSignature request is a record of agreement, and a group slot means the person who signed may be one of several the sender chose.

Microsoft states the feature is on by default and needs no admin action, so in tenants that already use eSignature, Word Desktop users can be expected to start using it from the General Availability rollout, targeted for December 2026. Tenants that have not set up eSignature are not affected the same way: Learn says an admin must set up eSignature in the Microsoft 365 admin center before it can be used. Expect questions from legal, procurement and HR teams who sign on behalf of a role, and plan a short message to requesters.

## Risk assessment

**Data exposure**
- The notice says existing customer data is processed differently only in that signature completion logic changes so that one signer can fulfil the group's requirement. Learn says the eSignature service creates a sharing link so signers can reach the document; which members of a group receive that link, and when, is not described, so confirm it in a test request before relying on it.
- External signers who are not yet guests need Microsoft Entra B2B integration for SharePoint and OneDrive, per Learn's setup page. Whether group members can be external guests is not documented for groups.

**Security & identity**
- The signature's authority rests on the sender's choice of group members. Review who requesters are likely to put in a group, such as a shared team, because the signer on the audit record may be any one of them.
- Conditional Access can stop external signers from opening or completing a signature; Learn names adding eSignature (formerly Microsoft eSignature Service) to the approved apps in the Microsoft Entra admin center as one common fix. Confirm in a test how those rules treat external group members.

**Autonomy & actions**
- People sign; the feature does not describe any automated or agent signing. The notice's change is that the first signature closes the slot for the group. What other members see after that is not described.

**Change & support**
- Requests are created from Word on Desktop, which Learn says is available on the Microsoft 365 Beta, Current and Monthly Enterprise Channels, and which also needs the Allow the use of eSignature for Microsoft Word policy or its registry alternative.
- Support teams get "who signed?" questions. eSignature writes events such as "Document was signed by the recipient" to the Purview audit log. Purview audit search results include a User field identifying the account that performed the activity; group-specific audit details are not yet documented.

## Cost and licensing

eSignature is a pay-as-you-go service. Learn's setup and overview pages say you must first link an Azure subscription to pay-as-you-go billing, and that billing is based on the type and number of transactions. The pay-as-you-go pricing page lists the eSignature meter as the number of electronic signature requests created, with up to 10 recipients in each request, at $2.00 per request.

Those pages do not mention recipient groups. At the time of writing (November 2026) Microsoft's pay-as-you-go pricing page publishes no separate meter or rate for them, and does not say whether people added to a group slot count toward the 10 recipients per request. The notice also names no licence for the feature. Budget on the existing per-request meter, and treat any change to how groups are counted as unconfirmed.

Indirect costs are admin time to brief requesters and helpdesk time for questions about who may sign.

## Scope

**Who:** users who create eSignature requests in Microsoft Word, in Microsoft 365 tenants that use eSignature (MC1290821). Learn says the setup needs the SharePoint Administrator or Global Administrator role.

**Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Desktop; GCC, GCC High and DoD are not listed on the item, which is a record fact, not a statement that they are excluded.

**Release:** Current Channel and General Availability, per the roadmap record; status In development, target December CY2026. MC1290821 gives General Availability rollout beginning in early December 2026 and expected to complete by mid-December 2026.

**Prerequisites that already apply to eSignature:** an Azure subscription linked to pay-as-you-go billing; eSignature set up in the Microsoft 365 admin center; the Word (Desktop) option turned on and the Office policy or registry setting applied; documents in a SharePoint site where eSignature is enabled. For multi-geo tenants Learn says the service is available in the home geo only.

## Governance guidance

### Before rollout
- Confirm whether your tenant has eSignature turned on and which sites it covers, using the eSignature panel in Org settings (row 1 and row 2 of the table); tenants without it should not expect the feature.
- Check which Word Desktop users have eSignature available, meaning the Word (Desktop) option and the Allow the use of eSignature for Microsoft Word policy (row 3).
- Ask the legal or procurement owner of your signing processes whether a group slot, where any one member may sign, is acceptable for each document type.
- Tell requesters about recipient groups before the December 2026 target, as Microsoft's notice suggests.

### At rollout
- Watch MC1290821 in Message center for further timeline changes; it has already moved once.
- Send a test request from a Word document with a recipient group, using internal members first, and note who gets the document link and what the other members see after one signs.
- Test one external member only if your Entra B2B and Conditional Access settings allow external signers.

### After rollout
- Search the Purview audit log for eSignature* operations and check that the events you need for sign-off evidence record the signer (row 4).
- Review the pay-as-you-go invoice for the eSignature meter against requests created, and raise a question with Microsoft support if group requests are counted differently from the published per-request meter.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether people in the organisation can use eSignature at all</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint Administrator or Global Administrator role. Clearing the check box turns eSignature off; it is not a recipient-groups switch.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Pay-as-you-go services › Settings › Document &amp; image services › eSignature › Let people in your organization use eSignature <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites can use eSignature</strong><br><small>Site</small><br><small class="controls__note">Choose All sites or Selected sites (up to 100).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Pay-as-you-go services › Settings › Document &amp; image services › eSignature › Where can eSignature be used? › All sites or Selected sites (up to 100) <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Word on Desktop can start eSignature requests</strong><br><small>Tenant</small><br><small class="controls__note">Also needs the Allow the use of eSignature for Microsoft Word Office group policy (Cloud Policy service, Intune or Group Policy) or the registry alternative Learn gives. Learn lists Beta, Current and Monthly Enterprise Channels.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Pay-as-you-go services › Settings › Document &amp; image services › eSignature › Which apps can use eSignature? › Word (Desktop) <a href="https://learn.microsoft.com/microsoft-365/documentprocessing/esignature-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of eSignature activity, including signing</strong><br><small>Tenant</small><br><small class="controls__note">Audit Logs or View-Only Audit Logs role; run the cmdlet in Exchange Online PowerShell. Results include a User field for the account that performed the activity; group-specific audit details are not yet documented.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -Operations &lt;operation names&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A separate switch for recipient groups</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented on either surface; the notice says the feature is enabled by default and respects existing tenant policies.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These are the existing eSignature controls; none is documented as applying to recipient groups on their own. The tenant switch, site scope and Word option decide whether eSignature, and therefore a group slot, can be used at all. Learn describes them for the Microsoft eSignature service and does not mention recipient groups.

The Org settings changes need the SharePoint Administrator or Global Administrator role, per Learn's setup page. The Word option has two parts: the setting in the eSignature panel and the Allow the use of eSignature for Microsoft Word Office policy, which Learn says you can deploy through the Cloud Policy service for Microsoft 365, Microsoft Intune or Group Policy, with a registry command as an alternative. Learn gives audit search through the Microsoft Purview portal or the Search-UnifiedAuditLog cmdlet; the roles for the portal are Audit Logs or View-Only Audit Logs.

## Open questions

- Do people added to a recipient group slot count toward the 10 recipients allowed in each request, and does a group change the $2.00 per-request charge? Watch the pay-as-you-go pricing page and MC1290821.
- What additional group-specific details will audit events contain, and what happens to the other members' notifications and access once one has signed? Watch the eSignature Learn pages and the Purview audit activities list.
- Can group members be external guests, and how do the existing external-signing requirements and Conditional Access policies affect them?
- Will there be an admin setting to turn off recipient groups separately from eSignature, given that Microsoft describes the feature as on by default?
- Will the General Availability rollout in December 2026 hold, given that the notice has already moved the dates from early September?

<!-- rationale
risk: Low. The change stays inside eSignature's existing sharing and sign-in rules, and Microsoft's notice says it respects existing tenant policies; the open point is who counts as the signer when a group signs.
cost: Variable. eSignature is billed through pay-as-you-go at a published $2.00 per signature request; Microsoft publishes no separate meter or rate for recipient groups.
impact: Medium. People who create eSignature requests in Word Desktop notice it; users who only sign, and tenants that have not set up eSignature, are not the audience Microsoft's notice names.
-->
