---
title: "Power Automate: bring your own connection in attended and unattended cloud-triggered desktop flow runs"
slug: "power-automate-bring-your-own-connection-in-attended-unattended-cloud-triggered-runs"
roadmapId: 579907
topic: "power-platform"
products: ["Power Automate"]
summary: "Microsoft plans to let people bring their own connections to shared desktop flows run from the cloud, without embedded connection references. No admin setting or licence is documented yet; makers and flow owners are affected."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Learn's page on cloud connectors in desktop flows says premium connectors need an Attended RPA licence and that a free work or school account can use standard connectors."
audiences: ["power-platform-admin","maker","service-owner"]
tags: ["power-automate","desktop-flows","connection-references","connectors","sharing"]
sources:
  - title: "Microsoft 365 Roadmap 579907"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579907"
    kind: "roadmap"
  - title: "Cloud connectors as Power Automate for desktop actions"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/actions-reference/cloudconnectors"
    kind: "learn"
  - title: "Share desktop flows that contain connector actions"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/how-to/share-desktop-flows-that-contain-connector-actions"
    kind: "learn"
  - title: "Use connector actions in desktop flows"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/how-to/use-connector-actions"
    kind: "learn"
  - title: "Data loss prevention (DLP) policies"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/data-loss-prevention"
    kind: "learn"
videos: []
related: ["power-automate-credentials-integration-with-delinea-secret-server","power-automate-desktop-flow-libraries"]
controls:
  - governs: "Which connection references are embedded in a shared desktop flow for cloud-initiated runs"
    scope: "other"
    ui:
      surface: "Power Automate (maker)"
      path: "desktop flow > Details > Connection references > Manage > Embedded in desktop flow"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/actions-reference/cloudconnectors"
    api: null
    note: "Maker-side; owners and co-owners only, and only for connection references you own. Today's mechanism, not the new feature. Learn documents no API for it at the time of writing (November 2026)."
  - governs: "Tenant or environment switch for bring your own connection in cloud runs"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-18"
    note: "First briefing for this roadmap item; Microsoft Learn does not yet describe the feature, so it rests on the roadmap text and today's connection reference documentation."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected three held statements: data-policy applicability now cites the desktop-flow DLP page, the 'only related control' wording is removed, and the scope note now reflects the roadmap's plan to remove the embedded-reference requirement."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 52 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7395bcf28683d0b8e9d4aa974e4489f6"
---

## What's changing

The roadmap item describes a way to bring your own connections in shared desktop flows that include connector operations and need to run in attended or unattended mode, so that cloud runs no longer depend on embedded connection references. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description.

Today, Learn documents the opposite requirement. A desktop flow invoked from a cloud flow must use the Power Automate v2 schema, and a co-owner's flow must have all of its connection references marked as embedded. Embedding is a per-reference setting (**Embedded in desktop flow**) that lets other co-owners use the underlying connection in the scope of that shared flow. Run-only users, by contrast, can only run a shared flow through the Power Automate for desktop console, using their own connections.

The roadmap lists the item as In development, with a target of March CY2027, release phase General Availability, platform Desktop and the Worldwide (Standard Multi-Tenant) cloud. No preview date is given. The dates are Microsoft's targets, not commitments.

## Why it matters

Connections are specific to a user, and Learn says sharing a desktop flow does not automatically provide access to the connections it uses. Embedding is how co-owners currently share a connection for cloud-initiated runs, so a change that removes the need for it changes who supplies the credentials behind connector actions in those runs. Microsoft has not yet said how that works, so the decision to take is which account's connection a given run should use.

Microsoft has not stated what happens on arrival, and no source says existing behaviour changes. Review shared desktop flows that use connector actions once Learn documents the feature.

## Risk assessment

**Data exposure**
- Connector actions in desktop flows read and write whatever the underlying connection can reach. Today, Learn says embedding gives co-owners access to the data behind an embedded connection. Which connection a cloud run would use under bring your own connection is not yet described, so confirm that before relying on it.

**Security & identity**
- Learn describes each connection as specific to a user and authenticated, typically with OAuth or API keys. How bring your own connection chooses, stores or prompts for a connection in an unattended run is not described. Confirm this with Microsoft's documentation before approving any flow that uses a shared or personal account.
- Learn documents no admin setting for bring your own connection in cloud runs at the time of writing (November 2026).

**Autonomy & actions**
- Connector actions in a flow act under a connection, so the account behind it determines what a run can change. Microsoft has not described how that applies to unattended cloud runs under bring your own connection.

