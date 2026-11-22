---
title: "Outlook: reply with a template in inbox rules"
slug: "outlook-reply-with-a-template-in-rules"
roadmapId: 567318
topic: "modern-work"
products: ["Outlook"]
summary: "Users of new Outlook for Windows and Outlook on the web can create inbox rules that reply to incoming mail with a saved template. It rolls out automatically; Microsoft's notice says no admin action is required."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's licensing page says using Outlook for Windows with a Microsoft 365 organisational address needs a plan that includes the desktop Microsoft 365 apps. A licence or meter specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","new-outlook","exchange","automation"]
sources:
  - title: "MC1505607: (Updated) Outlook: Reply With a Template in Rules"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1505607"
    kind: "message-center"
  - title: "View or modify policy properties in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    kind: "learn"
  - title: "Create a mailbox policy in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/create-outlook-web-app-mailbox-policy"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Remote domains in Exchange Online"
    url: "https://learn.microsoft.com/exchange/mail-flow-best-practices/remote-domains/remote-domains"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 567318"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567318"
    kind: "roadmap"
videos: []
related: ["outlook-new-cloud-policy-controls"]
controls:
  - governs: "Whether users can create and edit inbox rules in Outlook on the web and new Outlook for Windows"
    scope: "user"
    ui:
      surface: "Exchange admin center"
      path: "Roles > Outlook web app policies > policy > Features > Manage features > Information management > Inbox Rules"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    api:
      kind: "powershell"
      call: "Set-OwaMailboxPolicy -Identity <policy name> -RulesEnabled $false"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    note: "Existing control for rules in general, not specific to this action. Defaults to $true. The reference describes the parameter for server-side rules in Outlook on the web."
  - governs: "Switch for the reply-with-template rule action alone"
    scope: "user"
    ui: null
    api: null
    note: "Microsoft Learn documents no separate setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: rollout windows from MC1505607, the Inbox Rules mailbox policy as the only documented control, and no feature-specific licence published."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 44 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 40
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "15a87aaca7b76d533a826fce68a9c571"
---

## What's changing

Microsoft is adding an option to inbox rules in new Outlook for Windows and Outlook on the web: a rule can reply to incoming messages with a saved template. The roadmap item says users set the conditions they care about and pick the template, and Outlook sends the response.

Microsoft's notice MC1505607 (published 2026-10-12, updated 2026-10-26) gives the rollout window for Worldwide. Targeted Release is to begin in mid-October 2026 and complete by early November 2026. General Availability is to begin in early December 2026 and complete by late December 2026. The notice says the capability rolls out automatically, that no admin action is required before rollout, and that it has no act-by date.

The roadmap record shows the item as Rolling out, with the target "October CY2026", release phases General Availability and Targeted Release, the cloud Worldwide (Standard Multi-Tenant) and the platform Web. The notice names both new Outlook for Windows and Outlook on the web as affected, so the record and the notice differ on platforms. Microsoft Learn has no page describing this feature at the time of writing (November 2026), so what follows about its behaviour is what the roadmap item and the notice state.

## Why it matters

This puts automatic outbound email in the hands of every user who writes inbox rules. Nothing is sent until a user creates a rule, but when one matches, Outlook replies without that user doing anything, in the user's name and with whatever wording the template holds. That is a support and communication matter more than a security one, and it is why Microsoft's notice recommends informing the help desk and checking whether your organisation has guidance on automated email responses.

If nobody acts, the capability still arrives on the schedule above, and the notice says no admin action is required. The one existing lever is the Inbox Rules setting in Outlook on the web mailbox policies, which switches rule creation off for the users a policy covers, not this action alone.

## Risk assessment

**Data exposure**
- The reply text is whatever the user puts in the template, sent to whoever matches the rule's conditions. The notice does not say whether replies can go to external senders. Microsoft's notice states "No compliance considerations identified. Review as appropriate for your organization."

**Security & identity**
- The notice does not say which senders a rule skips, such as automated or external senders. Confirm that before telling users it is safe to use on shared or public-facing mailboxes.
- Rule creation is governed by the Inbox Rules mailbox policy setting (see the controls table). Disabling it removes the ability to create any rule, not only this one.

**Autonomy & actions**
- Once a rule matches, Outlook sends the template without a person approving each reply. Confirm whether the rule limits repeat replies to the same sender before encouraging use on busy mailboxes. The notice does not say.

**Change & support**
- Expect help desk questions about unexpected automatic replies from the Targeted Release window onwards. Microsoft's notice recommends informing the help desk and updating internal Outlook guidance if you document inbox rules or automated responses.

## Cost and licensing

**Licence.** Microsoft's licensing page for new Outlook for Windows says that to use the Outlook for Windows desktop app (classic or new) with a Microsoft 365 organisational email address, you need a plan that includes the desktop versions of the Microsoft 365 apps. Neither the roadmap item nor Microsoft's notice names any other licence for this feature, and a licence or entitlement specific to this feature is not yet published. That page covers the new Outlook for Windows app; it does not address Outlook on the web.

**Meter.** No meter, credit or charge is named in the roadmap item or the notice. Microsoft has not published pricing for this feature.

**Indirect costs.** Admin time to review the Inbox Rules mailbox policy, help desk briefing and updates to internal guidance.

## Scope

**Users.** The notice says users of new Outlook for Windows and Outlook on the web who use inbox rules are affected. No role is needed to receive it; the notice says it rolls out automatically.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) only, and the platform Web. The notice names new Outlook for Windows as well.

