---
title: "Power Automate: AI-assisted UI automation repair in the desktop flow designer"
slug: "power-automate-ai-assisted-ui-automation-repair"
roadmapId: 577869
desk: "power-platform"
products: ["Power Automate","Microsoft Copilot (Microsoft 365)"]
summary: "A debug run in Power Automate for desktop validates each UI selector and proposes a replacement when one fails, after the maker captures the element."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "July CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Learn lists the Copilot in Power Automate admin setting as the prerequisite."
audiences: ["power-platform-admin","maker","service-owner"]
tags: ["power-automate","desktop-flows","ui-automation","selectors","copilot-in-power-automate","debugging"]
sources:
  - title: "Microsoft 365 Roadmap item 577869"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577869"
    kind: "roadmap"
  - title: "AI-assisted UI automation repair (preview)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair"
    kind: "learn"
  - title: "Repair flow automation errors (preview)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/repair-at-runtime"
    kind: "learn"
videos: []
related: ["power-platform-maker-guidelines-copilot-studio","managed-environments"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577869 with Learn guidance on the preview."
version: 1
---

## What's changing

Microsoft is adding an agentic debug run to the Power Automate flow designer. The maker chooses **Run with AI-assisted UI Automation Repair**, and a repair interface opens while the flow runs. It validates each selector that the flow uses to locate a UI element.

When a selector does not work, the interface asks the maker to capture the intended element for reference. It then proposes a new selector. Learn describes a step in which the maker reviews, edits and tests the proposal, and can then accept it, recapture the element or skip it.

The roadmap lists a preview from July CY2026 and general availability in March CY2027, for Worldwide (Standard Multi-Tenant) on the web. Learn documents the preview and says it needs Power Automate for desktop version 2.70 or later.

## Why it matters

Broken selectors are a common cause of failed UI automation after an application or web page changes. A guided repair loop at design time can reduce the support effort for maintaining desktop flows.

For service owners the question is data handling and consistency: element hierarchy information is sent to an AI service, and repaired selectors change the behaviour of production flows once saved.

## Risk assessment

**Data exposure**
- UI element details from the target application are used to propose selectors. Confirm which applications and screens makers may capture.

**Security & identity**
- Runs under the maker's own session. No new identity or permission model is described.

**Autonomy & actions**
- The maker must capture the element and accept the proposal. Skipping with no error handling stops the debug run.

**Change & support**
- Accepted selectors alter flow behaviour. Review changes through your normal solution and ALM process.

## Cost and licensing

No separate licence or meter is published. Learn lists enabling Copilot in Power Automate in the Power Platform admin center as the prerequisite. Pricing for general availability is not yet published; watch for changes to Copilot Credits or licence requirements.

## Scope

Makers building UI and browser automation in Power Automate for desktop, version 2.70 or later. Roadmap cloud: Worldwide (Standard Multi-Tenant) only. Platform: web. Learn notes that Copilot in Power Automate for desktop has had regional and account-type limits in earlier preview features, so check current availability.

## Governance guidance

### Before rollout
- [ ] Decide whether makers may use AI-assisted repair, and record the decision.
- [ ] Check the Copilot in Power Automate setting for each environment.
- [ ] Identify desktop flows that touch sensitive applications.

### At rollout
- [ ] Enable the setting for a pilot group of makers first.
- [ ] Brief makers to review every proposed selector before accepting it.

### After rollout
- [ ] Review saved selector changes in solution history.
- [ ] Collect maker feedback on repair accuracy before wider use.

## Admin controls

In the Power Platform admin center, go to Copilot > Settings, then under Power Automate select Copilot in Power Automate and turn it on. Separate repair-at-runtime settings exist for the earlier Repair with Copilot feature. No dedicated switch for this debug run has been published.

## Open questions

- Will general availability need a separate licence or consume Copilot Credits?
- Which regions and languages will be supported at general availability?
- Is a dedicated admin control planned beyond the Copilot in Power Automate setting?

<!-- rationale
risk: Low. The repair runs in the maker's design session, needs a person to capture and accept each selector, and is governed by the existing Copilot in Power Automate setting.
cost: Low. No separate licence is published; the cost is maker time and the Copilot in Power Automate setting. Pricing is not yet published for general availability.
impact: Low. It affects makers who build UI and browser automation in desktop flows, not end users or flow consumers.
-->