**Change & support**
- Learn lists known limitations that already affect these flows: when a solution containing a desktop flow with embedded connection references is imported, the required connection references are not automatically included and must be added to the solution explicitly. Whether bring your own connection changes this is not stated.

## Cost and licensing

Licensing for this feature is not yet published. The roadmap item names no licence, meter or price.

On today's Learn page for cloud connectors in desktop flows, premium connectors need an Attended RPA licence, and a free work or school account can use standard connectors. That page describes connector actions in general, not this feature, so do not read it as the licence for bring your own connection in cloud runs.

Indirect cost is maker and admin time to review shared flows and connection references.

## Scope

The roadmap lists Power Automate, platform Desktop, release phase General Availability and the Worldwide (Standard Multi-Tenant) cloud. Other clouds are not listed on the roadmap item; that is a record fact and not a statement that the feature is unavailable there.

It concerns shared desktop flows that include connector operations and run in attended or unattended mode from the cloud. Learn's current prerequisites for cloud-initiated runs are the Power Automate v2 schema and, for co-owners, embedded connection references. The roadmap plans to remove the embedded-reference requirement; whether the Power Automate v2 schema requirement remains is not stated.

Learn lists the connectors added to desktop flows by default (including Microsoft Dataverse, SharePoint, Office 365 Outlook and Microsoft Teams) and says other non-custom Power Automate cloud connectors can be added through the Assets library. Which connectors the new capability covers is not stated.

## Governance guidance

### Before rollout
- Inventory shared desktop flows that use connector actions, and list who owns each connection and which connection references are embedded, using each flow's **Details** > **Connection references** > **Manage** screen (see the controls table).
- Check that flows meant for cloud-initiated runs use the Power Automate v2 schema, which Learn gives as a current requirement.
- Ask makers to record which account each connection belongs to, so that a later change to who supplies the connection can be reviewed.

### At rollout
- Watch the Microsoft 365 message center and the Learn page on cloud connectors in desktop flows for documentation of bring your own connection in cloud runs; no such page exists at the time of writing (November 2026).
- Confirm with Microsoft's documentation, once published, which connection an unattended cloud run uses before moving any flow away from embedded connection references.

### After rollout
- Review connector actions in unattended flows for the permissions of the connection behind them, and remove embedded references you no longer need, where you own the underlying connection.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connection references are embedded in a shared desktop flow for cloud-initiated runs</strong><br><small class="controls__note">Maker-side; owners and co-owners only, and only for connection references you own. Today's mechanism, not the new feature. Learn documents no API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Power Automate (maker)</strong><br>desktop flow › Details › Connection references › Manage › Embedded in desktop flow <a href="https://learn.microsoft.com/power-automate/desktop-flows/actions-reference/cloudconnectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch for bring your own connection in cloud runs</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The embedding control is maker-side: a co-owner can embed or remove only the connection references they own, and other co-owners manage only those they added. Embedding is a setting of the individual shared desktop flow; Learn describes it as available to other co-owners only in the scope of that flow.

A tenant or environment switch for bring your own connection in cloud runs is not documented, and no API for the embedding setting is documented, at the time of writing (November 2026). Existing desktop-flow data policies classify or block action groups; a desktop flow suspended for a policy violation cannot run, including through a cloud flow. See [Data loss prevention (DLP) policies](https://learn.microsoft.com/power-automate/desktop-flows/data-loss-prevention).

## Open questions

- Which user's connection does a cloud-triggered attended or unattended run use under bring your own connection, and who chooses it? Watch the Learn page on cloud connectors in desktop flows.
- Is any admin setting planned for turning bring your own connection on or off per tenant or environment, or restricting it by connector?
- Does the feature need a licence or meter beyond the Attended RPA licence Learn names for premium connectors? Watch Message center.
- Do existing embedded connection references and the Power Automate v2 schema requirement stay in place after the change, and what does Microsoft ask admins to do, if anything?

<!-- rationale
risk: Medium. Microsoft has not described whose connection a cloud-triggered run uses once embedded connection references are not needed, and Learn documents no admin setting for it at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin and maker time; a licence or meter for this feature is not yet published. Premium connectors in desktop flows need an Attended RPA licence on today's Learn page.
impact: Medium. Makers and co-owners of shared desktop flows that use connector actions, and the people who run them, would notice; users who do not use such flows would not.
-->
