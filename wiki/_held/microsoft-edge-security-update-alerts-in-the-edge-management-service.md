---
title: "Microsoft Edge: security update alerts with a severity threshold in the Edge management service"
slug: "microsoft-edge-security-update-alerts-in-the-edge-management-service"
roadmapId: 558435
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "The Edge management service monitoring dashboard can alert administrators to new Edge security updates at or above a severity threshold they choose. The existing notify-on-every-update behaviour stays by default; no action is required."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "April CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn page for the monitoring dashboard states no licence for security update alerts. Its sibling page lists the Microsoft Edge Administrator role as a prerequisite for the Edge management service and no licence."
audiences: ["m365-admin","security","service-owner"]
tags: ["microsoft-edge","m365-admin-center","monitoring","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 558435"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558435"
    kind: "roadmap"
  - title: "Monitoring dashboard"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-monitoring-dashboard"
    kind: "learn"
  - title: "Get started with configuration policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    kind: "learn"
  - title: "MC1458480: (Updated) Microsoft Edge: Security Update Alerts in the Edge management service"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1458480"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Minimum severity threshold for security update alerts"
    scope: "tenant"
    ui: null
    api: null
    note: "The Monitoring dashboard page says a threshold can be configured but gives no path or API. Requires access to the Edge management service."
  - governs: "Access to the Edge management service in the admin centre"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    api: null
    note: "Needs the Microsoft Edge Administrator role. GDAP roles are not fully supported. Gives access to the service, not a setting for alerts."
  - governs: "Whether browsers check in with the Edge management service"
    scope: "tenant"
    ui: null
    api:
      kind: "other"
      call: "Set the Edge policy EdgeManagementEnabled to 0 (disabled)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    note: "General control: Microsoft has not confirmed it affects security update alerts. Learn describes it as disabling the check for configuration policies."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-17"
    note: "New briefing on Edge security update alerts with a configurable severity threshold, now Launched; the threshold setting's location is not yet documented."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 59 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 53
  unconfirmed: 3
  contradicted: 3
  attempts: 1
  hash: "3c6d62dcf7caf62ec204bd8a6aef9272"
---

## What's changing

The monitoring dashboard in the Microsoft Edge management service can now raise an alert when a newly released Edge update contains security fixes at or above a severity level an administrator chooses, including zero-day fixes. The roadmap item describes the aim as helping organisations identify updates that may need attention while avoiding notifications for routine releases.

Microsoft Learn describes the alert as appearing in the monitoring dashboard. Each alert shows the Edge version released and its release date, the highest security severity among the vulnerabilities addressed, the CVEs (Common Vulnerabilities and Exposures) addressed, the number of affected managed devices by channel, and the latest available version by channel (Stable, Extended Stable, Beta, Dev and Canary). From the alert, an administrator can review the update details and act to get devices onto the latest version.

Microsoft's notice MC1458480 says the existing experience that notifies admins of all new Edge updates remains by default, that no action is taken on the administrator's behalf, and that admins can now choose when they want to receive new update notifications. It also says rollout begins mid-October 2026 (previously mid-September) and is expected to finish by end of October 2026 (previously end of September). The roadmap record shows the item as Launched, with a General Availability target of October CY2026 and a preview date of April CY2026.

The Learn page says monitoring data is currently available only for Windows devices, although the roadmap record lists the platform as Web. Microsoft Learn does not say where the threshold setting is changed or what the available severity levels are.

## Why it matters

Edge is a browser that handles untrusted content on every managed device, so the gap between a security fix shipping and devices running it is an exposure. The threshold lets a service owner tune the signal: a low threshold keeps the volume of the current all-updates experience, and a higher one narrows alerts to the more serious fixes, including zero-day fixes. That is a decision about how much attention the security team gives to Edge releases, and the wiki's view is that it should be made deliberately rather than left to a default.

If nobody acts, MC1458480 says the existing experience of notifying admins of all new Edge updates remains. Nothing in the sources says devices are updated or restarted automatically because of an alert, so the alert informs the decision and the update still has to be acted on.

## Risk assessment

**Data exposure**

- The monitoring dashboard needs the **Enable version monitoring** toggle turned on, and Learn calls this a mandatory step so Microsoft Edge receives diagnostic data. The two options either send optional diagnostic data without URL data or with URL data, so the choice made there decides what browsing data leaves the device. Alerts depend on that choice rather than adding to it, but the Learn page does not say that alerts specifically require this toggle, so confirm it.
- Device update information is deleted from the Edge management service if a device has not sent data for 30 days, so devices that are offline for longer drop out of the affected-device counts.

**Security & identity**

- A threshold set too high could hide a release an organisation would want to know about, because alerts are generated only for fixes that meet or exceed the configured level. Choose it with the severity levels Microsoft documents in front of you, which Learn does not list.
- Access to the Edge management service requires the Microsoft Edge Administrator role, and Learn notes that GDAP roles are currently not fully supported.

**Autonomy & actions**

- Learn says the alert lets an administrator take action to get devices to the latest version. The same page's update actions are **Force auto restart when device is idle** (which can cause loss of content input) and **Recommend restart**. Microsoft Learn does not say an alert triggers either action on its own.

**Change & support**

- Monitoring data is currently only available for Windows devices, so macOS, iOS and Android devices will not appear in the dashboard counts.
- Alerts are described as appearing in the monitoring dashboard; Learn does not document email or other notification channels, so the helpdesk and security team should not assume one.

## Cost and licensing

Microsoft Learn does not state a licence or charge for security update alerts. The monitoring dashboard page gives no licence requirement, and the Learn page on the Edge management service lists the Microsoft Edge Administrator role, a minimum Edge version and a supported operating system as its prerequisites, naming no licence for the service itself. The same page says an Intune licence is needed to create an Intune-type configuration policy, which is a separate feature from alerts.

No meter is documented for this feature at the time of writing (November 2026), and the licensing model is Not yet published. The cost the sources show is admin time to choose and revisit a threshold and to respond to alerts. Sources: the Monitoring dashboard and Get started with configuration policies pages on Microsoft Learn.

## Scope

The roadmap record lists the audience as Worldwide (Standard Multi-Tenant), with the platform listed as Web and the release phases as General Availability and Preview. The Learn page for the Edge management service says it is currently not available to customers with GCC plans. Microsoft's notice MC1458480 says rollout begins mid-October 2026 and is expected to complete by end of October 2026.

To use the service you need Microsoft Edge 115.0.1901.7 or greater and the Microsoft Edge Administrator role, and the browser must be on a supported operating system (Windows, macOS, iOS or Android). The monitoring dashboard states that monitoring data is currently only available for Windows devices. Microsoft Learn does not say which licences, if any, a user needs for their device to be counted.

## Governance guidance

### Before rollout

- Confirm who in your organisation holds the Microsoft Edge Administrator role, and note that Learn says GDAP roles are currently not fully supported.
- Decide which severity level should generate an alert, and who is responsible for acting on alerts, before changing anything from the default.
- Check whether the **Enable version monitoring** toggle on the monitoring dashboard is on and which diagnostic data option your privacy team has approved.

### At rollout

- Open the Edge management service in the Microsoft 365 admin center and look for the severity threshold option on the monitoring dashboard, because Learn does not give its location.
- Set the threshold once the available levels are visible, and record the value and the reason for it.

### After rollout

- Check the first alerts you receive against the severity you chose, to confirm the threshold surfaces the fixes you expect.
- Review affected devices by channel in each alert and decide whether to use **Recommend restart** or **Force auto restart when device is idle** for devices that are out of date.
- Revisit the threshold after any Edge release that you judged to have been missed or over-reported.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Minimum severity threshold for security update alerts</strong><br><small>Tenant</small><br><small class="controls__note">The Monitoring dashboard page says a threshold can be configured but gives no path or API. Requires access to the Edge management service.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Access to the Edge management service in the admin centre</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Microsoft Edge Administrator role. GDAP roles are not fully supported. Gives access to the service, not a setting for alerts.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether browsers check in with the Edge management service</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it affects security update alerts. Learn describes it as disabling the check for configuration policies.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>Set the Edge policy EdgeManagementEnabled to 0 (disabled)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn says an administrator can configure a minimum severity threshold, but at the time of writing (November 2026) it documents neither the admin centre path for it nor an API for it, so the first row records that gap. The Edge management service is reached from the Microsoft 365 admin center under **Settings** > **Microsoft Edge**, and the Microsoft Edge Administrator role is needed to access it.

The EdgeManagementEnabled policy controls whether signed-in Edge browsers check in with the Edge management service for their policies. Microsoft has not said whether it affects monitoring data or alerts, so treat it as a general control and test before relying on it. The **Enable version monitoring** toggle on the monitoring dashboard is the documented prerequisite for seeing device insights on that page.

## Open questions

- Where in the Microsoft 365 admin center is the severity threshold set, and which severity levels can be chosen? Watch the Monitoring dashboard page on Microsoft Learn.
- Are alerts delivered anywhere other than the monitoring dashboard, such as email or Message center, and can recipients be chosen?
- Does the alert feature need the **Enable version monitoring** toggle, and so the diagnostic data it sends, or does it work without it?
- Is a licence required for security update alerts, and will the monitoring dashboard extend beyond Windows devices?

<!-- rationale
risk: Low. This is a new alerting control that reads nothing new by itself, and Microsoft's notice MC1458480 says the existing experience that notifies admins of all new Edge updates remains by default.
cost: Low. The only cost the sources show is admin time to choose a threshold; Microsoft Learn lists an admin role, not a licence, as the access prerequisite, and no meter is documented for this feature at the time of writing (November 2026).
impact: Low. Only administrators who use the Edge management service see the alerts; end users are not mentioned in the roadmap item, the Message Center post or the Learn page.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].ui; Governance controls: browser check-in row / absence: The EdgeManagementEnabled browser check-in control has no documented admin UI. | Found: GP name: Microsoft Edge management enabled; GP path (Mandatory): Administrative Templates/Microsoft Edge/Manageability; GP ADMX file name: MSEdge.admx | Fix: Replace controls[2].ui null and the matching table gap with surface 'Group Policy (ADMX)', path 'Administrative Templates > Microsoft Edge > Manageability > Microsoft Edge management enabled', and docs https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgemanagementenabled. Qualify this UI as Windows-only. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgemanagementenabled
- [unsupported, blocker] Risk assessment: Data exposure, first bullet / applicability: Security update alerts depend on the version-monitoring diagnostic-data choice rather than adding to it. | Found: Searched: "Microsoft Edge" "monitoring" "alerts" "diagnostic"; "Edge management service" "security update alerts" "data collection". Opened Monitoring dashboard and configuration policies; no text states this alert-specific dependency or data boundary. | Fix: Remove 'Alerts depend on that choice rather than adding to it, but' and start the remaining clause 'The Learn page does not say that alerts specifically require this toggle, so confirm it.' The current assertion also conflicts with the uncertainty stated in Open questions.
- [unsupported, major] Why it matters, first paragraph / behaviour: A low severity threshold preserves the notification volume of the existing all-updates experience. | Found: Searched: "security update alerts" "all updates" threshold Edge. Opened Monitoring dashboard; read the Stable release-note passage and MC1458480. Sources describe security-fix filtering but do not say a low threshold reproduces all-update notifications. | Fix: Replace 'a low threshold keeps the volume of the current all-updates experience, and a higher one narrows alerts to the more serious fixes, including zero-day fixes' with 'a configured threshold limits alerts to updates containing security fixes that meet or exceed that severity level, including zero-day fixes'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: risk / behaviour: The new alerting control reads nothing new by itself. | Found: Searched: "Edge management service" "security update alerts" "data collection"; "Microsoft Edge" "monitoring" "alerts" "diagnostic". Opened Monitoring dashboard and configuration policies; neither establishes that alerts introduce no additional data reads. | Fix: Remove 'that reads nothing new by itself' from the risk rationale. Keep the supported statement that MC1458480 preserves the existing all-updates notification experience by default.
- [contradicted, minor] Governance guidance: Before rollout, third bullet / consistency: The checklist tells administrators to check Enable version monitoring and its diagnostic-data option, but the controls table has no corresponding row. | Found: Check whether the Enable version monitoring toggle on the monitoring dashboard is on and which diagnostic data option your privacy team has approved. The table covers only the severity threshold, service access and browser check-in. | Fix: The Before rollout step about Enable version monitoring and diagnostic-data selection has no controls-table row. Remove that checklist bullet; retain the documented explanation in Risk assessment.
- [contradicted, minor] Governance guidance: After rollout, second bullet / consistency: The checklist asks administrators to consider Recommend restart and Force auto restart when device is idle, but neither control appears in the controls table. | Found: Review affected devices by channel in each alert and decide whether to use Recommend restart or Force auto restart when device is idle for devices that are out of date. Neither action has a controls-table row. | Fix: The After rollout step naming the restart actions has no corresponding controls-table rows. Narrow that bullet to 'Review affected devices by channel in each alert.'
-->
