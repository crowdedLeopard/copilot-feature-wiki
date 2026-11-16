---
title: "Power Apps: Dataverse custom APIs in generative pages"
slug: "power-apps-use-dataverse-custom-apis-in-generative-pages"
roadmapId: 576284
topic: "power-platform"
products: ["Power Apps"]
summary: "Makers can point a model-driven generative page at a Dataverse custom API so the page runs server-side business logic such as approving an order or validating a transaction."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn states no additional AI or message credits are needed for the generative pages maker experience. Standard Power Apps and Dataverse licensing applies."
audiences: ["maker","power-platform-admin","service-owner"]
tags: ["power-apps","generative-pages","dataverse","custom-api","model-driven-apps","plug-ins"]
sources:
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576284"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576284"
    kind: "roadmap"
videos: []
related: ["power-apps-use-power-platform-connectors-in-generative-pages","power-apps-expand-model-access-and-maker-studio-availability-for-generative-pages-via-gith"]
confidence: "high"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse custom APIs in generative pages, in development."
version: 1
---

## What's changing

Makers can add a Dataverse custom API to a generative page. In the page designer they choose **Add** then **Custom API**, select a prepared API from the environment, and describe in the prompt when the page should call it, which values to pass and how to use the response. For example, an Approve button that calls an `ApproveOrder` API.

Global and table-bound actions and functions are supported. When a page is embedded on a form, the agent can use the current record as input for a table-bound API. Custom APIs using the EntityCollection binding type or Entity parameters are not supported.

The roadmap gives a preview from October 2026 and general availability in December 2026 (generative page version 307), in model-driven apps in Worldwide, GCC and GCC High.

## Why it matters

This moves generative pages from displaying data to triggering business operations. Service owners should treat it as a path by which AI-generated front-end code reaches existing server-side logic, so the quality of the custom API and its security role checks matter more.

It also encourages teams to expose approval or pricing logic as custom APIs, which increases the number of callable operations in an environment.

## Risk assessment

**Data exposure**
- Custom APIs run in the context of the signed-in user and are subject to Dataverse security, so existing roles continue to apply.

**Security & identity**
- The generated React code decides when to call the API; Learn says the maker remains responsible for validating generated code.

**Autonomy & actions**
- Pages can call operations that update records or approve items, so a mistaken prompt could wire an action to the wrong trigger.

**Change & support**
- Preview feature, not meant for production use. Generated code and plug-ins both need ALM and testing.

## Cost and licensing

Learn states that the generative pages maker experience does not need additional AI or message credits. Plug-in development, testing and any Dataverse API request consumption follow existing licensing. Anything specific to custom API calls from generative pages is not yet published.

## Scope

Model-driven apps only. Worldwide, GCC and GCC High per the roadmap. In-browser authoring is limited to environments in the United States, Great Britain, Australia or Singapore; AI code generation tools are available more widely on public clouds.

## Governance guidance

### Before rollout
- [ ] Inventory custom APIs and confirm each enforces its own authorisation checks.
- [ ] Restrict who may create custom APIs and plug-ins in production.
- [ ] Decide whether generative pages that call custom APIs need a code review step.

### At rollout
- [ ] Test pages in a development environment with representative security roles.
- [ ] Review generated code before publishing.

### After rollout
- [ ] Monitor custom API usage and failures.
- [ ] Review pages that call state-changing APIs when the API changes.

## Admin controls

No tenant-level switch is documented for this capability. Control sits with Dataverse security roles, who can create custom APIs and plug-ins, and who can edit model-driven apps. Admins can also manage solutions that carry generative pages between environments.

## Open questions

- Will an admin setting be added to disable custom API use in generative pages?
- Which limitations (EntityCollection and Entity parameters) will be lifted at general availability?
- How will custom API calls appear in auditing?

<!-- rationale
risk: Medium. A generated page can invoke server-side logic that changes data, although custom APIs run as the signed-in user and are subject to Dataverse security.
cost: Low. Learn says the generative pages maker experience needs no extra AI or message credits; custom API plug-in development is the main effort.
impact: Low. It affects makers and developers building model-driven apps; end users see only the resulting page.
-->