**Rollout.** Targeted Release from mid-October 2026 to early November 2026; General Availability from early December 2026 to late December 2026, per MC1505607. The roadmap record gives the target as October CY2026 and the status as Rolling out.

**Mailbox policy default.** The Set-OwaMailboxPolicy reference says the RulesEnabled parameter defaults to $true, so users can create rules unless a policy turns that off.

## Governance guidance

### Before rollout
- Review which Outlook on the web mailbox policies have Inbox Rules enabled (Exchange admin center), and decide whether any group should have rule creation switched off. The setting covers all rules, not this action alone.
- Check whether your organisation has policies or guidance on automated email responses, as Microsoft's notice suggests, and update them if they do.
- Brief the help desk on the new inbox-rule capability, as the notice recommends.

### At rollout
- Update internal Outlook guidance that describes inbox rules or automated responses.
- Allow up to 60 minutes for a change to an Outlook on the web mailbox policy to take effect before testing it.
- Expect Targeted Release users to see the capability first, from mid-October 2026, and everyone else from early December 2026.

### After rollout
- Review help desk tickets for unexpected automatic replies and ask users who raise them which rule sent them.
- Watch MC1505607 and the Microsoft Learn Outlook pages for documentation of this feature, and confirm licensing and behaviour against it when it appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and edit inbox rules in Outlook on the web and new Outlook for Windows</strong><br><small>User</small><br><small class="controls__note">Existing control for rules in general, not specific to this action. Defaults to $true. The reference describes the parameter for server-side rules in Outlook on the web.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Roles › Outlook web app policies › policy › Features › Manage features › Information management › Inbox Rules <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OwaMailboxPolicy -Identity &lt;policy name&gt; -RulesEnabled $false</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for the reply-with-template rule action alone</strong><br><small>User</small><br><small class="controls__note">Microsoft Learn documents no separate setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Inbox Rules setting governs rule creation in general. The Learn page on creating mailbox policies describes it as letting a user create and edit custom rules in Outlook on the web and the new Outlook for Windows, while the Set-OwaMailboxPolicy reference describes RulesEnabled in terms of server-side rules in Outlook on the web. Disabling it affects every kind of rule, not only the reply-with-template action. The reference describes the parameter as controlling whether users can view, create or modify rules, and does not say what happens to rules that already exist.

Microsoft Learn documents no switch for this action alone at the time of writing (November 2026), hence the second row. Policy changes can take up to 60 minutes to take effect.

## Open questions

- Does a remote domain's Automatic replies setting in Exchange Online stop replies sent by this rule to external senders? Microsoft's remote domains page names out-of-office replies, automatic replies set by admins and inbox-rule forwards, and does not mention template replies sent by inbox rules.
- Does the rule limit repeat replies to the same sender, or skip automated senders? Watch for the Learn page on this feature and updates to MC1505607.
- Is a licence or entitlement beyond the plan Outlook already requires needed for this feature, including in Outlook on the web? Check the new Outlook for Windows licensing page and Message center.
- The roadmap record lists the platform as Web only, while the notice names new Outlook for Windows too. Which is complete? Watch the roadmap item for changes.
- The roadmap lists only Worldwide (Standard Multi-Tenant). Is availability in other clouds planned? Watch the roadmap item.

<!-- rationale
risk: Low. The notice describes users creating the rule themselves, and the Inbox Rules mailbox policy setting already governs whether users can create rules in Outlook on the web and new Outlook for Windows.
cost: Low. The only cost shown is indirect: admin and help desk time. The roadmap item and Microsoft's notice name no separate licence or charge, and a licence specific to this feature is not yet published.
impact: Low. Only users who set up such a rule, and the people who receive its replies, notice it. Microsoft's notice suggests informing the help desk.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Outlook sends the automatic response in the user's name. | Found: Searched: new Outlook reply with template inbox rule sender identity external automatic repeat replies limits. Read MC1505607, the roadmap, policy-management and emulate-out-of-office-assistant; none identifies the sending identity for this new feature. | Fix: Remove 'in the user's name' from the sentence; neither the roadmap nor MC1505607 states the sending identity.
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing: Licence / licensing: Using Outlook for Windows with a Microsoft 365 organisational email address requires a plan including desktop Microsoft 365 apps, without stating the secondary-account exception. | Found: Once you add an account with a qualifying license to Outlook, you can add secondary accounts with licenses for products that don't include the desktop apps such as Business Basic or E1. | Fix: Add this qualification to the licensing notes and Licence paragraph: 'Once an account with a qualifying desktop-app licence is added, secondary accounts can use licences without desktop apps, such as Business Basic or E1.' Keep the licensing model included and cite https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options
- [contradicted, blocker] Cost and licensing: Licence / licensing: The new Outlook licensing page does not address Outlook on the web. | Found: The Business Basic plan provides access to productivity tools through the web and mobile versions of Outlook and Microsoft 365. | Fix: Replace 'That page covers the new Outlook for Windows app; it does not address Outlook on the web.' with 'The page also states that Business Basic provides access to the web and mobile versions of Outlook and Microsoft 365.' | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options
- [contradicted, blocker] Why it matters; front matter: changes / absence: The Inbox Rules mailbox-policy setting is the one existing lever and the only documented control. | Found: Use the Disable-InboxRule cmdlet to disable existing Inbox rules in mailboxes. | Fix: Change 'The one existing lever is the Inbox Rules setting' to 'An existing lever is the Inbox Rules setting' in Why it matters. In the change note, replace 'as the only documented control' with 'as a documented control'. Retain the narrower statement that no separate switch for availability of this action alone is documented. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/disable-inboxrule?view=exchange-ps
-->
